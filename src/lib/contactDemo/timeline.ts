/**
 * Timeline of the hero contact demo. Pure logic, no DOM.
 *
 * The entire visible state depends on ONE input: the elapsed millisecond.
 * That is not a style preference — it is what makes the scene reproducible.
 * Nothing here reads the clock, and nothing on screen is driven by a CSS
 * animation or a running counter, so asking for time 4210 twice always draws
 * the same frame. The moment a bubble or a caret gets its own CSS animation,
 * that guarantee is gone and the scene drifts against itself.
 *
 * All times are stored as DURATIONS in SEQUENCE. Inside a phase everything is
 * measured relative to that phase's start, never against an absolute
 * millisecond. Stretching one scene is then a single number, not a dozen
 * timestamps that have to be re-added by hand.
 */

/** The four ways a visitor can reach us, in the order they are demonstrated. */
export type RouteKey = "form" | "wa" | "mail" | "tel";

/** Where the pointer can travel. Names, not coordinates — see cursorAt(). */
export type CursorTarget = RouteKey | "idle" | "fieldName" | "fieldPhone" | "submit";

export type Phase = { name: string; from: number; to: number; ms: number };

/** How long each scene stays on screen once its button has been clicked. */
const SCENE_MS: Record<RouteKey, number> = {
  form: 6800, // type, send, then let the confirmation rest
  wa: 7500, // type a message, watch the reply arrive, time to read it
  mail: 5500, // subject, body, send
  tel: 5000, // rings visibly, gets answered, call stands
};

const ENTER_MS = 700; // pointer travels in from off-stage
const CLICK_MS = 800;
const RETURN_MS = 700; // pointer travels from one button to the next
const RESET_MS = 900;

/**
 * Builds the running order for whichever routes are actually available.
 *
 * Deliberately not a fixed 13-phase table: Digital Movement NZ publishes no
 * phone number yet, and a hardcoded sequence would have demonstrated a button
 * that cannot be shown. Feed it two routes and it plays two scenes.
 */
export function buildPhases(routes: RouteKey[]): Phase[] {
  const out: Phase[] = [];
  let t = 0;
  const push = (name: string, ms: number) => {
    out.push({ name, from: t, to: t + ms, ms });
    t += ms;
  };

  push("idle", ENTER_MS);
  routes.forEach((route, i) => {
    push(`click-${route}`, CLICK_MS);
    push(`scene-${route}`, SCENE_MS[route]);
    if (i < routes.length - 1) push(`return-${i}`, RETURN_MS);
  });
  push("reset", RESET_MS);
  return out;
}

/**
 * Copy that is typed out on screen. It depends on the service of the page it
 * sits on, so it comes from outside; the timeline only knows the lengths and
 * the moments.
 */
export type DemoCopy = {
  name: string;
  phone: string;
  chat: string;
  mailSubject: string;
  mailBody: string;
};

export function copyFor(service: string): DemoCopy {
  return {
    name: "Sam Wilson",
    phone: "021 123 4567",
    chat: `Hi, I'd like to ask about ${service}. What does it cost?`,
    mailSubject: `Enquiry: ${service}`,
    mailBody: "Hi — here's my website. What's worth fixing first?",
  };
}

/*
 * PACE: every scene runs at reading speed. Flowing text types at roughly 20
 * characters a second, short fields at roughly 10. Faster looks frantic and
 * nobody reads along; this is an invitation, not a speed run.
 */
const CALL_ANSWERED = 2800; // it rings visibly for this long first
const CALL_RING_MS = 620; // one ring cycle

const CHAT_TYPE_FROM = 400;
const CHAT_TYPE_TO = 3800;
const CHAT_MSG1 = 4000;
const CHAT_TYPING_FROM = 4300;
const CHAT_MSG2 = 5500; // leaves 2.0s to read the reply

const MAIL_SUBJECT_FROM = 300;
const MAIL_SUBJECT_TO = 1550;
const MAIL_BODY_FROM = 1700;
const MAIL_BODY_TO = 4400;
const MAIL_SENT = 4650;

const BUBBLE_IN_MS = 280; // bubbles arrive softly rather than snapping on

const F_TO_FIELD = 500; // pointer into the name field
const F_NAME_TO = 2100;
const F_TO_PHONE_FROM = 2100;
const F_TO_PHONE_TO = 2300;
const F_PHONE_TO = 3400;
const F_TO_SUBMIT_TO = 3700;
const F_PRESS_FROM = 3700;
const F_PRESS_TO = 3950;
const F_THANKS_FROM = 4000;
const F_THANKS_TO = 4350; // then it stands until the phase ends: ~2.45s

