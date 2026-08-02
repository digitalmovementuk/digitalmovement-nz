import type { SeoPageContent } from "../seo-pages";

export const roofers: SeoPageContent = {
  slug: "roofers",
  path: "/industries/roofers",
  serviceName: "SEO for Roofers",

  meta: {
    title: "SEO for Roofers NZ | Digital Movement",
    description:
      "See how Digital Movement helps NZ roofing companies turn storm demand and re-roof enquiries into booked jobs. Free plan, no obligation.",
  },

  // This page is sales collateral, not a traffic asset. We send it to a
  // roofing contractor after outreach or a conversation, so it's judged on
  // whether we understand their business — not on how it ranks. "seo for
  // roofers" and every term below return 0 in Semrush's NZ database, and 0
  // here means no meaningful NZ search volume, not "unmeasured". Per
  // strategy §05, this single page is the end of the line — no
  // city × trade matrix ("seo for roofers auckland", "seo for roofers
  // christchurch", etc.) gets built out from it.
  keywords: {
    primary: { term: "seo for roofers", volume: 0, kd: 0 },
    secondary: [
      { term: "roofing marketing nz", volume: 0, kd: 0 },
      { term: "roof repair leads", volume: 0, kd: 0 },
      { term: "roofing company website nz", volume: 0, kd: 0 },
      { term: "get more roofing jobs", volume: 0, kd: 0 },
    ],
  },

  hero: {
    eyebrow: "SEO · for NZ roofing companies",
    h1: "SEO for roofers, built for storm season.",
    sub: "This page is for New Zealand roofing company owners weighing up whether Digital Movement can get them found online. We don't have roofing clients to point to yet, so instead of a case study, here's exactly how we'd approach a roofing company's SEO — the storm-driven demand spikes, the high-value re-roof decision, and the trust problem a trade with plenty of fly-by-night operators has to solve first.",
    chips: ["5.0 Google rating", "100+ verified reviews", "Searches agreed in writing", "Free plan, no obligation"],
    formHeading: "Get your free roofing SEO audit",
    formNote: "One-page report, plain English, in your inbox within one working day. No obligation.",
  },

  local: {
    eyebrow: "Why roofing is different",
    headlineMain: "Storms move search.",
    headlineSub: "Trust closes the roofing job.",
    paragraphs: [
      "Roofing search doesn't move at a steady pace. It spikes hard after a storm, a hailstorm, or a run of heavy rain, when homeowners go looking for someone who can get up on a roof and stop a leak. A roofing company that only shows up in search results once a customer already has water coming through the ceiling has missed the moment that actually mattered — the weeks before the weather turned, when the business that ranked was the one already visible.",
      "A full re-roof is not an impulse job. It's one of the largest single purchases a homeowner will make on their house, and most people go looking for several quotes before they commit to one. That means a roofing company's website and reviews are doing real work in that decision — a homeowner comparing three roofers on price will often pick the one who looks the most credible online, not the cheapest.",
      "Insurance work is its own category, and it needs to be treated that way. A homeowner dealing with storm or weather damage covered by an insurance claim searches differently to someone paying out of pocket — they want a roofing company that understands the claims process, can document damage properly, and can deal directly with an assessor. Roofing companies that can speak to that process clearly, on their own site, stand out from the ones that can't.",
      "Roofing enquiries split into at least three different buyers: the homeowner with an active leak who needs someone today, the property owner booking routine maintenance before winter, and the homeowner planning a full re-roof months in advance. Each one searches differently and each one needs a different answer on the page — burying an emergency callout behind a page built for re-roof quotes loses the customer who needed the fastest response.",
      "New Zealand homeowners researching a re-roof are usually weighing up long-run steel against tile or a membrane system, and increasingly asking what holds up best near the coast. Coastal corrosion is a genuine factor for roofing companies working anywhere near salt air, and a roofing company that can speak plainly about material choice and coastal performance answers the question a homeowner is actually typing into Google.",
      "Roofing attracts more fly-by-night operators than most trades — the door-knockers who turn up after a storm, take a deposit, and are gone by the time the flashing fails. That history means a homeowner searching for a roofer is actively looking for proof: real reviews, a proper business address, before-and-after photos, evidence the company will still be answering the phone in five years. Visible proof does more work for a roofing company than it does for almost any other trade.",
    ],
    stats: [
      { value: "Storm-driven", label: "search demand spikes after severe weather" },
      { value: "3", label: "buyer types: emergency, maintenance, full re-roof" },
      { value: "5.0", label: "Google rating across 100+ reviews" },
    ],
  },

  outcomes: {
    eyebrow: "What you gain",
    headlineMain: "Found before the storm.",
    headlineSub: "Not after the leak starts.",
    intro: "Real visibility for roofing companies across every kind of job — emergency leak repair, routine maintenance, and the big re-roof decision.",
    items: [
      {
        kicker: "Visibility",
        title: "Rank where it counts",
        body: "A leaking roof is not a job anyone shops around for. They search, they ring the first two or three names they see, and it is done by lunchtime. Being on that list is the whole game.",
      },
      {
        kicker: "Timing",
        value: "Before",
        unit: "the storm hits",
        title: "Visible ahead of demand",
        body: "We build your roofing company's visibility now, so you're already ranking when the next storm or heavy rain sends people searching for a roofer.",
      },
      {
        kicker: "Trust",
        value: "Proof",
        unit: "on every page",
        title: "Credibility that closes quotes",
        body: "Reviews, a proper business presence and clear content on material choice and insurance work — the proof a homeowner checks before picking a roofer for a high-value re-roof.",
      },
    ],
  },

  included: {
    eyebrow: "What you get",
    headlineMain: "Everything included.",
    headlineSub: "One fixed monthly price.",
    intro: "No setup fee, no surprise add-ons. Everything below runs from month one, built around how roofing companies actually get found.",
    columns: [
      {
        title: "Strategy",
        items: [
          "Technical SEO audit",
          "Roofing keyword mapping (emergency, maintenance, re-roof)",
          "Local roofing competitor analysis",
          "Six-month content plan",
          "Conversion architecture",
        ],
      },
      {
        title: "Execution",
        items: [
          "Technical fixes (speed, crawler, indexation)",
          "Landing pages for emergency, maintenance and re-roof enquiries",
          "Content on materials, coastal corrosion and insurance claims",
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
    eyebrow: "How it runs",
    headlineMain: "Four milestones.",
    headlineSub: "Clear, honest, on record.",
    intro: "What happens on day 1, 30, 60 and 90 for your roofing company. We say it up front, we stick to it, and we show you the maths every month.",
    steps: [
      { eta: "Week 1", title: "Audit & kick-off", body: "Free SEO audit in your inbox. A strategy call where we map your roofing company's keyword targets — emergency, maintenance and re-roof." },
      { eta: "Week 4", title: "Foundation in place", body: "Technical SEO clean. First landing pages for your roofing services live. Tracking running, data flowing." },
      { eta: "Week 8", title: "Climbing the rankings", body: "The re-roof and repair searches start climbing into view. Enquiries start coming in for your roofing company." },
      { eta: "Week 13", title: "The first full review", body: "Every search we agreed, side by side: where you started, where you are now, and what came in. From here it runs month by month." },
    ],
  },

  proof: {
    eyebrow: "Client reviews",
    headlineMain: "Results from",
    headlineSub: "businesses across NZ.",
    intro: "These are genuine reviews from Digital Movement clients around New Zealand — not roofing companies. We're showing you the standard of work you'd get, honestly, before we've had the chance to build a roofing track record.",
    limit: 3,
  },

  nearby: {
    eyebrow: "Also serving",
    headlineMain: "SEO for",
    headlineSub: "other NZ trades.",
    intro: "We run the same process for the other trades, and for New Zealand businesses generally.",
    links: [
      { label: "SEO for Builders", to: "/industries/builders", blurb: "The same approach, built for building companies." },
      { label: "SEO for Electricians", to: "/industries/electricians", blurb: "Local SEO for electrical contractors." },
      { label: "SEO New Zealand", to: "/seo", blurb: "Our national SEO service, for any Kiwi business." },
    ],
  },

  faq: {
    eyebrow: "Common questions",
    headlineMain: "Asked straight.",
    headlineSub: "Answered straight.",
    intro: "What roofing company owners ask us most before booking their free plan.",
    items: [
      {
        q: "What does SEO for roofers cost?",
        a: "It's a fixed monthly price, not a per-hour or per-link fee — the exact number depends on how competitive your area and keywords are. Ask for the free plan and you'll get a real number for your roofing business, not a range.",
      },
      {
        q: "Do you have roofing client case studies?",
        a: "Not yet — we're upfront about that. Our published results are from New Zealand clients in other industries. What you can rely on is the same process, written down before you pay us anything, and a 5.0 Google rating across 100+ reviews.",
      },
      {
        q: "Can SEO actually handle the demand spike after a storm?",
        a: "Yes, but only if the work is done before the storm. When the wind comes through, everyone in the region searches at once and rings whoever is already at the top. Getting there takes weeks, so a roofer who starts the day after a storm has already missed it. The whole point is to be in position when it hits.",
      },
      {
        q: "Do you write content about insurance and claims work?",
        a: "Yes. We build pages that speak directly to homeowners dealing with an insurance claim, because that's a distinct search and a distinct buyer from someone paying for a re-roof out of pocket.",
      },
      {
        q: "Will you cover material choice — steel, tile, membrane?",
        a: "Yes. We write content that answers what New Zealand homeowners are actually researching, including coastal corrosion and how different roofing materials hold up near the coast.",
      },
      {
        q: "How do you help a roofing company build trust online?",
        a: "We put your reviews, your real business details and your track record front and centre, because roofing has more fly-by-night operators than most trades and homeowners are actively checking for proof before they book a quote.",
      },
      {
        q: "Is there a minimum contract length?",
        a: "We ask for three months to start, then work month by month. Three months to start, then it's yours to end whenever you like.",
      },
      {
        q: "How fast will my roofing company see results?",
        a: "Ranking movement typically starts in the first two to four weeks, because the technical work lands first and Google picks it up quickly. Calls follow later. Most roofers are looking at a few months before the phone genuinely changes, and you'll see exactly where you sit every month in between.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Talk to us",
    headlineMain: "Let us show you",
    headlineSub: "how we get roofers found.",
    body: "Get in touch and we'll show you which roofing searches in your area are worth going after, what your competitors are doing on them, and what it would take to get in front. Free, in plain English, in one working day.",
    formHeading: "Get your free roofing SEO audit",
    formNote: "One-page report, plain English, in your inbox within one working day. No obligation.",
  },
};
