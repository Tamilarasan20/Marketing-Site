import { blogPosts } from './blogData';
import { additionalBlogPosts } from './additionalBlogData';
import { sintraInspiredBlogPosts } from './sintraInspiredBlogData';
import { seoGeoBlogPosts } from './seoGeoBlogData';
import { loraloopTrendingBlogPosts } from './loraloopTrendingBlogData';
import { jevBlogPosts } from './jevBlogData';
import { loraloopGrowthBlogPosts } from './loraloopGrowthBlogData';
import { googleAdsBlogPosts } from './googleAdsBlogData';
import { decemberBlogPostsB } from './decemberBlogDataB';
import { demandBlogPosts } from './demandBlogData';
import { guideBlogPosts } from './guideBlogData';
import { guideBlogPostsB } from './guideBlogDataB';
import { guideBlogPostsC } from './guideBlogDataC';
import { guideBlogPostsD } from './guideBlogDataD';
import { guideBlogPostsE } from './guideBlogDataE';
import { guideBlogPostsF } from './guideBlogDataF';

for (const post of [...additionalBlogPosts, ...sintraInspiredBlogPosts, ...seoGeoBlogPosts, ...loraloopTrendingBlogPosts, ...jevBlogPosts, ...loraloopGrowthBlogPosts, ...googleAdsBlogPosts, ...decemberBlogPostsB, ...demandBlogPosts, ...guideBlogPosts, ...guideBlogPostsB, ...guideBlogPostsC, ...guideBlogPostsD, ...guideBlogPostsE, ...guideBlogPostsF]) {
  const alreadyExists = blogPosts.some((existingPost) => existingPost.id === post.id || existingPost.slug === post.slug);

  if (!alreadyExists) {
    blogPosts.push(post);
  }
}
