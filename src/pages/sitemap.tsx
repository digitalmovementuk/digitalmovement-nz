import { Link } from "react-router-dom";
import { Reveal } from "../lib/Reveal";
import { Seo, breadcrumbs } from "../seo";

/**
 * /sitemap — the human-readable index.
 *
 * Distinct from /sitemap.xml, which postbuild generates for crawlers from the
 * files the build actually emitted. This one is for people, and it does a
 * second job for search: it puts every page one click from every other page,
 * which on a domain with zero referring domains is the only link equity there
 * is to spread.
 *
 * Kept as a hand-maintained list rather than derived from the route table on
 * purpose — it carries a one-line description per page, which the route table
 * has nowhere to put, and a stale entry here is visible the moment anyone
 * opens the page. /pricing is deliberately absent: it is noindexed until real
 * figures replace its placeholders, and listing it would undo that.
 */

const GROUPS: { heading: string; blurb: string; links: { label: string; to: string; note: string }[] }[] = [
  {
    heading: "SEO by location",
    blurb: "One page per market we work in, with the local detail that market actually needs.",
    links: [
      { label: "SEO New Zealand", to: "/seo", note: "The national overview and the parent of every city page." },
      { label: "SEO Auckland", to: "/seo/auckland", note: "The country's largest and most competitive market." },
      { label: "SEO Christchurch", to: "/seo/christchurch", note: "Canterbury, and the clearest opening in the country." },
      { label: "SEO Wellington", to: "/seo/wellington", note: "The capital, the public sector and the Hutt Valley." },
      { label: "SEO Hamilton", to: "/seo/hamilton", note: "The Waikato service centre." },
      { label: "SEO Tauranga", to: "/seo/tauranga", note: "The Bay of Plenty, the port and the new-build belt." },
      { label: "SEO Dunedin", to: "/seo/dunedin", note: "Otago, the university city and the hill suburbs." },
      { label: "SEO Hawke's Bay", to: "/seo/hawkes-bay", note: "Napier, Hastings and the wider growing region." },
      { label: "Ecommerce SEO", to: "/seo/ecommerce", note: "For online stores rather than a place." },
    ],
  },
  {
    heading: "Industries",
    blurb: "Written for a specific trade. These exist to answer whether we understand your business.",
    links: [
      { label: "SEO for builders", to: "/industries/builders", note: "Long project cycles and big-ticket decisions." },
      { label: "SEO for plumbers", to: "/industries/plumbers", note: "Emergency callouts and phone-now searching." },
      { label: "SEO for electricians", to: "/industries/electricians", note: "Domestic, commercial and the compliance layer." },
      { label: "SEO for roofers", to: "/industries/roofers", note: "Storm-driven demand and insurance work." },
    ],
  },
  {
    heading: "Services",
    blurb: "What we do, described as capabilities rather than markets.",
    links: [
      { label: "SEO", to: "/services/seo", note: "Technical, local and national SEO, plus content." },
      { label: "Google Ads", to: "/services/google-ads", note: "Search and Performance Max, built for return." },
      { label: "Social media", to: "/services/social-media", note: "Paid social, content and a posting plan." },
      { label: "Web design", to: "/services/web-design", note: "Sites built to convert, not just to look good." },
    ],
  },
  {
    heading: "Company",
    blurb: "Who we are and what we can actually prove.",
    links: [
      { label: "Home", to: "/", note: "The starting point." },
      { label: "Results", to: "/results", note: "Real client reviews, and an honest account of the gaps." },
      { label: "About", to: "/about", note: "Who does the work." },
      { label: "Contact", to: "/#contact", note: "One form, and a founder replies to it." },
    ],
  },
];

export function Sitemap() {
  const total = GROUPS.reduce((n, g) => n + g.links.length, 0);

  return (
    <>
      <Seo
        title="Sitemap | Digital Movement New Zealand"
        description={`Every page on digitalmovement.co.nz — ${total} pages covering SEO by city, industry pages, services and company information.`}
        path="/sitemap"
        schema={[breadcrumbs([{ name: "Sitemap", path: "/sitemap" }])]}
      />

      <section
        data-surface="dark"
        className="relative isolate overflow-hidden pt-32 pb-14 sm:pt-36 sm:pb-16 md:pt-40 md:pb-20"
        style={{
          background:
            "radial-gradient(120% 100% at 12% 0%, #2c1450 0%, var(--surface-dark) 46%, var(--surface-deep) 100%)",
        }}
      >
        <div className="container-v3 relative text-center lg:text-left">
          <p className="text-[10.5px] sm:text-[11.5px] font-bold uppercase text-white/70 tracking-[0.28em]">
            Sitemap
          </p>
          <h1
            className="mt-4 sm:mt-5 balance text-white mx-auto lg:mx-0 max-w-[18ch]"
            style={{
              fontSize: "clamp(38px, 5.6vw, 72px)",
              lineHeight: "0.98",
              letterSpacing: "-0.04em",
              fontWeight: 700,
            }}
          >
            Every page on this site.
          </h1>
          <p className="mt-5 sm:mt-6 mx-auto lg:mx-0 max-w-[52ch] text-[15px] sm:text-[17px] text-white/70 leading-relaxed">
            All {total} pages, grouped by what they are for. If you are looking for what we do in
            your town, start with SEO by location.
          </p>
        </div>
      </section>

      <section data-surface="light" className="surface-light relative pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24">
        <div className="container-v3">
          <div className="grid gap-12 sm:gap-14 md:grid-cols-2">
            {GROUPS.map((group, gi) => (
              <Reveal key={group.heading} delay={0.04 * gi}>
                <div>
                  <h2
                    className="text-ink"
                    style={{
                      fontSize: "clamp(22px, 2.4vw, 30px)",
                      lineHeight: "1.1",
                      letterSpacing: "-0.03em",
                      fontWeight: 700,
                    }}
                  >
                    {group.heading}
                  </h2>
                  <p className="mt-2.5 text-[14.5px] text-ink-muted leading-relaxed max-w-[46ch]">
                    {group.blurb}
                  </p>

                  <ul className="mt-6 space-y-0 border-t border-ink/10">
                    {group.links.map((link) => (
                      <li key={link.to} className="border-b border-ink/10">
                        <Link
                          to={link.to}
                          className="group flex flex-col gap-1 py-4 transition-colors hover:bg-ink/[0.02]"
                        >
                          <span className="text-[15.5px] sm:text-[16px] font-semibold text-ink group-hover:underline underline-offset-4">
                            {link.label}
                          </span>
                          <span className="text-[13.5px] text-ink-soft leading-relaxed">
                            {link.note}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-14 text-[13.5px] text-ink-muted leading-relaxed max-w-[60ch]">
              Looking for the machine-readable version?{" "}
              <a
                href="/sitemap.xml"
                className="text-ink underline underline-offset-2 hover:opacity-80"
              >
                sitemap.xml
              </a>{" "}
              is generated at build time from the pages this site actually ships, so it cannot drift
              out of date.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
