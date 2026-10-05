import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { unlinkSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = 'https://loraloop.com';
const OG_IMAGE = `${SITE}/og-image.png`;
const OG_IMAGE_WIDTH = '1200';
const OG_IMAGE_HEIGHT = '630';
const TWITTER_HANDLE = '@loraloop_ai';
const THEME_COLOR = '#6366f1';

// ── 1. Compile allBlogData.ts ─────────────────────────────────────────────────
const tmpOut = join(__dirname, '_blogdata_tmp.mjs');
await build({
  entryPoints: [join(__dirname, 'src/app/data/allBlogData.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: tmpOut,
  logLevel: 'silent',
});
const { blogPosts } = await import(tmpOut + '?t=' + Date.now());

// ── 2. Helpers ────────────────────────────────────────────────────────────────
function esc(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getReadTime(content) {
  const words = content.reduce((acc, s) => {
    if ('text' in s) return acc + s.text.split(' ').length;
    if ('items' in s && Array.isArray(s.items)) {
      if (typeof s.items[0] === 'string') return acc + s.items.join(' ').split(' ').length;
      return acc + s.items.reduce((n, i) => n + i.q.split(' ').length + i.a.split(' ').length, 0);
    }
    return acc;
  }, 0);
  return Math.max(1, Math.ceil(words / 230));
}

function renderContentToHtml(content) {
  return content.map(s => {
    switch (s.type) {
      case 'heading':      return `<h2>${esc(s.text)}</h2>`;
      case 'subheading':   return `<h3>${esc(s.text)}</h3>`;
      case 'paragraph':    return `<p>${esc(s.text)}</p>`;
      case 'callout':      return `<blockquote><p>${esc(s.text)}</p></blockquote>`;
      case 'list':         return `<ul>${s.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`;
      case 'numbered-list':return `<ol>${s.items.map(i => `<li>${esc(i)}</li>`).join('')}</ol>`;
      case 'faq':          return s.items.map(i => `<details><summary>${esc(i.q)}</summary><p>${esc(i.a)}</p></details>`).join('');
      case 'cta':          return `<div><p>${esc(s.text)}</p><a href="${SITE}">Try Loraloop Free</a></div>`;
      case 'video':        return `<figure><video src="${esc(s.src)}"${s.poster ? ` poster="${esc(s.poster)}"` : ''} controls playsinline muted preload="none"></video><figcaption>${s.captionLink ? `<a href="${esc(s.captionLink)}">${esc(s.caption)}</a>` : esc(s.caption)}</figcaption></figure>`;
      case 'image':        return `<figure><img src="${esc(s.src)}" alt="${esc(s.alt)}" width="${s.width ?? 1200}" height="${s.height ?? 800}" loading="lazy" decoding="async" />${s.caption ? `<figcaption>${s.captionLink ? `<a href="${esc(s.captionLink)}" rel="nofollow noopener">${esc(s.caption)}</a>` : esc(s.caption)}</figcaption>` : ''}</figure>`;
      case 'youtube':      return `<figure><iframe src="https://www.youtube-nocookie.com/embed/${esc(s.videoId)}" title="${esc(s.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><figcaption><a href="https://www.youtube.com/watch?v=${esc(s.videoId)}" rel="noopener">${esc(s.caption || `Video: ${s.title} (YouTube)`)}</a></figcaption></figure>`;
      case 'table':        return `<table><thead><tr>${s.headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${s.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
      default:             return '';
    }
  }).join('\n');
}

function faqSchema(content) {
  const items = content.filter(s => s.type === 'faq').flatMap(s => s.items);
  if (!items.length) return null;
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map(i => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })) };
}

/** First `image` section of a post — doubles as its social/AI-answer card image. */
function heroImage(post) {
  const s = post.content.find(x => x.type === 'image');
  return s ? { url: s.src, alt: s.alt, width: s.width ?? 1200, height: s.height ?? 800 } : null;
}

/** Embedded YouTube videos, surfaced to crawlers as VideoObject entries. */
function videoSchemas(post) {
  return post.content.filter(s => s.type === 'youtube').map(s => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: s.title,
    description: s.caption || s.title,
    thumbnailUrl: [`https://i.ytimg.com/vi/${s.videoId}/hqdefault.jpg`],
    embedUrl: `https://www.youtube-nocookie.com/embed/${s.videoId}`,
    contentUrl: `https://www.youtube.com/watch?v=${s.videoId}`,
    uploadDate: parseIsoDate(post.date),
  }));
}

function articleSchema(post) {
  const hero = heroImage(post);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE}/blog/${post.slug}#article`,
    headline: post.seoTitle || post.title,
    description: post.description,
    image: hero
      ? { '@type': 'ImageObject', url: hero.url, width: hero.width, height: hero.height, caption: hero.alt }
      : { '@type': 'ImageObject', url: OG_IMAGE, width: parseInt(OG_IMAGE_WIDTH), height: parseInt(OG_IMAGE_HEIGHT) },
    author: { '@type': 'Organization', name: 'Loraloop', url: SITE },
    publisher: { '@type': 'Organization', name: 'Loraloop', url: SITE, logo: { '@type': 'ImageObject', url: OG_IMAGE } },
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE}/blog/${post.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/blog/${post.slug}` },
    articleSection: post.category,
    inLanguage: 'en-US',
    isPartOf: { '@id': `${SITE}/#website` },
  };
}

function breadcrumbSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: post.seoTitle || post.title, item: `${SITE}/blog/${post.slug}` },
    ],
  };
}

