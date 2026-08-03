import type { SeoPageContent } from "../seo-pages";

export const electricians: SeoPageContent = {
  slug: "electricians",
  path: "/industries/electricians",
  serviceName: "SEO for Electricians",

  meta: {
    title: "SEO for Electricians NZ | Digital Movement",
    description:
      "Getting NZ sparkies found on Google — domestic callouts, commercial work, and the EV and solar jobs homeowners research first. Free plan, no obligation.",
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
    eyebrow: "SEO · for sparkies",
    h1: "SEO for electricians who want more than referrals.",
    sub: "Domestic or commercial, switchboards or EV chargers — this is how we get a New Zealand electrical business found on Google. Free plan first, so you can see what we'd do before you spend anything.",
    chips: ["5.0 Google rating", "100+ verified reviews", "Searches agreed in writing", "Free plan, no obligation"],
    formHeading: "Get your free electrician SEO plan",
    formNote: "A one-page plan in your inbox within one working day. No sales call, no obligation.",
  },

  local: {
    eyebrow: "Why sparkies are different",
    headlineMain: "Different trade,",
    headlineSub: "different rules.",
    paragraphs: [
      "Your practising licence number is the one thing a customer can actually check before they let you near a switchboard. It belongs somewhere they'll see it, not buried in a footer. Same with the compliance certificate that follows nearly every job — explain it plainly and you sound like someone who does this properly, because most sites don't mention it at all.",
      "You've really got three different customers. The one with a tripped board tonight, who rings whoever answers. The one planning a rewire, who'll compare a few sites over a fortnight. And the commercial client, who's already been referred to you but will still open your website before they put you on the list. One page can't do all three.",
      "Then there's the growth work — EV chargers, heat pumps, solar, and the switchboard upgrades that come with them. Homeowners genuinely research those before they ring anyone, the way they'd research a builder. If you're not there for those searches, you're handing the bigger jobs to whoever is.",
    ],
    stats: [
      { value: "EWRB", label: "your practising licence number — worth showing, not hiding" },
      { value: "CoC", label: "the compliance certificate that follows nearly every job" },
      { value: "3", label: "different customers: urgent, planned, and commercial" },
    ],
  },

  outcomes: {
    eyebrow: "What you gain",
    headlineMain: "What changes when",
    headlineSub: "the work actually lands.",
    intro:
      "You already get work through referrals. This is about the calls that never reach one — the homeowner pricing an EV charger, the commercial client checking your site before a tender closes.",
    items: [
      {
        kicker: "Domestic",
        value: "Both",
        unit: "kinds of job",
        title: "Found for the callout and the rewire",
        body: "The tripped board tonight and the rewire next month are two different searches. Your site needs to land on both, and most don't.",
      },
      {
        kicker: "Commercial",
        value: "Shortlists",
        unit: "not cold leads",
        title: "A site that survives the once-over",
        body: "Commercial and maintenance clients open your website before they shortlist you, even when a mate sent them. We build the site that holds up to that look.",
      },
      {
        kicker: "Growth work",
        value: "EV, solar,",
        unit: "heat pumps",
        title: "Catch the upgrade jobs",
        body: "People research chargers, solar and switchboard upgrades online before they ring anyone. Turn up for that and you get first crack at the bigger job.",
      },
    ],
  },

  included: {
    eyebrow: "What you get",
    headlineMain: "Everything included.",
    headlineSub: "Fixed price, no surprises.",
    intro:
      "One price a month. Everything below starts on day one and runs every month after, for as long as you want to keep growing.",
    columns: [
      {
        title: "Getting started",
        items: [
          "We check what's broken on your site",
          "We split domestic from commercial and go after both",
          "A look at who's beating you locally, and why",
          "Pages planned for EV chargers, solar and heat pumps",
          "A six-month plan you can read in one sitting",
        ],
      },
      {
        title: "The work",
        items: [
          "Fixing the slow pages and the ones Google can't read",
          "Your licence number and compliance process where customers look",
          "Pages for switchboards, rewiring and EV work",
          "Your Google listing sorted — categories, areas, reviews",
          "Code that tells Google your hours, your area and your phone number",
        ],
      },
      {
        title: "What you see",
        items: [
          "A live dashboard — rankings, visits, enquiries",
          "A plain-English report every month",
          "The person doing the work, on the phone",
          "No account managers in between",
          "What worked, and what's next",
        ],
      },
    ],
  },

  process: {
    eyebrow: "How it runs",
    headlineMain: "Your first",
    headlineSub: "three months.",
    intro:
      "Here's how a job runs, start to finish. We say it up front and stick to it.",
    steps: [
      { eta: "Week 1", title: "Plan and kick-off", body: "Your free plan lands in your inbox, then a short call to walk through what it means and what we do first." },
      { eta: "Month 1", title: "Foundations", body: "The broken things get fixed. Domestic and commercial pages live, your licence number visible, your Google listing sorted." },
      { eta: "Month 2", title: "It compounds", body: "More pages live, including the EV and solar work. You can watch each agreed search move." },
      { eta: "Month 3", title: "First full review", body: "Every search we agreed, side by side: where you started, where you are, and what came in. From here it's month by month." },
    ],
  },

  proof: {
    eyebrow: "Client reviews",
    headlineMain: "Proof from around NZ.",
    headlineSub: "No made-up sparky case study.",
    intro:
      "We haven't got a named electrical client to point you to — you'd be one of our first in the trade. What we can show you is honest, verified feedback from other New Zealand businesses. It's proof of how we work, not a claim about results we haven't earned yet.",
    limit: 3,
  },

  nearby: {
    eyebrow: "Other trades",
    headlineMain: "Other trades",
    headlineSub: "we get found.",
    intro: "Same approach, different trade.",
    links: [
      { label: "SEO for Plumbers", to: "/industries/plumbers", blurb: "Built around the burst-pipe search." },
      { label: "SEO for Roofers", to: "/industries/roofers", blurb: "Built for storm season and the big re-roof." },
      { label: "SEO New Zealand", to: "/seo", blurb: "The national hub — how we get NZ businesses found." },
    ],
  },

  faq: {
    eyebrow: "Common questions",
    headlineMain: "The questions we",
    headlineSub: "get asked most.",
    intro: "What sparkies ask before booking a free plan.",
    items: [
      {
        q: "Do we need this, or is referral work enough?",
        a: "Referrals bring in work, but they don't cover the searches happening without you — the homeowner pricing an EV charger, the commercial client checking your site before a tender closes. This catches that instead of leaving it to whoever's at the top of Google.",
      },
      {
        q: "Should my licence number be on my website?",
        a: "Yes. It's the one thing a customer can actually check before letting you near their switchboard, so it belongs somewhere visible rather than buried in a footer. We build that in as standard.",
      },
      {
        q: "Can you get us found for EV chargers and solar specifically?",
        a: "Yes. People genuinely research chargers, solar, heat pumps and switchboard upgrades before they buy, so we build a page for each. That's how you turn up for the bigger jobs, not just the emergency callouts.",
      },
      {
        q: "Most of our commercial work comes from relationships. Does a website still matter?",
        a: "Yes, because they still open it before they shortlist you, even when the lead came from someone they trust. A thin or dated site can cost you a tender the relationship had already half-won.",
      },
      {
        q: "How is this different from a generic trades package?",
        a: "It's built around how your trade actually works — urgent callouts, planned domestic jobs, commercial contracts, and the paperwork running through all of it. Builders and plumbers don't carry the same licensing layer, so their pages shouldn't look like yours.",
      },
      {
        q: "What does it cost, and am I locked in?",
        a: "One fixed price a month, no setup fee — you get the real number after the free plan. Three months to start, then month by month, so you can stop whenever you want.",
      },
      {
        q: "How long before we see anything?",
        a: "Some movement usually shows in the first few weeks, because the technical fixes land first. Enquiries follow once the pages have been up a month or two. Anyone promising you a position by a set date is promising something Google decides, not them.",
      },
      {
        q: "What's actually included?",
        a: "The technical fixes, domestic and commercial pages, your licence and compliance content made visible, your Google listing, and a live dashboard. One price a month, nothing added on top.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Talk to us",
    headlineMain: "Let's talk about",
    headlineSub: "your electrical business.",
    body: "Send us your website and the areas you cover. We'll show you where you sit on Google now, who's ahead of you, and the three fixes worth doing first. One working day, no sales call.",
    formHeading: "Get your free electrician SEO plan",
    formNote: "A one-page plan within one working day. No sales call, no obligation.",
  },
};
