import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Plus, Minus, Sparkles } from "lucide-react";
import { Reveal } from "../lib/Reveal";
import type { ServiceContent } from "../content/services";
import { Seo, serviceSchema, faqSchema, breadcrumbs, SERVICE_NAMES } from "../seo";
import { LeadForm } from "./LeadForm";

/* Pre-selects the enquiry form's service dropdown to the page the visitor is
   on. Keyed by slug so a new service page fails visibly (falls back to "Not
   sure yet") rather than silently mis-attributing the lead. */
const LEAD_FORM_SERVICE: Record<string, string> = {
  seo: "SEO",
  "google-ads": "Google Ads",
  "social-media": "Social Media",
  "web-design": "Website",
};

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

// DM NZ accent — replaces the NEO orange `#FF7A45`. Sits on top of the plum
// surface and the warm-white light surface without clashing with the pink
// brand gradient used in the CTA buttons.
const ACCENT = "#F05F22";
const ACCENT_GLOW = "rgba(240, 95, 34, 0.34)";
const ACCENT_BG_SOFT = "rgba(240, 95, 34, 0.12)";

// Full service product page — Hero + nine downstream sections, all driven by
// a single content object. Mirrors the structure of the NEO source, rebranded
// to DM NZ palette (plum + pink + DM orange).
export function ServicePageShell({ content }: { content: ServiceContent }) {
  const path = `/services/${content.slug}`;

  // Title and description used to be written here in an effect, which meant
  // they only ever existed after JavaScript ran — so crawlers saw the
  // template's tags, not the page's. <Seo> emits them into the pre-rendered
  // HTML at build time instead.
  return (
    <>
      <Seo
        title={content.meta.title}
        description={content.meta.description}
        path={path}
        schema={[
          serviceSchema({
            name: SERVICE_NAMES[content.slug] ?? content.slug,
            description: content.meta.description,
            path,
          }),
          faqSchema(content.faq.items),
          breadcrumbs([{ name: SERVICE_NAMES[content.slug] ?? content.slug, path }]),
        ]}
      />
      <Hero content={content} />
      <WhatItIs content={content} />
      <Outcomes content={content} />
      <Methodology content={content} />
      <Deliverables content={content} />
      <ProcessTimeline content={content} />
      <Stack content={content} />
      <FAQ content={content} />
      <LeadMagnet content={content} />
      <FinalCTA content={content} />
    </>
  );
}

/* ────────────────────────────  1 · Hero  ────────────────────────────── */

