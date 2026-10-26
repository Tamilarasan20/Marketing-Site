import { Link } from 'react-router';

const agencyFeatures = [
  { icon: '🏢', title: 'One workspace per client', desc: 'Every client gets its own brand knowledge base, content calendar, ad accounts and approval queue. Switch between them without re-briefing anything.' },
  { icon: '🔐', title: 'Client approval workflow', desc: 'Clients review and approve their own content and campaign changes before anything publishes or spends. Accountability is built into the retainer.' },
  { icon: '🧠', title: 'Brand knowledge base per client', desc: 'Voice, ICP, positioning, offers and competitors stored once per brand. Every output automatically matches the right client, not a generic house style.' },
  { icon: '📈', title: '50+ assets per client, per month', desc: 'Social posts, SEO and GEO articles, ad copy and email drafts for every client, without hiring a writer for each new retainer.' },
  { icon: '📣', title: 'Meta and Google ads, watched overnight', desc: 'Underperforming campaigns are caught and budget moves queued for approval before your team or the client logs in. No more Monday-morning surprises.' },
  { icon: '📋', title: 'Client-ready reporting', desc: 'One daily briefing and one monthly report per client, covering ads, organic, SEO and email, so you stop stitching ten dashboards into a deck.' },
  { icon: '🤝', title: 'Team seats and permissions', desc: 'Add strategists and account managers, assign them clients and keep quality control in your hands as the roster grows.' },
  { icon: '🎯', title: 'Monthly plan per client', desc: 'Each client gets a plan tied to their revenue goals and channels, produced in minutes and ready for your strategic edits.' },
];

const comparisonRows = [
  { aspect: 'Content production', without: 'A writer per client, billed by the hour', with: 'Loraloop drafts, your team reviews and approves' },
  { aspect: 'SEO and GEO articles', without: 'Freelance writer plus an SEO specialist', with: 'Researched, briefed and drafted in the client voice' },
  { aspect: 'Paid media management', without: 'A media buyer checking dashboards daily', with: 'Spend watched 24/7, budget moves queued for approval' },
  { aspect: 'Strategy per client', without: '2 to 3 planning hours per client, monthly', with: 'Monthly plan generated in minutes, edited by you' },
  { aspect: 'Reporting', without: 'Manual data pulls and deck building', with: 'Daily briefing and monthly report per client' },
  { aspect: 'Onboarding a new client', without: 'Days of setup and briefing documents', with: 'Brand knowledge base built in one session' },
  { aspect: 'Scaling from 5 to 15 clients', without: 'Hire more writers and strategists', with: 'Add workspaces and credits, same team' },
];

const faqs = [
  { q: 'Can I manage multiple client brands in one Loraloop account?', a: 'Yes. Pro includes 5 brand workspaces and 5 team seats; Enterprise adds unlimited workspaces and per-seat pricing. Each client gets its own brand knowledge base, content calendar, approval queue and reporting, all managed from one account.' },
  { q: 'Will clients be able to review and approve their own work?', a: 'Yes. Everything Loraloop produces, including social posts, articles, ad copy and proposed budget changes, lands in an approval queue before it goes live. You can give clients access to approve their own queue or keep that step inside your team.' },
  { q: 'How does Loraloop keep content sounding different across clients?', a: 'Each client has its own brand knowledge base: voice, audience, positioning, offers, product details and competitors. Loraloop generates every output from that specific knowledge base, so a SaaS client and a DTC client never sound alike.' },
  { q: 'Can Loraloop run paid media for my clients?', a: 'Yes. Loraloop builds and monitors Meta and Google campaigns per client, writes the copy, generates creative, watches spend overnight and queues budget moves for approval. It replaces the daily dashboard check, not your media strategy.' },
  { q: 'Is Loraloop white-label?', a: 'Loraloop is designed as your internal production platform. Reports and content can be exported and delivered under your agency brand. Fully white-labelled client-facing interfaces are on the product roadmap.' },
  { q: 'How many clients can I run on it?', a: 'Pro covers up to 5 brand workspaces, which suits most fractional practices. For larger rosters, Scale gives you unlimited brand workspaces and 5 seats from $199 a month, and Enterprise adds custom integrations. Contact us if you manage more than 20 brands and we will size it with you.' },
];

