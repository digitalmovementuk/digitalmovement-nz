import type { SeoPageContent } from "../seo-pages";

export const electricians: SeoPageContent = {
  slug: "electricians",
  path: "/industries/electricians",
  serviceName: "SEO for Electricians",

  meta: {
    title: "SEO for Electricians NZ | Digital Movement",
    description:
      "See how we build websites and SEO for NZ electrical contractors — domestic, commercial, EV and solar work. Free audit, 5.0-rated agency.",
  },

  // This page is sales collateral, not a traffic asset: it's the page an
  // electrician lands on after an outreach email or a conversation, not a
  // page built to rank on its own. Every volume below is set to 0 because
  // there is no meaningful NZ search volume for these terms — 0 here means
  // "measured and negligible," not "unmeasured." Per strategy §05, this page
  // does not seed a city × trade matrix; no "seo electricians christchurch"
  // spokes get built from it.
  keywords: {
    primary: { term: "seo for electricians", volume: 0, kd: 0 },
    secondary: [
      { term: "electrician marketing nz", volume: 0, kd: 0 },
      { term: "sparky leads nz", volume: 0, kd: 0 },
      { term: "electrician website nz", volume: 0, kd: 0 },
      { term: "get more electrical work", volume: 0, kd: 0 },
    ],
  },

  hero: {
    eyebrow: "SEO · for NZ electrical contractors",
    h1: "SEO for electricians who want more than referrals.",
    sub: "This page is for New Zealand electrical contractors, and it exists to show exactly how Digital Movement builds websites and search visibility for electricians. We work with domestic and commercial sparkies alike, from switchboard upgrades to EV charger installs, backed by a 5.0 rating from 100+ verified reviews.",
    chips: ["5.0 rating, 100+ reviews", "Free SEO audit", "Page 1 in 90 days", "No lock-in contracts"],
    formHeading: "Get your free electrician SEO audit",
    formNote: "Written report in your inbox within 24 hours. No obligation.",
  },

  local: {
    eyebrow: "Why electricians are different",
    headlineMain: "Different trade,",
    headlineSub: "different rules.",
    paragraphs: [
      "Every registered electrician in New Zealand holds a practising licence issued by the Electrical Workers Registration Board, and every electrical contracting business should be showing that licence number where a customer can actually see it. It's not decoration — it's the one credential a homeowner or a commercial client can verify before they let someone near a switchboard, and a website that hides it is leaving trust on the table.",
      "Electrical work carries a paperwork layer most trades don't touch. A Certificate of Compliance follows almost every job, and electricians who explain that process plainly — what a CoC is, why it matters, when it gets issued — read as more credible to a customer who has never had to think about it before. A website that ignores compliance is missing the one thing that separates a licensed electrical contractor from someone with a screwdriver and a van.",
      "Domestic and commercial work don't behave the same way online. A homeowner with a tripped switchboard searches Google in a panic and calls whoever answers first. A homeowner planning a rewire or a lighting upgrade searches weeks ahead and compares a few sites before picking up the phone. Commercial and maintenance contracts are different again — those are usually won through relationships and tender, not a late-night search. An electrician's website has to work for all three, not just the emergency callout.",
      "The growth categories in New Zealand's electrical trade right now are EV chargers, heat pump installs, solar connections and the switchboard upgrades needed to carry the extra load. Homeowners genuinely research all four online before they commit, comparing installers the way they'd compare a builder or a landscaper. Electrical contractors who aren't visible for those searches are handing a growing, higher-value slice of the business straight to whoever is.",
      "Even when the lead is a referral, a commercial client will look up the electrical contractor's website before adding them to a shortlist. A site that looks unfinished, carries no visible licence number and shows no evidence of past commercial work can cost a tender the relationship had already half-won. For electricians chasing bigger commercial and maintenance work, the website is doing quiet work long before anyone fills in a form.",
    ],
    stats: [
      { value: "EWRB", label: "practising licence number — the credential worth displaying" },
      { value: "CoC", label: "Certificate of Compliance paperwork that follows almost every job" },
      { value: "3", label: "distinct markets: reactive domestic, planned domestic, commercial and maintenance" },
    ],
  },

  outcomes: {
    eyebrow: "What you gain",
    headlineMain: "More than referrals.",
    headlineSub: "for electrical contractors.",
    intro:
      "Electricians already get work through referrals and word of mouth. This is about the calls that never reach a referral — the homeowner researching an EV charger, the commercial client checking your site before a tender closes.",
    items: [
      {
        kicker: "Domestic",
        value: "Callouts",
        unit: "and planned work",
        title: "Found for both kinds of domestic job",
        body: "Electricians get found by the customer with a tripped switchboard tonight and the customer planning a rewire next month — two different searches, and your site needs to land on both.",
      },
      {
        kicker: "Commercial",
        value: "Shortlists",
        unit: "not cold leads",
        title: "A site that survives due diligence",
        body: "Commercial and maintenance clients check an electrical contractor's website before shortlisting, even on a referral. We build the site that holds up to that look.",
      },
      {
        kicker: "Growth work",
        value: "Upgrade jobs",
        unit: "EV, solar, heat pumps",
        title: "Capture the upgrade work",
        body: "Homeowners research EV chargers, solar and switchboard upgrades online before they call anyone. Electrical contractors visible for those searches get first crack at the higher-value job.",
      },
    ],
  },

  included: {
    eyebrow: "What's included",
    headlineMain: "One flat fee.",
    headlineSub: "nothing held back.",
    intro:
      "Fixed monthly price, no setup surprises — built around how electrical contractors actually run their business. Everything below is included from month one and stays included for as long as you keep growing.",
    columns: [
      {
        title: "Strategy",
        items: [
          "Technical SEO audit of your current site",
          "Domestic vs commercial keyword mapping for electricians",
          "EV charger, solar and heat pump service pages",
          "Compliance and licensing content review",
          "Six-month content plan",
        ],
      },
      {
        title: "Execution",
        items: [
          "Technical fixes (speed, crawler, indexation)",
          "Google Business Profile optimisation",
          "EWRB licence number and CoC process made visible on-page",
          "Trade-specific pages for switchboard, rewiring and EV work",
          "Schema.org and local structured data",
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
    eyebrow: "How it works",
    headlineMain: "The 90 days,",
    headlineSub: "mapped out.",
    intro:
      "What happens on day 1, 30, 60 and 90 for an electrical contractor working with us. We say it up front, we stick to it, and we show you the maths every month.",
    steps: [
      { eta: "Day 1", title: "Audit & kick-off", body: "Free SEO audit for your electrical contracting business lands in your inbox, plus a short call to walk through what it means for you." },
      { eta: "Day 30", title: "Site and profile live", body: "Domestic and commercial service pages go live, your EWRB licence number is visible where customers look for it, and your Google Business Profile is fully built out." },
      { eta: "Day 60", title: "Rankings climbing", body: "Commercial keywords and growth-category searches like EV chargers and solar start moving up, and enquiries begin coming in." },
      { eta: "Day 90", title: "Page 1 on Google", body: "Your guaranteed page 1 position is live. From here, month-to-month — no lock-in." },
    ],
  },

  proof: {
    eyebrow: "Real results",
    headlineMain: "Honest reviews,",
    headlineSub: "not electricians yet.",
    intro:
      "We don't have a named electrical contractor client to point you to — you'd be one of our first in the trade. What we can show you is honest, verified feedback from other New Zealand businesses we've worked with, none of them electricians. It's proof of how we work, not a claim about electrical trade results we haven't earned yet.",
    limit: 3,
  },

  nearby: {
    eyebrow: "Also in New Zealand",
    headlineMain: "Also building",
    headlineSub: "for other trades.",
    intro: "Electricians aren't the only trade we build for. Here's where else we work.",
    links: [
      { label: "SEO for Plumbers", to: "/industries/plumbers", blurb: "Search visibility built for New Zealand plumbing businesses." },
      { label: "SEO for Roofers", to: "/industries/roofers", blurb: "Website and SEO support for NZ roofing contractors." },
      { label: "SEO New Zealand", to: "/seo", blurb: "Our national SEO hub — every city, every service, one guarantee." },
    ],
  },

  faq: {
    eyebrow: "Common questions",
    headlineMain: "Electrician SEO,",
    headlineSub: "answered straight.",
    intro: "What New Zealand electrical contractors ask most before they book their free audit.",
    items: [
      {
        q: "Do electricians actually need SEO, or is referral work enough?",
        a: "Referrals bring in work, but they don't cover the searches happening without you — homeowners researching EV chargers, solar and switchboard upgrades, or commercial clients checking your website before a tender closes. SEO catches that demand instead of leaving it to whoever shows up first on Google.",
      },
      {
        q: "Should my EWRB licence number be on my website?",
        a: "Yes — your practising licence number is the one credential a customer can actually verify before letting you near their switchboard, so it belongs somewhere visible, not buried in a footer. We build that in as standard for every electrical contractor we work with.",
      },
      {
        q: "Can you help me get found for EV charger and solar installs specifically?",
        a: "Yes. EV chargers, solar connections, heat pumps and switchboard upgrades are genuinely searched by homeowners before they buy, and we build dedicated pages for each so electrical contractors show up for that research, not just the emergency callout searches.",
      },
      {
        q: "I get most of my commercial work through relationships — does a website still matter?",
        a: "Yes, because commercial and maintenance clients still check your website before adding you to a shortlist, even when the lead came from a referral. A thin or dated site can cost a tender the relationship had already half-won.",
      },
      {
        q: "How is this different from a generic trades SEO package?",
        a: "It's built around how electrical contractors actually work, not a generic trades template — domestic callouts, planned domestic jobs like rewiring, commercial and maintenance contracts, and the compliance paperwork running through all of them. Builders and plumbers don't carry the same certificate and licensing layer, so their pages shouldn't look like yours.",
      },
      {
        q: "What does it cost, and is there a contract?",
        a: "Fixed monthly pricing, scoped to your business, with no setup fee — we give you a concrete number after the free audit. We work month-to-month after a short minimum term, so if we're not delivering, you can leave.",
      },
      {
        q: "How long until I see results?",
        a: "We guarantee a page 1 Google ranking within 90 days, and most electrical contractors see ranking movement inside the first few weeks. Enquiries typically follow once the domestic and commercial pages are live.",
      },
      {
        q: "What's actually included?",
        a: "Technical SEO, domestic and commercial service pages, EWRB licence and compliance content made visible, Google Business Profile management, and a live reporting dashboard — one fixed monthly fee, nothing added on top.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Talk to us",
    headlineMain: "Ready for more",
    headlineSub: "than referrals?",
    body: "Get in touch to see how a 5.0-rated NZ agency builds websites and search visibility for electrical contractors — domestic, commercial, and the EV and solar work homeowners are already researching.",
    formHeading: "Get your free electrician SEO audit",
    formNote: "No obligation. Straight answers, not a sales pitch.",
  },
};
