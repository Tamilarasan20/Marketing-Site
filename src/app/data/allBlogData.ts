import { blogPosts as baseBlogPosts } from './blogData';
import { additionalBlogPosts } from './additionalBlogData';
import { seoGeoBlogPosts } from './seoGeoBlogData';
import { loraloopTrendingBlogPosts } from './loraloopTrendingBlogData';
import { jevBlogPosts } from './jevBlogData';
import { sintraInspiredBlogPosts } from './sintraInspiredBlogData';
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

// Keep this list in sync with registerAdditionalBlogData.ts (client-side registration).
// Dedupe incrementally (same rule as registerAdditionalBlogData.ts): the first post to claim an id or slug wins.
const seenKeys = new Set(baseBlogPosts.flatMap((post) => [String(post.id), post.slug]));
const uniqueAdditionalPosts = [...additionalBlogPosts, ...sintraInspiredBlogPosts, ...seoGeoBlogPosts, ...loraloopTrendingBlogPosts, ...jevBlogPosts, ...loraloopGrowthBlogPosts, ...googleAdsBlogPosts, ...decemberBlogPostsB, ...demandBlogPosts, ...guideBlogPosts, ...guideBlogPostsB, ...guideBlogPostsC, ...guideBlogPostsD, ...guideBlogPostsE, ...guideBlogPostsF].filter((post) => {
  if (seenKeys.has(String(post.id)) || seenKeys.has(post.slug)) return false;
  seenKeys.add(String(post.id));
  seenKeys.add(post.slug);
  return true;
});

export const blogPosts = [...baseBlogPosts, ...uniqueAdditionalPosts];