function Hero({ content }: { content: ServiceContent }) {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const base = import.meta.env.BASE_URL;

  /* The hero background video is decoration, and these files are 6–8 MB each.
     Loaded eagerly (preload="auto" + fetchPriority="high", as this did) it was
     the largest thing on the page and it competed with the text and the form
     for bandwidth — the single biggest cause of the site's LCP failure.

     It is now mounted only after the page has finished loading, so it cannot
     contend with anything that matters. The poster paints immediately and is
     the LCP element; the video fades in behind the copy when it is ready, and
     on a slow connection or with reduced motion it simply never arrives, which
     costs the visitor nothing. */
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    if (reduce) return;
    const start = () => {
      const idle = (window as unknown as {
        requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
      }).requestIdleCallback;
      if (idle) idle(() => setShowVideo(true), { timeout: 3000 });
      else window.setTimeout(() => setShowVideo(true), 1200);
    };
    if (document.readyState === "complete") start();
    else {
      window.addEventListener("load", start, { once: true });
      return () => window.removeEventListener("load", start);
    }
  }, [reduce]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    const onFirstGesture = () => {
      tryPlay();
      document.removeEventListener("touchstart", onFirstGesture);
      document.removeEventListener("pointerdown", onFirstGesture);
    };
    document.addEventListener("touchstart", onFirstGesture, { once: true, passive: true });
    document.addEventListener("pointerdown", onFirstGesture, { once: true, passive: true });
    v.addEventListener("canplay", tryPlay, { once: true });
    return () => {
      document.removeEventListener("touchstart", onFirstGesture);
      document.removeEventListener("pointerdown", onFirstGesture);
      v.removeEventListener("canplay", tryPlay);
    };
  }, []);

  return (
    <section
      data-surface="dark"
      /* ~66svh, not 100svh: the section below must be visible at the fold so
         the page reads as having somewhere to go (DM hero rule). */
      className="surface-dark relative isolate overflow-hidden w-screen min-h-[66svh] py-24 sm:py-28 flex items-center"
    >
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        {/* Poster as its own <img>: it must paint whether or not the video
            ever mounts, and as the LCP element it should not wait on a <video>
            element's own loading rules. Dimensions are set so it reserves its
            box and contributes no layout shift. */}
        <img
          src={`${base}brand/og-cover.jpg`}
          alt=""
          aria-hidden
          width={1200}
          height={675}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        {!reduce && showVideo && content.hero.video && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster={`${base}brand/og-cover.jpg`}
            // @ts-expect-error fetchPriority is missing from React video types
            fetchPriority="low"
            className="absolute inset-0 h-full w-full object-cover scale-105"
            src={`${base}${content.hero.video}#t=0.1`}
            {...({
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
            } as Record<string, string>)}
          />
        )}
        <div
          className="absolute inset-x-0 top-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(16,6,32,0.55) 0%, rgba(16,6,32,0) 100%)" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(16,6,32,0) 0%, rgba(16,6,32,0.55) 65%, rgba(16,6,32,0.92) 100%)",
          }}
        />
      </div>

      {/* Two pillars: copy on the left, the enquiry form on the right.
          These pages previously carried no form at all — every CTA pointed at
          /#contact on the homepage, so a visitor who arrived on a service page
          from search had to leave it to enquire. The form is the page's job. */}
      <div className="relative z-10 w-full">
        <div className="container-v3 py-10 sm:py-14">
          <div className="grid lg:grid-cols-[1.05fr_minmax(0,0.95fr)] gap-10 lg:gap-14 xl:gap-20 items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[10.5px] sm:text-[12px] font-bold uppercase text-white tracking-[0.32em]"
              >
                {content.hero.eyebrow}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: EASE_OUT }}
                className="mt-3 sm:mt-5 md:mt-6 text-white uppercase italic"
                style={{
                  fontSize: "clamp(40px, 7.5vw, 112px)",
                  lineHeight: "0.86",
                  letterSpacing: "-0.05em",
                  fontWeight: 700,
                }}
              >
                <span className="block">{content.hero.headlineTop}</span>
                <span className="block font-medium text-white/95">{content.hero.headlineBottom}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-4 sm:mt-6 md:mt-7 max-w-[36ch] md:max-w-[52ch] text-[13.5px] sm:text-[15px] lg:text-[16px] text-white/65 leading-relaxed"
              >
                {content.hero.sub}
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="hidden md:flex mt-7 flex-wrap justify-center md:justify-start gap-2"
              >
                {content.hero.chips.map((s) => (
                  <li
                    key={s}
                    className="border border-white/20 bg-white/5 backdrop-blur-sm px-3 py-1.5 text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80"
                  >
                    {s}
                  </li>
                ))}
              </motion.ul>

              {/* Mobile single CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="md:hidden mt-6 flex flex-col items-center gap-3"
              >
                <a
                  href="#enquire"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-[14px] px-6 py-2.5 transition-colors"
                >
                  {content.hero.primaryCta} <ArrowRight size={14} />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="w-full"
            >
              <LeadForm
                source={`service-${content.slug}-hero`}
                heading="Get your free audit"
                note="A one-page audit in your inbox within 24 hours. No obligation."
                defaultService={LEAD_FORM_SERVICE[content.slug] ?? "Not sure yet"}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────  2 · What it is  ──────────────────────── */

function WhatItIs({ content }: { content: ServiceContent }) {
  return (
    <section data-surface="light" className="surface-light relative pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24">
      <div className="container-v3">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          <div>
            <Reveal>
              <p className="eyebrow text-ink-muted">{content.whatItIs.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="mt-5 max-w-[18ch] balance text-ink"
                style={{
                  fontSize: "clamp(34px, 5.6vw, 72px)",
                  lineHeight: "1.04",
                  letterSpacing: "-0.034em",
                  fontWeight: 700,
                }}
              >
                {content.whatItIs.headlineMain}
                <span className="block text-ink/55">{content.whatItIs.headlineSub}</span>
              </h2>
            </Reveal>
          </div>
          <WhatItIsBody content={content} />
        </div>
      </div>
    </section>
  );
}

function WhatItIsBody({ content }: { content: ServiceContent }) {
  const [open, setOpen] = useState(false);
  const paragraphs = content.whatItIs.paragraphs;
  const FOLD = 2;
  const visible = paragraphs.slice(0, FOLD);
  const hidden = paragraphs.slice(FOLD);
  const hasMore = hidden.length > 0;

  return (
    <div className="space-y-5 sm:space-y-6 text-[15.5px] sm:text-[17px] md:text-[17.5px] text-ink-soft leading-relaxed">
      {visible.map((p, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.12 + 0.06 * i, ease: EASE_OUT }}
        >
          {p}
        </motion.p>
      ))}

      {hasMore && (
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          style={{ overflow: "hidden" }}
        >
          <div className="space-y-5 sm:space-y-6 pt-5 sm:pt-6">
            {hidden.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>
      )}

      {hasMore && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex items-center gap-1 text-[13.5px] sm:text-[14px] font-semibold text-ink hover:text-ink-soft transition-colors"
          style={{ color: ACCENT }}
        >
          {open ? "Read less" : "Read more"}
          <span aria-hidden className="text-[14px]">{open ? "‹‹" : "››"}</span>
        </button>
      )}

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.5,
          delay: 0.12 + 0.06 * (visible.length + 1),
          ease: EASE_OUT,
        }}
        className="text-ink font-semibold pt-2"
      >
        {content.whatItIs.audience}
      </motion.p>
    </div>
  );
}

