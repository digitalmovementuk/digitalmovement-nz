import { useEffect } from "react";
import { Seo } from "../../seo";

const TARGET = "/services/web-design";

/**
 * Holding page for the retired /services/websites slug.
 *
 * The page moved to /services/web-design so the URL matches the term it
 * targets. On a normal server this would be a 301 and there would be no
 * component at all — GitHub Pages serves static files and cannot issue one, so
 * the redirect is expressed the only way a static host can:
 *
 *  - a canonical pointing at the new URL, so search engines consolidate on it;
 *  - `noindex`, so this stub never competes with the page it points to;
 *  - a `<meta http-equiv="refresh">` in the pre-rendered HTML, which crawlers
 *    treat as a redirect signal and which works with JavaScript disabled;
 *  - a client-side replace() for anyone who does run JavaScript, so the old URL
 *    doesn't linger in their history.
 *
 * The visible copy matters: a crawler that ignores all of the above still needs
 * a working link, and a human who lands here needs to understand why.
 *
 * This file is temporary. Once Search Console reports no impressions on the old
 * path, delete it and its route.
 */
export function WebsitesRedirect() {
  useEffect(() => {
    window.location.replace(TARGET);
  }, []);

  return (
    <>
      <Seo
        title="Page moved · Digital Movement"
        description="Our web design page has moved to /services/web-design."
        path={TARGET}
        noindex
        metaRefresh={TARGET}
      />
      <main className="min-h-[60svh] flex items-center justify-center px-6 py-24 text-center">
        <div>
          <h1 className="text-[26px] sm:text-[32px] font-bold tracking-[-0.02em] text-ink">
            This page has moved
          </h1>
          <p className="mt-4 text-[16px] text-ink-soft leading-relaxed">
            Our web design page now lives at a clearer address.
          </p>
          <a
            href={TARGET}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0071E3] px-7 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#0077ED]"
          >
            Go to Web Design
          </a>
        </div>
      </main>
    </>
  );
}
