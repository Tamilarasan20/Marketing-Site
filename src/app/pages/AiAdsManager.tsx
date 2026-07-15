import { useEffect } from 'react';
import { Link } from 'react-router';

const capabilities = [
  {
    icon: '🎯',
    title: 'Campaign strategy & structure',
    desc: 'Elena plans full-funnel campaign structures — prospecting, retargeting, retention — mapped to your goals and budget, not copied from a template.',
    points: [
      'Full-funnel architecture: awareness, consideration, conversion',
      'Budget split recommendations across Meta, Google, and TikTok',
      'Campaign objectives matched to your actual revenue goals',
      'Naming conventions and structure that stay auditable',
    ],
  },
  {
    icon: '✍️',
    title: 'Ad copy & creative briefs',
    desc: 'Hooks, headlines, primary text, and CTAs in your brand voice — plus creative briefs your designer (or Steve, your AI Visual Designer) can execute directly.',
    points: [
      'Multiple angles per campaign: pain-led, benefit-led, social proof',
      'Platform-native copy — Meta, Google RSA, TikTok each get their own',
      'Creative briefs with format, ratio, and messaging direction',
      'Every variant written from your brand knowledge base',
    ],
  },
  {
    icon: '👥',
    title: 'Audience targeting & segmentation',
    desc: 'Elena builds and refines your audience strategy — cold interest stacks, lookalikes, retargeting windows, and exclusions that stop wasted spend.',
    points: [
      'Interest and lookalike audience recommendations per platform',
      'Retargeting segments by funnel stage and recency',
      'Exclusion lists so you stop paying to reach existing customers',
      'Audience overlap checks to prevent self-competition',
    ],
  },
  {
    icon: '💸',
    title: 'Budget & bid optimization',
    desc: 'Daily budget reallocation toward what\'s working. Elena flags winners to scale and losers to pause — before they burn through your budget.',
    points: [
      'Daily performance checks across every active campaign',
      'Reallocation recommendations from losers to winners',
      'Scaling plans that protect performance while spend grows',
      'Fatigue detection before frequency kills your ROAS',
    ],
  },
  {
    icon: '🧪',
    title: 'A/B testing programs',
    desc: 'A structured, always-on testing roadmap — hooks, creatives, audiences, and offers — so every month makes your account smarter.',
    points: [
      'Prioritized test backlog: biggest potential impact first',
      'Clean test design — one variable at a time, real significance',
      'Learnings logged and applied to every future campaign',
      'Creative iteration loops based on winning angles',
    ],
  },
  {
    icon: '📊',
    title: 'ROAS reporting & insights',
    desc: 'Plain-language performance reports: what you spent, what you made, what changed, and what Elena recommends next.',
    points: [
      'Spend, ROAS, CPA, and CTR tracked across all platforms in one view',
      'Anomaly alerts when a metric moves outside its normal range',
      'Creative-level breakdowns showing which angles convert',
      'Monthly strategy reviews with next month\'s plan',
    ],
  },
];

const cadence = [
  { freq: 'Daily', icon: '📈', title: 'Performance monitoring', desc: 'Every active campaign is checked daily — spend pacing, ROAS, CPA, and frequency — with alerts when something moves outside its normal range.' },
  { freq: 'Daily', icon: '⚖️', title: 'Budget reallocation calls', desc: 'Winners get flagged to scale, losers get flagged to pause. You approve; nothing changes in your ad account without sign-off.' },
  { freq: 'Weekly', icon: '✍️', title: 'Fresh copy & creative angles', desc: 'New hooks, headlines, and creative briefs land in your approval queue weekly — so your account never runs stale creative.' },
  { freq: 'Weekly', icon: '🧪', title: 'Test analysis & next tests', desc: 'Elena reads out finished A/B tests, logs the learnings, and queues the next highest-impact test from the backlog.' },
  { freq: 'Bi-weekly', icon: '👥', title: 'Audience refresh', desc: 'Retargeting windows, lookalikes, and exclusions get reviewed and refreshed every two weeks as your data grows.' },
  { freq: 'Monthly', icon: '🗺️', title: 'Strategy & budget review', desc: 'A full-account review: what worked, what didn\'t, where next month\'s budget should go, and which channels earn a bigger share.' },
];

