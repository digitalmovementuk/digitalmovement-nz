import { ServicePageShell } from "../../components/ServicePageShell";
import { services } from "../../content/services";

export function ServiceWebsites() {
  return <ServicePageShell content={services.websites} />;
}
