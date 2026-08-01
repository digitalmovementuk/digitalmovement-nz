import { SeoPageShell } from "../components/SeoPageShell";
import { pricing } from "../content/pricing";

/**
 * /pricing — built but noindexed until real figures replace PRICE_TBC.
 * See the notice at the top of src/content/pricing.ts before publishing.
 */
export function Pricing() {
  return <SeoPageShell content={pricing} />;
}