function parseIsoDate(dateStr) {
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) return d.toISOString().split('T')[0];
  } catch (_) {}
  return new Date().toISOString().split('T')[0];
}

const distDir = join(__dirname, 'dist');
const template = readFileSync(join(distDir, 'index.html'), 'utf8');

function buildPage({ path, title, description, bodyHtml, extraHead = '', ogType = 'website', ogImage = OG_IMAGE, ogImageWidth = OG_IMAGE_WIDTH, ogImageHeight = OG_IMAGE_HEIGHT, ogImageAlt }) {
  const url = `${SITE}${path}`;
  const t = esc(title);
  const d = esc(description);
  const img = esc(ogImage);
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${t} | Loraloop</title>`)
    // Drop the template's static meta tags so prerendered pages don't carry duplicates
    .replace(/\s*<meta name="description"[^>]*\/>/, '')
    .replace(/\s*<meta property="og:title"[^>]*\/>/, '')
    .replace(/\s*<meta property="og:description"[^>]*\/>/, '')
    .replace(/\s*<meta property="og:type"[^>]*\/>/, '')
    .replace(/\s*<meta name="theme-color"[^>]*\/>/, '')
    .replace('</head>',
      `  <meta name="description" content="${d}" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Loraloop" />
  <link rel="canonical" href="${url}" />
  <link rel="alternate" hreflang="en" href="${url}" />
  <link rel="alternate" hreflang="x-default" href="${url}" />
  <meta property="og:title" content="${t} | Loraloop" />
  <meta property="og:description" content="${d}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:type" content="${ogType}" />
  <meta property="og:site_name" content="Loraloop" />
  <meta property="og:image" content="${img}" />
  <meta property="og:image:width" content="${ogImageWidth}" />
  <meta property="og:image:height" content="${ogImageHeight}" />
  <meta property="og:image:alt" content="${esc(ogImageAlt || `${title} | Loraloop`)}" />
  <meta property="og:locale" content="en_US" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="${TWITTER_HANDLE}" />
  <meta name="twitter:title" content="${t} | Loraloop" />
  <meta name="twitter:description" content="${d}" />
  <meta name="twitter:image" content="${img}" />
  <meta name="theme-color" content="${THEME_COLOR}" />
  ${extraHead}
</head>`)
    .replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
  return html;
}

function writePage(urlPath, html) {
  const segments = urlPath.replace(/^\//, '').split('/').filter(Boolean);
  const dir = segments.length ? join(distDir, ...segments) : distDir;
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html, 'utf8');
  console.log(`  ✓ ${urlPath || '/'}`);
}

// ── 3. Blog posts ─────────────────────────────────────────────────────────────
// Guard against duplicate ids/slugs across the data batches — a duplicate slug
// would silently overwrite another post's prerendered page.
{
  const seenIds = new Set(), seenSlugs = new Set();
  for (const p of blogPosts) {
    if (seenIds.has(p.id)) throw new Error(`Duplicate blog post id ${p.id} (${p.slug})`);
    if (seenSlugs.has(p.slug)) throw new Error(`Duplicate blog post slug ${p.slug}`);
    seenIds.add(p.id); seenSlugs.add(p.slug);
  }
}

for (const post of blogPosts) {
  const url = `/blog/${post.slug}`;
  const faq = faqSchema(post.content);
  const isoDate = parseIsoDate(post.date);
  const hero = heroImage(post);
  const videos = videoSchemas(post);
  const html = buildPage({
    path: url,
    title: post.seoTitle || post.title,
    description: post.description,
    ogType: 'article',
    ogImage: hero ? hero.url : OG_IMAGE,
    ogImageWidth: hero ? String(hero.width) : OG_IMAGE_WIDTH,
    ogImageHeight: hero ? String(hero.height) : OG_IMAGE_HEIGHT,
    ogImageAlt: hero ? hero.alt : undefined,
    extraHead: `<script type="application/ld+json">${JSON.stringify(articleSchema(post))}</script>
  <script type="application/ld+json">${JSON.stringify(breadcrumbSchema(post))}</script>${faq ? `\n  <script type="application/ld+json">${JSON.stringify(faq)}</script>` : ''}${videos.map(v => `\n  <script type="application/ld+json">${JSON.stringify(v)}</script>`).join('')}
  <meta property="article:published_time" content="${isoDate}" />
  <meta property="article:modified_time" content="${isoDate}" />
  <meta property="article:author" content="Loraloop" />
  <meta property="article:section" content="${esc(post.category)}" />`,
    bodyHtml: `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <span>${esc(post.category)}</span>
    <h1 itemprop="headline">${esc(post.title)}</h1>
    <p itemprop="description">${esc(post.description)}</p>
    <time>${esc(post.date)}</time>
    <span>${getReadTime(post.content)} min read</span>
    <span itemprop="author">Loraloop Team</span>
  </header>
  <section itemprop="articleBody">
${renderContentToHtml(post.content)}
  </section>
</article>`,
  });
  writePage(url, html);
}

// ── 4. Blog index (crawlable list of every post, no JS required) ──────────────
{
  const newestFirst = [...blogPosts].reverse();
  const categories = [...new Set(blogPosts.map(p => p.category))];
  const listHtml = newestFirst.map(p => {
    const hero = heroImage(p);
    return `<li><article>${hero ? `<img src="${esc(hero.url)}" alt="${esc(hero.alt)}" width="600" height="400" loading="lazy" decoding="async" />` : ''}<span>${esc(p.category)}</span><h2><a href="${SITE}/blog/${p.slug}">${esc(p.title)}</a></h2><p>${esc(p.description)}</p><time datetime="${parseIsoDate(p.date)}">${esc(p.date)}</time></article></li>`;
  }).join('\n');
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE}/blog#blog`,
    name: 'Loraloop Blog',
    description: 'Guides on AI marketing agents, Meta ads creative testing, SEO and GEO, and running marketing with an AI team.',
    url: `${SITE}/blog`,
    publisher: { '@type': 'Organization', name: 'Loraloop', url: SITE },
    blogPost: newestFirst.map(p => ({ '@type': 'BlogPosting', headline: p.title, url: `${SITE}/blog/${p.slug}`, datePublished: parseIsoDate(p.date), description: p.description })),
  };
  const html = buildPage({
    path: '/blog',
    title: 'Blog: AI Marketing, Meta Ads Creative Testing, SEO and GEO Guides',
    description: `${blogPosts.length} practical guides for founders, media buyers and small marketing teams: AI marketing agents, Meta ads creative testing, SEO/GEO, reporting and automation.`,
    extraHead: `<link rel="alternate" type="application/rss+xml" title="Loraloop Blog" href="${SITE}/rss.xml" />
  <script type="application/ld+json">${JSON.stringify(blogSchema)}</script>`,
    bodyHtml: `<main><h1>Loraloop Blog</h1><p>Guides on ${categories.map(esc).join(', ')}.</p><ul>\n${listHtml}\n</ul></main>`,
  });
  writePage('/blog', html);
}

