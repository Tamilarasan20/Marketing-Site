import { Link } from "react-router";
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

const tableOfContents = [
  "Best Relevance AI Alternatives in 2026",
  "8 Best Relevance AI Competitors in 2026",
  "How We Researched and Ranked the Best Relevance AI Alternatives?",
  "How to Choose the Best Relevance AI Alternative?",
  "When a Multi-Agent AI Workspace Makes More Sense?",
  "Why Sintra AI Is the Best Relevance AI Alternative?",
  "Ready to Build Your Own AI Team?",
];

const relatedArticles = [
  {
    id: 2,
    title: "8 Best Relevance AI Alternatives for Automated Workflows",
    category: "Business",
    date: "April 6, 2026",
    image: imgImage1,
  },
  {
    id: 3,
    title: "Best DeepSeek Alternatives for 2026",
    category: "Business",
    date: "April 6, 2026",
    image: imgImage1,
  },
  {
    id: 4,
    title: "Best Social Media Scheduling Tools to Plan and Publish Content in 2026",
    category: "Business",
    date: "April 6, 2026",
    image: imgImage1,
  },
];

export default function BlogDetail() {
  return (
    <div className="bg-white">
      <div className="pt-20 md:pt-32 pb-20">
        <div className="px-4 md:px-20 py-10 md:py-20">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center text-sm">
                  <Link to="/blog" className="font-['Satoshi:Bold',sans-serif] leading-5 text-[#374151] hover:text-[#1877f2]">
                    Blog
                  </Link>
                  <ChevronRight size={16} className="text-[#d1d5db]" />
                  <span className="font-['Satoshi:Bold',sans-serif] leading-5 text-[#374151]">Business</span>
                </div>

                <h1 className="font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[48px] text-[#1f2937] text-3xl md:text-[40px] tracking-[-0.8px]">
                  8 Best Relevance AI Alternatives and Competitors in 2026
                </h1>
                <p className="font-['General_Sans:Medium',sans-serif] leading-5 text-[#6b7280] text-sm">April 6, 2026</p>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="font-['General_Sans:Medium',sans-serif] leading-4 text-[#6b7280] text-xs">Summarise:</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "ChatGPT", icon: imgLogos },
                        { name: "Perplexity", icon: imgLogos1 },
                        { name: "Claude", icon: imgLogos2 },
                        { name: "Grok", icon: imgLogos3 },
                        { name: "Google AI", icon: imgLogos4 },
                      ].map((ai) => (
                        <button
                          key={ai.name}
                          className="bg-white flex gap-3 items-center px-3 py-2 rounded-xl border border-[#e5e7eb] shadow-sm hover:bg-gray-50 transition-colors"
                        >
                          <img src={ai.icon} alt={ai.name} className="w-4 h-4" />
                          <span className="font-['General_Sans:Medium',sans-serif] leading-[18px] text-[#374151] text-[13px] tracking-[0.3px]">
                            {ai.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 items-center">
                    <p className="font-['General_Sans:Medium',sans-serif] leading-4 text-[#6b7280] text-xs">Share:</p>
                    <div className="flex gap-0">
                      <button className="bg-white p-1 rounded-2xl hover:bg-gray-100 transition-colors">
                        <img src={imgLogos5} alt="Share" className="w-5 h-5" />
                      </button>
                      <button className="bg-white p-1 rounded-2xl hover:bg-gray-100 transition-colors">
                        <img src={imgLogos6} alt="Share" className="w-5 h-5" />
                      </button>
                      <button className="bg-white p-1 rounded-2xl opacity-80 hover:opacity-100 transition-opacity">
                        <img src={imgLogos7} alt="Share" className="w-5 h-5" />
                      </button>
                      <button className="bg-white p-2 rounded-2xl hover:bg-gray-100 transition-colors">
                        <LinkIcon size={16} className="text-[#6b7280]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[576px] h-[300px] md:h-[360px] rounded-2xl overflow-hidden shrink-0">
              <img alt="" className="w-full h-full object-cover" src={imgImage} />
            </div>
          </div>
        </div>

        <div className="px-4 md:px-20 py-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 flex flex-col gap-8">
              {[1, 2, 3, 4].map((section) => (
                <div key={section} className="bg-white flex flex-col gap-3 rounded-2xl">
                  <h2 className="font-['Satoshi:Bold',sans-serif] leading-8 text-[#1f2937] text-2xl">
                    Best Relevance AI Alternatives in 2026
                  </h2>
                  <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] text-[#374151] text-sm">
                    Here is a list of the top Relevance AI alternatives you can try in 2026.
                  </p>
                  <div className="font-['General_Sans:Medium',sans-serif] text-[#374151] text-sm">
                    <p className="leading-[29px] mb-2">For Brands with AOV Above $40</p>
                    <p className="leading-[29px] mb-2">
                      Higher-consideration purchases require storytelling, trust-building, and creative depth. Your AI marketing priorities:
                    </p>
                    <ol className="list-decimal ml-5 space-y-2">
                      <li className="leading-[29px]">
                        Video storytelling content — AI-assisted video briefs, scripts, and long-form content that walks customers through the why behind your product. UGC-style content that builds trust.
                      </li>
                      <li className="leading-[29px]">
                        SEO and long-form content — Customers researching a $150+ purchase read reviews, comparison articles, and brand stories. Your content library needs to appear at every touchpoint.
                      </li>
                      <li className="leading-[29px]">
                        Email nurture sophistication — Longer consideration windows require multi-touch email sequences that educate, overcome objections, and personalize by product interest.
                      </li>
                      <li className="leading-[29px]">
                        Social proof automation — Review requests, testimonial collection, UGC repurposing. At higher AOV, social proof isn't optional — it's the conversion mechanism.
                      </li>
                    </ol>
                    <p className="leading-[29px] mt-2">
                      The math: at $140 AOV with a 3x ROAS target, you can spend $46.67 per customer. That budget justifies investing in AI-powered video production, long-form content, and sophisticated personalization.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-[290px] flex flex-col gap-8 lg:sticky lg:top-24">
              <div className="bg-[#eef4ff] rounded-3xl p-5">
                <div className="flex flex-col gap-3">
                  <h3 className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">Table of Contents</h3>
                  <div className="h-px bg-[#e5e7eb]" />
                  <div className="flex flex-col gap-1">
                    {tableOfContents.map((item, index) => (
                      <button
                        key={index}
                        className="bg-[#eef4ff] h-10 px-0 rounded-full text-left hover:bg-[#dce7ff] transition-colors"
                      >
                        <span className="font-['General_Sans:Medium',sans-serif] leading-[18px] text-[#1877f2] text-sm">
                          {item}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-[310px] rounded-3xl relative overflow-hidden border border-[#08f]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0073ff] to-[#0da2ff]" />
                <div
                  className="absolute inset-0 opacity-40 mix-blend-plus-lighter"
                  style={{
                    backgroundImage: `url('${imgCallToActionSection}')`,
                    backgroundSize: "307.2px 307.2px",
                    backgroundPosition: "top left",
                  }}
                />
                <div className="absolute inset-0 backdrop-blur-[2px]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[188px] w-[206px]">
                  <img alt="" className="w-full h-full object-cover" src={imgFeatureImageSmall} />
                </div>
                <div className="absolute top-[30px] left-1/2 -translate-x-1/2 flex flex-col gap-3 items-center w-[265px]">
                  <p className="font-['Satoshi:Bold',sans-serif] leading-7 text-xl text-center text-white">
                    Your AI marketing team that deliver results, never sleep!
                  </p>
                  <button className="bg-[#0279ec] px-6 py-3 rounded-[34px] font-['Satoshi:Bold',sans-serif] text-lg text-white tracking-[-0.18px] hover:bg-[#0267ca] transition-colors">
                    Get Start
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white px-4 md:px-20 py-10">
          <div className="flex flex-col gap-12">
            <div className="flex items-center justify-between">
              <h2 className="font-['Satoshi:Bold',sans-serif] leading-9 text-[#1f2937] text-[28px] tracking-[-0.42px]">
                Related articles
              </h2>
              <Link
                to="/blog"
                className="bg-[#1877f2] flex gap-2 h-12 items-center justify-center px-4 rounded-full w-[120px] hover:bg-[#1565d8] transition-colors"
              >
                <span className="font-['Satoshi:Bold',sans-serif] leading-6 text-base text-white">View All</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/blog/${article.id}`}
                  className="flex flex-col gap-4 rounded-2xl group"
                >
                  <div className="h-[200px] rounded-2xl overflow-hidden">
                    <img
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src={article.image}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-['General_Sans:Medium',sans-serif] leading-4 text-[#1f2937] text-xs">
                      {article.category}
                    </p>
                    <h3 className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl group-hover:text-[#1877f2] transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-['General_Sans:Medium',sans-serif] leading-5 text-[#6b7280] text-sm">
                      {article.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 backdrop-blur-[8px] bg-[rgba(0,0,0,0.9)] rounded-[30px] shadow-[0px_36.858px_13.981px_0px_rgba(227,233,254,0.02),0px_2.542px_5.084px_0px_rgba(186,201,250,0.15)] px-6 py-4">
          <div className="flex flex-col gap-3 items-center">
            <p className="font-['General_Sans:Medium',sans-serif] leading-4 text-[#9ca3af] text-xs">
              Quick Summarise with
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { name: "ChatGPT", icon: imgLogos },
                { name: "Perplexity", icon: imgLogos1 },
                { name: "Claude", icon: imgLogos2 },
                { name: "Grok", icon: imgLogos3 },
                { name: "Google AI", icon: imgLogos4 },
              ].map((ai) => (
                <button
                  key={ai.name}
                  className="bg-white flex gap-1 items-center px-3 py-2 rounded-2xl border border-[#e5e7eb] shadow-sm hover:bg-gray-100 transition-colors"
                >
                  <img src={ai.icon} alt={ai.name} className="w-4 h-4" />
                  <span className="font-['Satoshi:Bold',sans-serif] leading-5 text-[#1f2937] text-sm tracking-[0.21px]">
                    {ai.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
