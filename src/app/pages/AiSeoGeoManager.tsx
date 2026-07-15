import { useEffect } from 'react';
import { Link } from 'react-router';

const capabilities = [
  {
    icon: '🔍',
    title: 'Keyword research & prioritization',
    desc: 'Sophie mines your search data for quick wins and runs competitor gap analysis to find keywords you should own.',
    points: [
      'Finds pages ranking 5–20 that can jump to page one',
      'Competitor gap analysis and long-tail keyword mining',
      'Every keyword scored by volume, difficulty, and conversion potential',
      'Prioritized automatically — you get a ranked list, not a data dump',
    ],
  },
  {
    icon: '📝',
    title: 'Content briefs & SEO articles',
    desc: 'Complete blog briefs and drafts with semantic clusters, FAQ schema, and internal links — structured so both Google and AI engines cite you.',
    points: [
      'Full outlines with H2/H3 structure and target entities',
      'FAQ blocks formatted for schema markup and AI citation',
      'Internal link suggestions to and from every new article',
      'Written in your brand voice from your knowledge base',
    ],
  },
  {
    icon: '🤖',
    title: 'GEO — AI search optimization',
    desc: 'Google is no longer the only search engine. Sophie structures your content so ChatGPT, Perplexity, and Google AI Overviews cite your brand as the answer.',
    points: [
      'Answer-first formatting that AI engines can quote directly',
      'FAQ schema and structured data for AI Overviews',
      'Entity and topical-authority building around your niche',
      'Tracks where your brand appears in AI-generated answers',
    ],
  },
  {
    icon: '🛠️',
    title: 'On-page optimization',
    desc: 'Sophie finds underperforming pages and tells you exactly how to fix them — title tags, thin content, missing schema, broken internal links.',
    points: [
      'Rewrites title tags and meta descriptions for CTR',
      'Expands thin content that is holding rankings back',
      'Adds GEO-friendly FAQ sections to existing pages',
      'Fixes orphan pages and weak internal linking',
    ],
  },
  {
    icon: '⚙️',
    title: 'Technical SEO monitoring',
    desc: 'Indexation errors, Core Web Vitals failures, and crawl anomalies get caught before they hit your rankings — with a prioritized fix list.',
    points: [
      'Watches for indexation and crawl errors continuously',
      'Flags Core Web Vitals regressions per page template',
      'Detects keyword cannibalization between your own pages',
      'Every issue ranked by ranking impact, not alphabetically',
    ],
  },
  {
    icon: '🔗',
    title: 'Internal linking architecture',
    desc: 'Sophie maps your topical clusters and builds hub-and-spoke link structures that push authority to the pages that convert.',
    points: [
      'Maps content into topic clusters and authority hubs',
      'Hub-and-spoke structures around your money pages',
      'Anchor text suggestions that stay natural',
      'Monthly linking reviews as your content library grows',
    ],
  },
];

const cadence = [
  { freq: 'Daily', icon: '📈', title: 'Rank & citation tracking', desc: 'Tracks your Google positions and AI-search citations daily, and flags meaningful moves — up or down — so nothing surprises you.' },
  { freq: 'Weekly', icon: '🔑', title: 'Keyword research runs', desc: 'Fresh keyword opportunities every week: competitor gaps, long-tail finds, and trending topics in your niche, scored and prioritized.' },
  { freq: 'Weekly', icon: '🗂️', title: 'Content briefs delivered', desc: 'New article briefs optimized for both Google and AI search land in your approval queue — ready to draft or hand to Clara, your AI Content Writer.' },
  { freq: 'Bi-weekly', icon: '🧰', title: 'On-page optimization cycle', desc: 'A batch of underperforming pages gets a full optimization pass — titles, content expansion, schema, internal links — every two weeks.' },
  { freq: 'Ongoing', icon: '🛡️', title: 'Technical health monitoring', desc: 'Indexation, Core Web Vitals, and crawl issues are watched continuously with a prioritized fix list when something breaks.' },
  { freq: 'Monthly', icon: '🗺️', title: 'Linking & strategy review', desc: 'A monthly review of your internal link architecture, topical coverage, and SEO strategy — with next month\'s priorities laid out.' },
];

