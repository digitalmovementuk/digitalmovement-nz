import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Plus, Minus } from "lucide-react";
import { Reveal } from "../lib/Reveal";
import { LeadForm } from "./LeadForm";
import { caseStudies } from "../content";
import type { SeoPageContent } from "../content/seo-pages";
import { Seo, seoPageSchema, faqSchema, breadcrumbs } from "../seo";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/**
 * Brand accent, matching ServicePageShell so these pages read as part of the
 * same site rather than as a bolt-on. Everything else visual here — the type
 * scale, the plum surfaces, the card radii, the #0071E3 CTA, container-v3,
 * the eyebrow treatment — comes from the live design system for the same
 * reason.
 */
const ACCENT = "#F05F22";

/**
 * Fidelity tag. These pages are signed off as MID-FI: real copy and the real
 * design system, but not yet approved to go live.
 *
 * Set to `null` when they are approved for production — that one edit removes
 * the badge from all four pages. Nothing else depends on it.
 */
const FIDELITY: string | null = "MID-FI";

function FidelityTag() {
  if (!FIDELITY) return null;
  return (
    <div
      className="fixed bottom-3 left-3 z-[60] rounded-full bg-ink/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm pointer-events-none select-none"
      aria-hidden
    >
      {FIDELITY}
    </div>
  );
}

/**
 * The /seo hub and its city spokes.
 *
 * Deliberately a different template from ServicePageShell, for three reasons.
 *
 * 1. **The form is in the hero.** These pages are entered from a commercial
 *    search, not from browsing the site, so the enquiry path cannot be eight
 *    sections down. House rule for SEO landing pages: two-pillar hero, copy
 *    left and form right, a second form at the foot, and no form anywhere
 *    between them.
 *
 * 2. **No hero video.** ServicePageShell autoplays a full-bleed video behind a
 *    100svh hero. That is the wrong trade here — the strategy flags LCP as a
 *    live risk on this site, and a page whose job is to rank cannot spend its
 *    largest contentful paint on decoration. A CSS gradient costs nothing.
 *
 * 3. **The hero is not full-height.** It sizes to its content above a ~66svh
 *    floor, so the section beneath it is visible at the fold and the page
 *    reads as having somewhere to go.
 *
 * Everything renders from one SeoPageContent object. The proof section is the
 * exception: its cards come from the real `caseStudies` in src/content.ts, and
 * only the framing copy is per-page — there are no city case studies to render
 * and the type has no field to invent them in.
 */
export function SeoPageShell({ content }: { content: SeoPageContent }) {
  const isCity = Boolean(content.city);
  const crumbTrail = isCity
    ? [
        { name: "SEO", path: "/seo" },
        { name: content.city!, path: content.path },
      ]
    : [{ name: "SEO", path: "/seo" }];

  return (
    <>
      <Seo
        title={content.meta.title}
        description={content.meta.description}
        path={content.path}
        schema={[
          seoPageSchema({
            name: content.city ? `SEO ${content.city}` : "SEO New Zealand",
            description: content.meta.description,
            path: content.path,
            city: content.city,
            region: content.region,
          }),
          faqSchema(content.faq.items),
          breadcrumbs(crumbTrail),
        ]}
      />
      <Hero content={content} />
      <Local content={content} />
      <Outcomes content={content} />
      <Included content={content} />
      <Process content={content} />
      <Proof content={content} />
      <Nearby content={content} />
      <FAQ content={content} />
      <FinalCTA content={content} />
      <FidelityTag />
    </>
  );
}

/* ────────────────────────────  1 · Hero  ────────────────────────────── */

