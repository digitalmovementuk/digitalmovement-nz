import { startLive, type CardStrings, type RouteDef } from "./scene";
import type { RouteKey } from "./timeline";

/**
 * The card, mounted from an element rather than from a component.
 *
 * Two sites run this scene. digitalmovement.co.nz is React and mounts it from
 * <ContactDemo>. The WordPress twin at nz.digitalmovement.uk is built from this
 * site's static output with React stripped out — over there the same <div>
 * arrives with nothing behind it.
 *
 * So the settings travel in the markup, as a JSON `data-contactdemo`
 * attribute, and both sides mount from that one object. Nothing about the card
 * is decided twice, which is the only way two builds of the same thing stay the
 * same thing.
 */

export type StandaloneConfig = {
  routes: RouteDef[];
  avatarSrc: string;
  brandName: string;
  replyPromise: string;
  service: string;
  formTarget: string;
  emailAddress: string;
  title: string | false;
  titleTag: string;
  barHeading: string;
  revealAfterLeaving: string | null;
  /** Reported with the click event, so hero and in-page cards can be told apart. */
  placement: string;
  /** Wording overrides — this is how the German site speaks German without a
   *  second copy of the scene. Absent, the card speaks English. */
  strings?: Partial<CardStrings>;
};

/**
 * Johnny's build counts these through a WordPress plugin of his own. Both of
 * ours send them to the GA4 property already on the page instead: no new
 * endpoint, no second store of visitor data, and nothing new to disclose.
 *
 * `gtag` buffers into dataLayer, so a click before the tag finishes loading is
 * held rather than lost. Where there is no GA4 id configured there is no gtag
 * at all, and the optional call is simply a no-op.
 */
function report(key: RouteKey, placement: string): void {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", "contact_route_click", { method: key, placement });
}

/** Mounts one card. Returns the teardown. */
export function mountConfigured(root: HTMLElement, config: StandaloneConfig): () => void {
  // The button grid takes its column count from the routes, so a two-route card
  // is not two buttons adrift in a four-column grid.
  root.style.setProperty("--knopf-spalten", String(config.routes.length));
  return startLive(root, {
    ...config,
    onRouteClick: (key: RouteKey) => report(key, config.placement),
  });
}

/**
 * Mounts every card on the page and returns one teardown for all of them.
 *
 * Elements already carrying a mounted scene are skipped, so calling this twice
 * — or after a fragment of the page is replaced — cannot stack two animations
 * on one card.
 */
export function mountAll(scope: ParentNode = document): () => void {
  const stops: Array<() => void> = [];
  scope.querySelectorAll<HTMLElement>("[data-contactdemo]").forEach((el) => {
    if (el.dataset.contactdemoMounted === "1") return;
    const raw = el.getAttribute("data-contactdemo");
    if (!raw) return;
    let config: StandaloneConfig;
    try {
      // Percent-encoded at the source so no HTML pipeline between there and
      // here can end the attribute early on a quote — see ContactDemo.tsx.
      config = JSON.parse(decodeURIComponent(raw)) as StandaloneConfig;
    } catch {
      // A malformed attribute must leave the page alone rather than take the
      // rest of the script down with it — the card is an addition to the page,
      // never a precondition for it.
      return;
    }
    el.dataset.contactdemoMounted = "1";
    const stop = mountConfigured(el, config);
    stops.push(() => {
      delete el.dataset.contactdemoMounted;
      stop();
    });
  });
  return () => stops.forEach((s) => s());
}
