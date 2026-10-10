import { blogPosts } from './blogData';
import { additionalBlogPosts } from './additionalBlogData';
import { sintraInspiredBlogPosts } from './sintraInspiredBlogData';
import { seoGeoBlogPosts } from './seoGeoBlogData';
import { loraloopTrendingBlogPosts } from './loraloopTrendingBlogData';
import { jevBlogPosts } from './jevBlogData';
import { loraloopGrowthBlogPosts } from './loraloopGrowthBlogData';
import { googleAdsBlogPosts } from './googleAdsBlogData';

for (const post of [...additionalBlogPosts, ...sintraInspiredBlogPosts, ...seoGeoBlogPosts, ...loraloopTrendingBlogPosts, ...jevBlogPosts, ...loraloopGrowthBlogPosts, ...googleAdsBlogPosts]) {
  const alreadyExists = blogPosts.some((existingPost) => existingPost.id === post.id || existingPost.slug === post.slug);

  if (!alreadyExists) {
    blogPosts.push(post);
  }
}
