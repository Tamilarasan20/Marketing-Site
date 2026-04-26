import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

import imgImage174 from "../../imports/IntroSection/63808635cd776f0fdaad03c9757b0a112ed13271.png";
import imgVideoImage from "../../imports/ProductLaunchVideoSection/7791317fa0728612288fbeed4e75c5ec203fe987.png";
import imgFeatureImageLarge from "../../imports/ProductLaunchVideoSection/226049655f3871f3dac264b316138eae1882ff2f.png";
import imgFeatureImageSmall from "../../imports/ProductLaunchVideoSection/716c7778e50d7ebaf89d87cc7045f11c7dc8c365.png";
import imgFeatureImageSmall1 from "../../imports/ProductLaunchVideoSection/cf31e812b350d794878316732de9dc42863611d4.png";
import imgFeatureImageLarge1 from "../../imports/ProductLaunchVideoSection/fd0182baaee7bd791ece41153b51bc8d9dde0a30.png";
import imgBannerImageSideRight from "../../imports/ProductLaunchVideoSection/62bd3bf9f5ad3a92db4d110679abb47a4004ccbe.png";
import imgFeatureImageSmall2 from "../../imports/ProductLaunchVideoSection/18110a4df5acac34f23ec4990a55463713d90bef.png";
import imgFeatureImageSmall3 from "../../imports/ProductLaunchVideoSection/2ede8e04425e852843b64720e2e6023d1ed754cb.png";
import imgGeminiGeneratedImage from "../../imports/ProductLaunchVideoSection/a6c396695db2f4867d2b2cf94c4c4013fb4aa21a.png";
import imgObject from "../../imports/ProductLaunchVideoSection/7908e0c373350f1c767f51c81c8c63fccd42f554.png";

import imgImage177 from "../../imports/App/e59e1b60dcbb33e30f0b406978f03b8792a6b8a6.png";
import imgImage176 from "../../imports/App/f3289e439e503ec487d828419f892c55b28a1261.png";
import imgImage179 from "../../imports/App/9fa2df17169c30b0d55cbc8472bd4bd48f332457.png";

import imgLogos from "../../imports/DesignLora/4174d16cdcac15f4497d1c39f4b1a5104b45fac1.png";
import imgLogos1 from "../../imports/DesignLora/acfc7503e01b011ae7f17074baec7c0d31a597f8.png";

import imgLogosNew from "../../imports/DesignLora-1/4174d16cdcac15f4497d1c39f4b1a5104b45fac1.png";
import imgLogos1New from "../../imports/DesignLora-1/acfc7503e01b011ae7f17074baec7c0d31a597f8.png";
import svgPaths from "../../imports/DesignLora-1/svg-9ns3v5bpfy";
import { imgGroup } from "../../imports/DesignLora-1/svg-k82gg";

import imgImage172 from "../../imports/MainContent-1/a091e0e97bb7d939c455df7635918b4c8c69a7b8.png";

import imgAvatar0 from "../../imports/image.png";
import imgAvatar1 from "../../imports/image-1.png";
import imgAvatar2 from "../../imports/image-2.png";
import imgAvatar3 from "../../imports/image-3.png";
import imgAvatar4 from "../../imports/image-4.png";
import imgAvatar5 from "../../imports/image-5.png";
import imgAvatar6 from "../../imports/image-6.png";
import imgAvatar7 from "../../imports/image-7.png";
import imgAvatar8 from "../../imports/image-8.png";

import imgThankYou from "../../imports/Model/8adbe33e3cc44ab020462c8abe2c99b795def34c.png";

