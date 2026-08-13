/**
 * The hero contact demo as a DOM scene.
 *
 * mount(root) builds the markup once; renderAt(ms) then writes the complete
 * state for exactly that millisecond. renderAt is deliberately stateless — it
 * never reads the current DOM, it always writes every property. That is what
 * keeps the loop from drifting and what lets the scene be scrubbed to any
 * point and look the same.
 *
 * Two layers, kept apart on purpose:
 *
 *   STAGE — the film. The buttons in it are props: they step forward, get
 *           clicked, and give way to the call, the chat, the email or the
 *           form.
 *   BAR   — the real thing. The same routes as real links, fixed under the
 *           stage, always visible, always clickable.
 *
 * Without that split the whole card reads as a video in which nothing can be
 * clicked. The contrast between the moving demonstration above and the still
 * bar below is what makes the difference legible.
 *
 * Written as direct DOM rather than React on purpose: this writes inline
 * styles on ~20 nodes every animation frame, which is exactly the work React's
 * reconciler is built to avoid doing and would charge us for sixty times a
 * second.
 */

import {
  buildPhases,
  copyFor,
  stateAt,
  type CursorTarget,
  type DemoCopy,
  type Phase,
  type RouteKey,
} from "./timeline";

const SVG_TEL =
  '<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';

const SVG_WA =
  '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

/* Call back: an incoming call — the same handset outline and the same stroke
   weight as the phone icon so the four buttons read as one family. The arrow
   pointing inwards says: the call comes to you. */
const SVG_BACK =
  '<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 8.5h-5v-5"/><path d="M15.5 8.5 22 2"/><path d="M10.1 4.2a1.7 1.7 0 0 1 1.7 1.5c.1.9.3 1.7.6 2.5a1.7 1.7 0 0 1-.4 1.8L10.7 11.3a13.5 13.5 0 0 0 5 5l1.3-1.3a1.7 1.7 0 0 1 1.8-.4c.8.3 1.6.5 2.5.6a1.7 1.7 0 0 1 1.5 1.7v2.6a1.7 1.7 0 0 1-1.9 1.7A16.8 16.8 0 0 1 5 6.1a1.7 1.7 0 0 1 1.7-1.9z"/></svg>';

const SVG_MAIL =
  '<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M3 7.5l9 6 9-6"/></svg>';

const ICONS: Record<RouteKey, string> = {
  form: SVG_BACK,
  wa: SVG_WA,
  mail: SVG_MAIL,
  tel: SVG_TEL,
};

export type RouteDef = {
  key: RouteKey;
  label: string;
  href: string;
  /** Opens in a new tab (WhatsApp web). */
  newTab?: boolean;
  aria: string;
};