/** Panel fade, kept inside its own phase so the panel type never switches
 *  while the panel is still visible. */
const FADE_MS = 180;

/*
 * ENTRANCE OF THE DEMONSTRATED BUTTONS
 *
 * Resting state is EMPTY: no button stands on the stage. For each scene
 * exactly the one button being discussed steps forward, gets clicked and
 * withdraws again. It comes from the direction of its real counterpart in the
 * bar below, and it goes back the same way — the movement itself is the
 * message: the real buttons are down there.
 *
 * The entrance begins BEFORE the click phase, during the 700ms run-up while
 * the pointer is travelling: the button has to be standing there when the
 * pointer arrives, not after.
 */
const BTN_LEAD_IN = 700;
const BTN_OUT_MS = 450;
const BTN_BACK_FROM = 560; // measured from the click phase start; the click
const BTN_BACK_TO = 1010; // pulse ends at +480, so it withdraws after it

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const ratio = (ms: number, from: number, to: number) => clamp((ms - from) / (to - from));
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

/** Short impulse: rises to 1 and falls back to 0. For the key press. */
const impulse = (rel: number, from: number, to: number) => Math.sin(ratio(rel, from, to) * Math.PI);

function typed(text: string, rel: number, from: number, to: number): string {
  if (rel < from) return "";
  return text.slice(0, Math.floor(ratio(rel, from, to) * (text.length + 1)));
}

export type DemoState = {
  phase: string;
  cursor: { from: CursorTarget; to: CursorTarget; t: number; opacity: number; click: number };
  /** Which button is stepping forward, and how far (0 = gone, 1 = fully there). */
  buttons: { route: RouteKey | null; entrance: number };
  active: RouteKey | null;
  panel: { kind: RouteKey | null; opacity: number };
  call: { connected: boolean; ringing: number };
  chat: { typed: string; bubbles: [number, number]; typing: boolean; typingOpacity: number };
  mail: { subject: string; body: string; sent: boolean };
  form: { name: string; phone: string; pressed: number; thanks: number; sent: boolean };
};

/**
 * The scene as a function of time. `routes` must be the same list the phases
 * were built from.
 */
export function stateAt(
  rawMs: number,
  phases: Phase[],
  routes: RouteKey[],
  copy: DemoCopy,
): DemoState {
  const total = phases[phases.length - 1].to;
  // Negative-safe modulo so the loop reads cleanly in both directions.
  const ms = ((rawMs % total) + total) % total;
  const p = phases.find((x) => ms >= x.from && ms < x.to) ?? phases[phases.length - 1];
  const rel = ms - p.from;

  const scene = p.name.startsWith("scene-") ? (p.name.slice(6) as RouteKey) : null;
  const inCall = scene === "tel";
  const inChat = scene === "wa";
  const inMail = scene === "mail";
  const inForm = scene === "form";
  // Once the confirmation fades in, the typing is over.
  const submitted = inForm && rel >= F_THANKS_FROM;

  const path = cursorAt(p, rel, routes);
  const panel = panelAt(p, ms, scene);

  return {
    phase: p.name,
    cursor: {
      from: path.from,
      to: path.to,
      t: path.t,
      // Where the pointer merely stands, it leaves with the buttons. In the
      // form it walks field to field and stays until the confirmation is up —
      // it has no business hovering over a thank-you message.
      opacity: inCall || inChat || inMail || submitted ? 1 - panel.opacity : 1,
      click: p.name.startsWith("click-") ? ratio(ms, p.from + 80, p.from + 480) : 0,
    },
    buttons: buttonEntranceAt(ms, phases),
    active: scene ?? (p.name.startsWith("click-") ? (p.name.slice(6) as RouteKey) : null),
    panel,
    call: {
      connected: inCall && rel >= CALL_ANSWERED,
      // The handset shakes while it rings. Derived from the sine of the time,
      // not from a CSS animation — same time in, same picture out.
      ringing: inCall && rel < CALL_ANSWERED ? Math.sin((rel / CALL_RING_MS) * 2 * Math.PI) : 0,
    },
    chat: {
      typed: inChat && rel < CHAT_MSG1 ? typed(copy.chat, rel, CHAT_TYPE_FROM, CHAT_TYPE_TO) : "",
      bubbles: [
        inChat ? ratio(rel, CHAT_MSG1, CHAT_MSG1 + BUBBLE_IN_MS) : 0,
        inChat ? ratio(rel, CHAT_MSG2, CHAT_MSG2 + BUBBLE_IN_MS) : 0,
      ],
      typing: inChat && rel >= CHAT_TYPING_FROM && rel < CHAT_MSG2,
      typingOpacity: inChat
        ? Math.min(
            ratio(rel, CHAT_TYPING_FROM, CHAT_TYPING_FROM + 180),
            1 - ratio(rel, CHAT_MSG2 - 140, CHAT_MSG2),
          )
        : 0,
    },
    mail: {
      subject: inMail ? typed(copy.mailSubject, rel, MAIL_SUBJECT_FROM, MAIL_SUBJECT_TO) : "",
      body: inMail ? typed(copy.mailBody, rel, MAIL_BODY_FROM, MAIL_BODY_TO) : "",
      sent: inMail && rel >= MAIL_SENT,
    },
    form: {
      name: inForm ? typed(copy.name, rel, F_TO_FIELD, F_NAME_TO) : "",
      phone: inForm ? typed(copy.phone, rel, F_TO_PHONE_TO, F_PHONE_TO) : "",
      pressed: inForm ? impulse(rel, F_PRESS_FROM, F_PRESS_TO) : 0,
      thanks: inForm ? ratio(rel, F_THANKS_FROM, F_THANKS_TO) : 0,
      sent: submitted,
    },
  };
}

