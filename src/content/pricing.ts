import type { SeoPageContent } from "./seo-pages";

/**
 * /pricing — the comparison-shopper page.
 *
 * ⚠️ THIS PAGE IS NOT READY TO GO LIVE. Read this before publishing it.
 *
 * The strategy (§09) asks for real numbers or at minimum real ranges, on the
 * reasoning that most NZ agencies hide them and publishing them wins the
 * comparison shopper and earns links from people citing the figures. That
 * reasoning is sound. The problem is that Digital Movement NZ's actual
 * retainer figures exist nowhere in this repo — not in the strategy, not in
 * content.ts, not in the whitepaper — and a pricing page is the single worst
 * place on a website to guess.
 *
 * So this page ships everything that is true — how the fee is structured,
 * what moves it up and down, what is included, what is not, and what a buyer
 * should ask any agency — and marks the three numbers with PRICE_TBC.
 *
 * TO PUBLISH: replace the three PRICE_TBC values with real monthly figures,
 * delete PRICE_TBC and this notice, and re-run the QA gate. Until then the
 * page is deliberately excluded from the sitemap and carries noindex (see
 * src/pages/pricing.tsx) — a pricing page that does not state prices fails
 * gate item C1.3, which is a blocker, and would be worse than no page.
 */

/** Sentinel for a figure nobody has given us. Never replace with a guess. */
const PRICE_TBC = "TBC";

