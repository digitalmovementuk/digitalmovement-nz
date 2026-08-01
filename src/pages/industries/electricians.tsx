import { SeoPageShell } from "../../components/SeoPageShell";
import { electricians } from "../../content/industries/electricians";

/**
 * /industries/electricians — sales collateral and an outreach landing page, not a
 * traffic asset. NZ vertical search volume is negligible (strategy §05), so
 * this page is measured on whether it converts a conversation, not on rankings.
 */
export function IndustryElectricians() {
  return <SeoPageShell content={electricians} />;
}
