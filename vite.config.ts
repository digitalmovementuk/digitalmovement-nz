import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Digital Movement NZ — served from the root of www.digitalmovement.co.nz
// via GitHub Pages + CNAME, so the base is just "/". Local dev runs on
// 5185 to avoid clashing with the UK build on 5181 and the NEO ports.
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 5185,
    host: true,
    strictPort: true,
  },
});
