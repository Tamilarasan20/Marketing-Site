import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── 1. Compile blogData.ts with esbuild ──────────────────────────────────────
const tmpOut = join(__dirname, '_blogdata_tmp.mjs');
await build({
  entryPoints: [join(__dirname, 'src/app/data/blogData.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: tmpOut,
  logLevel: 'silent',
});

const { blogPosts } = await import(tmpOut + '?t=' + Date.now());

// ── 2. Helpers ───────────────────────────────────────────────────────────────
const SITE = 'https://loraloop.com';

function esc(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getReadTime(content) {
  const words = content.reduce((acc, section) => {
    if ('text' in section) return acc + section.text.split(' ').length;
    if ('items' in section && Array.isArray(section.items)) {
      if (typeof section.items[0] === 'string')
        return acc + section.items.join(' ').split(' ').length;
      return acc + section.items.reduce((s, i) => s + i.q.split(' ').length + i.a.split(' ').length, 0);
    }
    return acc;
  }, 0);
  return Math.max(1, Math.ceil(words / 230));
}

function renderContentToHtml(content) {
  return content.map((section) => {
    switch (section.type) {
      case 'heading':
        return `<h2>${esc(section.text)}</h2>`;
      case 'subheading':
        return `<h3>${esc(section.text)}</h3>`;
      case 'paragraph':
        return `<p>${esc(section.text)}</p>`;
      case 'callout':
        return `<blockquote><p>${esc(section.text)}</p></blockquote>`;
      case 'list':
        return `<ul>${section.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`;
      case 'numbered-list':
        return `<ol>${section.items.map(i => `<li>${esc(i)}</li>`).join('')}</ol>`;
      case 'faq':
        return section.items.map(item =>
          `<details><summary>${esc(item.q)}</summary><p>${esc(item.a)}</p></details>`
        ).join('');
      case 'cta':
        return `<div><p>${esc(section.text)}</p><a href="${SITE}">Try Loraloop Free</a></div>`;
      default:
        return '';
    }
  }).join('\n');
}

function buildFaqSchema(content) {
  const faqSections = content.filter(s => s.type === 'faq');
  if (!faqSections.length) return null;
  const items = faqSections.flatMap(s => s.items).map(item => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": { "@type": "Answer", "text": item.a },
  }));
  return { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": items };
}

function buildArticleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.seoTitle || post.title,
    "description": post.description,
    "author": { "@type": "Organization", "name": "Loraloop" },
    "publisher": {
      "@type": "Organization",
      "name": "Loraloop",
      "url": SITE,
    },
    "datePublished": post.date,
    "url": `${SITE}/blog/${post.slug}`,
    "mainEntityOfPage": { "@type": "WebPage", "@id": `${SITE}/blog/${post.slug}` },
  };
}

// ── 3. Read the Vite build template ─────────────────────────────────────────
const distDir = join(__dirname, 'dist');
const templateHtml = readFileSync(join(distDir, 'index.html'), 'utf8');

// ── 4. Generate a static page per blog post ──────────────────────────────────
for (const post of blogPosts) {
  const pageTitle = esc(post.seoTitle || post.title);
  const desc = esc(post.description);
  const url = `${SITE}/blog/${post.slug}`;
  const readTime = getReadTime(post.content);

  const articleSchema = JSON.stringify(buildArticleSchema(post));
  const faqSchema = buildFaqSchema(post.content);
  const faqSchemaTag = faqSchema
    ? `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`
    : '';

  const bodyHtml = `
<article itemscope itemtype="https://schema.org/Article">
  <header>
    <span>${esc(post.category)}</span>
    <h1 itemprop="headline">${esc(post.title)}</h1>
    <p itemprop="description">${desc}</p>
    <time>${esc(post.date)}</time>
    <span>${readTime} min read</span>
    <span itemprop="author">Loraloop Team</span>
  </header>
  <section itemprop="articleBody">
${renderContentToHtml(post.content)}
  </section>
</article>`.trim();

  // Replace <title> and inject meta/OG tags + structured data + body content
  let html = templateHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${pageTitle} | Loraloop</title>`)
    .replace(
      '</head>',
      `  <meta name="description" content="${desc}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:title" content="${pageTitle} | Loraloop" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Loraloop" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${pageTitle} | Loraloop" />
  <meta name="twitter:description" content="${desc}" />
  <script type="application/ld+json">${articleSchema}</script>
  ${faqSchemaTag}
</head>`
    )
    .replace(
      '<div id="root"></div>',
      `<div id="root">${bodyHtml}</div>`
    );

  const outDir = join(distDir, 'blog', post.slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html, 'utf8');
  console.log(`  ✓ /blog/${post.slug}`);
}

// ── 5. Sitemap ────────────────────────────────────────────────────────────────
const today = new Date().toISOString().split('T')[0];
const staticPages = ['', 'pricing', 'solution', 'blog', 'about', 'contact'];
const staticUrls = staticPages.map(p => `
  <url>
    <loc>${SITE}/${p}</loc>
    <changefreq>weekly</changefreq>
    <priority>${p === '' ? '1.0' : '0.8'}</priority>
    <lastmod>${today}</lastmod>
  </url>`).join('');

const blogUrls = blogPosts.map(p => `
  <url>
    <loc>${SITE}/blog/${p.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <lastmod>${today}</lastmod>
  </url>`).join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${blogUrls}
</urlset>`;

writeFileSync(join(distDir, 'sitemap.xml'), sitemap, 'utf8');
console.log('  ✓ sitemap.xml');

// ── 6. robots.txt ─────────────────────────────────────────────────────────────
const robots = `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;
writeFileSync(join(distDir, 'robots.txt'), robots, 'utf8');
console.log('  ✓ robots.txt');

// ── 7. llms.txt (AI tool discovery) ──────────────────────────────────────────
const llmsTxt = `# Loraloop Blog — AI-readable content index
# ${SITE}/llms.txt

Loraloop is an AI marketing platform that replaces an entire marketing team for founders and small businesses.

## Blog Posts
${blogPosts.map(p => `- [${p.title}](${SITE}/blog/${p.slug}) — ${p.description}`).join('\n')}

## Key Pages
- [Home](${SITE}/) — Loraloop AI marketing platform overview
- [Pricing](${SITE}/pricing) — Pricing plans for Loraloop
- [Solution](${SITE}/solution) — How Loraloop works
- [About](${SITE}/about) — About Loraloop
`;
writeFileSync(join(distDir, 'llms.txt'), llmsTxt, 'utf8');
console.log('  ✓ llms.txt');

// ── 8. Clean up temp file ────────────────────────────────────────────────────
import { unlinkSync } from 'fs';
try { unlinkSync(tmpOut); } catch (_) {}

console.log(`\nPre-rendering complete: ${blogPosts.length} blog posts, sitemap, robots.txt, llms.txt`);
