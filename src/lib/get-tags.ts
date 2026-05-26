import { getPosts } from "./get-posts";

export function getTags() {
    const posts = getPosts();
    return Array.from(new Set(posts.flatMap((post) => post.data.tags)));
}
