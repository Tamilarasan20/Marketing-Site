import { useEffect } from 'react';
import { Link } from 'react-router';

const capabilities = [
  {
    icon: '💡',
    title: 'Campaign ideas that come to you',
    desc: 'Emma suggests ready-to-send campaign concepts based on your products, upcoming calendar dates, and what has performed before — no brainstorming required.',
    points: [
      'Ideas drawn from your catalog, seasonality, and past winners',
      'Ready-to-approve concepts, not blank-page prompts',
      'Notices when you haven\'t emailed in a while and drafts proactively',
      'Aligned to your monthly marketing plan and promotions',
    ],
  },
  {
    icon: '✉️',
    title: 'Complete campaign builds',
    desc: 'From one instruction — "promote the new collection to engaged subscribers, 15% off" — Emma builds everything: subject line, copy, layout, segment, and schedule.',
    points: [
      'Subject lines and preview text written to earn the open',
      'Body copy in your brand voice, from your knowledge base',
      'Mobile-optimized layouts with your brand colors and imagery',
      'Segment and send time chosen for the campaign\'s goal',
    ],
  },
  {
    icon: '🔁',
    title: 'Automated flows that print revenue',
    desc: 'Welcome series, abandoned cart, browse abandonment, post-purchase, win-back — Emma designs and writes the automations that convert on autopilot.',
    points: [
      'Welcome flows that turn new subscribers into first purchases',
      'Abandoned cart and browse recovery sequences',
      'Post-purchase flows that drive reviews and repeat orders',
      'Win-back campaigns for dormant subscribers',
    ],
  },
  {
    icon: '🧩',
    title: 'Segmentation & list health',
    desc: 'Blasting your whole list is how you end up in spam. Emma segments by engagement, purchase history, and lifecycle stage — and keeps your list clean.',
    points: [
      'Engagement-based segments: hot, warm, at-risk, dormant',
      'Purchase-history segments: first-time, repeat, VIP, lapsed',
      'Sunset policies that protect your sender reputation',
      'List hygiene recommendations to keep deliverability high',
    ],
  },
  {
    icon: '📬',
    title: 'Deliverability protection',
    desc: 'The best email in the world earns nothing from the spam folder. Emma watches the signals that decide whether you land in the inbox.',
    points: [
      'Monitors open, bounce, and spam-complaint rates per send',
      'Flags content patterns that trip spam filters',
      'Send-volume pacing that protects your domain reputation',
      'Alerts when engagement drops outside its normal range',
    ],
  },
  {
    icon: '📊',
    title: 'Testing & revenue reporting',
    desc: 'Subject line tests, send-time tests, content tests — plus plain-language reports tying every campaign and flow to revenue.',
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
  { name: 'Sophie', role: 'AI SEO/GEO Manager', desc: 'Ranks your site on Google and gets you cited by ChatGPT, Perplexity, and AI Overviews.', to: '/ai-seo-geo-manager', icon: '🔍' },
  { name: 'Elena', role: 'AI Ads Manager', desc: 'Fills your list with paid traffic that Emma then converts into repeat customers.', to: '/ai-ads-manager', icon: '📣' },
  { name: 'Lora', role: 'AI Marketing Lead', desc: 'Coordinates your whole AI marketing team and builds your monthly strategy.', to: '/solution', icon: '🧭' },
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
      <section className="pt-32 pb-20 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <span>✉️ Emma — AI Email Marketer</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-[#0f172a] leading-[1.05] tracking-[-0.03em] text-balance mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          Your email list is<br />
          <span style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            unclaimed revenue
          </span>
        </h1>
        <p className="text-[18px] md:text-[20px] text-[#4b5563] leading-[1.6] max-w-2xl mx-auto mb-10">
          Emma plans your campaigns, writes and designs every send, builds your automated flows, and manages segmentation — inside your Klaviyo or Mailchimp account, with your approval on every email.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', fontFamily: 'Satoshi, sans-serif' }}
          >
            Hire Emma Free — No credit card
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
          <p className="text-center text-[13px] font-semibold text-[#6b7280] uppercase tracking-[0.08em] mb-8">Email is still the highest-ROI channel</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { stat: '$36', label: 'average return for every $1 spent on email marketing' },
              { stat: '70%', label: 'of abandoned carts are never followed up with a recovery email' },
              { stat: '20–30%', label: 'of total revenue comes from email for brands that run it consistently' },
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
        <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-5" style={{ fontFamily: 'Satoshi, sans-serif' }}>Everyone knows email works. Almost nobody works email.</h2>
        <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] mb-4">
          The list sits there. Campaigns go out when someone remembers. The welcome flow was written two years ago, the abandoned-cart email never got built, and "we should segment" has been on the roadmap forever. Meanwhile email quietly outperforms every paid channel — for the brands that actually send.
        </p>
        <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6]">
          Emma is an AI employee who works your list full-time: proposing campaigns, building them end-to-end, running your automations, and protecting your deliverability — with your approval on every send.
        </p>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Everything an email marketer does — without the hire</h2>
          <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] text-center mb-12 max-w-xl mx-auto">Emma covers the full email stack: ideas, campaigns, flows, segments, deliverability, and reporting.</p>
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
          <h2 className="text-3xl md:text-[40px] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Turn your list into revenue</h2>
          <p className="text-violet-100 text-[16px] mb-8 leading-[1.6]">Start free. Connect your email platform, get your email revenue plan, and approve your first campaign the same day.</p>
          <a
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 bg-white rounded-full text-violet-700 font-bold text-base hover:bg-gray-50 transition-all"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Hire Emma Free →
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