export default function ForAgencies() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <span>For Fractional Marketing Agencies</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-[#0f172a] leading-[1.05] tracking-[-0.03em] text-balance mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          Run every client's marketing<br />
          <span style={{ background: 'linear-gradient(135deg, #1d4ed8, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            with a team of one
          </span>
        </h1>
        <p className="text-[18px] md:text-[20px] text-[#4b5563] leading-[1.6] max-w-2xl mx-auto mb-10">
          Fractional CMOs and lean agencies use Loraloop as their production floor: content, SEO, paid media and reporting for 5, 10 or 20 clients, without hiring for every new retainer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            data-ml-goal="signup_click" data-ml-goal-location="agencies_hero"
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #1d4ed8, #7c3aed)', fontFamily: 'Satoshi, sans-serif' }}
          >
            Start free, no credit card
          </a>
          <Link
            data-ml-goal="pricing_view"
            to="/pricing"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-gray-200 text-gray-700 font-bold text-base hover:bg-gray-50 transition-all"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            See pricing →
          </Link>
        </div>
        <p className="mt-4 text-[14px] text-[#6b7280]">Pro includes 5 brand workspaces and 2 seats; add more seats anytime. Enterprise adds unlimited workspaces and custom integrations.</p>
      </section>

      {/* The agency capacity wall */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-5" style={{ fontFamily: 'Satoshi, sans-serif' }}>Every fractional practice hits the same wall</h2>
          <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] mb-4">
            Each new client adds a content calendar, an ad account to babysit, a monthly report and a dozen Slack threads. The only lever has been hiring, which compresses margins and puts a junior between you and the client.
          </p>
          <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6]">
            Loraloop breaks the link between client count and headcount. You keep the strategy and the relationship. Loraloop does the production, the overnight ad monitoring and the reporting.
          </p>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Built for multi-client marketing operations</h2>
          <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] text-center mb-12 max-w-xl mx-auto">Every feature assumes you are running several brands at once, each with its own voice, channels and approver.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {agencyFeatures.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-[#111827] text-[15px] leading-[1.25] tracking-[-0.015em] mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>{f.title}</h3>
                <p className="text-[14px] text-[#4b5563] leading-[1.6]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After comparison */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-10" style={{ fontFamily: 'Satoshi, sans-serif' }}>What changes when you run Loraloop</h2>
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
                    <td className="py-4 pr-6 font-semibold text-[#111827]">{row.aspect}</td>
                    <td className="py-4 pr-6 text-[#4b5563]">{row.without}</td>
                    <td className="py-4 text-[#4b5563]">{row.with}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Onboarding CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center rounded-3xl p-12" style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%)' }}>
          <div className="inline-block bg-white bg-opacity-20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">For agencies</div>
          <h2 className="text-3xl md:text-[40px] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Onboard your next client in an afternoon</h2>
          <p className="text-blue-100 text-[16px] mb-6 leading-[1.6]">Build the brand knowledge base, connect the channels and ad accounts, and have the first month's plan sitting in the client's approval queue before the kickoff call ends.</p>
          <div className="space-y-3">
            {['One workspace per client', 'Client approval workflow', 'SEO and GEO article production', 'Meta and Google ads monitored overnight', 'Daily briefing and monthly report per client', 'Team seats and permissions'].map((item) => (
              <div key={item} className="flex items-center justify-center gap-2 text-white text-sm">
                <svg className="w-4 h-4 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                {item}
              </div>
            ))}
          </div>
          <a
            data-ml-goal="signup_click" data-ml-goal-location="agencies_footer_cta"
            href="/app/signup"
            className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-white rounded-full text-blue-700 font-bold text-base hover:bg-gray-50 transition-all"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Start free →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto pb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>Agency questions answered</h2>
        <div className="space-y-2">
          {faqs.map((faq) => (
            <details key={faq.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-[#111827] text-[16px] flex items-center justify-between list-none" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                {faq.q}
                <span className="text-blue-500 text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="px-6 pb-5 text-[14px] text-[#4b5563] leading-[1.6]">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-[#6b7280] text-[14px] mb-4">Running more than 20 brands, or need custom integrations?</p>
          <Link to="/contact" className="text-blue-600 font-semibold text-[14px] hover:underline">Talk to us →</Link>
        </div>
      </section>
    </div>
  );
}
