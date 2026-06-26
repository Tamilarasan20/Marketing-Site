import { Link } from 'react-router';

const features = [
  { icon: '⚡', title: 'Content drafted in minutes, not hours', desc: 'Stop writing client captions from scratch. Loraloop generates a full month of content per client — social posts, blog articles, ad copy — ready for your review.' },
  { icon: '🧠', title: 'Brand knowledge base per client', desc: 'Store each client\'s voice, audience, products, and positioning. Every output automatically uses the right brand context without re-briefing the AI each time.' },
  { icon: '✅', title: 'Approval before anything publishes', desc: 'Review and approve drafts before they go anywhere. Edit what needs editing, reject what misses the mark — you stay in control.' },
  { icon: '📊', title: 'Client-ready performance reports', desc: 'Generate professional monthly reports for each client showing content volume, engagement, and SEO progress — without building spreadsheets manually.' },
  { icon: '🔍', title: 'SEO content your clients actually need', desc: 'Generate keyword-optimized blog articles and GEO-structured content for client websites — without needing to be an SEO specialist yourself.' },
  { icon: '📅', title: 'Content calendars that plan themselves', desc: 'Get monthly content plans per client tied to their goals and channels — so you stop spending strategy hours that don\'t bill at full rate.' },
];

const clientCapacity = [
  { before: '3 clients', after: '6–8 clients', label: 'typical capacity increase' },
  { before: '20 hrs/client/month', after: '6–8 hrs/client/month', label: 'content production time' },
  { before: 'Writing from scratch', after: 'Review and approve drafts', label: 'how you spend your time' },
];

const faqs = [
  { q: 'Can I manage multiple client brands in Loraloop?', a: 'Yes. Each client gets their own brand workspace with a separate knowledge base, content queue, and calendar. You switch between clients without any context confusion.' },
  { q: 'Will the content sound like each client, not like generic AI?', a: 'Yes — this is the core feature. You build a brand knowledge base for each client with their voice, audience, products, and messaging. Loraloop generates all outputs from that specific knowledge base, so each client\'s content sounds like them, not like everyone else.' },
  { q: 'How much time can I realistically save per client per month?', a: 'Most freelancers using Loraloop reduce content production time from 15–25 hours per client per month to 4–8 hours — spending time reviewing and approving rather than writing everything from scratch. That time difference is what lets you take on more clients.' },
  { q: 'Can I let clients see and approve their own content?', a: 'Yes. You can give clients access to review drafts in their own approval queue before anything schedules. This builds accountability into the relationship and removes the back-and-forth over email.' },
  { q: 'Does Loraloop handle SEO content for client blogs?', a: 'Yes. Loraloop generates SEO-optimized blog articles targeting specific keywords, plus GEO-structured content for AI search engine citation. This means you can offer SEO content delivery to clients without being an SEO expert yourself.' },
  { q: 'What plan do I need as a freelancer managing multiple clients?', a: 'The Pro or Agency plan supports multiple client brands. If you manage 3–5 brands, Pro works well. For larger client portfolios, the Agency plan gives you more workspace capacity and higher credit limits.' },
];

export default function ForFreelancers() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <span>For Marketing Freelancers</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-[#0f172a] leading-[1.05] tracking-[-0.03em] text-balance mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          Handle more clients<br />
          <span style={{ background: 'linear-gradient(135deg, #059669, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            without burning out
          </span>
        </h1>
        <p className="text-[18px] md:text-[20px] text-[#4b5563] leading-[1.6] max-w-2xl mx-auto mb-10">
          Loraloop generates content for your clients — social posts, SEO blogs, ad copy, and reports — so you can take on more accounts without working more hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #059669, #2563eb)', fontFamily: 'Satoshi, sans-serif' }}
          >
            Start Free — No credit card
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

      {/* Capacity comparison */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center text-[13px] font-semibold text-[#6b7280] uppercase tracking-[0.08em] mb-8">What changes when Loraloop handles production</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {clientCapacity.map((c) => (
              <div key={c.label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-red-400 font-bold text-sm line-through">{c.before}</span>
                  <span className="text-gray-300">→</span>
                  <span className="text-emerald-600 font-bold text-sm">{c.after}</span>
                </div>
                <p className="text-[14px] text-[#6b7280]">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The freelancer problem */}
      <section className="py-20 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-5" style={{ fontFamily: 'Satoshi, sans-serif' }}>You're selling your time, and time is the ceiling</h2>
        <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] mb-4">
          Every freelancer hits the same problem: you can only take on as many clients as you have hours. Content creation is the most time-intensive part — and it's the part that doesn't scale.
        </p>
        <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6]">
          Loraloop shifts your role from content producer to content director. You set the direction, review the drafts, and approve what's ready. The AI handles the writing, research, and production.
        </p>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Built for freelancers managing multiple clients</h2>
          <p className="text-[#4b5563] text-[18px] md:text-[20px] leading-[1.6] text-center mb-12 max-w-xl mx-auto">Every feature is designed to reduce your production workload without reducing content quality.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-[22px] font-semibold text-[#111827] leading-[1.25] tracking-[-0.015em] mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>{f.title}</h3>
                <p className="text-[14px] text-[#4b5563] leading-[1.6]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] text-center mb-10" style={{ fontFamily: 'Satoshi, sans-serif' }}>How freelancers use Loraloop</h2>
        <div className="space-y-6">
          {[
            { title: 'Social media management clients', desc: 'Build a brand knowledge base for each client. Generate a full month of captions, carousels, and reels. Review and approve. Schedule and report. Run 3–4 clients on social with the workload of 1.' },
            { title: 'Content marketing retainers', desc: 'Generate keyword-targeted blog articles for client SEO, GEO content for AI search visibility, and monthly editorial calendars — deliverables that command higher retainer fees without proportional time cost.' },
            { title: 'Full-service marketing packages', desc: 'Offer social + SEO + email + ad copy + monthly reporting as a bundled package. Loraloop generates everything; you review, refine, and deliver. A service offering that used to require a team now runs through one person.' },
          ].map((u) => (
            <div key={u.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-[22px] font-semibold text-[#111827] leading-[1.25] tracking-[-0.015em] mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>{u.title}</h3>
              <p className="text-[14px] text-[#4b5563] leading-[1.6]">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center rounded-3xl p-12" style={{ background: 'linear-gradient(135deg, #059669 0%, #2563eb 100%)' }}>
          <h2 className="text-3xl md:text-[40px] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Take on more clients. Start free with Loraloop.</h2>
          <p className="text-emerald-100 text-[16px] mb-8 leading-[1.6]">Build brand workspaces for your existing clients and see how much production time you can move into the AI queue in the first week.</p>
          <a
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 bg-white rounded-full text-emerald-700 font-bold text-base hover:bg-gray-50 transition-all"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Try Loraloop Free →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto pb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>Questions from freelancers</h2>
        <div className="space-y-2">
          {faqs.map((faq) => (
            <details key={faq.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-[#111827] text-[16px] flex items-center justify-between list-none" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                {faq.q}
                <span className="text-emerald-500 text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="px-6 pb-5 text-[14px] text-[#4b5563] leading-[1.6]">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-[#6b7280] text-[14px] mb-4">Questions about using Loraloop for your freelance business?</p>
          <Link to="/contact" className="text-emerald-600 font-semibold text-[14px] hover:underline">Talk to us →</Link>
        </div>
      </section>
    </div>
  );
}
