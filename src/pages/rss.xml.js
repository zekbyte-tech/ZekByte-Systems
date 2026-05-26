import rss from "@astrojs/rss";
import { getSite } from "../lib/get-site";
import { getPosts } from "../lib/get-posts";

export function GET(context) {
    const site = getSite();
    const posts = getPosts();

    return rss({
        title: site.data.title,
        description: site.data.description,
        site: context.site,

        customData: `
            <language>en-us</language>
            <atom:link
                href="${new URL('/rss.xml', context.site)}"
                rel="self"
                type="application/rss+xml"
            />
        `,

        items: posts.map((post) => {
            const { author, ...data } = post.data;

            return {
                ...data,
                link: `/blog/${post.id}/`,
            };
        }),
    });
}
