import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Compass, Heart, MapPin, Sparkles, Target } from "lucide-react";
import { Reveal } from "../lib/Reveal";
import { about, HERO_IMAGE, STUDIO_IMAGE } from "../content/about";
import { DM_ACCENT } from "../components/ServicePageShell";
import { Seo, breadcrumbs } from "../seo";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

// Full About page. Layout arc: hero (loft photo + intro) → three pillars
// (vision / mission / values) → founder-style team note → studio image with
// location detail → seven-person team grid → final CTA. DM-rebranded from
// the NEO source.
export function AboutUs() {
  // Was a client-side document.title effect, so crawlers never saw it.
  // <Seo> writes it into the pre-rendered HTML instead.
  return (
    <>
      <Seo
        title={about.meta.title}
        description={about.meta.description}
        path="/about"
        schema={[breadcrumbs([{ name: "About", path: "/about" }])]}
      />
      <AboutHero />
      <Pillars />
      <TeamNote />
      <Studio />
      <AboutCTA />
    </>
  );
}

/* ───────────  Hero — full-bleed photo + intro  ─────────── */

function AboutHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);
  const accentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.82]);

  return (
    <section
      ref={ref}
      data-surface="dark"
      className="surface-dark relative isolate min-h-[78svh] w-full overflow-hidden"
    >
      <motion.div
        aria-hidden
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 -z-10 h-[120%]"
      >
        <img
          src={HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10 bg-[#100620]"
      />

      <motion.div
        aria-hidden
        style={{ y: accentY }}
        className="pointer-events-none absolute -right-32 top-[20%] -z-10 h-[520px] w-[520px] rounded-full opacity-[0.30]"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: `radial-gradient(circle at center, ${DM_ACCENT} 0%, transparent 65%)` }}
        />
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-44"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 60%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[55%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(16,6,32,0) 0%, rgba(16,6,32,0.55) 55%, rgba(16,6,32,0.95) 100%)",
        }}
      />

      <motion.div
        style={{ y: textY }}
        className="relative mx-auto flex min-h-[78svh] w-full max-w-[var(--container-max)] flex-col justify-end px-[var(--gutter)] pb-20 pt-[max(140px,18vh)] sm:pb-24 md:pb-20"
      >
        <Reveal>
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.26em] text-white/80 sm:text-[12px]">
            <span className="h-px w-7 bg-white/45" aria-hidden />
            {about.hero.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1
            className="mt-5 max-w-[20ch] balance text-white"
            style={{
              fontSize: "clamp(40px, 6.6vw, 92px)",
              lineHeight: "1.0",
              letterSpacing: "-0.038em",
              fontWeight: 700,
            }}
          >
            {about.hero.headlinePre}
            <span className="block text-white/55">{about.hero.headlineSoft}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-7 max-w-[58ch] text-[15.5px] leading-relaxed text-white/72 sm:text-[17px] md:text-[18px]">
            {about.hero.sub}
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <p className="mt-7 inline-flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.22em] text-white/60 sm:text-[12px]">
            <MapPin size={14} strokeWidth={2} style={{ color: DM_ACCENT }} />
            {about.hero.locations}
          </p>
        </Reveal>
      </motion.div>
    </section>
  );
}

/* ───────────  Pillars — vision / mission / values  ─────────── */

const PILLAR_ICONS = [Compass, Target, Heart] as const;

function Pillars() {
  return (
    <section
      data-surface="light"
      className="surface-light-2 relative overflow-hidden pb-20 pt-20 sm:pt-24 md:pb-28 md:pt-28"
    >
      <div className="container-v3 relative">
        <div className="mx-auto max-w-[760px] text-center">
          <Reveal>
            <p className="inline-flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em] text-ink-muted">
              <span className="h-px w-8 bg-ink/20" aria-hidden />
              What we do
              <span className="h-px w-8 bg-ink/20" aria-hidden />
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              className="mt-5 balance text-ink"
              style={{
                fontSize: "clamp(30px, 4.4vw, 56px)",
                lineHeight: "1.04",
                letterSpacing: "-0.032em",
                fontWeight: 700,
              }}
            >
              Three promises.
              <span className="block text-ink/55">One way of working.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 mx-auto max-w-[58ch] text-[15px] leading-relaxed text-ink-soft sm:text-[16.5px]">
              At Digital Movement we do things differently. We focus on what genuinely matters to our clients: measurable results, clear communication, and marketing strategies that actually help businesses grow.
            </p>
          </Reveal>
        </div>

        <ul className="mx-auto mt-14 flex max-w-[860px] flex-col gap-8 sm:gap-10 md:mt-16">
          {about.pillars.map((p, i) => {
            const Icon = PILLAR_ICONS[i] ?? Compass;
            return <PillarScrollCard key={p.label} pillar={p} icon={Icon} index={i} />;
          })}
        </ul>
      </div>
    </section>
  );
}

