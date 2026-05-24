import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { unlinkSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = 'https://loraloop.com';

// ── 1. Compile blogData.ts ────────────────────────────────────────────────────
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
  return { '@context': 'https://schema.org', '@type': 'Article', headline: post.seoTitle || post.title, description: post.description, author: { '@type': 'Organization', name: 'Loraloop' }, publisher: { '@type': 'Organization', name: 'Loraloop', url: SITE }, datePublished: post.date, url: `${SITE}/blog/${post.slug}`, mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/blog/${post.slug}` } };
}

const distDir = join(__dirname, 'dist');
const template = readFileSync(join(distDir, 'index.html'), 'utf8');

function buildPage({ path, title, description, bodyHtml, extraHead = '' }) {
  const url = `${SITE}${path}`;
  const t = esc(title);
  const d = esc(description);
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${t} | Loraloop</title>`)
    .replace('</head>',
      `  <meta name="description" content="${d}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:title" content="${t} | Loraloop" />
  <meta property="og:description" content="${d}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Loraloop" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${t} | Loraloop" />
  <meta name="twitter:description" content="${d}" />
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
  const html = buildPage({
    path: url,
    title: post.seoTitle || post.title,
    description: post.description,
    extraHead: `<script type="application/ld+json">${JSON.stringify(articleSchema(post))}</script>${faq ? `\n  <script type="application/ld+json">${JSON.stringify(faq)}</script>` : ''}\n  <meta property="og:type" content="article" />`,
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

// ── 4. Static pages ───────────────────────────────────────────────────────────

// HOME
writePage('/', buildPage({
  path: '/',
  title: 'Loraloop — AI Marketing Team for Founders and Small Businesses',
  description: 'Loraloop is your autonomous AI marketing team. It plans campaigns, creates content, optimizes for SEO and GEO, runs ads, and reports performance — 24/7, without a human team.',
  extraHead: `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'Organization',
    name: 'Loraloop', url: SITE, description: 'Autonomous AI marketing platform for founders and small businesses.',
    sameAs: ['https://www.linkedin.com/company/loraloop/', 'https://www.instagram.com/loraloop_ai', 'https://x.com/TKtamilarasan2'],
    contactPoint: { '@type': 'ContactPoint', email: 'loraloopai@gmail.com', contactType: 'customer support' }
  })}</script>`,
  bodyHtml: `<main>
  <section>
    <h1>Loraloop — Your AI Marketing Team That Never Sleeps</h1>
    <p>Loraloop is an autonomous AI marketing platform built for founders and small businesses who need a full marketing team without the cost or complexity. It handles strategy, content creation, SEO, GEO, social media, ad copy, email, and performance reporting — all in one place.</p>
    <p>Instead of managing ten marketing tools, hiring freelancers, or spending 30+ hours a week on marketing, Loraloop gives you a team of AI employees that work 24/7 in your brand voice.</p>
  </section>

  <section>
    <h2>What Loraloop Does</h2>
    <ul>
      <li>AI-powered brand strategy and monthly campaign planning tied to your revenue goals</li>
      <li>Social media content creation across LinkedIn, Instagram, X, Facebook, and TikTok</li>
      <li>SEO blog articles optimized for Google keyword ranking and organic traffic</li>
      <li>GEO (Generative Engine Optimization) content structured for citation by Perplexity, ChatGPT, and Google AI Overviews</li>
      <li>AEO (Answer Engine Optimization) content formatted for voice search and AI assistants</li>
      <li>Ad copy for Facebook, Instagram, Google, and TikTok campaigns</li>
      <li>Email marketing sequences and newsletters</li>
      <li>Competitor tracking and market intelligence</li>
      <li>Performance reporting with monthly data-driven marketing recommendations</li>
      <li>Approval-first workflow — every draft reviewed by you before publishing</li>
    </ul>
  </section>

  <section>
    <h2>Who Loraloop Is For</h2>
    <ul>
      <li>Founders and solo operators who cannot afford or manage a full marketing team</li>
      <li>Small businesses that need consistent, on-brand marketing across multiple channels</li>
      <li>eCommerce brands needing product-focused content and ad copy at scale</li>
      <li>Creators building audience through SEO content and social media</li>
      <li>Agencies managing marketing for multiple clients</li>
    </ul>
  </section>

  <section>
    <h2>Key Differentiators</h2>
    <ul>
      <li>Persistent brand knowledge base — Loraloop documents your voice, audience, positioning, and offers so every output sounds exactly like your brand</li>
      <li>Multi-agent AI team — five specialized AI employees (Lora, Sam, Clara, Steve, Sarah) each with focused roles</li>
      <li>Strategy-first, not just content generation — builds your marketing plan before creating content</li>
      <li>Covers SEO, GEO, and AEO — optimized for Google, AI search engines, and voice search simultaneously</li>
      <li>Approval workflow — founders review all content before it publishes</li>
      <li>No marketing expertise required — the system handles strategy, briefing, creation, and reporting</li>
    </ul>
  </section>

  <section>
    <h2>Get Started</h2>
    <p>Loraloop offers a free trial. Sign up at <a href="${SITE}">${SITE}</a> to start your AI marketing team today.</p>
  </section>