// ── 5. Discovery files: sitemap.xml, rss.xml, robots.txt, llms.txt ───────────
const STATIC_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/pricing', priority: '0.9', changefreq: 'monthly' },
  { path: '/solution', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.9', changefreq: 'daily' },
  { path: '/tools', priority: '0.8', changefreq: 'monthly' },
  { path: '/about', priority: '0.5', changefreq: 'yearly' },
  { path: '/contact', priority: '0.5', changefreq: 'yearly' },
  { path: '/for-founders', priority: '0.7', changefreq: 'monthly' },
  { path: '/for-agencies', priority: '0.7', changefreq: 'monthly' },
  { path: '/for-freelancers', priority: '0.7', changefreq: 'monthly' },
  { path: '/for-ecommerce', priority: '0.7', changefreq: 'monthly' },
  { path: '/for-creators', priority: '0.7', changefreq: 'monthly' },
  { path: '/ai-marketing-lead', priority: '0.8', changefreq: 'monthly' },
  { path: '/ai-seo-geo-strategist', priority: '0.8', changefreq: 'monthly' },
  { path: '/ai-email-marketer', priority: '0.8', changefreq: 'monthly' },
  { path: '/ai-ads-manager', priority: '0.8', changefreq: 'monthly' },
];

const today = new Date().toISOString().split('T')[0];
const latestPostDate = blogPosts.map(p => parseIsoDate(p.date)).sort().at(-1) || today;