/**
 * Path of the pointer, as a pair of NAMES plus progress 0..1. Consecutive
 * phases share their boundary points, so no jumps appear. The progress is
 * already eased; the renderer only has to mix between two measured points.
 *
 * Names, not percentages: where a target sits depends on the format — the form
 * panel lands somewhere else in portrait than in landscape. Measured
 * percentages used to go quietly wrong on every layout change and put the
 * pointer beside the field instead of on it.
 */
function cursorAt(
  p: Phase,
  rel: number,
  routes: RouteKey[],
): { from: CursorTarget; to: CursorTarget; t: number } {
  const whole = easeInOut(ratio(rel, 0, p.ms));
  const stand = (where: CursorTarget) => ({ from: where, to: where, t: 1 });
  const first = routes[0];
  const last = routes[routes.length - 1];

  if (p.name === "idle") return { from: "idle", to: first, t: whole };
  if (p.name === "reset") return { from: last, to: "idle", t: whole };

  if (p.name.startsWith("return-")) {
    const i = Number(p.name.slice(7));
    // After the form scene the pointer is left on the send button, not on the
    // button that opened it.
    const leaving: CursorTarget = routes[i] === "form" ? "submit" : routes[i];
    return { from: leaving, to: routes[i + 1], t: whole };
  }

  if (p.name === "scene-form") {
    // The pointer walks the entry: name field, phone field, send.
    if (rel < F_TO_FIELD) return { from: "form", to: "fieldName", t: easeInOut(ratio(rel, 0, F_TO_FIELD)) };
    if (rel < F_TO_PHONE_FROM) return stand("fieldName");
    if (rel < F_TO_PHONE_TO)
      return { from: "fieldName", to: "fieldPhone", t: easeInOut(ratio(rel, F_TO_PHONE_FROM, F_TO_PHONE_TO)) };
    if (rel < F_PHONE_TO) return stand("fieldPhone");
    return { from: "fieldPhone", to: "submit", t: easeInOut(ratio(rel, F_PHONE_TO, F_TO_SUBMIT_TO)) };
  }

  // click-X and the remaining scenes: the pointer simply stands on its button.
  const route = p.name.startsWith("click-") ? p.name.slice(6) : p.name.slice(6);
  return stand(route as CursorTarget);
}

function panelAt(p: Phase, ms: number, scene: RouteKey | null) {
  if (!scene) return { kind: null, opacity: 0 };
  const inFade = ratio(ms, p.from, p.from + FADE_MS);
  const outFade = 1 - ratio(ms, p.to - FADE_MS, p.to);
  return { kind: scene, opacity: Math.min(inFade, outFade) };
}

/**
 * Which button is on stage and how far forward it has stepped.
 *
 * Computed against absolute time rather than the current phase, because one
 * entrance spans three phases: it starts in the run-up while the pointer is
 * travelling, lasts through the click phase, and ends inside the scene.
 */
function buttonEntranceAt(ms: number, phases: Phase[]): { route: RouteKey | null; entrance: number } {
  for (const p of phases) {
    if (!p.name.startsWith("click-")) continue;
    const route = p.name.slice(6) as RouteKey;
    const from = p.from - BTN_LEAD_IN;
    const to = p.from + BTN_BACK_TO;
    if (ms < from || ms >= to) continue;
    const out = easeInOut(ratio(ms, from, from + BTN_OUT_MS));
    const back = easeInOut(ratio(ms, p.from + BTN_BACK_FROM, p.from + BTN_BACK_TO));
    return { route, entrance: out * (1 - back) };
  }
  return { route: null, entrance: 0 };
}
