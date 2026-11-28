import { blogPosts } from './blogData';
import { additionalBlogPosts } from './additionalBlogData';
import { sintraInspiredBlogPosts } from './sintraInspiredBlogData';
import { seoGeoBlogPosts } from './seoGeoBlogData';
import { loraloopTrendingBlogPosts } from './loraloopTrendingBlogData';
import { jevBlogPosts } from './jevBlogData';
import { loraloopGrowthBlogPosts } from './loraloopGrowthBlogData';
import { googleAdsBlogPosts } from './googleAdsBlogData';
import { bfcmBlogPosts } from './bfcmBlogData';
import { decemberBlogPosts } from './decemberBlogData';
import { decemberBlogPostsB } from './decemberBlogDataB';
import { salesBlogPosts } from './salesBlogData';
import { demandBlogPosts } from './demandBlogData';
import { demandBlogPostsB } from './demandBlogDataB';
import { guideBlogPosts } from './guideBlogData';

for (const post of [...additionalBlogPosts, ...sintraInspiredBlogPosts, ...seoGeoBlogPosts, ...loraloopTrendingBlogPosts, ...jevBlogPosts, ...loraloopGrowthBlogPosts, ...googleAdsBlogPosts, ...bfcmBlogPosts, ...decemberBlogPosts, ...decemberBlogPostsB, ...salesBlogPosts, ...demandBlogPosts, ...demandBlogPostsB, ...guideBlogPosts]) {
  const alreadyExists = blogPosts.some((existingPost) => existingPost.id === post.id || existingPost.slug === post.slug);

  if (!alreadyExists) {
    blogPosts.push(post);
  }
}
