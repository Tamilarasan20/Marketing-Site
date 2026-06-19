import { blogPosts as baseBlogPosts } from './blogData';
import { additionalBlogPosts } from './additionalBlogData';
import { seoGeoBlogPosts } from './seoGeoBlogData';
import { loraloopTrendingBlogPosts } from './loraloopTrendingBlogData';

const existingKeys = new Set(baseBlogPosts.flatMap((post) => [String(post.id), post.slug]));
const uniqueAdditionalPosts = [...additionalBlogPosts, ...seoGeoBlogPosts, ...loraloopTrendingBlogPosts].filter((post) => !existingKeys.has(String(post.id)) && !existingKeys.has(post.slug));

export const blogPosts = [...baseBlogPosts, ...uniqueAdditionalPosts];
