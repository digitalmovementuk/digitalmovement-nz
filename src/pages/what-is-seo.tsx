import { SeoPageShell } from "../components/SeoPageShell";
import { whatIsSeo } from "../content/what-is-seo";

/** /what-is-seo — explainer for "seo" itself, 1,600/mo at KD55, the biggest single term in the whole keyword set. Only WebGuys has built a page for it and ranks p6. */
export function WhatIsSeo() {
  return <SeoPageShell content={whatIsSeo} />;
}