</main>`,
}));

// PRICING
writePage('/pricing', buildPage({
  path: '/pricing',
  title: 'Loraloop Pricing — AI Marketing Team Plans',
  description: 'Loraloop pricing plans for every business size. Solo from $6.99/mo, Pro from $20.99/mo, Agency from $48.99/mo, Enterprise from $104.99/mo. All plans include all 9 AI marketing helpers.',
  extraHead: `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Loraloop Pricing', url: `${SITE}/pricing`,
    description: 'Pricing plans for Loraloop AI marketing platform.',
  })}</script>`,
  bodyHtml: `<main>
  <h1>Loraloop Pricing</h1>
  <p>All Loraloop plans include access to all 9 AI marketing helpers. Choose the billing cycle that works for your business — save 30% with an annual plan or 15% with a 3-month plan.</p>

  <section>
    <h2>Pricing Plans</h2>

    <article>
      <h3>Solo Plan</h3>
      <p>Monthly: $9.99/mo (original $19/mo) | 3-month: $8.49/mo | 12-month: $6.99/mo (save 30%)</p>
      <ul>
        <li>All 9 AI marketing helpers</li>
        <li>100 monthly AI credits</li>
        <li>2 Seats</li>
        <li>1 Workspace</li>
        <li>Support during working hours</li>
      </ul>
      <p>Best for: Individual founders and solo operators</p>
    </article>

    <article>
      <h3>Pro Plan (Most Popular)</h3>
      <p>Monthly: $29.99/mo (original $49/mo) | 3-month: $25.49/mo | 12-month: $20.99/mo (save 30%)</p>
      <ul>
        <li>All 9 AI marketing helpers</li>
        <li>500 monthly AI credits</li>
        <li>5 Seats</li>
        <li>3 Workspaces</li>
        <li>24/7 Support</li>
      </ul>
      <p>Best for: Growing small businesses and startups</p>
    </article>

    <article>
      <h3>Agency Plan</h3>
      <p>Monthly: $69.99/mo (original $89/mo) | 3-month: $59.49/mo | 12-month: $48.99/mo (save 30%)</p>
      <ul>
        <li>All 9 AI marketing helpers</li>
        <li>1,200 monthly AI credits</li>
        <li>25 Seats</li>
        <li>10 Workspaces</li>
        <li>24/7 Support</li>
      </ul>
      <p>Best for: Marketing agencies managing multiple clients</p>
    </article>

    <article>
      <h3>Enterprise Plan</h3>
      <p>Monthly: $149.99/mo (original $199/mo) | 3-month: $127.49/mo | 12-month: $104.99/mo (save 30%)</p>
      <ul>
        <li>All 9 AI marketing helpers</li>
        <li>2,500 monthly AI credits</li>
        <li>Unlimited Seats</li>
        <li>Unlimited Workspaces</li>
        <li>24/7 Support</li>
      </ul>
      <p>Best for: Large businesses and enterprises with high-volume marketing needs</p>
    </article>
  </section>

  <section>
    <h2>Frequently Asked Questions — Pricing</h2>
    <details>
      <summary>How do AI credits work?</summary>
      <p>AI credits are used each time Loraloop generates content, runs analysis, or executes a marketing task. Each plan includes a monthly credit allowance. Credits reset each month and unused credits do not roll over.</p>
    </details>
    <details>
      <summary>Can I switch plans?</summary>
      <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.</p>
    </details>
    <details>
      <summary>Is there a free trial?</summary>
      <p>Yes, Loraloop offers a free trial so you can experience the platform before committing to a paid plan.</p>
    </details>
    <details>
      <summary>What is a Workspace?</summary>
      <p>A Workspace is a separate brand environment in Loraloop. Each Workspace has its own brand knowledge base, content calendar, and AI configuration. Agencies use multiple Workspaces to manage different clients.</p>
    </details>
  </section>
