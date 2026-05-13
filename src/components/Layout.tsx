import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useLenis } from "../lib/useLenis";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { StickyGoogleRatingBadge } from "./GoogleRatingBadge";
import { StickyCTA } from "./StickyCTA";
import { LeadCaptureModal } from "./LeadCaptureModal";

// Wraps every routed page with the chrome (nav, footer, sticky widgets,
// modal) and handles two cross-route behaviours: scroll-to-top on pathname
// change, scroll-to-hash when the URL carries one.
export function Layout() {
  const { pathname, hash } = useLocation();
  useLenis();

  useEffect(() => {
    if (hash) {
      const id = hash.replace(/^#/, "");
      // Wait for the new route's sections to mount before we try to find
      // the target. requestAnimationFrame is enough in practice — Lenis
      // will then take over the smooth scroll.
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return () => cancelAnimationFrame(raf);
    }
    // No hash → reset to top on route change.
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return (
    <>
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <StickyGoogleRatingBadge />
      <StickyCTA />
      <LeadCaptureModal />
    </>
  );
}
