import { blogPosts } from './blogData';
import { additionalBlogPosts } from './additionalBlogData';

for (const post of additionalBlogPosts) {
  const alreadyExists = blogPosts.some((existingPost) => existingPost.id === post.id || existingPost.slug === post.slug);

  if (!alreadyExists) {
    blogPosts.push(post);
  }
}
