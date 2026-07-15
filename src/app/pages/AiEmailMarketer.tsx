import { useEffect } from 'react';
import { Link } from 'react-router';
import avatarSophie from '../assets/agents/sophie.png';
import avatarElena from '../assets/agents/elena.png';
import avatarEmma from '../assets/agents/emma.png';
import avatarLora from '../assets/agents/lora.png';

const capabilities = [
  {
    icon: '💡',
    title: 'I bring you campaign ideas',
    desc: 'I suggest ready-to-send campaign concepts based on your products, upcoming calendar dates, and what has worked before — so you never face a blank page.',
    points: [
      'Ideas drawn from your catalog, seasonality, and past winners',
      'Ready-to-approve concepts, not blank-page prompts',
      'I notice when you haven\'t emailed in a while and draft proactively',
      'Aligned to your monthly marketing plan and promotions',
    ],
  },
  {
    icon: '✉️',
    title: 'I build the whole campaign',
    desc: 'From one instruction — "promote the new collection to engaged subscribers, 15% off" — I build everything: subject line, copy, layout, segment, and schedule.',
    points: [
      'Subject lines and preview text written to earn the open',
      'Body copy in your brand voice, from your knowledge base',
      'Mobile-optimized layouts with your brand colors and imagery',
      'The right segment and send time for the campaign\'s goal',
    ],
  },
  {
    icon: '🔁',
    title: 'I run your automated flows',
    desc: 'Welcome series, abandoned cart, browse abandonment, post-purchase, win-back — I design and write the automations that convert on autopilot.',
    points: [
      'Welcome flows that turn new subscribers into first purchases',
      'Abandoned cart and browse recovery sequences',
      'Post-purchase flows that drive reviews and repeat orders',
      'Win-back campaigns for dormant subscribers',
    ],
  },
  {
    icon: '🧩',
    title: 'I segment and keep your list healthy',
    desc: 'Blasting your whole list is how you end up in spam. I segment by engagement, purchase history, and lifecycle stage — and keep your list clean.',
    points: [
      'Engagement-based segments: hot, warm, at-risk, dormant',
      'Purchase-history segments: first-time, repeat, VIP, lapsed',
      'Sunset policies that protect your sender reputation',
      'List-hygiene recommendations to keep deliverability high',
    ],
  },
  {
    icon: '📬',
    title: 'I protect your deliverability',
    desc: 'The best email in the world earns nothing from the spam folder. I watch the signals that decide whether you land in the inbox.',
    points: [
      'I monitor open, bounce, and spam-complaint rates per send',
      'I flag content patterns that trip spam filters',
      'Send-volume pacing that protects your domain reputation',
      'Alerts when engagement drops outside its normal range',
    ],
  },
  {
    icon: '📊',
    title: 'I test and report on revenue',
    desc: 'Subject-line tests, send-time tests, content tests — plus plain-language reports tying every campaign and flow back to revenue.',
    points: [
      'A/B tests on subject lines, content, and send times',
      'Campaign and flow revenue attribution in one view',
      'Learnings logged and applied to every future send',
      'Monthly reviews: what worked, what to double down on',
    ],
  },
];

const cadence = [
  { freq: 'Daily', icon: '📈', title: 'Performance monitoring', desc: 'Opens, clicks, revenue, and spam complaints are watched daily across campaigns and flows — with alerts when something moves.' },
  { freq: 'Weekly', icon: '💡', title: 'Campaign ideas & builds', desc: 'Fresh campaign concepts land in your approval queue weekly — built out completely with subject line, copy, design, segment, and schedule.' },
  { freq: 'Weekly', icon: '🧪', title: 'Test readouts & next tests', desc: 'Finished subject-line and content tests get read out, learnings logged, and the next test queued automatically.' },
  { freq: 'Bi-weekly', icon: '🧩', title: 'Segment refresh', desc: 'Engagement and lifecycle segments get rebuilt every two weeks as subscribers move between hot, warm, at-risk, and dormant.' },
  { freq: 'Monthly', icon: '🔁', title: 'Flow performance review', desc: 'Every automation — welcome, cart, post-purchase, win-back — gets audited monthly for drop-off points and copy fatigue.' },
  { freq: 'Monthly', icon: '🗺️', title: 'Revenue & strategy review', desc: 'A monthly readout of email\'s revenue contribution, list growth, and deliverability health — with next month\'s email calendar.' },
];

