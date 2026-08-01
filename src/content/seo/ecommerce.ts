import type { SeoPageContent } from "../seo-pages";

// Topic page, not a place page — no `city` or `region`. "Ecommerce SEO
// agency" is the strangest number in the whole keyword set: 320 searches a
// month at difficulty 6, with a $12.11 CPC. High commercial value, almost no
// competition, and it sits outside the trades positioning that governs the
// rest of the site. This page speaks to online store owners, not tradespeople.

export const ecommerce: SeoPageContent = {
  slug: "ecommerce",
  path: "/seo/ecommerce",

  meta: {
    title: "Ecommerce SEO Agency NZ | Digital Movement",
    description:
      "Ecommerce SEO agency for NZ online stores. Fix duplicate product pages, rank category pages first, and win page 1 in 90 days. Free audit, no lock-in.",
  },

  keywords: {
    primary: { term: "ecommerce seo agency", volume: 320, kd: 6 },
    // Semrush returned no reliable NZ search volume for these close variants —
    // 0 means "no data available," not "no demand." Targeted on inference
    // from the primary term and general ecommerce SEO search behaviour.
    secondary: [
      { term: "ecommerce seo", volume: 0, kd: 0 },
      { term: "ecommerce seo services", volume: 0, kd: 0 },
      { term: "shopify seo", volume: 0, kd: 0 },
      { term: "online store seo", volume: 0, kd: 0 },
      { term: "ecommerce seo nz", volume: 0, kd: 0 },
    ],
  },

  hero: {
    eyebrow: "SEO agency · for NZ online stores",
    h1: "Ecommerce SEO for NZ Online Stores",
    sub: "Ecommerce SEO is search optimisation built specifically for online stores — product pages, category pages and the site structure connecting them — and this page is for New Zealand store owners deciding whether it's worth doing. Run a Shopify, WooCommerce or BigCommerce store? This is built for you: page 1 in 90 days, guaranteed, from a 5.0-rated agency, with a free audit before you commit to anything.",
    chips: ["5.0 Google rating", "100+ verified reviews", "Page 1 in 90 days", "Free ecommerce SEO audit"],
    formHeading: "Get your free ecommerce SEO audit",
    formNote: "One-page audit in your inbox within 24 hours. No spam, no obligation.",
  },

  local: {
    eyebrow: "Ecommerce SEO, explained",
    headlineMain: "Stores rank differently",
    headlineSub: "to service businesses.",
    paragraphs: [
      "Ecommerce SEO is a different job to the local service SEO most NZ agencies build. A tradesperson's site has a handful of pages competing for suburb and service searches. An online store might have hundreds or thousands of product pages, several category pages per range, and filter combinations that generate URLs nobody typed on purpose. The scale changes the approach — ecommerce SEO is about ranking a structure, not one page.",
      "The biggest technical problem in ecommerce SEO is duplicate content. A product available in five colours and three sizes can generate fifteen URLs for the same item, and a filtered category view — in stock, under $50, size M — can generate hundreds more. Google sees near-identical pages competing for the same keyword, and without canonical tags and a sensible URL strategy, an online store can end up out-competing itself instead of the market.",
      "Category pages usually carry more commercial search volume than any single product page. Someone searching \"waterproof hiking boots\" is behaviourally closer to a category page than to one specific item, and Google's results generally reflect that: category and collection pages rank for the broad, high-volume terms, while product pages pick up the long-tail searches for a specific model or SKU. Ecommerce SEO that only optimises product pages is chasing the smaller half of the traffic.",
      "New Zealand online stores share Google's results with offshore retailers who ship here, and those overseas stores often have bigger content budgets and years of accumulated backlinks. A small NZ store cannot out-spend that on every generic keyword. What it can do is win the searches an overseas retailer has no reason to target — NZ-specific sizing, local shipping and returns, and category pages built around how New Zealanders actually search rather than how a global catalogue happens to be organised.",
      "That pattern — commercial intent with limited direct competition — is exactly what \"ecommerce seo agency\" itself looks like: 320 searches a month in New Zealand at a keyword difficulty of 6, low enough that a properly built page can compete from a standing start. The same shape shows up inside a store's own catalogue: mid-volume, low-competition category and product searches that a bigger, less specialised competitor hasn't bothered to build a proper page for.",
      "None of this is a one-off fix. New products get added, ranges get discontinued, and filters change as stock changes, so an online store's SEO needs maintaining the same way its inventory does. A category page optimised once and left alone drifts out of date as fast as the products on it.",
    ],
    stats: [
      { value: "320", label: "monthly searches for \"ecommerce seo agency\" in NZ" },
      { value: "6", label: "keyword difficulty — one of the easiest commercial terms we track" },
      { value: "$12.11", label: "average cost per click for the same term in Google Ads" },
    ],
  },

  outcomes: {
    eyebrow: "What changes",
    headlineMain: "What ecommerce SEO",
    headlineSub: "actually changes for your store.",
    intro:
      "Vague agency promises don't help you decide. Here's what ecommerce SEO does to an online store's traffic and cost per lead, in plain terms.",
    items: [
      {
        kicker: "Ranking",
        value: "Page 1",
        unit: "in 90 days",
        title: "Rank your category pages",
        body: "We guarantee a page 1 Google position within 90 days for your priority ecommerce category pages — tracked and reported from day one, not promised and forgotten.",
      },
      {
        kicker: "Cost",
        value: "$12.11",
        unit: "avg. CPC for this term",
        title: "Traffic that stops costing per click",
        body: "\"Ecommerce SEO agency\" carries a $12.11 average cost per click in Google Ads. Organic rankings for your own category and product pages capture that same commercial intent without paying for every visit.",
      },
      {
        kicker: "Structure",
        value: "Fixed",
        unit: "technical foundation",
        title: "Stop your store competing with itself",
        body: "Duplicate product variants and filtered URLs get consolidated properly, so your category pages rank instead of splitting authority across near-identical copies of the same ecommerce page.",
      },
    ],
  },

  included: {
    eyebrow: "What's included",
    headlineMain: "Everything it takes",
    headlineSub: "to rank an online store.",
    intro:
      "One fixed monthly price. No setup fee, no upsells for \"more pages\" once you've signed — everything below, every month, for as long as you stay.",
    columns: [
      {
        title: "Store audit & strategy",
        items: [
          "Full technical audit of your online store",
          "Category and product keyword mapping",
          "Duplicate content audit — variants, filters, pagination",
          "Competitor gap analysis against other online stores",
          "Six-month content roadmap",
        ],
      },
      {
        title: "Build & optimise",
        items: [
          "Canonical tags and URL structure fixes",
          "Category page content targeting commercial searches",
          "Product schema and structured data",
          "Site speed and Core Web Vitals work for large catalogues",
          "New category and collection pages published monthly",
        ],
      },
      {
        title: "Track & report",
        items: [
          "Live rankings dashboard for your priority pages",
          "Monthly report in plain English",
          "Direct line to your specialist",
          "Enquiry and conversion tracking",
          "Clear next steps every month",
        ],
      },
    ],
  },

  process: {
    eyebrow: "How it works",
    headlineMain: "Ninety days,",
    headlineSub: "mapped out plainly.",
    intro:
      "What happens in week 1, month 2 and month 3 for an ecommerce SEO client — on record, so you can hold us to it.",
    steps: [
      {
        eta: "Week 1",
        title: "Audit and plan",
        body: "Your free ecommerce SEO audit lands in your inbox, plus a call to walk through your category and product page priorities.",
      },
      {
        eta: "Week 2–4",
        title: "Foundations go in",
        body: "Duplicate content gets cleaned up, canonical tags go in, tracking goes live, and the first category pages ship.",
      },
      {
        eta: "Month 2",
        title: "Rankings move",
        body: "Category pages start climbing out of page two, and product pages begin picking up long-tail searches.",
      },
      {
        eta: "Month 3",
        title: "Page 1, on record",
        body: "Your guaranteed page 1 position is live for your priority category pages. From here it's month-to-month — no lock-in.",
      },
    ],
  },

  proof: {
    eyebrow: "Real results",
    headlineMain: "Reviews from",
    headlineSub: "real NZ clients.",
    intro:
      "These are the same verified Google reviews on our homepage. One is from Andrew Schultz, the owner of a small online store, whose tailored SEO strategy delivered a 1125% increase in web conversions — the rest are real Digital Movement clients from other industries, shown honestly rather than dressed up as an ecommerce portfolio we don't have.",
  },

  nearby: {
    eyebrow: "Where we work",
    headlineMain: "More pages,",
    headlineSub: "built the same way.",
    intro:
      "Ecommerce SEO is one part of how we approach SEO across New Zealand. Have a look at the rest of our work.",
    links: [
      {
        label: "SEO New Zealand",
        to: "/seo",
        blurb: "The national hub — our full approach to ranking NZ businesses on Google, including online stores.",
      },
      {
        label: "SEO Auckland",
        to: "/seo/auckland",
        blurb: "How we approach SEO for Auckland businesses, including online stores based there.",
      },
      {
        label: "SEO Christchurch",
        to: "/seo/christchurch",
        blurb: "How we approach SEO for Christchurch businesses and online stores based in Canterbury.",
      },
    ],
  },

  faq: {
    eyebrow: "Common questions",
    headlineMain: "Ecommerce SEO,",
    headlineSub: "answered directly.",
    intro: "What online store owners ask before they choose an ecommerce SEO agency.",
    items: [
      {
        q: "How much does ecommerce SEO cost?",
        a: "Ecommerce SEO is usually billed as a fixed monthly fee, the same as our other SEO work — not a per-page or per-product rate. The exact number depends on the size of your catalogue and how much technical clean-up it needs, which the free audit tells you before you commit.",
      },
      {
        q: "How long does ecommerce SEO take to work?",
        a: "Most online stores see ranking movement within 2 to 4 weeks, with a guaranteed page 1 position for priority category pages by day 90. Product pages with long-tail keywords often move faster than broad category terms.",
      },
      {
        q: "Does ecommerce SEO work for a small catalogue?",
        a: "Yes — a small catalogue is often easier to optimise properly than a large one, because there's less duplicate content to untangle and fewer pages competing with each other. What matters is picking the right category and product pages to prioritise first.",
      },
      {
        q: "Should I optimise product pages or category pages first?",
        a: "Category pages first, in most cases. They usually carry more commercial search volume than any single product, and a well-built category page can rank for the broad terms while individual product pages pick up long-tail searches for specific items.",
      },
      {
        q: "Do you do SEO for Shopify stores?",
        a: "Yes. Shopify stores have their own quirks — limited control over URL structure, automatic variant URLs, and app-generated duplicate pages — and ecommerce SEO for Shopify works within those constraints rather than fighting the platform.",
      },
      {
        q: "What about WooCommerce or BigCommerce?",
        a: "The same ecommerce SEO principles apply on WooCommerce and BigCommerce: fixing duplicate content from variants and filters, building category pages that target commercial searches, and cleaning up the technical issues each platform tends to generate by default.",
      },
      {
        q: "Is ecommerce SEO worth it compared to paid ads?",
        a: "\"Ecommerce SEO agency\" carries a $12.11 average cost per click in Google Ads, and every visit from that keyword costs money for as long as you keep paying. Organic rankings for the same commercial intent keep sending traffic to your online store after an ad budget would have run out.",
      },
      {
        q: "Is there a minimum contract for ecommerce SEO?",
        a: "Most reputable agencies, us included, work month-to-month after a short minimum term needed to set things up properly. You shouldn't be locked into a year just to find out if it's working for your store.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Ready when you are",
    headlineMain: "Get your free",
    headlineSub: "ecommerce SEO audit.",
    body: "See exactly where your online store stands in Google before you commit to anyone. One-page report, plain English, no obligation.",
    formHeading: "Get your free ecommerce SEO audit",
    formNote: "In your inbox within 24 working hours. No spam, no obligation.",
  },
};