export type MountOptions = {
  /** Ordered left to right. The demonstration follows the same order. */
  routes: RouteDef[];
  /** Circular mark shown in every scene, so all four read as one sender. */
  avatarSrc: string;
  brandName: string;
  replyPromise: string;
  /** Service of the page. Appears in the typed message and the mail subject. */
  service: string;
  /** Where the "Call back" route scrolls to. */
  formTarget: string;
  emailAddress: string;
  title: string | false;
  /** 'div' in the hero, where the page H1 already sits alongside. */
  titleTag: string;
  barHeading: string;
  /** Fired when a REAL button is used, for analytics. Never for the props. */
  onRouteClick?: (key: RouteKey) => void;
};

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function markup(o: MountOptions): string {
  const button = (r: RouteDef, real: boolean) => {
    const cls = real ? `ctademo-echt ctademo-echt-${r.key}` : `ctademo-btn ctademo-btn-${r.key}`;
    const labelCls = real ? "ctademo-echt-label" : "ctademo-label";
    // The props are hidden from assistive tech and from the tab order: the row
    // below carries the same four links for real. Announcing both would read
    // the contact options out twice.
    const a11y = real ? `aria-label="${esc(r.aria)}"` : 'tabindex="-1" aria-hidden="true"';
    const tab = r.newTab ? ' target="_blank" rel="noopener"' : "";
    return `<a class="${cls}" data-route="${r.key}"${real ? ' data-real="1"' : ` data-prop="${r.key}"`} href="${esc(r.href)}"${tab} ${a11y}>
      <span class="ctademo-knopf">${ICONS[r.key]}</span><span class="${labelCls}">${esc(r.label)}</span>
    </a>`;
  };

  return `
<div class="ctademo">
${o.title ? `<${o.titleTag} class="ctademo-titel">${esc(o.title)}</${o.titleTag}>` : ""}
<div class="ctademo-buehnenhuelle">
<div class="ctademo-buehne">
  <div class="ctademo-chip" data-chip>
    <img class="ctademo-mark" src="${esc(o.avatarSrc)}" alt="" width="56" height="56">
    <span><b>${esc(o.brandName)}</b>${esc(o.replyPromise)}</span>
  </div>

  <div class="ctademo-panel ctademo-call" data-panel="tel">
    <img class="ctademo-mark" src="${esc(o.avatarSrc)}" alt="" width="128" height="128">
    <b>${esc(o.brandName)}</b>
    <span class="ctademo-status" data-status>Calling &hellip;</span>
    <div class="ctademo-calltasten"><i class="gruen" data-handset>${SVG_TEL}</i></div>
  </div>

  <div class="ctademo-panel ctademo-chat" data-panel="wa">
    <div class="ctademo-chat-kopf">
      <img class="ctademo-mark" src="${esc(o.avatarSrc)}" alt="" width="34" height="34">
      <b>${esc(o.brandName)}</b><span class="ctademo-online">online</span>
    </div>
    <div class="ctademo-verlauf">
      <div class="ctademo-blase ctademo-blase-ich" data-msg="1" data-chatbubble></div>
      <div class="ctademo-antwort">
        <img class="ctademo-mark" src="${esc(o.avatarSrc)}" alt="" width="28" height="28" data-reply-avatar>
        <div class="ctademo-tippt" data-typing><i></i><i></i><i></i></div>
        <div class="ctademo-blase ctademo-blase-er" data-msg="2">Send us your website and we&rsquo;ll tell you what&rsquo;s worth fixing first.</div>
      </div>
    </div>
    <div class="ctademo-eingabe" data-input><span data-chattext></span></div>
  </div>

  <div class="ctademo-panel ctademo-mail" data-panel="mail">
    <div class="ctademo-mail-kopf">
      <span class="ctademo-mail-an">To</span>
      <img class="ctademo-mark" src="${esc(o.avatarSrc)}" alt="" width="26" height="26">
      <b>${esc(o.emailAddress)}</b>
    </div>
    <div class="ctademo-mail-zeile"><i>Subject</i><span data-mailsubject></span></div>
    <div class="ctademo-mail-text" data-mailbody></div>
    <span class="ctademo-submit" data-mailsend>Send</span>
    <div class="ctademo-ok" data-mailok>&#10003; Email sent</div>
  </div>

  <div class="ctademo-panel ctademo-form" data-panel="form">
    <div class="ctademo-formfelder" data-formfields>
      <div class="ctademo-owner">
        <img class="ctademo-mark" src="${esc(o.avatarSrc)}" alt="" width="64" height="64">
        <span><b>${esc(o.brandName)}</b>${esc(o.replyPromise)}</span>
      </div>
      <label>Name<span class="ctademo-feld" data-field="name"></span></label>
      <label>Phone<span class="ctademo-feld" data-field="phone"></span></label>
      <span class="ctademo-submit" data-submit>Request a call back</span>
    </div>

    <div class="ctademo-danke" data-thanks>
      <span class="ctademo-haken">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"
             stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5.5 5.5L20 7"/></svg>
      </span>
      <b>Thanks &mdash; that&rsquo;s with us</b>
      <span>${esc(o.replyPromise)}<br>${esc(o.brandName)}</span>
    </div>
  </div>

  <div class="ctademo-btns" data-btns>
    ${o.routes.map((r) => button(r, false)).join("")}
  </div>

  <div class="ctademo-cursor" data-cursor aria-hidden="true"><span class="ctademo-puls" data-pulse></span></div>
</div>
</div>
<div class="ctademo-leiste">
  <div class="ctademo-leiste-kopf">${esc(o.barHeading)}</div>
  <div class="ctademo-leiste-btns">
    ${o.routes.map((r) => button(r, true)).join("")}
  </div>
</div>
</div>`;
}