const steps = [
  { step: '01', title: 'Connect your site & search data', desc: 'Link your website and Google Search Console. Sophie audits your current rankings, content, and technical health in the first session.' },
  { step: '02', title: 'Sophie learns your brand', desc: 'She reads your brand knowledge base — voice, audience, positioning, products — so every brief and optimization fits your business, not a generic template.' },
  { step: '03', title: 'Get your SEO + GEO roadmap', desc: 'A prioritized plan: which keywords to target, which pages to fix first, and what content to publish — ranked by expected impact.' },
  { step: '04', title: 'Review drafts in your approval queue', desc: 'Briefs, article drafts, and optimization changes appear in your queue. Nothing is published or changed without your sign-off.' },
  { step: '05', title: 'Rankings compound automatically', desc: 'Sophie keeps researching, optimizing, and monitoring on her weekly cadence. You approve the work; she compounds the results.' },
];

const integrations = ['Google Search Console', 'Google Analytics', 'WordPress', 'Webflow', 'Shopify', 'ChatGPT citations', 'Perplexity citations', 'Google AI Overviews'];

const comparison = [
  { label: 'Monthly cost', sophie: 'Included in your Loraloop plan', specialist: '$5,000–$8,000 salary', agency: '$2,000–$10,000 retainer', diy: '$200–$500 in tool subscriptions' },
  { label: 'Keyword research', sophie: 'Weekly, automated & prioritized', specialist: 'When they have time', agency: 'Monthly, if in scope', diy: 'You do it manually' },
  { label: 'GEO / AI search optimization', sophie: 'Built into every brief', specialist: 'Depends on their skillset', agency: 'Often an expensive add-on', diy: 'Rarely covered by tools' },
  { label: 'Technical monitoring', sophie: 'Continuous', specialist: 'Periodic audits', agency: 'Quarterly audits', diy: 'You interpret the dashboards' },
  { label: 'Works with your brand voice', sophie: 'Yes — from your knowledge base', specialist: 'After months of ramp-up', agency: 'Generic until briefed well', diy: 'Only as good as your prompts' },
  { label: 'Ramp-up time', sophie: 'Same day', specialist: '2–3 months', agency: '4–6 weeks', diy: 'Weeks of learning curves' },
];

const team = [
  { name: 'Elena', role: 'AI Ads Manager', desc: 'Plans, writes, and optimizes your paid campaigns across Meta, Google, and TikTok.', to: '/ai-ads-manager', icon: '📣' },
  { name: 'Emma', role: 'AI Email Marketer', desc: 'Builds campaigns and automated flows that turn subscribers into repeat customers.', to: '/ai-email-marketer', icon: '✉️' },
  { name: 'Lora', role: 'AI Marketing Lead', desc: 'Coordinates your whole AI marketing team and builds your monthly strategy.', to: '/solution', icon: '🧭' },
];

const faqs = [
  { q: 'What is GEO and why does it matter?', a: 'GEO (Generative Engine Optimization) is the practice of structuring content so AI search engines — ChatGPT, Perplexity, Google AI Overviews — cite your brand in their answers. A growing share of buying research now happens inside AI assistants instead of classic Google results. Sophie optimizes every piece of content for both: classic SEO for Google rankings and GEO for AI citations.' },
  { q: 'How is Sophie different from SEO tools like Ahrefs or Semrush?', a: 'Ahrefs and Semrush are data platforms — they show you dashboards and expect you to know what to do next. Sophie is an AI employee: she does the research, decides what matters, writes the briefs, and delivers a prioritized action plan. You review and approve instead of digging through reports.' },
  { q: 'Will Sophie publish changes to my site without asking?', a: 'No. Everything Sophie produces — briefs, article drafts, on-page changes, fix lists — goes to your approval queue first. Nothing is published or modified without your explicit sign-off.' },
  { q: 'How long until I see SEO results?', a: 'SEO compounds over time. Quick wins — pages ranking 5–20 that Sophie pushes to page one — often move within 2–6 weeks. New content and topical authority typically take 3–6 months to fully mature. Sophie\'s daily tracking shows you progress from day one so you\'re never guessing.' },
  { q: 'Does Sophie write the articles too?', a: 'Sophie creates the strategy, keyword targets, and detailed briefs, and can generate full drafts optimized for SEO and GEO. For long-form content production at scale, she works hand-in-hand with Clara, your AI Content Writer — Sophie sets the target, Clara writes, Sophie verifies the optimization.' },
  { q: 'Do I need technical SEO knowledge to use her?', a: 'No. Sophie translates technical issues into plain language with a clear priority order: what\'s broken, why it matters for rankings, and exactly what to fix. If you have a developer, her fix lists are specific enough to hand over directly.' },
  { q: 'What does Sophie need access to?', a: 'At minimum, your website URL — she can audit and research from there. Connecting Google Search Console unlocks her full capability: quick-win detection, indexation monitoring, cannibalization checks, and daily rank tracking based on your real search data.' },
];

