import type { CollectionEntry } from "astro:content";

export function getRelatedPosts(
    currentPost: CollectionEntry<"blog">,
    posts: CollectionEntry<"blog">[],
    limit = 3,
) {
    return posts
        .filter((post) => post.id !== currentPost.id)
        .map((post) => {
            const sharedTags = post.data.tags.filter((tag) =>
                currentPost.data.tags.includes(tag),
            );

            return {
                post,
                score: sharedTags.length,
            };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map((item) => item.post);
}