function PillarScrollCard({
  pillar,
  icon: Icon,
  index,
}: {
  pillar: { label: string; headline: string; body: string; bodyMore?: string };
  icon: typeof Compass;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.55,
    restDelta: 0.001,
  });
  const focus = useTransform(smooth, [0.18, 0.42, 0.58, 0.82], [0, 1, 1, 0]);
  const darkOpacity = focus;
  const accentRadialOpacity = useTransform(focus, [0, 1], [0, 0.28]);
  const headlineColor = useTransform(focus, [0, 1], ["#1B0E2E", "#FFFFFF"]);
  const bodyColor = useTransform(focus, [0, 1], ["#3F3450", "rgba(255,255,255,0.78)"]);
  const counterColor = useTransform(focus, [0, 1], ["#6E6478", "rgba(255,255,255,0.62)"]);
  const iconBg = useTransform(
    focus,
    [0, 1],
    ["rgba(240, 95, 34, 0.12)", "rgba(255,255,255,0.12)"]
  );
  const iconColor = useTransform(focus, [0, 1], [DM_ACCENT, "#FFFFFF"]);
  const numeralColor = useTransform(
    focus,
    [0, 1],
    ["rgba(27,14,46,0.05)", "rgba(255,255,255,0.06)"]
  );
  const dividerBg = useTransform(
    focus,
    [0, 1],
    [
      "linear-gradient(90deg, rgba(27,14,46,0.15) 0%, rgba(27,14,46,0.05) 60%, transparent 100%)",
      "linear-gradient(90deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",
    ]
  );
  const cardShadow = useTransform(
    focus,
    [0, 1],
    [
      "0 18px 48px -30px rgba(27,14,46,0.18)",
      "0 30px 80px -28px rgba(0,0,0,0.55)",
    ]
  );
  const borderColor = useTransform(
    focus,
    [0, 1],
    ["rgba(27,14,46,0.08)", "rgba(255,255,255,0.10)"]
  );

  return (
    <motion.li
      ref={ref}
      style={{ boxShadow: cardShadow, borderColor }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.04 * index, ease: EASE_OUT }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative isolate flex flex-col overflow-hidden rounded-[28px] border bg-white p-8 sm:p-10 md:p-12"
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: darkOpacity,
          background: "linear-gradient(135deg, #100620 0%, #1B0E2E 50%, #2a1646 100%)",
        }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full"
        style={{
          opacity: accentRadialOpacity,
          background: `radial-gradient(circle at center, ${DM_ACCENT} 0%, transparent 65%)`,
        }}
      />

      <span
        aria-hidden
        className="absolute inset-x-0 top-0 z-10 h-[2px]"
        style={{
          background: `linear-gradient(to right, ${DM_ACCENT}, #FFB07A, ${DM_ACCENT})`,
        }}
      />

      <motion.span
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-4 select-none sm:-right-1 sm:-top-2"
        style={{
          color: numeralColor,
          fontSize: "clamp(120px, 16vw, 200px)",
          fontWeight: 600,
          fontStyle: "italic",
          letterSpacing: "-0.05em",
          lineHeight: 0.85,
        }}
      >
        0{index + 1}
      </motion.span>

      <div className="relative flex items-center justify-between">
        <motion.div
          className="grid h-12 w-12 place-items-center rounded-2xl"
          style={{ background: iconBg, color: iconColor }}
        >
          <Icon size={20} strokeWidth={1.85} />
        </motion.div>
        <motion.span
          className="text-[10.5px] font-bold uppercase tracking-[0.24em]"
          style={{ color: counterColor }}
        >
          0{index + 1} / 03
        </motion.span>
      </div>

      <p
        className="relative mt-7 text-[11px] font-bold uppercase tracking-[0.22em]"
        style={{ color: DM_ACCENT }}
      >
        {pillar.label}
      </p>

      <motion.h3
        className="relative mt-3 balance"
        style={{
          color: headlineColor,
          fontSize: "clamp(26px, 3vw, 38px)",
          lineHeight: "1.1",
          letterSpacing: "-0.026em",
          fontWeight: 700,
        }}
      >
        {pillar.headline}
      </motion.h3>

      <motion.p
        className="relative mt-5 text-[15px] leading-relaxed sm:text-[16px]"
        style={{ color: bodyColor }}
      >
        {pillar.body}
      </motion.p>

      {pillar.bodyMore && (
        <>
          <motion.div
            initial={false}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
            style={{ overflow: "hidden" }}
            className="relative"
          >
            <div className="space-y-4 pt-5 sm:pt-6">
              {pillar.bodyMore.split("\n\n").map((p, i) => (
                <motion.p
                  key={i}
                  className="text-[15px] leading-relaxed sm:text-[16px]"
                  style={{ color: bodyColor }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </motion.div>
          <motion.button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="relative mt-5 inline-flex items-center gap-1 text-[13.5px] sm:text-[14px] font-semibold transition-colors self-start"
            style={{ color: DM_ACCENT }}
          >
            {open ? "Read less" : "Read more"}
            <span aria-hidden className="text-[14px]">{open ? "‹‹" : "››"}</span>
          </motion.button>
        </>
      )}

      <motion.span
        aria-hidden
        className="relative mt-7 block h-px w-full"
        style={{ background: dividerBg }}
      />
    </motion.li>
  );
}

/* ───────────  Team note (founder-equivalent) + track record  ─────────── */

function TeamNote() {
  return (
    <section
      data-surface="light"
      className="surface-light-2 relative overflow-hidden pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24"
    >
      <div className="container-v3 relative">
        <div className="grid items-start gap-10 sm:gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto w-full max-w-[460px] lg:mx-0 lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-surface-2 shadow-[0_36px_90px_-36px_rgba(27,14,46,0.32)] sm:rounded-[36px]">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                  alt="Digital Movement team"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.45) 100%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/80">
                    {about.founderNote.role}
                  </p>
                  <p className="mt-1.5 text-[20px] font-semibold tracking-tight sm:text-[22px]">
                    Digital Movement
                  </p>
                </div>
              </div>
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-2xl sm:-bottom-5 sm:-right-5 sm:h-32 sm:w-32"
                style={{ background: "rgba(240, 95, 34, 0.20)" }}
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: DM_ACCENT }}
              >
                {about.founderNote.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="mt-5 max-w-[22ch] balance text-ink"
                style={{
                  fontSize: "clamp(28px, 4.2vw, 56px)",
                  lineHeight: "1.04",
                  letterSpacing: "-0.032em",
                  fontWeight: 700,
                }}
              >
                {about.founderNote.headlinePre}
                <span className="block text-ink/55">{about.founderNote.headlineSoft}</span>
              </h2>
            </Reveal>
            <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-ink-soft sm:text-[16.5px]">
              {about.founderNote.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.12 + 0.06 * i}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.32}>
              <p className="mt-10 mb-4 text-[10.5px] font-bold uppercase tracking-[0.24em] text-ink-muted">
                Our numbers
              </p>
            </Reveal>
            <ul className="grid gap-3.5 border-t border-ink/10 pt-5 md:grid-cols-2">
              {about.founderNote.trackRecord.map((c, i) => (
                <motion.li
                  key={c.year}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.36 + 0.06 * i, ease: EASE_OUT }}
                  className="flex gap-4 text-[13.5px] leading-snug"
                >
                  <span className="shrink-0 font-mono text-[12px] font-semibold tracking-[0.04em] text-ink-muted">
                    {c.year}
                  </span>
                  <span className="text-ink-soft">{c.entry}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────  Studio — full-width photo + overlaid copy  ─────────── */

function Studio() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.12]);
  const panelY = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);

  return (
    <section
      ref={ref}
      data-surface="dark"
      className="surface-dark relative isolate overflow-hidden"
    >
      <motion.div
        aria-hidden
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 -z-10 h-[120%]"
      >
        <img
          src={STUDIO_IMAGE}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-[#100620]/55" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(16,6,32,0.55) 0%, rgba(16,6,32,0.78) 60%, rgba(16,6,32,0.92) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 hidden w-full max-w-[820px] md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(16,6,32,0.92) 0%, rgba(16,6,32,0.65) 55%, rgba(16,6,32,0) 100%)",
        }}
      />

      <div className="container-v3 relative grid min-h-[68svh] items-center py-20 sm:py-24 md:min-h-[72svh] md:py-28">
        <motion.div style={{ y: panelY }} className="max-w-[640px] text-white">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/60 sm:text-[12px]">
              {about.studio.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              className="mt-5 balance text-white"
              style={{
                fontSize: "clamp(30px, 5vw, 64px)",
                lineHeight: "1.04",
                letterSpacing: "-0.032em",
                fontWeight: 700,
              }}
            >
              {about.studio.headlinePre}
              <span className="block text-white/55">{about.studio.headlineSoft}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-[58ch] text-[15px] leading-relaxed text-white/72 sm:text-[16.5px]">
              {about.studio.body}
            </p>
          </Reveal>
          <ul className="mt-7 space-y-2.5">
            {about.studio.bullets.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.22 + 0.07 * i, ease: EASE_OUT }}
                className="flex items-start gap-3 text-[14px] text-white/82 sm:text-[14.5px]"
              >
                <span
                  aria-hidden
                  className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: DM_ACCENT }}
                />
                {b}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────  Team grid  ─────────── */

