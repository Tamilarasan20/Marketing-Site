import { Link } from 'react-router';

const features = [
  { icon: '🧠', title: 'Brand knowledge base', desc: 'Loraloop stores your brand voice, audience, positioning, and product info — so every output sounds like you, not generic AI copy.' },
  { icon: '📅', title: 'Monthly campaign planning', desc: 'Get a full monthly marketing plan tied to your revenue goals — channels, themes, content mix, and timing.' },
  { icon: '✍️', title: 'Content written for you', desc: 'Social posts for LinkedIn, Instagram, X, Facebook, and TikTok. SEO blog articles. Ad copy. Email sequences. All generated in your brand voice.' },
  { icon: '🔍', title: 'SEO + GEO + AEO coverage', desc: 'Blog articles ranked for Google. Structured content cited by Perplexity, ChatGPT, and Google AI Overviews. Voice-optimized answers for AI assistants.' },
  { icon: '✅', title: 'Approval before anything publishes', desc: 'You review every draft. Nothing goes live without your explicit sign-off — protecting your brand at every step.' },
  { icon: '📊', title: 'Performance reporting', desc: 'See which content is driving traffic, engagement, and leads. Monthly reports that tell you what to double down on.' },
];

const painPoints = [
  { stat: '30+', label: 'hours per week founders spend on marketing — on average' },
  { stat: '73%', label: 'of founders say inconsistent content is their biggest marketing problem' },
  { stat: '6x', label: 'more content types needed today vs 3 years ago (social, SEO, GEO, AEO, ads, email)' },
];

const faqs = [
  { q: 'Do I need a marketing background to use Loraloop?', a: 'No. Loraloop is built for founders who are not marketers. You answer a few questions about your business, and Loraloop builds the strategy, creates the content, and presents it for your approval. No marketing expertise required.' },
  { q: 'How is Loraloop different from Buffer or Hootsuite?', a: 'Buffer and Hootsuite are scheduling tools — you supply the content and they distribute it. Loraloop is an AI marketing team: it creates the strategy, writes the content, optimizes it for SEO and AI search, and then presents drafts for your approval before scheduling. It replaces the work a content strategist, copywriter, and SEO specialist would do.' },
  { q: 'Will the content actually sound like my brand?', a: 'Yes — this is Loraloop\'s core feature. During onboarding you build a brand knowledge base with your voice, audience, positioning, and product details. Every piece of content is generated from this knowledge base, so outputs reflect your specific brand, not generic marketing language.' },
  { q: 'How much time will I actually save?', a: 'Most founders using Loraloop reduce active marketing time to under 3 hours per week — reviewing and approving drafts rather than writing from scratch. The strategy, content creation, SEO research, and scheduling happen automatically.' },
  { q: 'What platforms does Loraloop cover?', a: 'LinkedIn, Instagram, X (Twitter), Facebook, TikTok for social. Google keyword-optimized blog content for SEO. GEO content for Perplexity, ChatGPT, and Google AI Overviews. AEO content for voice search. Ad copy for Facebook, Instagram, Google, and TikTok. Email sequences and newsletters.' },
];

export default function ForFounders() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <span>For Founders & Indie Hackers</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          Your AI marketing team<br />
          <span style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            when you don't have time to market
          </span>
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
          Loraloop builds your strategy, writes your content, optimizes for SEO and AI search, and presents everything for your approval — so you can focus on building the business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', fontFamily: 'Satoshi, sans-serif' }}
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

      {/* Pain stats */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">The founder marketing problem</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {painPoints.map((p) => (
              <div key={p.stat} className="text-center">
                <p className="text-5xl font-extrabold mb-2" style={{ fontFamily: 'Satoshi, sans-serif', background: 'linear-gradient(135deg, #7c3aed, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{p.stat}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-20 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-5" style={{ fontFamily: 'Satoshi, sans-serif' }}>Marketing is the job that never ends</h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-4">
          Most founders know they need consistent marketing — but between building the product, handling customers, and everything else, marketing always falls behind. You post when you remember. The blog never gets written. The SEO strategy stays a note in Notion.
        </p>
        <p className="text-gray-500 text-lg leading-relaxed">
          Loraloop solves this by giving you a team of AI employees who handle marketing full-time. You review and approve. They execute.
        </p>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Everything a marketing team does — without the team</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Loraloop covers the full marketing stack so you don't need to hire a strategist, copywriter, SEO specialist, or social media manager.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12" style={{ fontFamily: 'Satoshi, sans-serif' }}>How it works for founders</h2>
        <div className="space-y-8">
          {[
            { step: '01', title: 'Build your brand knowledge base', desc: 'Spend 30 minutes answering questions about your business, audience, voice, and goals. Loraloop stores this permanently and uses it for every piece of content it creates.' },
            { step: '02', title: 'Get your first monthly plan', desc: 'Loraloop generates a full marketing plan — campaigns, content calendar, platform mix, and SEO targets — aligned to your revenue goals.' },
            { step: '03', title: 'Review drafts in your approval queue', desc: 'Every social post, blog article, and ad draft appears in your queue before it publishes. Edit what needs editing. Approve what\'s ready. Reject what misses the mark.' },
            { step: '04', title: 'Marketing runs automatically', desc: 'Approved content schedules and publishes on time. Loraloop tracks performance and refines future content based on what works.' },
          ].map((s) => (
            <div key={s.step} className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', fontFamily: 'Satoshi, sans-serif' }}>{s.step}</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Satoshi, sans-serif' }}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center rounded-3xl p-12" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)' }}>
          <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Run your marketing while you build your business</h2>
          <p className="text-violet-100 mb-8 leading-relaxed">Start free. Build your brand knowledge base in 30 minutes. Get your first monthly plan and content drafts the same day.</p>
          <a
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 bg-white rounded-full text-violet-700 font-bold text-base hover:bg-gray-50 transition-all"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Try Loraloop Free →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto pb-24">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>Frequently asked questions</h2>
        <div className="space-y-2">
          {faqs.map((faq) => (
            <details key={faq.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 text-sm flex items-center justify-between list-none" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                {faq.q}
                <span className="text-violet-500 text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-4">Still have questions?</p>
          <Link to="/contact" className="text-violet-600 font-semibold text-sm hover:underline">Talk to us →</Link>
        </div>
      </section>
    </div>
  );
}
