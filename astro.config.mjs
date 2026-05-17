// @ts-check

import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig, fontProviders } from "astro/config";

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), icon()],

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Geist Sans",
      cssVariable: "--font-geist",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Geist Mono",
      cssVariable: "--font-geist-mono",
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: isDev ? undefined : cloudflare(),
});
