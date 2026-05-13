// All real, brand-specific copy lives here so it's easy to scan and edit.

export const business = {
  name: "Digital Movement",
  tagline: "Page 1 Google in as little as 60 days.",
  // NZ launch — phone is placeholder until the line is set up. Keep the
  // placeholder readable; once the real number lands, swap href to the
  // E.164 form (e.g. tel:+649XXXXXXX).
  phone: "+64 9 XXX XXXX",
  phoneHref: "tel:+6490000000",
  email: "office@digitalmovement.co.nz",
  emailHref: "mailto:office@digitalmovement.co.nz",
  whatsapp: "+64 9 XXX XXXX",
  whatsappHref: "mailto:office@digitalmovement.co.nz",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/digitalmovementnz" },
    { label: "Facebook", href: "https://www.facebook.com/digitalmovementnz" },
  ],
};

export const navLinks = [
  { label: "What we do", href: "#services" },
  { label: "Client cases", href: "#cases" },
  { label: "Numbers", href: "#metrics" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: 8, suffix: "x", label: "Increase in monthly leads" },
  { value: 60, suffix: "", label: "Days to Google page 1" },
];

export const googleRating = {
  rating: 5.0,
  count: 200,
  reviewsUrl: "https://www.google.com/search?q=digital+movement+new+zealand",
};

export const services = [
  {
    key: "seo",
    title: "SEO",
    promise: "Page 1 Google in as little as 60 days.",
    detail:
      "Technical fixes, content that earns clicks, and link building that compounds. We show you the maths each month — what moved, why, and what's next.",
    bullets: ["Technical SEO audit", "Content + on-page", "Authority building", "Monthly maths"],
    video: "video/seo-logo.mp4",
  },
  {
    key: "google-ads",
    title: "Google Ads",
    promise: "ROI-positive paid traffic that prints.",
    detail:
      "Tightly themed campaigns, conversion-tracked landing pages, and weekly waste-trimming. We don't bid on vanity terms — we bid on revenue.",
    bullets: [
      "Search + Performance Max",
      "Conversion tracking",
      "Landing pages built to convert",
      "Weekly optimisation",
    ],
    video: "video/google-ads-logo.mp4",
  },
  {
    key: "social",
    title: "Social Media",
    promise: "Content that drives leads, not vanity metrics.",
    detail:
      "Short-form video, paid social, and creative built for your audience and platform. Followers are nice — booked calls are better.",
    bullets: ["Short-form video", "Paid social", "Creative production", "Lead-led posting plan"],
    video: "video/socials-logo.mp4",
  },
  {
    key: "websites",
    title: "Websites",
    promise: "Conversion-optimised sites built to rank from day one.",
    detail:
      "Fast, modern, mobile-first websites that load quickly, look the part, and turn visitors into enquiries. Built on platforms you can edit yourself.",
    bullets: ["Mobile-first design", "Core Web Vitals", "Built to convert", "You can edit it"],
    video: "video/website-logo.mp4",
  },
];

export const results = [
  {
    metric: "1312%",
    label: "Increase in monthly leads",
    industry: "Cosmetic clinic",
    work: "SEO + Web Design + Google Ads",
    timeline: "Within 4 months",
    quote: "We went from a quiet Monday to a fully booked diary.",
  },
  {
    metric: "1125%",
    label: "Increase in conversions",
    industry: "E-commerce",
    work: "SEO + Web Design",
    timeline: "Within 6 months",
    quote: "Same traffic, more than ten times the orders.",
  },
  {
    metric: "1050%",
    label: "Increase in monthly sales",
    industry: "Online store",
    work: "Web Design",
    timeline: "Within 3 months",
    quote: "The new site paid for itself in the first month.",
  },
  {
    metric: "1796%",
    label: "Increase in organic traffic",
    industry: "Local services",
    work: "Full digital marketing",
    timeline: "Within 8 months",
    quote: "We're now the first thing people see on Google.",
  },
];

export const processSteps = [
  {
    n: "01",
    eta: "Today",
    title: "Audit your site",
    body: "We review your website, current Google rankings, and online presence to find quick wins and growth opportunities.",
  },
  {
    n: "02",
    eta: "Week 1",
    title: "We launch",
    body: "Tracking goes live, landing pages go up, paid campaigns turn on, and on-page SEO fixes ship. You see it all happen.",
  },
  {
    n: "03",
    eta: "Weeks 4–8",
    title: "You see the maths",
    body: "Stronger rankings, real leads, and a monthly report you can actually read. We show you what moved, why, and what's next — every month.",
  },
];

/**
 * Case studies — five NZ clients, each paired with a stock video that
 * reflects the business. Videos live in /public/video/cases/*.mp4.
 */
