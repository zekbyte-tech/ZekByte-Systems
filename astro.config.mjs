// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
    site: "https://zekbyte.com/",
    integrations: [mdx(), sitemap(), icon()],

    image: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.youtube.com",
            },
        ],
    },

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

    build: {
        inlineStylesheets: "always",
    },

    vite: {
        plugins: [tailwindcss()],
    },
});
