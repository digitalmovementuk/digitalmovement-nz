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
  w.gtag("js", new Date());
  w.gtag("config", GA4_ID);
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(s);
}

// vite-react-ssg owns the router: at build time it walks `routes`, renders
// each static path to its own HTML file, and on the client it hydrates the
// same tree. There is deliberately no BrowserRouter here — creating one
// would give the client a second, conflicting router.
export const createRoot = ViteReactSSG({ routes });
