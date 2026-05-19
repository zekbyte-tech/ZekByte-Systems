import { getPosts } from "./get-posts";

export async function getFeaturedPosts(limit?: number) {
  const posts = await getPosts();
  const featured = posts.filter((post) => post.data.featured);
  return limit ? featured.slice(0, limit) : featured;
}
