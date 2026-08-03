import { SeoPageShell } from "../components/SeoPageShell";
import { pricing } from "../content/pricing";

/**
 * /pricing — explains how the fee is set and states no figure, by standing
 * instruction. Noindexed for that reason. Read the notice at the top of
 * src/content/pricing.ts before adding anything that looks like a number.
 */
export function Pricing() {
  return <SeoPageShell content={pricing} />;
}
