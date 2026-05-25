import { Link } from 'react-router';

const agencyFeatures = [
  { icon: '🏢', title: 'Multi-brand workspace', desc: 'Manage multiple client brands in one platform. Each client gets their own brand knowledge base, content calendar, and approval queue.' },
  { icon: '🔐', title: 'Client approval workflow', desc: 'Clients review and approve their own content before anything publishes. Build accountability into every client relationship.' },
  { icon: '🧠', title: 'Brand knowledge base per client', desc: 'Store voice, audience, positioning, and product details for each brand. Every output automatically matches the right client voice.' },
  { icon: '📈', title: 'Content generation at scale', desc: 'Generate social posts, SEO blog articles, GEO content, ad copy, and email drafts for all clients — without proportional time cost.' },
  { icon: '📋', title: 'Monthly performance reports', desc: 'Deliver professional performance reports for each client showing content output, engagement trends, and SEO progress.' },
  { icon: '🤝', title: 'Team access and collaboration', desc: 'Add team members, assign clients, and manage permissions. Run multiple accounts without losing control of brand quality.' },
  { icon: '🔍', title: 'SEO + GEO content generation', desc: 'Create keyword-optimized blog articles and GEO-structured content for client websites — without hiring a specialist for each account.' },
  { icon: '🎯', title: 'Campaign planning per client', desc: 'Get monthly campaign plans for each client tied to their specific revenue goals and marketing channels.' },
];

const comparisonRows = [
  { aspect: 'Content creation', without: 'Writer per client × hours per week', with: 'AI generates drafts, team reviews and approves' },
  { aspect: 'SEO blog articles', without: 'Freelance writer + SEO specialist', with: 'Loraloop writes SEO + GEO articles in client voice' },
  { aspect: 'Strategy per client', without: '2–3 hours planning per client monthly', with: 'Monthly AI-generated plan per client in minutes' },
  { aspect: 'Performance reports', without: 'Manual data collection and formatting', with: 'Auto-generated monthly report per client' },
  { aspect: 'Onboarding a new client', without: 'Days of setup and briefing', with: 'Brand knowledge base built in one onboarding session' },
  { aspect: 'Scaling from 5 to 15 clients', without: 'Hire more writers and strategists', with: 'Increase credits, same team handles the load' },
];

const faqs = [
  { q: 'Can I manage multiple client brands in one Loraloop account?', a: 'Yes. The Agency plan supports multiple brand workspaces. Each client gets their own brand knowledge base, content calendar, approval queue, and performance reporting — all managed from one account.' },
  { q: 'Will clients be able to review and approve their own content?', a: 'Yes. Loraloop has a built-in approval workflow where all generated content — social posts, blog drafts, ad copy — appears in a queue before scheduling. You can give clients access to review and approve their own content, or keep that step internal to your team.' },
  { q: 'How does Loraloop keep content sounding different across client brands?', a: 'Each client has their own brand knowledge base: voice characteristics, audience profile, key messages, product details, and communication style. Loraloop generates content from each client\'s specific knowledge base — so outputs naturally sound different and on-brand for each.' },
  { q: 'Can Loraloop create SEO content for my client websites?', a: 'Yes. Loraloop generates keyword-optimized blog articles for Google ranking and GEO-structured content for citation by Perplexity, ChatGPT, and Google AI Overviews. This makes it possible to deliver SEO content to clients without hiring a specialist for each account.' },
  { q: 'Is Loraloop white-label?', a: 'Loraloop is designed as your internal production platform. Reports and content can be exported and delivered to clients under your agency brand. Full white-label client-facing interfaces are on the product roadmap.' },
  { q: 'How many client brands can I manage?', a: 'The Agency plan supports a significant number of brand workspaces. For larger portfolios or enterprise-scale usage, contact us for an Enterprise arrangement tailored to your client count and credit volume.' },
];

export default function ForAgencies() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <span>For Marketing Agencies</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          Scale client marketing output<br />
          <span style={{ background: 'linear-gradient(135deg, #1d4ed8, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            without hiring more people
          </span>
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
          Manage 5, 10, or 20 client brands with one AI marketing platform. Generate content, run approval workflows, and deliver reports — without growing your headcount.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #1d4ed8, #7c3aed)', fontFamily: 'Satoshi, sans-serif' }}
          >
            Run 3 client brands free for 7 days
          </a>
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-gray-200 text-gray-700 font-bold text-base hover:bg-gray-50 transition-all"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            See Agency pricing →
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-400">Agency plan includes multi-brand workspace, team access, and client approval workflow.</p>
      </section>

      {/* The agency capacity wall */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-5" style={{ fontFamily: 'Satoshi, sans-serif' }}>Every agency hits the same wall</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-4">
            More clients means more content, more strategy hours, more reports, more coordination. The only solution agencies have had is hiring — which compresses margins and adds management overhead.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed">
            Loraloop breaks the link between client count and headcount. Your team focuses on client relationships and quality control. Loraloop handles the production.
          </p>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Built for multi-client marketing operations</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Every feature is designed for agencies managing multiple brands, not solo users posting once a day.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {agencyFeatures.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After comparison */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10" style={{ fontFamily: 'Satoshi, sans-serif' }}>What changes when you run Loraloop</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left pb-4 text-gray-400 font-medium pr-6 w-1/3">Task</th>
                  <th className="text-left pb-4 text-red-500 font-bold pr-6">Without Loraloop</th>
                  <th className="text-left pb-4 text-blue-600 font-bold">With Loraloop</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonRows.map((row) => (
                  <tr key={row.aspect}>
                    <td className="py-4 pr-6 font-medium text-gray-900">{row.aspect}</td>
                    <td className="py-4 pr-6 text-gray-500">{row.without}</td>
                    <td className="py-4 text-gray-700">{row.with}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Agency offer CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center rounded-3xl p-12" style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%)' }}>
          <div className="inline-block bg-white bg-opacity-20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">Agency Offer</div>
          <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Run 3 client brands with Loraloop — free for 7 days</h2>
          <p className="text-blue-100 mb-6 leading-relaxed">Test the full agency workflow: multi-brand workspace, client approval, content generation, and performance reporting — on 3 real client accounts, no card required.</p>
          <div className="space-y-3">
            {['Multi-brand workspace', 'Client approval workflow', 'SEO + GEO blog generation', 'Monthly performance reports', 'Team access'].map((item) => (
              <div key={item} className="flex items-center justify-center gap-2 text-white text-sm">
                <svg className="w-4 h-4 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                {item}
              </div>
            ))}
          </div>
          <a
            href="/app/signup"
            className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-white rounded-full text-blue-700 font-bold text-base hover:bg-gray-50 transition-all"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Start Agency Trial →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto pb-24">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>Agency questions answered</h2>
        <div className="space-y-2">
          {faqs.map((faq) => (
            <details key={faq.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 text-sm flex items-center justify-between list-none" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                {faq.q}
                <span className="text-blue-500 text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-4">Want to talk through agency pricing for your team?</p>
          <Link to="/contact" className="text-blue-600 font-semibold text-sm hover:underline">Contact us →</Link>
        </div>
      </section>
    </div>
  );
}