export default function AiSeoGeoManager() {
  useEffect(() => {
    document.title = 'Sophie — AI SEO/GEO Manager | Loraloop';
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <span>🔍 Sophie — AI SEO/GEO Manager</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-[#0f172a] leading-[1.05] tracking-[-0.03em] text-balance mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          Rank on Google.<br />
          <span style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Get cited by AI search.
          </span>
        </h1>
        <p className="text-[18px] md:text-[20px] text-[#4b5563] leading-[1.6] max-w-2xl mx-auto mb-10">
          Sophie handles keyword research, content briefs, on-page fixes, and technical SEO on autopilot — optimized for Google rankings and citations in ChatGPT, Perplexity, and Google AI Overviews.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', fontFamily: 'Satoshi, sans-serif' }}
          >
            Hire Sophie Free — No credit card
          </a>
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-gray-200 text-gray-700 font-bold text-base hover:bg-gray-50 transition-all"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            See pricing →
          </Link>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center text-[13px] font-semibold text-[#6b7280] uppercase tracking-[0.08em] mb-8">Why SEO can't be an afterthought anymore</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { stat: '53%', label: 'of all website traffic still comes from organic search' },
              { stat: '2x', label: 'the work — every page now competes on Google and in AI answers' },
              { stat: '15+', label: 'hours per week a proper SEO program demands from a human' },
            ].map((p) => (
              <div key={p.stat} className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold mb-2" style={{ fontFamily: 'Satoshi, sans-serif', background: 'linear-gradient(135deg, #7c3aed, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{p.stat}</p>
                <p className="text-[14px] text-[#6b7280] leading-[1.6]">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-20 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-5" style={{ fontFamily: 'Satoshi, sans-serif' }}>Search changed. Your SEO process didn't.</h2>
        <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] mb-4">
          Ranking used to mean pleasing Google. Now your customers ask ChatGPT, Perplexity, and Google AI Overviews — and if those engines don't cite you, you're invisible to a growing share of buyers. Most teams don't have time for classic SEO, let alone GEO on top of it.
        </p>
        <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6]">
          Sophie is an AI employee who runs both, full-time: researching keywords, briefing content, fixing pages, and monitoring your technical health — then presenting everything for your approval.
        </p>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Everything an SEO manager does — without the hire</h2>
          <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] text-center mb-12 max-w-xl mx-auto">Sophie covers the full search stack: research, content, on-page, technical, links, and AI-search visibility.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="text-[22px] font-semibold text-[#111827] leading-[1.25] tracking-[-0.015em] mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>{c.title}</h3>
                <p className="text-[14px] text-[#4b5563] leading-[1.6] mb-4">{c.desc}</p>
                <ul className="space-y-2">
                  {c.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-[14px] text-[#4b5563] leading-[1.6]">
                      <span className="text-violet-500 mt-0.5 flex-shrink-0">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating cadence */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Your SEO department, on a schedule</h2>
          <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] text-center mb-12 max-w-xl mx-auto">Sophie doesn't wait to be asked. She runs a full SEO + GEO operating cadence automatically.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cadence.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{c.icon}</span>
                  <span className="text-[12px] font-bold uppercase tracking-[0.06em] text-violet-700 bg-violet-50 px-3 py-1 rounded-full" style={{ fontFamily: 'Satoshi, sans-serif' }}>{c.freq}</span>
                </div>
                <h3 className="text-[18px] font-semibold text-[#111827] leading-[1.25] tracking-[-0.015em] mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>{c.title}</h3>
                <p className="text-[14px] text-[#4b5563] leading-[1.6]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-12" style={{ fontFamily: 'Satoshi, sans-serif' }}>How Sophie works</h2>
          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', fontFamily: 'Satoshi, sans-serif' }}>{s.step}</div>
                <div>
                  <h3 className="text-[22px] font-semibold text-[#111827] leading-[1.25] tracking-[-0.015em] mb-1" style={{ fontFamily: 'Satoshi, sans-serif' }}>{s.title}</h3>
                  <p className="text-[#4b5563] text-[14px] leading-[1.6]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Plugs into your existing stack</h2>
        <p className="text-[#4b5563] text-[16px] leading-[1.6] mb-8 max-w-xl mx-auto">Sophie works with the tools and platforms you already use — no migration, no new CMS.</p>
        <div className="flex flex-wrap justify-center gap-3">
          {integrations.map((name) => (
            <span key={name} className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-[14px] font-semibold text-[#374151]" style={{ fontFamily: 'Satoshi, sans-serif' }}>{name}</span>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Sophie vs the alternatives</h2>
          <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] text-center mb-12 max-w-xl mx-auto">How an AI SEO/GEO manager compares to hiring, agencies, and DIY tooling.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-5 py-4 text-[13px] font-semibold text-[#6b7280] uppercase tracking-[0.06em]" style={{ fontFamily: 'Satoshi, sans-serif' }}></th>
                  <th className="px-5 py-4 text-[15px] font-bold" style={{ fontFamily: 'Satoshi, sans-serif', background: 'linear-gradient(135deg, #7c3aed, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Sophie (Loraloop)</th>
                  <th className="px-5 py-4 text-[15px] font-bold text-[#111827]" style={{ fontFamily: 'Satoshi, sans-serif' }}>In-house specialist</th>
                  <th className="px-5 py-4 text-[15px] font-bold text-[#111827]" style={{ fontFamily: 'Satoshi, sans-serif' }}>SEO agency</th>
                  <th className="px-5 py-4 text-[15px] font-bold text-[#111827]" style={{ fontFamily: 'Satoshi, sans-serif' }}>DIY with tools</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-gray-50/50' : ''}>
                    <td className="px-5 py-4 text-[14px] font-semibold text-[#111827] whitespace-nowrap" style={{ fontFamily: 'Satoshi, sans-serif' }}>{row.label}</td>
                    <td className="px-5 py-4 text-[14px] text-[#4b5563] leading-[1.5] font-medium">{row.sophie}</td>
                    <td className="px-5 py-4 text-[14px] text-[#6b7280] leading-[1.5]">{row.specialist}</td>
                    <td className="px-5 py-4 text-[14px] text-[#6b7280] leading-[1.5]">{row.agency}</td>
                    <td className="px-5 py-4 text-[14px] text-[#6b7280] leading-[1.5]">{row.diy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Team cross-links */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Sophie works best with her team</h2>
        <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] text-center mb-12 max-w-xl mx-auto">Your organic strategy connects to ads, email, and content through the rest of your AI marketing team.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {team.map((m) => (
            <Link key={m.name} to={m.to} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-violet-200 transition-all block">
              <div className="text-3xl mb-3">{m.icon}</div>
              <h3 className="text-[20px] font-semibold text-[#111827] leading-[1.25] tracking-[-0.015em] mb-1" style={{ fontFamily: 'Satoshi, sans-serif' }}>{m.name}</h3>
              <p className="text-[13px] font-semibold text-violet-600 mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>{m.role}</p>
              <p className="text-[14px] text-[#4b5563] leading-[1.6]">{m.desc}</p>
              <p className="text-violet-600 font-semibold text-[14px] mt-3">Meet {m.name} →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center rounded-3xl p-12" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)' }}>
          <h2 className="text-3xl md:text-[40px] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Put your SEO on autopilot</h2>
          <p className="text-violet-100 text-[16px] mb-8 leading-[1.6]">Start free. Connect your site, get your first SEO + GEO roadmap, and see your quick wins the same day.</p>
          <a
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 bg-white rounded-full text-violet-700 font-bold text-base hover:bg-gray-50 transition-all"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Hire Sophie Free →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto pb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>Frequently asked questions</h2>
        <div className="space-y-2">
          {faqs.map((faq) => (
            <details key={faq.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-[#111827] text-[16px] flex items-center justify-between list-none" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                {faq.q}
                <span className="text-violet-500 text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="px-6 pb-5 text-[14px] text-[#4b5563] leading-[1.6]">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-[#6b7280] text-[14px] mb-4">Still have questions?</p>
          <Link to="/contact" className="text-violet-600 font-semibold text-[14px] hover:underline">Talk to us →</Link>
        </div>
      </section>
    </div>
  );
}
