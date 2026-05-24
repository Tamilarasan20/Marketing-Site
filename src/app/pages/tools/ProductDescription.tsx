import { useState } from 'react';
import { Link } from 'react-router';
import CTABanner from '../../components/CTABanner';
import { useStreamGeneration } from '../../hooks/useStreamGeneration';

const faqs = [
  { q: 'Why do product descriptions matter?', a: "Your product description is a silent salesperson that works 24/7. Good descriptions address objections, highlight benefits, and build enough confidence for someone to click 'Buy Now'." },
  { q: 'How long should a product description be?', a: "A $15 impulse buy: 50-100 words. A $200 considered purchase: 150-300 words. A $1,000 product: 300-500 words. Include both a short version (for mobile/scan readers) and a long version." },
  { q: 'How do I optimize product descriptions for SEO?', a: "Include your primary keyword naturally in the title, first sentence, and bullet points. Use secondary keywords in the body copy. Write alt text for images. Unique, specific descriptions rank better than generic manufacturer copy." },
  { q: "What's the difference between features and benefits?", a: "A feature is what the product has. A benefit is what the customer gets. Benefits sell; features just inform. Always translate features into the customer's life." },
  { q: 'How often should I update product descriptions?', a: "Review them when you get customer questions, when you add features or change specs, seasonally, or any time conversion rates drop significantly." },
];
const relatedTools = [
  { name: 'Ad Copy Generator', to: '/tools/ad-copy' },
  { name: 'Landing Page Copy Generator', to: '/tools/landing-page-copy' },
  { name: 'Hook Generator', to: '/tools/hook-generator' },
];

export default function ProductDescription() {
  const { output, isLoading, error, generate } = useStreamGeneration();
  const [formData, setFormData] = useState({ productName: '', category: '', features: '', targetCustomer: '', platform: 'Shopify / WooCommerce', tone: 'Conversational' });
  const update = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-violet-600">Home</Link><span>/</span>
        <span className="text-gray-600">Product Description Generator</span>
      </nav>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🛍️</span>
          <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">Free · No login required</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Free AI Product Description Generator</h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">Generate SEO-optimized product descriptions, bullet points, social captions, and ad copy — all in one shot. Built for Shopify, Amazon, Etsy, and eCommerce brands.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Tell us about your product</h2>
        <form onSubmit={(e) => { e.preventDefault(); generate('product-description', formData); }} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Product name *</label><input type="text" value={formData.productName} onChange={(e) => update('productName', e.target.value)} placeholder="e.g. The Clarity Journal" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Category *</label><input type="text" value={formData.category} onChange={(e) => update('category', e.target.value)} placeholder="e.g. Mindfulness journal, guided planner" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" /></div>
          </div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Key features (list 3-5) *</label><textarea value={formData.features} onChange={(e) => update('features', e.target.value)} placeholder="- 90-day layout with daily, weekly, and monthly reflection pages&#10;- Lay-flat binding, 200 GSM thick paper&#10;- Built-in habit tracker and mood log" required rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none" /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Target customer *</label><input type="text" value={formData.targetCustomer} onChange={(e) => update('targetCustomer', e.target.value)} placeholder="e.g. Women 25-40 dealing with anxiety, want to build a daily mindfulness habit" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" /></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Platform *</label><select value={formData.platform} onChange={(e) => update('platform', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"><option>Shopify / WooCommerce</option><option>Amazon</option><option>Etsy</option><option>General eCommerce</option></select></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Brand tone *</label><select value={formData.tone} onChange={(e) => update('tone', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"><option>Conversational</option><option>Professional</option><option>Luxury / Premium</option><option>Fun / Playful</option><option>Inspirational</option></select></div>
          </div>
          {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
          <button type="submit" disabled={isLoading} className="w-full py-3.5 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sm">
            {isLoading ? <span className="flex items-center justify-center gap-2"><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Generating product copy...</span> : 'Generate Product Copy →'}
          </button>
        </form>
      </div>
      {(output || isLoading) && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Your Product Copy</h2>
            {output && !isLoading && <button onClick={() => navigator.clipboard.writeText(output)} className="text-sm text-violet-600 hover:text-violet-700 font-medium border border-violet-200 px-3 py-1.5 rounded-lg hover:bg-violet-50 transition-colors">Copy to clipboard</button>}
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 lg:p-8 text-gray-800 whitespace-pre-wrap leading-7 text-sm min-h-[200px]">
            {output}{isLoading && <span className="inline-block w-2 h-5 bg-violet-500 animate-pulse ml-0.5 align-text-bottom rounded-sm" />}
          </div>
          {output && !isLoading && (
            <div className="mt-6 p-6 bg-violet-50 border border-violet-100 rounded-xl">
              <p className="font-semibold text-violet-900 mb-1">Product copy done. Now drive traffic with Loraloop.</p>
              <p className="text-sm text-violet-700 mb-4">Loraloop turns your output into an automated marketing system on autopilot.</p>
              <a href="https://app.loraloop.com" className="inline-block px-5 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700 transition-colors">Start Free with Loraloop →</a>
            </div>
          )}
        </div>
      )}
      <CTABanner heading="Great product copy deserves great traffic." subtext="Loraloop creates the social posts, stories, and ads that drive buyers to your product pages — all in your brand voice, all on autopilot." />
      <div className="mt-12"><h3 className="text-lg font-bold text-gray-900 mb-4">Related tools</h3><div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{ relatedTools.map((tool) => (<Link key={tool.to} to={tool.to} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-violet-300 hover:shadow-sm transition-all"><p className="font-semibold text-gray-900 text-sm mb-1">{tool.name}</p><p className="text-xs text-violet-600">Try free →</p></Link>))}</div></div>
      <div className="mt-12"><h3 className="text-xl font-bold text-gray-900 mb-6">Frequently asked questions</h3><div className="space-y-1">{ faqs.map((faq) => (<details key={faq.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden group"><summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 text-sm flex items-center justify-between list-none">{faq.q}<span className="text-violet-500 text-lg group-open:rotate-45 transition-transform">+</span></summary><p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p></details>))}</div></div>
    </div>
  );
}
