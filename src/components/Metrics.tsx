import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "../lib/useCountUp";
import { Reveal } from "../lib/Reveal";

/**
 * Metrics — editorial proof section.
 *
 * Distinct from Section 1 (horizontal slider with videos) and Section 2
 * (parallax cityscape with editorial cards): a hero featured-stat card
 * spanning full width followed by three supporting cards, each with its
 * own bespoke visual flourish (bar chart, day track, star row, timeline).
 * Same Apple polish — semibold weights, tight letter-spacing, generous
 * whitespace, subtle motion on scroll.
 */
export function Metrics() {
  return (
    <section
      id="metrics"
      data-surface="light"
      className="surface-light relative pt-28 sm:pt-32 md:pt-36 pb-28 sm:pb-32 md:pb-36 overflow-hidden"
    >
      {/* Faint ambient orb — anchors the section visually without competing
          with the cards. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-32 h-[520px] w-[520px] rounded-full opacity-[0.10]"
        style={{
          background:
            "radial-gradient(circle at center, #EC178D 0%, transparent 65%)",
        }}
      />

      <div className="container-v3 relative">
        {/* Section header */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-12 items-end text-center lg:text-left">
          <div>
            <Reveal>
              <p className="eyebrow text-ink-muted">Our numbers</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="mt-5 max-w-[18ch] mx-auto lg:mx-0 balance text-ink"
                style={{
                  fontSize: "clamp(34px, 6vw, 84px)",
                  lineHeight: "1.04",
                  letterSpacing: "-0.034em",
                  fontWeight: 700,
                }}
              >
                All the numbers
                <span className="block text-ink/55">tell our story.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="text-[15px] sm:text-[17px] text-ink-soft leading-relaxed max-w-[480px] mx-auto lg:mx-0 lg:justify-self-end">
              With a proven track record of exceeding client expectations,
              our numbers are undeniable.
            </p>
          </Reveal>
        </div>

        {/* Hero stat */}
        <FeaturedStat />

        {/* Three supporting stats */}
        <div className="mt-5 sm:mt-6 grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-3">
          <DaysStat />
          <ReviewsStat />
          <HeritageStat />
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────── */
/*  Featured: 8× more monthly leads                                */
/* ────────────────────────────────────────────────────────────── */

function FeaturedStat() {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { amount: 0.35, once: true });
  const { ref: numRef, value } = useCountUp(500);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mt-10 sm:mt-12 md:mt-14 relative bg-white rounded-[24px] sm:rounded-[32px] border border-ink/8 overflow-hidden p-5 sm:p-8 md:p-10 lg:p-12"
    >
      <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-6 md:gap-10 items-center text-center">
        {/* Left — big stat */}
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink-muted">
            <span>01</span>
            <span className="h-px w-6 bg-ink/15" />
            <span>Helping businesses</span>
          </div>

          <span
            ref={numRef as never}
            className="mt-3 block text-ink"
            style={{
              fontSize: "clamp(64px, 10vw, 140px)",
              lineHeight: "0.88",
              letterSpacing: "-0.05em",
              fontWeight: 700,
            }}
          >
            {inView ? value : 0}
            <span className="text-ink/55">+</span>
          </span>

          <p className="mt-3 text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.18em] text-ink">
            Businesses grown with our help
          </p>
          <p className="mt-3 max-w-[440px] text-[14px] sm:text-[15px] text-ink-soft leading-relaxed">
            500+ Kiwi businesses have grown with us — from small online stores
            to large national companies — backed by real, measurable results.
          </p>
        </div>

        {/* Right — comparison bar visual */}
        <BarChartVisual inView={inView} />
      </div>
    </motion.div>
  );
}

function BarChartVisual({ inView }: { inView: boolean }) {
  const bars = [
    { label: "Typical agency", value: 1, mute: true },
    { label: "Digital Movement", value: 8 },
  ];
  const maxValue = 8;
  return (
    <div className="relative w-full max-w-[460px] justify-self-center md:justify-self-end">
      <div className="flex items-end gap-6 sm:gap-10 h-[160px] sm:h-[220px] md:h-[260px]">
        {bars.map((b) => {
          const heightPct = (b.value / maxValue) * 100;
          return (
            <div key={b.label} className="flex-1 flex flex-col items-center gap-3">
              <div className="relative w-full flex items-end" style={{ height: "100%" }}>
                <motion.div
                  initial={{ height: "0%" }}
                  animate={inView ? { height: `${heightPct}%` } : { height: "0%" }}
                  transition={{
                    duration: 1.2,
                    delay: b.mute ? 0.1 : 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`w-full rounded-t-[12px] ${
                    b.mute ? "bg-ink/12" : ""
                  }`}
                  style={
                    b.mute
                      ? undefined
                      : {
                          background:
                            "linear-gradient(180deg, #EC178D 0%, #9A2FC6 100%)",
                        }
                  }
                />
              </div>
              <p
                className={`text-[10.5px] font-bold uppercase tracking-[0.16em] ${
                  b.mute ? "text-ink-faint" : "text-ink"
                }`}
              >
                {b.label}
              </p>
              <p
                className={`text-[18px] sm:text-[20px] font-bold ${
                  b.mute ? "text-ink-muted" : "text-ink"
                } -mt-1`}
                style={{ letterSpacing: "-0.025em" }}
              >
                {b.mute ? "Avg." : "500+"}
              </p>
            </div>
          );
        })}
      </div>
      {/* Baseline */}
      <div className="mt-2 h-px bg-ink/12" />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────── */
/*  Supporting: 60 days to Google page 1                           */
/* ────────────────────────────────────────────────────────────── */

function DaysStat() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });
  const { ref: numRef, value } = useCountUp(3500);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-white rounded-[28px] sm:rounded-[36px] border border-ink/8 overflow-hidden p-6 sm:p-8 flex flex-col justify-between min-h-[240px] sm:min-h-[300px] text-center"
    >
      <div className="inline-flex self-center items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink-muted">
        <span>03</span>
        <span className="h-px w-6 bg-ink/15" />
        <span>Increasing visibility</span>
      </div>

      <div className="my-6">
        <span
          ref={numRef as never}
          className="block text-ink"
          style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            lineHeight: "0.9",
            letterSpacing: "-0.045em",
            fontWeight: 700,
          }}
        >
          {(inView ? value : 0).toLocaleString()}
          <span className="text-ink/55">+</span>
        </span>
      </div>

      {/* Page-rank progress visual */}
      <div className="mb-6">
        <div className="relative h-1.5 rounded-full bg-ink/10 overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={inView ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 1.4, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background: "linear-gradient(90deg, #F05F22 0%, #EC178D 100%)",
            }}
          />
        </div>
        <div className="mt-2 flex justify-between text-[10.5px] font-bold uppercase tracking-[0.16em] text-ink-faint">
          <span>Invisible</span>
          <span>Page 1 of Google</span>
        </div>
      </div>

      <p className="text-[14.5px] sm:text-[15.5px] text-ink-soft leading-relaxed">
        3,500+ pages ranked on page 1 of Google — across consultancies, trades,
        e-commerce and local services right across New Zealand.
      </p>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────── */
