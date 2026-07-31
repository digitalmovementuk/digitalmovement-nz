import { lazy, Suspense, type ComponentType } from "react";
import { Hero } from "../components/Hero";
import { ServicesCarousel } from "../components/ServicesCarousel";
import { Seo, ORGANIZATION, LOCAL_BUSINESS, WEBSITE } from "../seo";

// Below-the-fold homepage sections are lazy-loaded. The initial paint only
// needs Hero + ServicesCarousel; everything that lives further down the page
// arrives in a second chunk so it doesn't block first content paint on
// mobile.
const Metrics = lazy(() =>
  import("../components/Metrics").then((m) => ({ default: m.Metrics })),
);
const Reviews = lazy(() =>
  import("../components/Reviews").then((m) => ({ default: m.Reviews })),
);
const Contact = lazy(() =>
  import("../components/Contact").then((m) => ({ default: m.Contact })),
);

function SectionFallback() {
  return <div className="min-h-[40vh] surface-light" aria-hidden />;
}

function defer(Component: ComponentType) {
  return (
    <Suspense fallback={<SectionFallback />}>
      <Component />
    </Suspense>
  );
}

export function HomePage() {
  return (
    <>
      <Seo
        title="Digital Movement | SEO & Digital Marketing Agency New Zealand"
        description="New Zealand digital marketing agency. SEO, Google Ads, social media and web design that get real leads — with plain-English advice and no jargon."
        path="/"
        schema={[ORGANIZATION, LOCAL_BUSINESS, WEBSITE]}
      />
      <Hero />
      <ServicesCarousel />
      {defer(Metrics)}
      {defer(Reviews)}
      {defer(Contact)}
    </>
  );
}
