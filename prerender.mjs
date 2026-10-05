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

// ── 1. Compile the prerender data entry (blog posts, calculators, comparisons, authors) ──
const tmpOut = join(__dirname, '_blogdata_tmp.mjs');
await build({
  entryPoints: [join(__dirname, 'src/app/data/prerenderData.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: tmpOut,
  logLevel: 'silent',
});
const { blogPosts, calculators, comparisons, authors, getAuthor, DEFAULT_AUTHOR, tools } = await import(tmpOut + '?t=' + Date.now());
const toolBySlug = (slug) => tools.find(t => t.slug === slug);
const postBySlug = (slug) => blogPosts.find(p => p.slug === slug);

/** Same rule as getRelatedPosts() in blogData.ts: hand-picked slugs first, then same category. */
function relatedPosts(post, count = 4) {
  const picked = []; const seen = new Set([post.slug]);
  for (const slug of post.relatedSlugs ?? []) { const m = postBySlug(slug); if (m && !seen.has(m.slug)) { picked.push(m); seen.add(m.slug); } }
  for (const p of [...blogPosts].reverse()) { if (picked.length >= count) break; if (p.category === post.category && !seen.has(p.slug)) { picked.push(p); seen.add(p.slug); } }
  return picked.slice(0, count);
}

function authorSchema(post) {
  const a = getAuthor(post.author);
  return { '@type': a.type, name: a.name, url: `${SITE}/authors/${a.slug}`, ...(a.type === 'Person' ? { jobTitle: a.role } : {}), ...(a.sameAs ? { sameAs: a.sameAs } : {}), ...(a.image ? { image: a.image } : {}) };
}

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
    author: authorSchema(post),
    publisher: { '@type': 'Organization', name: 'Loraloop', url: SITE, logo: { '@type': 'ImageObject', url: OG_IMAGE } },
    datePublished: parseIsoDate(post.date),
    dateModified: parseIsoDate(post.updated || post.date),
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
    // The SPA hides #root until React mounts (App.tsx removes this tag). Prerendered pages
    // already carry real content, so show it immediately to crawlers and users.
    .replace(/\s*<style id="s">[^<]*<\/style>/, '')
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
  const modifiedDate = parseIsoDate(post.updated || post.date);
  const author = getAuthor(post.author);
  const related = relatedPosts(post, 4);
  const relTools = (post.relatedTools ?? []).map(toolBySlug).filter(Boolean);
  const relatedHtml = (related.length || relTools.length) ? `
  <aside aria-label="Related reading">
    ${related.length ? `<h2>Related reading</h2><ul>${related.map(r => `<li><a href="${SITE}/blog/${r.slug}">${esc(r.title)}</a></li>`).join('')}</ul>` : ''}
    ${relTools.length ? `<h2>Free tools for this topic</h2><ul>${relTools.map(tl => `<li><a href="${SITE}/tools/${tl.slug}">${esc(tl.name)}</a></li>`).join('')}</ul>` : ''}
  </aside>` : '';
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
  <meta property="article:modified_time" content="${modifiedDate}" />
  <meta property="article:author" content="${esc(author.name)}" />
  <meta property="article:section" content="${esc(post.category)}" />`,
    bodyHtml: `<article itemscope itemtype="https://schema.org/Article">
  <header>
    <nav aria-label="Breadcrumb"><a href="${SITE}">Home</a> › <a href="${SITE}/blog">Blog</a> › <span>${esc(post.category)}</span></nav>
    <h1 itemprop="headline">${esc(post.title)}</h1>
    <p itemprop="description">${esc(post.description)}</p>
    <time datetime="${isoDate}">${esc(post.date)}</time>${post.updated && post.updated !== post.date ? ` <span>Updated <time datetime="${modifiedDate}">${esc(post.updated)}</time></span>` : ''}
    <span>${getReadTime(post.content)} min read</span>
    <a itemprop="author" rel="author" href="${SITE}/authors/${author.slug}">${esc(author.name)}</a>
  </header>
  <section itemprop="articleBody">
${renderContentToHtml(post.content)}
  </section>${relatedHtml}
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

// ── 4b. Comparison pages (/compare, /compare/<slug>) ─────────────────────────
{
  const indexHtml = buildPage({
    path: '/compare',
    title: 'Compare Loraloop With Madgicx, AdCreative.ai and Other AI Ads Tools',
    description: 'Side-by-side comparisons of Loraloop with the AI ads and marketing tools buyers evaluate alongside it. Neutral descriptions, honest fits.',
    bodyHtml: `<main><h1>Compare Loraloop</h1><ul>${comparisons.map(c => `<li><a href="${SITE}/compare/${c.slug}">${esc(c.title)}</a>: ${esc(c.description)}</li>`).join('')}</ul></main>`,
  });
  writePage('/compare', indexHtml);

  for (const c of comparisons) {
    const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: c.faq.map(i => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })) };
    const page = { '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${SITE}/compare/${c.slug}`, name: c.seoTitle, description: c.description, dateModified: parseIsoDate(c.updated), isPartOf: { '@id': `${SITE}/#website` }, about: [{ '@type': 'SoftwareApplication', name: 'Loraloop', url: SITE, applicationCategory: 'BusinessApplication' }, { '@type': 'SoftwareApplication', name: c.competitor, url: c.competitorUrl, applicationCategory: 'BusinessApplication' }] };
    const crumbs = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE }, { '@type': 'ListItem', position: 2, name: 'Compare', item: `${SITE}/compare` }, { '@type': 'ListItem', position: 3, name: c.title, item: `${SITE}/compare/${c.slug}` }] };
    const html = buildPage({
      path: `/compare/${c.slug}`,
      title: c.seoTitle,
      description: c.description,
      extraHead: `<script type="application/ld+json">${JSON.stringify(page)}</script>\n  <script type="application/ld+json">${JSON.stringify(crumbs)}</script>\n  <script type="application/ld+json">${JSON.stringify(faq)}</script>`,
      bodyHtml: `<article>
  <nav aria-label="Breadcrumb"><a href="${SITE}">Home</a> › <a href="${SITE}/compare">Compare</a> › <span>${esc(c.title)}</span></nav>
  <h1>${esc(c.title)}: which fits your team in 2026?</h1>
  <p>${esc(c.intro)}</p>
  <p>Updated ${esc(c.updated)}. See <a href="${esc(c.competitorUrl)}" rel="nofollow noopener">${esc(c.competitor)}</a> for current features and pricing.</p>
  <blockquote><p>Verdict: ${esc(c.verdict)}</p></blockquote>
  <h2>${esc(c.title)} at a glance</h2>
  <table><thead><tr>${c.table.headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${c.table.rows.map(r => `<tr>${r.map(x => `<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table>
  <h2>Choose ${esc(c.competitor)} if</h2><ul>${c.chooseCompetitor.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
  <h2>Choose Loraloop if</h2><ul>${c.chooseLoraloop.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
  <h2>Frequently asked questions</h2>${c.faq.map(i => `<details><summary>${esc(i.q)}</summary><p>${esc(i.a)}</p></details>`).join('')}
  <p>Long version: <a href="${SITE}/blog/${c.blogSlug}">${esc(postBySlug(c.blogSlug)?.title || c.title)}</a></p>
  <p><a href="https://app.loraloop.com/signup">Try Loraloop Free</a></p>
</article>`,
    });
    writePage(`/compare/${c.slug}`, html);
  }
}