/*  Supporting: +100 5-star Google reviews                         */
/* ────────────────────────────────────────────────────────────── */

function ReviewsStat() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });
  const { ref: numRef, value } = useCountUp(100);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-white rounded-[28px] sm:rounded-[36px] border border-ink/8 overflow-hidden p-6 sm:p-8 flex flex-col justify-between min-h-[240px] sm:min-h-[300px] text-center"
    >
      <div className="inline-flex self-center items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink-muted">
        <span>02</span>
        <span className="h-px w-6 bg-ink/15" />
        <span>Maintaining trust</span>
      </div>

      <div className="my-6">
        <span
          ref={numRef as never}
          className="block text-ink"
          style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            lineHeight: "0.9",
            letterSpacing: "-0.045em",
            fontWeight: 700,
          }}
        >
          {inView ? value : 0}<span className="text-ink/55">+</span>
        </span>
      </div>

      {/* Star row — fill in sequence */}
      <div className="mb-6 flex justify-center gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} delay={0.25 + i * 0.08} active={inView} />
        ))}
      </div>

      <p className="text-[14.5px] sm:text-[15.5px] text-ink-soft leading-relaxed">
        100+ five-star Google reviews from clients. Verified, public, and the
        honest record of how we work.
      </p>
    </motion.div>
  );
}

function Star({ delay, active }: { delay: number; active: boolean }) {
  return (
    <motion.svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      initial={{ scale: 0.6, opacity: 0 }}
      animate={active ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      <path
        d="M12 2.5l2.95 6 6.6.96-4.78 4.66 1.13 6.58L12 17.6l-5.9 3.1 1.13-6.58L2.45 9.46l6.6-.96L12 2.5z"
        fill="#F5A623"
      />
    </motion.svg>
  );
}

/* ────────────────────────────────────────────────────────────── */
/*  Supporting: Since 2018                                         */
/* ────────────────────────────────────────────────────────────── */

function HeritageStat() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = window.setInterval(() => {
      i++;
      setTick(i);
      if (i >= 8) window.clearInterval(id);
    }, 220);
    return () => window.clearInterval(id);
  }, [inView]);

  // Eight tick marks across the revenue arc.
  const ticks = Array.from({ length: 9 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-white rounded-[28px] sm:rounded-[36px] border border-ink/8 overflow-hidden p-6 sm:p-8 flex flex-col justify-between min-h-[240px] sm:min-h-[300px] text-center"
    >
      <div className="inline-flex self-center items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink-muted">
        <span>04</span>
        <span className="h-px w-6 bg-ink/15" />
        <span>Generating revenue</span>
      </div>

      <div className="my-6">
        <span
          className="block text-ink"
          style={{
            fontSize: "clamp(44px, 7vw, 80px)",
            lineHeight: "0.9",
            letterSpacing: "-0.045em",
            fontWeight: 700,
          }}
        >
          $10M<span className="text-ink/55">+</span>
        </span>
      </div>

      {/* Revenue arc visual */}
      <div className="mb-6">
        <div className="relative h-px bg-ink/10">
          <motion.div
            initial={{ width: "0%" }}
            animate={inView ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-y-0 left-0 h-px"
            style={{
              background: "linear-gradient(90deg, #FFB23D 0%, #EC178D 100%)",
            }}
          />
          <div className="absolute inset-x-0 -top-1 flex justify-between">
            {ticks.map((_, i) => {
              const lit = tick > i;
              return (
                <span
                  key={i}
                  className={`block h-2 w-2 rounded-full transition-colors duration-300 ${
                    lit ? "bg-ink" : "bg-ink/15"
                  }`}
                />
              );
            })}
          </div>
        </div>
        <div className="mt-3 flex justify-between text-[10.5px] font-bold uppercase tracking-[0.16em] text-ink-faint tabular-nums">
          <span>$0</span>
          <span className="hidden sm:inline">$2.5M</span>
          <span className="hidden sm:inline">$5M</span>
          <span className="hidden sm:inline">$7.5M</span>
          <span>$10M+</span>
        </div>
      </div>

      <p className="text-[14.5px] sm:text-[15.5px] text-ink-soft leading-relaxed">
        Over $10M in revenue generated for businesses through SEO, Google Ads,
        social media and high-performing web design.
      </p>
    </motion.div>
  );
}
