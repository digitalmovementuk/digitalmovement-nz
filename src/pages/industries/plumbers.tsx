import { SeoPageShell } from "../../components/SeoPageShell";
import { plumbers } from "../../content/industries/plumbers";

/**
 * /industries/plumbers — sales collateral and an outreach landing page, not a
 * traffic asset. NZ vertical search volume is negligible (strategy §05), so
 * this page is measured on whether it converts a conversation, not on rankings.
 */
export function IndustryPlumbers() {
  return <SeoPageShell content={plumbers} />;
}
