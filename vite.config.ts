import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// Digital Movement NZ — served from the root of www.digitalmovement.co.nz
// via GitHub Pages + CNAME, so the base is just "/". Local dev runs on
// 5185 to avoid clashing with the UK build on 5181 and the NEO ports.

/**
 * Inline the built CSS into the HTML so it isn't a render-blocking external
 * request. The whole stylesheet gzips to ~8 KB which is well under the
 * 14 KB sweet-spot, and removing the round-trip is worth ~250 ms of FCP on
 * the simulated 4G profile.
 */
function inlineCss(): Plugin {
  return {
    name: "inline-css",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        if (!ctx.bundle) return html;
        const cssChunks = Object.values(ctx.bundle).filter(
          (c) => c.type === "asset" && /\.css$/.test(c.fileName),
        ) as Array<{ source: string | Uint8Array; fileName: string }>;
        if (cssChunks.length === 0) return html;
        const inlined = cssChunks
          .map((c) =>
            typeof c.source === "string" ? c.source : new TextDecoder().decode(c.source),
          )
          .join("\n");
        const styleTag = `<style data-inlined>${inlined}</style>`;
        // Remove the external CSS <link> Vite injected, and drop the inline
        // <style> in just before </head>.
        return html
          .replace(
            /<link\s+rel="stylesheet"[^>]*href="\/assets\/[^"]+\.css"[^>]*>\s*/g,
            "",
          )
          .replace("</head>", `${styleTag}\n  </head>`);
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), inlineCss()],
  base: "/",
  server: {
    port: 5185,
    host: true,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-core": ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
          lenis: ["lenis"],
          icons: ["lucide-react"],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});

// Silence unused-import warning when the helpers aren't pulled in (kept for
// future tweaks to the plugin).
void readFileSync;
void resolve;