import imgSolution1 from "../../imports/App-4/477593f47efb019382046da2baab475c895d18ac.png";
import imgSolution2 from "../../imports/App-4/1ca3d61ded6d37fffa93f794057e86071e0300ea.png";
import imgSolution3 from "../../imports/App-4/b76237f466af6e76be8b56dc75d1d5e7731fbb48.png";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleJoinWaitlist = () => {
    if (email) {
      setShowModal(true);
      setEmail("");
    }
  };

  const avatars = [imgAvatar0, imgAvatar1, imgAvatar2, imgAvatar3, imgAvatar4, imgAvatar5, imgAvatar6, imgAvatar7, imgAvatar8];

  const faqs = [
    {
      question: "What is Loraloops AI employee?",
      answer: "Loraloop AI employees are autonomous digital workers that handle your marketing tasks end-to-end. They plan campaigns, create content, publish posts, run ads, track performance, and continuously optimize  all without manual effort. Think of them as a full marketing team that works 24/7, never sleeps, and keeps improving results automatically."
    },
    {
      question: "What can I use Loraloop AI employees for?",
      answer: "You can use Loraloop AI employees for comprehensive marketing automation including social media management, content creation, SEO/GEO optimization, ad campaign management, competitor analysis, and performance tracking. They handle everything from planning to execution."
    },
    {
      question: "Can AI employees replace human employees?",
      answer: "AI employees complement human teams by handling repetitive marketing tasks, allowing your team to focus on strategy and creative decisions. They work as an extension of your team, providing 24/7 support and execution while you maintain control over the direction."
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 md:pt-32 pb-0">
        <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-6 max-w-[740px] mx-auto pt-8 md:pt-16 pb-12 md:pb-20">
          <div className="flex flex-col gap-6 md:gap-10 items-center">
            <div className="flex flex-col gap-2 md:gap-3 items-center">
              <div className="font-['Satoshi:Black',sans-serif] tracking-[-1.5px] md:tracking-[-2.04px]">
                <p className="text-white">
                  <span className="text-4xl md:text-5xl lg:text-[68px] leading-tight md:leading-[1.1] lg:leading-[76px]">Meet </span>
                  <span className="text-[#14a148] text-4xl md:text-5xl lg:text-[68px] leading-tight md:leading-[1.1] lg:leading-[76px]">Lora</span>
                </p>
                <p className="text-white text-4xl md:text-5xl lg:text-[68px] leading-tight md:leading-[1.1] lg:leading-[76px]">your Autonomous</p>
                <p className="text-[#14a148] text-4xl md:text-5xl lg:text-[68px] leading-tight md:leading-[1.1] lg:leading-[76px]">AI Marketing Team</p>
              </div>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[24px] md:leading-[28px] text-[#9ca3af] text-base md:text-lg lg:text-[20px] max-w-full md:max-w-[720px] whitespace-pre-wrap">
                {`An AI agents work as a team that plans content, creates, publishes,  tracks performance, manages ads & keeps improving itself on autopilot\nyour 24/7 marketing team that never sleeps.`}
              </p>
            </div>

            <div className="flex flex-col gap-3 md:gap-4 items-center w-full max-w-[480px]">
              <div className="bg-[#1f2937] flex gap-3 h-14 md:h-[68px] items-center px-4 md:px-6 py-3 md:py-4 rounded-2xl md:rounded-[24px] w-full border-2 border-[rgba(147,197,253,0.4)] shadow-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter your mail"
                  className="flex-1 bg-transparent font-['General_Sans:Medium',sans-serif] leading-6 md:leading-7 text-[#9ca3af] text-base md:text-lg outline-none placeholder:text-[#9ca3af]"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={handleJoinWaitlist}
                  className="bg-[#2a3040] h-12 px-6 rounded-full hover:bg-[#3a4050] transition-colors w-full md:w-[220px]"
                >
                  <span className="font-['Satoshi:Bold',sans-serif] leading-6 text-[#6b7280] text-base">Join Waitlist</span>
                </button>
                <Link
                  to="/solution"
                  className="flex gap-2 h-12 items-center justify-center px-6 rounded-2xl hover:bg-[#1f2937] transition-colors w-full md:w-auto"
                >
                  <span className="font-['Satoshi:Bold',sans-serif] leading-6 text-[#d1d5db] text-base">See Solution</span>
                  <ArrowRight size={20} className="text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Avatars */}
        <div className="relative z-10 flex items-end justify-center gap-2 md:gap-4 px-4 pb-0">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="relative shrink-0"
              style={{
                width: index === 4 ? '80px' : '60px',
                height: index === 4 ? '80px' : '60px',
              }}
            >
              <img
                alt=""
                className="w-full h-full object-cover rounded-full"
                src={avatar}
              />
            </div>
          ))}
        </div>

        {/* Background Image */}
        <div className="relative z-0 h-[160px] md:h-[220px] w-full overflow-hidden mt-[-40px]">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-full max-w-[854px]">
            <img alt="" className="w-full h-full object-cover" src={imgImage174} />
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-white rounded-tl-[32px] md:rounded-tl-[64px] rounded-tr-[32px] md:rounded-tr-[64px] px-4 md:px-20 py-16 md:py-[120px]">
        <div className="flex flex-col gap-12 md:gap-20 items-center max-w-[1115px] mx-auto">
          <div className="flex flex-col gap-3 md:gap-2 items-center text-center max-w-[740px]">
            <h2 className="font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[48px] text-[#1f2937] text-3xl md:text-[40px] tracking-[-0.6px] md:tracking-[-0.8px]">
              See it in action
            </h2>
            <p className="font-['General_Sans:Medium',sans-serif] leading-6 md:leading-7 text-[#374151] text-base md:text-[20px]">
              Watch how Loraloop manage marketing end to end
            </p>
          </div>

          <div className="w-full rounded-2xl md:rounded-[32px] overflow-hidden shadow-[0px_11.39px_22.34px_rgba(53,106,185,0.09)]">
            <img alt="Loraloop Demo Video" className="w-full h-auto" src={imgVideoImage} />
          </div>
        </div>
      </div>

      {/* AI Employees Features Section */}
      <div className="bg-black px-4 md:px-20 py-16 md:py-[120px]">
        <div className="flex flex-col gap-12 md:gap-20 items-center max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-3 md:gap-4 items-center text-center max-w-[740px]">
            <h2 className="font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[48px] text-white text-2xl md:text-[40px] tracking-[-0.6px] md:tracking-[-0.8px] px-4">
              AI employees that run your marketing end to end even while you sleep.
            </h2>
            <p className="font-['General_Sans:Medium',sans-serif] leading-6 md:leading-7 text-[#9ca3af] text-base md:text-[20px]">
              You don't need a large team to grow a business. Loraloop provides AI employees for marketing that handle daily work. From planning to execution, work gets done efficiently, 24/7.{" "}
              <span className="text-white">10x your marketing with 10x less expansive.</span>
            </p>
          </div>

          <div className="w-full flex flex-col gap-6 md:gap-10">
            {/* Sam - Large Blue Card */}
            <div className="rounded-2xl md:rounded-[30px] overflow-hidden relative shadow-[0px_11.39px_22.34px_rgba(53,106,185,0.09)] border border-[#c4dcff]" style={{ minHeight: "400px", height: "530px" }}>
              <div className="absolute inset-0 bg-gradient-to-b from-[#0073ff] to-[#0da2ff]" />
              <div
                className="absolute inset-0 opacity-40 mix-blend-plus-lighter"
                style={{
                  backgroundImage: `url('${imgFeatureImageLarge}')`,
                  backgroundSize: "307.2px 307.2px",
                  backgroundPosition: "top left",
                }}
              />
              <div className="absolute left-6 md:left-10 top-6 md:top-10 max-w-[calc(100%-160px)] md:max-w-[420px]">
                <div className="flex flex-col gap-6 md:gap-8">
                  <div className="flex flex-col gap-3 md:gap-4">
                    <div className="bg-[#1558b0] px-3 md:px-[14px] py-2 rounded-full inline-block w-fit border border-[rgba(255,255,255,0.15)]">
                      <p className="font-['Satoshi:Bold',sans-serif] leading-5 text-white text-xs md:text-sm tracking-[0.21px]">
                        AI Strategist
                      </p>
                    </div>
                    <h3 className="font-['Satoshi:Bold',sans-serif] leading-7 md:leading-[34px] text-black text-xl md:text-[32px] tracking-[-0.48px]">
                      Identify what's trending and what my competitors are doing
                    </h3>
                    <p className="font-['General_Sans:Medium',sans-serif] leading-5 md:leading-[22px] text-black text-sm md:text-base opacity-60">
                      Sam analyzes market trends and competitor actions. He identifies which content types or topics will help me grow.
                    </p>
                  </div>
                  <button className="bg-[rgba(255,255,255,0.6)] px-5 md:px-6 py-2 md:py-3 rounded-full w-fit hover:bg-white transition-colors">
                    <span className="font-['Satoshi:Bold',sans-serif] text-black text-sm md:text-base tracking-[-0.16px]">Learn more</span>
                  </button>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 h-[280px] md:h-[374px] w-[220px] md:w-[294px]">
                <img alt="" className="w-full h-full object-contain" src={imgFeatureImageSmall} />
              </div>
              <p className="absolute bottom-8 md:bottom-[44px] left-6 md:left-10 font-['Kalam:Bold',sans-serif] leading-[34px] text-[#134d91] text-2xl md:text-[28px] tracking-[-0.48px]">
                Sam
              </p>
            </div>

            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
              {/* Sophie - Green Card */}
              <div className="rounded-2xl md:rounded-[30px] overflow-hidden relative shadow-[0px_11.39px_22.34px_rgba(53,106,185,0.09)] border border-[#c4dcff]" style={{ minHeight: "400px", height: "530px" }}>
                <div className="absolute inset-0 bg-gradient-to-b from-[#00e58d] to-[#02a365]" />
                <div
                  className="absolute inset-0 opacity-40 mix-blend-plus-lighter"
                  style={{
                    backgroundImage: `url('${imgFeatureImageLarge}')`,
                    backgroundSize: "307.2px 307.2px",
                    backgroundPosition: "top left",
                  }}
                />
                <div className="absolute left-6 md:left-8 top-6 md:top-10 max-w-[calc(100%-160px)] md:max-w-[280px]">
                  <div className="flex flex-col gap-6 md:gap-8">
                    <div className="flex flex-col gap-3 md:gap-4">
                      <div className="bg-[#137e3b] px-3 md:px-[14px] py-2 rounded-full inline-block w-fit border border-[rgba(255,255,255,0.15)]">
                        <p className="font-['Satoshi:Bold',sans-serif] leading-5 text-white text-xs md:text-sm tracking-[0.21px]">
                          AI SEO/GEO Manager
                        </p>
                      </div>
                      <h3 className="font-['Satoshi:Bold',sans-serif] leading-7 md:leading-[34px] text-black text-xl md:text-[32px] tracking-[-0.48px]">
                        Optimize my content for SEO and GEO to improve discoverability.
                      </h3>
                      <p className="font-['General_Sans:Medium',sans-serif] leading-5 md:leading-[22px] text-black text-sm md:text-base opacity-60">
                        Shopie create seo optimised contents so ranks well whether in google or GEO like chatgpt, claude,  people find me easily.
                      </p>
                    </div>
                    <button className="bg-[rgba(255,255,255,0.6)] px-5 md:px-6 py-2 md:py-3 rounded-full w-fit hover:bg-white transition-colors">
                      <span className="font-['Satoshi:Bold',sans-serif] text-black text-sm md:text-base tracking-[-0.16px]">Learn more</span>
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 h-[280px] md:h-[374px] w-[220px] md:w-[294px]">
                  <img alt="" className="w-full h-full object-contain" src={imgFeatureImageSmall1} />
                </div>
                <p className="absolute bottom-8 md:bottom-[44px] left-6 md:left-8 font-['Kalam:Bold',sans-serif] leading-[34px] text-[#143b2c] text-2xl md:text-[28px] tracking-[-0.48px]">
                  Sophie
                </p>
              </div>

              {/* Lora - Large Purple Card */}
              <div className="rounded-2xl md:rounded-[30px] overflow-hidden relative shadow-[0px_11.39px_22.34px_rgba(53,106,185,0.09)] border border-[#c4dcff]" style={{ minHeight: "400px", height: "530px" }}>
                <div className="absolute inset-0 bg-gradient-to-b from-[#9500e5] to-[#c31ded]" />
                <div
                  className="absolute inset-0 opacity-40 mix-blend-plus-lighter"
                  style={{
                    backgroundImage: `url('${imgFeatureImageLarge}')`,
                    backgroundSize: "307.2px 307.2px",
                    backgroundPosition: "top left",
                  }}
                />
                <div className="absolute left-6 md:left-8 top-6 md:top-10 max-w-[calc(100%-160px)] md:max-w-[280px]">
                  <div className="flex flex-col gap-6 md:gap-8">
                    <div className="flex flex-col gap-3 md:gap-4">
                      <div className="bg-[#691fa6] px-3 md:px-[14px] py-2 rounded-full inline-block w-fit border border-[rgba(255,255,255,0.15)]">
                        <p className="font-['Satoshi:Bold',sans-serif] leading-5 text-white text-xs md:text-sm tracking-[0.21px]">
                          AI Marketing Lead
                        </p>
                      </div>
                      <h3 className="font-['Satoshi:Bold',sans-serif] leading-7 md:leading-[34px] text-white text-xl md:text-[32px] tracking-[-0.48px]">
                        Plan a marketing strategy for my business
                      </h3>
                      <p className="font-['General_Sans:Medium',sans-serif] leading-5 md:leading-[22px] text-white text-sm md:text-base opacity-90">
                        Lora turn my business goals into a clear execution plan. lora breaks down what needs to be done, assigns tasks to the right team, right members, & keeps everything aligned so my marketing runs in my voice.
                      </p>
                    </div>
                    <button className="bg-[rgba(255,255,255,0.6)] px-5 md:px-6 py-2 md:py-3 rounded-full w-fit hover:bg-white transition-colors">
                      <span className="font-['Satoshi:Bold',sans-serif] text-black text-sm md:text-base tracking-[-0.16px]">Learn more</span>
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 h-[280px] md:h-[374px] w-[220px] md:w-[294px]">
                  <img alt="" className="w-full h-full object-contain" src={imgFeatureImageLarge1} />
                </div>
                <p className="absolute bottom-8 md:bottom-[44px] left-6 md:left-8 font-['Kalam:Bold',sans-serif] leading-[34px] text-[#d1d3db] text-2xl md:text-[28px] tracking-[-0.48px]">
                  Lora
                </p>
              </div>
            </div>

            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {/* Elena - Yellow Card */}
              <div className="rounded-2xl md:rounded-[30px] overflow-hidden relative shadow-[0px_11.39px_22.34px_rgba(53,106,185,0.09)] border border-[#c4dcff]" style={{ minHeight: "320px", height: "360px" }}>
                <div className="absolute inset-0 bg-gradient-to-b from-[#fce453] to-[#f7b500]" />
                <div
                  className="absolute inset-0 opacity-40 mix-blend-plus-lighter"
                  style={{
                    backgroundImage: `url('${imgFeatureImageLarge}')`,
                    backgroundSize: "307.2px 307.2px",
                    backgroundPosition: "top left",
                  }}
                />
                <div className="absolute left-6 md:left-8 top-6 md:top-10 max-w-[calc(100%-100px)] md:max-w-[200px]">
                  <div className="flex flex-col gap-4 md:gap-6">
                    <div className="flex flex-col gap-2 md:gap-3">
                      <div className="bg-[#b25107] px-3 md:px-[14px] py-2 rounded-full inline-block w-fit border border-[rgba(255,255,255,0.15)]">
                        <p className="font-['Satoshi:Bold',sans-serif] leading-5 text-white text-xs md:text-sm tracking-[0.21px]">
                          AI Ads Manager
                        </p>
                      </div>
                      <h3 className="font-['Satoshi:Bold',sans-serif] leading-6 md:leading-7 text-black text-lg md:text-xl tracking-[-0.4px]">
                        Run and improve my Ad campaigns
                      </h3>
                      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] md:leading-5 text-black text-xs md:text-sm opacity-60">
                        Elena runs and scales my ad campaigns, making sure you get the best return on investment.
                      </p>
                    </div>
                    <button className="bg-[rgba(255,255,255,0.6)] px-4 md:px-5 py-2 rounded-full w-fit hover:bg-white transition-colors">
                      <span className="font-['Satoshi:Bold',sans-serif] text-black text-xs md:text-sm tracking-[-0.16px]">Learn more</span>
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 h-[140px] md:h-[190px] w-[140px] md:w-[188px]">
                  <img alt="" className="w-full h-full object-contain" src={imgBannerImageSideRight} />
                </div>
                <p className="absolute bottom-6 md:bottom-8 left-6 md:left-8 font-['Kalam:Bold',sans-serif] leading-[28px] text-[#aa9302] text-xl md:text-2xl tracking-[-0.4px]">
                  Elena
                </p>
              </div>

              {/* Sarah - Cyan Card */}
              <div className="rounded-2xl md:rounded-[30px] overflow-hidden relative shadow-[0px_11.39px_22.34px_rgba(53,106,185,0.09)] border border-[#c4dcff]" style={{ minHeight: "320px", height: "360px" }}>
                <div className="absolute inset-0 bg-gradient-to-b from-[#00e7df] to-[#00a89d]" />
                <div
                  className="absolute inset-0 opacity-40 mix-blend-plus-lighter"
                  style={{
                    backgroundImage: `url('${imgFeatureImageLarge}')`,
                    backgroundSize: "307.2px 307.2px",
                    backgroundPosition: "top left",
                  }}
                />
                <div className="absolute left-6 md:left-8 top-6 md:top-10 max-w-[calc(100%-100px)] md:max-w-[200px]">
                  <div className="flex flex-col gap-4 md:gap-6">
                    <div className="flex flex-col gap-2 md:gap-3">
                      <div className="bg-[#0d746c] px-3 md:px-[14px] py-2 rounded-full inline-block w-fit border border-[rgba(255,255,255,0.15)]">
                        <p className="font-['Satoshi:Bold',sans-serif] leading-5 text-white text-xs md:text-sm tracking-[0.21px]">
                          AI Social Media Manager
                        </p>
                      </div>
                      <h3 className="font-['Satoshi:Bold',sans-serif] leading-6 md:leading-7 text-[#1f2937] text-lg md:text-xl tracking-[-0.4px]">
                        Schedule publish my posts, contents & Engage with audiences
                      </h3>
                      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] md:leading-5 text-[#1f2937] text-xs md:text-sm opacity-60">
                        Sarah schedules my social posts, handles community engagement, replying and nurturing relationships.
                      </p>
                    </div>
                    <button className="bg-[rgba(255,255,255,0.6)] px-4 md:px-5 py-2 rounded-full w-fit hover:bg-white transition-colors">
                      <span className="font-['Satoshi:Bold',sans-serif] text-black text-xs md:text-sm tracking-[-0.16px]">Learn more</span>
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 h-[140px] md:h-[190px] w-[140px] md:w-[188px]">
                  <img alt="" className="w-full h-full object-contain" src={imgFeatureImageSmall3} />
                </div>
                <p className="absolute bottom-6 md:bottom-8 left-6 md:left-8 font-['Kalam:Bold',sans-serif] leading-[28px] text-[#fafcfb] text-xl md:text-2xl tracking-[-0.4px]">
                  Sarah
                </p>
              </div>

              {/* Nick - Blue Small Card */}
              <div className="rounded-2xl md:rounded-[30px] overflow-hidden relative shadow-[0px_11.39px_22.34px_rgba(53,106,185,0.09)] border border-[#c4dcff]" style={{ minHeight: "320px", height: "360px" }}>
                <div className="absolute inset-0 bg-gradient-to-b from-[#1e88e5] to-[#0d47a1]" />
                <div
                  className="absolute inset-0 opacity-40 mix-blend-plus-lighter"
                  style={{
                    backgroundImage: `url('${imgFeatureImageLarge}')`,
                    backgroundSize: "307.2px 307.2px",
                    backgroundPosition: "top left",
                  }}
                />
                <div className="absolute left-6 md:left-8 top-6 md:top-10 max-w-[calc(100%-100px)] md:max-w-[200px]">
                  <div className="flex flex-col gap-4 md:gap-6">
                    <div className="flex flex-col gap-2 md:gap-3">
                      <div className="bg-[#0d47a1] px-3 md:px-[14px] py-2 rounded-full inline-block w-fit border border-[rgba(255,255,255,0.15)]">
                        <p className="font-['Satoshi:Bold',sans-serif] leading-5 text-white text-xs md:text-sm tracking-[0.21px]">
                          AI Analyst
                        </p>
                      </div>
                      <h3 className="font-['Satoshi:Bold',sans-serif] leading-6 md:leading-7 text-white text-lg md:text-xl tracking-[-0.4px]">
                        Track and analyze performance metrics
                      </h3>
                      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] md:leading-5 text-white text-xs md:text-sm opacity-80">
                        Nick monitors campaign performance and provides actionable insights to optimize your marketing results.
                      </p>
                    </div>
                    <button className="bg-[rgba(255,255,255,0.6)] px-4 md:px-5 py-2 rounded-full w-fit hover:bg-white transition-colors">
                      <span className="font-['Satoshi:Bold',sans-serif] text-black text-xs md:text-sm tracking-[-0.16px]">Learn more</span>
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 h-[140px] md:h-[190px] w-[140px] md:w-[188px]">
                  <img alt="" className="w-full h-full object-contain" src={imgFeatureImageSmall2} />
                </div>
                <p className="absolute bottom-6 md:bottom-8 left-6 md:left-8 font-['Kalam:Bold',sans-serif] leading-[28px] text-white text-xl md:text-2xl tracking-[-0.4px]">
                  Nick
                </p>
              </div>
            </div>

            {/* Get Start Button */}
            <div className="flex justify-center mt-4 md:mt-8">
              <button className="bg-[#1877f2] h-12 px-6 rounded-full hover:bg-[#1565d8] transition-colors">
                <span className="font-['General_Sans:Semibold',sans-serif] leading-7 text-white text-lg">Get Start</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white px-4 md:px-20 py-16 md:py-16 border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12 md:gap-20 items-center">
          <div className="flex flex-col gap-2 items-center text-center max-w-[620px]">
            <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] text-[#14a148] text-[13px] tracking-[0.3px]">
              HOW IT WORKS
            </p>
            <h2 className="font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[48px] text-[#1f2937] text-3xl md:text-[40px] tracking-[-0.6px] md:tracking-[-0.8px]">
              The AI Employees that actually does stuff.
            </h2>
            <p className="font-['General_Sans:Medium',sans-serif] leading-6 md:leading-7 text-[#374151] text-base md:text-[20px]">
              Loraloop plans your marketing, creates your content, and runs campaigns before you even wake up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Step 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#e5e7eb]">
              <div className="h-[200px] md:h-[240px] relative w-full">
                <img alt="" className="w-full h-full object-cover" src={imgImage177} />
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#f9fafc] rounded-lg px-2 py-1">
                    <p className="font-['General_Sans:Semibold',sans-serif] leading-[22px] text-[#6b7280] text-base">1</p>
                  </div>
                  <h3 className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">
                    Enter Your Website
                  </h3>
                </div>
                <ul className="list-disc pl-6 font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#6b7280] text-base space-y-1">
                  <li>Drop your website URL</li>
                  <li>Lora will create your profile, brand guidelines, target audience, goals and more to act like your team and your second brain.</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#e5e7eb]">
              <div className="h-[200px] md:h-[240px] relative w-full">
                <img alt="" className="w-full h-full object-cover" src={imgImage176} />
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#f9fafc] rounded-lg px-2 py-1">
                    <p className="font-['General_Sans:Semibold',sans-serif] leading-[22px] text-[#6b7280] text-base">2</p>
                  </div>
                  <h3 className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">
                    AI Team Manage Marketing
                  </h3>
                </div>
                <ul className="list-disc pl-6 font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#6b7280] text-base space-y-1">
                  <li>Social, content, leads, engagement, Ads launched and optimized automatically.</li>
                  <li>Your AI marketing team never sleeps.</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#e5e7eb]">
              <div className="h-[200px] md:h-[240px] relative w-full">
                <img alt="" className="w-full h-full object-cover" src={imgImage179} />
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#f9fafc] rounded-lg px-2 py-1">
                    <p className="font-['General_Sans:Semibold',sans-serif] leading-[22px] text-[#6b7280] text-base">3</p>
                  </div>
                  <h3 className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl">
                    Grow on autopilot
                  </h3>
                </div>
                <ul className="list-disc pl-6 font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#6b7280] text-base space-y-1">
                  <li>Track performance. Scale what works. Improve continuously.</li>
                  <li>More traffic and conversions, ROI your AI team works 24/7.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="bg-black px-4 md:px-20 py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12 md:gap-16 items-center">
          <div className="flex flex-col gap-2 md:gap-4 items-center text-center max-w-[740px]">
            <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] text-[#14a148] text-[13px] tracking-[0.3px]">
              INTEGRATION
            </p>
            <h2 className="font-['Satoshi:Bold',sans-serif] leading-[44px] md:leading-[56px] text-white text-[40px] md:text-[48px] tracking-[-1px] md:tracking-[-1.2px]">
              100+ Integrations supported.
            </h2>
            <p className="font-['General_Sans:Medium',sans-serif] leading-7 md:leading-[28px] text-white text-base md:text-[20px]">
              From social media platforms to ecommerce, leads etc, our integrations make it easy to keep everything connected.
            </p>
          </div>

          <div className="bg-white rounded-[40px] p-6 md:p-8 w-full max-w-[900px]">
            <div className="flex flex-wrap gap-8 md:gap-10 items-center justify-center">
              {/* Logo Grid */}
              <img src={imgLogosNew} alt="" className="w-10 h-10 object-contain" />

              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <path d="M20 4c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16S28.8 4 20 4z" fill="black"/>
                <path d="M28.2 16c-.2-1.2-1.2-2.1-2.4-2.3-2.2-.3-6.4-.3-6.4-.3s-4.2 0-6.4.3c-1.2.2-2.2 1.1-2.4 2.3-.3 2.2-.3 6.7-.3 6.7s0 4.5.3 6.7c.2 1.2 1.2 2.1 2.4 2.3 2.2.3 6.4.3 6.4.3s4.2 0 6.4-.3c1.2-.2 2.2-1.1 2.4-2.3.3-2.2.3-6.7.3-6.7s0-4.5-.3-6.7z" fill="#00F2EA"/>
                <path d="M18 24v-8l5.3 4-5.3 4z" fill="#FE2C55"/>
              </svg>

              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#0866FF"/>
                <path d="M24.6 12.5h-2.5c-2.1 0-3.8 1.7-3.8 3.8v2.1h-2.5v3.3h2.5v8.3h3.3v-8.3h2.5l.8-3.3h-3.3v-2.1c0-.7.6-1.3 1.3-1.3h2.1v-2.5z" fill="white"/>
              </svg>

              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="#FF0302"/>
                <path d="M29.2 16.3c-.2-1-1-1.8-2-2-1.8-.5-7.2-.5-7.2-.5s-5.4 0-7.2.5c-1 .2-1.8 1-2 2-.5 1.8-.5 5.4-.5 5.4s0 3.6.5 5.4c.2 1 1 1.8 2 2 1.8.5 7.2.5 7.2.5s5.4 0 7.2-.5c1-.2 1.8-1 2-2 .5-1.8.5-5.4.5-5.4s0-3.6-.5-5.4z" fill="#FF0302"/>
                <path d="M17.5 24.2v-8.3l6.7 4.2-6.7 4.1z" fill="white"/>
              </svg>

              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <path d="M30.5 10.7c-1 .4-2.1.8-3.2.9 1.2-.7 2-1.8 2.4-3-1.1.6-2.3 1.1-3.5 1.3-1-1.1-2.4-1.8-4-1.8-3 0-5.5 2.5-5.5 5.5 0 .4.1.8.2 1.3-4.6-.2-8.6-2.4-11.3-5.8-.5.8-.8 1.8-.8 2.8 0 1.9 1 3.6 2.5 4.6-.9 0-1.8-.3-2.5-.7 0 2.7 1.9 4.9 4.4 5.3-.5.2-1 .2-1.5.2-.4 0-.8 0-1.1-.1.8 2.3 2.8 3.9 5.3 4-1.9 1.5-4.3 2.4-7 2.4-.5 0-.9 0-1.3-.1 2.5 1.6 5.4 2.5 8.6 2.5 10.3 0 16-8.6 16-16v-.8c1.1-.8 2-1.8 2.8-2.9z" fill="black"/>
              </svg>

              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="7" fill="#0A66C2"/>
                <path d="M13.3 15.8h-3.3v10.8h3.3V15.8zm-1.7-5c-1.2 0-2.1.9-2.1 2.1s.9 2.1 2.1 2.1 2.1-.9 2.1-2.1-.9-2.1-2.1-2.1zm17.5 5h-3.3c0-.9-.8-1.7-1.7-1.7s-1.7.8-1.7 1.7v10.8h3.3v-5.8c0-1.8 1.5-3.3 3.3-3.3v-1.7c-1.4 0-2.6.7-3.3 1.7v-1.7h3.4zm-8.3 0h-3.3v10.8h3.3v-5.8c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v5.8h3.3v-6.7c0-2.8-2.3-5-5-5-1.4 0-2.7.6-3.6 1.5v-0.6h.3z" fill="white"/>
              </svg>

              <div className="h-8 w-12">
                <svg className="w-full h-full" viewBox="0 0 48 32" fill="none">
                  <path d="M48 16c0-7.2-4.8-13.3-11.4-15.2C35.3.3 33.9 0 32.5 0H15.5C14.1 0 12.7.3 11.4.8 4.8 2.7 0 8.8 0 16s4.8 13.3 11.4 15.2c1.3.5 2.7.8 4.1.8h17c1.4 0 2.8-.3 4.1-.8C43.2 29.3 48 23.2 48 16z" fill="#0082FB"/>
                  <path d="M15.5 9.5h-4.2l-2.1 9.2-2.1-9.2H3.8L7.7 22h4.7l3.9-12.5zm6.3 0h-3.6L16.3 22h3.6l1.9-12.5zm10.7 0h-3.6L25 22h3.6l1.6-6.4c.3-1.2 1.3-2.1 2.6-2.1.7 0 1.3.3 1.7.8l1.8-3.8c-.7-.7-1.7-1-2.8-1-1.7 0-3.2.8-4.2 2.1l.1-1.1zm9.7 3.4c-.7-.8-1.8-1.3-3.1-1.3-2.1 0-3.8 1.3-4.3 3.1h3.4c.2-.5.6-.8 1.1-.8.6 0 1 .4 1 1v.3h-1.4c-2.7 0-4.4 1.1-4.4 2.9 0 1.7 1.3 2.9 3.2 2.9 1.3 0 2.4-.5 3-1.3h.1l-.1 1.1h3.3V14.5c0-1.1-.3-1.9-.8-2.6zm-2.4 4.7c0 .9-.7 1.5-1.6 1.5s-1.4-.5-1.4-1.2c0-.8.6-1.2 1.7-1.2h1.3v.9z" fill="white"/>
                </svg>
              </div>

              <img src={imgLogos1New} alt="" className="w-10 h-10 object-contain" />

              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="white"/>
                <path d="M20 8c-6.6 0-12 5.4-12 12 0 5 3.1 9.4 7.6 11.1-.1-1-.2-2.4 0-3.5.1-1 1.2-5.1 1.2-5.1s-.3-.6-.3-1.6c0-1.5.9-2.6 1.9-2.6.9 0 1.3.6 1.3 1.4 0 .8-.6 2.2-.9 3.4-.2 1.1.5 1.9 1.6 1.9 1.9 0 3.2-2.4 3.2-5.3 0-2.2-1.5-3.8-4.1-3.8-3 0-4.9 2.3-4.9 4.8 0 .9.3 1.4.6 1.9.1.1.1.2.1.4 0 .1-.1.6-.2.7-.1.2-.3.4-.5.3-1.3-.6-1.9-2.2-1.9-4 0-2.9 2.4-6.4 7.2-6.4 3.8 0 6.4 2.8 6.4 5.8 0 4-2.2 7-5.4 7-1.1 0-2-.6-2.4-.1 0 0-.6 2.2-.7 2.5-.2.8-.7 1.7-1.1 2.4 1 .3 1.9.4 3 .4 6.6 0 12-5.4 12-12s-5.4-12-12-12z" fill="#E60019"/>
              </svg>

              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#FF4500"/>
                <circle cx="20" cy="20" r="14" fill="white"/>
                <circle cx="15" cy="17.5" r="2.5" fill="#FF4500"/>
                <circle cx="25" cy="17.5" r="2.5" fill="#FF4500"/>
                <path d="M15 23.3c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="#FF4500" strokeWidth="1.7" fill="none" strokeLinecap="round"/>
                <circle cx="25.8" cy="12.5" r="3.3" fill="#FF4500"/>
              </svg>

              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <path d="M20 4c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z" fill="#FF0066"/>
                <path d="M20 6l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10l3-10z" fill="url(#paint0_radial_google)"/>
                <defs>
                  <radialGradient id="paint0_radial_google">
                    <stop offset="0%" stopColor="#FFD900"/>
                    <stop offset="100%" stopColor="#FF8500"/>
                  </radialGradient>
                </defs>
              </svg>

              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="7" fill="#FF642D"/>
                <path d="M11.7 16.7c0-1.3.3-2.5 1-3.4.6-.9 1.5-1.6 2.6-2 .5-.2 1-.3 1.6-.3.8 0 1.5.2 2.1.5.6.3 1 .8 1.3 1.4h.1V11h4v17h-4v-2h-.1c-.3.6-.7 1.1-1.3 1.4-.6.3-1.3.5-2.1.5-.5 0-1.1-.1-1.6-.3-1.1-.4-2-1.1-2.6-2-.7-.9-1-2.1-1-3.4v-5.5zm8 2.8c0-.9-.3-1.6-.8-2.2-.5-.6-1.2-.9-2-.9s-1.5.3-2 .9c-.5.6-.8 1.3-.8 2.2v2.2c0 .9.3 1.6.8 2.2.5.6 1.2.9 2 .9s1.5-.3 2-.9c.5-.6.8-1.3.8-2.2v-2.2zm18.3 1c0 1.2-.2 2.3-.7 3.2-.5.9-1.1 1.6-2 2.1-.9.5-1.9.8-3 .8-1.1 0-2.1-.3-3-.8-.9-.5-1.5-1.2-2-2.1-.5-.9-.7-2-.7-3.2v-.8c0-1.2.2-2.3.7-3.2.5-.9 1.1-1.6 2-2.1.9-.5 1.9-.8 3-.8 1.1 0 2.1.3 3 .8.9.5 1.5 1.2 2 2.1.5.9.7 2 .7 3.2v.8zm-4-.8c0-1.1-.2-1.9-.7-2.5-.5-.6-1.1-.9-1.9-.9s-1.4.3-1.9.9c-.5.6-.7 1.4-.7 2.5v.8c0 1.1.2 1.9.7 2.5.5.6 1.1.9 1.9.9s1.4-.3 1.9-.9c.5-.6.7-1.4.7-2.5v-.8z" fill="white"/>
              </svg>

              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="7" fill="#FF4F00"/>
                <g>
                  <path d="M20 10l-8.3 8.3h5.8v8.3h5V18.3h5.8L20 10z" fill="white"/>
                  <rect x="11.7" y="28.3" width="16.7" height="1.7" fill="white"/>
                </g>
              </svg>

              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" fill="#F9AB00"/>
                <path d="M8.3 15h3.4v10h-3.4V15zm5 0h3.4v10h-3.4V15zm5 0h3.4v10h-3.4V15zm5 3.3h3.4v6.7h-3.4v-6.7z" fill="white"/>
              </svg>

              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="16.7" fill="#FF5C35"/>
                <path d="M20 11.7c-4.6 0-8.3 3.8-8.3 8.3s3.8 8.3 8.3 8.3 8.3-3.8 8.3-8.3-3.7-8.3-8.3-8.3zm4.2 9.2h-8.4v-1.7h8.4v1.7z" fill="white"/>
              </svg>

              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" fill="black"/>
                <rect x="11.7" y="11.7" width="16.7" height="16.7" rx="1.7" stroke="white" strokeWidth="1.7" fill="none"/>
                <path d="M15 15h10M15 18.3h10M15 21.7h6.7" stroke="white" strokeWidth="1.7"/>
              </svg>

              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="7" fill="#95BF47"/>
                <path d="M20 15c-2.8 0-5 2.2-5 5 0 1.8 1 3.4 2.5 4.3v5.7c0 .5.3.8.8.8h3.3c.5 0 .8-.3.8-.8v-5.7c1.5-.9 2.5-2.5 2.5-4.3 0-2.8-2.2-5-5-5zm-1.7 13.3v2.5h3.3v-2.5h-3.3zm1.7-10c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z" fill="white"/>
              </svg>

              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="7" fill="#4353FF"/>
                <path d="M13.3 13.3h13.3v13.3H13.3V13.3zm1.7 1.7v10h10v-10h-10z" fill="white"/>
                <path d="M16.7 16.7h6.7v6.7h-6.7v-6.7z" fill="white"/>
              </svg>

              <div className="bg-[#e5e7eb] px-3 py-2 rounded-full">
                <p className="font-['General_Sans:Medium',sans-serif] text-[14px] text-[#9ca3af] whitespace-nowrap">{`& More`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="bg-white px-4 md:px-20 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-12 md:gap-16 items-center">
            <div className="flex flex-col gap-4 items-center text-center">
              <h2 className="font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[60px] text-[#101828] text-4xl md:text-[56px] tracking-[-1px] md:tracking-[-1.4px]">
                Solution
              </h2>
              <p className="font-['General_Sans:Medium',sans-serif] leading-7 text-[#6b7280] text-base md:text-[20px]">
                What you get with loraloop
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full">
              {/* Left Card - Lora Planning */}
              <div className="bg-gradient-to-br from-[#faf5ff] to-[#f3e8ff] rounded-3xl overflow-hidden border border-[#e9d5ff] relative">
                <div className="relative w-full" style={{ paddingBottom: "140%" }}>
                  <img alt="Lora Planning Interface" className="absolute inset-0 w-full h-full object-cover" src={imgSolution1} />
                </div>
                <div className="p-6 md:p-8 flex flex-col gap-6">
                  <div className="space-y-4">
                    {[
                      { label: "Knowledge Created", status: "Done" },
                      { label: "Created Q1 Marketing Plan", status: "Approved" },
                      { label: "Social Media post ready for post", status: "Need Approval" },
                      { label: "Last 10 posts analytics reviewed", status: "Review" }
                    ].map((item, i) => (
                      <div key={i} className="bg-white rounded-2xl p-4 flex items-center justify-between border border-[#e5e7eb]">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#9333ea] flex items-center justify-center">
                            <span className="text-white text-lg">L</span>
                          </div>
                          <div>
                            <p className="font-['General_Sans:Medium',sans-serif] text-[#1f2937] text-sm">{item.label}</p>
                            <p className="font-['General_Sans:Medium',sans-serif] text-[#14a148] text-xs">{item.status}</p>
                          </div>
                        </div>
                        {i < 2 && (
                          <button className="px-4 py-1.5 rounded-full border border-[#e5e7eb] bg-white font-['Satoshi:Bold',sans-serif] text-xs text-[#111827]">
                            View
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="font-['Satoshi:Bold',sans-serif] text-lg md:text-xl text-[#14a148] mb-2">
                      Lora plan your posts, ads, emails etc. like real 10+ year Marketing Lead
                    </h3>
                    <p className="font-['General_Sans:Medium',sans-serif] text-sm md:text-base text-[#6b7280] leading-relaxed">
                      Lora understand you and to end. Turn your business goals into a structured marketing plan with clear next steps sort like personal marketing lead.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-[#e5e7eb]">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12c0-6.6-5.4-12-12-12S0 5.4 0 12c0 6 4.4 11 10.1 11.9v-8.4H7.1V12h3.1V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4C19.6 23 24 18 24 12z"/></svg>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-[#e5e7eb]">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.5 6.5c-.8.4-1.7.6-2.6.7.9-.6 1.6-1.4 2-2.5-.9.5-1.8.9-2.8 1.1-.8-.9-2-1.4-3.3-1.4-2.5 0-4.5 2-4.5 4.5 0 .4 0 .7.1 1-3.7-.2-7-2-9.2-4.7-.4.7-.6 1.4-.6 2.3 0 1.6.8 3 2 3.8-.7 0-1.4-.2-2-.5v.1c0 2.2 1.6 4 3.6 4.4-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.8 2.2 3.1 4.2 3.2-1.5 1.2-3.5 1.9-5.6 1.9-.4 0-.7 0-1.1-.1 2 1.3 4.4 2 6.9 2 8.3 0 12.8-6.9 12.8-12.8v-.6c.9-.6 1.6-1.4 2.2-2.3z"/></svg>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-[#e5e7eb]">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1DA1F2"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/></svg>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-[#e5e7eb]">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0077B5"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.3 18.3H5.7V9.8h2.6v8.5zM7 8.7c-.8 0-1.5-.7-1.5-1.5S6.2 5.7 7 5.7s1.5.7 1.5 1.5S7.8 8.7 7 8.7zm11.3 9.6h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.6V9.8h2.5v1.2h0c.3-.7 1.2-1.4 2.4-1.4 2.6 0 3.1 1.7 3.1 3.9v4.8z"/></svg>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-[#e5e7eb]">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f093fb] to-[#f5576c] flex items-center justify-center">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2z"/></svg>
                        </div>
                        <div>
                          <p className="font-['Satoshi:Bold',sans-serif] text-sm text-[#1f2937]">Instagram</p>
                          <p className="font-['General_Sans:Medium',sans-serif] text-xs text-[#6b7280]">Carousel Posted</p>
                        </div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-[#14a148] flex items-center justify-center">
                        <svg className="w-4 h-4" fill="white" viewBox="0 0 20 20"><path d="M16.7 5.3c.4.4.4 1 0 1.4l-8 8c-.4.4-1 .4-1.4 0l-4-4c-.4-.4-.4-1 0-1.4s1-.4 1.4 0L8 12.6l7.3-7.3c.4-.4 1-.4 1.4 0z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-['Satoshi:Bold',sans-serif] text-lg text-[#14a148] mb-2">
                      Smart Multi-Platform Publishing
                    </h3>
                    <p className="font-['General_Sans:Medium',sans-serif] text-sm text-[#6b7280]">
                      Share content across platforms like Instagram, X, Wordpress, TikTok, and YouTube etc based on platform realtime algorithms and previous post performance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Card - Sam Discovery */}
              <div className="bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe] rounded-3xl overflow-hidden border border-[#93c5fd] relative">
                <div className="relative w-full" style={{ paddingBottom: "140%" }}>
                  <img alt="Sam Discovery Interface" className="absolute inset-0 w-full h-full object-cover" src={imgSolution2} />
                </div>
                <div className="p-6 md:p-8 flex flex-col gap-6">
                  <div className="space-y-4">
                    {[
                      { label: "10 New trending topic detected", status: "30 contents has ready" },
                      { label: "Competitor analysis ready", status: "3x new growth opportunity detected" },
                      { label: "Trending content spotted 10x view", status: "3 Need Approval" },
                      { label: "Content trending idea generator", status: "" }
                    ].map((item, i) => (
                      <div key={i} className="bg-white rounded-2xl p-4 flex items-center justify-between border border-[#e5e7eb]">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#0ea5e9] flex items-center justify-center">
                            <span className="text-white text-lg">S</span>
                          </div>
                          <div>
                            <p className="font-['General_Sans:Medium',sans-serif] text-[#1f2937] text-sm">{item.label}</p>
                            {item.status && <p className="font-['General_Sans:Medium',sans-serif] text-[#0ea5e9] text-xs">{item.status}</p>}
                          </div>
                        </div>
                        <button className="px-4 py-1.5 rounded-full border border-[#e5e7eb] bg-white font-['Satoshi:Bold',sans-serif] text-xs text-[#111827]">
                          {i === 0 ? "Explore" : "View"}
                        </button>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="font-['Satoshi:Bold',sans-serif] text-lg md:text-xl text-[#14a148] mb-2">
                      Discover ideas, trends, monitor competitor your marketing 10x value content
                    </h3>
                    <p className="font-['General_Sans:Medium',sans-serif] text-sm md:text-base text-[#6b7280] leading-relaxed">
                      Effortlessly find current trends, demands, monitor competitor doing etc. Based on create content types, ideas, topics to grow social media and ROI more.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-[#14a148] px-4 py-2 rounded-full inline-block">
                      <p className="font-['Satoshi:Bold',sans-serif] text-white text-sm">New idea</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white rounded-xl p-3 border border-[#e5e7eb]">
                        <p className="font-['Satoshi:Bold',sans-serif] text-xs text-[#1f2937] mb-2">Existing Content</p>
                        <div className="flex flex-wrap gap-2">
                          {[1,2,3,4,5,6].map((i) => (
                            <div key={i} className="w-6 h-6 rounded bg-[#1877F2]"></div>
                          ))}
                        </div>
                        <button className="mt-2 text-xs text-[#6b7280] font-['General_Sans:Medium',sans-serif]">More...</button>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-[#e5e7eb]">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-['Satoshi:Bold',sans-serif] text-xs text-[#1f2937]">Create / Repurpose</p>
                          <svg className="w-4 h-4" fill="none" stroke="#14a148" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {[1,2,3,4,5,6].map((i) => (
                            <div key={i} className="w-6 h-6 rounded bg-[#ea4335]"></div>
                          ))}
                        </div>
                        <button className="mt-2 text-xs text-[#6b7280] font-['General_Sans:Medium',sans-serif]">More...</button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-['Satoshi:Bold',sans-serif] text-lg text-[#14a148] mb-2">
                      Turn idea/existing content into social posts, blogs, TikTok, YouTube videos in click.
                    </h3>
                    <p className="font-['General_Sans:Medium',sans-serif] text-sm text-[#6b7280]">
                      Use one idea or editing content to create everything you need posts and videos ready to publish, without doing the work yourself grow social media presence while you sleep.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Link to="/solution" className="bg-[#1877f2] h-12 px-8 rounded-full hover:bg-[#1565d8] transition-colors flex items-center justify-center">
                <span className="font-['Satoshi:Bold',sans-serif] text-white text-base">Get Start</span>
              </Link>
              <Link to="/solution" className="h-12 px-8 rounded-full hover:bg-[#f3f4f6] transition-colors flex items-center justify-center">
                <span className="font-['Satoshi:Bold',sans-serif] text-[#1f2937] text-base">View More Solution</span>
              </Link>
            </div>

            <div className="flex flex-col gap-6 items-center mt-8">
              <div className="flex flex-col gap-2 items-center text-center">
                <p className="font-['Satoshi:Bold',sans-serif] text-2xl md:text-3xl text-[#1f2937]">
                  Don't take our word for it
                </p>
                <p className="font-['General_Sans:Medium',sans-serif] text-base md:text-lg text-[#6b7280]">
                  Ask any AI about Loraloop
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#e5e7eb] hover:border-[#1f2937] transition-colors">
                  <span className="text-xl">🤖</span>
                  <span className="font-['Satoshi:Bold',sans-serif] text-[#1f2937]">Ask ChatGPT</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#e5e7eb] hover:border-[#1f2937] transition-colors">
                  <span className="text-xl">🔮</span>
                  <span className="font-['Satoshi:Bold',sans-serif] text-[#1f2937]">Ask Perplexity</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#e5e7eb] hover:border-[#1f2937] transition-colors">
                  <span className="text-xl">⚡</span>
                  <span className="font-['Satoshi:Bold',sans-serif] text-[#1f2937]">Ask Claude</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-[#0a0a0a] px-4 md:px-20 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-12 md:gap-16">
            <div className="flex flex-col gap-6 items-center text-center">
              <h2 className="font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[48px] text-white text-3xl md:text-[40px] tracking-[-0.8px]">
                Marketing that runs itself.
              </h2>
              <p className="font-['General_Sans:Medium',sans-serif] leading-7 text-[#9ca3af] text-base md:text-lg max-w-[720px]">
                Get more done across all channels without hiring or managing a marketing team.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-['Satoshi:Bold',sans-serif] text-3xl md:text-4xl text-white mb-12">Pricing</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Starter", price: "$9.99", highlight: false },
                  { name: "Growth", price: "$29.99", highlight: true },
                  { name: "Pro", price: "$69.99", highlight: false },
                  { name: "Enterprise", price: "$149.99", highlight: false }
                ].map((plan, i) => (
                  <div key={i} className={`rounded-3xl p-6 ${plan.highlight ? 'bg-[#1877f2] border-2 border-[#1877f2]' : 'bg-[#1a1a1a] border border-[#2a2a2a]'}`}>
                    <div className="flex gap-2 mb-4 justify-center">
                      {avatars.slice(0, i + 2).map((avatar, idx) => (
                        <div key={idx} className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                          <img src={avatar} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <div className="mb-6">
                      <p className="font-['Satoshi:Bold',sans-serif] text-sm text-white/60 mb-1">{plan.name}</p>
                      <p className="font-['Satoshi:Bold',sans-serif] text-3xl text-white mb-1">{plan.price}</p>
                      <p className="font-['General_Sans:Medium',sans-serif] text-sm text-white/60">per month</p>
                    </div>
                    {plan.highlight && (
                      <button className="w-full bg-white text-[#1877f2] font-['Satoshi:Bold',sans-serif] py-3 rounded-full mb-4 hover:bg-gray-100 transition-colors">
                        Get Started
                      </button>
                    )}
                    <ul className="space-y-3 text-left">
                      {['AI Content', 'AI Strategy', 'Multi-Platform', '24/7 Support'].map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-[#14a148] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M16.7 5.3c.4.4.4 1 0 1.4l-8 8c-.4.4-1 .4-1.4 0l-4-4c-.4-.4-.4-1 0-1.4s1-.4 1.4 0L8 12.6l7.3-7.3c.4-.4 1-.4 1.4 0z"/>
                          </svg>
                          <span className="font-['General_Sans:Medium',sans-serif] text-sm text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white px-4 md:px-20 py-16 md:py-20">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col gap-8 md:gap-12 items-center">
            <div className="flex flex-col gap-2 items-center text-center">
              <h2 className="font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[48px] text-[#1f2937] text-3xl md:text-[40px] tracking-[-0.6px] md:tracking-[-0.8px]">
                Frequently Asked Questions
              </h2>
              <p className="font-['General_Sans:Medium',sans-serif] leading-6 md:leading-7 text-[#6b7280] text-base md:text-[20px]">
                Watch how Loraloop manage marketing end to end
              </p>
            </div>

            <div className="w-full flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-[#e5e7eb] rounded-2xl overflow-hidden bg-white"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-start justify-between gap-8 p-5 md:p-6 text-left hover:bg-[#f9fafb] transition-colors"
                  >
                    <h3 className="font-['Satoshi:Bold',sans-serif] text-[#1f2937] text-lg md:text-xl opacity-88 leading-7">
                      {faq.question}
                    </h3>
                    <div className="bg-[#1f2937] rounded-full p-0.5 shrink-0">
                      {openFaqIndex === index ? (
                        <ChevronUp className="text-white" size={20} />
                      ) : (
                        <ChevronDown className="text-white" size={20} />
                      )}
                    </div>
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#374151] text-base opacity-80">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-black px-4 md:px-20 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12 md:gap-20 items-center">
          <div className="flex flex-col gap-6 md:gap-6 items-center text-center max-w-[740px]">
            <h2 className="font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[48px] text-white text-3xl md:text-[40px] tracking-[-0.6px] md:tracking-[-0.8px]">
              AI marketing Team that Never sleep
            </h2>
            <p className="font-['General_Sans:Medium',sans-serif] leading-6 md:leading-7 text-[#9ca3af] text-base md:text-[20px]">
              Social media tools are easy to buy, but hard to keep up with. loraloop is your AI marketing team like 10 year employees marketing team for you to manage marketing end to end, So you focus on your work.
            </p>
            <button className="bg-[#1877f2] h-12 md:h-12 px-6 md:px-4 rounded-full hover:bg-[#1565d8] transition-colors">
              <span className="font-['General_Sans:Semibold',sans-serif] leading-7 text-white text-lg">Get Start</span>
            </button>
          </div>

          {/* Avatars */}
          <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className="relative shrink-0"
                style={{
                  width: index === 4 ? '80px' : '60px',
                  height: index === 4 ? '80px' : '60px',
                }}
              >
                <img
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                  src={avatar}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 backdrop-blur-[2px] bg-[#08080a] opacity-60"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-white rounded-[24px] md:rounded-[32px] w-full max-w-[520px] overflow-hidden">
            <div className="h-[160px] md:h-[211px] relative w-full">
              <img alt="" className="w-full h-full object-cover" src={imgThankYou} />
            </div>
            <div className="flex flex-col gap-4 items-center px-6 md:px-8 py-6">
              <div className="flex flex-col gap-1 items-center text-center">
                <p className="font-['General_Sans:Medium',sans-serif] leading-[22px] text-[#6b7280] text-base">
                  Thanks for your interest!
                </p>
                <p className="font-['Satoshi:Bold',sans-serif] leading-7 text-[#1f2937] text-xl max-w-[420px]">
                  Our team will be reach out to you.
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#1877f2] h-10 px-6 rounded-full hover:bg-[#1565d8] transition-colors"
              >
                <span className="font-['Satoshi:Bold',sans-serif] leading-5 text-sm text-white">Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