type Els = {
  root: HTMLElement;
  stage: HTMLElement;
  bar: HTMLElement | null;
  chip: HTMLElement;
  cursor: HTMLElement;
  pulse: HTMLElement;
  status: HTMLElement;
  typing: HTMLElement;
  handset: HTMLElement;
  thanks: HTMLElement;
  formFields: HTMLElement;
  submit: HTMLElement;
  fields: { name: HTMLElement; phone: HTMLElement };
  chatText: HTMLElement;
  chatBubble: HTMLElement;
  input: HTMLElement;
  mailSubject: HTMLElement;
  mailBody: HTMLElement;
  mailSend: HTMLElement;
  mailOk: HTMLElement;
  btnsWrap: HTMLElement;
  props: Partial<Record<RouteKey, HTMLElement>>;
  panels: Partial<Record<RouteKey, HTMLElement>>;
  bubbles: HTMLElement[];
  replyAvatar: HTMLElement;
};

export type Scene = { renderAt: (ms: number) => void; duration: number; destroy: () => void };

export function mount(root: HTMLElement, o: MountOptions): Scene {
  const routes = o.routes.map((r) => r.key);
  const phases = buildPhases(routes);
  const copy = copyFor(o.service);

  root.innerHTML = markup(o);
  // Carries the transition and the waiting state. Its own class rather than
  // the root's, because the root's class is set by whoever places the card.
  root.classList.add("ctademo-traeger");

  const q = <T extends HTMLElement = HTMLElement>(sel: string) => root.querySelector(sel) as T;
  const el: Els = {
    root,
    stage: q(".ctademo-buehne"),
    bar: root.querySelector(".ctademo-leiste"),
    chip: q("[data-chip]"),
    cursor: q("[data-cursor]"),
    pulse: q("[data-pulse]"),
    status: q("[data-status]"),
    typing: q("[data-typing]"),
    handset: q("[data-handset]"),
    thanks: q("[data-thanks]"),
    formFields: q("[data-formfields]"),
    submit: q("[data-submit]"),
    fields: { name: q('[data-field="name"]'), phone: q('[data-field="phone"]') },
    chatText: q("[data-chattext]"),
    chatBubble: q("[data-chatbubble]"),
    input: q("[data-input]"),
    mailSubject: q("[data-mailsubject]"),
    mailBody: q("[data-mailbody]"),
    mailSend: q("[data-mailsend]"),
    mailOk: q("[data-mailok]"),
    btnsWrap: q("[data-btns]"),
    props: {},
    panels: {},
    bubbles: [...root.querySelectorAll<HTMLElement>("[data-msg]")],
    replyAvatar: q("[data-reply-avatar]"),
  };
  for (const key of routes) {
    el.props[key] = root.querySelector<HTMLElement>(`[data-prop="${key}"]`) ?? undefined;
    el.panels[key] = root.querySelector<HTMLElement>(`[data-panel="${key}"]`) ?? undefined;
  }
  el.chatBubble.textContent = copy.chat;

  const cleanup = wireLinks(root, o);

  return {
    renderAt: (ms: number) => renderAt(el, ms, phases, routes, copy),
    duration: phases[phases.length - 1].to,
    destroy: cleanup,
  };
}

/**
 * Only "Call back" is intercepted — it scrolls to the form. Everything else
 * fires its action directly. Routing every click through the form turned the
 * click into a delayed navigation, which stopped WhatsApp opening in a new tab
 * and put a second's lag in front of a phone call.
 */
