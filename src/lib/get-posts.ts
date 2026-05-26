import { getCollection } from "astro:content";

const collection = (await getCollection("blog")).sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
);

export function getPosts() {
    return collection;
}
