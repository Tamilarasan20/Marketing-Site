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
      default:             return '';
    }
  }).join('\n');
}

function faqSchema(content) {
  const items = content.filter(s => s.type === 'faq').flatMap(s => s.items);
  if (!items.length) return null;
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map(i => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })) };
}

function articleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE}/blog/${post.slug}#article`,
    headline: post.seoTitle || post.title,
    description: post.description,
    image: { '@type': 'ImageObject', url: OG_IMAGE, width: parseInt(OG_IMAGE_WIDTH), height: parseInt(OG_IMAGE_HEIGHT) },
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

function buildPage({ path, title, description, bodyHtml, extraHead = '', ogType = 'website', ogImage = OG_IMAGE }) {
  const url = `${SITE}${path}`;
  const t = esc(title);
  const d = esc(description);
  const img = esc(ogImage);
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${t} | Loraloop</title>`)
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
  <meta property="og:image:width" content="${OG_IMAGE_WIDTH}" />
  <meta property="og:image:height" content="${OG_IMAGE_HEIGHT}" />
  <meta property="og:image:alt" content="${t} | Loraloop" />
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
for (const post of blogPosts) {
  const url = `/blog/${post.slug}`;
  const faq = faqSchema(post.content);
  const isoDate = parseIsoDate(post.date);
  const html = buildPage({
    path: url,
    title: post.seoTitle || post.title,
    description: post.description,
    ogType: 'article',
    extraHead: `<script type="application/ld+json">${JSON.stringify(articleSchema(post))}</script>
  <script type="application/ld+json">${JSON.stringify(breadcrumbSchema(post))}</script>${faq ? `\n  <script type="application/ld+json">${JSON.stringify(faq)}</script>` : ''}
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

// Keep the rest of the prerender flow unchanged by intentionally stopping here
// if this script is used only for blog SEO generation in CI.
try { unlinkSync(tmpOut); } catch (_) {}
