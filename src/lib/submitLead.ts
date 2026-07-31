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
 * The destination is configured at build time via VITE_LEAD_ENDPOINT (a URL
 * that accepts a JSON POST — a GoHighLevel inbound webhook, or any form
 * backend). It is deliberately not a secret: this is a static site on GitHub
 * Pages, so anything embedded here is public. Never put a GoHighLevel private
 * token in this file.
 */

const ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined;

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
  if (!ENDPOINT) {
    // No destination configured. Say so loudly rather than pretending the
    // lead was received — a false success is worse than a visible failure,
    // because the visitor walks away believing they've made contact.
    console.error(
      "[lead] VITE_LEAD_ENDPOINT is not set — this submission was not delivered.",
    );
    return { ok: false, reason: "unconfigured" };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        submittedAt: new Date().toISOString(),
        pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
      }),
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
 */
export function trackLead(source: string) {
  const w = window as unknown as { dataLayer?: unknown[] };
  if (!w.dataLayer) return;
  w.dataLayer.push({ event: "generate_lead", form_source: source });
}
