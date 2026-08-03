import { Link } from "react-router-dom";
import { business } from "../content";
import { LEGAL_ENTITY, NZBN } from "../seo";

/**
 * One shell for every legal page — /privacy, /terms, /copyright.
 *
 * It exists because three legal pages hand-built from the same Tailwind
 * classes become three subtly different legal pages, and on this site the
 * legal text is the one place where "subtly different" is a real problem
 * rather than a cosmetic one. Per the shared-stylesheet rule, anything that
 * appears on more than one page is defined once.
 *
 * It also carries the two things every one of these pages must state to be
 * audit-safe: the legal entity that stands behind the words (the site brands
 * itself "Digital Movement", but the party bound by these terms is DIGITAL
 * MOVEMENT NEW ZEALAND LIMITED) and its NZBN, so a regulator or a customer
 * can identify us on the Companies Register without guessing.
 *
 * `updated` is authored, not built. A policy changes on the day someone
 * changes it — wiring it to __BUILD_DATE__ would restate the date on every
 * unrelated deploy and destroy the audit trail these dates exist to provide.
 */
export function LegalPage({
  title,
  intro,
  updated,
  children,
}: {
  title: string;
  intro: React.ReactNode;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="surface-light">
      <div className="container-v3 max-w-[720px] pt-32 pb-24 sm:pt-40 sm:pb-32">
        <h1 className="text-[34px] sm:text-[44px] font-bold tracking-[-0.03em] text-ink leading-[1.08]">
          {title}
        </h1>
        <div className="mt-5 text-[16px] text-ink-soft leading-relaxed space-y-3">{intro}</div>
        <p className="mt-4 text-[13px] text-ink-faint">Last updated {updated}.</p>

        {children}

        {/* Identity block. Repeated at the foot of all three pages on purpose:
            whichever one a reader lands on, they can tell who they are dealing
            with and how to reach us without navigating anywhere else. */}
        <section className="mt-14 pt-6 border-t border-ink/10">
          <p className="text-[13.5px] text-ink-muted leading-relaxed">
            {LEGAL_ENTITY}, trading as {business.name}. New Zealand Business Number {NZBN} — you can
            look us up on the{" "}
            <a
              href={`https://www.nzbn.govt.nz/mynzbn/nzbndetails/${NZBN}/`}
              className="underline underline-offset-2 hover:text-ink"
              rel="noopener"
            >
              New Zealand Business Number register
            </a>
            . Email{" "}
            <a
              href={business.emailHref}
              className="underline underline-offset-2 hover:text-ink"
            >
              {business.email}
            </a>
            .
          </p>
          <p className="mt-4 text-[13.5px] text-ink-muted">
            <LegalNav />
          </p>
        </section>
      </div>
    </main>
  );
}

/** Cross-links between the three legal pages. Kept together so none is orphaned. */
export function LegalNav() {
  return (
    <span className="flex flex-wrap gap-x-5 gap-y-2">
      <Link to="/privacy" className="underline underline-offset-2 hover:text-ink">
        Privacy policy
      </Link>
      <Link to="/terms" className="underline underline-offset-2 hover:text-ink">
        Terms of use
      </Link>
      <Link to="/copyright" className="underline underline-offset-2 hover:text-ink">
        Copyright and disclaimer
      </Link>
    </span>
  );
}

/**
 * A numbered section. The `id` is what makes deep links work — the footer
 * "Cookies" link points at /privacy#cookies rather than a thin standalone
 * cookie page, so these anchors are load-bearing, not decorative.
 */
export function LegalSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-10 scroll-mt-28">
      <h2 className="text-[20px] sm:text-[23px] font-bold tracking-[-0.02em] text-ink">{title}</h2>
      <div className="mt-3 space-y-3 text-[15.5px] text-ink-soft leading-relaxed">{children}</div>
    </section>
  );
}

/** Bulleted list, styled to match the body copy rather than the browser default. */
export function LegalList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 pl-5 list-disc marker:text-ink-faint">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

/** Inline mail link, used often enough across the three pages to be worth one definition. */
export function MailLink() {
  return (
    <a href={business.emailHref} className="underline underline-offset-2 hover:text-ink-muted">
      {business.email}
    </a>
  );
}
