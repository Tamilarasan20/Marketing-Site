#!/usr/bin/env node
// Submit every URL in dist/sitemap.xml to IndexNow (Bing, Yandex, Seznam, Naver share the index).
// Bing's index also feeds ChatGPT search and Copilot answers, so this matters for GEO.
// Usage: pnpm build && pnpm indexnow            (submits all URLs)
//        node scripts/indexnow.mjs https://loraloop.com/blog/some-post   (submit specific URLs)
import { readFileSync, existsSync } from 'fs';

const HOST = 'loraloop.com';
const KEY = 'ac1a3951253aecd6b0f1b4154ad8e72f'; // must match public/<key>.txt, served at https://loraloop.com/<key>.txt
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

let urls = process.argv.slice(2);
if (!urls.length) {
  const sitemapPath = new URL('../dist/sitemap.xml', import.meta.url);
  if (!existsSync(sitemapPath)) { console.error('dist/sitemap.xml not found. Run pnpm build first.'); process.exit(1); }
  urls = [...readFileSync(sitemapPath, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]).filter(u => !u.includes('images.pexels.com'));
}

// IndexNow accepts up to 10,000 URLs per request.
for (let i = 0; i < urls.length; i += 10000) {
  const batch = urls.slice(i, i + 10000);
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: batch }),
  });
  console.log(`IndexNow: submitted ${batch.length} urls, HTTP ${res.status} ${res.status === 200 || res.status === 202 ? 'OK' : await res.text()}`);
}
