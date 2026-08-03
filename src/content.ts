// All real, brand-specific copy lives here so it's easy to scan and edit.

export const business = {
  name: "Digital Movement",
  /*
     "Get real results" is back (2026-08-03) to match the restored hero H1.
     The word that must NOT come back is the one after it. "Get real results.
     Guaranteed." carried a page-1-in-90-days promise, and a representation
     about future performance needs reasonable grounds under the Fair Trading
     Act — we have no New Zealand client record that stands it up. What we
     promise instead, sitewide: the search terms agreed in writing, and a
     plain-English report every month. See the FAQ below.

     Note this string is currently rendered nowhere; it is kept in sync with
     the H1 so it cannot drift into a contradiction if it ever is.
  */
  tagline: "Get real results.",
  /* No phone published. The number was the placeholder "+64 9 XXX XXXX"
     wired to tel:+6490000000 — a live dead link on every page. Publishing
     nothing is better than publishing a number that cannot be rung; restore
     both fields together once a real NZ line exists. */
  email: "office@digitalmovement.co.nz",
  emailHref: "mailto:office@digitalmovement.co.nz",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/digitalmovementnz" },
    { label: "Facebook", href: "https://www.facebook.com/digitalmovementnz" },
  ],
};

export const navLinks = [
  { label: "What we do", href: "#services" },
  { label: "Numbers", href: "#metrics" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: 8, suffix: "x", label: "Increase in monthly leads" },
  { value: 1, suffix: "", label: "Working day to your free plan" },
];

export const googleRating = {
  rating: 5.0,
  count: 100,
  reviewsUrl: "https://www.google.com/search?q=digital+movement+new+zealand",
};

export const services = [
  {
    key: "seo",
    title: "SEO",
    promise: "Technical, local and national SEO that gets you found first.",
    detail:
      "Technical SEO, local SEO, national SEO and content writing — all under one roof. Your customers are already searching. We make sure the business they find is yours, with pages built for the searches that end in a phone call, not the ones that end in a browse.",
    bullets: ["Technical SEO", "Local SEO", "National SEO", "Content writing"],
    video: "video/seo-logo.mp4",
  },
  {
    key: "google-ads",
    title: "Google Ads",
    promise: "Increase net profit faster with smarter Google Ads.",
    detail:
      "Intelligently designed Search and Performance Max campaigns that deliver near-instant ROI. We weed out wasted clicks and focus on converting visits into high-quality leads.",
    bullets: [
      "Search Ads",
      "Performance Max",
      "Conversion tracking",
      "Landing page creation & tuning",
    ],
    video: "video/google-ads-logo.mp4",
  },
  {
    key: "social",
    title: "Social Media",
    promise: "Social media marketing that turns the scroll into enquiries.",
    detail:
      "Paid social ads, content creation and a posting plan, aimed at the people close to buying. Likes don't pay wages — what comes back is booked jobs and filled diaries, not a bigger follower count.",
    bullets: ["Paid social ads", "Content creation", "Posting plan", "Founder content"],
    video: "video/socials-logo.mp4",
  },
  {
    key: "websites",
    title: "Websites",
    promise: "Gain more loyal customers with world-class web design.",
    detail:
      "High-performing websites that don't just look exceptional but actively help you outperform competitors online. Built to deliver paying customers, not just traffic.",
    bullets: ["Mobile-first design", "Conversion architecture", "SEO-ready from day one", "You can edit it"],
    video: "video/website-logo.mp4",
  },
];

