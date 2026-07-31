import { Head } from "vite-react-ssg";

/**
 * Single source of truth for per-route metadata and structured data.
 *
 * Everything here is emitted into the pre-rendered HTML at build time, so a
 * crawler that never executes JavaScript still sees the right title,
 * description, canonical and schema for each route. Before pre-rendering,
 * every route shared the homepage's tags — which made them duplicates of
 * each other even once they returned 200.
 */

export const SITE_URL = "https://www.digitalmovement.co.nz";
export const OG_IMAGE = `${SITE_URL}/brand/og-cover.jpg`;

export function absoluteUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

/* ------------------------------------------------------------------ *
 * Structured data
 *
 * Two rules govern everything below, both of them Google policy rather
 * than preference:
 *
 * 1. Never mark up a fact the page doesn't show. `aggregateRating` in
 *    particular triggers manual actions when it has no visible review
 *    content behind it.
 * 2. Never mark up a fact we don't actually have. The telephone number in
 *    src/content.ts is still the placeholder "+64 9 XXX XXXX", so `telephone`
 *    is omitted rather than invented. Fill in TELEPHONE below once the real
 *    number exists and it will flow into the markup automatically.
 * ------------------------------------------------------------------ */

/** Set once the real value exists — omitted from schema while empty. */
export const TELEPHONE = "";

/**
 * NZBN of DIGITAL MOVEMENT NEW ZEALAND LIMITED, verified against the NZ
 * Companies Office register (company number 9433725, registered 16 Jun 2026).
 * An identifier is a matter of public record, not a claim about the page, so
 * it is safe to mark up even though it isn't displayed.
 *
 * The registered office on that record is in Auckland. It is deliberately NOT
 * marked up as `address`: a postal address in schema is a claim about where
 * the business operates, and the site shows no address at all.
 */
export const NZBN = "9429053714732";

/**
 * Ratings belong to the group, not to the New Zealand entity. The reviews
 * were earned by the parent business, so the rating is attached to the
 * parent Organization and the NZ node carries no rating of its own. That
 * keeps the markup truthful without putting the parent's location into
 * any visible page copy.
 */
export const REVIEW_RATING = "5.0";
export const REVIEW_COUNT = "100";

/* The parent entity is still declared — the relationship is a real fact and
   worth expressing — but WITHOUT aggregateRating.

   Self-serving AggregateRating markup is a Google structured-data policy
   violation: a rating about your own organisation, served from your own
   domain, is not eligible and risks a manual action. Moving it onto the
   parent organisation does not launder it, because it still ships from
   digitalmovement.co.nz. Removed 2026-07-31 per the DM ship-gate (Rapid Gate
   item 18).

   The reviews stay VISIBLE on the page. Showing genuine reviews is fine and
   expected; only the markup is prohibited. REVIEW_RATING / REVIEW_COUNT are
   therefore still exported and still drive the on-page copy — they simply no
   longer appear in any JSON-LD. */
const PARENT_ORG = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#parent-organization`,
  name: "Digital Movement Melbourne",
};

export const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Digital Movement",
  alternateName: "The People's Agency",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/brand/motif-positive.png`,
  image: OG_IMAGE,
  email: "office@digitalmovement.co.nz",
  parentOrganization: PARENT_ORG,
  sameAs: [
    "https://www.facebook.com/digitalmovementnz",
    "https://www.instagram.com/digitalmovementnz",
  ],
  ...(TELEPHONE ? { telephone: TELEPHONE } : {}),
  ...(NZBN ? { identifier: { "@type": "PropertyValue", propertyID: "NZBN", value: NZBN } } : {}),
};

export const LOCAL_BUSINESS = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Digital Movement",
  description:
    "New Zealand digital marketing agency. SEO, Google Ads, social media and web design.",
  url: `${SITE_URL}/`,
  image: OG_IMAGE,
  email: "office@digitalmovement.co.nz",
  parentOrganization: { "@id": `${SITE_URL}/#parent-organization` },
  areaServed: { "@type": "Country", name: "New Zealand" },
  ...(TELEPHONE ? { telephone: TELEPHONE } : {}),
  ...(NZBN ? { identifier: { "@type": "PropertyValue", propertyID: "NZBN", value: NZBN } } : {}),
};

