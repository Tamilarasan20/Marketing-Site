// Template-made posts taken off the site (Nov 2026 traffic review, Minilytics 12-month data).
// Each one is either 301-redirected in vercel.json to a stronger post on the same topic,
// or removed (404) when no post on the site covers the topic.
// To bring a post back: delete its id here and its redirect in vercel.json.
export const RETIRED_BLOG_IDS = new Set<number>([
  // Redirected (see vercel.json)
  31, 32, 33, 35, 36, 37, 38,
  43, 45, 47, 48, 49, 53, 54, 55, 58, 59, 61, 62, 64, 65, 66, 68, 69, 70,
  76, 77, 78, 81, 83, 84, 86, 87, 89, 90,
  // Removed: off-target for our buyers, no visits, nothing on the site to merge into
  39, 44, 67, 71, 75,
]);
