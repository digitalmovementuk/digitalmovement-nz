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
        path: "services/websites",
        lazy: () =>
          import("./pages/services/websites").then((m) => ({ Component: m.ServiceWebsites })),
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
