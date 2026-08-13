import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { GoogleRatingCard } from "./GoogleRatingBadge";
import { ContactDemo } from "./ContactDemo";

const HERO_SLIDES = [
  {
    label: "Mount Aoraki",
    mobile: "video/hero/mobile/mountain.mp4",
    desktop: "video/hero/desktop/mountain.mp4",
    poster: "video/hero/mountain-poster.jpg",
  },
  {
    label: "NZ Beach Life",
    mobile: "video/hero/mobile/beach.mp4",
    desktop: "video/hero/desktop/beach.mp4",
    poster: "video/hero/beach-poster.jpg",
  },
];
const SLIDE_INTERVAL_MS = 4000;
const DESKTOP_BREAKPOINT = "(min-width: 768px)";

/**
 * Hero — Apple Watch Series 11 blueprint with a 2-slide auto-rotating
 * video carousel (mountain + beach) crossfading every 4s.
 */
export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  // Play only the currently-active video. iOS Safari autoplay is finicky —
  // needs muted + playsInline set on the element *before* the first play()
  // call, plus a first-gesture fallback since Low-Power Mode rejects
  // autoplay. By playing only the active video, the second (~470KB on
  // mobile) doesn't compete with the first for bandwidth at first paint.
  useEffect(() => {
    if (reduce) return;
    const playActive = () => {
      videoRefs.current.forEach((v, i) => {
        if (!v) return;
        v.muted = true;
        v.defaultMuted = true;
        v.setAttribute("muted", "");
        if (i === activeIdx) {
          try {
            v.currentTime = 0;
          } catch {
            // Safari may throw before metadata is ready.
          }
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      });
    };
    playActive();
    const onFirstGesture = () => {
      playActive();
      document.removeEventListener("touchstart", onFirstGesture);
      document.removeEventListener("pointerdown", onFirstGesture);
    };
    document.addEventListener("touchstart", onFirstGesture, { once: true, passive: true });
    document.addEventListener("pointerdown", onFirstGesture, { once: true, passive: true });
    const onVis = () => {
      if (!document.hidden) playActive();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      document.removeEventListener("touchstart", onFirstGesture);
      document.removeEventListener("pointerdown", onFirstGesture);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduce, activeIdx]);

  // Auto-rotate between slides every 4s. Pauses when user pauses or when
  // the tab is hidden.
  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setActiveIdx((i) => (i + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduce, paused]);

  const togglePlay = () => {
    setPaused((prev) => {
      const next = !prev;
      videoRefs.current.forEach((v) => {
        if (!v) return;
        if (next) v.pause();
        else v.play().catch(() => {});
      });
      return next;
    });
  };

  return (
    <>
    {/* Two thirds of the viewport, not all of it. A full-height hero puts
        everything else below the fold, and the one thing that has to be on
        screen without scrolling is the way to make contact — the card in the
        band underneath. At 66vh the headline still owns the opening and the top
        of that card is already visible. The 460px floor is for short landscape
        windows, where 66% of the height is not enough room for a three-line
        headline. */}
    <section
      id="top"
      ref={sectionRef}
      data-surface="dark"
      className="surface-dark relative isolate overflow-hidden w-screen min-h-[max(66svh,460px)] h-[max(66dvh,460px)]"
    >
      {/* Full-bleed background video. Always rendered so iOS users with
          reduced motion still see the poster frame instead of a flat black
          rectangle. The brand gradient on the section is the real backdrop —
          video sits over it. */}
      <motion.div
        aria-hidden
        style={!reduce ? { y: videoY } : undefined}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Pre-paint backdrop — the section never flashes pure black while
            the video buffers because this DM gradient is already painted. */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 60% 35%, rgba(154,47,198,0.45) 0%, rgba(27,14,46,1) 55%, #100620 100%)",
          }}
        />
        {/* Two-slide auto-rotating carousel. Both videos mount immediately
            and crossfade — opacity 1 for active, 0 for inactive. Each video
            uses <source media> so mobile gets the small 854px variant
            (~160-470KB) and desktop gets the 1280px variant. A poster JPEG
            paints instantly while the bytes arrive. */}
        {!reduce &&
          HERO_SLIDES.map((slide, i) => (
            <video
              key={slide.desktop}
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              loop
              muted
              playsInline
              preload={i === 0 ? "auto" : "none"}
              poster={`${import.meta.env.BASE_URL}${slide.poster}`}
              // @ts-expect-error fetchPriority is missing from React video types
              fetchPriority={i === 0 ? "high" : "auto"}
              aria-label={slide.label}
              className="absolute inset-0 h-full w-full object-cover scale-105 transition-opacity duration-[1200ms] ease-out"
              style={{ opacity: activeIdx === i ? 1 : 0 }}
              // React expects the camelCased DOM property here; the all-lowercase
              // spelling is rejected as an invalid prop and warns on every
              // server render, so it never reached the markup anyway.
              disableRemotePlayback
              {...({
                "webkit-playsinline": "true",
                "x5-playsinline": "true",
              } as Record<string, string>)}
            >
              <source
                src={`${import.meta.env.BASE_URL}${slide.mobile}`}
                type="video/mp4"
                media="(max-width: 767px)"
              />
              <source
                src={`${import.meta.env.BASE_URL}${slide.desktop}`}
                type="video/mp4"
                media={DESKTOP_BREAKPOINT}
              />
              <source
                src={`${import.meta.env.BASE_URL}${slide.desktop}`}
                type="video/mp4"
              />
            </video>
          ))}

        {/* Top fade — improves nav legibility */}
        <div
          className="absolute inset-x-0 top-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,8,32,0.55) 0%, rgba(15,8,32,0) 100%)",
          }}
        />
        {/* Bottom fade — anchors the typographic block bottom-left */}
        <div
          className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,8,32,0) 0%, rgba(15,8,32,0.55) 65%, rgba(15,8,32,0.92) 100%)",
          }}
        />
      </motion.div>

      {/* Pause / play control — Apple's right-edge over-video chip */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={paused ? "Play hero video" : "Pause hero video"}
        className="absolute top-[max(20vh,160px)] right-5 sm:right-8 z-10 grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full bg-white/15 backdrop-blur-md text-white border border-white/15 hover:bg-white/25 transition"
      >
        {paused ? <Play size={14} fill="white" /> : <Pause size={13} fill="white" />}
      </button>

      {/* Bottom block — badge, eyebrow and headline, and nothing else.
          A contact card used to sit opposite it on md+. It was removed on the
          client's own reading of the page: "I ignored the text and went
          straight to the right side". The card now follows the headline
          instead of competing with it. */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="container-v3 pb-10 sm:pb-12 md:pb-14 lg:pb-16">
          {/* Centred at every width, including desktop. It was left-aligned
              while a card sat opposite it; with the card gone, a headline
              pinned to the left of a 1280px container is not the start of a
              column any more, it is just off to one side. */}
          <div className="flex flex-col items-center text-center gap-6">
            <div>
              {/* Mobile-only Google rating badge (inline). Desktop renders
                  the sticky variant globally from App.tsx. The Hero block
                  used to fade everything in with staggered opacity 0→1
                  animations — on real mobile devices that reads as content
                  "popping in" rather than appearing. All elements now render
                  static so the hero is immediately complete on first paint. */}
              <div className="md:hidden inline-flex mb-4">
                <GoogleRatingCard />
              </div>

              <p className="inline-flex items-center justify-center gap-2 text-white/85">
                <img
                  src={`${import.meta.env.BASE_URL}brand/logo-color-negative.svg`}
                  alt=""
                  aria-hidden
                  width="16"
                  height="16"
                  className="h-4 w-auto opacity-90"
                />
                <span className="uppercase tracking-[0.18em] text-[11px] sm:text-[12px] font-bold text-white/75">
                  Digital&nbsp;Movement — NZ
                </span>
              </p>

              {/*
                Keyword H1, restored 2026-08-03. "SEO" and "digital marketing"
                belong in the homepage H1 — they match the page title ("SEO &
                Digital Marketing Agency New Zealand") and they are the two terms
                this site is trying to win. 38f55aa replaced this with "Win the
                customers already looking for you", which reads better and ranks
                for nothing. Do not remove the two keywords again without
                replacing them with equivalents.

                Two lines, and the type scale that keeps them two lines, are a
                measurement rather than a taste. Full container width is
                min(viewport, 1280) minus two gutters of clamp(20px, 4vw, 56px)
                — so 1168px from 1400px up, and 942px at 1024px.

                The line that has to fit is not the one below. This page is also
                built into the WordPress twin at nz.digitalmovement.uk, where
                content-patches/intent-separation.json swaps the heading for
                "Get Real Results and New Clients" — 32 characters, measured at
                14.81× the font size. At the old 80px cap that is 1185px inside
                1168px, so it broke to three lines there while reading as two
                here. The cap is 74px because 14.81 × 74 = 1096px, which leaves
                6% of the column spare at every width from 1024px up.

                The `balance` class stays OFF. `text-wrap: balance` redistributes
                lines on its own, so with authored <br /> breaks it fights them.

                The break is placed so the keyword phrase stays whole on one
                line. If you change these words — here or in the patch — measure
                the longest line in the browser again.
              */}
              <h1
                className="mt-3 sm:mt-4 mx-auto text-white"
                style={{
                  fontSize: "clamp(34px, 5.6vw, 74px)",
                  lineHeight: "1.04",
                  letterSpacing: "-0.035em",
                  fontWeight: 600,
                }}
              >
                Get real results from<br />SEO and digital marketing.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* The four ways to make contact, directly under the hero and centred.
        This is the only instance on the page now, and the hero is two thirds of
        the viewport so its heading and the top of the card are on screen before
        anyone scrolls. It only starts animating once it is actually in view —
        see the observer in src/lib/contactDemo/scene.ts. */}
    <section
      aria-label="Ways to contact us"
      data-surface="dark"
      className="surface-dark dm-contactdemo-band px-5 pt-8 pb-14"
    >
      <ContactDemo titleTag="h2" />
    </section>
    </>
  );
}

