import { Link } from 'react-router';

const features = [
  { icon: '🛍️', title: 'Product-first content creation', desc: 'Generate posts built around your actual products — features, benefits, use cases, and seasonal angles — not generic marketing copy.' },
  { icon: '📆', title: 'Seasonal campaign planning', desc: 'Never miss a sales moment. Loraloop builds campaign plans around your store calendar — launches, promotions, holidays, and seasonal pushes.' },
  { icon: '🔍', title: 'SEO content for product categories', desc: 'Rank for buyer-intent keywords with AI-generated blog articles targeting product category searches, comparison queries, and buying guides.' },
  { icon: '🤖', title: 'GEO content for AI search', desc: 'Structure your content so Perplexity, ChatGPT, and Google AI Overviews cite your brand when shoppers search with AI.' },
  { icon: '📣', title: 'Ad copy for product campaigns', desc: 'Generate performance ad copy for Facebook, Instagram, Google, and TikTok — hooks, body copy, and CTAs for each product and offer.' },
  { icon: '📧', title: 'Email campaigns for launches and promos', desc: 'Create launch sequences, abandoned cart flows, promotional emails, and newsletters in your brand voice — all review-ready.' },
  { icon: '🕵️', title: 'Competitor tracking and insights', desc: 'Monitor competitor activity, identify content gaps, and get strategic recommendations for staying ahead in your category.' },
  { icon: '📊', title: 'Performance reporting', desc: 'Track which content drives traffic, engagement, and conversions. Monthly reports with clear actions.' },
];

const contentTypes = [
  { type: 'Product posts', desc: 'Feature highlights, before/afters, use cases, testimonials' },
  { type: 'Promotional offers', desc: 'Sale announcements, limited-time deals, bundle offers' },
  { type: 'Seasonal campaigns', desc: 'Black Friday, BFCM, back-to-school, holiday content' },
  { type: 'Educational content', desc: 'How-to posts, buyer guides, comparison articles' },
  { type: 'UGC-style captions', desc: 'Authentic, community-feel copy that converts' },
  { type: 'SEO blog articles', desc: 'Category and keyword-targeted articles for Google ranking' },
  { type: 'Ad creative copy', desc: 'Facebook, Instagram, Google, TikTok campaign copy' },
  { type: 'Email sequences', desc: 'Launch emails, cart recovery, newsletter campaigns' },
];

const faqs = [
  { q: 'How does Loraloop learn about my products?', a: 'During onboarding, you build a brand knowledge base that includes your product catalog, key product details, audience profiles, brand voice, and positioning. Loraloop uses this knowledge base for every piece of content it generates — so posts reference your actual products, not invented details.' },
  { q: 'Can Loraloop plan seasonal campaigns automatically?', a: 'Yes. Loraloop builds monthly campaign plans that account for your promotional calendar, seasonal moments, and product launches. You define the key dates and offers; Loraloop builds the content plan and generates the assets across channels.' },
  { q: 'Does Loraloop create ad copy for eCommerce campaigns?', a: 'Yes. Loraloop generates ad copy for Facebook, Instagram, Google, and TikTok — including hooks, body copy, and CTAs for product campaigns, promotional offers, and seasonal events. Content is generated in your brand voice and presented for review before use.' },
  { q: 'Can Loraloop write SEO blogs for my product categories?', a: 'Yes. Loraloop generates keyword-optimized blog articles targeting product category searches, buying guides, comparison queries, and long-tail keywords relevant to your catalog. This builds organic search visibility that drives shoppers to your store.' },
  { q: 'Does Loraloop support email marketing for eCommerce?', a: 'Yes. Loraloop generates email campaigns including product launch sequences, promotional offers, newsletter content, and re-engagement flows. Email drafts appear in your approval queue like all other content.' },
  { q: 'How is Loraloop different from a social media scheduler for eCommerce?', a: 'Social media schedulers distribute content you provide. Loraloop creates the content — strategy, copy, campaign structure, SEO articles, ad copy, emails — and then schedules what you approve. For eCommerce brands that need fresh content every week across multiple channels, Loraloop handles the creation load, not just the distribution.' },
];

export default function ForEcommerce() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <span>For eCommerce Brands</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          Plan, create, and schedule<br />
          <span style={{ background: 'linear-gradient(135deg, #ea580c, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            product marketing that sells
          </span>
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
          Loraloop creates product posts, seasonal campaigns, SEO content, ad copy, and emails for your eCommerce brand — all from your brand and product knowledge base.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #ea580c, #7c3aed)', fontFamily: 'Satoshi, sans-serif' }}
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

      {/* eCommerce content demand */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-5" style={{ fontFamily: 'Satoshi, sans-serif' }}>eCommerce brands need more content than anyone else</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-4">
            New products, weekly promotions, seasonal campaigns, product education, competitor responses, ad creative, email campaigns, SEO articles — the content demand for an eCommerce brand never stops.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed">
            Loraloop handles the full content workload from your brand knowledge base — so your marketing stays consistent, on-brand, and published every week without a full marketing team.
          </p>
        </div>
      </section>

      {/* Content types */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Every type of eCommerce content, automated</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Loraloop covers the full content mix eCommerce brands need every week — not just social scheduling.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {contentTypes.map((c) => (
              <div key={c.type} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <p className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: 'Satoshi, sans-serif' }}>{c.type}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center rounded-3xl p-12" style={{ background: 'linear-gradient(135deg, #ea580c 0%, #7c3aed 100%)' }}>
          <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Give your eCommerce brand a full AI marketing team</h2>
          <p className="text-orange-100 mb-8 leading-relaxed">Build your brand knowledge base, connect your channels, and get your first month of product marketing content — all in one session.</p>
          <a
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 bg-white rounded-full text-orange-700 font-bold text-base hover:bg-gray-50 transition-all"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Try Loraloop Free →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto pb-24">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>eCommerce questions answered</h2>
        <div className="space-y-2">
          {faqs.map((faq) => (
            <details key={faq.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 text-sm flex items-center justify-between list-none" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                {faq.q}
                <span className="text-orange-500 text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-4">Questions about using Loraloop for your eCommerce brand?</p>
          <Link to="/contact" className="text-orange-600 font-semibold text-sm hover:underline">Talk to us →</Link>
        </div>
      </section>
    </div>
  );
}