</main>`,
}));

// SOLUTION
writePage('/solution', buildPage({
  path: '/solution',
  title: 'Loraloop Solution — Meet Your AI Marketing Employees',
  description: 'Loraloop\'s AI marketing employees — Lora (Marketing Lead), Sam (Strategist), Clara (Content Writer), Steve (Visual Designer), and Sarah (Social Media Manager) — run your marketing 24/7.',
  extraHead: `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: 'Loraloop AI Marketing Solution', url: `${SITE}/solution`,
    description: 'How Loraloop\'s AI marketing team works — five specialized AI employees for marketing automation.',
  })}</script>`,
  bodyHtml: `<main>
  <h1>Loraloop AI Marketing Employees</h1>
  <p>Loraloop gives your business a team of autonomous AI employees that manage marketing end-to-end. Each AI employee has a specialized role and works continuously — planning, creating, publishing, analyzing, and improving your marketing without you needing to manage each step.</p>

  <section>
    <h2>Your AI Marketing Team</h2>

    <article>
      <h3>Lora — AI Marketing Lead (Available Now)</h3>
      <p>Lora is your autonomous AI Marketing Lead. She supports your marketing from start to finish, understands your goals and audience, and needs no waiting for instructions. Lora plans content, runs ads, guides the AI team, creates content, tracks performance, and reports results back to you. She is smart, quick, and easy to work with.</p>
      <p>Role: Coordinate the entire marketing operation, oversee strategy execution, deliver performance reports</p>
    </article>

    <article>
      <h3>Sam — AI Strategist (Coming Soon)</h3>
      <p>Sam plans your marketing every day. He checks your brand, audience, competitors, and trends to decide what your team should focus on next. He helps choose content ideas, campaign plans, product angles, and growth opportunities. No guessing — Sam gives your AI team a clear direction so your marketing stays smart, active, and focused on results.</p>
      <p>Role: Daily marketing strategy, competitive intelligence, campaign planning</p>
    </article>

    <article>
      <h3>Clara — AI Content Writer (Coming Soon)</h3>
      <p>Clara writes content that attracts customers for blogs, emails, social posts, and more. She understands your brand voice and creates persuasive content that drives action.</p>
      <p>Role: Blog articles, social media posts, email newsletters, ad copy</p>
    </article>

    <article>
      <h3>Steve — AI Visual Designer (Coming Soon)</h3>
      <p>Steve creates scroll-stopping visuals for social media, ads, and your website. He ensures your brand looks professional and consistent across all platforms.</p>
      <p>Role: Social media graphics, ad creatives, website visuals, brand consistency</p>
    </article>

    <article>
      <h3>Sarah — AI Social Media Manager (Coming Soon)</h3>
      <p>Sarah manages your social media presence 24/7. She schedules posts, engages with your audience, and tracks performance to grow your brand's reach.</p>
      <p>Role: Social media scheduling, audience engagement, performance tracking, channel growth</p>
    </article>
  </section>

  <section>
    <h2>Old Way vs New Way</h2>

    <h3>The Old Way (Manual Marketing)</h3>
    <ul>
      <li>AI just assists — you still do all the work manually</li>
      <li>Spending 30+ hours per week creating and managing content</li>
      <li>Checking multiple tools just to understand performance</li>
      <li>Paying $5,000+ to hire freelancers or teams for marketing management</li>
      <li>Running ads without knowing what actually works</li>
      <li>Paying $1,000+ for various disconnected marketing tools</li>
    </ul>

    <h3>The New Way (Loraloop AI Marketing Team)</h3>
    <ul>
      <li>AI employees coordinate and execute in your brand voice — you just review and approve</li>
      <li>Automated performance analysis across all channels in one dashboard</li>
      <li>Real-time competitor tracking and market shift monitoring</li>
      <li>Daily insights and automated next-step marketing planning</li>
      <li>Trend discovery, idea generation, and winning strategy identification</li>
    </ul>
  </section>

  <section>
    <h2>Frequently Asked Questions</h2>
    <details>
      <summary>What is Loraloop AI employees?</summary>
      <p>Loraloop provides AI employees that handle your marketing tasks end-to-end. From planning and content creation to execution and analysis, the AI team works 24/7 to grow your business without requiring constant input from you.</p>
    </details>
    <details>
      <summary>What if I don't have a marketing team or employees?</summary>
      <p>That's exactly what Loraloop is built for. The AI employees become your marketing team, handling everything from strategy to execution without requiring any marketing expertise on your end.</p>
    </details>
    <details>
      <summary>Can AI employees replace human employees?</summary>
      <p>AI employees complement and enhance your team by handling repetitive marketing tasks, allowing your human team to focus on strategy and creative decisions. They work alongside your team as reliable, always-available assistants. For solo founders, they can fully replace the need for a human marketing team at a fraction of the cost.</p>
    </details>
  </section>
