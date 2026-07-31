import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { GoogleRatingCard } from "./GoogleRatingBadge";

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
    <section
      id="top"
      ref={sectionRef}
      data-surface="dark"
      className="surface-dark relative isolate overflow-hidden w-screen min-h-[100svh] h-[100dvh]"
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

      {/* Bottom block — center-stacked on mobile; chip+headline left + CTA
          right on md+. */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="container-v3 pb-10 sm:pb-12 md:pb-14 lg:pb-16">
          <div className="flex flex-col items-center text-center gap-6 md:flex-row md:items-end md:justify-between md:text-left md:gap-8">
            <div className="max-w-[920px] md:max-w-[920px]">
              {/* Mobile-only Google rating badge (inline). Desktop renders
                  the sticky variant globally from App.tsx. The Hero block
                  used to fade everything in with staggered opacity 0→1
                  animations — on real mobile devices that reads as content
                  "popping in" rather than appearing. All elements now render
                  static so the hero is immediately complete on first paint. */}
              <div className="md:hidden inline-flex mb-4">
                <GoogleRatingCard />
              </div>

              <p className="inline-flex items-center justify-center md:justify-start gap-2 text-white/85">
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

              <h1
                className="mt-3 sm:mt-4 max-w-[16ch] mx-auto md:mx-0 balance text-white"
                style={{
                  fontSize: "clamp(36px, 6.4vw, 92px)",
                  lineHeight: "1.04",
                  letterSpacing: "-0.035em",
                  fontWeight: 600,
                }}
              >
                Get real results from<br />SEO and digital marketing.
              </h1>
            </div>

            <div className="flex flex-col items-center md:flex-row md:items-center gap-3 md:gap-4">
              <p className="text-white/80 text-[13px] sm:text-[14px] font-medium leading-tight text-center md:text-left">
                No obligations,{" "}
                <span className="text-white/65">so no worries.</span>
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-[15px] px-7 py-3 transition-colors"
              >
                Get your free audit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