export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  location: string;
  services: string[];
  timeline: string;
  headline: string;
  body: string;
  metrics: { value: string; label: string }[];
  /** Path under public/, e.g. "video/cases/finance-skyline.mp4" */
  video: string;
  /** Optional poster frame */
  poster?: string;
  /** Tints the video with a faint colour wash so cards keep brand variety */
  accent: "orange" | "pink" | "violet";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "cunos",
    client: "Cunos",
    industry: "Senior finance consultancy",
    location: "Auckland",
    services: ["SEO", "Content", "Web Design"],
    timeline: "5 months",
    headline: "5x consultations from organic search",
    body:
      "An advice-only firm punching below its weight on Google. We built topical authority across KiwiSaver drawdown and estate planning, and shipped a redesign that finally matched the brand.",
    metrics: [
      { value: "5x", label: "Consultations" },
      { value: "7x", label: "Organic traffic" },
      { value: "#1", label: "12 target keywords" },
    ],
    video: "video/cases/finance-skyline.mp4",
    accent: "violet",
  },
  {
    slug: "canterbury-conservatory-roofs",
    client: "Canterbury Conservatory Roofs",
    industry: "Roofing & home improvement",
    location: "Christchurch",
    services: ["Local SEO", "Google Ads"],
    timeline: "3 months",
    headline: "8x more booked jobs per week",
    body:
      "We took a five-page brochure site and turned it into a lead engine. Quote-form changes, GBP optimisation, and a tight Performance Max campaign filled the diary inside a quarter.",
    metrics: [
      { value: "8x", label: "Booked jobs" },
      { value: "$72", label: "Cost per lead" },
      { value: "9/10", label: "Quote-to-job" },
    ],
    video: "video/cases/roofing.mp4",
    accent: "orange",
  },
  {
    slug: "fantastic-finish",
    client: "Fantastic Finish",
    industry: "Commercial cleaning",
    location: "Wellington",
    services: ["SEO", "Web Design", "Google Ads"],
    timeline: "4 months",
    headline: "13x more monthly leads",
    body:
      "A regional commercial cleaner with strong reviews but a near-invisible Google footprint. We rebuilt the site, restructured the service architecture and tightened paid search around high-intent commercial terms.",
    metrics: [
      { value: "13x", label: "More leads" },
      { value: "60", label: "Days to page 1" },
      { value: "8x", label: "ROAS" },
    ],
    video: "video/cases/cleaning.mp4",
    accent: "pink",
  },
  {
    slug: "stride-and-co",
    client: "Stride & Co.",
    industry: "Last-mile logistics",
    location: "Hamilton",
    services: ["SEO", "Web Design"],
    timeline: "6 months",
    headline: "11x more booked deliveries",
    body:
      "Same traffic, more than ten times the booked deliveries. We rewrote every service page, fixed Core Web Vitals, and rebuilt the quote-request flow around a single primary action.",
    metrics: [
      { value: "11x", label: "Conversions" },
      { value: "1.5x", label: "Avg. order value" },
      { value: "1.8s", label: "LCP" },
    ],
    video: "video/cases/logistics.mp4",
    accent: "violet",
  },
  {
    slug: "loomframe",
    client: "Loomframe",
    industry: "B2B operations software",
    location: "Dunedin",
    services: ["SEO", "Content", "Conversion"],
    timeline: "8 months",
    headline: "18x more organic traffic",
    body:
      "Built the content engine alongside the founders. From a standing start, the site now ranks for 800+ commercial queries and books demos every working day without paid spend.",
    metrics: [
      { value: "18x", label: "Organic traffic" },
      { value: "800+", label: "Ranking keywords" },
      { value: "12", label: "Demos / week" },
    ],
    video: "video/cases/digital.mp4",
    accent: "pink",
  },
];

// Real verified Google reviews. Add more by pasting in {name, role, quote, when}.
export type Review = {
  name: string;
  role: string;
  quote: string;
  when?: string; // e.g. "2 weeks ago"
  initial?: string; // optional avatar letter override
};

export const testimonials: Review[] = [
  {
    name: "Andrew Schultz",
    role: "Online store owner",
    when: "Verified Google review",
    quote:
      "I can't recommend Digital Movement enough for their incredible SEO services! As the owner of a small online store, I was struggling to attract consistent traffic and generate sales — the team turned that around for us.",
  },
  {
    name: "Beth Sorenson",
    role: "Small business owner",
    when: "Verified Google review",
    quote:
      "Digital Movement have been amazing to work with. The team built me a great website and set up SEO and Google Ads, and I started getting real leads not long after. They explain everything in plain English.",
  },
  {
    name: "Fabienne M.",
    role: "Founder",
    when: "Verified Google review",
    quote:
      "Punctual, organised, and efficient are just a few of their best qualities — couldn't recommend a better agency. The communication is honestly the best I've had with anyone.",
  },
  {
    name: "Matthew Peard",
    role: "Director",
    when: "Verified Google review",
    quote:
      "The team is easy to talk to, quick to respond, and they explain everything in plain English. I finally feel confident with our marketing — and the leads are coming in.",
  },
];

export const faqs = [
  {
    q: "How long until I see results?",
    a: "Some clients see ranking movement within the first week. Real lead growth usually shows up between weeks 2 and 6. We'll tell you what to expect specifically for your business after the audit — no fluff.",
  },
  {
    q: "Are there contracts or lock-ins?",
    a: "We work month-to-month after a short minimum term to set things up properly. If we're not delivering, you can leave. We'd rather earn the next month than trap you in it.",
  },
  {
    q: "What's actually in the free proposal?",
    a: "A short Loom walkthrough plus a written one-page audit flagging technical issues, ranking gaps, and the three highest-leverage fixes. Yours to keep, whether you work with us or not.",
  },
  {
    q: "How is pricing structured?",
    a: "Fixed monthly fees with no surprise costs. We scope the work to your goals and budget. We're not the cheapest, but we are honest about what each dollar buys.",
  },
  {
    q: "Do you really guarantee results?",
    a: "We guarantee the work, the reporting, and the response time. We're confident enough in our process to put it in writing — and we'll show you the maths every month.",
  },
  {
    q: "What industries do you work with?",
    a: "Cosmetic clinics, trades, e-commerce, professional services, and local NZ businesses. If your customers search Google, we can help.",
  },
];

export const heroEyebrow = {
  ratingText: "5.0 · +100 reviews",
};
