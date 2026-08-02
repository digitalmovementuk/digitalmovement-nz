import type { SeoPageContent } from "../seo-pages";

export const hawkesBay: SeoPageContent = {
  slug: "hawkes-bay",
  path: "/seo/hawkes-bay",
  city: "Hawke's Bay",
  region: "Hawke's Bay",

  meta: {
    title: "SEO Hawke's Bay | Napier & Hastings | Digital Movement",
    description:
      "SEO Hawke's Bay for Napier and Hastings trades. Target searches agreed in writing, a report every month, and a free plan before you commit.",
  },

  keywords: {
    primary: { term: "seo hawkes bay", volume: 140, kd: 9 },
    // Semrush's NZ database returns no monthly volume for these regional
    // variants — Hawke's Bay is a two-centre market and the query volume
    // splits across "seo napier", "seo hastings" and the agency-intent
    // phrases, so each one individually falls below Semrush's reporting
    // threshold. Volume: 0 here means "no data", not "no demand". Targeted
    // on inference from the primary term and real buyer search behaviour.
    secondary: [
      { term: "seo napier", volume: 0, kd: 0 },
      { term: "seo hastings", volume: 0, kd: 0 },
      { term: "hawkes bay seo services", volume: 0, kd: 0 },
      { term: "seo company hawkes bay", volume: 0, kd: 0 },
      { term: "hawkes bay seo agency", volume: 0, kd: 0 },
    ],
  },

  hero: {
    eyebrow: "SEO · for Hawke's Bay businesses",
    h1: "SEO Hawke's Bay trades use to fill the calendar.",
    sub: "SEO for trades and local businesses in Napier, Hastings and the wider Hawke's Bay who want to be the first name that comes up when someone searches for what they do — and who want it written down which searches those are.",
    chips: ["Searches agreed in writing", "5.0 Google rating", "Month by month after 3", "Free plan, no obligation"],
    formHeading: "Get your free Hawke's Bay SEO audit",
    formNote: "One-page report, plain English, in your inbox within one working day. No obligation.",
  },

  local: {
    eyebrow: "Why Hawke's Bay is different",
    headlineMain: "One region,",
    headlineSub: "two centres, one search strategy.",
    paragraphs: [
      "Hawke's Bay isn't a single town with a single search pattern. Napier and Hastings sit twenty minutes apart, each with its own commercial centre, and a trades business here routinely quotes jobs in both without a second thought. A page written around one town name misses the customers searching from the other.",
      "Napier still trades on its 1931 earthquake rebuild — the Art Deco centre that came out of it is now the reason a steady flow of visitors walks the city every year. That tourism economy shapes demand for hospitality fit-outs, property maintenance and short-term rental turnarounds in a way most New Zealand cities don't experience.",
      "Hastings carries the industrial and horticultural weight of the region. Packhouses, cool stores and processing plants ring the city, and the orchards and vineyards spreading out from Havelock North and the Heretaunga Plains bring a seasonal labour economy that peaks hard at harvest. A search for a commercial electrician or a refrigeration contractor here is often tied to that calendar, not a generic year-round pattern.",
      "The Port of Napier is the region's export gateway for that same fruit, wine and produce, and the freight, engineering and logistics trades that service it cluster around the port and the industrial edges of the city — a different customer again from the residential builder working a Havelock North renovation.",
      "Cyclone Gabrielle in 2023 put sustained pressure on building, roofing, drainage and civil trades across the region, and that demand hasn't fully worked through the system yet. It's context for why capacity is tight, not a hook to sell against — we won't dress it up as a marketing angle.",
      "We build local pages and content that name Napier, Hastings, Havelock North and the rural surrounds separately, because that's how people here actually search — not around a single generic 'Hawke's Bay' term with the suburb swapped out.",
    ],
  },

  outcomes: {
    eyebrow: "What you gain",
    headlineMain: "Found in",
    headlineSub: "Napier and Hastings both.",
    intro: "Real visibility across a two-centre region, so you're not choosing between ranking in Napier or ranking in Hastings.",
    items: [
      {
        kicker: "Visibility",
        title: "Rank where it counts",
        body: "One business, found in both centres. We build for Napier searches and Hastings searches separately, because a customer in Havelock North doesn't search the way one in Ahuriri does.",
      },
      {
        kicker: "Coverage",
        value: "Two",
        unit: "centres",
        title: "Napier and Hastings covered",
        body: "We build pages and content for both city centres and the towns between them, not a single generic Hawke's Bay page.",
      },
      {
        kicker: "Reach",
        value: "Whole",
        unit: "region",
        title: "Beyond the city limits",
        body: "Havelock North, the Heretaunga Plains, the coast — we position you for the rural and lifestyle customers who search across the wider catchment.",
      },
    ],
  },

  included: {
    eyebrow: "What you get",
    headlineMain: "Everything included.",
    headlineSub: "One fixed monthly price.",
    intro: "No setup fee, no surprise add-ons. Everything below runs from month one, and keeps running for as long as you want to keep growing.",
    columns: [
      {
        title: "Strategy",
        items: [
          "Technical SEO audit",
          "Napier and Hastings keyword mapping",
          "Hawke's Bay competitor analysis",
          "Six-month content plan",
          "Conversion architecture",
        ],
      },
      {
        title: "Execution",
        items: [
          "Technical fixes (speed, crawler, indexation)",
          "Local landing pages for Napier, Hastings and Havelock North",
          "Content production (4–8 pages/month)",
          "Google Business Profile optimisation",
          "Schema.org & structured data",
        ],
      },
      {
        title: "Reporting",
        items: [
          "Live dashboard (rankings, traffic, enquiries)",
          "Monthly plain-English report",
          "Direct line to your specialist",
          "No account-manager ping-pong",
          "Clear wins, clear next steps",
        ],
      },
    ],
  },

  process: {
    eyebrow: "The 90-day journey",
    headlineMain: "Four milestones.",
    headlineSub: "Clear, honest, on record.",
    intro: "What happens on day 1, 30, 60 and 90. We say it up front, we stick to it, and we show you the maths every month.",
    steps: [
      { eta: "Week 1", title: "Audit & kick-off", body: "Free SEO audit in your inbox. A strategy call where we map your Napier and Hastings keyword targets." },
      { eta: "Week 4", title: "Foundation in place", body: "Technical SEO clean. First local pages for Napier and Hastings live. Tracking running, data flowing." },
      { eta: "Week 8", title: "Climbing the rankings", body: "First commercial keywords reach the top of page 2 or bottom of page 1. Enquiries start coming in from across the Bay." },
      { eta: "Week 13", title: "The first full review", body: "Every search we agreed, side by side: where you started, where you are now, and what came in. From here it runs month by month." },
    ],
  },

  proof: {
    eyebrow: "Client reviews",
    headlineMain: "Results from",
    headlineSub: "businesses across NZ.",
    intro: "These are genuine reviews from Digital Movement clients around New Zealand — not Hawke's Bay businesses, and not trades specifically. We're showing you the standard of work you'd be getting, honestly, before we've had the chance to build you a local track record.",
  },

  nearby: {
    eyebrow: "Also serving",
    headlineMain: "SEO across",
    headlineSub: "New Zealand.",
    intro: "We run the same process for businesses in other New Zealand regions.",
    links: [
      { label: "SEO New Zealand", to: "/seo", blurb: "Our national SEO service, for any Kiwi business." },
      { label: "SEO Tauranga", to: "/seo/tauranga", blurb: "Local SEO for the Bay of Plenty." },
      { label: "SEO Hamilton", to: "/seo/hamilton", blurb: "Page 1 rankings for Hamilton businesses." },
    ],
  },

  faq: {
    eyebrow: "Common questions",
    headlineMain: "Asked straight.",
    headlineSub: "Answered straight.",
    intro: "What Napier and Hastings business owners ask us most before booking their free plan.",
    items: [
      {
        q: "What does SEO in Hawke's Bay cost?",
        a: "It's a fixed monthly price, not a per-hour or per-link fee — the exact number depends on your industry and how competitive your keywords are. Ask for your free plan and we'll give you a concrete figure, not a range that hides the real cost.",
      },
      {
        q: "Do you offer SEO in Napier specifically?",
        a: "Yes. Seo Napier work means local landing pages, Google Business Profile optimisation and content built around Napier's suburbs and the Art Deco tourism trade alongside the wider Hawke's Bay strategy.",
      },
      {
        q: "Do you offer SEO in Hastings specifically?",
        a: "Yes. Seo Hastings work is built around the city's industrial, packhouse and horticultural economy, plus the residential suburbs, so a Hastings-based trade or service business shows up for the searches that actually apply to it.",
      },
      {
        q: "Is there a Hawke's Bay SEO agency that covers both Napier and Hastings?",
        a: "Digital Movement builds one strategy that covers Napier, Hastings and Havelock North together, because most Hawke's Bay businesses already serve customers across both centres rather than picking one.",
      },
      {
        q: "Are you a Hawke's Bay SEO agency that specialises in trades?",
        a: "Digital Movement's core focus is trades and home services — builders, plumbers, electricians, roofers, landscapers. We understand how those businesses get found: urgent local searches, seasonal demand and a customer base spread across a wide catchment.",
      },
      {
        q: "How fast will I see results from a Hawke's Bay SEO company?",
        a: "Ranking movement typically starts in the first two to four weeks, because the early technical fixes are what Google picks up fastest. Enquiries follow once the new pages have been live a month or two. We won't promise a position — nobody controls Google's results — but the searches we're chasing are agreed in writing, and you see where you sit on each one every month.",
      },
      {
        q: "Is there a minimum contract length?",
        a: "We ask for three months to start, then work month by month. If we're not delivering, you can leave — we'd rather earn the next month than trap you in one.",
      },
      {
        q: "Do you have Hawke's Bay client case studies?",
        a: "Not yet — we're upfront about that. Our published results are from clients elsewhere in New Zealand. What you can rely on is the same process, the target searches written down before you start, and a 5.0 Google rating across 100+ reviews.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Talk to us",
    headlineMain: "Let us show you",
    headlineSub: "how we get Hawke's Bay found.",
    body: "Send us your website and whether you work Napier, Hastings or both. You'll get back the searches your customers are already using, who's winning them instead of you, and the three fixes worth doing first. One working day, no sales call.",
    formHeading: "Get your free Hawke's Bay SEO audit",
    formNote: "One-page report, plain English, in your inbox within one working day. No obligation.",
  },
};
