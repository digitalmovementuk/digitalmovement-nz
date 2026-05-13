import { Hero } from "../components/Hero";
import { ServicesCarousel } from "../components/ServicesCarousel";
import { ClientCases } from "../components/ClientCases";
import { Metrics } from "../components/Metrics";
import { Reviews } from "../components/Reviews";
import { Contact } from "../components/Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <ServicesCarousel />
      <ClientCases />
      <Metrics />
      <Reviews />
      <Contact />
    </>
  );
}
