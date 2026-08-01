import { Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "../content";

// Footer sitemap — services link to their dedicated subpages, company links
// span the About route and the in-page anchors.
const footerServices = [
  { label: "SEO", to: "/services/seo" },
  { label: "Google Ads", to: "/services/google-ads" },
  { label: "Social Media", to: "/services/social-media" },
  { label: "Web Design", to: "/services/web-design" },
];

// The /seo hub and its city spokes. Sitewide footer links are how the spokes
// get crawled and how authority reaches them from every other page — on a
// domain with zero referring domains, internal linking is the only link equity
// there is to distribute.
const footerLocations = [
  { label: "SEO New Zealand", to: "/seo" },
  { label: "SEO Auckland", to: "/seo/auckland" },
  { label: "SEO Christchurch", to: "/seo/christchurch" },
  { label: "SEO Wellington", to: "/seo/wellington" },
  { label: "SEO Hamilton", to: "/seo/hamilton" },
  { label: "SEO Tauranga", to: "/seo/tauranga" },
  { label: "SEO Dunedin", to: "/seo/dunedin" },
  { label: "SEO Hawke's Bay", to: "/seo/hawkes-bay" },
  { label: "SEO Whangarei", to: "/seo/whangarei" },
  { label: "Ecommerce SEO", to: "/seo/ecommerce" },
  { label: "Technical SEO", to: "/seo/technical-seo" },
  { label: "What Is SEO?", to: "/what-is-seo" },
];

// A second paid-service page family, same reasoning as footerLocations above:
// one entry today, grown the same way the SEO spokes did.
const footerGoogleAds = [{ label: "Google Ads Christchurch", to: "/google-ads/christchurch" }];

// Sales collateral rather than traffic assets, but they still need to be
// crawlable and reachable — an outreach landing page nobody can find from the
// site reads as a page built for one email.
const footerIndustries = [
  { label: "Builders", to: "/industries/builders" },
  { label: "Plumbers", to: "/industries/plumbers" },
  { label: "Electricians", to: "/industries/electricians" },
  { label: "Roofers", to: "/industries/roofers" },
];

const footerCompany = [
  { label: "About", to: "/about" },
  { label: "Numbers", to: "/#metrics" },
  { label: "Contact", to: "/#contact" },
];

function IGIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}
function FBIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.5 22v-7.5h2.6l.4-3h-3V9.6c0-.87.27-1.46 1.52-1.46H17V5.4c-.3-.04-1.27-.13-2.4-.13-2.37 0-4 1.45-4 4.1V11.5H8v3h2.6V22h2.9z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      data-surface="light"
      className="bg-surface-2 text-ink pt-16 sm:pt-20 md:pt-24 pb-10"
    >
      <div className="container-v3">
        {/* Top row: brand + headline ribbon */}
        <div className="flex flex-col items-center lg:items-end lg:flex-row lg:justify-between text-center lg:text-left gap-8 pb-12 sm:pb-16 border-b border-ink/10">
          <div className="max-w-[460px]">
            <img
              src={`${import.meta.env.BASE_URL}brand/logo-color-positive.svg`}
              alt="Digital Movement"
              width="160"
              height="40"
              className="h-8 w-auto mx-auto lg:mx-0"
            />
            <p className="mt-5 text-[14px] sm:text-[15px] text-ink-soft leading-relaxed">
              New Zealand's best-value digital marketing agency. Our five-star
              rated agency guarantees to deliver real results and unbelievable
              prices and inclusions to every client.
            </p>
          </div>

          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-ink hover:text-ink-soft transition-colors"
          >
            Get your free audit <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Sitemap grid */}
        <div className="grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4 pt-12 sm:pt-14 text-center sm:text-left">
          <Column heading="Services">
            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className={linkCls}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Column>

          <Column heading="SEO by location">
            <ul className="space-y-2.5">
              {footerLocations.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Column>

          <Column heading="Google Ads">
            <ul className="space-y-2.5">
              {footerGoogleAds.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Column>

          <Column heading="Industries">
            <ul className="space-y-2.5">
              {footerIndustries.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Column>

          <Column heading="Company">
            <ul className="space-y-2.5">
              {footerCompany.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Column>

          <Column heading="Contact">
            <ul className="space-y-3 flex flex-col items-center sm:items-start">
              <li>
                <a href={business.emailHref} className={`${linkCls} inline-flex items-center gap-2 break-all`}>
                  <Mail size={13} strokeWidth={2.2} className="text-ink-faint" />
                  {business.email}
                </a>
              </li>
              {/* Phone row removed with the placeholder number (N009). Restore
                  when a real NZ number is published. */}
            </ul>

            <div className="mt-6 flex items-center justify-center sm:justify-start gap-3">
              {business.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 text-ink-soft hover:text-ink hover:border-ink/45 transition"
                >
                  {s.label === "Instagram" ? <IGIcon size={15} /> : <FBIcon size={15} />}
                </a>
              ))}
            </div>
          </Column>
        </div>

        {/* Legal strip */}
        <div className="mt-14 sm:mt-16 pt-6 border-t border-ink/10 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-4 text-[12px] text-ink-muted text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link to="/sitemap" className="hover:text-ink">Sitemap</Link>
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Cookies</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <span className="text-ink-faint">·</span>
            <span>New Zealand</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

const linkCls = "text-[13.5px] text-ink-soft hover:text-ink transition-colors";

function Column({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10.5px] font-bold uppercase tracking-[0.20em] text-ink-muted mb-4">
        {heading}
      </p>
      {children}
    </div>
  );
}