const steps = [
  { step: '01', title: 'Connect your email platform', desc: 'Link Klaviyo, Mailchimp, or your ESP. Emma works inside your existing account — your list and your data stay yours, with zero migration.' },
  { step: '02', title: 'Emma learns your brand & catalog', desc: 'She reads your brand knowledge base — voice, audience, products, offers — so every email sounds like you wrote it on your best day.' },
  { step: '03', title: 'Get your email revenue plan', desc: 'An audit of your current campaigns, flows, and segments — plus a prioritized plan for the automations and campaigns that will move revenue first.' },
  { step: '04', title: 'Approve before anything sends', desc: 'Every campaign and flow appears in your approval queue as a full preview. Approve it, request changes, or reject it — nothing sends without you.' },
  { step: '05', title: 'Email compounds on autopilot', desc: 'Emma keeps ideating, building, testing, and reporting on her weekly cadence — while your flows convert around the clock.' },
];

const integrations = ['Klaviyo', 'Mailchimp', 'Shopify', 'WooCommerce', 'Google Analytics', 'Brevo', 'MailerLite', 'HubSpot'];

const comparison = [
  { label: 'Monthly cost', emma: 'Included in your Loraloop plan', specialist: '$4,500–$7,500 salary', agency: '$1,500–$5,000 retainer', diy: 'Hours you don\'t have' },
  { label: 'Campaign output', emma: 'Weekly, fully built', specialist: '2–4 per month', agency: '2–4 per month, per scope', diy: 'Whenever you get to it' },
  { label: 'Flow coverage', emma: 'All core flows, audited monthly', specialist: 'Built once, rarely revisited', agency: 'Setup fee per flow', diy: 'Usually just a welcome email' },
  { label: 'Proactive ideas', emma: 'Yes — from your catalog & calendar', specialist: 'Sometimes', agency: 'You fill the brief', diy: 'Blank-page problem' },
  { label: 'Uses your brand voice', emma: 'Yes — from your knowledge base', specialist: 'After ramp-up', agency: 'Generic until briefed well', diy: 'Yes, but slowly' },
  { label: 'Ramp-up time', emma: 'Same day', specialist: '1–2 months', agency: '2–4 weeks', diy: 'Ongoing struggle' },
];

const team = [
  { name: 'Sophie', role: 'AI SEO/GEO Manager', desc: 'Ranks your site on Google and gets you cited by ChatGPT, Perplexity, and AI Overviews.', to: '/ai-seo-geo-manager', avatar: avatarSophie, ring: '#f472b6' },
  { name: 'Elena', role: 'AI Ads Manager', desc: 'Fills your list with paid traffic that Emma then converts into repeat customers.', to: '/ai-ads-manager', avatar: avatarElena, ring: '#34d399' },
  { name: 'Lora', role: 'AI Marketing Lead', desc: 'Coordinates your whole AI marketing team and builds your monthly strategy.', to: '/solution', avatar: avatarLora, ring: '#c084fc' },
];