{
  const staticUrls = STATIC_ROUTES.map(r => `  <url><loc>${SITE}${r.path}</loc><lastmod>${r.path === '/blog' ? latestPostDate : today}</lastmod><changefreq>${r.changefreq}</changefreq><priority>${r.priority}</priority></url>`);
  const postUrls = blogPosts.map(p => {
    const hero = heroImage(p);
    const img = hero ? `<image:image><image:loc>${esc(hero.url)}</image:loc><image:title>${esc(p.title)}</image:title><image:caption>${esc(hero.alt)}</image:caption></image:image>` : '';
    return `  <url><loc>${SITE}/blog/${p.slug}</loc><lastmod>${parseIsoDate(p.date)}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority>${img}</url>`;
  });
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${[...staticUrls, ...postUrls].join('\n')}\n</urlset>\n`;
  writeFileSync(join(distDir, 'sitemap.xml'), sitemap, 'utf8');
  console.log(`  ✓ /sitemap.xml (${STATIC_ROUTES.length + blogPosts.length} urls)`);
}

{
  const items = [...blogPosts].reverse().slice(0, 100).map(p => {
    const hero = heroImage(p);
    return `    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE}/blog/${p.slug}</guid>
      <pubDate>${new Date(parseIsoDate(p.date)).toUTCString()}</pubDate>
      <category>${esc(p.category)}</category>
      <description>${esc(p.description)}</description>${hero ? `\n      <enclosure url="${esc(hero.url)}" type="image/jpeg" length="0" />` : ''}
    </item>`;
  }).join('\n');
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Loraloop Blog</title>
    <link>${SITE}/blog</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <description>AI marketing agents, Meta ads creative testing, SEO and GEO guides for founders, media buyers and small marketing teams.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;
  writeFileSync(join(distDir, 'rss.xml'), rss, 'utf8');
  console.log('  ✓ /rss.xml');
}

{
  // Explicitly welcome search and AI crawlers (GEO); /app is the product, not content.
  const robots = `User-agent: *
Allow: /
Disallow: /app
Disallow: /app/

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;
  writeFileSync(join(distDir, 'robots.txt'), robots, 'utf8');
  console.log('  ✓ /robots.txt');
}

{
  const byCategory = {};
  for (const p of [...blogPosts].reverse()) (byCategory[p.category] ||= []).push(p);
  const sections = Object.entries(byCategory).map(([cat, posts]) =>
    `## ${cat}\n\n${posts.map(p => `- [${p.title}](${SITE}/blog/${p.slug}): ${p.description}`).join('\n')}`
  ).join('\n\n');
  const llms = `# Loraloop

> Loraloop is an autonomous AI marketing team for founders, e-commerce brands, agencies and small marketing teams. Its AI agents (Lora, the marketing lead and analyst; Sophie, SEO and GEO strategist; Angie, Meta and Google ads manager; Clara, email marketer) plan and execute marketing (ad creatives and campaigns, SEO/GEO articles, social content, email) and send a daily performance briefing. Nothing publishes or changes budget without human approval.

Site: ${SITE}
Pricing: ${SITE}/pricing (Starter $39/mo, Pro from $99/mo, Enterprise per seat; free trial, no credit card)
Blog index: ${SITE}/blog
RSS: ${SITE}/rss.xml
Sitemap: ${SITE}/sitemap.xml

## Product pages

- [AI Marketing Lead (Lora)](${SITE}/ai-marketing-lead): strategy, orchestration, daily briefing.
- [AI SEO and GEO Strategist (Sophie)](${SITE}/ai-seo-geo-strategist): keyword research, optimized articles, AI-search visibility.
- [AI Ads Manager (Angie)](${SITE}/ai-ads-manager): Meta and Google ads creative generation, testing and daily optimisation.
- [AI Email Marketer (Clara)](${SITE}/ai-email-marketer): Klaviyo and Mailchimp flows and campaigns.
- [Free marketing tools](${SITE}/tools): ad copy, hooks, landing page copy, brand voice, content pillars and more.

${sections}
`;
  writeFileSync(join(distDir, 'llms.txt'), llms, 'utf8');
  console.log(`  ✓ /llms.txt (${blogPosts.length} posts)`);
}

try { unlinkSync(tmpOut); } catch (_) {}
