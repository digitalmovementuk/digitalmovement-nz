// About page content.
//
// Rewritten 2026-08-02 off the copy audit. Three things changed and should
// stay changed: the page-1-in-90-days guarantee is gone (no grounds, see
// content.ts), "real results" is gone (it named nothing), and pillars[0]
// no longer repeats founderNote word for word — the same 200 words appeared
// twice on one page.
//
// Rewritten again 2026-08-03 in the NZ tone pass (spec:
// Sales/SEO Strategies/DM NZ 26-07-31/dm-nz-tone-and-voice.md). This page
// carried the heaviest agency puffery on the site — "world-class marketing
// experts", "work tirelessly", "cutting-edge", "scroll-stopping socials",
// "genuine partner in your business growth". All of it is gone. If it comes
// back, the page fails the read-aloud test in rule 5 of the spec.

export const about = {
  meta: {
    title: "About Digital Movement · NZ Digital Marketing Agency",
    description:
      "The New Zealand agency for businesses that want more enquiries, not more reports. Who we are, how we work, and what you can hold us to.",
  },
  hero: {
    eyebrow: "About",
    headlinePre: "Why we're a 5-star rated",
    headlineSoft: "digital marketing agency.",
    sub: "We get New Zealand businesses found by the people already searching for what they sell — and we show you, every month, exactly what that brought in.",
    locations: "Auckland · New Zealand",
  },
  pillars: [
    {
      label: "More enquiries, not more reports",
      headline:
        "The only number that matters is the one that pays your wages.",
      body: "Traffic isn't the point. Enquiries are. Every month you get one page that says what we did, which searches moved, and how many calls and forms came in. Plenty of agencies promise big and then report on whatever was easy to hit. We report on the number you'd check anyway.",
      bodyMore:
        "Here's what that looks like. Before anything starts, we agree the searches we're going after and write them down — the actual phrases your customers type, not a vague promise about rankings. You keep that list.\n\nEach month you get one page against it: where you sat on each search, where you sit now, what we shipped, and what's next. If something went backwards, it's on the same page as the things that went up. Nothing gets quietly dropped because it stopped looking good.\n\nUnderneath the rankings we track the thing that actually matters — how many enquiries arrived, and which pages sent them. That's the number we'd want to see if we were paying the invoice, so it's the one we lead with.",
    },
    {
      label: "The right customers",
      headline:
        "People who are ready to buy, not people who are browsing.",
      body: "There's a difference between someone reading about your trade and someone who needs it done this week. We go after the second kind. That means the specific searches that end in a phone call, not the broad ones that look impressive on a report and never ring.",
      bodyMore:
        "What we won't do is promise you the top spot. Nobody controls Google's results, so an agency guaranteeing position one is either guessing or picking a search so obscure that winning it changes nothing. What we put in writing is the searches, the work and the reporting — three things we actually control.\n\nWe work with businesses right across New Zealand, from one-van trades to national companies. The approach doesn't change much: find what your customers are typing, build pages that answer it properly, earn the links that make Google take you seriously, and show you the numbers every month.\n\nIf we're not the right fit for what you need, we'll say so. That's cheaper for both of us than three months of finding out.",
    },
    {
      label: "You deal with the person doing the work",
      headline: "One specialist, based here, who answers their own email.",
      body: "You get the person doing the work, by email, with a reply within one working day. Not a ticket number, and not an account manager relaying what someone else said. If something's gone wrong, you're talking to whoever can fix it.",
      bodyMore:
        "That's a deliberate choice, not a shortcut. Most of what goes wrong between an agency and a client is a message passed through two people who each lost a bit of it. Cutting that out means you hear the honest version, including the months where a number went the wrong way.\n\nWe don't disappear once the work goes live either. Rankings slip if a competitor gets serious or Google changes how it reads pages, so the job is ongoing by nature — and you should be able to ring someone about it.",
    },
  ],
  founderNote: {
    eyebrow: "A note from the team",
    headlinePre: "No ignored emails.",
    headlineSoft: "No jargon. Just the number that matters.",
    role: "Your NZ-based specialists",
    paragraphs: [
      "Most owners we work with have very little time to spend on this, and no particular interest in learning how Google works. Fair enough. So we handle it and explain it in language you'd use yourself.",
      "That covers the website, getting found on Google, the ads if you run them, and the social side — all in one place, so you're not chasing three suppliers who each blame the other two.",
      "What you get from us is a straight answer, a reply within one working day, and a report you can read in two minutes. No ignored emails. No jargon.",
    ],
    trackRecord: [
      { year: "100+", entry: "Five-star Google reviews from clients" },
      { year: "500+", entry: "Businesses we've worked with" },
      { year: "3,500+", entry: "Pages we've got onto page 1" },
      /* "$10M+ — Revenue our clients have put through" was removed 2026-08-03.
         Nobody could produce the working the figure came from, and under Fair
         Trading Act s 12A making a representation you cannot substantiate on
         request is an offence whether or not the number happens to be right.
         Do not put it back without a document behind it. */
    ],
  },
  studio: {
    eyebrow: "Where we work",
    headlinePre: "Auckland-led.",
    headlineSoft: "Working right across the country.",
    body: "We're based in Auckland and work with businesses everywhere from Whangārei to Dunedin — Wellington, Christchurch, Hamilton, Tauranga and plenty of smaller towns in between. Every job runs remotely, with the same reporting and the same direct line wherever you are.",
    bullets: [
      "One-van trades through to national companies",
      "One fixed price a month, agreed before you start",
      "Straight advice, even when it's not what you hoped",
    ],
  },
  /* The seven-person `team` block was deleted 2026-07-31. It listed invented
     people — names, roles and credentials — illustrated with Unsplash stock
     portraits. Its <TeamGrid> was already unrendered, so none of it was live,
     but leaving fabricated staff one JSX line from production is not a risk
     worth carrying on a page whose job is to establish who we are. Restore
     with real people and real photographs, or not at all. */
  cta: {
    eyebrow: "Talk to us",
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
