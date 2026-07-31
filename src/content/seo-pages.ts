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
    /** Optional supporting figures rendered as a small stat row. */
    stats?: { value: string; label: string }[];
  };

  outcomes: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    intro: string;
    items: { kicker: string; value: string; unit: string; title: string; body: string }[];
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