/* ────────────────────────────  3 · Outcomes  ────────────────────────── */

function Outcomes({ content }: { content: ServiceContent }) {
  return (
    <section
      data-surface="light"
      className="surface-light-2 relative pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24"
      style={{ background: "var(--surface-light-2)" }}
    >
      <div className="container-v3">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-12 items-end text-center lg:text-left">
          <div>
            <Reveal>
              <p className="eyebrow text-ink-muted">{content.outcomes.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="mt-5 max-w-[20ch] mx-auto lg:mx-0 balance text-ink"
                style={{
                  fontSize: "clamp(32px, 5.4vw, 64px)",
                  lineHeight: "1.04",
                  letterSpacing: "-0.034em",
                  fontWeight: 700,
                }}
              >
                {content.outcomes.headlineMain}
                <span className="block text-ink/55">{content.outcomes.headlineSub}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="text-[15px] sm:text-[17px] text-ink-soft leading-relaxed max-w-[480px] mx-auto lg:mx-0 lg:justify-self-end">
              {content.outcomes.intro}
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 sm:mt-16 grid gap-5 sm:gap-6 md:grid-cols-3">
          {content.outcomes.items.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.06 * i, ease: EASE_OUT }}
              className="relative bg-white rounded-[28px] sm:rounded-[36px] border border-ink/8 overflow-hidden p-7 sm:p-9 md:p-10"
            >
              <div className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink-muted">
                <span>0{i + 1}</span>
                <span className="h-px w-6 bg-ink/15" />
                <span>{item.kicker}</span>
              </div>
              <p
                className="mt-5 text-ink"
                style={{
                  fontSize: "clamp(40px, 5vw, 64px)",
                  lineHeight: "0.9",
                  letterSpacing: "-0.045em",
                  fontWeight: 700,
                }}
              >
                {item.value}
                <span className="text-ink/55"> {item.unit}</span>
              </p>
              <h3
                className="mt-3 text-ink"
                style={{
                  fontSize: "clamp(20px, 1.8vw, 24px)",
                  lineHeight: "1.18",
                  letterSpacing: "-0.022em",
                  fontWeight: 600,
                }}
              >
                {item.title}
              </h3>
              <p className="mt-3 text-[14.5px] sm:text-[15.5px] text-ink-soft leading-relaxed">{item.body}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ────────────────────────────  4 · Methodology  ─────────────────────── */

function Methodology({ content }: { content: ServiceContent }) {
  return (
    <section data-surface="light" className="surface-light relative pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24">
      <div className="container-v3">
        <div className="max-w-[680px]">
          <Reveal>
            <p className="eyebrow text-ink-muted">{content.methodology.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="mt-5 balance text-ink"
              style={{
                fontSize: "clamp(32px, 5.4vw, 64px)",
                lineHeight: "1.04",
                letterSpacing: "-0.034em",
                fontWeight: 700,
              }}
            >
              {content.methodology.headlineMain}
              <span className="block text-ink/55">{content.methodology.headlineSub}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[16px] sm:text-[17px] text-ink-soft leading-relaxed">
              {content.methodology.intro}
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 sm:mt-16 space-y-12 sm:space-y-16">
          {content.methodology.phases.map((phase, i) => (
            <MethodologyPhase key={phase.title} phase={phase} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function MethodologyPhase({
  phase,
  index,
}: {
  phase: ServiceContent["methodology"]["phases"][number];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const hasBullets = Boolean(phase.bullets && phase.bullets.length > 0);
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: 0.05 * index, ease: EASE_OUT }}
      className="grid lg:grid-cols-[120px_1fr] gap-6 lg:gap-12 items-start border-t border-ink/10 pt-8 sm:pt-10"
    >
      <div>
        <span
          className="block text-ink/35 italic leading-none"
          style={{
            fontSize: "clamp(48px, 5.2vw, 72px)",
            letterSpacing: "-0.04em",
            fontWeight: 500,
          }}
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="mt-3 text-[10.5px] font-bold uppercase tracking-[0.20em] text-ink-muted">
          {phase.kicker}
        </p>
      </div>
      <div className="max-w-[640px]">
        <h3
          className="text-ink"
          style={{
            fontSize: "clamp(22px, 2.4vw, 32px)",
            lineHeight: "1.12",
            letterSpacing: "-0.026em",
            fontWeight: 700,
          }}
        >
          {phase.title}
        </h3>
        <p className="mt-3 text-[15.5px] sm:text-[16.5px] text-ink-soft leading-relaxed">{phase.body}</p>
        {hasBullets && (
          <>
            <motion.div
              initial={false}
              animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
              transition={{ duration: 0.45, ease: EASE_OUT }}
              style={{ overflow: "hidden" }}
            >
              <ul className="mt-5 space-y-2">
                {phase.bullets!.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-[14.5px] sm:text-[15px] text-ink-soft"
                  >
                    <span
                      className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full text-white"
                      style={{ background: ACCENT }}
                      aria-hidden
                    >
                      <Check size={9} strokeWidth={3.5} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="mt-5 inline-flex items-center gap-1 text-[13.5px] sm:text-[14px] font-semibold transition-colors"
              style={{ color: ACCENT }}
            >
              {open ? "Read less" : "Read more"}
              <span aria-hidden className="text-[14px]">{open ? "‹‹" : "››"}</span>
            </button>
          </>
        )}
      </div>
    </motion.li>
  );
}

/* ────────────────────────────  5 · Deliverables  ────────────────────── */

function Deliverables({ content }: { content: ServiceContent }) {
  return (
    <section
      data-surface="dark"
      className="relative pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24 text-white"
      style={{ background: "var(--surface-dark)" }}
    >
      <div className="container-v3">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-12 items-end text-center lg:text-left">
          <div>
            <Reveal>
              <p className="eyebrow text-white/55">{content.deliverables.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="mt-5 max-w-[20ch] mx-auto lg:mx-0 balance text-white"
                style={{
                  fontSize: "clamp(32px, 5.4vw, 64px)",
                  lineHeight: "1.04",
                  letterSpacing: "-0.034em",
                  fontWeight: 700,
                }}
              >
                {content.deliverables.headlineMain}
                <span className="block text-white/55">{content.deliverables.headlineSub}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="text-[15px] sm:text-[17px] text-white/65 leading-relaxed max-w-[480px] mx-auto lg:mx-0 lg:justify-self-end">
              {content.deliverables.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 sm:mt-16 grid gap-5 sm:gap-6 md:grid-cols-3">
          {content.deliverables.columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.06 * i, ease: EASE_OUT }}
              className="rounded-[24px] sm:rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm"
            >
              <p className="text-[10.5px] font-bold uppercase tracking-[0.20em] text-white/55">0{i + 1}</p>
              <h3
                className="mt-3 text-white"
                style={{
                  fontSize: "clamp(20px, 1.8vw, 24px)",
                  lineHeight: "1.16",
                  letterSpacing: "-0.022em",
                  fontWeight: 700,
                }}
              >
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] sm:text-[14.5px] text-white/80 leading-relaxed"
                  >
                    <span
                      className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full text-white"
                      style={{ background: ACCENT }}
                      aria-hidden
                    >
                      <Check size={9} strokeWidth={3.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────  6 · Process  ─────────────────────────── */

function ProcessTimeline({ content }: { content: ServiceContent }) {
  return (
    <section
      data-surface="light"
      className="surface-light-2 relative pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24"
      style={{ background: "var(--surface-light-2)" }}
    >
      <div className="container-v3">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-12 items-end text-center lg:text-left">
          <div>
            <Reveal>
              <p className="eyebrow text-ink-muted">{content.process.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="mt-5 max-w-[18ch] mx-auto lg:mx-0 balance text-ink"
                style={{
                  fontSize: "clamp(32px, 5.4vw, 64px)",
                  lineHeight: "1.04",
                  letterSpacing: "-0.034em",
                  fontWeight: 700,
                }}
              >
                {content.process.headlineMain}
                <span className="block text-ink/55">{content.process.headlineSub}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="text-[15px] sm:text-[17px] text-ink-soft leading-relaxed max-w-[480px] mx-auto lg:mx-0 lg:justify-self-end">
              {content.process.intro}
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 sm:mt-16 grid gap-5 sm:gap-6 md:grid-cols-4">
          {content.process.steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.06 * i, ease: EASE_OUT }}
              className="relative bg-white rounded-[24px] sm:rounded-[28px] border border-ink/8 p-6 sm:p-7"
            >
              <span
                aria-hidden
                className="block h-[14px] w-[14px] rounded-full"
                style={{
                  background: i === 0 ? "#FFB07A" : ACCENT,
                  boxShadow: `0 0 0 4px rgba(255,255,255,1), 0 0 0 5px ${ACCENT_GLOW}`,
                }}
              />
              <p className="mt-5 text-[10.5px] font-bold uppercase tracking-[0.20em] text-ink-muted">{step.eta}</p>
              <h3
                className="mt-2 text-ink"
                style={{
                  fontSize: "clamp(18px, 1.6vw, 20px)",
                  fontWeight: 700,
                  letterSpacing: "-0.022em",
                  lineHeight: "1.2",
                }}
              >
                {step.title}
              </h3>
              <p className="mt-2.5 text-[13.5px] sm:text-[14px] text-ink-soft leading-relaxed">{step.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ────────────────────────────  7 · Stack  ───────────────────────────── */

function Stack({ content }: { content: ServiceContent }) {
  return (
    <section data-surface="light" className="surface-light relative pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24">
      <div className="container-v3">
        <div className="max-w-[680px]">
          <Reveal>
            <p className="eyebrow text-ink-muted">{content.stack.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="mt-5 balance text-ink"
              style={{
                fontSize: "clamp(32px, 5.4vw, 64px)",
                lineHeight: "1.04",
                letterSpacing: "-0.034em",
                fontWeight: 700,
              }}
            >
              {content.stack.headlineMain}
              <span className="block text-ink/55">{content.stack.headlineSub}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[16px] sm:text-[17px] text-ink-soft leading-relaxed">{content.stack.intro}</p>
          </Reveal>
        </div>

        <ul className="mt-14 sm:mt-16 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.stack.items.map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.04 * i, ease: EASE_OUT }}
              className="rounded-2xl border border-ink/10 bg-white p-5 sm:p-6"
            >
              <div className="flex items-start gap-3">
                {item.logo ? (
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white border border-ink/10"
                    aria-hidden
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${item.logo}`}
                      alt=""
                      width="22"
                      height="22"
                      loading="lazy"
                      className="h-[22px] w-[22px] object-contain"
                    />
                  </span>
                ) : (
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white"
                    style={{ background: ACCENT }}
                    aria-hidden
                  >
                    <Sparkles size={16} strokeWidth={2.2} />
                  </span>
                )}
                <div>
                  <h3 className="text-[15.5px] font-bold text-ink leading-tight">{item.name}</h3>
                  <p className="mt-1.5 text-[13.5px] sm:text-[14px] text-ink-soft leading-relaxed">{item.body}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ────────────────────────────  8 · FAQ  ─────────────────────────────── */

function FAQ({ content }: { content: ServiceContent }) {
  return (
    <section
      data-surface="light"
      className="surface-light-2 relative pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24"
      style={{ background: "var(--surface-light-2)" }}
    >
      <div className="container-v3">
        <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-10 lg:gap-16 items-start">
          <div>
            <Reveal>
              <p className="eyebrow text-ink-muted">{content.faq.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="mt-5 max-w-[14ch] balance text-ink"
                style={{
                  fontSize: "clamp(32px, 5.4vw, 64px)",
                  lineHeight: "1.04",
                  letterSpacing: "-0.034em",
                  fontWeight: 700,
                }}
              >
                {content.faq.headlineMain}
                <span className="block text-ink/55">{content.faq.headlineSub}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[15.5px] text-ink-soft leading-relaxed max-w-[400px]">{content.faq.intro}</p>
            </Reveal>
          </div>

          <ul className="space-y-2 sm:space-y-3">
            {content.faq.items.map((item, i) => (
              <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.04 * index, ease: EASE_OUT }}
      className="rounded-2xl border border-ink/10 bg-white overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 sm:py-6 text-left text-ink hover:bg-ink/[0.02] transition-colors"
      >
        <span className="text-[15.5px] sm:text-[17px] font-semibold leading-snug" style={{ letterSpacing: "-0.018em" }}>
          {q}
        </span>
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink/5 text-ink" aria-hidden>
          {open ? <Minus size={14} strokeWidth={2.4} /> : <Plus size={14} strokeWidth={2.4} />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: EASE_OUT }}
        style={{ overflow: "hidden" }}
      >
        <p className="px-5 sm:px-7 pb-6 text-[14.5px] sm:text-[15.5px] text-ink-soft leading-relaxed">{a}</p>
      </motion.div>
    </motion.li>
  );
}

/* ────────────────────────────  9 · Lead-magnet  ─────────────────────── */

function LeadMagnet({ content }: { content: ServiceContent }) {
  return (
    <section data-surface="light" className="surface-light relative pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24">
      <div className="container-v3">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="relative rounded-[28px] sm:rounded-[40px] border-2 bg-white p-8 sm:p-12 md:p-16 overflow-hidden"
          style={{ borderColor: ACCENT }}
        >
          <span
            aria-hidden
            className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full opacity-[0.10]"
            style={{ background: `radial-gradient(circle at center, ${ACCENT} 0%, transparent 70%)` }}
          />
          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center">
            <div>
              <p className="eyebrow text-ink-muted">{content.leadMagnet.eyebrow}</p>
              <h2
                className="mt-5 max-w-[18ch] balance text-ink"
                style={{
                  fontSize: "clamp(28px, 4.8vw, 56px)",
                  lineHeight: "1.04",
                  letterSpacing: "-0.030em",
                  fontWeight: 700,
                }}
              >
                {content.leadMagnet.headline}
              </h2>
              <p className="mt-5 max-w-[520px] text-[15.5px] sm:text-[17px] text-ink-soft leading-relaxed">
                {content.leadMagnet.body}
              </p>
              <ul className="mt-6 space-y-2">
                {content.leadMagnet.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[14.5px] sm:text-[15px] text-ink-soft">
                    <span
                      className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full text-white"
                      style={{ background: ACCENT }}
                      aria-hidden
                    >
                      <Check size={9} strokeWidth={3.5} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start lg:items-center gap-4">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-[15px] sm:text-[16px] px-7 py-3.5 transition-colors"
              >
                {content.leadMagnet.cta} <ArrowRight size={16} />
              </Link>
              <p className="text-[12px] text-ink-muted leading-relaxed">{content.leadMagnet.note}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────  10 · Final CTA  ──────────────────────── */

function FinalCTA({ content }: { content: ServiceContent }) {
  return (
    <section
      data-surface="dark"
      className="relative pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24 text-white overflow-hidden"
      style={{ background: "var(--surface-deep)" }}
    >
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full opacity-[0.18]"
        style={{ background: `radial-gradient(circle at center, ${ACCENT} 0%, transparent 70%)` }}
      />
      <div className="container-v3 relative grid lg:grid-cols-[1fr_minmax(0,0.9fr)] gap-12 lg:gap-16 items-center">
        <div>
        <Reveal>
          <p className="eyebrow text-white/55">{content.finalCta.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="mt-5 max-w-[20ch] balance text-white"
            style={{
              fontSize: "clamp(38px, 7vw, 96px)",
              lineHeight: "1.0",
              letterSpacing: "-0.04em",
              fontWeight: 700,
            }}
          >
            {content.finalCta.headlineMain}
            <span className="block text-white/55">{content.finalCta.headlineSub}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[560px] text-[16px] sm:text-[18px] text-white/65 leading-relaxed">
            {content.finalCta.body}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#enquire"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-[15px] sm:text-[16px] px-7 py-3.5 transition-colors"
            >
              {content.finalCta.primary} <ArrowRight size={16} />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-[14px] sm:text-[15px] text-white/75 hover:text-white transition-colors"
            >
              Back to homepage <ArrowUpRight size={14} />
            </Link>
          </div>
        </Reveal>
        </div>

        {/* Second form, at the foot of the page — the house pattern is one in
            the hero and one here, and nowhere in between. A visitor who read
            the whole page should not have to scroll back up to act. */}
        <div id="enquire" className="scroll-mt-24">
          <LeadForm
            source={`service-${content.slug}-footer`}
            heading="Get your free audit"
            note="A one-page audit in your inbox within 24 hours. No obligation."
            defaultService={LEAD_FORM_SERVICE[content.slug] ?? "Not sure yet"}
          />
        </div>
      </div>
    </section>
  );
}

// Re-export the accent constant in case other DM-NZ subpages want to align.
export { ACCENT as DM_ACCENT, ACCENT_BG_SOFT as DM_ACCENT_BG_SOFT };
