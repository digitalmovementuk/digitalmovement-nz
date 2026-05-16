// Service-page content for the four service routes.
// Aligned to the Digital Movement NZ brand voice — 5-star rated agency,
// guaranteed real results, plain English, NZ businesses.

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
    items: { name: string; body: string; logo?: string }[];
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
      title: "SEO for NZ businesses · Digital Movement",
      description:
        "Google Page 1 in just 90 days, guaranteed. Technical SEO, local SEO, national SEO, content writing and web design from a 5-star rated NZ agency.",
    },
    hero: {
      eyebrow: "Search engine optimisation · for NZ businesses",
      headlineTop: "Google Page 1",
      headlineBottom: "in just 90 days.",
      sub: "Let us show you how our 5-star rated web design and SEO agency in New Zealand can guarantee your business a page 1 position in Google Search results in just 90 days.",
      primaryCta: "Get your FREE SEO audit",
      secondaryCta: "Book a consultation",
      chips: ["Technical SEO", "Local SEO", "National SEO", "Content writing", "Web design"],
      video: "video/seo-logo.mp4",
    },
    whatItIs: {
      eyebrow: "What we do",
      headlineMain: "Turn visibility into profit.",
      headlineSub: "Tangible growth, not just rankings.",
      paragraphs: [
        "Gain clear, measurable ROI by turning Google Search visibility into qualified leads that deliver sustained revenue growth.",
        "At Digital Movement, we operate as a trusted SEO agency in New Zealand focused on delivering tangible business growth, not just improved rankings. Our expertise lies in creating SEO strategies that generate meaningful returns on investment by attracting the right audience and converting increased visibility into qualified leads, higher website engagement, and long-term brand value.",
        "We understand that effective SEO must directly support your business goals. Our comprehensive campaigns position your business prominently in high-value organic searches, increase discoverability among customers ready to buy, and drive sustained revenue growth — combining technical excellence, strategic content and conversion optimisation.",
        "With Digital Movement, you gain a proactive partner that manages every aspect of your SEO strategy with precision and transparency. Our all-inclusive packages remove uncertainty and give you confidence that your online growth is fully supported.",
      ],
      audience:
        "Built for Kiwi business owners who want measurable growth — not vanity rankings or 30-page reports.",
    },
    outcomes: {
      eyebrow: "What you gain",
      headlineMain: "Feel your business grow.",
      headlineSub: "Achieve your goals with confidence.",
      intro:
        "Take advantage of intelligently executed SEO strategies designed to deliver business growth that you'll feel right away — backed by proven methodology, clarity and performance.",
      items: [
        {
          kicker: "Visibility",
          value: "Page 1",
          unit: "in 90 days",
          title: "Secure stronger visibility",
          body: "We guarantee your business a page 1 position in high-value Google Search results in just 90 days.",
        },
        {
          kicker: "Audience",
          value: "Right",
          unit: "buyers",
          title: "Reach customers ready to buy",
          body: "We attract the audiences most likely to convert — qualified visitors, not vanity traffic.",
        },
        {
          kicker: "Authority",
          value: "Real",
          unit: "trust",
          title: "Establish credibility in your industry",
          body: "High-quality content that builds trust, drives action and grows sales through consistent, qualified traffic.",
        },
      ],
    },
    methodology: {
      eyebrow: "How we do it",
      headlineMain: "Our SEO cornerstones.",
      headlineSub: "Four pillars of consistent results.",
      intro:
        "At Digital Movement, the success of your SEO strategy is built on four powerful cornerstones — passion, planning, implementation and accountability.",
      phases: [
        {
          kicker: "01 · Cornerstone",
          title: "A passionate & results-driven team",
          body: "Gain a team of proven SEO experts whose passion is to help your business grow by delivering meaningful results. We bring strategic thinking, technical expertise and a performance mindset to every project — all directed towards helping your business grow.",
          bullets: [
            "Senior NZ specialists on every account",
            "Strategic thinking, not just task ticking",
            "Genuine partnership, not a service desk",
            "Care, attention and dedication built in",
          ],
        },
        {
          kicker: "02 · Cornerstone",
          title: "A detailed roadmap for success",
          body: "Create data-led strategies that give your business clarity, adaptability, and lasting results. Every decision is guided by data, ensuring your digital marketing efforts are focused on actions that deliver meaningful, long-term outcomes.",
          bullets: [
            "A detailed understanding of your position and growth potential",
            "A practical roadmap designed for measurable progress",
            "Transparency and accountability every step of the way",
            "Proven methods that consistently deliver reliable results",
          ],
        },
        {
          kicker: "03 · Cornerstone",
          title: "Impeccable strategy implementation",
          body: "Every SEO campaign is implemented through a structured framework that ensures technical accuracy, strategic alignment, and seamless execution — removing guesswork and replacing it with proven process.",
          bullets: [
            "Technical SEO, content and performance in one workflow",
            "Continuous oversight, testing and refinement",
            "Each task supported by data and clearly defined objectives",
            "Strategy not only well-designed, but flawlessly executed",
          ],
        },
        {
          kicker: "04 · Cornerstone",
          title: "Clear tracking of progress & wins",
          body: "Complete transparency and accountability by tracking meaningful SEO metrics and results at every stage. From the outset, we establish measurable targets aligned with your business goals.",
          bullets: [
            "Ongoing insight into rankings, traffic quality, engagement and conversions",
            "Data presented in a clear, accessible way",
            "Progress achieved and opportunities ahead, side by side",
            "Continuous refinement to maximise performance",
          ],
        },
      ],
    },
    deliverables: {
      eyebrow: "What you get",
      headlineMain: "Three pillars.",
      headlineSub: "All-inclusive, no surprises.",
      intro:
        "Fixed monthly price. No setup surprise. Everything below is included — and every month after, as long as you want to keep growing.",
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
            "Authority building & quality links",
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
      eyebrow: "The 90-day journey",
      headlineMain: "Four milestones.",
      headlineSub: "Clear, honest, on-record.",
      intro:
        "What happens on day 1, 30, 60 and 90. We say it up front, we stick to it, and we show you the maths every month.",
      steps: [
        { eta: "Day 1", title: "Audit & kick-off", body: "Free SEO audit in your inbox. A 60-min strategy call. You understand exactly where you stand and what's next." },
        { eta: "Day 30", title: "Foundation in place", body: "Technical SEO clean. First content pages live. Tracking running, data flowing." },
        { eta: "Day 60", title: "Climbing the rankings", body: "First commercial keywords reach the top of page 2 / bottom of page 1. Pipeline starts filling." },
        { eta: "Day 90", title: "Page 1 on Google", body: "Your guaranteed page 1 position is live. From here on, monthly continuation — no lock-in." },
      ],
    },
    stack: {
      eyebrow: "Tools & standards",
      headlineMain: "What we work with.",
      headlineSub: "Industry standard, cleanly integrated.",
      intro:
        "Industry-standard tools, cleanly integrated. You keep every account and every access — even if you eventually want to continue without us.",
      items: [
        { name: "Google Search Console", body: "Source of truth for rankings, clicks, indexation.", logo: "googlesearchconsole" },
        { name: "GA4 + Tag Manager", body: "Conversion tracking set up cleanly — server-side where it matters.", logo: "googleanalytics" },
        { name: "Semrush", body: "Backlink monitoring, competitor analysis, keyword research.", logo: "semrush" },
        { name: "Screaming Frog", body: "Technical audits, crawler diagnostics, site-structure mapping." },
        { name: "Schema.org", body: "Structured data — LocalBusiness, Service, FAQ, Organization.", logo: "schema" },
        { name: "PageSpeed Insights / Lighthouse", body: "Core Web Vitals, speed optimisation, mobile-first audits.", logo: "lighthouse" },
      ],
    },
    faq: {
      eyebrow: "Common questions",
      headlineMain: "Asked straight.",
      headlineSub: "Answered straight.",
      intro: "What we hear most often from NZ business owners before they book their free audit.",
      items: [
        { q: "How fast will I see results?", a: "Ranking movement in the first 2–4 weeks. We guarantee your business a page 1 position in Google Search results in just 90 days. Real enquiry uplift typically follows from there." },
        { q: "What's included in the fixed price?", a: "Everything under \"What you get.\" No add-ons, no setup fee, no upcharges for \"more content\" or \"more links.\" Unbelievable prices and inclusions for every client." },
        { q: "Is there a minimum term?", a: "We work month-to-month after a short minimum term to set things up properly. If we're not delivering, you can leave. We'd rather earn the next month than trap you in it." },
        { q: "Who actually does the work?", a: "Senior NZ specialists — the people you meet in the consultation do the work. No account-manager ping-pong, no juniors learning on your behalf." },
        { q: "How does SEO sit alongside Google Ads?", a: "Very well — we often run both in parallel. SEO builds long-term visibility; Ads buy short-term traffic. When both are clean, you get a pipeline that doesn't stop growing." },
        { q: "Can you guarantee results in my industry?", a: "We guarantee page 1 on Google within 90 days. If after the audit we don't believe SEO is the right lever for your business, we'll tell you that — straight up." },
        { q: "What happens after the 90 days?", a: "You decide. Most clients stay monthly because growth compounds from there. You keep all access, all data, all content — even if you stop tomorrow." },
      ],
    },
    leadMagnet: {
      eyebrow: "Before you decide",
      headline: "Get your FREE SEO audit.",
      body: "We audit your site against 50+ technical and content factors and send you a one-page plain-English report. What's broken, what's working, and the three highest-impact next levers — whether you work with us or not.",
      bullets: [
        "One-page audit by email in 24 hours",
        "30-minute Loom walkthrough",
        "Concrete next steps, prioritised",
        "No obligations, so no worries",
      ],
      cta: "Get your FREE SEO audit",
      note: "Lands in your inbox within 24 working hours. No spam, no obligation.",
    },
    finalCta: {
      eyebrow: "Talk to us",
      headlineMain: "Let us show you",
      headlineSub: "how we deliver real results.",
      body: "Get in touch to find out how you can grow your business with a 5-star rated digital marketing agency in New Zealand that guarantees real results.",
      primary: "Get your free audit",
    },
  },

  googleAds: {
    slug: "google-ads",
    meta: {
      title: "Google Ads for NZ businesses · Digital Movement",
      description:
        "More net profit with smarter Google Ads. Search Ads, Performance Max, conversion tracking and landing page tuning from a 5-star rated NZ agency.",
    },
    hero: {
      eyebrow: "Google Ads · for NZ businesses",
      headlineTop: "More net profit",
      headlineBottom: "with smarter Google Ads.",
      sub: "Let us show you how our 5-star rated Google Ads agency in New Zealand can deliver near-instant ROI through intelligently designed and executed Google Ads campaigns.",
      primaryCta: "Get your FREE consult",
      secondaryCta: "Book a consultation",
      chips: ["Search Ads", "Performance Max", "Conversion tracking", "Landing page creation & tuning"],
      video: "video/google-ads-logo.mp4",
    },
    whatItIs: {
      eyebrow: "What we do",
      headlineMain: "Deliver near-instant",
      headlineSub: "return on your investment.",
      paragraphs: [
        "Google Ads is one of the fastest ways to generate strong returns on investment. Talk to us and we'll show you how we've helped businesses grow faster through smarter Google Ads campaigns.",
        "If you haven't spoken with our team about how Google Ads could help launch your business into online success, then you are simply missing out on huge amounts of potential profit every day. Google Ads gives you an opportunity to get ahead of your competitors by appearing front and centre in your target audience's search results.",
        "Our team are experts at maximising campaign profitability by weeding out wasted clicks and focusing on converting website visits into high-quality leads that generate new business for our clients. We go more than the extra mile to deliver real results.",
        "By using our years of Google Ads experience, we build campaigns that ensure your business is being found by the right customers, in the right locations. We continuously optimise all of our campaigns so you can sit back and relax while our team takes care of getting your business found online.",
      ],
      audience:
        "Built for Kiwi business owners who put net profit over reach — not brand campaigns, but enquiry pipelines.",
    },
    outcomes: {
      eyebrow: "What you gain",
      headlineMain: "Four ways to supercharge",
      headlineSub: "your bottom line.",
      intro:
        "There are four key Google Ads services that can significantly increase net profit for your business. If you want to understand how each one works, all you have to do is ask. We're here for you.",
      items: [
        {
          kicker: "Reach",
          value: "Front",
          unit: "& centre",
          title: "Google Ads Management",
          body: "Greater brand awareness in a snap, faster results, and Ads that work alongside your longer-term SEO initiatives.",
        },
        {
          kicker: "Recall",
          value: "2nd",
          unit: "chance",
          title: "Google Remarketing",
          body: "Give potential customers a second chance to buy, keep your brand top of mind, and gain valuable brand exposure.",
        },
        {
          kicker: "Volume",
          value: "90%",
          unit: "of users",
          title: "Google Display & Shopping",
          body: "Reach 90% of internet users via the Display Network, or place your products on top of organic Google searches with Shopping.",
        },
      ],
    },
    methodology: {
      eyebrow: "How we do it",
      headlineMain: "How your sales will skyrocket.",
      headlineSub: "Four channels, one engine.",
      intro:
        "Want to see a dramatic increase in sales? With Digital Movement, you can utilise our proven expertise in executing Google Ads campaigns that deliver near-instant return on investment.",
      phases: [
        {
          kicker: "01 · Channel",
          title: "Effective Google Ads Management",
          body: "Google Ads is a major player in the internet paid advertising arena. That's why it's critical to do it right for it to be truly effective. Draw on our extensive experience and proven systems for success.",
          bullets: [
            "Greater brand awareness in a snap",
            "Get to the results stage super quick",
            "Works hand-in-hand with longer-term SEO",
            "Continuously optimised by our specialists",
          ],
        },
        {
          kicker: "02 · Channel",
          title: "Second chances with Google Remarketing",
          body: "Google Remarketing is like giving internet users a gentle tap on the shoulder to remind them to revisit your website. They might continue their abandoned purchase, sign up to your newsletter, or fire off an enquiry.",
          bullets: [
            "Give potential customers a second chance to buy",
            "Keep your brand top of mind for internet users",
            "Help you gain valuable brand exposure",
            "Convert almost-customers into paying ones",
          ],
        },
        {
          kicker: "03 · Channel",
          title: "Visibility with Google Display Network",
          body: "The Google Display Network is huge and is seen by 90% of internet users at any time. That's incredible exposure — sitting right there waiting for you to take advantage of it.",
          bullets: [
            "Targets specific audiences for better ROI",
            "Large amount of exposure across a range of websites",
            "Passive yet subliminally effective advertising",
            "Designed and executed by our specialists",
          ],
        },
        {
          kicker: "04 · Channel",
          title: "Target buyers with Google Shopping",
          body: "Google Shopping Management places your product adverts on top of organic Google searches. That's prime real estate right there — particularly useful for retail stores and ecommerce sites.",
          bullets: [
            "Budget closely monitored within limits",
            "Achieve digital marketing outcomes via a different route",
            "Reveal your products to users making relevant searches",
            "Maximum visibility, controlled spend",
          ],
        },
      ],
    },
    deliverables: {
      eyebrow: "What you get",
      headlineMain: "Three pillars.",
      headlineSub: "All-inclusive.",
      intro:
        "Fixed monthly price, all ad budgets in your account. We don't earn on your ad spend — we earn on results.",
      columns: [
        {
          title: "Strategy",
          items: [
            "Account & tracking audit",
            "Campaign architecture",
            "Landing-page conversion plan",
            "NZ competitor analysis",
            "Budget and ROAS model",
          ],
        },
        {
          title: "Execution",
          items: [
            "Search & Performance Max campaign builds",
            "Landing-page creation & tuning",
            "Conversion tracking (GA4 + server-side)",
            "Weekly search-term trimming",
            "Ad & asset production",
          ],
        },
        {
          title: "Reporting",
          items: [
            "Live dashboard (ROAS, CPL, conversions)",
            "Monthly plain-English report",
            "Direct line to your specialist",
            "No account-manager ping-pong",
            "Clear wins, clear next steps",
          ],
        },
      ],
    },
    process: {
      eyebrow: "Your 90-day journey",
      headlineMain: "Four milestones.",
      headlineSub: "Cash, not clicks.",
      intro:
        "What happens on day 1, 30, 60 and 90. We say it up front, we stick to it, and we show the ROAS maths every month.",
      steps: [
        { eta: "Day 1", title: "Audit & kick-off", body: "Free Google Ads consult. We map out the campaign architecture and conversion plan." },
        { eta: "Day 30", title: "Campaigns live", body: "Search + Performance Max running. Conversion tracking clean. First data flowing in." },
        { eta: "Day 60", title: "ROAS stabilising", body: "Waste trimmed, quality score up, ROAS settling in above target." },
        { eta: "Day 90", title: "Profitable & scaling", body: "Profitable campaigns scaled. From here on, monthly optimisation — no lock-in." },
      ],
    },
    stack: {
      eyebrow: "Tools & standards",
      headlineMain: "What we work with.",
      headlineSub: "Industry standard, cleanly integrated.",
      intro:
        "You keep every account and every access — even if you continue without us. No lock-in.",
      items: [
        { name: "Google Ads", body: "Search, Performance Max, remarketing — all under your account.", logo: "googleads" },
        { name: "GA4 + Tag Manager", body: "Conversion tracking clean, server-side where it counts.", logo: "googleanalytics" },
        { name: "Google Merchant Center", body: "For e-commerce clients — Shopping Ads cleanly integrated.", logo: "google" },
        { name: "Looker Studio", body: "Live dashboard you can open on your phone.", logo: "looker" },
        { name: "CallRail / Hyros", body: "Call-tracking and multi-touch attribution for high-ticket industries." },
        { name: "Auction Insights", body: "Competitor visibility — who's bidding what, where.", logo: "google" },
      ],
    },
    faq: {
      eyebrow: "Common questions",
      headlineMain: "Asked straight.",
      headlineSub: "Answered straight.",
      intro: "What Kiwi business owners ask most often before they release Ads budget.",
      items: [
        { q: "How much ad spend do I need?", a: "Depends on your industry and CPL. We typically recommend NZ$2,000–NZ$8,000 / month to start. The consult will give you a concrete number based on your market." },
        { q: "Does Digital Movement earn on my ad budget?", a: "No. All budgets run directly through your Google Ads account. We earn a fixed monthly fee — whether your budget is small or large. Incentive: results, not volume." },
        { q: "How fast will I see enquiries?", a: "With a clean setup, often within the first 14 days. Scaling to stable ROAS typically takes 60–90 days." },
        { q: "What if ROAS stays below target?", a: "We meet weekly and adjust. If after 60 days it's clear the market potential isn't enough, we'll tell you honestly — and end the sprint instead of burning your budget." },
        { q: "Who writes the ads?", a: "We do. Including A/B test variants and asset production for Performance Max. You approve, we ship." },
        { q: "What about Performance Max — does it work?", a: "Yes, when you know what you're doing. Tightly scoped asset groups, account-level negative keywords, clean conversion tracking. Otherwise PMax eats budget and delivers vanity conversions." },
        { q: "What happens after the 90 days?", a: "Monthly continuation. You can pause anytime. All accounts and data are yours." },
      ],
    },
    leadMagnet: {
      eyebrow: "Before you invest",
      headline: "Get your FREE Google Ads consult.",
      body: "We open your Google Ads account (read-only) and find the three biggest waste hot-spots. A one-page plain-English report with concrete levers you can implement immediately — whether you work with us or not.",
      bullets: [
        "Waste analysis of your active account",
        "Top 3 quick wins prioritised",
        "30-minute Loom walkthrough",
        "No obligations, so no worries",
      ],
      cta: "Get your FREE consult",
      note: "In your inbox within 48 working hours. Read-only access is enough.",
    },
    finalCta: {
      eyebrow: "Talk to us",
      headlineMain: "Let us show you",
      headlineSub: "how we deliver real results.",
      body: "Get in touch to find out how you can grow your business with a 5-star rated digital marketing agency in New Zealand that guarantees real results.",
      primary: "Get your free audit",
    },
  },

  socialMedia: {
    slug: "social-media",
    meta: {
      title: "Social Media for NZ businesses · Digital Movement",
      description:
        "Grow your business through meaningful engagement. Paid social ads, content creation and posting plans from a 5-star rated NZ social media marketing agency.",
    },
    hero: {
      eyebrow: "Social media · for NZ businesses",
      headlineTop: "Growth through",
      headlineBottom: "meaningful engagement.",
      sub: "Let us show you how our 5-star rated social media marketing agency in New Zealand can help you turn interested social media users into engaged followers and loyal brand advocates.",
      primaryCta: "Get your FREE consult",
      secondaryCta: "Book a consultation",
      chips: ["Paid social ads", "Content creation", "Posting plan"],
      video: "video/socials-logo.mp4",
    },
    whatItIs: {
      eyebrow: "Why do social media",
      headlineMain: "Social media matters",
      headlineSub: "more than ever.",
      paragraphs: [
        "Social media marketing has rapidly become one of the most influential forces in digital marketing — but what does it really do for your business?",
        "Think of your website as your headquarters, and social media as the ongoing conversation that builds trust, rapport, and recognition. As a leading social media marketing agency in New Zealand, we use these platforms to give your brand a clear voice, a strong personality, and consistent visibility where your audience spends their time.",
        "At Digital Movement, we help businesses move beyond just another name online. Through strategic social media marketing, we showcase who you are, what you stand for, and why customers should choose you.",
        "Much like fans proudly wearing a band's merchandise, social media advertising spreads your message far and wide, turning interested users into engaged followers and loyal brand advocates. If you're unsure how to make this happen, that's exactly where we step in.",
      ],
      audience:
        "Built for Kiwi brands that use social as a sales channel — not as a PR stage.",
    },
    outcomes: {
      eyebrow: "What you gain",
      headlineMain: "Make socials",
      headlineSub: "work for you.",
      intro:
        "Social media platforms such as Facebook, Instagram, and LinkedIn give businesses unparalleled access to targeted audiences. When used correctly, they allow you to reach the right people with the right message at exactly the right moment.",
      items: [
        {
          kicker: "Visibility",
          value: "Brand",
          unit: "growth",
          title: "Increase brand visibility & recognition",
          body: "Develop a strong, consistent brand personality and drive more high-quality traffic to your website.",
        },
        {
          kicker: "Engagement",
          value: "Loyal",
          unit: "fans",
          title: "Improve engagement & build loyalty",
          body: "Better algorithm performance, long-term brand loyalty, and an audience that genuinely cares.",
        },
        {
          kicker: "Conversion",
          value: "Real",
          unit: "leads",
          title: "Convert followers into customers",
          body: "Pump up conversion rates, position your business as an industry authority, and achieve results through a cost-effective channel.",
        },
      ],
    },
    methodology: {
      eyebrow: "How we do it",
      headlineMain: "Our proven social media",
      headlineSub: "marketing approach.",
      intro:
        "Want more enquiries from the people most likely to work with you? Our structured and data-driven approach ensures your message reaches audiences that matter. At Digital Movement, social media marketing is not about noise — it's about relevance, timing, and strategy.",
      phases: [
        {
          kicker: "01 · Approach",
          title: "Meet the team behind the strategy",
          body: "Our team is made up of experienced digital strategists, creatives, and analysts who live and breathe social media marketing. From the moment you get in touch, we take time to understand your business, your goals, and your current digital performance.",
          bullets: [
            "Deep audit of your website and social channels",
            "Advanced analytics tools, real insights",
            "Years of real-world experience applied to your account",
            "We aim for meaningful growth — not vanity",
          ],
        },
        {
          kicker: "02 · Approach",
          title: "Planning & strategy that delivers direction",
          body: "Without a clear strategy, results quickly stall. That's why planning sits at the heart of everything we do. This is how we create momentum — and maintain it.",
          bullets: [
            "In-depth discussions around your current performance and objectives",
            "Data-led insights from professional analytics tools",
            "A clear roadmap to achieve your goals",
            "Full transparency throughout every stage",
            "Seamless alignment with your wider digital marketing strategy",
          ],
        },
        {
          kicker: "03 · Approach",
          title: "Campaign implementation & creative design",
          body: "Once your strategy is set, we will bring it to life. At this stage, we design and deploy tailored social media campaigns built specifically for your brand and audience.",
          bullets: [
            "We understand platforms, trends and algorithms inside out",
            "Campaigns designed to capture attention",
            "Built to encourage interaction",
            "Driving real, measurable action",
          ],
        },
        {
          kicker: "04 · Approach",
          title: "Clear & tangible results you can measure",
          body: "This is where strategy turns into tangible success. From increased brand awareness and engagement to consistent inbound leads and improved credibility, our clients see real, measurable outcomes.",
          bullets: [
            "Real uplift in inbound enquiries",
            "Increased credibility within your industry",
            "Stronger engagement, better algorithm performance",
            "Outcomes you can read off a dashboard",
          ],
        },
      ],
    },
    deliverables: {
      eyebrow: "What you get",
      headlineMain: "Three pillars.",
      headlineSub: "All-inclusive.",
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
            "Monthly plain-English report",
            "Direct line to your specialist",
            "No account-manager ping-pong",
            "Clear wins, clear next steps",
          ],
        },
      ],
    },
    process: {
      eyebrow: "Your 90-day journey",
      headlineMain: "Four milestones.",
      headlineSub: "Enquiries, not followers.",
      intro:
        "What happens on day 1, 30, 60 and 90. We say it up front — and then we deliver.",
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
        { name: "Meta Business Suite", body: "Instagram + Facebook organic and paid, pixel tracking clean.", logo: "meta" },
        { name: "TikTok Ads Manager", body: "Short-form video for younger audiences or volume plays.", logo: "tiktok" },
        { name: "LinkedIn Campaign Manager", body: "B2B lead-gen with tightly scoped audiences.", logo: "linkedin" },
        { name: "YouTube Studio + YouTube Ads", body: "Long-form authority and pre-roll targeting.", logo: "youtube" },
        { name: "GA4 + Tag Manager", body: "Cross-platform conversion tracking, cleanly attributed.", logo: "googleanalytics" },
        { name: "CapCut + Premiere", body: "Production stack for short-form video — fast, polished, scalable.", logo: "adobepremierepro" },
      ],
    },
    faq: {
      eyebrow: "Common questions",
      headlineMain: "Asked straight.",
      headlineSub: "Answered straight.",
      intro: "What Kiwi owners ask most often before they release social budget.",
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
      headline: "Get your FREE social media consult.",
      body: "We audit your platforms and audience to spot the three highest-impact moves you can make right now. A one-page plain-English report with concrete levers — whether you work with us or not.",
      bullets: [
        "Platform-by-platform audit",
        "Audience & content recommendations",
        "30-minute Loom walkthrough",
        "No obligations, so no worries",
      ],
      cta: "Get your FREE consult",
      note: "In your inbox within 48 working hours. No spam, no obligation.",
    },
    finalCta: {
      eyebrow: "Talk to us",
      headlineMain: "Let us show you",
      headlineSub: "how we deliver real results.",
      body: "Get in touch to find out how you can grow your business with a 5-star rated digital marketing agency in New Zealand that guarantees real results.",
      primary: "Get your free audit",
    },
  },

  websites: {
    slug: "websites",
    meta: {
      title: "Web Design for NZ businesses · Digital Movement",
      description:
        "Gain more loyal customers with world-class web design. Mobile-first, conversion-optimised websites built to deliver paying customers — not just traffic.",
    },
    hero: {
      eyebrow: "Web design · for NZ businesses",
      headlineTop: "More customers",
      headlineBottom: "with world-class web design.",
      sub: "Let us show you how our 5-star rated web design agency in New Zealand can help you build websites that deliver paying customers, not just traffic.",
      primaryCta: "Get your FREE consult",
      secondaryCta: "Book a consultation",
      chips: ["Mobile-first design", "Conversion architecture", "SEO-ready from day one", "You can edit it"],
      video: "video/website-logo.mp4",
    },
    whatItIs: {
      eyebrow: "What we do",
      headlineMain: "Make your business stand out",
      headlineSub: "with a world-class website.",
      paragraphs: [
        "Your website is often the first impression people form of your business, and it needs to count. At Digital Movement, we design high-performing websites that don't just look exceptional but actively help you outperform competitors online.",
        "As an experienced web design agency in New Zealand, our team combines strategic thinking, creative design, and conversion-focused development to create websites that elevate your brand and support real business growth. Every project we deliver is built to impress your audience, reinforce trust, and encourage action.",
        "Today's customers search online before making decisions, which means your business must be visible, credible, and compelling from the very first click. Our focus is simple: to give your business the exposure it deserves and turn that visibility into consistent, high-quality leads that deliver a strong return on your website investment.",
        "At Digital Movement, we care about outcomes, not just aesthetics. As a results-driven web design agency in New Zealand, we ensure every website we create is built around improved search visibility, clear pathways to conversion, consistent traffic, increased brand recognition, and — most importantly — measurable business growth.",
      ],
      audience:
        "Built for Kiwi businesses that treat their website as a sales asset — not as a mandatory online presence.",
    },
    outcomes: {
      eyebrow: "What you gain",
      headlineMain: "Growth with a dramatic",
      headlineSub: "increase in sales.",
      intro:
        "A well-structured website is one of the most powerful tools your business can own. Think of it as your digital home — open 24/7, welcoming potential customers and guiding them towards taking action.",
      items: [
        {
          kicker: "Visibility",
          value: "Better",
          unit: "rankings",
          title: "Improved organic search visibility",
          body: "Built SEO-first so your site supports search engine optimisation and ranks better from day one.",
        },
        {
          kicker: "Conversion",
          value: "Clear",
          unit: "pathways",
          title: "Convert visitors into qualified leads",
          body: "Designed around conversion architecture, with clear pathways that turn traffic into real enquiries.",
        },
        {
          kicker: "Growth",
          value: "Real",
          unit: "ROI",
          title: "Measurable business growth",
          body: "Increased brand recognition, consistent meaningful traffic, and measurable business growth and ROI.",
        },
      ],
    },
    methodology: {
      eyebrow: "How we do it",
      headlineMain: "A web design process",
      headlineSub: "that delivers results.",
      intro:
        "We believe successful websites start with smart planning. Before design begins, we invest time in strategy because cutting corners at this stage often leads to poor performance and costly rebuilds. As a trusted web design agency in New Zealand, we do the groundwork properly so your website performs well from day one.",
      phases: [
        {
          kicker: "01 · Pillar",
          title: "A complete end-to-end web design service",
          body: "We offer a fully managed, start-to-finish web design service that removes stress and uncertainty from the process. From initial strategy to final launch, we work closely with you to ensure your website aligns perfectly with your business goals.",
          bullets: [
            "Strategic planning and site architecture",
            "Professional design and engaging content",
            "Ongoing communication and dedicated account management",
            "A trusted partner — not just a website designer",
          ],
        },
        {
          kicker: "02 · Pillar",
          title: "A high-performing website designed around your success",
          body: "We've brought together a highly skilled team of designers, developers, and digital strategists who are committed to delivering outstanding results. Your success is our success — that's why every website is built with long-term performance in mind.",
          bullets: [
            "A team you can rely on",
            "Clear communication, promises kept",
            "Long-term performance baked in",
            "Designed around real business outcomes",
          ],
        },
        {
          kicker: "03 · Pillar",
          title: "A seamless combination of aesthetics & performance",
          body: "We seamlessly combine striking aesthetics with powerful performance. True success lies beneath the surface — in speed, usability, and conversion-focused structure. Your website should not only look impressive, but load quickly and function flawlessly across all devices.",
          bullets: [
            "Striking design that captures attention",
            "Fast loading on every device",
            "Conversion-focused structure under the hood",
            "Trust, engagement and measurable results",
          ],
        },
        {
          kicker: "04 · Pillar",
          title: "From strategy to launch & beyond",
          body: "Once planning is complete, it's time to bring your website to life. We design and build your site with precision, creativity, and purpose before launching it for the world to see. As your online presence grows, so does your business.",
          bullets: [
            "More enquiries, more sales, stronger brand",
            "Increased traffic and improved search visibility",
            "More leads flowing through consistently",
            "Built to perform today and into the future",
          ],
        },
      ],
    },
    deliverables: {
      eyebrow: "What you get",
      headlineMain: "Three pillars.",
      headlineSub: "All-inclusive.",
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
        { name: "Webflow", body: "Default for marketing websites — visually editable, fast, SEO-friendly.", logo: "webflow" },
        { name: "Framer", body: "When motion design is a priority.", logo: "framer" },
        { name: "Custom (Vite + React + Tailwind)", body: "For e-commerce, complex apps, or specific performance targets.", logo: "react" },
        { name: "Figma", body: "Design source of truth — you get the file, it's yours.", logo: "figma" },
        { name: "GA4 + Tag Manager", body: "Tracking from day one cleanly set up, server-side where needed.", logo: "googleanalytics" },
        { name: "Cloudinary / Sanity", body: "Asset management and headless CMS, when content volume justifies it.", logo: "cloudinary" },
      ],
    },
    faq: {
      eyebrow: "Common questions",
      headlineMain: "Asked straight.",
      headlineSub: "Answered straight.",
      intro: "What Kiwi owners ask most often before starting a website project.",
      items: [
        { q: "How long does a typical project take?", a: "Standard sprint 6 weeks. Plus 2 weeks if we produce extensive new content. Larger e-commerce builds can be 8–12 weeks — we'll tell you that up front." },
        { q: "Which platform do you recommend?", a: "Webflow is our default for marketing websites. Framer for motion-heavy brands. Custom React when performance or complexity demand it. We recommend what fits you — not us." },
        { q: "Can I maintain the site myself?", a: "Yes, that's standard. You get editing access and a 30-min video tutorial. With Webflow/Framer you can change copy, images and pages yourself." },
        { q: "What happens to my old site?", a: "We do a 301-redirect mapping so no SEO trust is lost. Plus a backup, in case you want to roll back." },
        { q: "What if I want changes after launch?", a: "30 days bug-fix support are included in the fixed price. After that: monthly care packages or hourly — you decide." },
        { q: "What about SEO — will the new site rank?", a: "We build SEO-first — Schema.org, Core Web Vitals, clean URL structure, content strategy from day one. If you want to actively rank, we add our 90-day SEO sprint on top." },
        { q: "What's the cost difference between custom and Webflow?", a: "Fixed-price range starts at NZ$22,000 (Webflow marketing site) and can go to NZ$90,000+ (custom React/e-commerce). We give you a concrete number in the consult." },
      ],
    },
    leadMagnet: {
      eyebrow: "Before you decide",
      headline: "Get your FREE web design consult.",
      body: "We analyse your current website on Core Web Vitals, mobile performance and conversion architecture. You get a one-page report with the three highest-impact levers — whether you build with us or not.",
      bullets: [
        "Core Web Vitals measurement (LCP, CLS, INP)",
        "Mobile performance audit",
        "Top 3 conversion levers prioritised",
        "No obligations, so no worries",
      ],
      cta: "Get your FREE consult",
      note: "In your inbox within 24 working hours.",
    },
    finalCta: {
      eyebrow: "Talk to us",
      headlineMain: "Let us show you",
      headlineSub: "how we deliver real results.",
      body: "Get in touch to find out how you can grow your business with a 5-star rated digital marketing agency in New Zealand that guarantees real results.",
      primary: "Get your free audit",
    },
  },
};