const faqs = [
  { q: 'Will Emma send emails without my approval?', a: 'No. Every campaign and flow appears in your approval queue as a complete preview — subject line, copy, design, segment, and schedule. You approve, request changes, or reject. Nothing reaches your subscribers without your explicit sign-off.' },
  { q: 'Does Emma replace Klaviyo or Mailchimp?', a: 'No — she works inside them. Emma builds campaigns and flows directly in your existing email platform, so you keep full control of your list, your data, and your account. There\'s no migration and no lock-in.' },
  { q: 'How is Emma different from the AI features inside my email platform?', a: 'Built-in AI writes a subject line when you ask. Emma runs the whole program: she brings you campaign ideas proactively, builds complete sends, designs automation flows, manages segmentation, watches deliverability, and reports revenue — the job of an email marketer, not an autocomplete.' },
  { q: 'I barely email my list today. Where does Emma start?', a: 'That\'s the ideal starting point — your list is untapped revenue. Emma starts with the automations that earn the most first (welcome, abandoned cart, post-purchase), then builds a sustainable campaign rhythm so your list warms up without being blasted.' },
  { q: 'Will my emails end up in spam?', a: 'Emma actively protects against this. She paces send volume, sunsets disengaged subscribers, flags spammy content patterns, and monitors bounce and complaint rates on every send. Deliverability is a first-class part of her job, not an afterthought.' },
  { q: 'Does Emma work for non-ecommerce businesses?', a: 'Yes. For SaaS, services, and creators she focuses on nurture sequences, newsletters, launch campaigns, and re-engagement instead of cart recovery — the strategy adapts to your business model from your knowledge base.' },
  { q: 'What results should I expect from email?', a: 'For most businesses with an engaged list, email drives 20–30% of revenue when campaigns and flows run consistently. The biggest lift usually comes in the first months from switching on core automations — abandoned cart and welcome flows alone often pay for the entire subscription.' },
];

