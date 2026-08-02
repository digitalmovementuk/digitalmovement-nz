import type { SeoPageContent } from "./seo-pages";

// /results — the proof page. No city, no region: this is a conversion and
// trust page, not a place page, and it exists to be linked to from every
// /seo/* city spoke and cited directly in sales conversations, not to rank
// on its own. The honesty constraint drives every section: we have five real
// client reviews (four short verified Google reviews, one longer case study
// in Loomframe) and zero trades clients. This page says so plainly rather
// than padding, and uses the `local` section to explain how Digital Movement
// actually measures and reports results — the thing worth reading here even
// though the proof itself is thin.

export const results: SeoPageContent = {
  slug: "results",
  path: "/results",
  serviceName: "SEO Case Studies",

  meta: {
    title: "SEO Results & Reviews | Digital Movement NZ",
    description:
      "The verified Google reviews behind our SEO work, the client-reported figures, and exactly what we measure and report every month.",
  },

  // Not a keyword target — a conversion and trust page. Volume 0 here means
  // there is no meaningful NZ search demand for these terms, not that they
  // are unmeasured. Its job is internal linking from the city pages and a
  // citable URL in sales conversations, not ranking on its own.
  keywords: {
    primary: { term: "digital movement reviews", volume: 0, kd: 0 },
    secondary: [
      { term: "digital movement nz results", volume: 0, kd: 0 },
      { term: "seo case studies nz", volume: 0, kd: 0 },
      { term: "seo results new zealand", volume: 0, kd: 0 },
    ],
  },

  hero: {
    eyebrow: "Results & reviews",
    h1: "Digital Movement Reviews, Shown Honestly",
    sub: "This page shows five verified Google reviews from real New Zealand clients, with the figures each one reported themselves. None of them are trades businesses, and we won't pretend otherwise — read on for exactly what we can and can't show you, and how we report results to every client month to month.",
    chips: ["5.0 Google rating", "5 verified reviews", "Client-reported figures", "No invented case studies"],
    formHeading: "Talk to us about your results",
    formNote: "We'll tell you plainly what evidence we can show for your industry. No spam, no obligation.",
  },

  local: {
    eyebrow: "How we report",
    headlineMain: "What proof looks like",
    headlineSub: "when we do the reporting.",
    paragraphs: [
      "The four short reviews on this page are verified Google reviews, not full audited case studies. Real clients wrote them, in their own words, and the figures inside them are what those clients reported to us and to Google — not numbers we independently audited ourselves. The fifth, Loomframe, is closer to an actual case study, because we tracked that one in real detail over eight months. We'd rather tell you that plainly than dress four reviews up as something they're not.",
      "Every live client gets tracked against a small, fixed set of numbers, not a headline percentage. Keyword position for the terms that matter to their business, organic traffic split by page and source, referring domains — the backlinks actually pointing at the site — and enquiries: phone calls, form fills, bookings, whatever counts as a lead for that business. Traffic and rankings are inputs. Enquiries are the number that pays the bills, and it's the one we watch hardest.",
      "A monthly report from us shows the same four numbers every month, plotted against where they started, plus a plain-English note on what moved and why — a new page that started ranking, a technical fix, a batch of links earned. Not a screenshot of one good week dressed up as the whole story, and not jargon you need us to translate for you.",
      "A ranking is not a booked job. A page can sit on page 1 for a keyword and still not convert, if the page itself doesn't answer the question the searcher had, or if nobody follows up on the enquiry it generates. That's why enquiries sit above rankings in every report we send — a client who moved from position 14 to position 3 but got no extra calls still has a problem we need to solve.",
      "Before you sign with any SEO agency, ask to see three things: direct access to your own Search Console and Analytics data, not a screenshot they control; a monthly report that names specific pages and links rather than vague 'improvements'; and a straight answer about which of their case studies are audited work versus reviews like the ones on this page. If an agency won't hand over access to your own data, that's your answer.",
    ],
    stats: [
      { value: "5", label: "verified client reviews shown on this page" },
      { value: "5.0", label: "Google rating on every review here" },
      { value: "8 months", label: "the longest engagement we've tracked in detail" },
    ],
  },

  outcomes: {
    eyebrow: "What this page is",
    headlineMain: "What's here,",
    headlineSub: "and what isn't yet.",
    intro: "Three honest facts about the proof on this page, before you read any further.",
    items: [
      {
        kicker: "Reviews",
        value: "5",
        unit: "verified clients",
        title: "Real people, real words",
        body: "Four short Google reviews and one longer case study, Loomframe — all real New Zealand clients, quoted as they wrote it, not written for this page.",
      },
      {
        kicker: "Industries",
        value: "0",
        unit: "trades case studies",
        title: "No builders, plumbers or electricians yet",
        body: "None of the five clients shown here are trades businesses. If you run one, you'd be one of our first documented results in that industry — ask us and we'll say so plainly.",
      },
      {
        kicker: "Numbers",
        value: "0",
        unit: "combined percentages",
        title: "No headline figure invented",
        body: "The percentages you'll see below (1125%, 1312%, 1050%, 1796%) are what each client reported individually. We haven't averaged or combined them into one number, because that number wouldn't mean anything.",
      },
    ],
  },

  included: {
    eyebrow: "What's included",
    headlineMain: "Measured,",
    headlineSub: "reported, and never invented.",
    intro:
      "Three lists: what we track for every client, what lands in your report every month, and what we refuse to claim — even when it would make a better headline.",
    columns: [
      {
        title: "What we measure",
        items: [
          "Keyword position for the terms that matter to your business",
          "Organic traffic, by page and by source",
          "Referring domains — genuine backlinks, not a vanity count",
          "Enquiries: calls, form fills and bookings",
          "Google Business Profile views and actions",
        ],
      },
      {
        title: "What you get monthly",
        items: [
          "A live dashboard you can check any time, not just on report day",
          "A plain-English report measured against your starting baseline",
          "Direct line to the person doing the work, not an account manager",
          "Specific pages, links and fixes named, not vague 'improvements'",
          "Clear next steps for the following month",
        ],
      },
      {
        title: "What we will not claim",
        items: [
          "A combined or averaged percentage across different clients",
          "A trades case study we haven't actually done yet",
          "Star ratings rendered in Google search results — we don't run that schema",
          "Results for a business we haven't worked with",
          "A number we can't point to in your own Search Console or Analytics",
        ],
      },
    ],
  },

  process: {
    eyebrow: "How reporting works",
    headlineMain: "Every report,",
    headlineSub: "on a fixed monthly rhythm.",
    intro: "What happens from day 1 through every month after — the reporting cadence behind every number on this page.",
    steps: [
      {
        eta: "Day 1",
        title: "Baseline logged",
        body: "Rankings, traffic, referring domains and enquiries recorded before any work starts, so every later number has something real to compare against.",
      },
      {
        eta: "Month 1",
        title: "First report lands",
        body: "The same four numbers, plus what changed on the site and why. Nothing to interpret — it's written in plain English.",
      },
      {
        eta: "Month 2–3",
        title: "Trends, not screenshots",
        body: "Movement gets tracked against the baseline, not shown as a single good week. A dip gets explained, not hidden.",
      },
      {
        eta: "Ongoing",
        title: "Open access, any time",
        body: "The dashboard stays open between reports. Check it the day you think of it, not just when the invoice lands.",
      },
    ],
  },

  proof: {
    eyebrow: "The evidence",
    headlineMain: "Every review",
    headlineSub: "we can currently show you.",
    intro:
      "All five — the four verified Google reviews and the longer Loomframe case study. Nothing held back, and nothing added for this page.",
    limit: 5,
  },

  nearby: {
    eyebrow: "Keep exploring",
    headlineMain: "More proof,",
    headlineSub: "and where we do this work.",
    intro: "Where to go next — our national approach, a city page, and the trades industry these reviews don't cover yet.",
    links: [
      { label: "SEO New Zealand", to: "/seo", blurb: "Our full national approach to SEO, and what we commit to in writing." },
      { label: "SEO Christchurch", to: "/seo/christchurch", blurb: "What SEO looks like for a Christchurch business specifically." },
      {
        label: "SEO for Builders",
        to: "/industries/builders",
        blurb: "How we think about SEO for building and trades businesses — the industry these reviews don't yet cover.",
      },
    ],
  },

  faq: {
    eyebrow: "Common questions",
    headlineMain: "Straight answers,",
    headlineSub: "including the awkward ones.",
    intro:
      "What people ask before they trust reviews on an agency's own website — including the questions that are uncomfortable to answer.",
    items: [
      {
        q: "Do you have case studies in my industry?",
        a: "Probably not yet, if you're in trades. The five clients on this page are an online store owner, two small-business owners, an established multi-service client and a B2B software company — no builders, plumbers, electricians or roofers. If you're in one of those trades, ask us directly and we'll tell you honestly what we can and can't show you.",
      },
      {
        q: "Why are these Google reviews rather than full case studies?",
        a: "Because that's what we actually have for four of the five. They're verified reviews written by real clients on Google, with the figures those clients reported themselves — not before-and-after audits we ran and documented as a formal case study. Loomframe is the exception: we tracked that one in enough detail over eight months to call it a proper case study.",
      },
      {
        q: "What will you actually report to me?",
        a: "A monthly report covering keyword position, organic traffic, referring domains and enquiries, measured against where you started, plus plain-English notes on what changed and why. You also get live dashboard access, so you're never waiting on us to check a number.",
      },
      {
        q: "What happens if it doesn't work?",
        a: "You can hold us to what we put in writing before you sign: the exact searches we're going after, the work we'll do each month, and a report showing where you sit on every one of them. What you won't get from us is a guaranteed position — nobody controls Google's results, and an agency that promises one is writing a cheque Google has to cash. If the numbers in your monthly report aren't moving, that's a conversation we start immediately, not something quietly reworded in the next report.",
      },
      {
        q: "Are the percentages on this page independently verified?",
        a: "No, and we won't pretend otherwise. 1125%, 1312%, 1050% and 1796% are the figures those clients reported in their own reviews, not numbers an independent auditor checked against their analytics. We show each one attributed to the client who said it, not as our own audited claim.",
      },
      {
        q: "Why don't these reviews show star ratings in Google search results?",
        a: "Because marking up your own reviews with schema so stars appear in search results goes against Google's guidelines on self-serving structured data, and we're not willing to risk a penalty for a cosmetic win. You can read every review here, just without stars in the search result itself.",
      },
      {
        q: "Can I see these reviews on Google itself, not just this page?",
        a: "Yes — every review here is a real, publicly verifiable review on our Google Business Profile, not something written for this website. Search Digital Movement and you'll find them alongside the rest.",
      },
      {
        q: "What makes Loomframe different from the other four?",
        a: "It's the one client we can talk about with real depth — eight months, 800+ ranking keywords, demos booked weekly, tracked properly the whole way through. The other four are shorter, client-written reviews rather than something we measured and reported on ourselves.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Talk to us",
    headlineMain: "Want to be",
    headlineSub: "the next result on this page?",
    body: "Get in touch and we'll tell you plainly what we can show for your industry, what a monthly report from us actually looks like, and what it would take to get you real numbers of your own.",
    formHeading: "Talk to us about your results",
    formNote: "We'll reply straight — no push to sign anything. No spam, no obligation.",
  },
};
