import { useState } from 'react';
import { Link } from 'react-router';
import CTABanner from '../components/CTABanner';
import { useStreamGeneration } from '../hooks/useStreamGeneration';

const faqs = [
  { q: 'What is a social media content calendar?', a: 'A content calendar is a planned schedule of what you will post, when, and on which platform. It removes the daily "what do I post?" panic and ensures you show up consistently — which is the #1 driver of organic growth.' },
  { q: 'How far in advance should I plan content?', a: '30 days is the sweet spot for small businesses. Far enough to be strategic, close enough to stay relevant. You can batch-create content at the start of each month and schedule it in advance.' },
  { q: 'How many times per week should I post?', a: 'Consistency beats frequency every time. It is better to post 3 times per week reliably than 7 times one week and zero the next. For most small businesses, 3-5 times per week on one platform is ideal.' },
  { q: 'Does the same content calendar work for all platforms?', a: 'No. Each platform has different formats, audience behaviors, and optimal posting times. This tool creates calendars specific to your chosen platform.' },
  { q: 'What do I do after I have the calendar?', a: 'Use it as a brief to create content. Or use Loraloop to auto-generate the actual captions, visuals, and posts from the calendar — then schedule them with one click.' },
];
const relatedTools = [
  { name: 'Brand Voice Generator', to: '/tools/brand-voice' },
  { name: 'Hook Generator', to: '/tools/hook-generator' },
  { name: 'Content Pillar Generator', to: '/tools/content-pillars' },
];

export default function SocialCalendar() {
  const { output, isLoading, error, generate } = useStreamGeneration();
  const [formData, setFormData] = useState({ businessType: '', audience: '', goal: 'Brand awareness', platform: 'Instagram', frequency: '5x/week' });
  const update = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-violet-600">Home</Link><span>/</span>
        <span className="text-gray-600">Social Media Calendar Generator</span>
      </nav>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">📅</span>
          <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">Free · No login required</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Free AI Social Media Calendar Generator</h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">Generate a complete 30-day content calendar with post ideas, hooks, formats, and hashtags — specific to your business and platform.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Build your 30-day calendar</h2>
        <form onSubmit={(e) => { e.preventDefault(); generate('social-calendar', formData); }} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Business type / niche *</label>
            <input type="text" value={formData.businessType} onChange={(e) => update('businessType', e.target.value)} placeholder="e.g. Online fitness coaching for busy moms" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Target audience *</label>
            <input type="text" value={formData.audience} onChange={(e) => update('audience', e.target.value)} placeholder="e.g. Women 28-45, full-time jobs, want to get fit in 30 minutes/day" required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Primary goal *</label>
              <select value={formData.goal} onChange={(e) => update('goal', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white">
                <option>Brand awareness</option><option>Generate leads</option><option>Drive sales</option><option>Build community</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Platform *</label>
              <select value={formData.platform} onChange={(e) => update('platform', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white">
                <option>Instagram</option><option>TikTok</option><option>LinkedIn</option><option>Twitter/X</option><option>Facebook</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Posting frequency *</label>
              <select value={formData.frequency} onChange={(e) => update('frequency', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white">
                <option>Daily (7x/week)</option><option>5x/week</option><option>3x/week</option><option>2x/week</option>
              </select>
            </div>
          </div>
          {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
          <button type="submit" disabled={isLoading} className="w-full py-3.5 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sm">
            {isLoading ? <span className="flex items-center justify-center gap-2"><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Building your 30-day calendar...</span> : 'Generate My 30-Day Calendar →'}
          </button>
        </form>
      </div>
      {(output || isLoading) && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Your 30-Day Content Calendar</h2>
            {output && !isLoading && <button onClick={() => navigator.clipboard.writeText(output)} className="text-sm text-violet-600 hover:text-violet-700 font-medium border border-violet-200 px-3 py-1.5 rounded-lg hover:bg-violet-50 transition-colors">Copy to clipboard</button>}
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 lg:p-8 text-gray-800 whitespace-pre-wrap leading-7 text-sm min-h-[200px]">
            {output}{isLoading && <span className="inline-block w-2 h-5 bg-violet-500 animate-pulse ml-0.5 align-text-bottom rounded-sm" />}
          </div>
          {output && !isLoading && (
            <div className="mt-6 p-6 bg-violet-50 border border-violet-100 rounded-xl">
              <p className="font-semibold text-violet-900 mb-1">Let Loraloop create the actual content for every day on this calendar.</p>
              <p className="text-sm text-violet-700 mb-4">Auto-generate captions, creatives, and approval-ready posts — then schedule them automatically.</p>
              <a href="https://app.loraloop.com" className="inline-block px-5 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700 transition-colors">Start Free with Loraloop →</a>
            </div>
          )}
        </div>
      )}
      <CTABanner heading="Auto-generate captions, creatives, and posts for every day on this calendar." subtext="Loraloop turns your content calendar into scheduled, brand-consistent posts — without you writing a single caption." />
      <div className="mt-12">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Related tools</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {relatedTools.map((tool) => (<Link key={tool.to} to={tool.to} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-violet-300 hover:shadow-sm transition-all"><p className="font-semibold text-gray-900 text-sm mb-1">{tool.name}</p><p className="text-xs text-violet-600">Try free →</p></Link>))}
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently asked questions</h3>
        <div className="space-y-1">
          {faqs.map((faq) => (<details key={faq.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden group"><summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 text-sm flex items-center justify-between list-none">{faq.q}<span className="text-violet-500 text-lg group-open:rotate-45 transition-transform">+</span></summary><p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p></details>))}
        </div>
      </div>
    </div>
  );
}
