import type { SeoPageContent } from "./seo-pages";

// Topic/explainer page, not a place page — no `city` or `region`.
// Primary term "seo" is the single biggest term in the whole keyword set (1,600/mo, KD55).
// Only one competitor (WebGuys) has built a dedicated page for it, and it only ranks page 6.

export const whatIsSeo: SeoPageContent = {
  slug: "what-is-seo",
  path: "/what-is-seo",
  fidelity: "LOW-FI",
  meta: {
    title: "What Is SEO? A Plain-English Guide for NZ Businesses",
    description:
      "What SEO actually means, how Google decides who shows up first, and whether it's worth it for your business — explained in plain English.",
  },
  keywords: {
    primary: { term: "seo", volume: 1600, kd: 55 },
    secondary: [
      { term: "what is seo", volume: 720, kd: 22 },
      { term: "seo meaning", volume: 480, kd: 18 },
      { term: "how does seo work", volume: 260, kd: 25 },
      { term: "search engine optimisation", volume: 390, kd: 40 },
      { term: "seo nz", volume: 210, kd: 33 },
    ],
  },
  hero: {
    eyebrow: "SEO, explained simply",
    h1: "What is SEO? A straight answer.",
    sub: "SEO stands for search engine optimisation. It's the work of getting your website higher up Google's normal results — the free ones, not the ads at the top — so the people already looking for what you sell find you without you paying for every click.",
    chips: ["5.0 Google rating", "100+ verified reviews", `Updated ${__BUILD_DATE__}`, "Free plan, no obligation"],
    formHeading: "Get a free plan for your site",
    formNote: "A one-page plan in your inbox within one working day. No sales call, no obligation.",
  },
  local: {
    eyebrow: "The short version",
    headlineMain: "SEO in plain terms.",
    headlineSub: "No jargon, no fluff.",
    paragraphs: [
      "Look at any Google results page. The first few are ads, marked \"Sponsored\". Everything under them is free, and that's what this is about — whether you turn up there on page one or on page five.",
      "The difference from ads matters. Ads stop the day you stop paying. A page that ranks keeps bringing people in next month and the month after, for nothing. It's slower to build and cheaper to keep.",
      "It also builds on itself. The early fixes make the later pages easier to rank, because Google starts trusting the site as a whole. That's the opposite of ads, where the hundredth click costs the same as the first.",
    ],
    stats: [
      { value: "Free", label: "every visitor this brings you, unlike an ad click" },
      { value: "1", label: "working day to your free plan" },
      { value: "3", label: "months to start, then month by month" },
    ],
  },
  outcomes: {
    eyebrow: "How ranking works",
    headlineMain: "How Google decides",
    headlineSub: "who shows up first.",
    intro:
      "Google doesn't publish the formula, but the broad shape of it is well understood. Here's the plain version.",
    items: [
      {
        kicker: "Relevance",
        value: "01",
        unit: "",
        title: "Does your page answer the question",
        body: "Google reads the words and headings on your page to work out what it's about, then matches that against what someone actually typed. A page that answers the question properly beats one that mentions it in passing.",
      },
      {
        kicker: "Authority",
        value: "02",
        unit: "",
        title: "Does anyone else vouch for you",
        body: "A link from another website works like a reference. When a site Google already trusts points at yours, that counts. So do your business listings and your real customer reviews.",
      },
      {
        kicker: "Experience",
        value: "03",
        unit: "",
        title: "Does the site actually work",
        body: "How fast it loads, whether it works on a phone, whether the connection is secure. Google wants to send people somewhere that works, so a slow or broken site gets pushed down even when the writing is good.",
      },
    ],
  },
  included: {
    eyebrow: "The three parts",
    headlineMain: "What the work",
    headlineSub: "actually involves.",
    intro:
      "It isn't one job, it's three that only work together: the plumbing, the pages, and the proof that you're worth ranking.",
    columns: [
      {
        title: "The plumbing",
        items: [
          "Pages that load fast, especially on a phone",
          "A site that works properly on a small screen",
          "A secure connection",
          "Web addresses that make sense",
          "Dead links and errors cleared out",
        ],
      },
      {
        title: "The pages",
        items: [
          "Working out what your customers actually type",
          "Pages that answer those searches properly",
          "Clear headings and page titles",
          "The short description Google shows in the results",
          "Pages linked to each other so Google can follow them",
        ],
      },
      {
        title: "The proof",
        items: [
          "Links earned from other real websites",
          "Your Google listing set up properly",
          "The same business details everywhere they appear",
          "Real customer reviews",
          "Someone watching it every month",
        ],
      },
    ],
  },
  process: {
    eyebrow: "What to expect",
    headlineMain: "How it plays out.",
    headlineSub: "A realistic timeline.",
    intro:
      "It isn't instant, and anyone promising overnight results isn't being straight with you. Here's roughly how it goes.",
    steps: [
      {
        eta: "Weeks 1–4",
        title: "The plumbing",
        body: "We fix the things stopping Google reading and trusting your site — dead links, missing titles, slow pages, phone problems. Unglamorous, and nothing else works until it's done.",
      },
      {
        eta: "Weeks 4–8",
        title: "The pages",
        body: "We build the pages your customers are actually searching for, with clear headings and complete answers. This is where the site starts saying what you really do.",
      },
      {
        eta: "Months 2–3",
        title: "The proof",
        body: "Now the work outside your own site: listings, profiles, and links from other real websites. It's the slowest part, because trust gets earned rather than switched on.",
      },
      {
        eta: "Ongoing",
        title: "It compounds",
        body: "The three parts reinforce each other, so most sites see the sharpest movement from month three on, and it keeps building the longer it runs.",
      },
    ],
  },
  proof: {
    eyebrow: "Agency or do it yourself",
    headlineMain: "Do it yourself?",
    headlineSub: "Here's the honest answer.",
    intro:
      "It comes down to time and risk. You can genuinely do this yourself on a small site — writing clear titles and useful pages is learnable. Where it gets hard is the technical side and earning links, and the mistakes there are quiet ones: duplicate pages, broken redirects, thin content that drags you down for months before anyone notices. An agency brings the process and the tools, and gives you your evenings back. The reviews below are from real Digital Movement clients across everything we do, not just this.",
  },
  nearby: {
    eyebrow: "Keep reading",
    headlineMain: "Where to go",
    headlineSub: "from here.",
    intro: "This covers a lot of ground. These go deeper on the parts that apply to you.",
    links: [
      {
        label: "SEO services in New Zealand",
        to: "/seo",
        blurb: "The full picture: what we do, how it runs, and what it costs to start.",
      },
      {
        label: "Technical SEO",
        to: "/seo/technical-seo",
        blurb: "The plumbing — the invisible fixes that make everything else possible.",
      },
      {
        label: "Ecommerce SEO",
        to: "/seo/ecommerce",
        blurb: "How it works differently for an online store, from product pages to categories.",
      },
    ],
  },
  faq: {
    eyebrow: "Common questions",
    headlineMain: "The questions we",
    headlineSub: "get asked most.",
    intro: "What owners new to this ask before they start.",
    items: [
      {
        q: "How long does SEO take to work?",
        a: "Most sites see some movement in the first month or two, because the technical fixes land first and Google picks those up fastest. Enquiries follow later. Real, lasting growth usually builds over three to six months. Anyone promising you a position by a date is promising something they don't control.",
      },
      {
        q: "Is SEO still worth it now that Google answers questions itself?",
        a: "Yes. Those AI answers are built out of web pages that already rank well, so being one of them matters more, not less. Clear, well-organised pages are what gets picked up.",
      },
      {
        q: "What's the difference between this and Google Ads?",
        a: "Ads are the paid slots at the top — you pay per click, and it stops the day you stop paying. This is the free listings underneath. Slower to build, but it keeps working without a cost per visitor.",
      },
      {
        q: "We already run ads. Do we need this too?",
        a: "Not necessarily, but most businesses find they work together. Ads bring people in while this is being built, and once you rank for a search you can often pull the ad spend off it.",
      },
      {
        q: "How much does it cost?",
        a: "It depends on the size of your site and how hard your searches are to win. We work three months to start, then month by month — long enough for the work to show, short enough that you're never stuck with an agency that isn't delivering.",
      },
      {
        q: "Can I do it myself?",
        a: "On a small site, up to a point. Writing clear titles and useful pages is learnable. The technical side and earning links are where it gets hard, take real time to learn, and are easy to get wrong without noticing.",
      },
      {
        q: "What counts as a good ranking?",
        a: "Page one, ideally in the top three to five, because that's where nearly all the clicks go. Page two gets you almost nothing, even though moving from page five to page two feels like progress.",
      },
      {
        q: "Does it ever finish?",
        a: "No. Rankings slip if a competitor gets serious or Google changes how it reads pages, so keeping them is part of the job. It's more like maintenance than a project with an end date.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Talk to us",
    headlineMain: "Let's talk about",
    headlineSub: "where your site sits.",
    body: "If you've read this far you already understand more than most owners do. The next step is seeing where your own site stands. Ask for a free plan and we'll show you what's holding it back.",
    formHeading: "Get your free SEO plan",
    formNote: "A one-page plan in your inbox within one working day. No sales call, no obligation.",
  },
};