function wireLinks(root: HTMLElement, o: MountOptions): () => void {
  const off: Array<() => void> = [];

  for (const link of root.querySelectorAll<HTMLAnchorElement>("a[data-route]")) {
    const key = link.dataset.route as RouteKey;
    const isReal = link.dataset.real === "1";

    const onClick = (ev: MouseEvent) => {
      // Only the real bar reports. The props are part of the film; counting
      // them would inflate every contact metric on the page.
      if (isReal) o.onRouteClick?.(key);

      if (key !== "form") return;
      const target = document.querySelector(o.formTarget);
      if (!target) return;
      ev.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      target.classList.remove("ist-angesprungen");
      void (target as HTMLElement).offsetWidth;
      target.classList.add("ist-angesprungen");
    };

    link.addEventListener("click", onClick);
    off.push(() => link.removeEventListener("click", onClick));
  }

  return () => off.forEach((fn) => fn());
}

/**
 * Where the pointer's targets actually are, in percent of the stage. Measured
 * rather than estimated: the form panel sits differently in portrait than in
 * landscape, and fixed values would go quietly wrong on every layout change.
 */
function targetPoints(el: Els, routes: RouteKey[]): Partial<Record<CursorTarget, { x: number; y: number }>> | null {
  const b = el.stage.getBoundingClientRect();
  if (!b.width || !b.height) return null;
  const centre = (node: Element) => {
    const r = node.getBoundingClientRect();
    return {
      x: ((r.left + r.width / 2 - b.left) / b.width) * 100,
      y: ((r.top + r.height / 2 - b.top) / b.height) * 100,
    };
  };
  const pts: Partial<Record<CursorTarget, { x: number; y: number }>> = {
    // Off-stage: where the pointer comes from and where it goes.
    idle: { x: 108, y: 112 },
    fieldName: centre(el.fields.name),
    fieldPhone: centre(el.fields.phone),
    submit: centre(el.submit),
  };
  for (const key of routes) {
    const node = el.props[key];
    if (node) pts[key] = centre(node);
  }
  return pts;
}

/** Safety margin so the row really disappears behind the edge. */
const SINK_PADDING = 14;

