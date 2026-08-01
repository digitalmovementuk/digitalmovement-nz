import { SeoPageShell } from "../../components/SeoPageShell";
import { technicalSeo } from "../../content/seo/technical-seo";

/** /seo/technical-seo — supporting/authority page, no volume of its own. 3/3 competitor hubs discuss technical SEO; 0/3 have a dedicated page. */
export function SeoTechnicalSeo() {
  return <SeoPageShell content={technicalSeo} />;
}
