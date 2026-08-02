import type { SeoPageContent } from "../seo-pages";

export const plumbers: SeoPageContent = {
  slug: "plumbers",
  path: "/industries/plumbers",
  serviceName: "SEO for Plumbers",

  meta: {
    title: "SEO for Plumbers NZ | Digital Movement",
    description:
      "SEO for NZ plumbers, built around the burst-pipe search — the one where whoever shows up first gets the call. Free plan, no obligation.",
  },

  // This page is not a traffic asset. It's sales collateral and an outreach
  // landing page — the page we send a plumber to after an email or a phone
  // call, so they can see we understand their business before they've ever
  // searched for us. Volume 0 across every term means Semrush's NZ database
  // returns no meaningful monthly search volume for these trade terms — that
  // is "no demand," not "unmeasured." Per strategy §05, trades keywords like
  // these drive no real traffic on their own, so no city × trade matrix gets
  // built off this page or these terms.
  keywords: {
    primary: { term: "seo for plumbers", volume: 0, kd: 0 },
    secondary: [
      { term: "plumber marketing nz", volume: 0, kd: 0 },
      { term: "emergency plumber leads", volume: 0, kd: 0 },
      { term: "plumber website nz", volume: 0, kd: 0 },
      { term: "get more plumbing jobs", volume: 0, kd: 0 },
    ],
  },

  hero: {
    eyebrow: "SEO · for plumbers",
    h1: "SEO for plumbers who answer the phone.",
    sub: "This page is for the owner of a small New Zealand plumbing business deciding whether an SEO agency is worth the money. A burst pipe gets searched on a phone, right now, by someone who taps the first credible result and calls — we build so that's you, not the plumber three trucks over.",
    chips: ["Searches agreed in writing", "5.0 Google rating", "Month by month after 3", "Free plan, no obligation"],
    formHeading: "Get your free plumbing SEO audit",
    formNote: "One-page report, plain English, in your inbox within one working day. No obligation.",
  },

  local: {
    eyebrow: "Why plumbers are different",
    headlineMain: "Built for the callout,",
    headlineSub: "not just the keyword.",
    paragraphs: [
      "A burst pipe or a blocked drain doesn't wait for business hours, and neither does the search for someone to fix it. Most emergency plumbing searches happen on a phone, in the middle of a problem, and the person searching taps the first result that looks like it can help — then calls. That's a completely different moment to someone comparing kitchen renovation quotes over a weekend, and it's the moment that decides which plumbing business gets the job.",
      "Google's local pack — the map block with three businesses at the top of the results — is where most of those emergency searches get decided, often before anyone scrolls down to the organic listings below it. For plumbers, showing up there, with a phone-first site that loads fast and puts a way to get in touch on the first screen, matters more than it does for almost any other trade.",
      "A plumbing business that answers fast beats one with a nicer website every time someone's standing in a flooding laundry. Search behaviour follows the same logic — Google and the person searching both reward businesses that look reachable and responsive, not just the ones with the most polished pages.",
      "Reviews do more work for plumbers than for most businesses, because someone choosing in a panic doesn't have time to compare five quotes. They read the star rating, skim the most recent comments, and decide. A plumbing business with a thin or stale review profile loses jobs it never even knew it was in the running for.",
      "Not every plumbing search is an emergency. Callouts, planned maintenance, and bathroom or renovation work are three different searches with three different margins, and they need different content and different keywords — someone searching for a burst pipe wants a number to ring right now, someone researching a bathroom reno wants photos, a price range, and time to think.",
      "New Zealand requires plumbers to be registered and certifying under the Plumbers, Gasfitters and Drainlayers Board, and that registration is a genuine trust signal — to a customer deciding who to call, and to the credibility a Google Business Profile carries. We build that into how a plumbing business presents itself online, not as a footnote buried on an about page.",
    ],
    stats: [
      { value: "Local pack", label: "the 3-result map block most burst-pipe searches never scroll past" },
      { value: "PGDB", label: "the registration NZ requires of every practising plumber — a real trust signal" },
      { value: "Now", label: "when an emergency plumbing search happens, not when it's convenient" },
    ],
  },

  outcomes: {
    eyebrow: "What you gain",
    headlineMain: "Show up when it",
    headlineSub: "matters most.",
    intro: "Real visibility for plumbing businesses in the exact moment someone's standing over a leak deciding who to call.",
    items: [
      {
        kicker: "Visibility",
        title: "Rank before the emergency search",
        body: "We go after the searches people make with water on the floor — the ones where they ring the first plumber they see rather than shopping around. Those are the fastest jobs to win and the ones we target first.",
      },
      {
        kicker: "Response",
        value: "Mobile",
        unit: "-first build",
        title: "Built for the phone, not the desktop",
        body: "Most emergency plumbing searches happen on a phone mid-panic. We build plumbers' sites so the way to get in touch is one tap away, not buried under a scroll.",
      },
      {
        kicker: "Trust",
        value: "Reviews",
        unit: "that work harder",
        title: "Reviews that win the panic decision",
        body: "When someone's choosing a plumber in a hurry, reviews carry more weight than almost anywhere else online. We help plumbing businesses collect and surface the reviews that turn a search into a booked job.",
      },
    ],
  },

  included: {
    eyebrow: "What you get",
    headlineMain: "One monthly price.",
    headlineSub: "Nothing hidden.",
    intro: "No setup fee, no surprise add-ons. Everything below runs from month one for your plumbing business, and keeps running for as long as you want more jobs coming in.",
    columns: [
      {
        title: "Strategy",
        items: [
          "Technical SEO audit",
          "Emergency vs. planned-work keyword mapping",
          "Local pack & Google Business Profile strategy for plumbers",
          "Competitor analysis",
          "Content plan built around callout, maintenance and reno searches",
        ],
      },
      {
        title: "Execution",
        items: [
          "Technical fixes (speed, crawler, indexation)",
          "Mobile-first pages built for the panic search",
          "Google Business Profile optimisation",
          "Content production (4–8 pages/month)",
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
    headlineMain: "Four checkpoints.",
    headlineSub: "Clear from day one.",
    intro: "What happens for your plumbing business on day one, thirty, sixty and ninety — set out up front, no surprises along the way.",
    steps: [
      { eta: "Week 1", title: "Audit & kick-off", body: "Free SEO audit lands in your inbox. A short call to map the emergency, maintenance and reno keywords your plumbing business should own." },
      { eta: "Week 4", title: "Foundation in place", body: "Technical SEO fixed, mobile-first pages live, Google Business Profile optimised for the searches that matter when someone's got a leak." },
      { eta: "Week 8", title: "Climbing the rankings", body: "Local pack and page 2 movement on your priority terms. Enquiries start landing, not just impressions." },
      { eta: "Week 13", title: "The first full review", body: "We sit down with a quarter of real data: where you rank on every search we agreed, what came in, and what we do next. From here it's month by month, for as long as you want the jobs to keep coming." },
    ],
  },

  proof: {
    eyebrow: "Client reviews",
    headlineMain: "Real clients,",
    headlineSub: "not plumbers — yet.",
    intro: "These are genuine reviews from Digital Movement clients across New Zealand — none of them plumbers, and we're not going to pretend otherwise. We're showing you the standard of work, honestly, before we've had the chance to build your plumbing business a track record of its own.",
    limit: 3,
  },

  nearby: {
    eyebrow: "Also serving",
    headlineMain: "SEO for other",
    headlineSub: "trades too.",
    intro: "We run the same process for the other trades on the same job sites. If you're weighing us up against a generalist agency, this is what it looks like for them.",
    links: [
      { label: "SEO for Builders", to: "/industries/builders", blurb: "Getting found by homeowners who are ready to build." },
      { label: "SEO for Electricians", to: "/industries/electricians", blurb: "The same process, built for electrical businesses." },
      { label: "SEO New Zealand", to: "/seo", blurb: "Our national SEO service, for any Kiwi business." },
    ],
  },

  faq: {
    eyebrow: "Common questions",
    headlineMain: "Asked straight.",
    headlineSub: "Answered straight.",
    intro: "What plumbing business owners ask us most before booking their free plan.",
    items: [
      {
        q: "What does SEO cost for a plumbing business?",
        a: "It's a fixed monthly price, not a per-click or per-lead fee — the exact number depends on how competitive your area and services are. Ask for your free plan and we'll give you a concrete figure for your plumbing business, not a vague range.",
      },
      {
        q: "Does SEO even work for emergency jobs — isn't that all Google Ads?",
        a: "No, plenty of emergency searches land on organic results and the local map pack before anyone clicks an ad. Getting your plumbing business into that map pack, with a fast phone-first site, wins jobs that Ads alone would cost you for every single time.",
      },
      {
        q: "Do you have case studies from other plumbers?",
        a: "Not yet, and we're not going to pretend otherwise. Our published results are from New Zealand clients in other industries — what you can rely on is the same process, written down before you pay us anything, and a 5.0 Google rating across 100+ reviews.",
      },
      {
        q: "How fast will I see results?",
        a: "Ranking movement typically starts in the first two to four weeks, because the technical fixes land first and Google picks those up fastest. Calls follow later — most plumbers are looking at a few months before the phone genuinely changes. We'll show you the movement every month either way.",
      },
      {
        q: "Is there a minimum contract length?",
        a: "We ask for three months to start, then work month by month. If we're not delivering for your plumbing business, you can leave — we'd rather earn the next month than trap you in one.",
      },
      {
        q: "Can you help with my Google Business Profile, not just my website?",
        a: "Yes, and for plumbers it usually matters more than the website itself. We optimise your Google Business Profile — categories, service areas, review flow — because that's what shows up first when someone searches in an emergency.",
      },
      {
        q: "I'm already the best-known plumber in my area, do I still need this?",
        a: "A strong reputation only helps if people can find it. We line up your reviews, registration and rankings so a plumbing business that's already trusted locally gets found by everyone searching, not just the people who already know your name.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Talk to us",
    headlineMain: "Let's get your",
    headlineSub: "plumbing business found first.",
    body: "Get in touch and we'll show you which plumbing searches in your area are worth going after, what your competitors are doing on them, and what it would take to get in front. Free, in plain English, in one working day.",
    formHeading: "Get your free plumbing SEO audit",
    formNote: "One-page report, plain English, in your inbox within one working day. No obligation.",
  },
};
