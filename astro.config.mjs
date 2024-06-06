import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // site: "https://neiderdev.netlify.app/",
  integrations: [
    tailwind(),
    react(),
    // sitemap({
    //   filter: (page) =>
    //     page !== "https://neiderdev.netlify.app/secret-vip-lounge/",
    // }),
  ],
  output: "server",
  adapter: vercel(),
});
