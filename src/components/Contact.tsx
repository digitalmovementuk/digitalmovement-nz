import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { business } from "../content";
import { Reveal } from "../lib/Reveal";

const SERVICES = ["SEO", "Google Ads", "Social Media", "Website", "Not sure yet"];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [hp, setHp] = useState(""); // honeypot

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hp) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" data-surface="light" className="surface-light relative pt-28 sm:pt-32 md:pt-36 pb-28 sm:pb-32 md:pb-36">
      <div className="container-v3 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-12 lg:gap-16 xl:gap-20 items-start">
        {/* Left — editorial copy + contact tiles */}
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="eyebrow text-ink-muted">Talk to us</p>
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
              Let us show you how
              <span className="block text-ink/55">we deliver real results.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-[480px] mx-auto lg:mx-0 text-[15.5px] sm:text-[17px] text-ink-soft leading-relaxed">
              Get in touch to find out how you can grow your business with a
              5-star rated digital marketing agency in New Zealand that
              guarantees real results.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-3">
            <ContactTile
              icon={<Mail size={18} />}
              label="Email"
              value={business.email}
              caption="Reply within 24 h"
              href={business.emailHref}
            />
            <ContactTile
              icon={<Phone size={18} />}
              label="Call us"
              value={business.phone}
              caption="Mon–Fri, 9–6"
              href={business.phoneHref}
            />
          </ul>
        </div>

        {/* Right — form */}
        <div className="rounded-[28px] sm:rounded-[36px] border border-ink/10 bg-white p-6 sm:p-8 md:p-10 shadow-card">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="space-y-5"
              >
                <div className="flex items-center justify-between">
                  <p className="eyebrow text-ink-muted">Ready to grow your business?</p>
                  <p className="text-[12px] text-ink-muted">Reply within 24 h</p>
                </div>

                <Field label="Your name" name="name" required>
                  <input type="text" name="name" required autoComplete="name" className={inputCls} />
                </Field>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <Field label="Email" name="email" required>
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Phone (optional)" name="phone">
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      className={inputCls}
                    />
                  </Field>
                </div>
                <Field label="What do you need?" name="service">
                  <select name="service" defaultValue={SERVICES[4]} className={selectCls}>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Tell us briefly" name="message">
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Where you are now, where you want to be, and what's getting in the way."
                    className={`${inputCls} resize-none min-h-[120px]`}
                  />
                </Field>

                {/* Honeypot — hidden field bots love to fill in. */}
                <label className="absolute -left-[9999px] opacity-0" aria-hidden>
                  Leave this empty
                  <input
                    type="text"
                    tabIndex={-1}
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                    autoComplete="off"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-[15px] py-3 transition-colors"
                >
                  Get your free audit <ArrowRight size={15} />
                </button>

                <p className="text-[11px] text-ink-muted leading-relaxed">
                  No pressure, no jargon. By submitting you agree to be contacted about your enquiry.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-center py-4"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white">
                  <Check size={26} strokeWidth={3} />
                </div>
                <h3 className="mt-5 text-[24px] font-extrabold text-ink">
                  We've got your details.
                </h3>
                <p className="mt-2 text-ink-soft leading-relaxed">
                  A founder — not a sales rep — will reply personally within 24 h on weekdays.
                </p>

                <div className="mt-7 rounded-2xl border border-ink/10 bg-surface-2 p-5 text-left space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink/8 text-ink">
                      <Clock size={15} strokeWidth={2.4} />
                    </span>
                    <div className="text-[13px] text-ink-soft leading-relaxed">
                      <p className="font-bold text-ink">Reply within 24 h</p>
                      <p>Weekdays. We screen-share the audit on a 30-min call.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink/8 text-ink">
                      <Phone size={14} strokeWidth={2.4} />
                    </span>
                    <div className="text-[13px] text-ink-soft leading-relaxed">
                      <p className="font-bold text-ink">Save our number</p>
                      <p>
                        Call-backs come from{" "}
                        <a
                          href={business.phoneHref}
                          className="text-ink underline underline-offset-2 hover:opacity-80"
                        >
                          {business.phone}
                        </a>
                        . If we ring, that's us.
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href={business.emailHref}
                  className="btn btn-ghost mt-6 inline-flex"
                >
                  <Mail size={14} /> Or email us directly
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint outline-none transition focus:border-ink/55 focus:bg-white focus:ring-2 focus:ring-ink/10";

const selectCls = `${inputCls} appearance-none pr-10`;

function Field({
  label,
  name,
  required,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={name} className="block">
      <span className="block text-[11.5px] font-semibold uppercase tracking-[0.16em] text-ink-muted mb-1.5">
        {label}
        {required && <span className="text-ink-faint ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}

function ContactTile({
  icon,
  label,
  value,
  caption,
  href,
  external,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  caption: string;
  href: string;
  external?: boolean;
  tone?: "whatsapp";
}) {
  const ring = tone === "whatsapp" ? "hover:border-dm-whatsapp/55" : "hover:border-ink/30";
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`group flex flex-col items-center text-center gap-3 sm:flex-row sm:text-left sm:gap-4 rounded-2xl border border-ink/10 bg-white p-5 sm:p-5 transition hover:bg-surface-2 hover:-translate-y-0.5 shadow-card ${ring}`}
      >
        <span
          className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${
            tone === "whatsapp" ? "bg-dm-whatsapp/15 text-dm-whatsapp" : "bg-ink/8 text-ink"
          }`}
        >
          {icon}
        </span>
        <div className="sm:flex-1 sm:min-w-0">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink-muted">
            {label}
          </p>
          <p className="text-[16px] sm:text-[17px] font-bold text-ink mt-0.5 sm:truncate">{value}</p>
          <p className="text-[11.5px] text-ink-muted mt-0.5">{caption}</p>
        </div>
      </a>
    </li>
  );
}
