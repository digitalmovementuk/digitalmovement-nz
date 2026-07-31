import { business } from "../content";

/**
 * One consent control, used by every form on the site.
 *
 * It lives here rather than being repeated in each form for two reasons. The
 * boring one is drift: three hand-written copies of a legal notice become
 * three different legal notices. The load-bearing one is that the exact
 * wording shown to the visitor is transmitted with the lead as
 * `consent_text` and stored as the consent record — so the string the user
 * agreed to and the string we keep as proof have to be the same string, not
 * two strings that happen to match today.
 *
 * The shared lead endpoint rejects any submission without a `consent` field,
 * so a form that forgets this component fails loudly rather than quietly
 * collecting unconsented data.
 */

/** How long an enquiry is kept. Stated to the visitor, so it must be true. */
export const RETENTION = "24 months";

/** The exact sentence the visitor agrees to. Sent as `consent_text`. */
export const CONSENT_TEXT = `I agree that ${business.name} may store these details and contact me about this enquiry.`;

export function ConsentCheckbox({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <label className="flex items-start gap-3 pt-1 cursor-pointer">
      <input
        type="checkbox"
        name="consent"
        required
        className="mt-0.5 h-4 w-4 shrink-0 rounded border-ink/30 accent-[#0071E3]"
      />
      <span
        className={`text-[12px] leading-relaxed ${tone === "dark" ? "text-white/70" : "text-ink-muted"}`}
      >
        {CONSENT_TEXT}
      </span>
    </label>
  );
}

/**
 * The retention / rights notice that sits under the submit button. Separate
 * from the checkbox because it is information, not a thing to agree to —
 * pre-ticking or bundling it into the consent label would undermine the
 * consent itself.
 */
export function ConsentNotice({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <p
      className={`text-[11px] leading-relaxed ${tone === "dark" ? "text-white/50" : "text-ink-faint"}`}
    >
      {business.name} holds what you send here to answer your enquiry, for {RETENTION}, and shares
      it with nobody else. Withdraw your consent, or ask to see or delete what we hold, any time at{" "}
      <a href={business.emailHref} className="underline underline-offset-2 hover:text-ink-muted">
        {business.email}
      </a>
      . You can also complain to the Office of the Privacy Commissioner.
    </p>
  );
}