// ── 4c. Calculator pages (/tools/<slug>) ──────────────────────────────────────
for (const calc of calculators) {
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: calc.faq.map(i => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })) };
  const app = { '@context': 'https://schema.org', '@type': 'WebApplication', name: calc.name, url: `${SITE}/tools/${calc.slug}`, description: calc.description, applicationCategory: 'BusinessApplication', operatingSystem: 'Any', browserRequirements: 'Requires JavaScript', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, publisher: { '@type': 'Organization', name: 'Loraloop', url: SITE } };
  const howTo = { '@context': 'https://schema.org', '@type': 'HowTo', name: `How to use the ${calc.name}`, step: calc.howTo.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, text: s })) };
  const related = calc.relatedPosts.map(postBySlug).filter(Boolean);
  const html = buildPage({
    path: `/tools/${calc.slug}`,
    title: `${calc.name} (Free)`,
    description: calc.description,
    extraHead: `<script type="application/ld+json">${JSON.stringify(app)}</script>\n  <script type="application/ld+json">${JSON.stringify(howTo)}</script>\n  <script type="application/ld+json">${JSON.stringify(faq)}</script>`,
    bodyHtml: `<main>
  <nav aria-label="Breadcrumb"><a href="${SITE}">Home</a> › <a href="${SITE}/tools">Free AI Tools</a> › <span>${esc(calc.name)}</span></nav>
  <h1>${esc(calc.name)}</h1>
  <p>${esc(calc.intro)}</p>
  <p><em>The interactive calculator loads here. Enable JavaScript to use it.</em></p>
  <h2>How to use the ${esc(calc.name.toLowerCase())}</h2><ol>${calc.howTo.map(s => `<li>${esc(s)}</li>`).join('')}</ol>
  ${calc.benchmarks ? `<h2>Benchmarks practitioners use</h2><table><thead><tr><th>Metric</th><th>Weak</th><th>Acceptable</th><th>Strong</th></tr></thead><tbody>${calc.benchmarks.map(b => `<tr><td>${esc(b.label)}</td><td>${esc(b.weak)}</td><td>${esc(b.ok)}</td><td>${esc(b.strong)}</td></tr>`).join('')}</tbody></table>` : ''}
  <h2>Frequently asked questions</h2>${calc.faq.map(i => `<details><summary>${esc(i.q)}</summary><p>${esc(i.a)}</p></details>`).join('')}
  ${related.length ? `<h2>Go deeper</h2><ul>${related.map(r => `<li><a href="${SITE}/blog/${r.slug}">${esc(r.title)}</a></li>`).join('')}</ul>` : ''}
</main>`,
  });
  writePage(`/tools/${calc.slug}`, html);
}

