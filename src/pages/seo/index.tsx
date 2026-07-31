import { SeoPageShell } from "../../components/SeoPageShell";
import { seoHub } from "../../content/seo/hub";

/** /seo — the national hub. Parent of every city spoke. */
export function SeoHub() {
  return <SeoPageShell content={seoHub} />;
}
