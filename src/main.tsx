import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./index.css";

/**
 * GA4, loaded only when VITE_GA4_ID is set, and only in the browser — the
 * pre-render pass must not try to load a tag. Key events are sent from
 * src/lib/submitLead.ts on a genuine send, never on form submit, so a
 * failed delivery can't be counted as a conversion.
 *
 * `gtag` must go on `window`, and must push the `arguments` object rather
 * than an array. This is the shape gtag.js actually reads: pushing a plain
 * object like `{ event: "generate_lead" }` is Tag Manager's convention and
 * gtag.js ignores it silently — the event simply never arrives, and the
 * property reports zero key events while looking correctly installed.
 */
const GA4_ID = import.meta.env.VITE_GA4_ID as string | undefined;
if (typeof window !== "undefined" && GA4_ID) {
  const w = window as unknown as {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  };
  w.dataLayer = w.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  w.gtag = function gtag() {
    w.dataLayer.push(arguments);
  };
  /* Consent Mode v2 defaults, set BEFORE config so they apply to the very
     first hit.

     New Zealand's Privacy Act 2020 has no equivalent of the GDPR/PECR
     prior-consent gate for analytics cookies, so this site does not show a
     cookie banner — that is a deliberate decision for an NZ-audience site,
     not an oversight, and it is the reason QA gate item L2.4 is closed
     without a consent UI.

     But the site is reachable from anywhere, and the categories that
     actually carry legal weight elsewhere are the advertising ones. Those
     are denied outright: this property runs no remarketing and no ads
     personalisation, so denying them costs nothing and means an EU or UK
     visitor is never enrolled in advertising storage without consent.
     Analytics storage stays granted — it is what the property is for, and
     GA4 anonymises IPs by default.

     If remarketing is ever added, this block must become a real consent
     banner before the first ad tag ships. */
  w.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "granted",
  });
  w.gtag("js", new Date());
  w.gtag("config", GA4_ID, { anonymize_ip: true });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(s);
}

// vite-react-ssg owns the router: at build time it walks `routes`, renders
// each static path to its own HTML file, and on the client it hydrates the
// same tree. There is deliberately no BrowserRouter here — creating one
// would give the client a second, conflicting router.
/**
 * `basename` must track Vite's base, not be hardcoded to "/".
 *
 * The public site is served from a domain root, so base is "/" and this is a
 * no-op. The internal preview is served from a project Pages path
 * (/digitalmovement-nz-internal/), and there the pre-rendered HTML is correct
 * but React Router — knowing nothing about the prefix — matches the incoming
 * pathname against routes declared at "/", finds nothing, and falls through to
 * the "*" NotFound route. The page renders fine until hydration, then blanks
 * to a 404. Deriving it from BASE_URL keeps both deployments correct.
 */
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

export const createRoot = ViteReactSSG({ routes, basename: basename || undefined });
