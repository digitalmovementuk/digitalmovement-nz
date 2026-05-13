import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { business, navLinks } from "../content";

type Surface = "dark" | "light";

// Primary navigation. The NZ launch keeps subpages on disk for direct-URL
// access but the nav surfaces in-page anchors only — Link to="/#hash" jumps
// home and Layout's hash-scroll effect picks up the rest.
export function Nav() {
  const [surface, setSurface] = useState<Surface>("dark");
  const [scrolled, setScrolled] = useState(false);
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const onHome = pathname === "/" || pathname === "";

  useEffect(() => {
    const NAV_BAND = 80;

    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const sections = document.querySelectorAll<HTMLElement>("[data-surface]");
      let active: Surface = "dark";
      for (const sec of sections) {
        const r = sec.getBoundingClientRect();
        if (r.top <= NAV_BAND && r.bottom > NAV_BAND) {
          active = (sec.dataset.surface as Surface) ?? "dark";
          break;
        }
      }
      setSurface(active);

      const hero = document.getElementById("top");
      if (hero && onHome) {
        const r = hero.getBoundingClientRect();
        setCompact(r.bottom < hero.offsetHeight * 0.5);
      } else {
        setCompact(window.scrollY > 280);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome, pathname]);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onDark = surface === "dark";
  const linkCls = onDark ? "text-white/85 hover:text-white" : "text-ink-soft hover:text-ink";
  const ctaSize = compact ? "text-[13px] px-4 py-2" : "text-[16px] px-6 py-3";
  const ctaCls = `inline-flex items-center gap-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium transition-all duration-300 ${ctaSize}`;
  const hamburgerCls = onDark
    ? "border-white/30 bg-white/10 text-white"
    : "border-ink/15 bg-white/70 text-ink";

  const barHeightCls = compact ? "h-[48px] md:h-[56px]" : "h-[88px] md:h-[104px]";
  const logoHeightCls = compact ? "h-6 sm:h-7" : "h-11 sm:h-14";
  const linkSizeCls = compact ? "text-[13px]" : "text-[17px]";
  const linkGapCls = compact ? "gap-6 lg:gap-8" : "gap-9 lg:gap-12";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? (onDark ? "nav-glass-dark" : "nav-glass-light") : "bg-transparent"
        }`}
      >
        <div className={`container-v3 flex items-center justify-between transition-all duration-300 ${barHeightCls}`}>
          <Link to="/" className="flex items-center gap-3" aria-label="Digital Movement home">
            <img
              src={`${import.meta.env.BASE_URL}brand/${
                onDark ? "logo-color-negative" : "logo-color-positive"
              }.svg`}
              alt="Digital Movement"
              className={`w-auto transition-all duration-300 ${logoHeightCls}`}
              draggable={false}
            />
          </Link>

          <nav className={`hidden md:flex items-center transition-all duration-300 ${linkGapCls}`}>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={`/${l.href}`}
                className={`font-semibold tracking-tight transition-all duration-300 ${linkSizeCls} ${linkCls}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/#contact" className={`hidden md:inline-flex ${ctaCls}`}>
              Free Proposal <ArrowRight size={13} />
            </Link>

            <button
              className={`md:hidden grid h-10 w-10 place-items-center rounded-pill border backdrop-blur transition-colors ${hamburgerCls}`}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-[60] bg-plum/70 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="drawer"
              className="fixed inset-y-0 right-0 z-[70] w-[88%] max-w-[420px] surface-dark p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <Link to="/" onClick={() => setOpen(false)} className="inline-flex items-center">
                  <img
                    src={`${import.meta.env.BASE_URL}brand/logo-color-negative.svg`}
                    alt="Digital Movement"
                    className="h-7 w-auto"
                  />
                </Link>
                <button
                  className="grid h-10 w-10 place-items-center rounded-pill border border-white/20 text-white"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="mt-12 flex flex-col">
                {navLinks.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i + 0.08 }}
                  >
                    <Link
                      to={`/${l.href}`}
                      onClick={() => setOpen(false)}
                      className="block py-4 text-[26px] font-bold tracking-tight border-b border-white/10 text-white"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <Link
                to="/#contact"
                onClick={() => setOpen(false)}
                className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-[15px] font-medium py-3 transition-colors"
              >
                Free Proposal <ArrowRight size={15} />
              </Link>

              <div className="mt-10 text-[13px] text-white/65 space-y-1.5">
                <p>{business.phone}</p>
                <p>{business.email}</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