const steps = [
  { step: '01', title: 'Connect your ad accounts', desc: 'Link Meta, Google, or TikTok ads. Elena audits your current campaigns, spend, and performance history in her first session.' },
  { step: '02', title: 'Elena learns your brand & offer', desc: 'She reads your brand knowledge base — voice, audience, positioning, offers — so ad copy sounds like you and targeting matches your real customer.' },
  { step: '03', title: 'Get your paid media plan', desc: 'A complete plan: campaign structure, budget split, audiences, and the first batch of ad copy and creative briefs — ready for review.' },
  { step: '04', title: 'Approve before anything spends', desc: 'Campaign changes, new ads, and budget moves all wait in your approval queue. You stay in control of every dollar.' },
  { step: '05', title: 'Optimization never sleeps', desc: 'Elena monitors daily, tests weekly, and reviews monthly — compounding your account\'s performance while you run the business.' },
];

const integrations = ['Meta Ads', 'Google Ads', 'TikTok Ads', 'LinkedIn Ads', 'Google Analytics', 'Shopify', 'Instagram', 'Facebook'];

const comparison = [
  { label: 'Monthly cost', elena: 'Included in your Loraloop plan', specialist: '$6,000–$10,000 salary', agency: '10–20% of ad spend', diy: 'Your evenings and weekends' },
  { label: 'Monitoring frequency', elena: 'Daily, every campaign', specialist: 'Most weekdays', agency: 'Weekly check-ins', diy: 'When you remember' },
  { label: 'Creative refresh', elena: 'New angles every week', specialist: 'When bandwidth allows', agency: 'Monthly, often extra cost', diy: 'Sporadic' },
  { label: 'Minimum ad spend', elena: 'None', specialist: 'Needs scale to justify salary', agency: 'Often $5k–$10k/mo minimum', diy: 'None' },
  { label: 'Uses your brand voice', elena: 'Yes — from your knowledge base', specialist: 'After ramp-up', agency: 'Generic until briefed well', diy: 'Yes, but slowly' },
  { label: 'Ramp-up time', elena: 'Same day', specialist: '1–3 months', agency: '2–6 weeks', diy: 'Months of trial & error' },
];

const team = [
  { name: 'Sophie', role: 'AI SEO/GEO Manager', desc: 'Ranks your site on Google and gets you cited by ChatGPT, Perplexity, and AI Overviews.', to: '/ai-seo-geo-manager', icon: '🔍' },
  { name: 'Emma', role: 'AI Email Marketer', desc: 'Turns the traffic your ads buy into repeat customers with campaigns and automated flows.', to: '/ai-email-marketer', icon: '✉️' },
  { name: 'Lora', role: 'AI Marketing Lead', desc: 'Coordinates your whole AI marketing team and builds your monthly strategy.', to: '/solution', icon: '🧭' },
];

const faqs = [
  { q: 'Will Elena spend money without my approval?', a: 'No. Every campaign launch, budget change, and new ad goes to your approval queue first. Elena recommends and prepares; you approve. Nothing in your ad account changes without your explicit sign-off.' },
  { q: 'Which ad platforms does Elena support?', a: 'Meta (Facebook & Instagram), Google Ads, TikTok Ads, and LinkedIn Ads. She plans cross-platform budget splits, writes platform-native copy for each, and reports performance across all of them in one view.' },
  { q: 'How is Elena different from Meta Advantage+ or Google\'s auto-bidding?', a: 'Platform automation optimizes inside one platform — and it optimizes for the platform\'s interests. Elena works across platforms, on your side: she decides how budget splits between Meta, Google, and TikTok, keeps creative fresh, designs proper tests, and translates results into plain language. Platform automation is a tactic; Elena runs the strategy.' },
  { q: 'Do I need a big ad budget for this to make sense?', a: 'No. Unlike agencies with $5k–$10k monthly spend minimums, Elena works at any budget. Small accounts arguably benefit most — every wasted dollar hurts more, and Elena\'s daily monitoring catches waste that a monthly agency check-in would miss.' },
  { q: 'Does Elena make the ad creatives too?', a: 'Elena writes all ad copy — hooks, headlines, primary text, CTAs — and produces detailed creative briefs with format, ratio, and messaging direction. For visual production she works with Steve, your AI Visual Designer, or hands briefs to your own designer.' },
  { q: 'What if my campaigns are already running?', a: 'Even better. Elena starts with a full audit of your existing account — structure, spend, audience overlap, creative fatigue — and finds the waste and quick wins first. You don\'t start over; you start optimizing.' },
  { q: 'How does Elena report performance?', a: 'In plain language, not dashboards. You get regular summaries of what you spent, what you made (ROAS/CPA), what changed, and what she recommends next — plus immediate alerts when a metric moves outside its normal range.' },
];

