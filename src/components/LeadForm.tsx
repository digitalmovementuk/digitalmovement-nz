import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { business } from "../content";
import { submitLead, trackLead, FALLBACK_EMAIL } from "../lib/submitLead";
import { ConsentCheckbox, ConsentNotice } from "./Consent";

/**
 * The enquiry form used by the /seo pages.
 *
 * Extracted rather than reusing <Contact> because these pages need it twice —
 * once beside the H1 and once at the foot — and <Contact> is a whole section
 * with its own heading, copy and contact tiles. This is the form alone.
 *
 * Two things it does not do, deliberately:
 *
 * - It never shows success unless submitLead actually succeeded. Both site
 *   forms used to call preventDefault() and flip to a thank-you while sending
 *   nothing; that defect is the reason submitLead exists and this component
 *   routes through it.
 * - It shows no phone number. src/content.ts still carries the placeholder
 *   "+64 9 XXX XXXX", so the fallback path offers the real email address only.
 *
 * Consent is explicit and unticked by default. Under the Privacy Act 2020 the
 * agency is the agency collecting the information, so the notice names who
 * holds it, why, how long for, and how to have it removed — stated on the form
 * rather than buried behind a link.
 */

const SERVICES = ["SEO", "Google Ads", "Social Media", "Website", "Not sure yet"];

type Props = {
  /** Attribution string recorded with the lead, e.g. "seo-christchurch-hero". */
  source: string;
  heading: string;
  note: string;
  /** Pre-selects the service dropdown. These pages are all SEO enquiries. */
  defaultService?: string;
  /**
   * "light" renders on a white card for dark backgrounds; "plain" renders
   * bare for use inside an already-white section.
   */
  variant?: "card" | "plain";
};

export function LeadForm({ source, heading, note, defaultService = "SEO", variant = "card" }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hp, setHp] = useState("");
  const uid = useId();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (hp) return; // honeypot tripped — drop silently, as bots expect

    const data = new FormData(e.currentTarget);
    setSending(true);
    setError(null);

    const result = await submitLead({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      service: String(data.get("service") ?? ""),
      message: String(data.get("message") ?? ""),
      consent: data.get("consent") != null,
      source,
    });

    setSending(false);

    if (result.ok) {
      trackLead(source);
      setSubmitted(true);
    } else {
      setError(
        `We couldn't send that from here. Please email us directly at ${FALLBACK_EMAIL} and we'll pick it up straight away.`,
      );
    }
  };

  const shell =
    variant === "card"
      ? "rounded-[24px] sm:rounded-[32px] border border-ink/10 bg-white p-6 sm:p-8 shadow-card"
      : "";

  return (
    <div className={shell}>
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div>
              <h2 className="text-[19px] sm:text-[21px] font-bold text-ink leading-snug tracking-[-0.02em]">
                {heading}
              </h2>
              <p className="mt-1.5 text-[13px] text-ink-muted leading-relaxed">{note}</p>
            </div>

            {/* Name, phone, email — the order people expect to be asked. */}
            <Field label="Your name" htmlFor={`${uid}-name`} required>
              <input
                id={`${uid}-name`}
                type="text"
                name="name"
                required
                autoComplete="name"
                className={inputCls}
              />
            </Field>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Phone" htmlFor={`${uid}-phone`}>
                <input
                  id={`${uid}-phone`}
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  className={inputCls}
                />
              </Field>
              <Field label="Email" htmlFor={`${uid}-email`} required>
                <input
                  id={`${uid}-email`}
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className={inputCls}
                />
              </Field>
            </div>

            <Field label="What do you need?" htmlFor={`${uid}-service`}>
              <select
                id={`${uid}-service`}
                name="service"
                defaultValue={defaultService}
                className={selectCls}
              >
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Your website and what you're after" htmlFor={`${uid}-message`}>
              <textarea
                id={`${uid}-message`}
                name="message"
                rows={3}
                placeholder="Your website address, and what you want to rank for."
                className={`${inputCls} resize-none min-h-[88px]`}
              />
            </Field>

            {/* Honeypot instead of a challenge — no third-party script, no friction. */}
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
            <ConsentCheckbox />

            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-[15px] py-3 transition-colors"
            >
              {sending ? "Sending…" : <>Get your free audit <ArrowRight size={15} /></>}
            </button>

            {error ? (
              <p role="alert" className="text-[13px] leading-relaxed text-[#B3261E]">
                {error}
              </p>
            ) : null}
            <ConsentNotice />
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-center py-6"
          >
            <div className="mx-auto flex h-13 w-13 h-[52px] w-[52px] items-center justify-center rounded-full bg-ink text-white">
              <Check size={24} strokeWidth={3} />
            </div>
            <h2 className="mt-5 text-[22px] font-extrabold text-ink">We've got your details.</h2>
            <p className="mt-2 text-[14.5px] text-ink-soft leading-relaxed max-w-[38ch] mx-auto">
              A founder — not a sales rep — will reply personally within 24 hours on weekdays, with
              the audit attached.
            </p>
            <a
              href={business.emailHref}
              className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-semibold text-ink underline underline-offset-4 hover:opacity-80"
            >
              Or email us directly
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputCls =
  "w-full rounded-2xl border border-ink/15 bg-white px-4 py-2.5 text-[15px] text-ink placeholder:text-ink-faint outline-none transition focus:border-ink/55 focus:ring-2 focus:ring-ink/10";

const selectCls = `${inputCls} appearance-none pr-10`;

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted mb-1.5">
        {label}
        {required && <span className="text-ink-faint ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
