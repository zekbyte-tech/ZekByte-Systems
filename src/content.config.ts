import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const menus = z.object({
  main: z.array(
    z.object({
      name: z.string(),
      href: z.string(),
    }),
  ),
});

const social = z.object({
  main: z.array(
    z.object({
      name: z.string(),
      href: z.string(),
      icon: z.string(),
    }),
  ),
});

const footer = z.object({
  title: z.string(),
  description: z.string(),
  copyright: z.string(),
});

const banner = z.object({
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
});

const site = defineCollection({
  loader: glob({ base: "./src/content", pattern: "site.yaml" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    menus,
    social,
    footer,
  }),
});

const home = defineCollection({
  loader: glob({ base: "./src/content", pattern: "home.yaml" }),
  schema: z.object({
    banner: banner.optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    youtubeId: z.string(),
    publishedAt: z.coerce.date(),
    featured: z.boolean().default(false),
    tags: z.string().array(),
    author: z.string(),
  }),
});

export const collections = { site, home, blog };
