import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { GoogleRatingCard } from "./GoogleRatingBadge";

/**
 * Hero — Apple Watch Series 11 blueprint.
 *  - Full-bleed video, no centred copy block
 *  - Bottom-left: product chip ("DIGITAL MOVEMENT — NZ") + bold headline
 *  - Bottom-right: price-equivalent ("Free proposal · 24h reply") + Buy-style pill ("Start →")
 *  - Right edge: small circular pause/play control over the video
 */
export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.play().catch(() => {});
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      data-surface="dark"
      className="surface-dark relative isolate overflow-hidden w-screen min-h-[100svh] h-[100dvh]"
    >
      {/* Full-bleed background video */}
      <motion.div
        aria-hidden
        style={!reduce ? { y: videoY } : undefined}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        {!reduce && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            // @ts-expect-error fetchpriority is missing from React types
            fetchpriority="high"
            className="absolute inset-0 h-full w-full object-cover scale-105"
            src={`${import.meta.env.BASE_URL}video/dm-color-theme.mp4`}
            {...({ "webkit-playsinline": "true", "x5-playsinline": "true" } as Record<string, string>)}
          />
        )}

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
                  the sticky variant globally from App.tsx. */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="md:hidden inline-flex mb-4"
              >
                <GoogleRatingCard />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="inline-flex items-center justify-center md:justify-start gap-2 text-white/85"
              >
                <img
                  src={`${import.meta.env.BASE_URL}brand/logo-color-negative.svg`}
                  alt=""
                  aria-hidden
                  className="h-4 w-auto opacity-90"
                />
                <span className="uppercase tracking-[0.18em] text-[11px] sm:text-[12px] font-bold text-white/75">
                  Digital&nbsp;Movement — NZ
                </span>
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-3 sm:mt-4 max-w-[16ch] mx-auto md:mx-0 balance text-white"
                style={{
                  fontSize: "clamp(36px, 6.4vw, 92px)",
                  lineHeight: "1.04",
                  letterSpacing: "-0.035em",
                  fontWeight: 600,
                }}
              >
                Page 1 Google in as&nbsp;little as 60 days.
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col items-center md:flex-row md:items-center gap-3 md:gap-4"
            >
              <p className="text-white/70 text-[13px] sm:text-[14px] font-medium leading-tight text-center md:text-left">
                Free proposal{" "}
                <span className="text-white/45">· 24h reply</span>
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-[15px] px-7 py-3 transition-colors"
              >
                Start
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

