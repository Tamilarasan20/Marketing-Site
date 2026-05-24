import { useParams, Link } from "react-router";
import { ChevronRight, Link as LinkIcon, Clock } from "lucide-react";
import imgCallToActionSection from "../../imports/BlogL2-1/226049655f3871f3dac264b316138eae1882ff2f.png";
import imgFeatureImageSmall from "../../imports/BlogL2-1/18110a4df5acac34f23ec4990a55463713d90bef.png";
import imgLogos from "../../imports/BlogL2-1/808cf4a87ce2d856a11af393004688f1a9052950.png";
import imgLogos1 from "../../imports/BlogL2-1/6f9e851061034196060606283f0f5c6f664e7d42.png";
import imgLogos2 from "../../imports/BlogL2-1/72ee0c7d47bda910cca59fa484d03b9bb78885a3.png";
import imgLogos3 from "../../imports/BlogL2-1/d1c6a905b8b39c18046fbb8588b05eca44cfbfd5.png";
import imgLogos4 from "../../imports/BlogL2-1/c19b58cb0cef79f0c6f9f6c2d6119a3abcab1737.png";
import imgLogos5 from "../../imports/BlogL2-1/215585c81b06ce6b25e4697e64c75a244401e297.png";
import imgLogos6 from "../../imports/BlogL2-1/c7fe7372891e9f00b719c9bfb401718a19a7515e.png";
import imgLogos7 from "../../imports/BlogL2-1/62fcac5886e5a57ef8f7cf8f439afb75ac5ab2c9.png";
import { getBlogPost, blogPosts } from "../data/blogData";
import type { ContentSection } from "../data/blogData";
import { blogThumbnails } from "../data/blogThumbnails";
import { BlogThumbnail } from "../components/BlogThumbnail";

const aiTools = [
  { name: "ChatGPT", icon: imgLogos },
  { name: "Perplexity", icon: imgLogos1 },
  { name: "Claude", icon: imgLogos2 },
  { name: "Grok", icon: imgLogos3 },
  { name: "Google AI", icon: imgLogos4 },
];

function getReadTime(content: ContentSection[]): number {
  const words = content.reduce((acc, section) => {
    if ('text' in section) return acc + section.text.split(' ').length;
    if ('items' in section) {
      if (Array.isArray(section.items)) {
        if (typeof section.items[0] === 'string') return acc + (section.items as string[]).join(' ').split(' ').length;
        return acc + (section.items as { q: string; a: string }[]).reduce((s, i) => s + i.q.split(' ').length + i.a.split(' ').length, 0);
      }
    }
    return acc;
  }, 0);
  return Math.max(1, Math.ceil(words / 230));
}

function getSummarizeUrl(llm: string, pageUrl: string): string {
  const prompt = encodeURIComponent(`Summarize this article for me: ${pageUrl}`);
  const urls: Record<string, string> = {
    "ChatGPT": `https://chatgpt.com/?q=${prompt}`,
    "Perplexity": `https://www.perplexity.ai/search?q=${prompt}`,
    "Claude": `https://claude.ai/new?q=${prompt}`,
    "Grok": `https://x.com/i/grok?text=${prompt}`,
    "Google AI": `https://gemini.google.com/app?q=${prompt}`,
  };
  return urls[llm] ?? `https://www.perplexity.ai/search?q=${prompt}`;
}