export const pricing: SeoPageContent = {
  slug: "pricing",
  path: "/pricing",
  serviceName: "SEO Pricing",

  // Built, reviewable, and deliberately not indexed until PRICE_TBC is gone.
  // A pricing page that shows "TBC" where a number belongs would fail gate
  // item C1.3 (fully resolves its query facet) and mislead a buyer.
  noindex: true,

  // Price-led intent is real and under-served: `affordable local seo services`
  // is 170/mo at KD 16, and a MoneyHub listicle outranks agencies for Auckland
  // precisely because NZ buyers comparison-shop and find third parties instead
  // of firms willing to publish. This page is the answer to that.
  keywords: {
    primary: { term: "affordable local seo services", volume: 170, kd: 16 },
    secondary: [
      { term: "seo packages for small business", volume: 40, kd: 5 },
      { term: "how much does seo cost nz", volume: 0, kd: 0 },
      { term: "seo pricing nz", volume: 0, kd: 0 },
      { term: "seo cost new zealand", volume: 0, kd: 0 },
    ],
  },

  meta: {
    title: "SEO Pricing NZ — What It Costs | Digital Movement",
    description:
      "What SEO actually costs in New Zealand, how our fee is structured, and what changes it. Three months to start, then month by month. No surprise invoices.",
  },

  hero: {
    eyebrow: "Pricing",
    // Not "written down" — the tiers still read TBC, and an H1 that promises
    // published figures the page does not show is the first thing a sceptical
    // buyer catches. What this page genuinely delivers is the reasoning.
    h1: "What SEO costs, and what moves the price.",
    sub: "Digital Movement charges one fixed monthly fee for SEO in New Zealand — three months to start, then month by month. This page explains how that fee is set, what pushes it up or down, and exactly what you get for it.",
    chips: ["One fixed monthly fee", "Month by month after three", "Free plan first"],
    formHeading: "Get a number for your business",
    formNote: "Send us your website. You'll get a scoped price and the plan behind it, back within one working day.",
  },

  local: {
    eyebrow: "How agency pricing works",
    headlineMain: "Why nobody",
    headlineSub: "publishes prices.",
    paragraphs: [
      "Most New Zealand SEO agencies will not put a number on a page. The stated reason is that every business is different. The real reason is usually that the number is negotiated per client, and publishing it removes the room to negotiate.",
      "There is a genuine problem underneath it, though. SEO pricing varies more than most services because the work varies more. Ranking a plumber in Dunedin against four competitors is a fundamentally different job from ranking an online store in Auckland against forty, and a fee that covers both honestly would be wrong for both.",
      "What can be published is the structure. Digital Movement charges a fixed monthly fee, agreed before anything starts, that does not move unless the scope moves. There is no hourly billing, no media markup, and no invoice you did not see coming.",
      "Four things move the number: how competitive your city and service are, how much technical repair the site needs before anything can rank, how many pages the plan calls for, and whether content is written by us or supplied by you. The audit prices all four before you commit to anything.",
      "One thing worth knowing regardless of who you hire: an SEO retainer that is cheaper than roughly a day of a developer's time per month is not buying you a day of work per month. Ask any agency how many hours their fee represents and what happens in them. A firm that cannot answer that quickly is not tracking it.",
    ],
    stats: [
      { value: "Fixed", label: "Monthly fee, agreed up front" },
      { value: "Month to month", label: "After a short setup term" },
      { value: "Free", label: "Audit before you commit" },
    ],
  },

  outcomes: {
    eyebrow: "What the fee covers",
    headlineMain: "Three tiers,",
    headlineSub: "by scope not by seniority.",
    intro:
      "The difference between these is how much ground the plan covers, not how experienced the person doing the work is. The same people do all three.",
    items: [
      {
        kicker: "Local",
        value: PRICE_TBC,
        unit: "/mo",
        title: "One city, one service area",
        body: "A single trade or service business competing in one centre. Google Business Profile, the pages that matter for your city, and the technical repair to make them rank.",
      },
      {
        kicker: "Regional",
        value: PRICE_TBC,
        unit: "/mo",
        title: "Several centres or services",
        body: "A business serving more than one city, or one city with several distinct services that each need their own page and their own keyword set.",
      },
      {
        kicker: "Competitive",
        value: PRICE_TBC,
        unit: "/mo",
        title: "Auckland, ecommerce, or a hard market",
        body: "Markets where page one is held by established domains. More content, sustained link work, and a longer horizon before the numbers move.",
      },
    ],
  },

  included: {
    eyebrow: "In every tier",
    headlineMain: "What you get",
    headlineSub: "at any price.",
    intro:
      "These do not change between tiers. What changes is how many pages, cities and keywords they are applied to.",
    columns: [
      {
        title: "The work",
        items: [
          "Technical audit and the fixes that come out of it",
          "Keyword and competitor research for your market",
          "On-page optimisation of your existing pages",
          "New pages where the research says you need them",
          "Google Business Profile setup and management",
        ],
      },
      {
        title: "The reporting",
        items: [
          "A monthly report in plain English",
          "Rankings tracked against named competitors",
          "Enquiries attributed to their source",
          "Referring domains, not just backlink counts",
          "A direct line to the person doing the work",
        ],
      },
      {
        title: "The terms",
        items: [
          "Fixed fee, agreed before work starts",
          "Three months to start, then month by month",
          "No exit fee when you go",
          "No media markup or hidden costs",
          "A free plan before you commit to anything",
        ],
      },
    ],
  },

  process: {
    eyebrow: "Getting a number",
    headlineMain: "How we price",
    headlineSub: "your business specifically.",
    intro:
      "Nobody quotes a retainer off a phone call. The audit does the work of turning your situation into a scope, and the scope into a price.",
    steps: [
      {
        eta: "Day 1",
        title: "Send your site",
        body: "Your website address and the town or towns you want work from. That is enough to start.",
      },
      {
        eta: "Days 2-4",
        title: "We audit it",
        body: "Technical state, current rankings, who you are actually competing with, and where the reachable gaps are. Free, and yours whether you hire us or not.",
      },
      {
        eta: "Day 5",
        title: "You get a scope and a price",
        body: "What we would do, in what order, for what fixed monthly fee. Written down, with the reasoning attached.",
      },
      {
        eta: "You decide",
        title: "Start or don't",
        body: "No pressure and no follow-up sequence. If the number does not work, the audit is still yours to act on.",
      },
    ],
  },

  proof: {
    eyebrow: "Proof",
    headlineMain: "What clients",
    headlineSub: "have said.",
    intro:
      "These are verified Google reviews from real New Zealand clients, with the figures those clients reported themselves. They are not audited case studies and they are not from trades businesses — see the results page for the full picture, stated plainly.",
    limit: 3,
  },

  nearby: {
    eyebrow: "Related",
    headlineMain: "Where this",
    headlineSub: "applies.",
    intro: "Pricing is the same structure everywhere. What changes is the scope the market demands.",
    links: [
      {
        label: "SEO New Zealand",
        to: "/seo",
        blurb: "What SEO involves nationally, and what a NZ business can realistically win.",
      },
      {
        label: "SEO Christchurch",
        to: "/seo/christchurch",
        blurb: "The clearest example of a market where a modest budget still competes.",
      },
      {
        label: "Results",
        to: "/results",
        blurb: "What we can and cannot yet prove, without the usual padding.",
      },
    ],
  },

  faq: {
    eyebrow: "Questions",
    headlineMain: "The awkward",
    headlineSub: "ones, answered.",
    intro: "The questions people ask once they stop being polite about budget.",
    items: [
      {
        q: "How much does SEO cost in New Zealand?",
        a: "Most New Zealand SEO retainers for small and mid-sized businesses sit in the hundreds to low thousands of dollars a month, and vary with how competitive the market is and how much repair the site needs. Digital Movement charges a fixed monthly fee agreed before work starts — send your site and we will quote it against a free plan rather than a guess.",
      },
      {
        q: "Why is there no price list on this page yet?",
        a: "Because a published price you cannot stand behind is worse than no price. The tiers are scoped and the structure is fixed, but the figures are still being finalised, and we would rather show a gap than a number we would have to walk back later. Ask and you get a real one within a few days.",
      },
      {
        q: "Is there a contract or lock-in?",
        a: "Three months to start, then month by month. The three months exist because the setup work is front-loaded — the site repairs and the first new pages take that long to land, and judging the results before they do tells you nothing. After that you can leave any month you like, with no exit fee.",
      },
      {
        q: "What makes one business more expensive than another?",
        a: "Four things: how competitive your city and service are, how much technical repair the site needs first, how many pages the plan requires, and whether we write the content or you supply it. Auckland and ecommerce cost more than Dunedin because page one is genuinely harder to reach.",
      },
      {
        q: "Are there setup fees or extra costs?",
        a: "No. The monthly fee is the cost, and it does not move unless the scope moves and you agree to it first. There is no media markup, no per-report charge and no surprise invoice.",
      },
      {
        q: "Is cheap SEO worth it?",
        a: "Usually not, and the arithmetic is the reason. A retainer below roughly a day of skilled work a month cannot buy a day of skilled work a month, so something is being automated, offshored or skipped. Ask any agency how many hours their fee represents and what happens in them.",
      },
      {
        q: "What happens if it does not work?",
        a: "After the first three months you leave, and there is nothing holding you. We would rather earn next month than trap you in it — and the monthly report is built to make the answer obvious either way, which is the opposite of how most agency reporting works.",
      },
      {
        q: "Do I have to pay for the plan?",
        a: "No. The plan is free and it is yours to keep whether you hire us or not, including what is broken on the site and which searches you are missing. It exists so both sides can price the work honestly instead of guessing.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Get a number",
    headlineMain: "Ask what it",
    headlineSub: "would cost you.",
    body: "Send your website and the town you want work from. You will get a free plan and one fixed monthly price scoped to what your market actually demands — not a bracket, and not a call to discuss brackets.",
    formHeading: "Get your price and your plan",
    formNote: "A founder replies personally, within one working day.",
  },
};
