/**
 * Content contract for the /seo/ hub and its city spokes.
 *
 * These pages are a different animal from the four /services/* pages. Those
 * sell a capability; these compete for a named commercial SERP
 * (`seo christchurch`, 880/mo, KD 13) where — per the strategy's §04 — the
 * incumbents rank on relevance alone, several of them with zero backlinks.
 * Relevance is therefore where the template over-invests: a real local
 * section with paragraphs that could not be written about another city, an
 * FAQ aimed at the long tail, and an enquiry path in the hero rather than
 * eight sections down.
 *
 * Two house rules shape the shape of this type:
 *
 * 1. SEO landing pages carry a two-pillar hero — copy left, enquiry form
 *    right — and a second form at the bottom. Nowhere else. Hence
 *    `hero.form*` and `finalCta.form*` and no CTA fields in between.
 * 2. Nothing here may claim a client we do not have. There is no field for
 *    a city case study, because there are no city case studies: the proof
 *    section reuses the real reviews already on the homepage and the copy
 *    must not imply they came from this city. See `proof`.
 */

export type SeoPageContent = {
  /** URL segment under /seo/ — "christchurch". Empty string for the hub. */
  slug: string;

  /** Full route path, e.g. "/seo/christchurch". Drives canonical and schema. */
  path: string;

  /**
   * City name in prose form, e.g. "Christchurch". Omitted on the national
   * hub, which is what the template keys off to decide whether it is
   * rendering a place or a country.
   */
  city?: string;

  /**
   * The region a city sits in, e.g. "Canterbury". Used in the schema's
   * areaServed and in the nearby-cities copy. Omitted on the hub.
   */
  region?: string;

  /**
   * Name used for the Service node in JSON-LD.
   *
   * Defaults to "SEO {city}" for city pages and "SEO New Zealand" for the hub.
   * The /industries/* pages reuse this whole contract — same hero, same
   * section rhythm, same honesty rules — but they are not SEO-for-a-place, so
   * they set this explicitly. Schema must describe what the page actually
   * offers, which is gate item S5.2.
   */
  serviceName?: string;

  /**
   * Keep the page out of the index and, because postbuild derives the sitemap
   * from what is indexable, out of the sitemap too.
   *
   * Used for a page that is built but not yet truthful enough to publish —
   * /pricing, which has no real figures yet. Building it and hiding it is the
   * honest middle: the work is done and reviewable, and nothing misleading is
   * exposed. Remove the flag in the same commit that adds the real numbers.
   */
  noindex?: boolean;

  /**
   * Visible fidelity badge, e.g. "LOW-FI". Per-page, not global — set only on
   * pages that have not cleared the review gate yet. Omit once a page is
   * approved for production; that one edit removes the badge.
   */
  fidelity?: string;

  /**
   * Breadcrumb parent. Defaults to "SEO" / "/seo" — right for every SEO city
   * or topic page. A page built on this same contract for a different service
   * (e.g. a Google Ads city page) overrides both so the crumb trail and the
   * page it points back to actually match what the page sells.
   */
  hubLabel?: string;
  hubPath?: string;

  /**
   * Service node `serviceType` in JSON-LD. Defaults to "Search Engine
   * Optimisation". Override on pages that reuse this contract to sell a
   * different service — schema must describe what the page actually offers.
   */
  serviceType?: string;

  /**
   * Prefix on the LeadForm `source` string (default "seo"), e.g.
   * "seo-christchurch-hero". Override so a non-SEO page reusing this contract
   * doesn't mislabel its leads as SEO leads in analytics.
   */
  sourcePrefix?: string;

  meta: { title: string; description: string };

  /**
   * Keyword targets. Not rendered — this is the record of what the page was
   * built to win, so the tracking dashboard and any later audit read from
   * the same source as the page itself rather than from a separate spreadsheet
   * that drifts.
   */
  keywords: {
    primary: { term: string; volume: number; kd: number };
    secondary: { term: string; volume: number; kd: number }[];
  };

  hero: {
    eyebrow: string;
    /** The H1. Must contain the primary term verbatim. */
    h1: string;
    sub: string;
    /** Short trust chips. Three or four — more is noise at this size. */
    chips: string[];
    formHeading: string;
    formNote: string;
  };

  /**
   * The local-specificity section. This is the part the competition does not
   * bother with, and the reason a new page can outrank a four-year-old one
   * on this SERP. Generic paragraphs with the city name swapped in are worse
   * than useless here — they are the exact template the incumbents lose to.
   */
  local: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    paragraphs: string[];
    /**
     * Optional supporting figures rendered as a small stat row.
     *
     * Same rule as `outcomes.items[].value`: facts about the reader's market,
     * never metrics from our keyword tooling. No difficulty scores, no search
     * volumes, no CPC. If the only available number comes out of a rank
     * tracker, leave this out.
     */
    stats?: { value: string; label: string }[];
  };

  outcomes: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    intro: string;
    /**
     * `value`/`unit` are OPTIONAL and must stay that way.
     *
     * When they were required, every page had to produce six numbers it did
     * not have, and the only numbers to hand were our own keyword research —
     * so difficulty scores, search volumes and CPCs ended up printed on
     * customer-facing pages as if they were benefits. A business owner does
     * not buy "KD 6".
     *
     * Supply a figure only when it is a real, checkable fact about the
     * reader's world (a council consent window, a trade's average job value).
     * Never a metric from our tooling. With no figure, the card renders as a
     * headline and a paragraph, which is the better card anyway.
     */
    items: { kicker: string; value?: string; unit?: string; title: string; body: string }[];
  };

  included: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    intro: string;
    columns: { title: string; items: string[] }[];
  };

  process: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    intro: string;
    steps: { eta: string; title: string; body: string }[];
  };

  /**
   * Framing for the shared case-study section.
   *
   * The cards themselves come from `caseStudies` in src/content.ts — real,
   * already-published client reviews. This copy introduces them and must not
   * describe them as local to this city or as trades clients, because they
   * are neither. When genuine city proof exists, it goes in content.ts and
   * this copy can tighten around it.
   */
  proof: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    intro: string;
    /**
     * How many real case studies to render. Defaults to 3, which is the right
     * amount of supporting evidence on a page selling something else. /results
     * exists to show the work, so it sets this higher.
     */
    limit?: number;
  };

  /** Internal links: up to the hub and sideways to sibling cities. */
  nearby: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    intro: string;
    links: { label: string; to: string; blurb: string }[];
  };

  faq: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    intro: string;
    /** Aimed at the long-tail variants of the primary term. */
    items: { q: string; a: string }[];
  };

  finalCta: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    body: string;
    formHeading: string;
    formNote: string;
  };
};
