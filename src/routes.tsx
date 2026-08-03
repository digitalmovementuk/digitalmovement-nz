import type { RouteRecord } from "vite-react-ssg";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";

/**
 * Route table for vite-react-ssg.
 *
 * Every path here without a ":" or "*" gets pre-rendered to its own HTML
 * file at build time, which is what makes GitHub Pages serve a real 200
 * instead of falling through to 404.html. Adding a route here is all that's
 * needed for it to appear in the build, the sitemap (scripts/postbuild.mjs
 * reads the emitted files) and the deploy.
 *
 * "404" is a real pre-rendered route so the build produces a genuine
 * not-found page; postbuild moves it to dist/404.html, which is the file
 * GitHub Pages serves for unmatched paths. The "*" route keeps client-side
 * navigation working for the same case.
 *
 * Subpages stay lazy-loaded — pre-rendering resolves them at build time
 * anyway, so the split costs nothing in crawlability and still keeps them
 * off the homepage's critical path.
 */
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    entry: "src/components/Layout.tsx",
    children: [
      {
        index: true,
        element: <HomePage />,
        entry: "src/pages/HomePage.tsx",
      },
      {
        path: "about",
        lazy: () => import("./pages/AboutUs").then((m) => ({ Component: m.AboutUs })),
      },
      {
        path: "services/seo",
        lazy: () => import("./pages/services/seo").then((m) => ({ Component: m.ServiceSEO })),
      },
      {
        path: "services/google-ads",
        lazy: () =>
          import("./pages/services/google-ads").then((m) => ({ Component: m.ServiceGoogleAds })),
      },
      {
        path: "services/social-media",
        lazy: () =>
          import("./pages/services/social-media").then((m) => ({
            Component: m.ServiceSocialMedia,
          })),
      },
      {
        /* Renamed from services/websites 2026-07-31. The page targets "web
           design" in its title, H1, description and body; the slug was the one
           element that disagreed. Changed while the page had no rankings or
           inbound links to lose — the cheapest this will ever be. */
        path: "services/web-design",
        lazy: () =>
          import("./pages/services/websites").then((m) => ({ Component: m.ServiceWebsites })),
      },
      {
        /* The old slug, preserved. GitHub Pages cannot issue a 301, so this
           renders a real page at the old URL whose only job is to send both
           browsers and crawlers to the new one — a meta refresh plus a
           canonical, and noindex so the duplicate never competes. Delete once
           Search Console shows no impressions on the old path. */
        path: "services/websites",
        lazy: () =>
          import("./pages/services/websites-redirect").then((m) => ({
            Component: m.WebsitesRedirect,
          })),
      },
      /**
       * The /seo hub and its city spokes.
       *
       * Kept separate from /services/seo on purpose. That page sells SEO to
       * someone already browsing the agency; these are entered cold from a
       * commercial search ("seo christchurch", 880/mo) and are built to win
       * that SERP. Different reader, different job, no redirect between them.
       */
      {
        path: "seo",
        lazy: () => import("./pages/seo").then((m) => ({ Component: m.SeoHub })),
      },
      {
        path: "seo/christchurch",
        lazy: () =>
          import("./pages/seo/christchurch").then((m) => ({ Component: m.SeoChristchurch })),
      },
      {
        path: "seo/hamilton",
        lazy: () => import("./pages/seo/hamilton").then((m) => ({ Component: m.SeoHamilton })),
      },
      {
        path: "seo/tauranga",
        lazy: () => import("./pages/seo/tauranga").then((m) => ({ Component: m.SeoTauranga })),
      },
      {
        path: "seo/wellington",
        lazy: () => import("./pages/seo/wellington").then((m) => ({ Component: m.SeoWellington })),
      },
      {
        path: "seo/dunedin",
        lazy: () => import("./pages/seo/dunedin").then((m) => ({ Component: m.SeoDunedin })),
      },
      {
        path: "seo/hawkes-bay",
        lazy: () => import("./pages/seo/hawkes-bay").then((m) => ({ Component: m.SeoHawkesBay })),
      },
      {
        path: "seo/auckland",
        lazy: () => import("./pages/seo/auckland").then((m) => ({ Component: m.SeoAuckland })),
      },
      {
        path: "seo/ecommerce",
        lazy: () => import("./pages/seo/ecommerce").then((m) => ({ Component: m.SeoEcommerce })),
      },
      {
        path: "seo/whangarei",
        lazy: () => import("./pages/seo/whangarei").then((m) => ({ Component: m.SeoWhangarei })),
      },
      {
        /* Supporting/authority page, not a place page — 3/3 hubs discuss
           technical SEO, 0/3 have a dedicated page. No search volume of its
           own; it exists to back the city and topic pages up. */
        path: "seo/technical-seo",
        lazy: () =>
          import("./pages/seo/technical-seo").then((m) => ({ Component: m.SeoTechnicalSeo })),
      },

      /**
       * Google Ads city pages. Separate top-level path segment from /seo — the
       * service is different, and "google ads christchurch" (1,600/mo, KD9) is
       * its own SERP with its own incumbent, not a variant of the SEO one.
       */
      {
        path: "google-ads/christchurch",
        lazy: () =>
          import("./pages/google-ads/christchurch").then((m) => ({
            Component: m.GoogleAdsChristchurch,
          })),
      },

      /**
       * Industry pages — sales collateral, not traffic assets.
       *
       * They share the SEO page template because they do the same job for a
       * reader: answer "do you understand my business" and offer one way to
       * enquire. What they must never become is a city × trade matrix
       * (/seo/christchurch/plumbers and so on) — at 20-30 searches a month
       * nationally for the vertical terms, that is forty near-identical pages
       * and a textbook thin-content liability. Strategy §05 rules it out
       * explicitly, and gate item C2.22 makes it a blocker.
       */
      {
        path: "industries/builders",
        lazy: () =>
          import("./pages/industries/builders").then((m) => ({ Component: m.IndustryBuilders })),
      },
      {
        path: "industries/plumbers",
        lazy: () =>
          import("./pages/industries/plumbers").then((m) => ({ Component: m.IndustryPlumbers })),
      },
      {
        path: "industries/electricians",
        lazy: () =>
          import("./pages/industries/electricians").then((m) => ({
            Component: m.IndustryElectricians,
          })),
      },
      {
        path: "industries/roofers",
        lazy: () =>
          import("./pages/industries/roofers").then((m) => ({ Component: m.IndustryRoofers })),
      },
      /* /results removed 2026-08-03 on Raoul's instruction. The proof it
         carried lives on in the `proof` block every SeoPageShell page already
         renders from the same review data, so nothing was lost but the
         standalone URL. postbuild.mjs builds sitemap.xml by walking dist
         rather than from a list, so the URL drops out of the sitemap on its
         own — there is no exclusion list to update. Do not re-add a route
         here without also restoring src/content/results.ts, which held the
         locked client-reported figures and their do-not-restate notice. */
      /* Legal pages. Routed 2026-08-03 — until then src/pages/privacy.tsx
         existed but nothing rendered it, and the footer's Privacy, Cookies and
         Terms links all pointed at href="#". A site collecting names, emails
         and phone numbers with no reachable privacy policy is a Privacy Act
         problem, not a broken-link problem. All three are indexable on
         purpose: a findable policy is the point of having one. */
      {
        path: "privacy",
        lazy: () => import("./pages/privacy").then((m) => ({ Component: m.Privacy })),
      },
      {
        path: "terms",
        lazy: () => import("./pages/terms").then((m) => ({ Component: m.Terms })),
      },
      {
        path: "copyright",
        lazy: () =>
          import("./pages/copyright").then((m) => ({ Component: m.CopyrightDisclaimer })),
      },
      {
        /* The human sitemap. /sitemap.xml is a build artefact and is served
           straight from dist by the host, so the two never collide. */
        path: "sitemap",
        lazy: () => import("./pages/sitemap").then((m) => ({ Component: m.Sitemap })),
      },
      {
        /* Live but noindexed, permanently. The page states no price by
           design — see the notice atop src/content/pricing.ts. */
        path: "pricing",
        lazy: () => import("./pages/pricing").then((m) => ({ Component: m.Pricing })),
      },
      {
        /* Explainer/head-term page — "seo" itself, 1,600/mo at KD55. Top-level
           path, same as results/sitemap/pricing above, not nested under /seo/. */
        path: "what-is-seo",
        lazy: () => import("./pages/what-is-seo").then((m) => ({ Component: m.WhatIsSeo })),
      },
      {
        path: "404",
        lazy: () => import("./pages/NotFound").then((m) => ({ Component: m.NotFound })),
      },
      {
        path: "*",
        lazy: () => import("./pages/NotFound").then((m) => ({ Component: m.NotFound })),
      },
    ],
  },
];
