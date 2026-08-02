// About page content.
//
// Rewritten 2026-08-02 off the copy audit. Three things changed and should
// stay changed: the page-1-in-90-days guarantee is gone (no grounds, see
// content.ts), "real results" is gone (it named nothing), and pillars[0]
// no longer repeats founderNote word for word — the same 200 words appeared
// twice on one page.

export const about = {
  meta: {
    title: "About Digital Movement · NZ Digital Marketing Agency",
    description:
      "The New Zealand digital marketing agency for businesses that want more enquiries, not more reports. Who we are, how we work, and what you can hold us to.",
  },
  hero: {
    eyebrow: "About",
    headlinePre: "Why we are a 5-star rated",
    headlineSoft: "digital marketing agency.",
    sub: "We get New Zealand businesses found by the people already searching for what they sell — and we show you, every month, exactly what that brought in.",
    locations: "Auckland · New Zealand",
  },
  pillars: [
    {
      label: "More enquiries, not more reports",
      headline:
        "From more website traffic to more enquiries to higher sales.",
      body: "Traffic is not the point. Enquiries are. Every month you get one page that says what we did, which searches you moved on, and how many calls and form fills came in — the number you'd check anyway. Plenty of agencies make big promises and report on the ones that are easy to hit. We report on the one that pays your wages.",
      bodyMore:
        "Here is what that looks like in practice. Before anything starts, we agree the searches we're going after and write them down — the specific phrases your customers type, not a vague promise about \"rankings\". You keep that list.\n\nEach month you get a one-page report against it: where you sat on each search, where you sit now, what we shipped, and what's next. If a number went backwards, it's on the same page as the ones that went up. Nothing gets quietly dropped from the report because it stopped looking good.\n\nWe also track the thing underneath the rankings — how many enquiries actually arrived, and which pages sent them. That's the number we'd want to see if we were paying the invoice, so it's the number we lead with.",
    },
    {
      label: "Delivering you customers",
      headline:
        "The right customers, ready and willing to pay for what you offer.",
      body: "Increasing your revenue by finding the right customers who are ready and willing to pay for what your business has to offer is what we do best. As a trusted digital marketing company in New Zealand, Digital Movement is proud to support businesses nationwide with a forward-thinking team of world-class marketing experts driven by results. From day one, our specialists work tirelessly to deliver a strong return on investment in the shortest time possible.",
      bodyMore:
        "What we won't do is promise you the top spot. Nobody controls Google's results, so an agency that guarantees position one is either guessing or picking a search term so obscure that winning it changes nothing. What we put in writing instead is the search terms, the work, and the reporting — three things we actually control.\n\nOur highly skilled and experienced digital marketing experts are constantly developing innovative solutions designed to generate exceptional results. Whether it's driving high-quality leads with value-focused content, increasing sales with intelligently targeted ads, or building long-term brand visibility with scroll-stopping socials, we tailor every strategy to suit your business goals and market.\n\nDigital Movement is trusted by everyone from small local businesses to large national companies because we deliver what others promise. We combine cutting-edge marketing expertise with ongoing support and clear communication, taking the stress out of online marketing so you can focus on running your business.",
    },
    {
      label: "Going beyond service",
      headline: "A dedicated NZ-based specialist working closely with you.",
      body: "Gaining peace of mind by having a dedicated NZ-based digital marketing specialist working closely with you is what you can expect. As a passionate digital marketing company in New Zealand that wants you to succeed, we go the extra mile by assigning a dedicated NZ-based specialist who works closely with you to create and optimise a high-performing marketing strategy tailored to your business.",
      bodyMore:
        "You deal with the specialist doing the work, by email, and you get a reply within one working day — not a ticket number and not an account manager relaying messages.\n\nAt Digital Movement, we don't see ourselves as just another digital marketing agency providing campaigns and reports. We see ourselves as a genuine partner in your business growth. Our role goes far beyond delivering a service — we're here to understand your goals, overcome your challenges, and help you build sustainable success for the long term.\n\nWhen you choose Digital Movement, you're choosing a digital marketing company in New Zealand that is fully invested in your success, not just today, but well into the future. We don't disappear once a campaign goes live — we continuously refine, support, and scale your marketing to ensure ongoing growth and measurable results.",
    },
  ],
  founderNote: {
    eyebrow: "A note from the team",
    headlinePre: "No ignored emails.",
    headlineSoft: "No jargon. Just the number that matters.",
    role: "Your NZ-based specialists",
    paragraphs: [
      "We understand that most business owners in New Zealand have limited time and resources to dedicate to marketing. That's why we provide an all-in-one digital marketing service designed to make growth simple and stress-free.",
      "Our approach combines high-performing website design and search engine optimisation (SEO) with targeted Google Ads and effective social media marketing — bringing everything together seamlessly under one roof.",
      "As a trusted digital marketing company, we pride ourselves on offering honest advice, hands-on support, and campaigns that deliver outstanding returns on investment. No ignored emails. No confusing jargon. Just a dedicated team working proactively to move your business forward.",
    ],
    trackRecord: [
      { year: "100+", entry: "Five-star Google reviews from clients" },
      { year: "500+", entry: "Businesses have grown with our help" },
      { year: "3,500+", entry: "Pages ranked on page 1 of Google" },
      { year: "$10M+", entry: "Revenue generated for NZ businesses" },
    ],
  },
  studio: {
    eyebrow: "Where we work",
    headlinePre: "Auckland-led.",
    headlineSoft: "Trusted by NZ businesses nationwide.",
    body: "As a trusted digital marketing company in New Zealand, Digital Movement is proud to support businesses nationwide with a forward-thinking team of world-class marketing experts driven by results. We work with Kiwi businesses across Auckland, Wellington, Christchurch, Hamilton, Tauranga and beyond.",
    bullets: [
      "Trusted from small local businesses to large national companies",
      "Premium digital marketing without breaking the bank",
      "Honest advice, hands-on support, outstanding ROI",
    ],
  },
  /* The seven-person `team` block was deleted 2026-07-31. It listed invented
     people — names, roles and credentials — illustrated with Unsplash stock
     portraits. Its <TeamGrid> was already unrendered, so none of it was live,
     but leaving fabricated staff one JSX line from production is not a risk
     worth carrying on a page whose job is to establish who we are. Restore
     with real people and real photographs, or not at all. */
  cta: {
    eyebrow: "Ready?",
    headlinePre: "Find out what you're",
    headlineSoft: "missing out on.",
    body: "Tell us what you sell and where. You'll get back a free one-page plan — the searches your customers are already using, the ones going to someone else, and the three fixes worth doing first. Back within one working day.",
    button: "Get my free plan",
    secondary: "Talk it through first",
  },
};

export const STUDIO_IMAGE =
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=82";
export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=2400&q=82";
