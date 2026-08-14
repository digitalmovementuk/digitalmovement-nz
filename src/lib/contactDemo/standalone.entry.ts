import { mountAll } from "./standalone";

/**
 * Entry point for the plain-JS build only — the React app never imports this.
 *
 * It is compiled to wordpress-dmnz/theme-assets/dmnz-contactdemo.js and loaded
 * by the WordPress theme, where there is no React to mount the card. See
 * standalone.ts for why the two builds share one description of the card.
 *
 * The script is deferred, so on a normal page load the document is already
 * parsed by the time it runs and the readyState check is what actually fires.
 * The listener is there for the case where it is loaded some other way.
 */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => mountAll(), { once: true });
} else {
  mountAll();
}