export const WEBSITE = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: "Digital Movement",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-NZ",
};

/** Breadcrumbs for any route. Home is always the first crumb. */
export function breadcrumbs(trail: Array<{ name: string; path: string }>) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * Human service names, keyed by route slug.
 *
 * The content file's `hero.headlineTop` is marketing copy ("Google Page 1",
 * "More net profit"), not a service name, so it can't be used here — a
 * Service node called "More net profit" tells a search engine nothing.
 */
export const SERVICE_NAMES: Record<string, string> = {
  seo: "SEO",
  "google-ads": "Google Ads Management",
  "social-media": "Social Media Marketing",
  "web-design": "Web Design and Development",
};

/** Service schema for a service page. */
export function serviceSchema(opts: { name: string; description: string; path: string }) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(opts.path)}#service`,
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    serviceType: opts.name,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "New Zealand" },
  };
}

/**
 * Service schema for the /seo hub and its city spokes.
 *
 * Differs from serviceSchema in one way that matters: `areaServed` narrows
 * from the country to the city the page is about. That is the claim the page
 * is making and the one it has to back up — a Christchurch page that says it
 * serves all of New Zealand tells a search engine nothing the homepage
 * doesn't already say.
 *
 * `address` is still deliberately absent. The registered office is a serviced
 * floor in Auckland, the site shows no address anywhere, and marking up a
 * postal address the page never displays is the same policy breach as a
 * phantom rating. areaServed is a statement about where we work; address
 * would be a statement about where we are.
 */
export function seoPageSchema(opts: {
  name: string;
  description: string;
  path: string;
  city?: string;
  region?: string;
}) {
  const areaServed = opts.city
    ? {
        "@type": "City",
        name: opts.city,
        ...(opts.region
          ? { containedInPlace: { "@type": "AdministrativeArea", name: opts.region } }
          : {}),
      }
    : { "@type": "Country", name: "New Zealand" };

  return {
    "@type": "Service",
    "@id": `${absoluteUrl(opts.path)}#service`,
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    serviceType: "Search Engine Optimisation",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed,
  };
}

/**
 * FAQPage built from the questions actually rendered on the page.
 * Called only where ServicePageShell renders content.faq.items — marking up
 * questions that aren't visible is the same policy breach as a phantom
 * rating.
 */
export function faqSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/* ------------------------------------------------------------------ */

type SeoProps = {
  title: string;
  description: string;
  /** Route path, e.g. "/" or "/services/seo". Drives canonical + og:url. */
  path: string;
  noindex?: boolean;
  /** Retired URL: emit a meta refresh to this path. Use with `noindex`. */
  metaRefresh?: string;
  /** Schema nodes for this route; wrapped in a single @graph. */
  schema?: object[];
};

export function Seo({ title, description, path, noindex, metaRefresh, schema }: SeoProps) {
  const url = absoluteUrl(path);
  const graph =
    schema && schema.length > 0
      ? JSON.stringify({ "@context": "https://schema.org", "@graph": schema })
      : null;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex ? <meta name="robots" content="noindex,follow" /> : null}
      {/* Static hosting cannot return a 301, so a retired URL says so in the
          pre-rendered head. Crawlers treat an instant meta refresh as a
          redirect signal, and it works without JavaScript. */}
      {metaRefresh ? <meta httpEquiv="refresh" content={`0; url=${metaRefresh}`} /> : null}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Digital Movement" />
      <meta property="og:locale" content="en_NZ" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:alt" content="Digital Movement — The People's Agency" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {graph ? <script type="application/ld+json">{graph}</script> : null}
    </Head>
  );
}