export default function AiEmailMarketer() {
  useEffect(() => {
    document.title = 'Emma — AI Email Marketer | Loraloop';
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 bg-white border border-gray-200 shadow-sm pl-1.5 pr-4 py-1.5 rounded-full mb-6">
              <span className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0" style={{ background: 'linear-gradient(135deg, #dbeafe, #ede9fe)' }}>
                <img src={avatarEmma} alt="Emma" className="absolute inset-0 w-full h-full object-cover" />
              </span>
              <span className="text-sm font-semibold text-[#111827]" style={{ fontFamily: 'Satoshi, sans-serif' }}>Emma</span>
              <span className="w-px h-4 bg-gray-200" />
              <span className="text-sm font-medium text-[#6b7280]">AI Email Marketer</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full ml-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />Online</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#0f172a] leading-[1.05] tracking-[-0.03em] text-balance mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              Hi, I'm Emma —<br />
              <span style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                your email marketer.
              </span>
            </h1>
            <p className="text-[18px] md:text-[20px] text-[#4b5563] leading-[1.6] max-w-2xl mx-auto lg:mx-0 mb-8">
              I turn your list into revenue — planning campaigns, writing and designing every send, and building the flows that convert on autopilot. Right inside your Klaviyo or Mailchimp. <span className="text-[#111827] font-semibold">You approve. I send.</span>
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
              <span><span className="text-emerald-500">✓</span> Nothing sends without your approval</span>
              <span><span className="text-emerald-500">✓</span> Klaviyo · Mailchimp</span>
            </div>
          </div>

          {/* Agent mockup panel */}
          <div className="relative max-w-[520px] w-full mx-auto lg:mx-0">
            <div className="absolute -inset-8 rounded-[40px] opacity-30 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 20%, #a78bfa, transparent 60%), radial-gradient(circle at 80% 80%, #60a5fa, transparent 60%)' }} />
            <div className="relative bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden text-left">
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-100 bg-gray-50/60">
                <span className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white shadow-sm" style={{ background: 'linear-gradient(135deg, #dbeafe, #ede9fe)' }}>
                  <img src={avatarEmma} alt="Emma" className="absolute inset-0 w-full h-full object-cover" />
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-[#111827] leading-tight" style={{ fontFamily: 'Satoshi, sans-serif' }}>Emma</p>
                  <p className="text-[11px] text-[#6b7280] leading-tight">AI Email Marketer</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />Building</span>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex justify-end">
                  <div className="bg-gray-100 rounded-2xl rounded-br-md px-4 py-2.5 text-[13px] text-[#111827] max-w-[85%] leading-[1.5]">Send our bestsellers to engaged subscribers — Valentine's angle, 15% off.</div>
                </div>
                <div className="space-y-2 text-[13px] leading-[1.5]">
                  <p className="flex items-start gap-2 text-[#4b5563]"><span className="text-emerald-500 flex-shrink-0">✓</span>Segment: Engaged (opened &lt;60d) · 8,214 subscribers</p>
                  <p className="flex items-start gap-2 text-[#4b5563]"><span className="text-emerald-500 flex-shrink-0">✓</span>Built in your Klaviyo — brand colors & mobile layout</p>
                  <p className="flex items-start gap-2 text-[#4b5563]"><span className="text-emerald-500 flex-shrink-0">✓</span>Scheduled: Tue 10:00 AM — your best send window</p>
                </div>
                <div className="rounded-xl border border-gray-200 overflow-hidden">
                  <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                    <p className="text-[11px] text-[#6b7280]">From: <span className="text-[#111827] font-medium">Your Brand</span></p>
                    <p className="text-[12px] text-[#111827] font-semibold">A little something you'll love 💘 15% off bestsellers</p>
                  </div>
                  <div className="p-4">
                    <div className="rounded-lg py-4 text-center text-white text-[15px] font-extrabold mb-3" style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', fontFamily: 'Satoshi, sans-serif' }}>VALENTINE'S — 15% OFF</div>
                    <div className="grid grid-cols-3 gap-2">
                      {['🕯️', '🧴', '🎁'].map((p, idx) => (
                        <div key={idx} className="rounded-lg bg-gray-50 border border-gray-100 h-14 flex items-center justify-center text-xl">{p}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <span className="inline-flex items-center justify-center px-4 py-2 rounded-full text-white text-[12px] font-bold" style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', fontFamily: 'Satoshi, sans-serif' }}>Approve & schedule</span>
                  <span className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-gray-200 text-[#374151] text-[12px] font-bold" style={{ fontFamily: 'Satoshi, sans-serif' }}>Request changes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Old way vs the Emma way */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[13px] font-bold text-violet-600 uppercase tracking-[0.08em] mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Why me</p>
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-12" style={{ fontFamily: 'Satoshi, sans-serif' }}>The old way vs. the Emma way</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-8">
              <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-[#9ca3af] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>The old way</p>
              <p className="text-[20px] font-semibold text-[#6b7280] leading-[1.4] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>A list that sits there while revenue quietly walks out the door.</p>
              <ul className="space-y-3">
                {['Campaigns sent only when someone remembers', 'A welcome flow written two years ago — if at all', 'Abandoned carts that never get a follow-up', '"We should segment" stuck on the roadmap forever'].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[14px] text-[#6b7280] leading-[1.6]">
                    <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5">✕</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl p-8 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)' }}>
              <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-violet-200 mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>The Emma way</p>
              <p className="text-[20px] font-semibold leading-[1.4] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>A consistent program working your list — inside the tools you already use.</p>
              <ul className="space-y-3">
                {['Fresh campaigns built and queued every week', 'Every core flow live: welcome, cart, post-purchase, win-back', 'I recover abandoned carts automatically', 'Your list segmented and its deliverability protected'].map((t) => (
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
              { stat: '↗ $36', label: 'average return on every $1 spent on email — the highest-ROI channel' },
              { stat: '20–30%', label: 'of total revenue email drives for brands that run it consistently' },
              { stat: '↗ 70%', label: 'of abandoned carts get no follow-up today — that\'s revenue I recover' },
            ].map((p) => (
              <div key={p.label} className="text-center bg-white rounded-2xl border border-gray-100 shadow-sm py-7 px-4">
                <p className="text-3xl md:text-4xl font-extrabold mb-2" style={{ fontFamily: 'Satoshi, sans-serif', background: 'linear-gradient(135deg, #7c3aed, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{p.stat}</p>
                <p className="text-[13px] text-[#6b7280] leading-[1.6]">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-20 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-5" style={{ fontFamily: 'Satoshi, sans-serif' }}>Everyone knows email works. Almost nobody works email.</h2>
        <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] mb-4">
          The list sits there. Campaigns go out when someone remembers. The welcome flow was written two years ago, the abandoned-cart email never got built, and "we should segment" has been on the roadmap forever. Meanwhile email quietly outperforms every paid channel — for the brands that actually send.
        </p>
        <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6]">
          Emma is an AI employee who works your list full-time: proposing campaigns, building them end-to-end, running your automations, and protecting your deliverability — with your approval on every send.
        </p>
      </section>

      {/* Deep dive: flows */}
      <section className="py-20 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-[13px] font-bold text-violet-600 uppercase tracking-[0.08em] mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Automations that compound</p>
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-5" style={{ fontFamily: 'Satoshi, sans-serif' }}>Flows that sell while you're offline</h2>
            <p className="text-[#4b5563] text-[17px] leading-[1.7] mb-6">
              Welcome, abandoned cart, post-purchase, win-back — Emma builds every core automation, watches its revenue, and audits it monthly for drop-off points and copy fatigue.
            </p>
            <ul className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
              {['Every flow tied to the revenue it generates', 'Monthly audits find drop-off points and stale copy', 'New flow drafts appear in your approval queue — never live unseen'].map((pt) => (
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
              <div className="px-5 py-3.5 border-b border-gray-100 bg-gray-50/60 flex items-center justify-between">
                <p className="text-[13px] font-bold text-[#111827]" style={{ fontFamily: 'Satoshi, sans-serif' }}>🔁 Your automations — last 30 days</p>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { name: 'Welcome series', meta: '4 emails', rev: '$12,400', live: true },
                  { name: 'Abandoned cart', meta: '3 emails', rev: '$8,920', live: true },
                  { name: 'Win-back', meta: '2 emails', rev: '$3,150', live: true },
                ].map((f) => (
                  <div key={f.name} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200">
                    <div className="min-w-0">
                      <p className="text-[13px] font-bold text-[#111827] leading-tight" style={{ fontFamily: 'Satoshi, sans-serif' }}>{f.name}</p>
                      <p className="text-[11px] text-[#6b7280]">{f.meta}</p>
                    </div>
                    <span className="ml-auto text-[14px] font-extrabold text-[#111827]" style={{ fontFamily: 'Satoshi, sans-serif' }}>{f.rev}</span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Live</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-dashed border-violet-200 bg-violet-50/40">
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold text-[#111827] leading-tight" style={{ fontFamily: 'Satoshi, sans-serif' }}>Post-purchase flow</p>
                    <p className="text-[11px] text-[#6b7280]">3 emails · drafted by Emma</p>
                  </div>
                  <span className="ml-auto inline-flex items-center justify-center px-3 py-1.5 rounded-full text-white text-[11px] font-bold" style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', fontFamily: 'Satoshi, sans-serif' }}>Review →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep dive: proactive */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="relative max-w-[520px] w-full mx-auto lg:mx-0">
            <div className="absolute -inset-8 rounded-[40px] opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 70%, #60a5fa, transparent 60%)' }} />
            <div className="relative bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden text-left">
              <div className="px-5 py-3.5 border-b border-gray-100 bg-gray-50/60">
                <p className="text-[13px] font-bold text-[#111827]" style={{ fontFamily: 'Satoshi, sans-serif' }}>💡 Proactive nudge — Thursday 9:12 AM</p>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0" style={{ background: 'linear-gradient(135deg, #dbeafe, #ede9fe)' }}><img src={avatarEmma} alt="Emma" className="absolute inset-0 w-full h-full object-cover" /></span>
                  <div className="bg-violet-50 rounded-2xl rounded-tl-md px-4 py-2.5 text-[13px] text-[#111827] leading-[1.5]">It's been 12 days since your last campaign. I drafted two options from your spring bestsellers:</div>
                </div>
                <div className="space-y-2">
                  <div className="rounded-xl border border-gray-200 px-4 py-3">
                    <p className="text-[12px] font-bold text-[#111827] mb-0.5" style={{ fontFamily: 'Satoshi, sans-serif' }}>Option A — Spring refresh</p>
                    <p className="text-[12px] text-[#6b7280] leading-[1.5]">New arrivals to full list · "Fresh starts, fresh picks 🌱"</p>
                  </div>
                  <div className="rounded-xl border-2 border-violet-300 bg-violet-50/40 px-4 py-3">
                    <p className="text-[12px] font-bold text-[#111827] mb-0.5" style={{ fontFamily: 'Satoshi, sans-serif' }}>Option B — VIP early access ✓</p>
                    <p className="text-[12px] text-[#6b7280] leading-[1.5]">20% off to repeat buyers · "You get first pick (as always)"</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-gray-100 rounded-2xl rounded-br-md px-4 py-2.5 text-[13px] text-[#111827] max-w-[85%] leading-[1.5]">Approve option B 👍</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-[13px] font-bold text-violet-600 uppercase tracking-[0.08em] mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>She notices before you do</p>
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-5" style={{ fontFamily: 'Satoshi, sans-serif' }}>Never go quiet on your list again</h2>
            <p className="text-[#4b5563] text-[17px] leading-[1.7] mb-6">
              Emma watches your sending rhythm, your catalog, and your calendar. When there's revenue on the table — a gap in sends, a seasonal moment, a product spike — she shows up with options already drafted.
            </p>
            <ul className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
              {['Campaign ideas from your catalog, calendar, and past winners', 'Complete drafts, not suggestions — approve and it\'s scheduled', 'One reply is all it takes to ship a campaign'].map((pt) => (
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
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Email revenue, fully handled. You just approve.</h2>
          <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] text-center mb-12 max-w-xl mx-auto">Here's everything I take off your plate — ideas, campaigns, flows, segments, deliverability, and reporting.</p>
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
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Your email program, on a schedule</h2>
          <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] text-center mb-12 max-w-xl mx-auto">Emma runs the operating cadence a dedicated email marketer would — automatically.</p>
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
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-12" style={{ fontFamily: 'Satoshi, sans-serif' }}>How Emma works</h2>
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
        <h2 className="text-2xl md:text-3xl font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Works inside your email platform</h2>
        <p className="text-[#4b5563] text-[16px] leading-[1.6] mb-8 max-w-xl mx-auto">One-click integration with the platform you already use. Your list stays yours — zero migration.</p>
        <div className="flex flex-wrap justify-center gap-3">
          {integrations.map((name) => (
            <span key={name} className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-[14px] font-semibold text-[#374151]" style={{ fontFamily: 'Satoshi, sans-serif' }}>{name}</span>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Emma vs the alternatives</h2>
          <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] text-center mb-12 max-w-xl mx-auto">How an AI email marketer compares to hiring, agencies, and doing it yourself.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-5 py-4 text-[13px] font-semibold text-[#6b7280] uppercase tracking-[0.06em]" style={{ fontFamily: 'Satoshi, sans-serif' }}></th>
                  <th className="px-5 py-4 text-[15px] font-bold" style={{ fontFamily: 'Satoshi, sans-serif', background: 'linear-gradient(135deg, #7c3aed, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Emma (Loraloop)</th>
                  <th className="px-5 py-4 text-[15px] font-bold text-[#111827]" style={{ fontFamily: 'Satoshi, sans-serif' }}>In-house email marketer</th>
                  <th className="px-5 py-4 text-[15px] font-bold text-[#111827]" style={{ fontFamily: 'Satoshi, sans-serif' }}>Email agency</th>
                  <th className="px-5 py-4 text-[15px] font-bold text-[#111827]" style={{ fontFamily: 'Satoshi, sans-serif' }}>DIY</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-gray-50/50' : ''}>
                    <td className="px-5 py-4 text-[14px] font-semibold text-[#111827] whitespace-nowrap" style={{ fontFamily: 'Satoshi, sans-serif' }}>{row.label}</td>
                    <td className="px-5 py-4 text-[14px] text-[#4b5563] leading-[1.5] font-medium">{row.emma}</td>
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
        <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Emma works best with her team</h2>
        <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] text-center mb-12 max-w-xl mx-auto">Email converts the audience that search, ads, and content bring in — your AI team runs the whole loop.</p>
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
          <p className="text-[#4b5563] text-[18px] leading-[1.6] mb-8 max-w-xl mx-auto">You don't hire me alone — every plan includes all 9 AI employees, so your email, ads, SEO, and social all pull in the same direction.</p>
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
          <p className="text-violet-100 text-[16px] mb-8 leading-[1.6]">Connect your email platform and I'll have your revenue plan and your first campaign ready the same day. You approve — I send.</p>
          <a
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 bg-white rounded-full text-violet-700 font-bold text-base hover:bg-gray-50 transition-all"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Get started with Emma →
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
