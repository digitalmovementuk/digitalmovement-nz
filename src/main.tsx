import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./index.css";

/**
 * GA4, loaded only when VITE_GA4_ID is set, and only in the browser — the
 * pre-render pass must not try to load a tag. Key events are pushed from
 * src/lib/submitLead.ts on a genuine send, never on form submit, so a
 * failed delivery can't be counted as a conversion.
 */
const GA4_ID = import.meta.env.VITE_GA4_ID as string | undefined;
if (typeof window !== "undefined" && GA4_ID) {
  const w = window as unknown as { dataLayer: unknown[] };
  w.dataLayer = w.dataLayer || [];
  const gtag = (...args: unknown[]) => w.dataLayer.push(args);
  gtag("js", new Date());
  gtag("config", GA4_ID);
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
