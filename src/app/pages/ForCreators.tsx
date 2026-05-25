import { Link } from 'react-router';

const features = [
  { icon: '💡', title: 'Ideas into content, instantly', desc: 'Drop a single idea into Loraloop and get a full content set — a LinkedIn post, an Instagram caption, a TikTok hook, and a Twitter thread — all in your voice.' },
  { icon: '🔄', title: 'Repurpose across platforms', desc: 'One piece of content becomes five. A long-form post becomes short clips. A blog becomes social snippets. Stop creating from scratch for every platform.' },
  { icon: '📅', title: 'Content calendar that runs itself', desc: 'Get a monthly content calendar with post ideas, formats, hooks, and captions — planned around your content pillars and audience growth goals.' },
  { icon: '🎯', title: 'Content pillar strategy', desc: 'Build 5 consistent content themes that anchor your niche, attract the right audience, and make content ideation easier every week.' },
  { icon: '📈', title: 'Growth and consistency tracking', desc: 'See which content formats and topics are growing your following fastest. Monthly reports that show what\'s working and what to do more of.' },
  { icon: '🎙️', title: 'Bio and profile optimization', desc: 'Generate platform-optimized bios for Instagram, LinkedIn, TikTok, and X that attract followers and communicate your value clearly.' },
];

const creatorTypes = [
  { type: 'Personal brand builders', use: 'Build a consistent thought leadership presence on LinkedIn and X without spending your whole week writing.' },
  { type: 'Instagram creators', use: 'Generate a full month of captions, reels concepts, story ideas, and carousel hooks — all in your brand voice.' },
  { type: 'TikTok creators', use: 'Generate hook scripts, concept ideas, and caption sets for your TikTok content schedule.' },
  { type: 'YouTube creators', use: 'Turn video scripts and ideas into repurposed social posts, blog summaries, and email newsletters.' },
  { type: 'Podcast hosts', use: 'Convert episode topics into LinkedIn posts, Twitter threads, Instagram carousels, and email recaps.' },
  { type: 'Newsletter writers', use: 'Repurpose newsletter content into social posts, use Loraloop to extend your reach across platforms.' },
];

const faqs = [
  { q: 'Will the content sound like me, not like generic AI?', a: 'Yes. Loraloop builds a brand knowledge base from your voice, personality, content pillars, and communication style. Every output reflects how you actually write and talk — not the generic marketing tone most AI tools default to.' },
  { q: 'Can Loraloop repurpose one piece of content across platforms?', a: 'Yes. You can take a long-form post, a video idea, or a newsletter section and ask Loraloop to repurpose it for Instagram, LinkedIn, TikTok, and X. Each platform version is adapted for the right format, length, and style.' },
  { q: 'Does Loraloop help with content ideas or just writing?', a: 'Both. Loraloop generates content pillar strategies, monthly content calendars with specific post ideas and hooks, and full-length drafts ready for your review. You can start from scratch with Loraloop or bring an existing idea and have it expanded.' },
  { q: 'How is Loraloop different from ChatGPT for content?', a: 'ChatGPT generates one-off content when you prompt it with detailed context. Loraloop maintains a persistent brand knowledge base — it remembers your voice, audience, and content strategy month after month. You don\'t re-explain your brand every time. It also handles scheduling and tracks performance, not just generation.' },
  { q: 'Does Loraloop publish directly to my social accounts?', a: 'Yes. Loraloop connects to your social accounts and schedules approved content for automatic publishing. You review drafts in your approval queue, approve what\'s ready, and Loraloop handles the rest.' },
  { q: 'I already have an audience. Will Loraloop help me grow faster?', a: 'Loraloop helps you publish more consistently, cover more platforms, and test more content formats — which are the three biggest consistency levers for audience growth. The performance reporting also shows you which content is driving the most growth so you can double down on what works.' },
];

export default function ForCreators() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <span>For Creators & Personal Brands</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          Turn your ideas into<br />
          <span style={{ background: 'linear-gradient(135deg, #db2777, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            consistent content across platforms
          </span>
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
          Loraloop helps creators build content pillars, repurpose ideas across every platform, and stay consistent — without spending your whole week on production.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-bold text-base transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #db2777, #7c3aed)', fontFamily: 'Satoshi, sans-serif' }}
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

      {/* Creator burnout problem */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-5" style={{ fontFamily: 'Satoshi, sans-serif' }}>Creators burn out managing multiple platforms</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-4">
            Building a personal brand in 2026 means showing up on LinkedIn, Instagram, TikTok, X, and your newsletter — consistently. The ideas aren't the problem. The production time is.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed">
            Loraloop turns your ideas into a full cross-platform content set and handles the scheduling — so you stay consistent on every platform without blocking your whole calendar.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>Built for creators who want to scale without burning out</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Strategy, repurposing, scheduling, and growth insights — everything your content operation needs.</p>
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

      {/* Creator types */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10" style={{ fontFamily: 'Satoshi, sans-serif' }}>How different creators use Loraloop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {creatorTypes.map((c) => (
              <div key={c.type} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 text-sm mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>{c.type}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center rounded-3xl p-12" style={{ background: 'linear-gradient(135deg, #db2777 0%, #7c3aed 100%)' }}>
          <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>Grow consistently without burning out</h2>
          <p className="text-pink-100 mb-8 leading-relaxed">Build your content pillars, repurpose your ideas, and stay on schedule across every platform — starting today.</p>
          <a
            href="/app/signup"
            className="inline-flex items-center justify-center px-8 py-4 bg-white rounded-full text-pink-700 font-bold text-base hover:bg-gray-50 transition-all"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Try Loraloop Free →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto pb-24">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>Questions from creators</h2>
        <div className="space-y-2">
          {faqs.map((faq) => (
            <details key={faq.q} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 text-sm flex items-center justify-between list-none" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                {faq.q}
                <span className="text-pink-500 text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-4">Questions about Loraloop for your creator business?</p>
          <Link to="/contact" className="text-pink-600 font-semibold text-sm hover:underline">Talk to us →</Link>
        </div>
      </section>
    </div>
  );
}