</main>`,
}));

// ABOUT
writePage('/about', buildPage({
  path: '/about',
  title: 'About Loraloop — Building the Future of AI Marketing',
  description: 'Loraloop is building the future of AI marketing for SMBs, creators, and eCommerce businesses — autonomous AI employees that run your entire marketing engine 24/7.',
  bodyHtml: `<main>
  <h1>About Loraloop</h1>

  <section>
    <p>Loraloop is building the future of AI marketing — where SMBs, businesses, creators, and eCommerce stores don't rely on large teams or endless manual effort to grow.</p>
    <p>We created Loraloop to solve a simple problem: marketing is complex, time-consuming, and hard to scale. From content creation to ads, analytics to optimization — it demands constant attention that most founders and small businesses cannot sustain.</p>
    <p>Loraloop introduces autonomous AI employees that run your entire marketing engine. They plan, create, publish, analyze, and improve — continuously, intelligently, and without burnout.</p>
    <p>Instead of juggling tools, teams, and tasks, businesses can now rely on a system that works 24/7 to drive consistent growth.</p>
    <p>Our mission: to make powerful, data-driven marketing accessible to every business — without the need for large teams or high costs.</p>
  </section>

  <section>
    <h2>What Makes Loraloop Different</h2>

    <article>
      <h3>Always On</h3>
      <p>Your marketing never stops. Loraloop's AI employees work around the clock, 365 days a year. No sick days, no downtime, no gaps in content or campaign management.</p>
    </article>

    <article>
      <h3>End-to-End Execution</h3>
      <p>From strategy to results — everything is handled in one place. Loraloop is not a point solution for one marketing task. It covers the entire marketing workflow: strategy, content, SEO, GEO, ads, social, email, and reporting.</p>
    </article>

    <article>
      <h3>Data-Driven Decisions</h3>
      <p>Every action is based on real performance insights, not guesswork. Loraloop tracks what works across all channels and continuously adjusts its approach to improve results.</p>
    </article>

    <article>
      <h3>Built for Growth</h3>
      <p>Designed to scale with your business, from startup to enterprise. As your business grows, Loraloop grows with it — adding capacity, workspaces, and team seats without requiring proportional increases in cost.</p>
    </article>
  </section>

  <section>
    <h2>Our Vision</h2>
    <p>We believe the future belongs to businesses that move faster, smarter, and more efficiently. Loraloop is not just a tool — it's your AI-powered marketing team, built to help you grow without limits.</p>
    <p>The businesses that win in the next decade will be those that leverage AI not just as a content assistant, but as a full marketing operating system. Loraloop is building that system.</p>
  </section>

  <section>
    <h2>Company Information</h2>
    <ul>
      <li>Company: Loraloop</li>
      <li>Product: AI marketing platform with autonomous AI employees</li>
      <li>Target customers: Founders, SMBs, eCommerce brands, creators, agencies</li>
      <li>Website: <a href="${SITE}">${SITE}</a></li>
      <li>Email: loraloopai@gmail.com</li>
      <li>Discord: https://discord.gg/ynrBvXUY</li>
      <li>LinkedIn: https://www.linkedin.com/company/loraloop/</li>
      <li>Instagram: https://www.instagram.com/loraloop_ai</li>
      <li>X (Twitter): https://x.com/TKtamilarasan2</li>
    </ul>
  </section>
