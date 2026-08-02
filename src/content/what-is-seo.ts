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
      "What SEO actually means, how Google ranks websites, and why it matters for your business, explained in plain English by an SEO agency in New Zealand.",
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
    h1: "What Is SEO? A Straight Answer",
    sub: "SEO stands for search engine optimisation. It's the work of helping your website show up higher in Google's normal, unpaid results, so people searching for what you offer find you without you paying for every click.",
    chips: ["5.0 Google rating", "100+ verified reviews", `Updated ${__BUILD_DATE__}`, "Free plan, no obligation"],
    formHeading: "Get a free SEO audit for your site",
    formNote: "A one-page plan in your inbox within one working day. No sales call, no obligation.",
  },
  local: {
    eyebrow: "The short version",
    headlineMain: "SEO in plain terms",
    headlineSub: "no jargon, no fluff.",
    paragraphs: [
      "SEO stands for search engine optimisation. In practice, that means the free listings you see in Google, not the ads marked 'Sponsored' at the top of the page. When someone searches for a business like yours, SEO is what decides whether you show up on page one or page five.",
      "It's different from paid advertising in one important way. Ads stop the moment you stop paying for them. SEO keeps working long after the initial effort, because a well-built page can keep ranking and bringing in visitors for months or years without anyone paying per click.",
      "For a New Zealand business, that difference matters. Most buyer searches, the ones from people who already know what they want and are ready to act, go straight to Google first. If your site isn't set up to be found for those searches, that demand goes to whichever competitor does show up.",
      "SEO also compounds. Early technical fixes and content make later content easier to rank, because the site as a whole becomes more trusted in Google's eyes. That's why SEO tends to get cheaper and more effective the longer it runs, unlike ads, which cost roughly the same per click no matter how long you've been running them.",
      "None of this happens by accident. Google uses hundreds of signals to decide who ranks where, and most small business websites are missing several of the basics without realising it. The next section breaks down, in plain terms, what Google is actually looking for.",
    ],
    stats: [
      { value: "Free", label: "every visitor SEO brings you, unlike an ad click" },
      { value: "1", label: "working day to your free plan" },
      { value: "3", label: "months to start, then month by month" },
    ],
  },
  outcomes: {
    eyebrow: "How ranking works",
    headlineMain: "How Google decides",
    headlineSub: "who shows up first.",
    intro:
      "Google doesn't publish its exact ranking formula, but the industry has a solid working understanding of the broad categories that matter most. Here's the plain-English version, without the technical jargon.",
    items: [
      {
        kicker: "Relevance",
        value: "01",
        unit: "",
        title: "Does your content match the search",
        body: "Google reads the words, headings and structure on your page to work out what it's about, then matches that against what someone actually typed into the search box. Pages that answer the question clearly and completely tend to rank above pages that only mention the topic in passing.",
      },
      {
        kicker: "Authority",
        value: "02",
        unit: "",
        title: "Do other sites vouch for you",
        body: "Links from other websites act like references. When a relevant, trustworthy site links to yours, it's a signal to Google that other people find your content worth pointing to. Business listings, directories and genuine customer reviews add to that trust as well.",
      },
      {
        kicker: "Experience",
        value: "03",
        unit: "",
        title: "Does the site work well for visitors",
        body: "How fast a page loads, whether it works properly on a phone, and whether the connection is secure all feed into ranking. Google's goal is to send people to sites that actually work, so a slow or broken site gets pushed down even when the content itself is good.",
      },
    ],
  },
  included: {
    eyebrow: "The three pillars",
    headlineMain: "What SEO includes",
    headlineSub: "the work behind the results.",
    intro:
      "SEO isn't one task, it's three areas working together: the technical setup, the content itself, and the trust signals that convince Google, and people, that you're worth ranking.",
    columns: [
      {
        title: "Technical foundations",
        items: [
          "Site speed and Core Web Vitals",
          "Mobile-friendly design",
          "Secure HTTPS setup",
          "Clean URL structure",
          "Fixing crawl errors and broken links",
        ],
      },
      {
        title: "Content and on-page SEO",
        items: [
          "Keyword research",
          "Well-structured page content",
          "Clear headings and page titles",
          "Meta titles and descriptions",
          "Internal linking between pages",
        ],
      },
      {
        title: "Authority and trust",
        items: [
          "Earning links from other relevant websites",
          "Google Business Profile setup",
          "Consistent business listings across directories",
          "Genuine customer reviews",
          "Ongoing monitoring and reporting",
        ],
      },
    ],
  },
  process: {
    eyebrow: "What to expect",
    headlineMain: "How it plays out",
    headlineSub: "a realistic timeline.",
    intro:
      "SEO isn't instant, and any agency that promises overnight results isn't being straight with you. Here's a realistic timeline for how the work actually unfolds.",
    steps: [
      {
        eta: "Weeks 1-4",
        title: "Technical foundations",
        body: "We fix the things that stop Google from properly reading and trusting your site: broken links, missing page titles, slow load times and mobile issues. This is unglamorous work, but nothing else ranks well until it's done.",
      },
      {
        eta: "Weeks 4-8",
        title: "Content and structure",
        body: "We build out the pages your customers are actually searching for, with clear headings, complete answers and a logical structure Google can follow. This is where the site starts to properly represent what your business offers.",
      },
      {
        eta: "Months 2-3",
        title: "Authority and trust",
        body: "We work on the signals outside your own site: business listings, directory profiles and links from other relevant websites. This is typically the slowest-moving part of SEO, because trust has to be earned rather than switched on.",
      },
      {
        eta: "Ongoing",
        title: "Compounding results",
        body: "Rankings tend to keep climbing as the technical, content and authority work reinforce each other. Most sites see their sharpest gains from month three onward, and results continue to build the longer the work continues.",
      },
    ],
  },
  proof: {
    eyebrow: "Why use an agency",
    headlineMain: "Agency or DIY?",
    headlineSub: "here's the honest trade-off.",
    intro:
      "Deciding between doing SEO yourself and bringing in an agency comes down to time and risk. DIY SEO is genuinely possible, especially for a very small site, but it takes real time to learn properly, and mistakes such as duplicate pages, broken redirects or thin content can quietly hurt your rankings for months before anyone notices. An agency brings the process and the tools to avoid those mistakes, and frees up your time to run the business instead of learning search algorithms. These reviews are from real Digital Movement clients across the services we offer, not specific to SEO alone.",
  },
  nearby: {
    eyebrow: "Keep exploring",
    headlineMain: "Related reading",
    headlineSub: "more on SEO, explained.",
    intro: "SEO covers a lot of ground. These pages go deeper on the parts that apply to your situation.",
    links: [
      {
        label: "SEO services in New Zealand",
        to: "/seo",
        blurb: "The full picture: what we do, how we work, and what it costs to get started.",
      },
      {
        label: "Technical SEO",
        to: "/seo/technical-seo",
        blurb: "The behind-the-scenes fixes, like site speed and crawlability, that make everything else possible.",
      },
      {
        label: "Ecommerce SEO",
        to: "/seo/ecommerce",
        blurb: "How SEO works differently for online stores, from product pages to category structure.",
      },
    ],
  },
  faq: {
    eyebrow: "Common questions",
    headlineMain: "SEO, answered",
    headlineSub: "no jargon, straight answers.",
    intro: "The questions we hear most from business owners who are new to SEO.",
    items: [
      {
        q: "How long does SEO take to work?",
        a: "Most sites start seeing ranking movement within the first month or two, because the early technical fixes are what Google picks up fastest. Enquiries follow later. Meaningful, lasting growth typically builds over three to six months, because Google needs time to trust a site's changes before it moves it up the results. Anyone promising you a position by a date is promising something they don't control.",
      },
      {
        q: "Is SEO still relevant now that search includes AI-generated answers?",
        a: "Yes. Search now includes AI-generated answers alongside the traditional results, so structured, well-organised content matters more, not less. Those AI answers are still built from web pages that rank well, so the fundamentals of SEO stay just as important.",
      },
      {
        q: "What's the difference between SEO and Google Ads?",
        a: "Google Ads are paid placements: you pay per click, and the traffic stops the moment you stop paying. SEO is the unpaid, organic listings below the ads. It takes longer to build, but the results keep working without an ongoing cost per visitor.",
      },
      {
        q: "If I already run Google Ads, do I still need SEO?",
        a: "Not necessarily, but most businesses find the two work well together. Ads can bring in traffic while SEO is still being built up, and once your organic rankings improve, you can often reduce ad spend on the search terms you now rank for naturally.",
      },
      {
        q: "How much does SEO cost?",
        a: "It depends on the size of your site and how competitive your industry is. We work three months to start, then month by month — long enough for the work to show, short enough that you're never stuck with an agency that isn't delivering.",
      },
      {
        q: "Can I do SEO myself?",
        a: "For a very small site, yes, to a point. The basics, like writing clear page titles and useful content, are learnable. Where it gets harder is technical fixes and building genuine authority, both of which take time to learn properly and are easy to get wrong.",
      },
      {
        q: "What counts as a 'good' Google ranking?",
        a: "Page 1, ideally in the top 3 to 5 results, since that's where the large majority of clicks go. Ranking on page 2 or beyond gets you very little traffic, even if the ranking itself feels like progress.",
      },
      {
        q: "Does SEO ever finish, or is it ongoing?",
        a: "SEO isn't a one-off project. Rankings can slip if competitors improve their own sites or Google updates how it ranks pages, so ongoing maintenance is what protects the gains you've already made.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready to rank higher?",
    headlineMain: "Let's talk SEO",
    headlineSub: "no pressure, just a plan.",
    body: "If you've read this far, you already understand more about SEO than most business owners do. The next step is seeing where your own site stands. Ask for a free plan and we'll show you exactly what's holding your rankings back.",
    formHeading: "Get your free SEO audit",
    formNote: "A one-page plan in your inbox within one working day. No sales call, no obligation.",
  },
};