export default function AiAdsManager() {
  useEffect(() => {
    document.title = 'Elena — AI Ads Manager | Loraloop';
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <span>📣 Elena — AI Ads Manager</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-[#0f172a] leading-[1.05] tracking-[-0.03em] text-balance mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          Paid ads that optimize<br />
          <span style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            while you sleep
          </span>
        </h1>
        <p className="text-[18px] md:text-[20px] text-[#4b5563] leading-[1.6] max-w-2xl mx-auto mb-10">
          Elena plans your campaigns, writes the ads, builds the audiences, and monitors performance daily across Meta, Google, and TikTok — recommending every budget move for your approval.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', fontFamily: 'Satoshi, sans-serif' }}
          >
            Hire Elena Free — No credit card
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
          <p className="text-center text-[13px] font-semibold text-[#6b7280] uppercase tracking-[0.08em] mb-8">Why ad accounts leak money</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { stat: '~26%', label: 'of ad spend is typically wasted on poor targeting and stale creative' },
              { stat: '72h', label: 'is all it takes for a fatigued ad to burn budget before a weekly check catches it' },
              { stat: '10–20%', label: 'of your ad spend is what agencies charge just to manage it' },
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
        <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-5" style={{ fontFamily: 'Satoshi, sans-serif' }}>Ads reward attention. Nobody has enough of it.</h2>
        <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] mb-4">
          Paid media punishes neglect: creative fatigues in days, audiences saturate, and platforms happily keep spending your budget on what stopped working. Managing it properly is a daily job — which is why agencies charge a percentage of spend and specialists cost six figures.
        </p>
        <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6]">
          Elena is an AI employee who gives your ad account that daily attention: monitoring performance, refreshing creative, rebalancing budgets — and asking for your approval before anything changes.
        </p>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Everything a paid media manager does — without the retainer</h2>
          <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] text-center mb-12 max-w-xl mx-auto">Elena covers the full paid stack: strategy, copy, audiences, budgets, testing, and reporting.</p>
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
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Your paid media desk, on a schedule</h2>
          <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] text-center mb-12 max-w-xl mx-auto">Elena runs the operating cadence a top media buyer would — automatically.</p>
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
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-12" style={{ fontFamily: 'Satoshi, sans-serif' }}>How Elena works</h2>
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
        <h2 className="text-2xl md:text-3xl font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Works with your ad platforms</h2>
        <p className="text-[#4b5563] text-[16px] leading-[1.6] mb-8 max-w-xl mx-auto">Elena plugs into your existing ad accounts — your data stays in your platforms, under your control.</p>
        <div className="flex flex-wrap justify-center gap-3">
          {integrations.map((name) => (
            <span key={name} className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-[14px] font-semibold text-[#374151]" style={{ fontFamily: 'Satoshi, sans-serif' }}>{name}</span>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Elena vs the alternatives</h2>
          <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] text-center mb-12 max-w-xl mx-auto">How an AI ads manager compares to hiring, agencies, and doing it yourself.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-5 py-4 text-[13px] font-semibold text-[#6b7280] uppercase tracking-[0.06em]" style={{ fontFamily: 'Satoshi, sans-serif' }}></th>
                  <th className="px-5 py-4 text-[15px] font-bold" style={{ fontFamily: 'Satoshi, sans-serif', background: 'linear-gradient(135deg, #7c3aed, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Elena (Loraloop)</th>
                  <th className="px-5 py-4 text-[15px] font-bold text-[#111827]" style={{ fontFamily: 'Satoshi, sans-serif' }}>In-house media buyer</th>
                  <th className="px-5 py-4 text-[15px] font-bold text-[#111827]" style={{ fontFamily: 'Satoshi, sans-serif' }}>Ads agency</th>
                  <th className="px-5 py-4 text-[15px] font-bold text-[#111827]" style={{ fontFamily: 'Satoshi, sans-serif' }}>DIY</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-gray-50/50' : ''}>
                    <td className="px-5 py-4 text-[14px] font-semibold text-[#111827] whitespace-nowrap" style={{ fontFamily: 'Satoshi, sans-serif' }}>{row.label}</td>
                    <td className="px-5 py-4 text-[14px] text-[#4b5563] leading-[1.5] font-medium">{row.elena}</td>
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
        <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Elena works best with her team</h2>
        <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] text-center mb-12 max-w-xl mx-auto">Paid traffic converts better when organic, email, and strategy pull in the same direction.</p>
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
          <h2 className="text-3xl md:text-[40px] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Stop leaking ad spend</h2>
          <p className="text-violet-100 text-[16px] mb-8 leading-[1.6]">Start free. Connect your ad accounts, get a full audit, and see where your budget is being wasted — the same day.</p>
          <a
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 bg-white rounded-full text-violet-700 font-bold text-base hover:bg-gray-50 transition-all"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Hire Elena Free →
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
