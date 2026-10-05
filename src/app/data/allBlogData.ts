import { blogPosts as baseBlogPosts } from './blogData';
import { additionalBlogPosts } from './additionalBlogData';
import { seoGeoBlogPosts } from './seoGeoBlogData';
import { loraloopTrendingBlogPosts } from './loraloopTrendingBlogData';
import { jevBlogPosts } from './jevBlogData';
import { sintraInspiredBlogPosts } from './sintraInspiredBlogData';
import { loraloopGrowthBlogPosts } from './loraloopGrowthBlogData';

// Keep this list in sync with registerAdditionalBlogData.ts (client-side registration).
// Dedupe incrementally (same rule as registerAdditionalBlogData.ts): the first post to claim an id or slug wins.
const seenKeys = new Set(baseBlogPosts.flatMap((post) => [String(post.id), post.slug]));
const uniqueAdditionalPosts = [...additionalBlogPosts, ...sintraInspiredBlogPosts, ...seoGeoBlogPosts, ...loraloopTrendingBlogPosts, ...jevBlogPosts, ...loraloopGrowthBlogPosts].filter((post) => {
  if (seenKeys.has(String(post.id)) || seenKeys.has(post.slug)) return false;
  seenKeys.add(String(post.id));
  seenKeys.add(post.slug);
  return true;
});

export const blogPosts = [...baseBlogPosts, ...uniqueAdditionalPosts];
