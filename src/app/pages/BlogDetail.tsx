import { useParams, Link } from "react-router";
import { ChevronRight, Link as LinkIcon } from "lucide-react";
import imgImage from "../../imports/BlogL2-1/566bd8859808c5b6c2c0d3b943de3f7a326c5dca.png";
import imgImage1 from "../../imports/BlogL2-1/705d74ba75d640101f8addb80d435e1726949c3f.png";
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

const blogImages = [imgImage, imgImage1, imgImage1];

const aiTools = [
  { name: "ChatGPT", icon: imgLogos },
  { name: "Perplexity", icon: imgLogos1 },
  { name: "Claude", icon: imgLogos2 },
  { name: "Grok", icon: imgLogos3 },
  { name: "Google AI", icon: imgLogos4 },
];

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
        <h2 key={index} className="font-['Satoshi:Bold',sans-serif] leading-8 text-[#1f2937] text-xl md:text-2xl mt-8 mb-2">
          {section.text}
        </h2>
      );
    case "subheading":
      return (
        <h3 key={index} className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-lg mt-5 mb-1">
          {section.text}
        </h3>
      );
    case "paragraph":
      return (
        <p key={index} className="font-['General_Sans:Medium',sans-serif] leading-[30px] text-[#374151] text-sm md:text-base">
          {section.text}
        </p>
      );
    case "callout":
      return (
        <div key={index} className="border-l-4 border-[#1877f2] bg-[#f0f7ff] rounded-r-xl px-5 py-4 my-2">
          <p className="font-['Satoshi:Bold',sans-serif] text-[#1565d8] text-sm md:text-base leading-[28px]">{section.text}</p>
        </div>
      );
    case "list":
      return (
        <ul key={index} className="list-disc ml-5 space-y-1.5 font-['General_Sans:Medium',sans-serif] text-[#374151] text-sm md:text-base">
          {section.items.map((item, i) => (
            <li key={i} className="leading-[28px]">{item}</li>
          ))}
        </ul>
      );
    case "numbered-list":
      return (
        <ol key={index} className="list-decimal ml-5 space-y-1.5 font-['General_Sans:Medium',sans-serif] text-[#374151] text-sm md:text-base">
          {section.items.map((item, i) => (
            <li key={i} className="leading-[28px]">{item}</li>
          ))}
        </ol>
      );
    case "faq":
      return (
        <div key={index} className="flex flex-col gap-3 mt-2">
          {section.items.map((item, i) => (
            <div key={i} className="border border-[#e5e7eb] rounded-xl overflow-hidden">
              <div className="bg-[#f9fafc] px-5 py-3 border-b border-[#e5e7eb]">
                <p className="font-['Satoshi:Bold',sans-serif] text-[#1f2937] text-sm md:text-base">{item.q}</p>
              </div>
              <div className="px-5 py-3">
                <p className="font-['General_Sans:Medium',sans-serif] text-[#374151] text-sm leading-[26px]">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case "cta":
      return (
        <div key={index} className="bg-[#eef4ff] rounded-2xl p-5 md:p-6 border border-[#c7d7fc] mt-6">
          <p className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1877f2] text-base mb-4">{section.text}</p>
          <a
            href="https://loraloop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1877f2] text-white font-['Satoshi:Bold',sans-serif] px-6 py-3 rounded-full text-sm hover:bg-[#1565d8] transition-colors"
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
        <h1 className="font-['Satoshi:Bold',sans-serif] text-2xl text-[#1f2937]">Blog post not found</h1>
        <Link to="/blog" className="text-[#1877f2] hover:underline mt-4 inline-block">← Back to Blog</Link>
      </div>
    );
  }

  const heroImage = blogImages[post.imageIndex] ?? imgImage;
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="bg-white">
      <div className="pt-20 md:pt-32 pb-36">

        {/* Header */}
        <div className="px-4 md:px-20 py-8 md:py-16">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center text-sm">
                  <Link to="/blog" className="font-['Satoshi:Bold',sans-serif] leading-5 text-[#374151] hover:text-[#1877f2] transition-colors">Blog</Link>
                  <ChevronRight size={16} className="text-[#d1d5db]" />
                  <span className="font-['Satoshi:Bold',sans-serif] leading-5 text-[#374151]">{post.category}</span>
                </div>
                <h1 className="font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[48px] text-[#1f2937] text-2xl md:text-[40px] tracking-[-0.8px]">
                  {post.title}
                </h1>
                <p className="font-['General_Sans:Medium',sans-serif] leading-5 text-[#6b7280] text-sm">{post.date}</p>

                {/* Summarise row */}
                <div className="flex flex-col gap-2">
                  <p className="font-['General_Sans:Medium',sans-serif] leading-4 text-[#6b7280] text-xs">Summarise:</p>
                  <div className="flex flex-wrap gap-2">
                    {aiTools.map((ai) => (
                      <a
                        key={ai.name}
                        href={getSummarizeUrl(ai.name, currentUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white flex gap-2 items-center px-3 py-2 rounded-xl border border-[#e5e7eb] shadow-sm hover:bg-gray-50 hover:border-[#1877f2] transition-colors"
                      >
                        <img src={ai.icon} alt={ai.name} className="w-4 h-4" />
                        <span className="font-['General_Sans:Medium',sans-serif] leading-[18px] text-[#374151] text-[13px] tracking-[0.3px]">{ai.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Share row */}
                <div className="flex gap-2 items-center">
                  <p className="font-['General_Sans:Medium',sans-serif] leading-4 text-[#6b7280] text-xs">Share:</p>
                  <div className="flex gap-0">
                    <button className="bg-white p-1 rounded-2xl hover:bg-gray-100 transition-colors"><img src={imgLogos5} alt="Share" className="w-5 h-5" /></button>
                    <button className="bg-white p-1 rounded-2xl hover:bg-gray-100 transition-colors"><img src={imgLogos6} alt="Share" className="w-5 h-5" /></button>
                    <button className="bg-white p-1 rounded-2xl opacity-80 hover:opacity-100 transition-opacity"><img src={imgLogos7} alt="Share" className="w-5 h-5" /></button>
                    <button
                      className="bg-white p-2 rounded-2xl hover:bg-gray-100 transition-colors"
                      onClick={() => navigator.clipboard?.writeText(currentUrl)}
                      title="Copy link"
                    >
                      <LinkIcon size={16} className="text-[#6b7280]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="w-full lg:w-[520px] h-[220px] sm:h-[300px] md:h-[360px] rounded-2xl overflow-hidden shrink-0">
              <img alt="" className="w-full h-full object-cover" src={heroImage} />
            </div>
          </div>
        </div>

        {/* Content + Sidebar */}
        <div className="px-4 md:px-20 py-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 flex flex-col gap-3 min-w-0">
              {post.content.map((section, index) => renderSection(section, index))}
            </div>
            <div className="w-full lg:w-[280px] flex flex-col gap-6 lg:sticky lg:top-24 shrink-0">
              <div className="bg-[#eef4ff] rounded-3xl p-5">
                <div className="flex flex-col gap-3">
                  <h3 className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-lg">Table of Contents</h3>
                  <div className="h-px bg-[#dce7ff]" />
                  <div className="flex flex-col gap-0.5">
                    {post.tableOfContents.map((item, i) => (
                      <span key={i} className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#1877f2] text-sm py-1 px-1 rounded hover:bg-[#dce7ff] cursor-pointer transition-colors block">
                        {i + 1}. {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-[290px] rounded-3xl relative overflow-hidden border border-[#08f]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0073ff] to-[#0da2ff]" />
                <div className="absolute inset-0 opacity-40 mix-blend-plus-lighter" style={{ backgroundImage: `url('${imgCallToActionSection}')`, backgroundSize: "307.2px 307.2px", backgroundPosition: "top left" }} />
                <div className="absolute inset-0 backdrop-blur-[2px]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[160px] w-[180px]">
                  <img alt="" className="w-full h-full object-cover" src={imgFeatureImageSmall} />
                </div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col gap-3 items-center w-[230px]">
                  <p className="font-['Satoshi:Bold',sans-serif] leading-6 text-lg text-center text-white">Your AI marketing team that delivers results, never sleeps!</p>
                  <a href="https://loraloop.com" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0073ff] px-5 py-2.5 rounded-[34px] font-['Satoshi:Bold',sans-serif] text-sm hover:bg-gray-100 transition-colors">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related articles */}
        <div className="px-4 md:px-20 py-8">
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h2 className="font-['Satoshi:Bold',sans-serif] leading-9 text-[#1f2937] text-2xl md:text-[28px] tracking-[-0.42px]">Related articles</h2>
              <Link to="/blog" className="bg-[#1877f2] flex gap-2 h-10 items-center justify-center px-5 rounded-full hover:bg-[#1565d8] transition-colors">
                <span className="font-['Satoshi:Bold',sans-serif] text-sm text-white">View All</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((article) => (
                <Link key={article.id} to={`/blog/${article.id}`} className="flex flex-col gap-4 rounded-2xl group">
                  <div className="h-[180px] rounded-2xl overflow-hidden">
                    <img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={blogImages[article.imageIndex] ?? imgImage} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-['General_Sans:Medium',sans-serif] text-[#1f2937] text-xs">{article.category}</p>
                    <h3 className="font-['Satoshi:Bold',sans-serif] leading-6 text-[#1f2937] text-base group-hover:text-[#1877f2] transition-colors line-clamp-2">{article.title}</h3>
                    <p className="font-['General_Sans:Medium',sans-serif] text-[#6b7280] text-sm">{article.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Floating LLM summarise bar */}
        <div className="fixed bottom-4 left-3 right-3 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-max z-50 backdrop-blur-[10px] bg-[rgba(0,0,0,0.88)] rounded-2xl md:rounded-[30px] shadow-xl px-4 py-3">
          <div className="flex flex-row items-center gap-3 overflow-x-auto">
            <p className="font-['General_Sans:Medium',sans-serif] text-[#9ca3af] text-xs whitespace-nowrap flex-shrink-0">Quick Summarise with</p>
            <div className="w-px h-4 bg-[#444] flex-shrink-0" />
            {aiTools.map((ai) => (
              <a
                key={ai.name}
                href={getSummarizeUrl(ai.name, currentUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white flex gap-1.5 items-center px-3 py-1.5 rounded-2xl border border-[#e5e7eb] hover:bg-gray-100 transition-colors flex-shrink-0"
              >
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
