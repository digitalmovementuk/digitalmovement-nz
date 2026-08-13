import { useEffect, useRef } from "react";
import { business, contactChannels } from "../content";
import { startLive, type RouteDef } from "../lib/contactDemo/scene";
import type { RouteKey } from "../lib/contactDemo/timeline";

/**
 * The four ways to reach us, demonstrated and then offered for real.
 *
 * Why this exists: the site had exactly one way in — the contact form at the
 * bottom of the page. People who would rather ring, message or email had to
 * either hunt for an address or leave. The card shows each route working
 * before it asks anyone to use it, and the row underneath is the real thing.
 *
 * React mounts it and gets out of the way. The scene writes inline styles on
 * about twenty nodes per animation frame, which is precisely the work the
 * reconciler exists to avoid; see src/lib/contactDemo/scene.ts.
 */

/** The heading counts the routes, so it can never claim four when two shipped.
 *  Only 2–4 are reachable: the form and email routes are always present, and
 *  the phone routes arrive together. */
const COUNT_WORD: Record<number, string> = { 2: "Two", 3: "Three", 4: "Four" };

type Props = {
  /** Service this page is about. Lands in the typed message and the subject. */
  service?: string;
  /** Heading inside the card. Left out, it counts the routes. `false` drops it. */
  title?: string | false;
  /** 'div' where a page H1 already sits alongside it, so the outline is not
   *  given a second level that is really just a label. */
  titleTag?: string;
  /** Line directly above the real buttons — says what to do. */
  barHeading?: string;
  /** Selector the card waits behind before appearing. Desktop only. */
  revealAfterLeaving?: string | null;
  className?: string;
};

function mailHref(service: string): string {
  const body = [
    `Hi ${business.name},`,
    "",
    `I'd like to ask about ${service}.`,
    "",
    "My website:",
    "What I sell:",
    "Where I sell it:",
    "",
    "Thanks",
  ].join("\n");
  return `${business.emailHref}?subject=${encodeURIComponent(
    `Enquiry: ${service}`,
  )}&body=${encodeURIComponent(body)}`;
}

/**
 * Builds the route list from what the business actually publishes.
 *
 * Order, left to right: Call back, WhatsApp, Email, Call — the demonstration
 * runs in the same direction. Routes with no data are left out rather than
 * shipped as dead links; see contactChannels in src/content.ts.
 */
function buildRoutes(service: string): RouteDef[] {
  const phone = contactChannels.phoneE164;
  const routes: RouteDef[] = [
    {
      key: "form",
      label: "Call back",
      href: contactChannels.formTarget,
      aria: "Request a call back — jumps to the form",
    },
  ];

  if (phone) {
    routes.push({
      key: "wa",
      label: "WhatsApp",
      href: `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
        `Hi, I'd like to ask about ${service}.`,
      )}`,
      newTab: true,
      aria: `Message ${business.name} on WhatsApp`,
    });
  }

  routes.push({
    key: "mail",
    label: "Email",
    href: mailHref(service),
    // The address itself, not a number: the label reads it out for anyone on
    // a screen reader without them having to open the mail client to find out
    // where it goes.
    aria: `Email ${business.email}`,
  });

  if (phone) {
    routes.push({
      key: "tel",
      label: "Call",
      href: `tel:${phone.replace(/[^0-9+]/g, "")}`,
      // Deliberately no number in the label. Until the NZ line is confirmed,
      // nothing on this page states a phone number as fact.
      aria: `Call ${business.name}`,
    });
  }

  return routes;
}

export function ContactDemo({
  service = "digital marketing",
  title,
  titleTag = "h2",
  barHeading = "Pick one — we reply in one working day",
  revealAfterLeaving = null,
  className = "dm-contactdemo",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const routes = buildRoutes(service);
    // Grid columns come from the number of routes, so a two-route card is not
    // two buttons floating in a four-column grid.
    root.style.setProperty("--knopf-spalten", String(routes.length));

    return startLive(root, {
      routes,
      avatarSrc: `${import.meta.env.BASE_URL}brand/motif-positive.png`,
      brandName: business.name,
      replyPromise: "We reply in one working day",
      service,
      formTarget: contactChannels.formTarget,
      emailAddress: business.email,
      title:
        title === undefined
          ? `${COUNT_WORD[routes.length] ?? routes.length} ways to reach us`
          : title,
      titleTag,
      barHeading,
      revealAfterLeaving,
      onRouteClick: (key: RouteKey) => {
        // Johnny's build logs these through a WordPress plugin. This site is
        // static, so they go to the GA4 property that is already loaded — no
        // new endpoint, no new consent surface. gtag is defined in main.tsx
        // and buffers into dataLayer, so a call before consent is granted is
        // held rather than lost.
        const w = window as unknown as { gtag?: (...args: unknown[]) => void };
        w.gtag?.("event", "contact_route_click", {
          method: key,
          placement: revealAfterLeaving ? "hero" : "page",
        });
      },
    });
  }, [service, title, titleTag, barHeading, revealAfterLeaving]);

  return <div ref={ref} className={className} />;
}
