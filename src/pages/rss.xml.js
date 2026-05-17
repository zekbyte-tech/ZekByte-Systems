import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
    const site = await getEntry("site", "site");
    const posts = await getCollection("blog");

    return rss({
        title: site.title,
        description: site.description,
        site: context.site,
        items: posts.map((post) => ({
            ...post.data,
            link: `/blog/${post.id}/`,
        })),
    });
}
