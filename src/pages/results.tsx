import { SeoPageShell } from "../components/SeoPageShell";
import { results } from "../content/results";

/** /results — the proof page. Renders every real case study, not just three. */
export function Results() {
  return <SeoPageShell content={results} />;
}