function renderAt(el: Els, ms: number, phases: Phase[], routes: RouteKey[], copy: DemoCopy) {
  const z = stateAt(ms, phases, routes, copy);

  // How far the row has to travel to vanish past the edge. Measured from the
  // layout rather than hardcoded: the stage is a different height in each
  // format and the row sits at a different depth.
  const stageBox = el.stage.getBoundingClientRect();
  const rowBox = el.btnsWrap.getBoundingClientRect();
  // The direction follows the layout, it is not configured: the props always
  // withdraw towards where the real bar actually is. A switch would be a
  // setting you set in one place and forget in the other; measured, it cannot
  // be wrong.
  const barBox = el.bar?.getBoundingClientRect();
  const toTheRight = !!barBox && barBox.left >= stageBox.right - 1;
  const distance = toTheRight
    ? Math.max(0, stageBox.right - rowBox.left) + SINK_PADDING
    : Math.max(0, stageBox.bottom - rowBox.top) + SINK_PADDING;

  const pts = targetPoints(el, routes);
  const a = pts?.[z.cursor.from];
  const b = pts?.[z.cursor.to];
  if (a && b) {
    el.cursor.style.left = `${a.x + (b.x - a.x) * z.cursor.t}%`;
    el.cursor.style.top = `${a.y + (b.y - a.y) * z.cursor.t}%`;
  }
  el.cursor.style.opacity = String(z.cursor.opacity);
  // The ring grows only just past the button. Any wider and it runs off the
  // stage in the narrow format.
  el.pulse.style.transform = `translate(-50%, -50%) scale(${1 + z.cursor.click * 0.55})`;
  el.pulse.style.opacity = String(z.cursor.click > 0 ? (1 - z.cursor.click) * 0.9 : 0);

  // Exactly ONE prop button stands on the stage: the one this scene is about.
  // It steps out from the direction of its real counterpart, gets clicked, and
  // withdraws the same way. The other three stay away — they are down in the
  // bar for real, they do not need to be seen twice.
  for (const key of routes) {
    const node = el.props[key];
    if (!node) continue;
    const entrance = z.buttons.route === key ? z.buttons.entrance : 0;
    // Only one axis is ever set: the buttons sit in a grid, and an extra
    // translate(-50%) would have shifted them by half a column.
    const travel = (1 - entrance) * distance;
    node.style.transform = `translate${toTheRight ? "X" : "Y"}(${travel}px)`;
    // Fully opaque: the button travels, it does not dissolve. Fading it would
    // have swallowed the movement, which is the actual message here.
    node.style.opacity = "1";
    node.classList.toggle("ist-aktiv", z.active === key);
    // Anyone who sees the prop button takes it for clickable, so it is. While
    // it stands behind the edge it catches nothing, so nobody hits thin air.
    node.style.pointerEvents = entrance > 0.5 ? "auto" : "none";
  }

  for (const key of routes) {
    const panel = el.panels[key];
    if (!panel) continue;
    const open = z.panel.kind === key;
    panel.style.opacity = open ? String(z.panel.opacity) : "0";
    panel.style.visibility = open && z.panel.opacity > 0.01 ? "visible" : "hidden";
    // Slight rise on entry, derived from the opacity alone.
    panel.style.transform = `translate(-50%, -50%) translateY(${open ? (1 - z.panel.opacity) * 14 : 14}px)`;
  }

  // The mark holds the stage whenever no panel is open, so the resting state
  // is a statement rather than an empty area. That matters for
  // prefers-reduced-motion, where this exact frame is all anyone sees.
  el.chip.style.opacity = String(Math.max(0, 1 - z.panel.opacity * 2.5));

  el.status.textContent = z.call.connected ? "Connected 00:03" : "Calling …";
  el.panels.tel?.classList.toggle("ist-verbunden", z.call.connected);
  el.handset.style.transform = `rotate(${z.call.ringing * 26}deg) scale(${1 + Math.abs(z.call.ringing) * 0.12})`;

  for (const bubble of el.bubbles) {
    const entrance = z.chat.bubbles[Number(bubble.dataset.msg) - 1] ?? 0;
    bubble.style.opacity = String(entrance);
    bubble.style.transform = `translateY(${(1 - entrance) * 10}px) scale(${0.96 + entrance * 0.04})`;
  }
  el.typing.style.opacity = String(z.chat.typingOpacity);
  el.replyAvatar.style.opacity = z.chat.typing || z.chat.bubbles[1] > 0 ? "1" : "0";
  el.chatText.textContent = z.chat.typed;
  el.input.classList.toggle("hat-caret", z.chat.typed.length > 0);
  el.input.classList.toggle("ist-leer", z.chat.typed.length === 0);

  el.mailSubject.textContent = z.mail.subject;
  el.mailBody.textContent = z.mail.body;
  el.mailSubject.classList.toggle("hat-caret", z.mail.subject.length > 0 && z.mail.body.length === 0);
  el.mailBody.classList.toggle("hat-caret", z.mail.body.length > 0 && !z.mail.sent);
  el.mailSend.classList.toggle("ist-gedrueckt", z.mail.sent);
  el.mailOk.style.opacity = z.mail.sent ? "1" : "0";

  el.fields.name.textContent = z.form.name;
  el.fields.phone.textContent = z.form.phone;
  el.fields.name.classList.toggle("hat-caret", z.form.name.length > 0 && z.form.name.length < copy.name.length);
  el.fields.phone.classList.toggle("hat-caret", z.form.phone.length > 0 && !z.form.sent);
  const press = z.form.pressed;
  el.submit.style.transform = `scale(${1 - press * 0.06})`;
  el.submit.classList.toggle("ist-gedrueckt", press > 0.35 || z.form.sent);
  // One after the other, not on top of each other: the fields clear first,
  // then the confirmation steps up. A true crossfade leaves both texts
  // legible at the midpoint, which looks restless.
  const t = z.form.thanks;
  const fieldsOut = Math.min(1, t / 0.45);
  const thanksIn = Math.max(0, (t - 0.5) / 0.5);
  el.formFields.style.opacity = String(1 - fieldsOut);
  el.thanks.style.opacity = String(thanksIn);
  el.thanks.style.transform = `scale(${0.96 + thanksIn * 0.04})`;
}