</main>`,
}));

// CONTACT
writePage('/contact', buildPage({
  path: '/contact',
  title: 'Contact Loraloop — Support and Community',
  description: 'Get in touch with Loraloop. Join our Discord community, email us at loraloopai@gmail.com, or connect on LinkedIn, Instagram, and X.',
  bodyHtml: `<main>
  <h1>Contact Loraloop</h1>
  <p>We encourage you to communicate freely. Whether you have a question, comment, or just want to share feedback, we'd love to hear from you.</p>

  <section>
    <h2>Contact Information</h2>
    <ul>
      <li>Email: <a href="mailto:loraloopai@gmail.com">loraloopai@gmail.com</a></li>
      <li>Discord Community: <a href="https://discord.gg/ynrBvXUY">https://discord.gg/ynrBvXUY</a></li>
      <li>LinkedIn: <a href="https://www.linkedin.com/company/loraloop/" rel="noopener noreferrer">linkedin.com/company/loraloop</a></li>
      <li>Instagram: <a href="https://www.instagram.com/loraloop_ai" rel="noopener noreferrer">instagram.com/loraloop_ai</a></li>
      <li>X (Twitter): <a href="https://x.com/TKtamilarasan2" rel="noopener noreferrer">x.com/TKtamilarasan2</a></li>
    </ul>
  </section>

  <section>
    <h2>Join Our Community</h2>
    <p>Our Discord server is the best place to get quick support, share feedback, connect with other Loraloop users, and stay updated on new features and releases.</p>
    <p><a href="https://discord.gg/ynrBvXUY">Join the Loraloop Discord →</a></p>
  </section>
</main>`,
}));

// BLOG INDEX
writePage('/blog', buildPage({
  path: '/blog',
  title: 'Loraloop Blog — AI Marketing Insights for Founders and Small Businesses',
  description: 'Expert guides on AI marketing, GEO, AEO, SEO, and AI tool comparisons. Written for founders and small businesses by the Loraloop team.',
  bodyHtml: `<main>
  <h1>Loraloop Blog</h1>
  <p>AI marketing guides, tool comparisons, and strategy resources for founders and small businesses.</p>
  <nav aria-label="Blog posts">
    <ul>
      ${blogPosts.map(p => `<li><a href="${SITE}/blog/${p.slug}">${esc(p.title)}</a> — ${esc(p.description)}</li>`).join('\n      ')}
    </ul>
  </nav>
