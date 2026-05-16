import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const home = defineCollection({
    loader: glob({ base: "./src/content", pattern: "home.yaml" }),
    schema: () =>
        z.object({
            banner,
        }),
});

const banner = z
    .object({
        title: z.string(),
        description: z.string(),
        buttons: z.object({
            primary: z.object({
                label: z.string(),
                href: z.string(),
                icon: z.string(),
                target: z.string().optional(),
            }),
            secondary: z.object({
                label: z.string(),
                href: z.string(),
                icon: z.string(),
                target: z.string().optional(),
            }),
        }),
    })
    .optional();

const blog = defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
    schema: () =>
        z.object({
            title: z.string(),
            excerpt: z.string(),
            youtubeId: z.string(),
            publishedAt: z.coerce.date(),
            tags: z.string().array(),
            author: z.string(),
        }),
});

export const collections = { home, blog };