function TeamGrid() {
  return (
    <section
      data-surface="light"
      className="surface-light relative pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24"
    >
      <div className="container-v3">
        <div className="grid items-end gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-12 text-center lg:text-left">
          <div>
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-ink-muted">
                {about.team.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="mt-5 max-w-[18ch] mx-auto lg:mx-0 balance text-ink"
                style={{
                  fontSize: "clamp(34px, 5.4vw, 76px)",
                  lineHeight: "1.02",
                  letterSpacing: "-0.034em",
                  fontWeight: 700,
                }}
              >
                {about.team.headlinePre}
                <span className="block text-ink/55">{about.team.headlineSoft}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="text-[15px] sm:text-[17px] text-ink-soft leading-relaxed max-w-[480px] mx-auto lg:mx-0 lg:justify-self-end">
              {about.team.intro}
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.team.members.map((m, i) => (
            <TeamCard key={m.name} member={m} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function TeamCard({
  member,
  index,
}: {
  member: { name: string; role: string; kicker: string; bio: string; image: string };
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.04 * index, ease: EASE_OUT }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative overflow-hidden rounded-[22px] border border-ink/8 bg-white shadow-[0_18px_48px_-30px_rgba(27,14,46,0.22)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_-30px_rgba(27,14,46,0.28)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-2">
        <motion.img
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          style={{ y: portraitY }}
          className="absolute inset-0 h-[112%] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.45) 85%, rgba(0,0,0,0.65) 100%)",
          }}
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.20em] text-ink shadow-sm backdrop-blur-md">
          {member.kicker}
        </span>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.20em] text-white/85">
            {member.role}
          </p>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-[17px] font-semibold tracking-tight text-ink sm:text-[18px]">
          {member.name}
        </h3>
        <p
          className="mt-1 text-[12px] font-bold uppercase tracking-[0.16em] sm:text-[12.5px]"
          style={{ color: DM_ACCENT }}
        >
          {member.role}
        </p>
        <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft sm:text-[14px]">
          {member.bio}
        </p>
      </div>
    </motion.li>
  );
}

/* ───────────  Final CTA  ─────────── */

function AboutCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const orbAY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const orbAX = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const orbBY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const orbBX = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <section
      ref={ref}
      data-surface="dark"
      className="surface-dark relative overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-20 sm:pb-24 md:pb-28"
    >
      <motion.div
        aria-hidden
        style={{ x: orbAX, y: orbAY }}
        className="pointer-events-none absolute -top-24 right-[-15%] h-[420px] w-[420px] rounded-full opacity-[0.30] sm:h-[520px] sm:w-[520px]"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: `radial-gradient(circle at center, ${DM_ACCENT} 0%, transparent 65%)` }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: orbBX, y: orbBY }}
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[380px] w-[380px] rounded-full opacity-[0.16] sm:h-[460px] sm:w-[460px]"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "radial-gradient(circle at center, #EC178D 0%, transparent 65%)" }}
        />
      </motion.div>

      <div className="container-v3 relative">
        <div className="mx-auto max-w-[820px] text-center">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/55 sm:text-[12px]">
              {about.cta.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              className="mt-5 balance text-white"
              style={{
                fontSize: "clamp(30px, 5.6vw, 76px)",
                lineHeight: "1.02",
                letterSpacing: "-0.034em",
                fontWeight: 700,
              }}
            >
              {about.cta.headlinePre}
              <span className="block text-white/55">{about.cta.headlineSoft}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 mx-auto max-w-[54ch] text-[15.5px] leading-relaxed text-white/72 sm:text-[17px] md:text-[17.5px]">
              {about.cta.body}
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                to="/#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold text-white transition-colors sm:text-[14.5px]"
                style={{
                  background: DM_ACCENT,
                  boxShadow: "0 18px 44px rgba(240, 95, 34, 0.34)",
                }}
              >
                <Sparkles size={15} strokeWidth={2.4} />
                {about.cta.button}
              </Link>
              <Link
                to="/#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-6 py-3.5 text-[14px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/[0.12] sm:text-[14.5px]"
              >
                {about.cta.secondary} <ArrowRight size={14} strokeWidth={2.2} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
