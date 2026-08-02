import type { SeoPageContent } from "../seo-pages";

// Topic page, not a place page — no `city` or `region`. Supporting/authority
// page with no search volume of its own (see keywords.primary below).

export const technicalSeo: SeoPageContent = {
  slug: "technical-seo",
  path: "/seo/technical-seo",
  fidelity: "LOW-FI",

  meta: {
    title: "Technical SEO Services NZ | Digital Movement",
    description:
      "Technical SEO for NZ websites. If your rankings have stalled despite good content, this is usually why — and this page explains it in plain English. Free plan first.",
  },

  keywords: {
    primary: { term: "technical seo", volume: 0, kd: 0 },
    secondary: [
      { term: "technical seo audit", volume: 0, kd: 0 },
      { term: "technical seo services", volume: 0, kd: 0 },
      { term: "technical seo checklist", volume: 0, kd: 0 },
      { term: "core web vitals", volume: 0, kd: 0 },
      { term: "site speed seo", volume: 0, kd: 0 },
    ],
  },

  hero: {
    eyebrow: "SEO agency · the technical layer",
    h1: "Technical SEO for New Zealand Websites",
    sub: "If your website has decent content and still isn't showing up, this is usually the reason. Technical SEO is the plumbing — the things that decide whether Google can read your site properly at all. None of it is visible to a customer, and all of it decides whether the money you spend on everything else gets a fair chance to work. Here's what it involves, in plain English, with a free plan before you commit to anything.",
    chips: ["5.0 Google rating", "100+ verified reviews", "Searches agreed in writing", "Free plan, no obligation"],
    formHeading: "Find out what's holding your site back",
    formNote: "Send us your website. You'll get a free one-page plan back within one working day — no sales call.",
  },

  local: {
    eyebrow: "Technical SEO, explained",
    headlineMain: "The invisible layer",
    headlineSub: "that decides if you rank at all.",
    paragraphs: [
      "Technical SEO is the set of fixes that let search engines crawl a website, understand its pages and rank them fairly. It covers five things: crawlability (can Google's bots reach and read every page that matters), indexing (does a crawled page actually make it into Google's index), site speed (does the page load fast enough, especially on mobile data), structured data (code that tells Google what a page is, such as a product, a review or a local business, beyond just the words on it), and canonicalisation (making sure Google isn't confused by several URLs showing the same content). None of it is visible to a visitor. All of it decides whether the content and links you build ever get a fair chance to rank.",
      "There are a few reliable signs a site has a technical SEO problem. Rankings stall even though the content is genuinely good, and competitors with thinner pages still outrank you. Pages you know exist don't turn up in a site:yourdomain.co.nz search, which usually means Google crawled them and chose not to index them. The site feels slow, especially on mobile, and Core Web Vitals reports in Search Console show pages failing on loading speed or layout stability. Or two versions of the same page are both live at once (with and without \"www\", with and without a trailing slash, secure and non-secure), splitting the ranking signals that should be going to a single URL.",
      "Almost nobody goes looking for \"technical SEO\". People go looking for the thing they actually want — more enquiries, or an answer to why a website that cost real money isn't showing up. This page exists because that second question usually has a technical answer, and because anyone comparing agencies deserves a plain-English account of what the work involves before they pay for it. Every technical project we run is scoped, priced and reported exactly like the rest of our SEO work.",
    ],
  },

  outcomes: {
    eyebrow: "What changes",
    headlineMain: "What it's worth",
    headlineSub: "once it's fixed.",
    intro:
      "None of this work is visible to a customer, which is why it gets skipped. It still decides whether the pages you already paid for ever get seen. Here is what changes, and what it's worth.",
    items: [
      {
        kicker: "Pages that count",
        title: "Stop your own pages competing with each other",
        body: "When the same page exists at three slightly different web addresses, Google splits the credit between them and none of them rank. We point them all at one address, so all the credit lands in one place — and the page you actually care about starts showing up.",
      },
      {
        kicker: "Speed",
        title: "Stop losing people before the page loads",
        body: "Most of your visitors are on a phone, often on mobile data. A slow page loses a share of them before they ever see what you sell — and Google ranks slow pages lower on top of that. We cut the load time by fixing oversized images and the code that blocks the page from appearing.",
      },
      {
        kicker: "Attention",
        title: "Point Google at the pages that earn you money",
        body: "Google only reads so much of a site before it moves on. On a lot of sites it burns that time on filter and search-result pages nobody should land on, and never gets to the service pages you want ranking. We shut the useless ones off so the good ones get read.",
      },
    ],
  },

  included: {
    eyebrow: "What's included",
    headlineMain: "What's included",
    headlineSub: "in a technical SEO project.",
    intro:
      "A technical SEO project covers three phases: finding the problems, fixing them, and making sure they stay fixed. Here's what's included in each.",
    columns: [
      {
        title: "Audit & diagnosis",
        items: [
          "Full crawl of every page, using the same methods Google's bots use to find them",
          "Core Web Vitals check against real Search Console data, not just a lab test",
          "Index coverage review — what's indexed, what's excluded, and why",
          "Site architecture and internal linking review",
          "Structured data (schema) check against what's actually on the page",
        ],
      },
      {
        title: "Fixes & implementation",
        items: [
          "Canonical tags and redirects to stop duplicate pages competing with each other",
          "Image compression, code cleanup and caching to bring load times down",
          "Broken links, redirect chains and 404s fixed or removed",
          "XML sitemap and robots.txt rebuilt to match the real site",
          "Structured data added or corrected so pages qualify for rich results",
        ],
      },
      {
        title: "Monitoring & reporting",
        items: [
          "Monthly Core Web Vitals tracking in Search Console",
          "Index coverage checked for new errors after every site change",
          "Crawl budget reviewed so it isn't wasted on low-value URLs",
          "Plain-English report on what changed and why it matters",
          "Alerts if a site update accidentally undoes a fix",
        ],
      },
    ],
  },

  process: {
    eyebrow: "How it works",
    headlineMain: "How it happens",
    headlineSub: "week by week.",
    intro:
      "Technical SEO work follows the same four-step process as the rest of our SEO projects, adapted to fixing what's broken before building what's new.",
    steps: [
      {
        eta: "Week 1",
        title: "Technical SEO audit",
        body: "We crawl the whole site the way Google's bots do, check index coverage in Search Console, and run Core Web Vitals against real user data. You get a plain-English list of what's broken and what it's costing you.",
      },
      {
        eta: "Week 2-4",
        title: "Fixes ship",
        body: "Canonical tags, redirects, sitemap and robots.txt corrections, image and code cleanup, and structured data all go live. Nothing ships without a before/after check to confirm it actually fixed the issue.",
      },
      {
        eta: "Month 2",
        title: "Indexing and rankings respond",
        body: "Google re-crawls the fixed pages and re-evaluates them. This is when previously excluded pages start appearing in the index and Core Web Vitals reports start turning green in Search Console.",
      },
      {
        eta: "Ongoing",
        title: "Monitoring",
        body: "We keep checking crawl activity, index coverage and Core Web Vitals every month, so a new page or site update doesn't quietly undo the fix. Reporting stays plain English, not a raw data export.",
      },
    ],
  },

  proof: {
    eyebrow: "Client reviews",
    headlineMain: "Real reviews",
    headlineSub: "from real NZ clients.",
    intro:
      "Technical SEO is one part of the SEO work we do for New Zealand businesses. These are real Digital Movement clients from around the country, shown honestly rather than dressed up as a technical-SEO portfolio we don't have.",
  },

  nearby: {
    eyebrow: "Where it fits",
    headlineMain: "Where this fits",
    headlineSub: "in the wider site.",
    intro:
      "Technical SEO is one part of a bigger approach to ranking New Zealand businesses in Google. Here's where to go next.",
    links: [
      {
        label: "SEO New Zealand",
        to: "/seo",
        blurb: "The national hub — our full approach to ranking NZ businesses on Google, technical SEO included.",
      },
      {
        label: "Ecommerce SEO",
        to: "/seo/ecommerce",
        blurb: "Online stores carry some of the worst technical SEO problems, from duplicate product URLs to bloated page weight.",
      },
      {
        label: "What Is SEO?",
        to: "/what-is-seo",
        blurb: "New to SEO? Start with the plain-English explainer before going deeper into the technical detail on this page.",
      },
    ],
  },

  faq: {
    eyebrow: "Questions",
    headlineMain: "Common questions",
    headlineSub: "about technical SEO.",
    intro: "Straight answers to the questions we get asked most about technical SEO.",
    items: [
      {
        q: "What is technical SEO?",
        a: "Technical SEO is the group of fixes that let search engines crawl a website, read its pages properly and rank them fairly. It covers crawlability, indexing, site speed, structured data and making sure Google isn't confused by duplicate versions of the same page. It's different to content or link building — it's the infrastructure those two rely on.",
      },
      {
        q: "How do I know if my site has technical SEO problems?",
        a: "The clearest sign is content that should rank but doesn't. If competitors with thinner pages are outranking you, or pages you know exist don't turn up in a site:yourdomain.co.nz search, or Search Console shows Core Web Vitals failing, those are technical SEO problems, not content problems.",
      },
      {
        q: "Is technical SEO a one-off fix or ongoing work?",
        a: "Both. The first pass finds and fixes the backlog of issues, usually within the first month. After that it's light ongoing monitoring, because a new page, plugin or site update can quietly reintroduce a crawl or speed problem months later.",
      },
      {
        q: "Does technical SEO affect Core Web Vitals?",
        a: "Yes. Core Web Vitals are a technical SEO metric that measures loading speed, visual stability and responsiveness, and Google uses them as a ranking signal. Fixing render-blocking code, oversized images and layout shifts is standard technical SEO work.",
      },
      {
        q: "What's the difference between technical SEO and on-page SEO?",
        a: "On-page SEO is about a single page: the words on it, the title tag, the headings. Technical SEO is about the site as a whole: whether Google can crawl it, index it and load it fast enough to bother ranking it. A page can be perfectly written and still fail to rank if the technical SEO underneath it is broken.",
      },
      {
        q: "Can technical SEO fix a ranking drop by itself?",
        a: "Sometimes, if the drop was caused by a technical issue like an accidental noindex tag or a broken redirect. But technical SEO removes obstacles, it doesn't replace content or links. If the content is thin, fixing the technical side clears the path without giving you anywhere to go.",
      },
      {
        q: "Do I need a technical SEO audit before starting an SEO campaign?",
        a: "Generally yes. An audit tells you what's actually stopping a site from ranking before any money goes into content or links, so you're not building on a foundation with cracks in it. It's the first step we take on every project.",
      },
      {
        q: "How long does technical SEO take to show results?",
        a: "Fixes usually ship within the first month. Google then needs time to re-read the affected pages, so most sites see the effect show up in rankings from around month two.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Ready when you are",
    headlineMain: "Fix what's broken",
    headlineSub: "before you build anything else.",
    body: "Before you spend another dollar on content or ads, find out whether Google can read your site properly at all. The plan is free, it comes back in plain English within one working day, and it's yours to keep whether you hire us or not.",
    formHeading: "Get your free technical SEO audit",
    formNote: "A one-page plan in your inbox within one working day. No sales call, no obligation.",
  },
};
