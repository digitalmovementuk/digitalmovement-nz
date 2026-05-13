import { ServicePageShell } from "../../components/ServicePageShell";
import { services } from "../../content/services";

export function ServiceSEO() {
  return <ServicePageShell content={services.seo} />;
}
