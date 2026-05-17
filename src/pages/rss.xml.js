import rss from "@astrojs/rss";
import { getCollection, getEntry } from "astro:content";

export async function GET(context) {
  const site = await getEntry("site", "site");
  const posts = await getCollection("blog");

  return rss({
    title: site.data.title,
    description: site.data.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  });
}
