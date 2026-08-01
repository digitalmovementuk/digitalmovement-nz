import type { SeoPageContent } from "../seo-pages";

export const builders: SeoPageContent = {
  slug: "builders",
  path: "/industries/builders",
  serviceName: "SEO for Builders",

  meta: {
    title: "SEO for Builders | Digital Movement NZ",
    description:
      "Most NZ building leads still come from word of mouth. See how a stronger web presence gets your building company more enquiries — free audit, no lock-in.",
  },

  // This page is not a traffic asset. It is sales collateral and an outreach
  // landing page — the page a builder lands on after an email or a
  // conversation, not a page built to rank. The NZ trade terms below carry
  // essentially no measurable search volume: 0 means "no meaningful NZ
  // search volume", not "unmeasured". Per strategy §05, no city × trade
  // matrix is to be built off the back of this page — trades keywords don't
  // carry the volume to justify one.
  keywords: {
    primary: { term: "seo for builders", volume: 0, kd: 0 },
    secondary: [
      { term: "seo for construction companies", volume: 0, kd: 0 },
      { term: "builder marketing nz", volume: 0, kd: 0 },
      { term: "get more building leads", volume: 0, kd: 0 },
      { term: "builder website nz", volume: 0, kd: 0 },
    ],
  },

  hero: {
    eyebrow: "SEO · for building companies",
    h1: "SEO for builders who want more than referrals",
    sub: "This page is for small-to-mid New Zealand building companies who are busy, booked mostly through word of mouth, and sceptical that any agency actually understands their business. Digital Movement holds a 5.0 Google rating from 100+ verified reviews and guarantees a page 1 Google position in 90 days, with a free audit before you commit to anything.",
    chips: ["5.0 Google rating", "100+ verified reviews", "Page 1 in 90 days", "Free audit, no obligation"],
    formHeading: "Get your free builder marketing audit",
    formNote: "One-page audit in your inbox within 24 hours. No spam, no obligation.",
  },

  local: {
    eyebrow: "How building companies get found",
    headlineMain: "Built on word of mouth",
    headlineSub: "and checked online before the call.",
    paragraphs: [
      "Most building leads start with word of mouth — a past client, a mate, a recommendation from a subcontractor or supplier. That's true, and it isn't going to stop being true. But it caps how big a building company can get, because word of mouth only reaches as far as the people who already know you, and it can't be turned up on demand the moment work goes quiet.",
      "Even a builder found through a referral gets checked online before the phone rings. A homeowner about to spend a large amount of money on a build or a renovation will search the company name, look at the website, and look for reviews before they commit to anything. A building company with no website, or one that hasn't been touched in years, loses jobs at exactly that moment — not because the work isn't good, but because nothing online backs up what the referral just said.",
      "The Licensed Building Practitioner scheme exists because a homeowner can't easily tell a good builder from a risky one just by looking at a website. Displaying LBP status clearly, and being upfront about which parts of a project are licensed work, does real work for trust online — it's one of the few credentials a homeowner can actually verify before they've met you in person.",
      "Building work is seasonal and weather-driven in a way office-based services aren't. Enquiries move with the building season, and a wet winter or a stretch of bad weather can empty a pipeline that looked full a month earlier. A building company that only has one lead source — referrals — has no way to smooth that out. A second, always-on source like search doesn't take a day off because it's raining.",
      "A renovation search and a new-build search are different buyers with different timelines. Someone searching for a kitchen renovation is often ready to move within weeks; someone searching for a new home build is planning a project that might not start for a year. A building company's website that treats both enquiries the same way loses one of them.",
      "None of this is really about out-marketing a slicker competitor. A building project also isn't a same-day callout: a homeowner might take months to choose a builder, and the job itself can run for months more once it starts, coordinating a Licensed Building Practitioner, several subcontractor trades, council inspections, and material lead times nobody fully controls. That's different economics to an emergency plumber or electrician, where the search and the job both happen today, and it means a building company's website has to build confidence over a long consideration window, not just answer the phone fastest. The good news is that search results for building services in most New Zealand towns are still dominated by directory listings and outdated sites — a building company doesn't need to out-market a strong competitor, just needs to show up properly where most of the market currently doesn't.",
    ],
    stats: [
      { value: "Word of mouth", label: "still the main lead source for most NZ building companies" },
      { value: "LBP", label: "the licensing scheme homeowners check before they hire" },
      { value: "Seasonal", label: "building enquiries move with weather and the build season" },
    ],
  },

  outcomes: {
    eyebrow: "What you gain",
    headlineMain: "What you can expect",
    headlineSub: "when the work actually lands.",
    intro:
      "Building is a competitive market in most parts of New Zealand, but the search results for it are often thin — plenty of building companies still have no real web presence at all. Here's what changes when a building company's page is built properly instead of guessed at.",
    items: [
      {
        kicker: "Visibility",
        value: "Page 1",
        unit: "in 90 days",
        title: "Show up when homeowners check",
        body: "We guarantee your building company a page 1 Google position within 90 days — so when a homeowner checks you out after a referral, or searches for a builder in your area, there's something solid to find.",
      },
      {
        kicker: "Leads",
        value: "Second",
        unit: "lead source",
        title: "Stop relying on referrals alone",
        body: "Search gives your building company a lead source that doesn't depend on who your last client happened to know. It runs alongside word of mouth instead of replacing it, so a quiet season on the tools doesn't have to mean a quiet season for enquiries.",
      },
      {
        kicker: "Trust",
        value: "5.0",
        unit: "rating",
        title: "Back up the referral with proof",
        body: "100+ verified reviews and a 5.0 Google rating give a homeowner the reassurance they're looking for before they ring a building company they've only heard about secondhand.",
      },
    ],
  },

  included: {
    eyebrow: "What you get",
    headlineMain: "Everything included",
    headlineSub: "fixed price, no surprises.",
    intro:
      "One fixed monthly price. Everything below is included from day one, and every month after, for as long as your building company wants to keep growing enquiries.",
    columns: [
      {
        title: "Strategy",
        items: [
          "Technical audit of your current website",
          "Keyword mapping across renovation and new-build searches",
          "Check on other building companies competing in your area",
          "Six-month content plan built around the projects you want more of",
          "Conversion-focused page structure for long consideration windows",
        ],
      },
      {
        title: "Execution",
        items: [
          "Technical fixes so your site loads properly and gets indexed",
          "Project and service pages that show the work your building company actually does",
          "LBP status and licensing details displayed where homeowners look for them",
          "Genuine reviews and credentials brought onto the site, not buried in Google",
          "Schema.org structured data so Google understands what you offer",
        ],
      },
      {
        title: "Reporting",
        items: [
          "Live dashboard — rankings, traffic, enquiries",
          "Monthly report in plain English, not jargon",
          "Direct line to your specialist",
          "No account-manager ping-pong",
        ],
      },
    ],
  },

  process: {
    eyebrow: "The 90-day journey",
    headlineMain: "Your 90 days",
    headlineSub: "mapped out, step by step.",
    intro:
      "What happens on day 1, 30, 60 and 90 when a building company works with us. We say it up front and stick to it.",
    steps: [
      { eta: "Day 1", title: "Audit & kick-off", body: "Free audit of your current website and online presence lands in your inbox. A short call to understand the kind of building work you want more of." },
      { eta: "Day 30", title: "Foundation in place", body: "Technical issues fixed, project pages live, tracking running. Your building company's site actually represents the work you do." },
      { eta: "Day 60", title: "Enquiries start landing", body: "Rankings for your core building services and areas start moving. Enquiries begin coming in alongside your referrals, not instead of them." },
      { eta: "Day 90", title: "Page 1, ongoing from there", body: "Your guaranteed page 1 position is live. From here it's month-to-month — no lock-in, and you keep it only as long as it keeps working for you." },
    ],
  },

  proof: {
    eyebrow: "Real results",
    headlineMain: "Proof from around NZ",
    headlineSub: "not a builder case study we don't have.",
    intro:
      "These are real Digital Movement clients from around New Zealand — not building companies, and we won't pretend otherwise. We don't have a named builder client yet, so instead of dressing up a case study we don't have, here's the standard of work and communication we hold ourselves to with every client, in every industry.",
    limit: 3,
  },

  nearby: {
    eyebrow: "Other trades",
    headlineMain: "More NZ trades",
    headlineSub: "we help get found online.",
    intro:
      "Same approach, different trade. If you're a building company weighing us up, here's how we think about SEO for other trades and services across New Zealand.",
    links: [
      { label: "SEO for Plumbers", to: "/industries/plumbers", blurb: "How we approach SEO for plumbing businesses across New Zealand." },
      { label: "SEO for Electricians", to: "/industries/electricians", blurb: "How we approach SEO for electrical contractors across New Zealand." },
      { label: "SEO New Zealand", to: "/seo", blurb: "The national hub — our full approach to ranking NZ businesses on Google." },
    ],
  },

  faq: {
    eyebrow: "Common questions",
    headlineMain: "Straight answers",
    headlineSub: "to the questions builders ask.",
    intro: "What building company owners ask most often before they book their free audit.",
    items: [
      {
        q: "We already get enough work through referrals — why would a building company need SEO?",
        a: "Referrals cap how big your building company can get, because they only reach people who already know you. SEO gives you a second lead source that keeps working even when your network goes quiet, so a slow season doesn't have to mean an empty pipeline.",
      },
      {
        q: "How much does SEO cost for a building company?",
        a: "Digital Movement runs a fixed monthly price with no setup fee and no surprise charges for extra content or links. The exact number depends on your area and the competition for your services, which is what the free audit tells you before you commit to anything.",
      },
      {
        q: "How long before a building company sees results?",
        a: "Most clients see ranking movement within the first few weeks, with a guaranteed page 1 Google position within 90 days. Service and area-specific searches for building work usually move faster than broad, generic terms.",
      },
      {
        q: "Are we locked into a long contract?",
        a: "No, Digital Movement works month-to-month after a short minimum term to get the foundations in place properly. If the work isn't landing enquiries for your building company, you can leave — we'd rather earn the next month than trap you in one.",
      },
      {
        q: "Do you actually understand how building companies get work?",
        a: "We understand that most building leads come from word of mouth and repeat clients, that projects run for months rather than days, and that a homeowner choosing a builder is making one of the biggest purchases of their life. That's the business SEO for builders is built around, not a generic template.",
      },
      {
        q: "Does SEO work for renovation jobs as well as new builds?",
        a: "Yes, but they're treated as different searches. Someone searching for a renovation is often ready to move within weeks; someone searching for a new build is planning a longer project. We build separate pages for each so your building company shows up for both kinds of buyer.",
      },
      {
        q: "What if our website already looks fine?",
        a: "Looking fine and being found are different problems. A lot of building company websites are visually okay but technically invisible to Google, or missing the licensing and review content that actually builds trust. The free audit tells you which problem, if either, your building company has.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Talk to us",
    headlineMain: "Let's talk SEO",
    headlineSub: "for your building company.",
    body: "Get in touch and we'll show you exactly where your building company stands online right now, and what it would take to turn more of those homeowner searches into enquiries — free, no obligation, in plain English.",
    formHeading: "Get your free builder marketing audit",
    formNote: "One-page audit in your inbox within 24 hours. No spam, no obligation.",
  },
};
