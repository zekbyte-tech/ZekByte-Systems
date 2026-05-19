import { getCollection } from "astro:content";

export async function getPosts() {
    return (await getCollection("blog")).sort(
        (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
    );
}
