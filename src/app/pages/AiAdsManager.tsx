import { useEffect } from 'react';
import { Link } from 'react-router';
import avatarSophie from '../assets/agents/sophie.png';
import avatarElena from '../assets/agents/elena.png';
import avatarEmma from '../assets/agents/emma.png';
import avatarLora from '../assets/agents/lora.png';

const capabilities = [
  {
    icon: '🎯',
    title: 'I plan and structure your campaigns',
    desc: 'I build full-funnel campaign structures — prospecting, retargeting, retention — mapped to your goals and budget, not copied from a template.',
    points: [
      'Full-funnel architecture: awareness, consideration, conversion',
      'Budget split recommendations across Meta, Google, and TikTok',
      'Objectives matched to your actual revenue goals',
      'Clean naming and structure that stay auditable',
    ],
  },
  {
    icon: '✍️',
    title: 'I write your ads and creative briefs',
    desc: 'Hooks, headlines, primary text, and CTAs in your brand voice — plus creative briefs your designer (or Steve, your AI Visual Designer) can execute directly.',
    points: [
      'Multiple angles per campaign: pain-led, benefit-led, social proof',
      'Platform-native copy — Meta, Google RSA, and TikTok each get their own',
      'Creative briefs with format, ratio, and messaging direction',
      'Every variant written from your brand knowledge base',
    ],
  },
  {
    icon: '👥',
    title: 'I build and refine your audiences',
    desc: 'I manage your whole audience strategy — cold interest stacks, lookalikes, retargeting windows, and exclusions that stop wasted spend.',
    points: [
      'Interest and lookalike recommendations per platform',
      'Retargeting segments by funnel stage and recency',
      'Exclusion lists so you stop paying to reach existing customers',
      'Overlap checks to prevent your ads competing with each other',
    ],
  },
  {
    icon: '💸',
    title: 'I reallocate budget every day',
    desc: 'I move budget toward what\'s working — flagging winners to scale and losers to pause before they burn through your budget. You approve each move.',
    points: [
      'Daily performance checks across every active campaign',
      'Reallocation from losers to winners, for your sign-off',
      'Scaling plans that protect performance as spend grows',
      'Fatigue detection before frequency kills your ROAS',
    ],
  },
  {
    icon: '🧪',
    title: 'I run an always-on testing program',
    desc: 'A structured testing roadmap — hooks, creatives, audiences, and offers — so every week makes your account smarter.',
    points: [
      'Prioritized test backlog: biggest potential impact first',
      'Clean test design — one variable at a time, real significance',
      'Learnings logged and applied to every future campaign',
      'Creative iteration loops based on winning angles',
    ],
  },
  {
    icon: '📊',
    title: 'I report ROAS in plain language',
    desc: 'No dashboards to decode — I tell you what you spent, what you made, what changed, and what I recommend next.',
    points: [
      'Spend, ROAS, CPA, and CTR across all platforms in one view',
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
  { name: 'Sophie', role: 'AI SEO/GEO Manager', desc: 'Ranks your site on Google and gets you cited by ChatGPT, Perplexity, and AI Overviews.', to: '/ai-seo-geo-manager', avatar: avatarSophie, ring: '#f472b6' },
  { name: 'Emma', role: 'AI Email Marketer', desc: 'Turns the traffic your ads buy into repeat customers with campaigns and automated flows.', to: '/ai-email-marketer', avatar: avatarEmma, ring: '#60a5fa' },
  { name: 'Lora', role: 'AI Marketing Lead', desc: 'Coordinates your whole AI marketing team and builds your monthly strategy.', to: '/solution', avatar: avatarLora, ring: '#c084fc' },
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
      <section className="pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 bg-white border border-gray-200 shadow-sm pl-1.5 pr-4 py-1.5 rounded-full mb-6">
              <span className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0" style={{ background: 'linear-gradient(135deg, #d1fae5, #ede9fe)' }}>
                <img src={avatarElena} alt="Elena" className="absolute inset-0 w-full h-full object-cover" />
              </span>
              <span className="text-sm font-semibold text-[#111827]" style={{ fontFamily: 'Satoshi, sans-serif' }}>Elena</span>
              <span className="w-px h-4 bg-gray-200" />
              <span className="text-sm font-medium text-[#6b7280]">AI Ads Manager</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full ml-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />Online</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#0f172a] leading-[1.05] tracking-[-0.03em] text-balance mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              Hi, I'm Elena —<br />
              <span style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                your paid ads manager.
              </span>
            </h1>
            <p className="text-[18px] md:text-[20px] text-[#4b5563] leading-[1.6] max-w-2xl mx-auto lg:mx-0 mb-8">
              I plan your campaigns, write the ads, build the audiences, and watch performance every day across Meta, Google, and TikTok. <span className="text-[#111827] font-semibold">You approve every move. I optimize.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="/app/signup"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', fontFamily: 'Satoshi, sans-serif' }}
              >
                Get started free
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-gray-200 text-gray-700 font-bold text-base hover:bg-gray-50 transition-all"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                See how I work →
              </a>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start text-[13px] text-[#6b7280] font-medium">
              <span><span className="text-emerald-500">✓</span> No credit card</span>
              <span><span className="text-emerald-500">✓</span> You approve every budget move</span>
              <span><span className="text-emerald-500">✓</span> Meta · Google · TikTok</span>
            </div>
          </div>

          {/* Agent mockup panel */}
          <div className="relative max-w-[520px] w-full mx-auto lg:mx-0">
            <div className="absolute -inset-8 rounded-[40px] opacity-30 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 20%, #a78bfa, transparent 60%), radial-gradient(circle at 80% 80%, #60a5fa, transparent 60%)' }} />
            <div className="relative bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden text-left">
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-100 bg-gray-50/60">
                <span className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white shadow-sm" style={{ background: 'linear-gradient(135deg, #d1fae5, #ede9fe)' }}>
                  <img src={avatarElena} alt="Elena" className="absolute inset-0 w-full h-full object-cover" />
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-[#111827] leading-tight" style={{ fontFamily: 'Satoshi, sans-serif' }}>Elena</p>
                  <p className="text-[11px] text-[#6b7280] leading-tight">AI Ads Manager</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />6:00 AM</span>
              </div>
              <div className="p-5 space-y-4">
                <div className="rounded-xl border border-gray-200 overflow-hidden">
                  <div className="grid grid-cols-[1fr_auto_auto] gap-3 px-4 py-2 bg-gray-50 text-[10px] font-bold uppercase tracking-[0.06em] text-[#6b7280]">
                    <span>Campaign</span><span>ROAS</span><span>Call</span>
                  </div>
                  {[
                    { c: 'Prospecting — Meta', r: '3.8x ↑', tag: 'Scale +20%', tone: 'text-emerald-700 bg-emerald-50' },
                    { c: 'Retargeting 30d — Meta', r: '4.6x →', tag: 'Keep', tone: 'text-blue-700 bg-blue-50' },
                    { c: 'Broad — TikTok', r: '0.9x ↓', tag: 'Pause', tone: 'text-red-700 bg-red-50' },
                  ].map((row) => (
                    <div key={row.c} className="grid grid-cols-[1fr_auto_auto] gap-3 items-center px-4 py-2.5 border-t border-gray-100 text-[12px]">
                      <span className="text-[#111827] font-medium truncate">{row.c}</span>
                      <span className="text-[#6b7280] font-semibold whitespace-nowrap">{row.r}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${row.tone}`}>{row.tag}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-3">
                  <span className="relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0" style={{ background: 'linear-gradient(135deg, #d1fae5, #ede9fe)' }}><img src={avatarElena} alt="Elena" className="absolute inset-0 w-full h-full object-cover" /></span>
                  <div className="bg-violet-50 rounded-2xl rounded-tl-md px-4 py-2.5 text-[13px] text-[#111827] leading-[1.5]">TikTok Broad has been under 1x for 3 days. Shift its $40/day to Meta Prospecting?</div>
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <span className="inline-flex items-center justify-center px-4 py-2 rounded-full text-white text-[12px] font-bold" style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', fontFamily: 'Satoshi, sans-serif' }}>Approve</span>
                  <span className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-gray-200 text-[#374151] text-[12px] font-bold" style={{ fontFamily: 'Satoshi, sans-serif' }}>Adjust</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Old way vs the Elena way */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[13px] font-bold text-violet-600 uppercase tracking-[0.08em] mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Why me</p>
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-12" style={{ fontFamily: 'Satoshi, sans-serif' }}>The old way vs. the Elena way</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-8">
              <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#9ca3af] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>The old way</p>
              <p className="text-[20px] font-semibold text-[#6b7280] leading-[1.4] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>Set-and-forget ads, stale creative, budget quietly burning.</p>
              <ul className="space-y-3">
                {['Campaigns checked once a week — if that', 'Creative that fatigues before anyone notices', 'Budget stuck on losers while winners starve', 'Agency fees of 10–20% of your ad spend'].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[14px] text-[#6b7280] leading-[1.6]">
                    <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5">✕</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl p-8 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)' }}>
              <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-violet-200 mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>The Elena way</p>
              <p className="text-[20px] font-semibold leading-[1.4] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>Daily optimization across every platform, every dollar working.</p>
              <ul className="space-y-3">
                {['I check every campaign daily and flag the moves', 'Fresh copy and creative angles every week', 'Budget shifted from losers to winners automatically', 'No percentage-of-spend fees — I come with your plan'].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[14px] text-violet-50 leading-[1.6]">
                    <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              { stat: '~26%', label: 'of ad spend is typically wasted — I hunt it down every day' },
              { stat: 'Daily', label: 'budget reallocation instead of a weekly agency check-in' },
              { stat: '0%', label: 'of your ad spend goes to management fees' },
            ].map((p) => (
              <div key={p.stat} className="text-center bg-white rounded-2xl border border-gray-100 shadow-sm py-7 px-4">
                <p className="text-3xl md:text-4xl font-extrabold mb-2" style={{ fontFamily: 'Satoshi, sans-serif', background: 'linear-gradient(135deg, #7c3aed, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{p.stat}</p>
                <p className="text-[13px] text-[#6b7280] leading-[1.6]">{p.label}</p>
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

      {/* Deep dive: launch */}
      <section className="py-20 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-[13px] font-bold text-violet-600 uppercase tracking-[0.08em] mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>From brief to built</p>
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-5" style={{ fontFamily: 'Satoshi, sans-serif' }}>One instruction. A launch-ready campaign.</h2>
            <p className="text-[#4b5563] text-[17px] leading-[1.7] mb-6">
              Tell Elena what you're launching and she builds the whole thing — structure, audiences, exclusions, and a dozen copy variants in your brand voice — then waits for your sign-off.
            </p>
            <ul className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
              {['Full-funnel structure: prospecting, retargeting, retention', 'Copy variants per angle — pain-led, benefit-led, social proof', 'Audiences and exclusions set so you never pay to reach buyers twice'].map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-[15px] text-[#4b5563] leading-[1.6]">
                  <span className="w-5 h-5 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative max-w-[520px] w-full mx-auto lg:mx-0 order-1 lg:order-2">
            <div className="absolute -inset-8 rounded-[40px] opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, #a78bfa, transparent 60%)' }} />
            <div className="relative bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden text-left">
              <div className="px-5 py-3.5 border-b border-gray-100 bg-gray-50/60">
                <p className="text-[13px] font-bold text-[#111827]" style={{ fontFamily: 'Satoshi, sans-serif' }}>🚀 New campaign build</p>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex justify-end">
                  <div className="bg-gray-100 rounded-2xl rounded-br-md px-4 py-2.5 text-[13px] text-[#111827] max-w-[85%] leading-[1.5]">We're launching the summer bundle Friday — set up the ads.</div>
                </div>
                <div className="space-y-2 text-[13px] leading-[1.5]">
                  <p className="flex items-start gap-2 text-[#4b5563]"><span className="text-emerald-500 flex-shrink-0">✓</span>Campaign structure — 3 ad sets, full funnel</p>
                  <p className="flex items-start gap-2 text-[#4b5563]"><span className="text-emerald-500 flex-shrink-0">✓</span>12 ad variants written in your brand voice</p>
                  <p className="flex items-start gap-2 text-[#4b5563]"><span className="text-emerald-500 flex-shrink-0">✓</span>Audiences, exclusions & budget split set</p>
                  <p className="flex items-start gap-2 text-[#6b7280]"><span className="w-3.5 h-3.5 mt-0.5 rounded-full border-2 border-violet-300 border-t-violet-600 animate-spin flex-shrink-0" />Creative briefs for your designer…</p>
                </div>
                <div className="rounded-xl border border-gray-200 p-4 space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#6b7280]">Ad variant · Hook A</p>
                  <p className="text-[13px] text-[#111827] font-medium leading-[1.5]">"Your summer wardrobe, solved in one box ☀️ — 20% off launch week only."</p>
                  <div className="flex gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-violet-50 text-violet-700 text-[11px] font-semibold">Benefit-led</span>
                    <span className="px-2.5 py-1 rounded-full bg-violet-50 text-violet-700 text-[11px] font-semibold">Meta · 4:5</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <span className="inline-flex items-center justify-center px-4 py-2 rounded-full text-white text-[12px] font-bold" style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', fontFamily: 'Satoshi, sans-serif' }}>Approve & launch</span>
                  <span className="text-[12px] font-semibold text-violet-600">Review all 12 →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep dive: testing */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="relative max-w-[520px] w-full mx-auto lg:mx-0">
            <div className="absolute -inset-8 rounded-[40px] opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 70%, #60a5fa, transparent 60%)' }} />
            <div className="relative bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden text-left">
              <div className="px-5 py-3.5 border-b border-gray-100 bg-gray-50/60 flex items-center justify-between">
                <p className="text-[13px] font-bold text-[#111827]" style={{ fontFamily: 'Satoshi, sans-serif' }}>🧪 Test #14 — readout</p>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">Complete</span>
              </div>
              <div className="p-5 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-emerald-700 mb-1">Hook A — Winner</p>
                    <p className="text-[13px] text-[#111827] font-medium leading-[1.5] mb-2">"Still doing marketing at midnight?"</p>
                    <p className="text-[20px] font-extrabold text-emerald-700" style={{ fontFamily: 'Satoshi, sans-serif' }}>2.4% CTR</p>
                  </div>
                  <div className="rounded-xl border border-gray-200 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#6b7280] mb-1">Hook B</p>
                    <p className="text-[13px] text-[#4b5563] font-medium leading-[1.5] mb-2">"Meet your new marketing team."</p>
                    <p className="text-[20px] font-extrabold text-[#6b7280]" style={{ fontFamily: 'Satoshi, sans-serif' }}>1.8% CTR</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0" style={{ background: 'linear-gradient(135deg, #d1fae5, #ede9fe)' }}><img src={avatarElena} alt="Elena" className="absolute inset-0 w-full h-full object-cover" /></span>
                  <div className="bg-violet-50 rounded-2xl rounded-tl-md px-4 py-2.5 text-[13px] text-[#111827] leading-[1.5]">Pain-led hooks beat feature-led for cold traffic (+31% CTR). Logged — next test: offer framing.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-[13px] font-bold text-violet-600 uppercase tracking-[0.08em] mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Always-on testing</p>
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-5" style={{ fontFamily: 'Satoshi, sans-serif' }}>Every week, your account gets smarter</h2>
            <p className="text-[#4b5563] text-[17px] leading-[1.7] mb-6">
              Elena runs a structured testing program — one clean variable at a time, real significance thresholds — and logs every learning so it compounds into your next campaign.
            </p>
            <ul className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
              {['Prioritized test backlog — biggest potential impact first', 'Weekly readouts in plain language, not spreadsheets', 'Learnings applied automatically to future copy and creative'].map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-[15px] text-[#4b5563] leading-[1.6]">
                  <span className="w-5 h-5 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-16 px-4 bg-gray-50 border-y border-gray-100 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[13px] font-bold text-violet-600 uppercase tracking-[0.08em] mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Solutions</p>
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Paid media, fully handled. You just approve.</h2>
          <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] text-center mb-12 max-w-xl mx-auto">Here's everything I take off your plate — strategy, copy, audiences, budgets, testing, and reporting.</p>
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
              <span className="relative block w-16 h-16 rounded-full overflow-hidden mb-4" style={{ background: 'linear-gradient(135deg, #f5f3ff, #eff6ff)', boxShadow: `0 0 0 2px ${m.ring}` }}>
                <img src={m.avatar} alt={m.name} className="absolute inset-0 w-full h-full object-cover" />
              </span>
              <h3 className="text-[20px] font-semibold text-[#111827] leading-[1.25] tracking-[-0.015em] mb-1" style={{ fontFamily: 'Satoshi, sans-serif' }}>{m.name}</h3>
              <p className="text-[13px] font-semibold text-violet-600 mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>{m.role}</p>
              <p className="text-[14px] text-[#4b5563] leading-[1.6]">{m.desc}</p>
              <p className="text-violet-600 font-semibold text-[14px] mt-3">Meet {m.name} →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Pricing band */}
      <section className="py-20 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[13px] font-bold text-violet-600 uppercase tracking-[0.08em] mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Pricing</p>
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>One subscription. Your whole AI team.</h2>
          <p className="text-[#4b5563] text-[18px] leading-[1.6] mb-8 max-w-xl mx-auto">You don't hire me alone — every plan includes all 9 AI employees, so your ads, SEO, email, and social all pull in the same direction.</p>
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white rounded-3xl border border-gray-200 shadow-sm px-10 py-8">
            <div className="text-left">
              <p className="text-[13px] text-[#6b7280] mb-1">Plans start at</p>
              <p className="text-4xl font-extrabold text-[#111827]" style={{ fontFamily: 'Satoshi, sans-serif' }}>$24.90<span className="text-[18px] font-semibold text-[#6b7280]">/mo</span></p>
              <p className="text-[13px] text-emerald-600 font-semibold mt-1">7-day free trial · no credit card</p>
            </div>
            <div className="w-px h-16 bg-gray-200 hidden sm:block" />
            <Link to="/pricing" className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:opacity-90" style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', fontFamily: 'Satoshi, sans-serif' }}>See all plans →</Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center rounded-3xl p-12" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)' }}>
          <h2 className="text-3xl md:text-[40px] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Ready to work with me?</h2>
          <p className="text-violet-100 text-[16px] mb-8 leading-[1.6]">Connect your ad accounts and I'll audit them the same day — showing you exactly where budget is leaking and what I'd change. You approve; I optimize.</p>
          <a
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 bg-white rounded-full text-violet-700 font-bold text-base hover:bg-gray-50 transition-all"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Get started with Elena →
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
