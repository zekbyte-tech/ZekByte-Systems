import { getPosts } from "./get-posts";

export async function getTags() {
  const posts = await getPosts();
  return Array.from(new Set(posts.flatMap((post) => post.data.tags)));
}
