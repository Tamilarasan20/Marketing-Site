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

function renderSection(section: ContentSection, index: number) {
  switch (section.type) {
    case 'heading':
      return (
        <h2 key={index} className="font-['Satoshi:Bold',sans-serif] leading-8 text-[#1f2937] text-2xl mt-4">
          {section.text}
        </h2>
      );
    case 'paragraph':
      return (
        <p key={index} className="font-['General_Sans:Medium',sans-serif] leading-[29px] text-[#374151] text-sm">
          {section.text}
        </p>
      );
    case 'list':
      return (
        <ul key={index} className="list-disc ml-5 space-y-1 font-['General_Sans:Medium',sans-serif] text-[#374151] text-sm">
          {section.items.map((item, i) => (
            <li key={i} className="leading-[29px]">{item}</li>
          ))}
        </ul>
      );
    case 'numbered-list':
      return (
        <ol key={index} className="list-decimal ml-5 space-y-1 font-['General_Sans:Medium',sans-serif] text-[#374151] text-sm">
          {section.items.map((item, i) => (
            <li key={i} className="leading-[29px]">{item}</li>
          ))}
        </ol>
      );
    case 'cta':
      return (
        <div key={index} className="bg-[#eef4ff] rounded-2xl p-6 border border-[#c7d7fc] mt-4">
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
      <div className="pt-20 md:pt-32 pb-20">
        <div className="px-4 md:px-20 py-10 md:py-20">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center text-sm">
                  <Link to="/blog" className="font-['Satoshi:Bold',sans-serif] leading-5 text-[#374151] hover:text-[#1877f2]">Blog</Link>
                  <ChevronRight size={16} className="text-[#d1d5db]" />
                  <span className="font-['Satoshi:Bold',sans-serif] leading-5 text-[#374151]">{post.category}</span>
                </div>
                <h1 className="font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[48px] text-[#1f2937] text-3xl md:text-[40px] tracking-[-0.8px]">
                  {post.title}
                </h1>
                <p className="font-['General_Sans:Medium',sans-serif] leading-5 text-[#6b7280] text-sm">{post.date}</p>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="font-['General_Sans:Medium',sans-serif] leading-4 text-[#6b7280] text-xs">Summarise:</p>
                    <div className="flex flex-wrap gap-2">
                      {aiTools.map((ai) => (
                        <button key={ai.name} className="bg-white flex gap-3 items-center px-3 py-2 rounded-xl border border-[#e5e7eb] shadow-sm hover:bg-gray-50 transition-colors">
                          <img src={ai.icon} alt={ai.name} className="w-4 h-4" />
                          <span className="font-['General_Sans:Medium',sans-serif] leading-[18px] text-[#374151] text-[13px] tracking-[0.3px]">{ai.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="font-['General_Sans:Medium',sans-serif] leading-4 text-[#6b7280] text-xs">Share:</p>
                    <div className="flex gap-0">
                      <button className="bg-white p-1 rounded-2xl hover:bg-gray-100 transition-colors"><img src={imgLogos5} alt="Share" className="w-5 h-5" /></button>
                      <button className="bg-white p-1 rounded-2xl hover:bg-gray-100 transition-colors"><img src={imgLogos6} alt="Share" className="w-5 h-5" /></button>
                      <button className="bg-white p-1 rounded-2xl opacity-80 hover:opacity-100 transition-opacity"><img src={imgLogos7} alt="Share" className="w-5 h-5" /></button>
                      <button className="bg-white p-2 rounded-2xl hover:bg-gray-100 transition-colors"><LinkIcon size={16} className="text-[#6b7280]" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[576px] h-[300px] md:h-[360px] rounded-2xl overflow-hidden shrink-0">
              <img alt="" className="w-full h-full object-cover" src={heroImage} />
            </div>
          </div>
        </div>

        <div className="px-4 md:px-20 py-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 flex flex-col gap-4">
              {post.content.map((section, index) => renderSection(section, index))}
            </div>
            <div className="w-full lg:w-[290px] flex flex-col gap-8 lg:sticky lg:top-24">
              <div className="bg-[#eef4ff] rounded-3xl p-5">
                <div className="flex flex-col gap-3">
                  <h3 className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">Table of Contents</h3>
                  <div className="h-px bg-[#e5e7eb]" />
                  <div className="flex flex-col gap-1">
                    {post.tableOfContents.map((item, index) => (
                      <button key={index} className="bg-[#eef4ff] py-2 px-0 text-left hover:bg-[#dce7ff] transition-colors rounded">
                        <span className="font-['General_Sans:Medium',sans-serif] leading-[18px] text-[#1877f2] text-sm">{item}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-[310px] rounded-3xl relative overflow-hidden border border-[#08f]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0073ff] to-[#0da2ff]" />
                <div className="absolute inset-0 opacity-40 mix-blend-plus-lighter" style={{ backgroundImage: `url('${imgCallToActionSection}')`, backgroundSize: "307.2px 307.2px", backgroundPosition: "top left" }} />
                <div className="absolute inset-0 backdrop-blur-[2px]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[188px] w-[206px]">
                  <img alt="" className="w-full h-full object-cover" src={imgFeatureImageSmall} />
                </div>
                <div className="absolute top-[30px] left-1/2 -translate-x-1/2 flex flex-col gap-3 items-center w-[265px]">
                  <p className="font-['Satoshi:Bold',sans-serif] leading-7 text-xl text-center text-white">Your AI marketing team that deliver results, never sleep!</p>
                  <button className="bg-[#0279ec] px-6 py-3 rounded-[34px] font-['Satoshi:Bold',sans-serif] text-lg text-white tracking-[-0.18px] hover:bg-[#0267ca] transition-colors">Get Start</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white px-4 md:px-20 py-10">
          <div className="flex flex-col gap-12">
            <div className="flex items-center justify-between">
              <h2 className="font-['Satoshi:Bold',sans-serif] leading-9 text-[#1f2937] text-[28px] tracking-[-0.42px]">Related articles</h2>
              <Link to="/blog" className="bg-[#1877f2] flex gap-2 h-12 items-center justify-center px-4 rounded-full w-[120px] hover:bg-[#1565d8] transition-colors">
                <span className="font-['Satoshi:Bold',sans-serif] leading-6 text-base text-white">View All</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((article) => (
                <Link key={article.id} to={`/blog/${article.id}`} className="flex flex-col gap-4 rounded-2xl group">
                  <div className="h-[200px] rounded-2xl overflow-hidden">
                    <img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={blogImages[article.imageIndex] ?? imgImage} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-['General_Sans:Medium',sans-serif] leading-4 text-[#1f2937] text-xs">{article.category}</p>
                    <h3 className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl group-hover:text-[#1877f2] transition-colors">{article.title}</h3>
                    <p className="font-['General_Sans:Medium',sans-serif] leading-5 text-[#6b7280] text-sm">{article.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 backdrop-blur-[8px] bg-[rgba(0,0,0,0.9)] rounded-[30px] shadow-[0px_36.858px_13.981px_0px_rgba(227,233,254,0.02),0px_2.542px_5.084px_0px_rgba(186,201,250,0.15)] px-6 py-4">
          <div className="flex flex-col gap-3 items-center">
            <p className="font-['General_Sans:Medium',sans-serif] leading-4 text-[#9ca3af] text-xs">Quick Summarise with</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {aiTools.map((ai) => (
                <button key={ai.name} className="bg-white flex gap-1 items-center px-3 py-2 rounded-2xl border border-[#e5e7eb] shadow-sm hover:bg-gray-100 transition-colors">
                  <img src={ai.icon} alt={ai.name} className="w-4 h-4" />
                  <span className="font-['Satoshi:Bold',sans-serif] leading-5 text-[#1f2937] text-sm tracking-[0.21px]">{ai.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
