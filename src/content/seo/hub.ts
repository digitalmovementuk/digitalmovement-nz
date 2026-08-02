import type { SeoPageContent } from "../seo-pages";

// National hub page for the /seo/ hub-and-spoke cluster. Targets national
// commercial intent ("seo new zealand", "seo nz", "seo company nz" etc.) and
// passes authority down to the city spokes in `nearby.links`. No `city` or
// `region` — the template keys off their absence to render this as the
// country-level page rather than a place page.

export const seoHub: SeoPageContent = {
  slug: "",
  path: "/seo",

  meta: {
    title: "SEO New Zealand · SEO Agency NZ | Digital Movement",
    description:
      "SEO New Zealand businesses can measure in enquiries, not rankings. Three months to start, then month by month. Free plan first. Built for trades and home services.",
  },

  keywords: {
    primary: { term: "seo new zealand", volume: 1000, kd: 34 },
    secondary: [
      { term: "seo nz", volume: 1000, kd: 34 },
      { term: "seo company nz", volume: 720, kd: 39 },
      { term: "seo company new zealand", volume: 720, kd: 30 },
      { term: "seo services nz", volume: 480, kd: 41 },
      { term: "seo services new zealand", volume: 480, kd: 34 },
      { term: "seo agency new zealand", volume: 260, kd: 31 },
      { term: "seo agency nz", volume: 260, kd: 28 },
      { term: "seo services", volume: 880, kd: 23 },
      { term: "seo agency", volume: 720, kd: 27 },
      { term: "seo company", volume: 590, kd: 23 },
    ],
  },

  hero: {
    eyebrow: "SEO agency · New Zealand",
    // Trimmed to fit the hero. The long version of this argument now opens the
    // `local` section, where there is room for it — a hero that runs to nine
    // lines beside a form is asking a comparison shopper to read an essay
    // before they can act.
    h1: "SEO New Zealand businesses can measure in dollars.",
    sub: "You're comparing agencies, not looking up what SEO means. So, briefly: we agree the searches we're going after before we start, we show you every month exactly where you sit on each one, and you get a free plan before you decide anything. Three months to start, then month by month.",
    chips: ["5.0 Google rating", "100+ verified reviews", "Searches agreed in writing", "Free plan, no obligation"],
    formHeading: "Get your free SEO audit",
    formNote: "One-page report in your inbox. No obligation, no spam.",
  },

  local: {
    eyebrow: "The national picture",
    headlineMain: "A smaller market",
    headlineSub: "you can actually win.",
    paragraphs: [
      "New Zealand has about five million people spread across a handful of real cities, not one dominant metro with fifty agencies fighting over every keyword. That changes the maths on SEO. A market this size means most commercial searches face genuine competition from a handful of serious contenders, not hundreds.",
      "Search demand for SEO itself gives you a sense of scale. \"SEO NZ\" gets around 1,000 searches a month nationally, and the city-level terms — Christchurch, Hamilton, Tauranga — sit well below that. Fewer people are actively investing in SEO here than in a market ten times the size, which means fewer competitors are doing it properly.",
      "That gap is what most local businesses miss. A tradesperson or home services business in Christchurch or Tauranga usually isn't up against a national industry with an in-house SEO team and a six-figure content budget — they're up against two or three other local businesses, most of whom haven't touched their Google Business Profile in years. Businesses that commit to SEO properly can hold a page 1 position for a long time, because the local competition rarely keeps up the effort.",
      "Local search behaves differently in a country this size too. Someone searching from Nelson or Rotorua isn't choosing between fifteen options within twenty minutes — they're often choosing between three, and Google's results reflect that. Well-optimised local pages punch above their weight here: it takes less content and fewer links to establish relevance than in a market with fifty competing businesses per suburb.",
      "None of this makes SEO free or instant. It still takes real technical work, real content and real time to rank — cost and timeframe don't disappear just because the market is smaller. What changes is the ceiling: in a country this size, a well-run campaign can realistically own a category, not just chip away at page two forever.",
    ],
  },

  outcomes: {
    eyebrow: "What changes",
    headlineMain: "What showing up first",
    headlineSub: "actually changes.",
    intro:
      "You've read enough vague agency copy already. Here's what moving from page two to page one does to your business, in plain terms.",
    items: [
      {
        kicker: "Ranking",
        title: "Move up where it counts",
        body: "We go after the searches that end in a phone call, and we name every one of them in writing before we start — so you always know what you're paying for and whether it worked.",
      },
      {
        kicker: "Cost",
        value: "Lower",
        unit: "cost per lead",
        title: "Spend less to win a smaller market",
        body: "Fewer serious competitors bidding for the same keywords means organic visibility costs less to win and holds for longer once you have it.",
      },
      {
        kicker: "Category",
        value: "Category",
        unit: "ownership",
        title: "Own your category, not just a keyword",
        body: "In a market this size, ranking well across your core services can make you the default choice in your area, not one option among many.",
      },
    ],
  },

  included: {
    eyebrow: "What's included",
    headlineMain: "Everything it",
    headlineSub: "takes to rank.",
    intro:
      "One fixed monthly price. No setup fee, no upsells for \"more content\" once you've signed — everything below, every month, for as long as you stay.",
    columns: [
      {
        title: "Research & strategy",
        items: [
          "National and local keyword mapping",
          "A look at what your competitors rank for that you don't",
          "Technical SEO audit",
          "Six-month content roadmap",
          "Conversion-focused page structure",
        ],
      },
      {
        title: "Build & optimise",
        items: [
          "On-page and technical fixes",
          "New content published monthly",
          "Schema and structured data",
          "Site speed and Core Web Vitals work",
          "Authority building with real, earned links",
        ],
      },
      {
        title: "Track & report",
        items: [
          "Live rankings dashboard",
          "Monthly report in plain English",
          "Direct line to your specialist",
          "Enquiry and call tracking",
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
      "What happens in week 1, month 2 and month 3 — on record, so you can hold us to it.",
    steps: [
      {
        eta: "Week 1",
        title: "Audit and plan",
        body: "Your free SEO audit lands in your inbox, plus a call to walk through the roadmap and what page 1 will take for your keywords.",
      },
      {
        eta: "Week 2–4",
        title: "Foundations go in",
        body: "Technical fixes ship, tracking goes live, and the first new content pages publish.",
      },
      {
        eta: "Month 2",
        title: "Rankings move",
        body: "Commercial keywords climb out of page two. Enquiries start showing up in the tracking.",
      },
      {
        eta: "Month 3",
        title: "Page 1, on record",
        body: "The first full review: every search we agreed, where you started, where you are now, and what came in. From here it runs month by month.",
      },
    ],
  },

  proof: {
    eyebrow: "Client reviews",
    headlineMain: "Reviews from",
    headlineSub: "real NZ clients.",
    intro:
      "These are the same verified Google reviews on our homepage, from real New Zealand businesses we've worked with across the country — not written for this page.",
  },

  nearby: {
    eyebrow: "Where we work",
    headlineMain: "Local pages,",
    headlineSub: "built the same way.",
    intro:
      "SEO New Zealand is the national picture. If you want the detail for your own city — what ranks there and who you're up against — start here.",
    links: [
      {
        label: "SEO Christchurch",
        to: "/seo/christchurch",
        blurb: "Canterbury's largest market — who you're actually up against in Christchurch, and what it takes to beat them.",
      },
      {
        label: "SEO Hamilton",
        to: "/seo/hamilton",
        blurb: "The Waikato's SEO landscape, including what it actually takes to rank in Hamilton's local searches.",
      },
      {
        label: "SEO Tauranga",
        to: "/seo/tauranga",
        blurb: "The Bay of Plenty's growing market, mapped out with Tauranga-specific keyword and competitor data.",
      },
    ],
  },

  faq: {
    eyebrow: "Common questions",
    headlineMain: "SEO in New Zealand,",
    headlineSub: "answered directly.",
    intro: "What business owners across New Zealand ask before they choose an SEO agency.",
    items: [
      {
        q: "How much does SEO cost in New Zealand?",
        a: "SEO in New Zealand is usually billed as a fixed monthly fee, not an hourly rate or a per-project quote. You get a clear number before you commit, with no add-ons for extra content or extra links later on.",
      },
      {
        q: "What does an SEO agency in NZ actually do?",
        a: "An SEO agency in NZ audits your site, fixes the technical issues stopping Google from ranking you, builds keyword-mapped content, earns quality links, and reports monthly on what changed and why.",
      },
      {
        q: "How long does SEO take to work in New Zealand?",
        a: "Most businesses see ranking movement within two to four weeks, because the early technical fixes are what Google picks up fastest. Enquiries follow later, usually once the new pages have been live a month or two. New Zealand's smaller markets mean it can move faster here than it does overseas.",
      },
      {
        q: "What's the difference between an SEO company and an SEO agency in NZ?",
        a: "In practice, nothing — \"SEO company\" and \"SEO agency\" describe the same service in New Zealand. What matters is whether they will write down which searches they are going after, and show you the reporting each month against that list.",
      },
      {
        q: "Do I need local SEO or national SEO for my New Zealand business?",
        a: "If you serve one city or region, local SEO wins faster. If you sell nationwide, you need both: a national page like this one, plus location pages for each city you serve.",
      },
      {
        q: "Is SEO worth it for a small business in New Zealand?",
        a: "Yes, more so than in larger markets. Fewer competitors are investing properly in SEO here, so a small business that does it consistently can outrank bigger names within months.",
      },
      {
        q: "How do I choose an SEO company in New Zealand?",
        a: "Look for a fixed price with no hidden add-ons, the target searches written down before you sign, direct access to the person doing the work, and real reviews you can verify on Google rather than case studies on the agency's own website. Be wary of anyone guaranteeing a number-one ranking — nobody controls Google's results.",
      },
      {
        q: "Is there a minimum contract for SEO services in NZ?",
        a: "Most reputable agencies, us included, ask for three months to start, then work month by month. That is roughly how long it takes before the work shows. You shouldn't be locked into a year just to find out if it's working.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Ready when you are",
    headlineMain: "Get your free",
    headlineSub: "SEO audit today.",
    body: "See exactly where you stand in Google before you commit to anyone. One-page report, plain English, no obligation.",
    formHeading: "Get your free SEO audit",
    formNote: "In your inbox within 24 working hours. No spam, no obligation.",
  },
};