function Hero({ content }: { content: SeoPageContent }) {
  return (
    <section
      data-surface="dark"
      id="top"
      className="relative isolate overflow-hidden min-h-[66svh] flex items-center pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24"
      style={{
        background:
          "radial-gradient(120% 100% at 12% 0%, #2c1450 0%, var(--surface-dark) 46%, var(--surface-deep) 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full opacity-[0.16] pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${ACCENT} 0%, transparent 70%)` }}
      />

      <div className="container-v3 relative">
        <div className="grid lg:grid-cols-[1.05fr_minmax(0,0.95fr)] gap-10 lg:gap-14 xl:gap-20 items-center">
          {/*
            Left — the copy pillar.
            The lg padding-bottom lifts this column off the fixed Google-rating
            badge in the viewport's lower-left corner. The column is vertically
            centred against a much taller form, so padding here shifts the copy
            up; padding on the section itself would only make the section taller
            and leave the chips exactly where they were.
          */}
          <div className="text-center lg:text-left lg:pb-28">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[10.5px] sm:text-[11.5px] font-bold uppercase text-white/70 tracking-[0.28em]"
            >
              {content.hero.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18, ease: EASE_OUT }}
              className="mt-4 sm:mt-5 balance text-white mx-auto lg:mx-0 max-w-[16ch]"
              style={{
                fontSize: "clamp(38px, 5.6vw, 76px)",
                lineHeight: "0.98",
                letterSpacing: "-0.04em",
                fontWeight: 700,
              }}
            >
              {content.hero.h1}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 sm:mt-6 mx-auto lg:mx-0 max-w-[46ch] text-[15px] sm:text-[17px] text-white/70 leading-relaxed"
            >
              {content.hero.sub}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="mt-7 flex flex-wrap justify-center lg:justify-start gap-2"
            >
              {content.hero.chips.map((chip) => (
                <li
                  key={chip}
                  className="inline-flex items-center gap-1.5 border border-white/20 bg-white/[0.06] backdrop-blur-sm px-3 py-1.5 text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] text-white/85"
                >
                  <Check size={11} strokeWidth={3} style={{ color: ACCENT }} />
                  {chip}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right — the form pillar */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: EASE_OUT }}
          >
            <LeadForm
              source={`seo-${content.slug || "hub"}-hero`}
              heading={content.hero.formHeading}
              note={content.hero.formNote}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────  2 · Local  ───────────────────────────── */

function Local({ content }: { content: SeoPageContent }) {
  return (
    <section
      data-surface="light"
      className="surface-light relative pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24"
    >
      <div className="container-v3">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          <div>
            <Reveal>
              <p className="eyebrow text-ink-muted">{content.local.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="mt-5 max-w-[18ch] balance text-ink"
                style={{
                  fontSize: "clamp(32px, 5.2vw, 64px)",
                  lineHeight: "1.04",
                  letterSpacing: "-0.034em",
                  fontWeight: 700,
                }}
              >
                {content.local.headlineMain}
                <span className="block text-ink/55">{content.local.headlineSub}</span>
              </h2>
            </Reveal>

            {content.local.stats && content.local.stats.length > 0 && (
              <Reveal delay={0.12}>
                <dl className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 border-t border-ink/10 pt-8">
                  {content.local.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd>
                        <span
                          className="block text-ink"
                          style={{
                            fontSize: "clamp(26px, 3vw, 38px)",
                            lineHeight: "1",
                            letterSpacing: "-0.04em",
                            fontWeight: 700,
                          }}
                        >
                          {stat.value}
                        </span>
                        <span className="mt-2 block text-[12px] sm:text-[12.5px] text-ink-muted leading-snug">
                          {stat.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            )}
          </div>

          <div className="space-y-5 sm:space-y-6 text-[15.5px] sm:text-[17px] text-ink-soft leading-relaxed max-w-[64ch]">
            {content.local.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: 0.06 * i, ease: EASE_OUT }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────  3 · Outcomes  ────────────────────────── */

function Outcomes({ content }: { content: SeoPageContent }) {
  return (
    <section
      data-surface="light"
      className="relative pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24"
      style={{ background: "var(--surface-light-2)" }}
    >
      <div className="container-v3">
        <SectionHead
          eyebrow={content.outcomes.eyebrow}
          main={content.outcomes.headlineMain}
          sub={content.outcomes.headlineSub}
          intro={content.outcomes.intro}
        />
        <ul className="mt-12 sm:mt-16 grid gap-5 sm:gap-6 md:grid-cols-3">
          {content.outcomes.items.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: 0.06 * i, ease: EASE_OUT }}
              className="bg-white rounded-[28px] sm:rounded-[36px] border border-ink/8 p-7 sm:p-9"
            >
              <div className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink-muted">
                <span>0{i + 1}</span>
                <span className="h-px w-6 bg-ink/15" />
                <span>{item.kicker}</span>
              </div>
              <p
                className="mt-5 text-ink"
                style={{
                  fontSize: "clamp(38px, 4.6vw, 58px)",
                  lineHeight: "0.92",
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
                  fontSize: "clamp(19px, 1.8vw, 23px)",
                  lineHeight: "1.18",
                  letterSpacing: "-0.022em",
                  fontWeight: 600,
                }}
              >
                {item.title}
              </h3>
              <p className="mt-3 text-[14.5px] sm:text-[15.5px] text-ink-soft leading-relaxed">
                {item.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ────────────────────────────  4 · Included  ────────────────────────── */

function Included({ content }: { content: SeoPageContent }) {
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
              <p className="eyebrow text-white/55">{content.included.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="mt-5 max-w-[20ch] mx-auto lg:mx-0 balance text-white"
                style={{
                  fontSize: "clamp(32px, 5.2vw, 60px)",
                  lineHeight: "1.04",
                  letterSpacing: "-0.034em",
                  fontWeight: 700,
                }}
              >
                {content.included.headlineMain}
                <span className="block text-white/55">{content.included.headlineSub}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="text-[15px] sm:text-[17px] text-white/65 leading-relaxed max-w-[480px] mx-auto lg:mx-0 lg:justify-self-end">
              {content.included.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 sm:mt-16 grid gap-5 sm:gap-6 md:grid-cols-3">
          {content.included.columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: 0.06 * i, ease: EASE_OUT }}
              className="rounded-[24px] sm:rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm"
            >
              <p className="text-[10.5px] font-bold uppercase tracking-[0.20em] text-white/55">
                0{i + 1}
              </p>
              <h3
                className="mt-3 text-white"
                style={{
                  fontSize: "clamp(19px, 1.8vw, 23px)",
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

/* ────────────────────────────  5 · Process  ─────────────────────────── */

function Process({ content }: { content: SeoPageContent }) {
  return (
    <section
      data-surface="light"
      className="relative pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24"
      style={{ background: "var(--surface-light-2)" }}
    >
      <div className="container-v3">
        <SectionHead
          eyebrow={content.process.eyebrow}
          main={content.process.headlineMain}
          sub={content.process.headlineSub}
          intro={content.process.intro}
        />
        <ol className="mt-14 sm:mt-16 grid gap-5 sm:gap-6 md:grid-cols-4">
          {content.process.steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: 0.06 * i, ease: EASE_OUT }}
              className="bg-white rounded-[24px] sm:rounded-[28px] border border-ink/8 p-6 sm:p-7"
            >
              <span
                aria-hidden
                className="block h-[14px] w-[14px] rounded-full"
                style={{
                  background: i === 0 ? "#FFB07A" : ACCENT,
                  boxShadow: `0 0 0 4px #fff, 0 0 0 5px rgba(240, 95, 34, 0.34)`,
                }}
              />
              <p className="mt-5 text-[10.5px] font-bold uppercase tracking-[0.20em] text-ink-muted">
                {step.eta}
              </p>
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
              <p className="mt-2.5 text-[13.5px] sm:text-[14px] text-ink-soft leading-relaxed">
                {step.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ────────────────────────────  6 · Proof  ───────────────────────────── */

/**
 * Real client reviews, rendered from the same `caseStudies` the homepage uses.
 *
 * Two deliberate departures from the homepage's <ClientCases>. It autoplays a
 * video per card, which is the wrong cost on a page being entered from search;
 * and it hardcodes its own heading, which would put the same words on all four
 * of these pages. This renders the same real data as text, under per-page
 * framing copy.
 *
 * None of these clients are in the city this page targets, and none are trades
 * businesses. The `proof` copy says so. Nothing here may be relabelled to
 * imply otherwise.
 */
function Proof({ content }: { content: SeoPageContent }) {
  const shown = caseStudies.slice(0, 3);
  return (
    <section
      data-surface="light"
      className="surface-light relative pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24"
    >
      <div className="container-v3">
        <SectionHead
          eyebrow={content.proof.eyebrow}
          main={content.proof.headlineMain}
          sub={content.proof.headlineSub}
          intro={content.proof.intro}
        />
        <ul className="mt-12 sm:mt-16 grid gap-5 sm:gap-6 md:grid-cols-3">
          {shown.map((cs, i) => (
            <motion.li
              key={cs.slug}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: 0.06 * i, ease: EASE_OUT }}
              className="flex flex-col rounded-[24px] sm:rounded-[28px] border border-ink/10 bg-white p-6 sm:p-8"
            >
              <p
                className="text-ink"
                style={{
                  fontSize: "clamp(30px, 3.4vw, 42px)",
                  lineHeight: "0.95",
                  letterSpacing: "-0.045em",
                  fontWeight: 700,
                }}
              >
                {cs.metrics[0].value}
              </p>
              <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.16em] text-ink-muted">
                {cs.metrics[0].label}
              </p>
              <blockquote className="mt-5 text-[14.5px] sm:text-[15px] text-ink-soft leading-relaxed flex-1">
                “{trimQuote(cs.body)}”
              </blockquote>
              <footer className="mt-5 pt-5 border-t border-ink/10">
                <p className="text-[14.5px] font-bold text-ink">{cs.client}</p>
                <p className="mt-0.5 text-[12.5px] text-ink-muted">
                  {cs.industry} · {cs.services.join(", ")}
                </p>
              </footer>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Keeps long review bodies to a readable card length without mid-word cuts. */
function trimQuote(text: string, max = 240): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

/* ────────────────────────────  7 · Nearby  ──────────────────────────── */

function Nearby({ content }: { content: SeoPageContent }) {
  return (
    <section
      data-surface="light"
      className="relative pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24"
      style={{ background: "var(--surface-light-2)" }}
    >
      <div className="container-v3">
        <SectionHead
          eyebrow={content.nearby.eyebrow}
          main={content.nearby.headlineMain}
          sub={content.nearby.headlineSub}
          intro={content.nearby.intro}
        />
        <ul className="mt-12 sm:mt-14 grid gap-4 sm:gap-5 md:grid-cols-3">
          {content.nearby.links.map((link, i) => (
            <motion.li
              key={link.to}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.05 * i, ease: EASE_OUT }}
            >
              <Link
                to={link.to}
                className="group flex h-full flex-col rounded-[22px] border border-ink/10 bg-white p-6 sm:p-7 transition hover:-translate-y-0.5 hover:border-ink/30"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="text-[17px] sm:text-[18px] font-bold text-ink tracking-[-0.02em]">
                    {link.label}
                  </span>
                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-ink-faint transition group-hover:text-ink"
                  />
                </span>
                <span className="mt-2.5 text-[14px] text-ink-soft leading-relaxed">
                  {link.blurb}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ────────────────────────────  8 · FAQ  ─────────────────────────────── */

function FAQ({ content }: { content: SeoPageContent }) {
  return (
    <section
      data-surface="light"
      className="surface-light relative pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24"
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
                  fontSize: "clamp(32px, 5.2vw, 60px)",
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
              <p className="mt-6 text-[15.5px] text-ink-soft leading-relaxed max-w-[400px]">
                {content.faq.intro}
              </p>
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
      transition={{ duration: 0.45, delay: 0.04 * index, ease: EASE_OUT }}
      className="rounded-2xl border border-ink/10 bg-white overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 sm:py-6 text-left text-ink hover:bg-ink/[0.02] transition-colors"
      >
        <span
          className="text-[15.5px] sm:text-[17px] font-semibold leading-snug"
          style={{ letterSpacing: "-0.018em" }}
        >
          {q}
        </span>
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink/5 text-ink" aria-hidden>
          {open ? <Minus size={14} strokeWidth={2.4} /> : <Plus size={14} strokeWidth={2.4} />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.32, ease: EASE_OUT }}
        style={{ overflow: "hidden" }}
      >
        <p className="px-5 sm:px-7 pb-6 text-[14.5px] sm:text-[15.5px] text-ink-soft leading-relaxed">
          {a}
        </p>
      </motion.div>
    </motion.li>
  );
}

/* ────────────────────────────  9 · Final CTA  ───────────────────────── */

function FinalCTA({ content }: { content: SeoPageContent }) {
  return (
    <section
      data-surface="dark"
      id="enquire"
      className="relative pt-20 sm:pt-24 md:pt-28 pb-20 sm:pb-24 md:pb-28 text-white overflow-hidden"
      style={{ background: "var(--surface-deep)" }}
    >
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full opacity-[0.18] pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${ACCENT} 0%, transparent 70%)` }}
      />
      <div className="container-v3 relative">
        <div className="grid lg:grid-cols-[1fr_minmax(0,0.95fr)] gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="eyebrow text-white/55">{content.finalCta.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="mt-5 max-w-[16ch] mx-auto lg:mx-0 balance text-white"
                style={{
                  fontSize: "clamp(36px, 5.6vw, 76px)",
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
              <p className="mt-6 mx-auto lg:mx-0 max-w-[50ch] text-[15.5px] sm:text-[17px] text-white/65 leading-relaxed">
                {content.finalCta.body}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                to="/"
                className="mt-8 inline-flex items-center gap-1.5 text-[14px] text-white/70 hover:text-white transition-colors"
              >
                Back to homepage <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <LeadForm
              source={`seo-${content.slug || "hub"}-footer`}
              heading={content.finalCta.formHeading}
              note={content.finalCta.formNote}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────  shared  ──────────────────────────────── */

function SectionHead({
  eyebrow,
  main,
  sub,
  intro,
}: {
  eyebrow: string;
  main: string;
  sub: string;
  intro: string;
}) {
  return (
    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-12 items-end text-center lg:text-left">
      <div>
        <Reveal>
          <p className="eyebrow text-ink-muted">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="mt-5 max-w-[20ch] mx-auto lg:mx-0 balance text-ink"
            style={{
              fontSize: "clamp(32px, 5.2vw, 60px)",
              lineHeight: "1.04",
              letterSpacing: "-0.034em",
              fontWeight: 700,
            }}
          >
            {main}
            <span className="block text-ink/55">{sub}</span>
          </h2>
        </Reveal>
      </div>
      <Reveal delay={0.12}>
        <p className="text-[15px] sm:text-[17px] text-ink-soft leading-relaxed max-w-[480px] mx-auto lg:mx-0 lg:justify-self-end">
          {intro}
        </p>
      </Reveal>
    </div>
  );
}
