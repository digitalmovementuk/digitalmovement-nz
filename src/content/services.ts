// Service-page content for the four service routes.
// Rebranded from the NEO original to Digital Movement voice — NZ clients,
// dollars, 90-day delivery sprint, plain talk.

export type ServiceContent = {
  slug: string;
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    headlineTop: string;
    headlineBottom: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    chips: string[];
    video?: string;
  };
  whatItIs: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    paragraphs: string[];
    audience: string;
  };
  outcomes: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    intro: string;
    items: {
      kicker: string;
      value: string;
      unit: string;
      title: string;
      body: string;
    }[];
  };
  methodology: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    intro: string;
    phases: {
      kicker: string;
      title: string;
      body: string;
      bullets?: string[];
    }[];
  };
  deliverables: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    intro: string;
    columns: { title: string; items: string[] }[];
  };
  process: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    intro: string;
    steps: { eta: string; title: string; body: string }[];
  };
  stack: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    intro: string;
    items: { name: string; body: string }[];
  };
  faq: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    intro: string;
    items: { q: string; a: string }[];
  };
  leadMagnet: {
    eyebrow: string;
    headline: string;
    body: string;
    bullets: string[];
    cta: string;
    note: string;
  };
  finalCta: {
    eyebrow: string;
    headlineMain: string;
    headlineSub: string;
    body: string;
    primary: string;
  };
};

export type ServiceSlug = "seo" | "googleAds" | "socialMedia" | "websites";