function renderSection(section: ContentSection, index: number) {
  switch (section.type) {
    case "heading":
      return (
        <h2 key={index} className="font-['Satoshi:Bold',sans-serif] leading-tight text-[#0f172a] text-3xl md:text-[32px] mt-14 mb-4 tracking-[-0.5px]">
          {section.text}
        </h2>
      );
    case "subheading":
      return (
        <h3 key={index} className="font-['Satoshi:Bold',sans-serif] leading-snug text-[#1e293b] text-2xl mt-8 mb-3">
          {section.text}
        </h3>
      );
    case "paragraph":
      return (
        <p key={index} className="font-['General_Sans:Medium',sans-serif] text-[#374151] text-lg md:text-[19px] leading-[1.85] tracking-[0.01em]">
          {section.text}
        </p>
      );
    case "callout":
      return (
        <div key={index} className="border-l-[5px] border-[#1877f2] bg-gradient-to-r from-[#eff6ff] to-[#f8faff] rounded-r-2xl px-6 py-5 my-2">
          <p className="font-['Satoshi:Bold',sans-serif] text-[#1e40af] text-lg md:text-xl leading-[1.7]">{section.text}</p>
        </div>
      );
    case "list":
      return (
        <ul key={index} className="space-y-3 font-['General_Sans:Medium',sans-serif] text-[#374151] text-lg md:text-[19px]">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-3 items-start leading-[1.8]">
              <span className="mt-[6px] w-2 h-2 rounded-full bg-[#1877f2] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "numbered-list":
      return (
        <ol key={index} className="space-y-3 font-['General_Sans:Medium',sans-serif] text-[#374151] text-lg md:text-[19px]">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-4 items-start leading-[1.8]">
              <span className="shrink-0 w-7 h-7 rounded-full bg-[#eef4ff] text-[#1877f2] font-['Satoshi:Bold',sans-serif] text-sm flex items-center justify-center mt-0.5">{i + 1}</span>
              <span className="pt-0.5">{item}</span>
            </li>
          ))}
        </ol>
      );
    case "faq":
      return (
        <div key={index} className="flex flex-col gap-4 mt-4">
          {section.items.map((item, i) => (
            <details key={i} className="border border-[#e2e8f0] rounded-2xl overflow-hidden group">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none bg-[#f8fafc] hover:bg-[#f0f7ff] transition-colors">
                <p className="font-['Satoshi:Bold',sans-serif] text-[#0f172a] text-base md:text-lg">{item.q}</p>
                <span className="text-[#1877f2] text-xl font-bold shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <div className="px-6 py-5 border-t border-[#e2e8f0]">
                <p className="font-['General_Sans:Medium',sans-serif] text-[#475569] text-base md:text-lg leading-[1.8]">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      );
    case "cta":
      return (
        <div key={index} className="bg-gradient-to-br from-[#1877f2] to-[#0d5ed9] rounded-3xl p-8 md:p-10 mt-12 text-white">
          <p className="font-['Satoshi:Bold',sans-serif] leading-[1.4] text-xl md:text-2xl mb-6 text-white/95">{section.text}</p>
          <a
            href="https://loraloop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#1877f2] font-['Satoshi:Bold',sans-serif] px-8 py-4 rounded-full text-base hover:bg-blue-50 transition-colors shadow-sm"
          >
            Try Loraloop Free →
          </a>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogDetail() {
  const { id } = useParams();
  const post = getBlogPost(Number(id));
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  if (!post) {
    return (
      <div className="bg-white pt-32 pb-20 px-4 md:px-20 text-center">
        <h1 className="font-['Satoshi:Bold',sans-serif] text-4xl text-[#1f2937]">Blog post not found</h1>
        <Link to="/blog" className="text-[#1877f2] hover:underline mt-4 inline-block text-xl">← Back to Blog</Link>
      </div>
    );
  }

  const thumb = blogThumbnails[post.id] ?? { emoji: "📝", gradient: ["#6d28d9", "#4f46e5"] as [string, string] };
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);
  const fallbackRelated = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);
  const displayRelated = relatedPosts.length >= 2 ? relatedPosts : fallbackRelated;
  const readTime = getReadTime(post.content);

  return (
    <div className="bg-white">
      <div className="pt-20 md:pt-28 pb-36">

        {/* Header */}
        <div className="px-4 md:px-20 py-10 md:py-14 border-b border-[#f1f5f9]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
              <div className="flex-1 flex flex-col gap-6">
                {/* Breadcrumb */}
                <div className="flex gap-2 items-center">
                  <Link to="/blog" className="font-['General_Sans:Medium',sans-serif] text-sm text-[#64748b] hover:text-[#1877f2] transition-colors">Blog</Link>
                  <ChevronRight size={14} className="text-[#cbd5e1]" />
                  <span className="font-['General_Sans:Medium',sans-serif] text-sm text-[#1877f2] bg-[#eff6ff] px-2.5 py-0.5 rounded-full">{post.category}</span>
                </div>

                {/* Title */}
                <h1 className="font-['Satoshi:Bold',sans-serif] leading-[1.12] text-[#0f172a] text-4xl md:text-5xl tracking-[-1.5px]">
                  {post.title}
                </h1>

                {/* Description */}
                <p className="font-['General_Sans:Medium',sans-serif] text-[#475569] text-lg md:text-xl leading-[1.7]">
                  {post.description}
                </p>

                {/* Meta row */}
                <div className="flex flex-wrap gap-4 items-center">
                  <span className="font-['General_Sans:Medium',sans-serif] text-[#64748b] text-sm">{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#cbd5e1]" />
                  <span className="flex items-center gap-1.5 font-['General_Sans:Medium',sans-serif] text-[#64748b] text-sm">
                    <Clock size={13} />
                    {readTime} min read
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#cbd5e1]" />
                  <span className="font-['General_Sans:Medium',sans-serif] text-[#64748b] text-sm">Loraloop Team</span>
                </div>

                {/* Summarise */}
                <div className="flex flex-col gap-2.5">
                  <p className="font-['Satoshi:Bold',sans-serif] text-[#0f172a] text-sm uppercase tracking-wider">Summarise with AI</p>
                  <div className="flex flex-wrap gap-2">
                    {aiTools.map((ai) => (
                      <a key={ai.name} href={getSummarizeUrl(ai.name, currentUrl)} target="_blank" rel="noopener noreferrer"
                        className="bg-white flex gap-2 items-center px-4 py-2 rounded-xl border border-[#e2e8f0] shadow-sm hover:border-[#1877f2] hover:bg-[#f8faff] transition-all">
                        <img src={ai.icon} alt={ai.name} className="w-4 h-4" />
                        <span className="font-['General_Sans:Medium',sans-serif] text-[#334155] text-sm">{ai.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="flex gap-3 items-center">
                  <p className="font-['General_Sans:Medium',sans-serif] text-[#64748b] text-sm">Share:</p>
                  <button className="p-1.5 rounded-xl hover:bg-gray-100 transition-colors"><img src={imgLogos5} alt="Share" className="w-5 h-5" /></button>
                  <button className="p-1.5 rounded-xl hover:bg-gray-100 transition-colors"><img src={imgLogos6} alt="Share" className="w-5 h-5" /></button>
                  <button className="p-1.5 rounded-xl hover:bg-gray-100 transition-colors"><img src={imgLogos7} alt="Share" className="w-5 h-5" /></button>
                  <button className="p-1.5 rounded-xl hover:bg-gray-100 transition-colors" onClick={() => navigator.clipboard?.writeText(currentUrl)} title="Copy link">
                    <LinkIcon size={16} className="text-[#64748b]" />
                  </button>
                </div>
              </div>

              {/* Thumbnail */}
              <div className="w-full lg:w-[460px] h-[260px] sm:h-[320px] md:h-[380px] rounded-3xl overflow-hidden shrink-0">
                <BlogThumbnail emoji={thumb.emoji} gradient={thumb.gradient} category={post.category} />
              </div>
            </div>
          </div>
        </div>

        {/* Content + Sidebar */}
        <div className="px-4 md:px-20 py-12">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-14 items-start">

            {/* Article body — max width for readability */}
            <div className="flex-1 min-w-0">
              <div className="max-w-[740px] flex flex-col gap-6">
                {post.content.map((section, index) => renderSection(section, index))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-[280px] flex flex-col gap-6 lg:sticky lg:top-24 shrink-0">
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-3xl p-6">
                <h3 className="font-['Satoshi:Bold',sans-serif] text-[#0f172a] text-base mb-4">In this article</h3>
                <div className="h-px bg-[#e2e8f0] mb-4" />
                <div className="flex flex-col gap-1">
                  {post.tableOfContents.map((item, i) => (
                    <span key={i} className="font-['General_Sans:Medium',sans-serif] text-[#1877f2] text-sm leading-[1.6] py-1 px-2 rounded-lg hover:bg-[#eff6ff] cursor-pointer transition-colors block">
                      {i + 1}. {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read time */}
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl px-5 py-4 flex items-center gap-3">
                <Clock size={16} className="text-[#64748b] shrink-0" />
                <span className="font-['General_Sans:Medium',sans-serif] text-[#475569] text-sm">{readTime} min read</span>
              </div>

              {/* CTA card */}
              <div className="h-[280px] rounded-3xl relative overflow-hidden border border-[#08f]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0073ff] to-[#0da2ff]" />
                <div className="absolute inset-0 opacity-40 mix-blend-plus-lighter" style={{ backgroundImage: `url('${imgCallToActionSection}')`, backgroundSize: "307.2px 307.2px" }} />
                <div className="absolute inset-0 backdrop-blur-[2px]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[150px] w-[170px]">
                  <img alt="" className="w-full h-full object-cover" src={imgFeatureImageSmall} />
                </div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col gap-3 items-center w-[220px]">
                  <p className="font-['Satoshi:Bold',sans-serif] leading-[1.4] text-base text-center text-white">Your AI marketing team that delivers results, never sleeps!</p>
                  <a href="https://loraloop.com" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0073ff] px-5 py-2.5 rounded-full font-['Satoshi:Bold',sans-serif] text-sm hover:bg-blue-50 transition-colors">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related articles */}
        <div className="px-4 md:px-20 py-10 border-t border-[#f1f5f9]">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h2 className="font-['Satoshi:Bold',sans-serif] text-[#0f172a] text-2xl md:text-3xl">More articles</h2>
              <Link to="/blog" className="bg-[#1877f2] flex gap-2 h-10 items-center justify-center px-5 rounded-full hover:bg-[#1565d8] transition-colors">
                <span className="font-['Satoshi:Bold',sans-serif] text-sm text-white">View All</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayRelated.map((article) => {
                const relThumb = blogThumbnails[article.id] ?? { emoji: "📝", gradient: ["#6d28d9", "#4f46e5"] as [string, string] };
                const rt = getReadTime(article.content);
                return (
                  <Link key={article.id} to={`/blog/${article.id}`} className="group flex flex-col gap-4 rounded-2xl bg-white border border-[#e2e8f0] hover:border-[#1877f2] hover:shadow-md transition-all duration-200 overflow-hidden">
                    <div className="h-[180px] overflow-hidden">
                      <div className="w-full h-full group-hover:scale-105 transition-transform duration-300">
                        <BlogThumbnail emoji={relThumb.emoji} gradient={relThumb.gradient} category={article.category} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 px-5 pb-5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-['Satoshi:Bold',sans-serif] text-[#1877f2] bg-[#eff6ff] px-2.5 py-0.5 rounded-full">{article.category}</span>
                        <span className="flex items-center gap-1 text-xs text-[#94a3b8] font-['General_Sans:Medium',sans-serif]"><Clock size={11} />{rt} min</span>
                      </div>
                      <h3 className="font-['Satoshi:Bold',sans-serif] leading-[1.35] text-[#0f172a] text-lg group-hover:text-[#1877f2] transition-colors line-clamp-2">{article.title}</h3>
                      <p className="font-['General_Sans:Medium',sans-serif] text-[#64748b] text-sm">{article.date}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Floating bar */}
        <div className="fixed bottom-4 left-3 right-3 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-max z-50 backdrop-blur-[10px] bg-[rgba(0,0,0,0.88)] rounded-2xl md:rounded-[30px] shadow-xl px-4 py-3">
          <div className="flex flex-row items-center gap-3 overflow-x-auto">
            <p className="font-['General_Sans:Medium',sans-serif] text-[#9ca3af] text-xs whitespace-nowrap flex-shrink-0">Quick Summarise with</p>
            <div className="w-px h-4 bg-[#444] flex-shrink-0" />
            {aiTools.map((ai) => (
              <a key={ai.name} href={getSummarizeUrl(ai.name, currentUrl)} target="_blank" rel="noopener noreferrer"
                className="bg-white flex gap-1.5 items-center px-3 py-1.5 rounded-2xl border border-[#e5e7eb] hover:bg-gray-100 transition-colors flex-shrink-0">
                <img src={ai.icon} alt={ai.name} className="w-4 h-4" />
                <span className="font-['Satoshi:Bold',sans-serif] text-[#1f2937] text-sm whitespace-nowrap">{ai.name}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
