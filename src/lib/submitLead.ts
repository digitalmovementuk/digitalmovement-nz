import { business } from "../content";

/**
 * The one place a lead leaves this site.
 *
 * Both forms previously called preventDefault() and flipped straight to a
 * success state. Nothing was ever sent: every enquiry the site received was
 * shown "thanks, we'll be in touch" and silently discarded. This module
 * exists so that can't happen again — a form may only show success when a
 * submission actually succeeded.
 *
 * Destinations are configured at build time and are deliberately NOT secret:
 * this is a static site on GitHub Pages, so anything referenced here ships to
 * the browser in plain text. Never put a GoHighLevel private token, an SMTP
 * password, or any other credential in this file.
 *
 * Two destination kinds are supported, and every one configured gets a copy:
 *
 *   VITE_WEB3FORMS_KEYS  Comma-separated Web3Forms access keys. Each key
 *                        delivers to the one inbox it was registered to —
 *                        Web3Forms' cc field is a paid feature, so reaching
 *                        two people means two keys, not one key with two
 *                        addresses. Enquiries must reach both
 *                        martey@digitalmovement.com.au and
 *                        alex@digitalmovement.uk, hence the fan-out.
 *   VITE_LEAD_ENDPOINT   Optional generic JSON webhook (e.g. a GoHighLevel
 *                        inbound webhook) kept so the CRM can be added later
 *                        without touching the forms.
 */

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const WEB3FORMS_KEYS = ((import.meta.env.VITE_WEB3FORMS_KEYS as string | undefined) ?? "")
  .split(",")
  .map((k) => k.trim())
  .filter(Boolean);

const WEBHOOK = ((import.meta.env.VITE_LEAD_ENDPOINT as string | undefined) ?? "").trim();

export type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  /** Which form on the site it came from — useful for attribution. */
  source: string;
};

export type LeadResult =
  | { ok: true }
  | { ok: false; reason: "unconfigured" | "network" | "rejected"; detail?: string };

/** Where to tell the user to go when we genuinely cannot take the lead. */
export const FALLBACK_EMAIL = business.email;

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  const destinations = WEB3FORMS_KEYS.length + (WEBHOOK ? 1 : 0);

  if (destinations === 0) {
    // No destination configured. Say so loudly rather than pretending the
    // lead was received — a false success is worse than a visible failure,
    // because the visitor walks away believing they've made contact.
    console.error(
      "[lead] No delivery destination configured (VITE_WEB3FORMS_KEYS / VITE_LEAD_ENDPOINT) — this submission was not delivered.",
    );
    return { ok: false, reason: "unconfigured" };
  }

  const submittedAt = new Date().toISOString();
  const pageUrl = typeof window !== "undefined" ? window.location.href : undefined;

  const sends: Promise<LeadResult>[] = [
    ...WEB3FORMS_KEYS.map((key) =>
      post(WEB3FORMS_ENDPOINT, {
        access_key: key,
        // What lands in the inbox. Naming the source makes triage possible
        // when two forms feed the same address.
        subject: `New enquiry from digitalmovement.co.nz (${payload.source})`,
        from_name: "Digital Movement NZ website",
        // Replying to the notification replies to the enquirer, not to us.
        replyto: payload.email,
        name: payload.name,
        email: payload.email,
        phone: payload.phone || "—",
        service: payload.service || "—",
        message: payload.message || "—",
        page_url: pageUrl,
        submitted_at: submittedAt,
        // Web3Forms' own honeypot. The forms carry a separate one that stops
        // the send before it reaches here; this is the server-side backstop.
        botcheck: false,
      }),
    ),
    ...(WEBHOOK ? [post(WEBHOOK, { ...payload, submittedAt, pageUrl })] : []),
  ];

  const results = await Promise.all(sends);
  const delivered = results.filter((r) => r.ok).length;

  if (delivered === 0) {
    // Every destination failed — surface it. Return the first failure so the
    // reason is specific rather than a generic "something went wrong".
    return results[0] as Exclude<LeadResult, { ok: true }>;
  }

  if (delivered < destinations) {
    // Partial delivery. The lead is captured, so the visitor gets their
    // success — but this must not pass silently, because it means one of the
    // people who should see this enquiry did not.
    console.error(
      `[lead] Delivered to ${delivered}/${destinations} destinations. Failures:`,
      results.filter((r) => !r.ok),
    );
  }

  return { ok: true };
}

async function post(url: string, body: Record<string, unknown>): Promise<LeadResult> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return { ok: false, reason: "rejected", detail: `HTTP ${res.status}` };
    }
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      reason: "network",
      detail: err instanceof Error ? err.message : String(err),
    };
  }
}

/**
 * GA4 key event, fired only on a genuine success. Wiring it to the submit
 * handler instead would have counted every discarded lead as a conversion.
 *
 * This must go through `gtag("event", …)`. Pushing `{ event: "generate_lead" }`
 * straight onto dataLayer is Tag Manager's convention; the site loads gtag.js
 * directly, which ignores that shape — so the event would never reach GA4 and
 * the property would sit at zero key events looking perfectly healthy.
 */
export function trackLead(source: string) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag !== "function") return;
  w.gtag("event", "generate_lead", { form_source: source });
}