export const services: Record<ServiceSlug, ServiceContent> = {
  seo: {
    slug: "seo",
    meta: {
      title: "SEO for founder-led businesses · Digital Movement",
      description:
        "Page 1 Google in as little as 60 days. Technical SEO, content that earns clicks, and authority building that pays back — for NZ businesses. Fixed price, no lock-in.",
    },
    hero: {
      eyebrow: "Search engine optimisation · for NZ businesses",
      headlineTop: "Google.",
      headlineBottom: "Page one.",
      sub: "We get your website to page one for the terms your customers actually type — in as little as 60 days, on a fixed monthly price, with no lock-in. Plain talk, measurable maths.",
      primaryCta: "Free SEO audit",
      secondaryCta: "Book a consultation",
      chips: ["Technical SEO", "Content & on-page", "Authority building", "Local SEO"],
      video: "video/seo-logo.mp4",
    },
    whatItIs: {
      eyebrow: "What we do",
      headlineMain: "SEO without buzzwords.",
      headlineSub: "Enquiries, not vanity clicks.",
      paragraphs: [
        "SEO isn't a trick or a black box. It's disciplined work on three levers: technical hygiene, content that maps to commercial search intent, and authority through clean link-building.",
        "At Digital Movement that means we audit your site for crawler issues, speed and indexation. We build content your customers actually search for — and we write it so it converts. We build authority slowly, with substance.",
        "Every month you get a plain-talk note: what moved, why, and what's next. No spin, no 30-page PDFs.",
      ],
      audience:
        "Built for founder-led NZ businesses and SMEs that want to grow — not for enterprises that need a new KPI deck.",
    },
    outcomes: {
      eyebrow: "What changes",
      headlineMain: "Three numbers",
      headlineSub: "that actually count.",
      intro:
        "Median across active client sprints over the last 12 months. Industries across the board — consultancies, trades, premium services, B2B.",
      items: [
        {
          kicker: "Pipeline",
          value: "8",
          unit: "×",
          title: "more qualified enquiries",
          body: "Average uplift in monthly enquiries from organic search after the first six months.",
        },
        {
          kicker: "Visibility",
          value: "60",
          unit: "days",
          title: "to Google page one",
          body: "From kick-off to the first commercial keyword on page one. Median — some clients are faster.",
        },
        {
          kicker: "Trust",
          value: "5.0",
          unit: "★",
          title: "verified Google reviews",
          body: "100+ verified reviews from NZ business owners we've grown.",
        },
      ],
    },
    methodology: {
      eyebrow: "How we do it",
      headlineMain: "Four phases.",
      headlineSub: "No secret sauce.",
      intro:
        "Our methodology isn't patented — it's disciplined. We make the invisible work visible because you should know exactly what you're paying for.",
      phases: [
        {
          kicker: "Phase 1 · Day 1–7",
          title: "Audit & data anchor",
          body: "We open the bonnet. Crawler analysis, indexation check, Core Web Vitals, content inventory, keyword mapping against NZ competitors.",
          bullets: [
            "Technical SEO audit with 50+ checkpoints",
            "Search Console + GA4 as source of truth",
            "Competitor gap analysis (your NZ market)",
            "Written audit report with priorities",
          ],
        },
        {
          kicker: "Phase 2 · Day 8–30",
          title: "Technical foundation",
          body: "Before new content arrives, the foundation must hold. We fix every crawler issue, optimise Core Web Vitals, restructure URL hierarchy.",
          bullets: [
            "Sitemap & robots.txt cleaned up",
            "Core Web Vitals < 2.5 s LCP, < 0.1 CLS",
            "Schema.org markup (LocalBusiness, Service, FAQ)",
            "Internal linking & page architecture",
          ],
        },
        {
          kicker: "Phase 3 · Day 31–60",
          title: "Content engine",
          body: "We write the content your customers actually type — service pages, comparison content, FAQ hubs. All editorial, all conversion-led.",
          bullets: [
            "Service pages with commercial search intent",
            "Comparison content for high-intent queries",
            "Local landing pages where relevant",
            "FAQ hubs for long-tail traffic",
          ],
        },
        {
          kicker: "Phase 4 · Day 61–90",
          title: "Authority & scaling",
          body: "Clean links — no PBNs, no spam. Digital PR, NZ industry directories, partnerships. Plus the monthly plain-talk report.",
          bullets: [
            "Digital PR campaign (3–5 placements per quarter)",
            "NZ directories and industry listings",
            "Partner and guest posts",
            "Monthly plain-talk report with the next levers",
          ],
        },
      ],
    },
    deliverables: {
      eyebrow: "What you get",
      headlineMain: "Three pillars.",
      headlineSub: "All-in, no add-ons.",
      intro:
        "Fixed monthly price. No setup surprise. Everything below is in the 90-day sprint — and every month after, as long as you want.",
      columns: [
        {
          title: "Strategy",
          items: [
            "Technical SEO audit",
            "Keyword strategy & mapping",
            "Six-month content plan",
            "NZ competitor analysis",
            "Conversion architecture",
          ],
        },
        {
          title: "Execution",
          items: [
            "Technical fixes (speed, crawler, indexation)",
            "Content production (4–8 pages/month)",
            "On-page optimisation",
            "Link-building (3–5 quality links per quarter)",
            "Schema.org & structured data",
          ],
        },
        {
          title: "Reporting",
          items: [
            "Live dashboard (rankings, traffic, enquiries)",
            "Monthly plain-talk report (one page)",
            "Weekly WhatsApp updates",
            "Direct line to the strategist — no account manager",
            "Slack or email direct line",
          ],
        },
      ],
    },
    process: {
      eyebrow: "The 90-day sprint",
      headlineMain: "Four milestones.",
      headlineSub: "Plain talk, no spin.",
      intro:
        "What happens on day 1, 30, 60 and 90. We say it up front, we stick to it, and we show the maths every month.",
      steps: [
        { eta: "Day 1", title: "Audit & kick-off", body: "Audit report in your inbox. 60-min strategy call. You understand where you stand." },
        { eta: "Day 30", title: "Foundation in place", body: "Technical SEO clean. First content pages live. Tracking running, data flowing." },
        { eta: "Day 60", title: "First page-one keywords", body: "First commercial keywords on page one. Pipeline starts filling." },
        { eta: "Day 90", title: "8× pipeline (median)", body: "Measurable uplift in qualified enquiries. From here on, monthly, no minimum term." },
      ],
    },
    stack: {
      eyebrow: "Tools & standards",
      headlineMain: "What we work with.",
      headlineSub: "No secrets, no lock-in.",
      intro:
        "Industry-standard tools, cleanly integrated. You keep every account and every access — even if you eventually want to continue without us.",
      items: [
        { name: "Google Search Console", body: "Source of truth for rankings, clicks, indexation." },
        { name: "GA4 + Tag Manager", body: "Conversion tracking set up cleanly — server-side where it matters." },
        { name: "Ahrefs / Semrush", body: "Backlink monitoring, competitor analysis, keyword research." },
        { name: "Screaming Frog", body: "Technical audits, crawler diagnostics, site-structure mapping." },
        { name: "Schema.org", body: "Structured data — LocalBusiness, Service, FAQ, Organization." },
        { name: "PageSpeed Insights / Lighthouse", body: "Core Web Vitals, speed optimisation, mobile-first audits." },
      ],
    },
    faq: {
      eyebrow: "Common questions",
      headlineMain: "Asked straight.",
      headlineSub: "Answered straight.",
      intro: "What we hear most often from NZ business owners before they book.",
      items: [
        { q: "How fast will I see results?", a: "Ranking movement in the first 2–4 weeks, first page-one keywords by 60 days. Real enquiry uplift typically from month 3. What you can specifically expect, we'll tell you after the audit — no spin." },
        { q: "What's included in the fixed price?", a: "Everything under \"What you get.\" No add-ons, no setup fee, no upcharges for \"more content\" or \"more links.\" If you want to scale, we'll talk — otherwise the price stays stable." },
        { q: "Is there a minimum term?", a: "We work month-to-month after a short minimum term to set things up properly. If we're not delivering, you can leave. We'd rather earn the next month than trap you in it." },
        { q: "Who actually does the work?", a: "Senior NZ specialists — the people you meet in the consultation do the work. No account-manager ping-pong, no juniors learning on your behalf." },
        { q: "How does SEO sit alongside Google Ads?", a: "Very well — we often run both in parallel. SEO builds long-term visibility; Ads buy short-term traffic. When both are clean, you get a pipeline that doesn't stop growing." },
        { q: "Can you guarantee results in my industry?", a: "Ranking guarantees are dishonest — we don't give them. What we do: we don't take on clients we don't believe will work. If the audit shows SEO is the wrong lever, we'll tell you that." },
        { q: "What happens after the 90 days?", a: "You decide. Most clients stay monthly because growth scales from there. Some pause and come back later. You keep all access, all data, all content — even if you stop tomorrow." },
      ],
    },
    leadMagnet: {
      eyebrow: "Before you decide",
      headline: "Free SEO audit of your website.",
      body: "We audit your site against 50+ technical and content factors and send you a one-page plain-talk report. What's broken, what's working, and the three highest-impact next levers — whether you work with us or not.",
      bullets: [
        "One-page audit by email in 24 h",
        "30-minute Loom walkthrough",
        "Concrete next steps, prioritised",
        "No sales pitch required",
      ],
      cta: "Request free audit",
      note: "Lands in your inbox within 24 working hours. No spam.",
    },
    finalCta: {
      eyebrow: "Ready?",
      headlineMain: "30 minutes.",
      headlineSub: "A plan on one page.",
      body: "Free consultation with a senior strategist. You'll get an honest read, a one-page plan, and then you decide. No sales pitch, no pressure.",
      primary: "Book a consultation",
    },
  },

  googleAds: {
    slug: "google-ads",
    meta: {
      title: "Google Ads for NZ businesses · Digital Movement",
      description:
        "ROI-positive paid traffic that prints. Tightly scoped Search and Performance Max campaigns for NZ businesses. Fixed price, weekly waste-trimming, no lock-in.",
    },
    hero: {
      eyebrow: "Google Ads · for NZ businesses",
      headlineTop: "ROI.",
      headlineBottom: "Not reach.",
      sub: "We build Google Ads campaigns that print enquiries, not bills. Tightly scoped, conversion-tracked, weekly waste-trimming. Fixed monthly price, no lock-in.",
      primaryCta: "Free Ads teardown",
      secondaryCta: "Book a consultation",
      chips: ["Search Ads", "Performance Max", "Conversion tracking", "Landing-page tuning"],
      video: "video/google-ads-logo.mp4",
    },
    whatItIs: {
      eyebrow: "What we do",
      headlineMain: "Paid traffic",
      headlineSub: "that pays back.",
      paragraphs: [
        "Google Ads isn't an auction lottery. It's disciplined bidding on commercial search intent — combined with landing pages that turn what we buy into enquiries.",
        "At Digital Movement that means we don't bid on vanity terms. We track every conversion to the penny. We trim waste weekly — search terms, keywords and ads that don't perform get pulled. What's left, prints.",
        "Every month you get a plain-talk note: what was invested, what came back, ROAS per campaign, and the three next levers.",
      ],
      audience:
        "Built for NZ businesses that put ROI over reach — not brand campaigns, but enquiry pipelines.",
    },
    outcomes: {
      eyebrow: "What changes",
      headlineMain: "Three numbers",
      headlineSub: "your accountant understands.",
      intro:
        "Median across active Ads clients over the last 12 months. Volume varies by industry; the ROAS target is always cash-positive from month 2.",
      items: [
        {
          kicker: "ROAS",
          value: "5.2",
          unit: "×",
          title: "Return on ad spend",
          body: "Median across active sprints — measured as revenue from Google Ads enquiries divided by ad spend.",
        },
        {
          kicker: "CPL",
          value: "−42",
          unit: "%",
          title: "cheaper enquiries",
          body: "Cost-per-lead reduction within the first 90 days through quality-score lift and negative keywords.",
        },
        {
          kicker: "Speed",
          value: "14",
          unit: "days",
          title: "to first qualified enquiry",
          body: "From kick-off to the first booked appointment. Median — often faster in B2B.",
        },
      ],
    },
    methodology: {
      eyebrow: "How we do it",
      headlineMain: "Four phases.",
      headlineSub: "Discipline beats volume.",
      intro:
        "Ads methodology is 80 % setup, 20 % optimisation. When the setup is clean, much of it optimises itself — until then, we tighten every screw.",
      phases: [
        {
          kicker: "Phase 1 · Day 1–7",
          title: "Audit & conversion anchor",
          body: "We review what's been running — accounts, campaigns, tracking. Conversion tracking is usually the biggest issue.",
          bullets: [
            "Account and campaign audit",
            "Conversion tracking at server-side level",
            "Competitor analysis (Auction Insights, SimilarWeb)",
            "Written audit report with waste hot-spots",
          ],
        },
        {
          kicker: "Phase 2 · Day 8–30",
          title: "Setup & landing pages",
          body: "Tightly scoped campaign structure. Conversion-tracked landing pages — never a generic homepage as ad target.",
          bullets: [
            "Search campaigns per service / industry",
            "Performance Max with tightly scoped asset groups",
            "Landing-page builds with conversion architecture",
            "Negative keyword list (200+ terms)",
          ],
        },
        {
          kicker: "Phase 3 · Day 31–60",
          title: "Optimisation & trimming",
          body: "Data flows in. Weekly we trim waste — terms costing money without enquiries get pulled.",
          bullets: [
            "Weekly search-term review",
            "Bid strategy on conversion value",
            "Ad A/B tests running continuously",
            "Quality-score lift via landing-page tuning",
          ],
        },
        {
          kicker: "Phase 4 · Day 61–90",
          title: "Scaling & reporting",
          body: "When ROAS sits stably above target, we scale volume. Plus the monthly plain-talk report with cash-flow maths.",
          bullets: [
            "Budget scaling on profitable campaigns",
            "Geo and time-of-day tuning",
            "Remarketing audiences set up cleanly",
            "Monthly cash report with ROAS per campaign",
          ],
        },
      ],
    },
    deliverables: {
      eyebrow: "What you get",
      headlineMain: "Three pillars.",
      headlineSub: "All-in.",
      intro:
        "Fixed monthly price, all ad budgets in your account. We don't earn on your ad spend — we earn on results.",
      columns: [
        {
          title: "Strategy",
          items: [
            "Account and tracking audit",
            "Campaign architecture",
            "Landing-page conversion plan",
            "NZ competitor analysis",
            "Budget and ROAS model",
          ],
        },
        {
          title: "Execution",
          items: [
            "Search and Performance Max campaign builds",
            "Landing-page production (mobile-first)",
            "Conversion tracking (GA4 + server-side)",
            "Weekly search-term trimming",
            "Ad and asset production",
          ],
        },
        {
          title: "Reporting",
          items: [
            "Live dashboard (ROAS, CPL, conversions)",
            "Monthly cash report (one page)",
            "Weekly WhatsApp updates",
            "Direct line to the strategist — no junior",
            "Slack or email direct line",
          ],
        },
      ],
    },
    process: {
      eyebrow: "The 90-day sprint",
      headlineMain: "Four milestones.",
      headlineSub: "Cash, not clicks.",
      intro:
        "What happens on day 1, 30, 60 and 90. We say it up front, we stick to it, and we show the ROAS maths every month.",
      steps: [
        { eta: "Day 1", title: "Audit & kick-off", body: "Audit report with waste hot-spots. 60-min setup call." },
        { eta: "Day 30", title: "Campaigns live", body: "Search + Performance Max running. Conversion tracking clean. First data flowing." },
        { eta: "Day 60", title: "ROAS stabilising", body: "Waste trimmed, quality score up, ROAS settling in." },
        { eta: "Day 90", title: "5× ROAS (median)", body: "Profitable campaigns scaled. From here on, monthly optimisation." },
      ],
    },
    stack: {
      eyebrow: "Tools & standards",
      headlineMain: "What we work with.",
      headlineSub: "Industry standard, cleanly integrated.",
      intro:
        "You keep every account and every access — even if you continue without us. No lock-in.",
      items: [
        { name: "Google Ads", body: "Search, Performance Max, remarketing — all under your account." },
        { name: "GA4 + Tag Manager", body: "Conversion tracking clean, server-side where it counts." },
        { name: "Google Merchant Center", body: "For e-commerce clients — Shopping Ads cleanly integrated." },
        { name: "Looker Studio", body: "Live dashboard you can open on your phone." },
        { name: "CallRail / Hyros", body: "Call-tracking and multi-touch attribution for high-ticket industries." },
        { name: "SimilarWeb / Auction Insights", body: "Competitor visibility — who's bidding what, where." },
      ],
    },
    faq: {
      eyebrow: "Common questions",
      headlineMain: "Asked straight.",
      headlineSub: "Answered straight.",
      intro: "What NZ business owners ask most often before they release Ads budget.",
      items: [
        { q: "How much ad spend do I need?", a: "Depends on your industry and CPL. We typically recommend NZ$2,000–NZ$8,000 / month to start. The audit will give you a concrete number based on your market." },
        { q: "Does Digital Movement earn on my ad budget?", a: "No. All budgets run directly through your Google Ads account. We earn the fixed monthly fee — whether your budget is NZ$1,500 or NZ$160,000. Incentive: results, not volume." },
        { q: "How fast will I see enquiries?", a: "With a clean setup, often within the first 14 days. Scaling to stable ROAS typically takes 60–90 days." },
        { q: "What if ROAS stays below target?", a: "We meet weekly and adjust. If after 60 days it's clear the market potential isn't enough, we'll tell you honestly — and end the sprint instead of burning your budget." },
        { q: "Who writes the ads?", a: "We do. Including A/B test variants and asset production for Performance Max. You approve, we ship." },
        { q: "What about Performance Max — does it work?", a: "Yes, when you know what you're doing. Tightly scoped asset groups, account-level negative keywords, clean conversion tracking. Otherwise PMax eats budget and delivers vanity conversions." },
        { q: "What happens after the 90 days?", a: "Monthly continuation. You can pause anytime. All accounts and data are yours." },
      ],
    },
    leadMagnet: {
      eyebrow: "Before you invest",
      headline: "Free Ads teardown of your account.",
      body: "We open your Google Ads account (read-only) and find the three biggest waste hot-spots. A one-page plain-talk report with concrete levers you can implement immediately — whether you work with us or not.",
      bullets: [
        "Waste analysis of your active account",
        "Top 3 quick wins prioritised",
        "30-minute Loom walkthrough",
        "No sales pitch required",
      ],
      cta: "Request Ads teardown",
      note: "In your inbox within 48 working hours. Read-only access is enough.",
    },
    finalCta: {
      eyebrow: "Ready?",
      headlineMain: "30 minutes.",
      headlineSub: "Cash plan on one page.",
      body: "Free consultation with a senior strategist. We review your current Ads setup live, and you get a ROAS plan on one page. No sales pitch.",
      primary: "Book a consultation",
    },
  },

  socialMedia: {
    slug: "social-media",
    meta: {
      title: "Social Media for NZ businesses · Digital Movement",
      description:
        "Content that drives enquiries — not vanity metrics. Short-form video, paid social and creative production for NZ brands. Fixed price, lead-driven.",
    },
    hero: {
      eyebrow: "Social media · for NZ businesses",
      headlineTop: "Enquiries.",
      headlineBottom: "Not followers.",
      sub: "Short-form video, paid social and creative content that books appointments — not likes. Content-driven, no buzzword bingo.",
      primaryCta: "Free content sample",
      secondaryCta: "Book a consultation",
      chips: ["Short-form video", "Paid social", "Creative production", "Posting plan"],
      video: "video/socials-logo.mp4",
    },
    whatItIs: {
      eyebrow: "What we do",
      headlineMain: "Content",
      headlineSub: "that converts.",
      paragraphs: [
        "Social media isn't a beauty contest. It's an enquiry channel — when content meets the right audience with the right intent, you get booked appointments, not vanity likes.",
        "At Digital Movement that means we build short-form video your audience actually consumes. We combine organic content with tightly scoped paid social. And we track every enquiry back to the platform that delivered it.",
        "Every month you get a plain-talk note: which content performs, which platform delivers enquiries, and what we'll produce next.",
      ],
      audience:
        "Built for NZ brands and SMEs that use social as a sales channel — not as a PR stage.",
    },
    outcomes: {
      eyebrow: "What changes",
      headlineMain: "Three numbers",
      headlineSub: "that count.",
      intro:
        "Median across active social clients over the last 12 months. B2B and high-ticket B2C — where one enquiry is worth real money.",
      items: [
        {
          kicker: "Pipeline",
          value: "3.4",
          unit: "×",
          title: "more enquiries from social",
          body: "Average uplift after six months — across organic short-form and paid social combined.",
        },
        {
          kicker: "CPL",
          value: "NZ$48",
          unit: "median",
          title: "Cost-per-lead via paid social",
          body: "Median across active campaigns — varies by industry, but consistently below Google-Ads CPL.",
        },
        {
          kicker: "Volume",
          value: "12",
          unit: "/month",
          title: "Short-form videos produced",
          body: "Per month in the sprint — Reels, TikTok, YouTube Shorts, all editorially planned.",
        },
      ],
    },
    methodology: {
      eyebrow: "How we do it",
      headlineMain: "Four phases.",
      headlineSub: "Lead-driven, not vanity.",
      intro:
        "Social methodology at Digital Movement: define the enquiry first, then plan the content backwards. Never the reverse. Whoever starts with content loses.",
      phases: [
        {
          kicker: "Phase 1 · Day 1–7",
          title: "Audit & audience definition",
          body: "We analyse your platforms, competition and audience behaviour. Which platform delivers enquiries for your business?",
          bullets: [
            "Platform audit (TikTok, Instagram, LinkedIn, YouTube)",
            "Competitor content analysis",
            "Audience definition with search intent",
            "Conversion path per platform",
          ],
        },
        {
          kicker: "Phase 2 · Day 8–30",
          title: "Content engine & setup",
          body: "Editorial plan, production pipeline, tracking. Before we go live, everything is documented.",
          bullets: [
            "12-month editorial plan",
            "Short-form video templates and hooks",
            "Paid social tracking (Meta + TikTok pixel)",
            "Production schedule (12 videos / month)",
          ],
        },
        {
          kicker: "Phase 3 · Day 31–60",
          title: "Production & distribution",
          body: "Content gets produced, distributed organically and partly pushed paid. Weekly optimisation based on performance.",
          bullets: [
            "12 short-form videos per month",
            "Organic posting plan",
            "Paid social boost on high-performers",
            "Weekly performance reviews",
          ],
        },
        {
          kicker: "Phase 4 · Day 61–90",
          title: "Scaling & iteration",
          body: "What performs gets scaled. What doesn't gets stopped. Plus monthly plain-talk report on pipeline contribution.",
          bullets: [
            "Scaling on the most profitable content formats",
            "Platform shift where needed",
            "Creator-partner campaigns (optional)",
            "Monthly plain-talk report with pipeline maths",
          ],
        },
      ],
    },
    deliverables: {
      eyebrow: "What you get",
      headlineMain: "Three pillars.",
      headlineSub: "All-in.",
      intro:
        "Fixed monthly price, all ad budgets in your account. Production, distribution and reporting — complete.",
      columns: [
        {
          title: "Strategy",
          items: [
            "Platform audit",
            "Audience & conversion plan",
            "12-month editorial plan",
            "NZ competitor analysis",
            "Performance benchmark model",
          ],
        },
        {
          title: "Execution",
          items: [
            "12 short-form videos per month",
            "Organic posting plan (all platforms)",
            "Paid social campaigns (Meta + TikTok)",
            "Conversion tracking clean",
            "Creator and UGC production (optional)",
          ],
        },
        {
          title: "Reporting",
          items: [
            "Live dashboard (pipeline per platform)",
            "Monthly plain-talk report (one page)",
            "Weekly WhatsApp updates",
            "Direct line to the strategist — no junior",
            "Slack or email direct line",
          ],
        },
      ],
    },
    process: {
      eyebrow: "The 90-day sprint",
      headlineMain: "Four milestones.",
      headlineSub: "Appointments, not followers.",
      intro:
        "What happens on day 1, 30, 60 and 90. We say it up front and then we deliver.",
      steps: [
        { eta: "Day 1", title: "Audit & kick-off", body: "Platform audit. Audience and content plan. Tracking setup call." },
        { eta: "Day 30", title: "First content live", body: "First 12 videos produced and posted. Paid social running." },
        { eta: "Day 60", title: "First enquiries tracked", body: "Conversion path measurable. First appointments from social." },
        { eta: "Day 90", title: "Pipeline contribution established", body: "Social is a measurable enquiry channel. Scaling begins." },
      ],
    },
    stack: {
      eyebrow: "Tools & platforms",
      headlineMain: "What we work with.",
      headlineSub: "Platform-agnostic, conversion-focused.",
      intro:
        "We choose platforms neutrally. Whichever one delivers enquiries for your business, we work on — whether that's LinkedIn or TikTok.",
      items: [
        { name: "Meta Business Suite", body: "Instagram + Facebook organic and paid, pixel tracking clean." },
        { name: "TikTok Ads Manager", body: "Short-form video for younger audiences or volume plays." },
        { name: "LinkedIn Campaign Manager", body: "B2B lead-gen with tightly scoped audiences." },
        { name: "YouTube Studio + YouTube Ads", body: "Long-form authority and pre-roll targeting." },
        { name: "GA4 + Tag Manager", body: "Cross-platform conversion tracking, cleanly attributed." },
        { name: "CapCut + Premiere", body: "Production stack for short-form video — fast, polished, scalable." },
      ],
    },
    faq: {
      eyebrow: "Common questions",
      headlineMain: "Asked straight.",
      headlineSub: "Answered straight.",
      intro: "What NZ owners ask most often before they release social budget.",
      items: [
        { q: "Do I need to be present on every platform?", a: "No. We recommend 1–2 platforms where your audience actually spends time. Better deep than wide." },
        { q: "What if I don't want to be on camera?", a: "Works. We build UGC-style content with creators or product-led visuals. But personal founder content typically performs best." },
        { q: "How much ad budget do I need?", a: "For paid social we recommend at least NZ$2,000 / month to start. Organic works without it — just takes longer." },
        { q: "Who produces the videos?", a: "We do. Including scripts, storyboard, edit, hooks. You approve, we publish. For founder content we need ~2 h per month from you." },
        { q: "How fast will I see enquiries?", a: "Organic takes 60–90 days for first tracked conversions. Paid social often within 2–3 weeks if setup is clean." },
        { q: "What about creators and influencer marketing?", a: "When relevant, yes — but as an add-on, not default. NZ founder-led brands typically build best on their own founder content. Creators come when volume justifies it." },
        { q: "What happens after the 90 days?", a: "Monthly continuation. You keep all accounts, all content, all data — if you stop, nothing is lost." },
      ],
    },
    leadMagnet: {
      eyebrow: "Before you invest",
      headline: "Free content sample for your brand.",
      body: "We produce a 60-second short-form video sample for your brand — based on a conversion hypothesis we draw from your business. You see how our content would look for you, before you decide.",
      bullets: [
        "One 60-second short-form video production",
        "Conversion hypothesis explained in writing",
        "Suggested hook and script",
        "No sales pitch required",
      ],
      cta: "Request content sample",
      note: "Production time 5–7 working days. No spam, no obligation.",
    },
    finalCta: {
      eyebrow: "Ready?",
      headlineMain: "30 minutes.",
      headlineSub: "Content plan on one page.",
      body: "Free consultation with a senior strategist. We define live which platform works for your business — and what the first 90-day sprint looks like.",
      primary: "Book a consultation",
    },
  },

  websites: {
    slug: "websites",
    meta: {
      title: "Websites for NZ businesses · Digital Movement",
      description:
        "Conversion-optimised websites that rank from day one. Mobile-first, Core Web Vitals, self-editable. Fixed price, live in 6–8 weeks.",
    },
    hero: {
      eyebrow: "Website development · for NZ businesses",
      headlineTop: "Your site,",
      headlineBottom: "as an asset.",
      sub: "Fast, modern, mobile-first websites that load quickly, look right and turn visitors into enquiries. Built on platforms you can edit yourself.",
      primaryCta: "Speed & conversion report",
      secondaryCta: "Book a consultation",
      chips: ["Mobile-first", "Core Web Vitals", "Conversion architecture", "Self-editable"],
      video: "video/website-logo.mp4",
    },
    whatItIs: {
      eyebrow: "What we do",
      headlineMain: "Websites",
      headlineSub: "that print enquiries.",
      paragraphs: [
        "A website isn't an online business card. It's your most active salesperson — 24/7, no sick days. If it's bad, it costs you money daily. If it's good, it prints enquiries.",
        "At Digital Movement that means mobile-first design, Core Web Vitals under 2.5 s LCP, conversion architecture grounded in actual user behaviour. Plus: all content self-editable — you're not dependent on us for every comma fix.",
        "You get a site that ranks from day one, converts from day one, and grows with you over the next five years — without a complete redesign.",
      ],
      audience:
        "Built for NZ businesses that treat their website as a sales asset — not as a mandatory online presence.",
    },
    outcomes: {
      eyebrow: "What changes",
      headlineMain: "Three numbers",
      headlineSub: "you'll feel.",
      intro:
        "Median across website projects over the last 12 months. Industry mix — consultancies, trades, premium services, B2B.",
      items: [
        {
          kicker: "Speed",
          value: "1.8",
          unit: "s",
          title: "LCP median",
          body: "Largest Contentful Paint at the 75th percentile — faster than 92 % of mid-market NZ websites.",
        },
        {
          kicker: "Conversion",
          value: "3.1",
          unit: "×",
          title: "higher enquiry rate",
          body: "Median uplift in conversion rate vs the previous site, measured 6 weeks post-launch.",
        },
        {
          kicker: "Time-to-live",
          value: "6",
          unit: "weeks",
          title: "from kick-off to launch",
          body: "Median for standard sprints. Plus 2 weeks if extensive content needs producing.",
        },
      ],
    },
    methodology: {
      eyebrow: "How we do it",
      headlineMain: "Four phases.",
      headlineSub: "Conversion before pixels.",
      intro:
        "Website methodology at Digital Movement: define conversion architecture first, then design visually. Never the reverse. Whoever starts with pixels loses.",
      phases: [
        {
          kicker: "Phase 1 · Week 1",
          title: "Discovery & conversion plan",
          body: "We understand your audience, conversion paths and competition. Before anything is designed, the plan is in place.",
          bullets: [
            "Stakeholder interviews and audience mapping",
            "Conversion architecture (wireframes)",
            "Content inventory and plan",
            "SEO and tech briefing",
          ],
        },
        {
          kicker: "Phase 2 · Week 2–3",
          title: "Design & prototyping",
          body: "High-fidelity design in our or your brand system. Mobile-first, accessibility-compliant, conversion-led.",
          bullets: [
            "Mobile-first design (375 px → 1440 px)",
            "Interactive prototype (Figma)",
            "Accessibility check (WCAG 2.2 AA)",
            "2 review rounds with you",
          ],
        },
        {
          kicker: "Phase 3 · Week 4–5",
          title: "Build & content",
          body: "We build on platforms you can edit yourself — Webflow, Framer, or a custom stack if needed. Content in parallel.",
          bullets: [
            "Platform build (Webflow / Framer / custom)",
            "Content production in parallel",
            "Schema.org and SEO cleanly integrated",
            "Tracking (GA4 + Tag Manager) from day one",
          ],
        },
        {
          kicker: "Phase 4 · Week 6",
          title: "QA & launch",
          body: "Cross-browser, mobile, speed, accessibility. Plus handover — you get a 30-min video tutorial on how to edit yourself.",
          bullets: [
            "Cross-browser and device testing",
            "Speed optimisation (Core Web Vitals)",
            "Launch checklist (DNS, SSL, redirects)",
            "Handover and editing tutorial",
          ],
        },
      ],
    },
    deliverables: {
      eyebrow: "What you get",
      headlineMain: "Three pillars.",
      headlineSub: "All-in.",
      intro:
        "Fixed price. A complete website incl. design, build, content production and launch — no add-ons, no setup surprise.",
      columns: [
        {
          title: "Strategy",
          items: [
            "Discovery & stakeholder interviews",
            "Conversion architecture and wireframes",
            "Content and SEO plan",
            "NZ competitor analysis",
            "Tech-stack recommendation",
          ],
        },
        {
          title: "Execution",
          items: [
            "Mobile-first design (Figma)",
            "Platform build (Webflow / Framer / custom)",
            "Content production (copy, photos, video)",
            "Schema.org and SEO integration",
            "Tracking setup (GA4 + Tag Manager)",
          ],
        },
        {
          title: "Launch & aftercare",
          items: [
            "Cross-browser and mobile QA",
            "Core Web Vitals optimisation",
            "Launch checklist (DNS, SSL, redirects)",
            "Editing tutorial (30-min video)",
            "30 days bug-fix support post-launch",
          ],
        },
      ],
    },
    process: {
      eyebrow: "The 6-week sprint",
      headlineMain: "Four milestones.",
      headlineSub: "Fast, clean, documented.",
      intro:
        "Standard sprint takes 6 weeks. What happens each week is below — no black box.",
      steps: [
        { eta: "Week 1", title: "Discovery", body: "Stakeholder interviews, conversion plan, content inventory." },
        { eta: "Week 2–3", title: "Design", body: "Mobile-first design in Figma. 2 review rounds, accessibility check." },
        { eta: "Week 4–5", title: "Build & content", body: "Platform build, content production, tracking set up cleanly." },
        { eta: "Week 6", title: "Launch", body: "QA, speed optimisation, launch and handover incl. editing tutorial." },
      ],
    },
    stack: {
      eyebrow: "Tech stack",
      headlineMain: "What we build with.",
      headlineSub: "What you can edit yourself.",
      intro:
        "We build on platforms you can maintain — no WordPress plugin hell, no custom black box only we can open.",
      items: [
        { name: "Webflow", body: "Default for marketing websites — visually editable, fast, SEO-friendly." },
        { name: "Framer", body: "When motion design is a priority." },
        { name: "Custom (Vite + React + Tailwind)", body: "For e-commerce, complex apps, or specific performance targets." },
        { name: "Figma", body: "Design source of truth — you get the file, it's yours." },
        { name: "GA4 + Tag Manager", body: "Tracking from day one cleanly set up, server-side where needed." },
        { name: "Cloudinary / Sanity", body: "Asset management and headless CMS, when content volume justifies it." },
      ],
    },
    faq: {
      eyebrow: "Common questions",
      headlineMain: "Asked straight.",
      headlineSub: "Answered straight.",
      intro: "What NZ owners ask most often before starting a website project.",
      items: [
        { q: "How long does a typical project take?", a: "Standard sprint 6 weeks. Plus 2 weeks if we produce extensive new content. Larger e-commerce builds can be 8–12 weeks — we'll tell you that up front." },
        { q: "Which platform do you recommend?", a: "Webflow is our default for marketing websites. Framer for motion-heavy brands. Custom React when performance or complexity demand it. We recommend what fits you — not us." },
        { q: "Can I maintain the site myself?", a: "Yes, that's standard. You get editing access and a 30-min video tutorial. With Webflow/Framer you can change copy, images and pages yourself." },
        { q: "What happens to my old site?", a: "We do a 301-redirect mapping so no SEO trust is lost. Plus a backup, in case you want to roll back." },
        { q: "What if I want changes after launch?", a: "30 days bug-fix support are included in the fixed price. After that: monthly care packages or hourly — you decide." },
        { q: "What about SEO — will the new site rank?", a: "We build SEO-first — Schema.org, Core Web Vitals, clean URL structure, content strategy from day one. If you want to actively rank, we add our SEO sprint on top." },
        { q: "What's the cost difference between custom and Webflow?", a: "Fixed-price range starts at NZ$22,000 (Webflow marketing site) and can go to NZ$90,000+ (custom React/e-commerce). We give you a concrete number in the consultation." },
      ],
    },
    leadMagnet: {
      eyebrow: "Before you decide",
      headline: "Free Speed & Conversion Report.",
      body: "We analyse your current website on Core Web Vitals, mobile performance and conversion architecture. You get a one-page report with the three highest-impact levers — whether you build with us or not.",
      bullets: [
        "Core Web Vitals measurement (LCP, CLS, INP)",
        "Mobile performance audit",
        "Top 3 conversion levers prioritised",
        "No sales pitch required",
      ],
      cta: "Request speed report",
      note: "In your inbox within 24 working hours.",
    },
    finalCta: {
      eyebrow: "Ready?",
      headlineMain: "30 minutes.",
      headlineSub: "Website plan on one page.",
      body: "Free consultation with a senior strategist. We review your current site live, and you get a sprint plan on one page. No sales pitch.",
      primary: "Book a consultation",
    },
  },
};