export const results = [
  {
    metric: "1125%",
    label: "Increase in web conversions",
    industry: "Online store",
    work: "SEO + Web Design",
    timeline: "Andrew Schultz",
    quote: "Their team took the time to understand my business and implemented a tailored SEO strategy that delivered results almost immediately.",
  },
  {
    metric: "1312%",
    label: "Increase in monthly leads",
    industry: "Small business",
    work: "Web Design + SEO + Google Ads",
    timeline: "Beth Sorenson",
    quote: "The team built me a great website and set up SEO and Google Ads, and I started getting real leads not long after.",
  },
  {
    metric: "1050%",
    label: "Increase in monthly sales",
    industry: "First-time website",
    work: "Web Design",
    timeline: "Matthew Peard",
    quote: "Digital Movement has done an incredible job on my first website. They know their stuff and know how to get the results I need.",
  },
  {
    metric: "1796%",
    label: "Increase in organic traffic",
    industry: "Established business",
    work: "Digital Marketing",
    timeline: "Fabienne M.",
    quote: "Punctual, organised, and efficient. I have been dealing with this company for years now, and I couldn't recommend a better agency.",
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
    slug: "andrew-schultz",
    client: "Andrew Schultz",
    industry: "Online store owner",
    location: "New Zealand",
    services: ["SEO", "Web Design"],
    timeline: "Verified review",
    headline: "1125% more web conversions",
    body:
      "I can't recommend Digital Movement enough for their incredible SEO services. As the owner of a small online store, I was struggling to attract consistent traffic and generate sales. Their team took the time to understand my business and implemented a tailored SEO strategy that delivered results almost immediately — a game-changer for my business.",
    metrics: [
      { value: "1125%", label: "Web conversions" },
      { value: "5.0", label: "Google rating" },
      { value: "Page 1", label: "Google ranking" },
    ],
    video: "video/cases/digital.mp4",
    accent: "violet",
  },
  {
    slug: "beth-sorenson",
    client: "Beth Sorenson",
    industry: "Small business owner",
    location: "New Zealand",
    services: ["Web Design", "SEO", "Google Ads"],
    timeline: "Verified review",
    headline: "1312% more monthly leads",
    body:
      "Digital Movement have been amazing to work with. The team built me a great website and set up SEO and Google Ads, and I started getting real leads not long after. The team is easy to talk to, quick to respond, and they explain everything in plain English. I finally feel confident that my marketing is being looked after.",
    metrics: [
      { value: "1312%", label: "Monthly leads" },
      { value: "5.0", label: "Google rating" },
      { value: "Real", label: "Inbound enquiries" },
    ],
    video: "video/cases/cleaning.mp4",
    accent: "pink",
  },
  {
    slug: "matthew-peard",
    client: "Matthew Peard",
    industry: "First-time website",
    location: "New Zealand",
    services: ["Web Design"],
    timeline: "Verified review",
    headline: "1050% more monthly sales",
    body:
      "Digital Movement has done an incredible job on my first website. I can't express how happy I am with Martey and his team. They know their stuff and know how to get the results I need. Thanks for looking after me and giving me the best package and price for what I needed at the time.",
    metrics: [
      { value: "1050%", label: "Monthly sales" },
      { value: "5.0", label: "Google rating" },
      { value: "1st", label: "Website launched" },
    ],
    video: "video/cases/finance-skyline.mp4",
    accent: "orange",
  },
  {
    slug: "fabienne-m",
    client: "Fabienne M.",
    industry: "Established business",
    location: "New Zealand",
    services: ["Digital Marketing"],
    timeline: "Verified review",
    headline: "1796% more organic traffic",
    body:
      "Punctual, organised, and efficient are just a few of their best qualities. I have been dealing with this company for years now, and I couldn't recommend a better agency. Not only have they helped me with my websites, SEO, and Google Ads, but they've also always pointed me in the right direction. If I'm lacking anything, they always help fill that gap.",
    metrics: [
      { value: "1796%", label: "Organic traffic" },
      { value: "5.0", label: "Google rating" },
      { value: "Years", label: "Loyal partner" },
    ],
    video: "video/cases/roofing.mp4",
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
    video: "video/cases/logistics.mp4",
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
      "I can't recommend Digital Movement enough for their incredible SEO services. As the owner of a small online store, I was struggling to attract consistent traffic and generate sales. Their team took the time to understand my business and implemented a tailored SEO strategy that delivered results almost immediately — a game-changer for my business.",
  },
  {
    name: "Beth Sorenson",
    role: "Small business owner",
    when: "Verified Google review",
    quote:
      "Digital Movement have been amazing to work with. The team built me a great website and set up SEO and Google Ads, and I started getting real leads not long after. The team is easy to talk to, quick to respond, and they explain everything in plain English.",
  },
  {
    name: "Matthew Peard",
    role: "First-time website owner",
    when: "Verified Google review",
    quote:
      "Digital Movement has done an incredible job on my first website. I can't express how happy I am with Martey and his team. They know their stuff and know how to get the results I need. Thanks for looking after me and giving me the best package and price for what I needed at the time.",
  },
  {
    name: "Fabienne M.",
    role: "Loyal client of years",
    when: "Verified Google review",
    quote:
      "Punctual, organised, and efficient are just a few of their best qualities. I have been dealing with this company for years now, and I couldn't recommend a better agency. Not only have they helped me with my websites, SEO, and Google Ads, but they've also always pointed me in the right direction.",
  },
];

export const faqs = [
  {
    q: "How long until I see results?",
    a: "Some clients see ranking movement within the first week. Real lead growth usually shows up between weeks 2 and 6. We'll tell you what to expect specifically for your business after the audit — no fluff.",
  },
  {
    q: "Are there contracts or lock-ins?",
    a: "Three months to start, then month by month. The three months exist because the early work — fixing the site, building the pages — takes that long to show up. After that you can leave whenever you like. We'd rather earn the next month than trap you in it.",
  },
  {
    q: "What's actually in the free plan?",
    a: "A short video walkthrough plus a written one-page plan: what's holding your site back, which searches your customers are using that you're missing, and the three fixes worth doing first. Yours to keep, whether you work with us or not.",
  },
  {
    q: "How is pricing structured?",
    a: "Fixed monthly fees with no surprise costs. We scope the work to your goals and budget. We're not the cheapest, but we are honest about what each dollar buys.",
  },
  {
    q: "Do you guarantee I'll rank number one?",
    a: "No, and be careful of anyone who does — nobody controls Google's results, so that promise is written to be broken. Here's what we do put in writing before you start: the exact searches we're going after, what we'll do each month, and a report that shows where you sit on every one of them. If it isn't moving, you'll see it in the report before we say a word.",
  },
  {
    q: "What industries do you work with?",
    a: "Cosmetic clinics, trades, e-commerce, professional services, and local NZ businesses. If your customers search Google, we can help.",
  },
];

export const heroEyebrow = {
  ratingText: "5.0 · 100+ verified reviews",
};
