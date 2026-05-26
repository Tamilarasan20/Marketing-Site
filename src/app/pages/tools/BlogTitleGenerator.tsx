import { useState } from 'react';
import { Link } from 'react-router';
import CTABanner from '../../components/CTABanner';
import { useStreamGeneration } from '../../hooks/useStreamGeneration';
import NextToolsSection from '../../components/NextToolsSection';
import ToolCtaSection from '../../components/ToolCtaSection';

const faqs = [
  { q: 'What makes a good blog title for SEO?', a: "A good SEO blog title includes the target keyword near the start, signals search intent clearly (list, guide, comparison, how-to), and is specific rather than vague. Titles between 50–60 characters perform best in search results. Numbers (e.g. '7 Ways') and parenthetical qualifiers (e.g. '(2026 Guide)') consistently improve click-through rates." },
  { q: 'How many title options should I test?', a: 'Generate 5–10 title variations and pick the one that best matches your target keyword and content intent. If you publish regularly, A/B testing titles using paid social or email can reveal which styles resonate most with your audience over time.' },
  { q: 'Should my blog title match my H1 exactly?', a: 'Your title tag (what appears in Google) and your H1 (what appears on the page) can differ slightly. The title tag should be optimized for the keyword and search snippet. The H1 can be slightly longer or conversational. They should not contradict each other.' },
  { q: 'Does a better title actually affect Google rankings?', a: "Title tag optimization affects click-through rate (CTR) from search results, which indirectly influences rankings. A title that better matches search intent and generates more clicks can improve a page's position over time, even without other changes." },
  { q: 'Can I use these titles for content that isn\'t yet written?', a: 'Yes. In fact, writing the title first is a strong content strategy. The title defines your target keyword and content scope before you write a word — which produces more focused, SEO-effective articles.' },
];

export default function BlogTitleGenerator() {
  const { output, isLoading, error, generate } = useStreamGeneration();
  const [formData, setFormData] = useState({ topic: '', keyword: '', audience: '', intent: 'Informational', industry: '' });
  const update = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-violet-600">Home</Link><span>/</span>
        <Link to="/tools" className="hover:text-violet-600">Free AI Tools</Link><span>/</span>
        <span className="text-gray-700">Blog Title Generator</span>
      </nav>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">📝</span>
          <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">Free · No login required</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Free AI Blog Title Generator</h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">Generate 10 SEO-optimized blog title options — keyword-targeted, click-worthy, and matched to search intent — in under 60 seconds.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Tell us about your blog article</h2>
        <form onSubmit={(e) => { e.preventDefault(); generate('blog-title-generator', formData); }} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">What is your article about? *</label>
            <textarea value={formData.topic} onChange={(e) => update('topic', e.target.value)} placeholder="e.g. How small businesses can use AI tools to save time on marketing and generate consistent content without hiring a team" required rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Target keyword <span className="text-gray-400 font-normal">(optional)</span></label>
              <input type="text" value={formData.keyword} onChange={(e) => update('keyword', e.target.value)} placeholder="e.g. AI marketing tools for small business" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Search intent *</label>
              <select value={formData.intent} onChange={(e) => update('intent', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white">
                <option>Informational</option>
                <option>Comparison / vs</option>
                <option>How-to / Tutorial</option>
                <option>List / Roundup</option>
                <option>Commercial / Buying guide</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Target audience *</label>
              <input type="text" value={formData.audience} onChange={(e) => update('audience', e.target.value)} placeholder="e.g. Founders and small business owners" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Industry / niche <span className="text-gray-400 font-normal">(optional)</span></label>
              <input type="text" value={formData.industry} onChange={(e) => update('industry', e.target.value)} placeholder="e.g. SaaS, eCommerce, Marketing" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
            </div>
          </div>
          {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
          <button type="submit" disabled={isLoading} className="w-full py-3.5 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sm">
            {isLoading ? <span className="flex items-center justify-center gap-2"><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Generating titles...</span> : 'Generate Blog Titles →'}
          </button>
        </form>
      </div>
      {(output || isLoading) && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Your Blog Title Options</h2>
            {output && !isLoading && <button onClick={() => navigator.clipboard.writeText(output)} className="text-sm text-violet-600 hover:text-violet-700 font-medium border border-violet-200 px-3 py-1.5 rounded-lg hover:bg-violet-50 transition-colors">Copy to clipboard</button>}
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 lg:p-8 text-gray-800 whitespace-pre-wrap leading-7 text-sm min-h-[200px]">
            {output}{isLoading && <span className="inline-block w-2 h-5 bg-violet-500 animate-pulse ml-0.5 align-text-bottom rounded-sm" />}
          </div>
          {output && !isLoading && (
            <div className="mt-6 p-6 bg-violet-50 border border-violet-100 rounded-xl">
              <p className="font-semibold text-violet-900 mb-1">Want Helena to write the full SEO article for this title?</p>
              <p className="text-sm text-violet-700 mb-4">Loraloop generates complete SEO and GEO-optimized blog articles in your brand voice — keyword-targeted, structured for AI search citation, and ready for your approval.</p>
              <a href="https://app.loraloop.com" className="inline-block px-5 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700 transition-colors">Write the Full Article with Loraloop →</a>
            </div>
          )}
        </div>
      )}
      <CTABanner heading="Turn your blog titles into published SEO articles." subtext="Loraloop generates full keyword-targeted blog articles from your brand knowledge base — GEO-structured for AI search citation and ready for review." />
      <div className="mt-12">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently asked questions</h3>
        <div className="space-y-1">
          {faqs.map((faq) => (
            <details key={faq.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 text-sm flex items-center justify-between list-none">{faq.q}<span className="text-violet-500 text-lg group-open:rotate-45 transition-transform">+</span></summary>
              <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
      <NextToolsSection currentSlug="blog-title-generator" />
      <ToolCtaSection />
    </div>
  );
}