// ── 4d. Author pages (/authors/<slug>) ────────────────────────────────────────
for (const a of authors) {
  const posts = [...blogPosts].reverse().filter(p => (p.author ?? DEFAULT_AUTHOR) === a.slug);
  const schema = { '@context': 'https://schema.org', '@type': a.type, '@id': `${SITE}/authors/${a.slug}#author`, name: a.name, description: a.bio, url: `${SITE}/authors/${a.slug}`, ...(a.type === 'Person' ? { jobTitle: a.role, worksFor: { '@type': 'Organization', name: 'Loraloop', url: SITE } } : {}), ...(a.sameAs ? { sameAs: a.sameAs } : {}), ...(a.image ? { image: a.image } : {}) };
  const html = buildPage({
    path: `/authors/${a.slug}`,
    title: `${a.name}: ${a.role}`,
    description: a.bio.slice(0, 157).replace(/\s+\S*$/, '') + (a.bio.length > 157 ? '…' : ''),
    ogType: 'profile',
    extraHead: `<script type="application/ld+json">${JSON.stringify(schema)}</script>`,
    bodyHtml: `<main><h1>${esc(a.name)}</h1><p>${esc(a.role)}</p><p>${esc(a.bio)}</p>${a.sameAs ? `<ul>${a.sameAs.map(u => `<li><a href="${esc(u)}" rel="me noopener">${esc(u)}</a></li>`).join('')}</ul>` : ''}<h2>${posts.length} articles</h2><ul>${posts.map(p => `<li><a href="${SITE}/blog/${p.slug}">${esc(p.title)}</a></li>`).join('')}</ul></main>`,
  });
  writePage(`/authors/${a.slug}`, html);
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
    return `  <url><loc>${SITE}/blog/${p.slug}</loc><lastmod>${parseIsoDate(p.updated || p.date)}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority>${img}</url>`;
  });
  const extraUrls = [
    `  <url><loc>${SITE}/compare</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`,
    ...comparisons.map(c => `  <url><loc>${SITE}/compare/${c.slug}</loc><lastmod>${parseIsoDate(c.updated)}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`),
    ...calculators.map(c => `  <url><loc>${SITE}/tools/${c.slug}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`),
    ...authors.map(a => `  <url><loc>${SITE}/authors/${a.slug}</loc><lastmod>${latestPostDate}</lastmod><changefreq>weekly</changefreq><priority>0.5</priority></url>`),
  ];
  const all = [...staticUrls, ...extraUrls, ...postUrls];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${all.join('\n')}\n</urlset>\n`;
  writeFileSync(join(distDir, 'sitemap.xml'), sitemap, 'utf8');
  console.log(`  ✓ /sitemap.xml (${all.length} urls)`);
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

## Free calculators

${calculators.map(c => `- [${c.name}](${SITE}/tools/${c.slug}): ${c.shortDescription}.`).join('\n')}

## Comparisons

${comparisons.map(c => `- [${c.title}](${SITE}/compare/${c.slug}): ${c.description}`).join('\n')}

${sections}
`;
  writeFileSync(join(distDir, 'llms.txt'), llms, 'utf8');
  console.log(`  ✓ /llms.txt (${blogPosts.length} posts)`);
}

try { unlinkSync(tmpOut); } catch (_) {}
