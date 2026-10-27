import { next, waitUntil } from '@vercel/functions';

// Vercel Routing Middleware: reports AI / search crawler hits to Minilytics
// (crawlers don't run the JS tracker). The visitor's response is never delayed:
// the report is sent in the background with waitUntil, and failures are ignored.
// Needs MINILYTICS_API_KEY (Minilytics → Settings → API key) in the Vercel env.

const MINILYTICS_HOST = 'https://minilytics.loraloop.workers.dev';

// Likely crawlers only (same as CRAWLER_PREFILTER in Minilytics' src/shared/crawlers.ts);
// Minilytics classifies the user agent and ignores ones it doesn't know.
const CRAWLER =
  /bot\b|bot\/|spider|crawl|-User\b|-ai\b|GoogleOther|Google-Extended|GoogleAgent|Gemini|NotebookLM|ExternalFetcher|ExternalAgent|cohere/i;

export default function middleware(request: Request) {
  const ua = request.headers.get('user-agent') ?? '';
  const key = process.env.MINILYTICS_API_KEY;
  if (key && CRAWLER.test(ua)) {
    const url = new URL(request.url);
    waitUntil(
      fetch(`${MINILYTICS_HOST}/api/v1/crawlers`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ ua, path: url.pathname + url.search }),
      }).catch(() => {}),
    );
  }
  return next();
}

export const config = {
  // Pages plus robots.txt / sitemap.xml / llms.txt; skip built assets, scripts, styles, images, video and fonts.
  matcher: ['/((?!assets/|.*\\.(?:js|css|map|png|jpe?g|gif|svg|webp|avif|ico|woff2?|ttf|mp4|webm)$).*)'],
};