export type LiveOptions = MountOptions & {
  /**
   * Selector of the element the card waits behind. The card only appears once
   * the visitor has scrolled that element out of view and come back — see
   * showAfterReturn(). Desktop only.
   */
  revealAfterLeaving?: string | null;
};

/**
 * Runs the scene on the page: the same renderAt the scene is built around,
 * driven by requestAnimationFrame.
 *
 * Two courtesies: the loop only runs while the stage is on screen, and under
 * prefers-reduced-motion it stays a still frame.
 */
export function startLive(root: HTMLElement, o: LiveOptions): () => void {
  const scene = mount(root, o);
  scene.renderAt(0);

  // In the hero the card should not simply be sitting there. Someone who has
  // just arrived is not handing over their phone number yet. It appears once
  // they have left the hero and come back — that is, after they have engaged
  // with the page. The space stays reserved throughout so nothing jumps when
  // it turns up.
  //
  // DESKTOP ONLY. There the card sits BESIDE the hero and would be in view
  // immediately; on a phone it sits below it, and anyone who sees it has
  // scrolled already. Waiting there would only mean an empty area on the way
  // past. Same threshold as the split hero: two columns from 1024px.
  let watcher: IntersectionObserver | undefined;
  if (o.revealAfterLeaving && window.matchMedia("(min-width: 1024px)").matches) {
    watcher = showAfterReturn(root, o.revealAfterLeaving);
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {
      watcher?.disconnect();
      scene.destroy();
    };
  }

  let running = false;
  let t0 = 0;
  let raf = 0;

  const tick = (t: number) => {
    if (!t0) t0 = t;
    scene.renderAt(t - t0); // renderAt does the modulo itself
    raf = requestAnimationFrame(tick);
  };

  const inView = new IntersectionObserver(
    (entries) => {
      const visible = entries[0].isIntersecting;
      if (visible && !running) {
        running = true;
        t0 = 0;
        raf = requestAnimationFrame(tick);
      } else if (!visible && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    },
    { threshold: 0.25 },
  );
  inView.observe(root);

  return () => {
    cancelAnimationFrame(raf);
    inView.disconnect();
    watcher?.disconnect();
    scene.destroy();
  };
}

/**
 * Reveals the card only after the observed element has been out of view once
 * and comes back.
 */
function showAfterReturn(root: HTMLElement, selector: string): IntersectionObserver | undefined {
  const target = root.closest(selector) ?? document.querySelector(selector);
  if (!target || !("IntersectionObserver" in window)) return undefined;

  root.classList.add("ctademo-wartet");
  // Three steps, not two: the hero has to have been in view at all first.
  // Otherwise an element that is invisible for some other reason already
  // counts as "left" and the card appears immediately.
  let wasIn = false;
  let wasOut = false;

  const observer = new IntersectionObserver(
    (entries) => {
      const inside = entries[0].isIntersecting;
      if (inside && !wasIn) {
        wasIn = true;
        return;
      }
      if (!inside && wasIn) {
        wasOut = true;
        return;
      }
      if (inside && wasOut) {
        root.classList.remove("ctademo-wartet");
        observer.disconnect();
      }
    },
    // The hero counts as "left" once only a third of it is still on screen —
    // the visitor has scrolled two thirds of it away. At a 15% threshold they
    // had to lose almost the whole hero, and the card turned up too late on
    // the way back.
    { threshold: 1 / 3 },
  );

  observer.observe(target);
  return observer;
}