</main>`,
}));

// ── 5. Sitemap ─────────────────────────────────────────────────────────────────
const today = new Date().toISOString().split('T')[0];
const staticPages = [
  { path: '',          priority: '1.0', freq: 'weekly' },
  { path: 'pricing',   priority: '0.9', freq: 'monthly' },
  { path: 'solution',  priority: '0.9', freq: 'monthly' },
  { path: 'blog',      priority: '0.8', freq: 'daily' },
  { path: 'about',     priority: '0.7', freq: 'monthly' },
  { path: 'contact',   priority: '0.6', freq: 'monthly' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(p => `  <url>
    <loc>${SITE}/${p.path}</loc>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
    <lastmod>${today}</lastmod>
  </url>`).join('\n')}
${blogPosts.map(p => `  <url>
    <loc>${SITE}/blog/${p.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <lastmod>${today}</lastmod>
  </url>`).join('\n')}
</urlset>`;
writeFileSync(join(distDir, 'sitemap.xml'), sitemap, 'utf8');
console.log('  ✓ sitemap.xml');

// ── 6. robots.txt ──────────────────────────────────────────────────────────────
writeFileSync(join(distDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`, 'utf8');
console.log('  ✓ robots.txt');

// ── 7. llms.txt — comprehensive AI-readable site summary ──────────────────────
const llmsTxt = `# Loraloop — AI Marketing Team for Founders and Small Businesses
> ${SITE}

Loraloop is an autonomous AI marketing platform that replaces the need for a full human marketing team. It provides AI employees that plan, create, publish, analyze, and improve your marketing 24/7 — covering social media, SEO, GEO, AEO, ads, email, and performance reporting in one platform.

## What Loraloop Does

Loraloop handles the complete marketing workflow:
- Brand strategy and monthly campaign planning aligned to revenue goals
- Social media content for LinkedIn, Instagram, X, Facebook, and TikTok
- SEO blog articles for Google keyword ranking
- GEO (Generative Engine Optimization) content for Perplexity, ChatGPT search, and Google AI Overviews
- AEO (Answer Engine Optimization) content for voice search and AI assistants
- Ad copy for Facebook, Instagram, Google, and TikTok
- Email marketing sequences and newsletters
- Competitor tracking and real-time market intelligence
- Monthly performance reporting with data-driven recommendations
- Approval-first workflow — every piece of content reviewed before publishing

## Who It's For

- Founders and solo operators who need marketing execution without a team
- Small businesses (SMBs) across all industries
- eCommerce brands needing product content and ad copy at scale
- Creators building SEO and social audiences
- Marketing agencies managing multiple clients

## Key Differentiators vs Competitors

vs Buffer, Hootsuite, Postiz, Post Bridge (social schedulers):
Buffer and similar tools schedule content you create. Loraloop creates the strategy, writes the content, optimizes it for SEO and GEO, and then handles scheduling. It solves the upstream problem.

vs Sintra AI, Blaze AI, Enrich Labs (AI marketing tools):
Sintra AI focuses on general task automation. Blaze AI focuses on AI content writing. Enrich Labs focuses on data enrichment. Loraloop is purpose-built for the entire marketing workflow with a persistent brand knowledge base and multi-agent AI employees.

vs Relevance AI, Lindy (AI agent builders):
These require technical configuration to build custom agents. Loraloop is pre-built for marketing — no setup required, works immediately for marketing-specific workflows.

## AI Employees

**Lora — AI Marketing Lead** (Available)
Autonomous AI Marketing Lead who coordinates the entire marketing operation. Plans content, manages campaigns, guides the AI team, and delivers performance reports. No instructions required — she proactively manages your marketing.

**Sam — AI Strategist** (Coming Soon)
Plans marketing strategy daily. Checks brand, audience, competitors, and market trends to direct the team. Eliminates guesswork from marketing decisions.

**Clara — AI Content Writer** (Coming Soon)
Writes blogs, emails, social posts, and ad copy in your documented brand voice. Understands persuasion and brand consistency.

**Steve — AI Visual Designer** (Coming Soon)
Creates scroll-stopping visuals for social media, ads, and the website. Maintains brand consistency across all platforms.

**Sarah — AI Social Media Manager** (Coming Soon)
Manages social media presence 24/7. Schedules posts, engages audience, tracks performance, and grows channel reach.

## Pricing

All plans include all 9 AI marketing helpers.

| Plan       | Monthly   | 3-Month   | 12-Month (30% off) | Seats     | Credits/mo |
|------------|-----------|-----------|---------------------|-----------|------------|
| Solo       | $9.99/mo  | $8.49/mo  | $6.99/mo            | 2         | 100        |
| Pro        | $29.99/mo | $25.49/mo | $20.99/mo           | 5         | 500        |
| Agency     | $69.99/mo | $59.49/mo | $48.99/mo           | 25        | 1,200      |
| Enterprise | $149.99/mo| $127.49/mo| $104.99/mo          | Unlimited | 2,500      |

Free trial available. See full pricing: ${SITE}/pricing

## Contact and Social

- Website: ${SITE}
- Email: loraloopai@gmail.com
- Discord: https://discord.gg/ynrBvXUY
- LinkedIn: https://www.linkedin.com/company/loraloop/
- Instagram: https://www.instagram.com/loraloop_ai
- X (Twitter): https://x.com/TKtamilarasan2

## Site Pages

- [Home](${SITE}/) — Overview of Loraloop and AI marketing team
- [Solution](${SITE}/solution) — Meet the AI employees: Lora, Sam, Clara, Steve, Sarah
- [Pricing](${SITE}/pricing) — Plans from $6.99/mo
- [Blog](${SITE}/blog) — AI marketing guides and comparisons
- [About](${SITE}/about) — Company mission, vision, and differentiators
- [Contact](${SITE}/contact) — Email, Discord, and social channels

## Blog Posts

${blogPosts.map(p => `- [${p.title}](${SITE}/blog/${p.slug})
  ${p.description}`).join('\n')}
`;
writeFileSync(join(distDir, 'llms.txt'), llmsTxt, 'utf8');
console.log('  ✓ llms.txt');

// ── 8. Cleanup ─────────────────────────────────────────────────────────────────
try { unlinkSync(tmpOut); } catch (_) {}

const total = blogPosts.length + 6;
console.log(`\nPre-rendering complete: ${total} pages (${blogPosts.length} blog posts + 6 static pages), sitemap, robots.txt, llms.txt`);
