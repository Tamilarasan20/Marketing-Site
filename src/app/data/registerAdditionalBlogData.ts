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
import { demandBlogPosts } from './demandBlogData';
import { guideBlogPosts } from './guideBlogData';
import { guideBlogPostsB } from './guideBlogDataB';
import { guideBlogPostsC } from './guideBlogDataC';
import { guideBlogPostsD } from './guideBlogDataD';

for (const post of [...additionalBlogPosts, ...sintraInspiredBlogPosts, ...seoGeoBlogPosts, ...loraloopTrendingBlogPosts, ...jevBlogPosts, ...loraloopGrowthBlogPosts, ...googleAdsBlogPosts, ...bfcmBlogPosts, ...decemberBlogPosts, ...decemberBlogPostsB, ...demandBlogPosts, ...guideBlogPosts, ...guideBlogPostsB, ...guideBlogPostsC, ...guideBlogPostsD]) {
  const alreadyExists = blogPosts.some((existingPost) => existingPost.id === post.id || existingPost.slug === post.slug);

  if (!alreadyExists) {
    blogPosts.push(post);
  }
}
