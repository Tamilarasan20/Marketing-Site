import imgVideoImage from "./7791317fa0728612288fbeed4e75c5ec203fe987.png";
import imgFeatureImageLarge from "./226049655f3871f3dac264b316138eae1882ff2f.png";
import imgFeatureImageSmall from "./716c7778e50d7ebaf89d87cc7045f11c7dc8c365.png";
import imgFeatureImageSmall1 from "./cf31e812b350d794878316732de9dc42863611d4.png";
import imgFeatureImageLarge1 from "./fd0182baaee7bd791ece41153b51bc8d9dde0a30.png";
import imgBannerImageSideRight from "./62bd3bf9f5ad3a92db4d110679abb47a4004ccbe.png";
import imgFeatureImageSmall2 from "./18110a4df5acac34f23ec4990a55463713d90bef.png";
import imgFeatureImageSmall3 from "./2ede8e04425e852843b64720e2e6023d1ed754cb.png";
import imgImage168 from "./dbeb2eb70d23fd0ba6a1408bdaa79f59657dc958.png";
import imgGeminiGeneratedImageBewxcwbewxcwbewx2 from "./a6c396695db2f4867d2b2cf94c4c4013fb4aa21a.png";
import imgObject from "./7908e0c373350f1c767f51c81c8c63fccd42f554.png";
import imgFeatureImageLarge2 from "./7fb2500498e958c7df0abf6b0bb8673d257dbae0.png";
import imgFeatureImage from "./81459e21086bbb45f043de724414eb6c6a228454.png";

function Cotnet() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center not-italic relative shrink-0 text-center w-full max-w-[740px] px-4" data-name="Cotnet">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[48px] relative shrink-0 text-[#1f2937] text-[40px] tracking-[-0.8px] whitespace-nowrap">See it in action</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[28px]  relative shrink-0 text-[#374151] text-[20px] ">Watch how Loraloop manage marketing end to end</p>
    </div>
  );
}

function VideoImage() {
  return (
    <div className="h-[617px] relative rounded-[32px] shrink-0 w-[1115px]" data-name="Video Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgVideoImage} />
    </div>
  );
}

function VideoSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[80px] items-center px-[80px] py-[120px] relative rounded-tl-[64px] rounded-tr-[64px] shrink-0" data-name="Video Section">
      <Cotnet />
      <VideoImage />
    </div>
  );
}

function Cotnet1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center not-italic relative shrink-0 text-center w-full max-w-[740px] px-4" data-name="Cotnet">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[48px] relative shrink-0 text-[40px] text-white tracking-[-0.8px] w-full">AI employees that run your marketing end to end even while you sleep.</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[0] relative shrink-0 text-[#9ca3af] text-[20px] w-full whitespace-pre-wrap">
        <span className="leading-[28px]">{`You don’t need a large team to grow a business. Loraloop provides AI employees for marketing that handle daily work. From planning to execution, work gets done efficiently, 24/7.  `}</span>
        <span className="leading-[28px] text-white">10x your marketing with 10x less expansive.</span>
      </p>
    </div>
  );
}

function BadgeM() {
  return (
    <div className="bg-[#1558b0] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="Badge/M">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[0.21px] w-[82px]">
        <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] text-[14px]">AI Strategist</p>
      </div>
    </div>
  );
}

function TextGroupVertical() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text Group Vertical">
      <BadgeM />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[34px]  not-italic relative shrink-0 text-[32px] text-white tracking-[-0.48px] ">Identify what’s trending and what my competitors are doing</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px]  not-italic opacity-80 relative shrink-0 text-[16px] text-white ">Sam analyzes market trends and competitor actions. He identifies which content types or topics will help me grow.</p>
    </div>
  );
}

function LearnMoreContainer() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[34px] shrink-0" data-name="Learn More Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.16px] whitespace-nowrap">Learn more</p>
    </div>
  );
}

function FeatureTextGroup() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start justify-center left-[40px] top-[40px] w-[420px]" data-name="Feature Text Group">
      <TextGroupVertical />
      <LearnMoreContainer />
    </div>
  );
}

function FeatureImageLarge() {
  return (
    <div className="col-1 h-[530px] justify-self-stretch overflow-clip relative rounded-[30px] row-2 shrink-0" data-name="Feature Image Large">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
        <div className="absolute bg-gradient-to-b from-[#0073ff] inset-0 rounded-[30px] to-[#0da2ff]" />
        <div className="absolute bg-size-[307.20001220703125px_307.20001220703125px] bg-top-left inset-0 mix-blend-plus-lighter opacity-40 rounded-[30px]" style={{ backgroundImage: `url('${imgFeatureImageLarge}')` }} />
      </div>
      <FeatureTextGroup />
      <p className="absolute bottom-[54px] font-['Kalam:Bold',sans-serif] leading-[34px] left-[217px] not-italic text-[#134d91] text-[28px] tracking-[-0.48px] translate-y-full w-[52px]">Sam</p>
      <div className="absolute bottom-0 flex h-[219px] items-center justify-center right-[3px] w-[262px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[219px] relative w-[262px]" data-name="Feature Image Small">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[173.21%] left-[-32.09%] max-w-none top-[-10.42%] w-[158.54%]" src={imgFeatureImageSmall} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BadgeM1() {
  return (
    <div className="bg-[#137e3b] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="Badge/M">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[0.21px] w-[146px]">
        <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] text-[14px]">AI SEO/GEO Manager</p>
      </div>
    </div>
  );
}

function TextGroupVertical1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text Group Vertical">
      <BadgeM1 />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[34px]  not-italic relative shrink-0 text-[32px] text-black tracking-[-0.48px] ">Optimize my content for SEO and GEO to improve discoverability.</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px]  not-italic opacity-60 relative shrink-0 text-[16px] text-black  whitespace-pre-wrap">{`Shopie create seo optimised contents so ranks well whether in google or GEO like chatgpt, claude,  people find me easily.`}</p>
    </div>
  );
}

function LearnMoreContainer1() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[34px] shrink-0" data-name="Learn More Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.16px] whitespace-nowrap">Learn more</p>
    </div>
  );
}

function FeatureTextGroup1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start justify-center left-[40px] top-[40px] w-[420px]" data-name="Feature Text Group">
      <TextGroupVertical1 />
      <LearnMoreContainer1 />
    </div>
  );
}

function FeatureImageLarge1() {
  return (
    <div className="col-2 h-[530px] justify-self-stretch overflow-clip relative rounded-[30px] row-2 shrink-0" data-name="Feature Image Large">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
        <div className="absolute bg-gradient-to-b from-[#00e58d] inset-0 rounded-[30px] to-[#02a365]" />
        <div className="absolute bg-size-[307.20001220703125px_307.20001220703125px] bg-top-left inset-0 mix-blend-plus-lighter opacity-40 rounded-[30px]" style={{ backgroundImage: `url('${imgFeatureImageLarge}')` }} />
      </div>
      <FeatureTextGroup1 />
      <div className="-translate-x-1/2 absolute bottom-0 h-[262px] left-[calc(50%+154.5px)] w-[263px]" data-name="Feature Image Small">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.91%] left-[-0.01%] max-w-none top-[0.09%] w-[100.02%]" src={imgFeatureImageSmall1} />
        </div>
      </div>
      <p className="-translate-x-full absolute bottom-[55px] font-['Kalam:Bold',sans-serif] leading-[34px] left-[302px] not-italic text-[#143b2c] text-[28px] text-right tracking-[-0.48px] translate-y-full w-[78px]">Sophie</p>
    </div>
  );
}

function BadgeM2() {
  return (
    <div className="bg-[#fce453] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="Badge/M">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b25107] text-[0px] tracking-[0.21px] whitespace-nowrap">
        <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] text-[14px]">AI Ads Manager</p>
      </div>
    </div>
  );
}

function TextGroupVertical2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text Group Vertical">
      <BadgeM2 />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[34px] min-w-full not-italic relative shrink-0 text-[32px] text-black tracking-[-0.48px] w-[min-content] whitespace-pre-wrap">
        {`Run and improve my `}
        <br aria-hidden="true" />
        Ad campaigns
      </p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px]  not-italic opacity-60 relative shrink-0 text-[16px] text-black ">Elena runs and scales my ad campaigns, making sure you get the best return on investment.</p>
    </div>
  );
}

function LearnMoreContainer2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[34px] shrink-0" data-name="Learn More Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.16px] whitespace-nowrap">Learn more</p>
    </div>
  );
}

function FeatureTextGroup2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start justify-center left-[40px] top-[40px] w-[420px]" data-name="Feature Text Group">
      <TextGroupVertical2 />
      <LearnMoreContainer2 />
    </div>
  );
}

function FeatureImageLarge2() {
  return (
    <div className="col-2 h-[535px] justify-self-stretch relative rounded-[30px] row-4 shrink-0" data-name="Feature Image Large">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
        <div className="absolute inset-0 rounded-[30px]" style={{ backgroundImage: "linear-gradient(139.942deg, rgb(255, 245, 183) 2.9127%, rgb(254, 236, 117) 96.261%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} />
        <div className="absolute backdrop-blur-[2px] bg-size-[1024px_1024px] bg-top-left inset-0 mix-blend-soft-light rounded-[30px]" style={{ backgroundImage: `url('${imgFeatureImageLarge1}')` }} />
      </div>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <FeatureTextGroup2 />
        <div className="-translate-x-1/2 absolute bottom-0 h-[285px] left-[calc(50%+154px)] w-[344px]" data-name="Banner Image Side Right">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[173.5%] left-[-36.83%] max-w-none top-[-28.37%] w-[173.67%]" src={imgBannerImageSideRight} />
          </div>
        </div>
        <p className="absolute bottom-[54.67px] font-['Kalam:Bold',sans-serif] leading-[34px] left-[227px] not-italic text-[#aa9302] text-[28px] tracking-[-0.48px] translate-y-full whitespace-nowrap">Elena</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_1px_0px_rgba(255,241,151,0.4)]" />
      <div aria-hidden="true" className="absolute border border-[#fff6bc] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[0px_11.392px_22.336px_0px_rgba(255,227,42,0.19)]" />
    </div>
  );
}

function BadgeM3() {
  return (
    <div className="bg-[#691fa6] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="Badge/M">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[0.21px] whitespace-nowrap">
        <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] text-[14px]">AI Marketing Lead</p>
      </div>
    </div>
  );
}

function TextGroupVertical3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text Group Vertical">
      <BadgeM3 />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[34px]  not-italic relative shrink-0 text-[32px] text-white tracking-[-1px] ">Plan a marketing strategy for my business</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px]  not-italic opacity-90 relative shrink-0 text-[16px] text-white ">{`Lora turn my business goals into a clear execution plan. lora breaks down what needs to be done, assigns tasks to the right team, right members, & keeps everything aligned so my marketing runs in my voice.`}</p>
    </div>
  );
}

function LearnMoreContainer3() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[34px] shrink-0" data-name="Learn More Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.16px] whitespace-nowrap">Learn more</p>
    </div>
  );
}

function FeatureTextGroup3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[32px] items-start justify-center left-[40px] top-[calc(50%-17px)] w-[578px]" data-name="Feature Text Group">
      <TextGroupVertical3 />
      <LearnMoreContainer3 />
    </div>
  );
}

function FeatureHighlight1() {
  return (
    <div className="col-[1/span_2] h-[360px] justify-self-stretch overflow-clip relative rounded-[30px] row-1 self-start shrink-0" data-name="Feature Highlight">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
        <div className="absolute bg-gradient-to-b from-[#9500e5] inset-0 rounded-[30px] to-[#c31ded]" />
        <div className="absolute bg-size-[307.20001220703125px_307.20001220703125px] bg-top-left inset-0 mix-blend-plus-lighter opacity-40 rounded-[30px]" style={{ backgroundImage: `url('${imgFeatureImageLarge}')` }} />
      </div>
      <FeatureTextGroup3 />
      <div className="absolute bottom-[-1px] h-[285px] right-0 w-[314px]" data-name="Feature Image Small">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFeatureImageSmall2} />
      </div>
      <p className="absolute font-['Kalam:Bold',sans-serif] leading-[34px] left-[780px] not-italic text-[#501481] text-[28px] top-[321px] tracking-[-0.48px] whitespace-nowrap">Lora</p>
    </div>
  );
}

function BadgeM4() {
  return (
    <div className="bg-[#0d746c] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="Badge/M">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eefdf9] text-[0px] tracking-[0.21px] w-[167px]">
        <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] text-[14px]">AI Social Media Manager</p>
      </div>
    </div>
  );
}

function TextGroupVertical4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Text Group Vertical">
      <BadgeM4 />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[34px]  not-italic relative shrink-0 text-[#1f2937] text-[32px] tracking-[-0.48px] ">{`Schedule publish my posts, contents & Engage with audiences `}</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px]  not-italic relative shrink-0 text-[#1f2937] text-[16px] ">Sarah schedules my social posts, handles community engagement, replying and nurturing relationships.</p>
    </div>
  );
}

function LearnMoreContainer4() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[34px] shrink-0" data-name="Learn More Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.16px] whitespace-nowrap">Learn more</p>
    </div>
  );
}

function FeatureTextGroup4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start justify-center left-[40px] top-[40px] w-[420px]" data-name="Feature Text Group">
      <TextGroupVertical4 />
      <LearnMoreContainer4 />
    </div>
  );
}

function FeatureImageLarge3() {
  return (
    <div className="col-1 h-[535px] justify-self-stretch overflow-clip relative rounded-[30px] row-4 shrink-0" data-name="Feature Image Large">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
        <div className="absolute inset-0 rounded-[30px]" style={{ backgroundImage: "linear-gradient(rgba(21, 245, 227, 0.8) 0%, rgba(0, 110, 101, 0.8) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} />
        <div className="absolute bg-size-[307.20001220703125px_307.20001220703125px] bg-top-left inset-0 mix-blend-plus-lighter opacity-40 rounded-[30px]" style={{ backgroundImage: `url('${imgFeatureImageLarge}')` }} />
      </div>
      <FeatureTextGroup4 />
      <div className="-translate-x-1/2 absolute bottom-0 h-[262px] left-[calc(50%+154.5px)] w-[263px]" data-name="Feature Image Small">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.11%] max-w-none top-0 w-[100.21%]" src={imgFeatureImageSmall3} />
        </div>
      </div>
      <p className="-translate-x-full absolute bottom-[55px] font-['Kalam:Bold',sans-serif] leading-[34px] left-[301px] not-italic text-[#fafcfb] text-[28px] text-right tracking-[-0.48px] translate-y-full whitespace-nowrap">Sarah</p>
    </div>
  );
}

function BadgeM5() {
  return (
    <div className="bg-[#3e7ff9] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="Badge/M">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[0.21px] whitespace-nowrap">
        <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] text-[14px]">AI Analyst</p>
      </div>
    </div>
  );
}

function TextGroupVertical5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[732px]" data-name="Text Group Vertical">
      <BadgeM5 />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[34px]  not-italic relative shrink-0 text-[32px] text-black tracking-[-0.48px] ">Analyze every content performance and determine what’s working whats not</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[28px] min-w-full not-italic opacity-60 relative shrink-0 text-[18px] text-black w-[min-content] whitespace-pre-wrap">
        {`Nick tracks performs of contes, posts, ads. `}
        <br aria-hidden="true" />
        He reports on what worked, what didn’t, and what to improve next.
      </p>
    </div>
  );
}

function LearnMoreContainer5() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[34px] shrink-0" data-name="Learn More Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.16px] whitespace-nowrap">Learn more</p>
    </div>
  );
}

function FeatureTextGroup5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start justify-center left-[40px] top-[40px]" data-name="Feature Text Group">
      <TextGroupVertical5 />
      <LearnMoreContainer5 />
    </div>
  );
}

function FeatureImageLarge4() {
  return (
    <div className="col-[1/span_2] h-[360px] justify-self-stretch relative rounded-[30px] row-5 self-start shrink-0" data-name="Feature Image Large">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
        <div className="absolute inset-0 rounded-[30px]" style={{ backgroundImage: "linear-gradient(rgba(91, 166, 253, 0.8) 0%, rgba(25, 103, 247, 0.8) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} />
        <div className="absolute backdrop-blur-[2px] bg-size-[307.20001220703125px_307.20001220703125px] bg-top-left inset-0 mix-blend-plus-lighter opacity-40 rounded-[30px]" style={{ backgroundImage: `url('${imgFeatureImageLarge}')` }} />
      </div>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <FeatureTextGroup5 />
        <div className="absolute bottom-0 h-[271px] right-[-20px] w-[272px]" data-name="image 168">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[120.44%] left-[-48.18%] max-w-none top-0 w-[193.05%]" src={imgImage168} />
          </div>
        </div>
        <p className="absolute bottom-[44px] font-['Kalam:Bold',sans-serif] leading-[34px] not-italic right-[302px] text-[28px] text-white tracking-[-0.48px] translate-x-full translate-y-full whitespace-nowrap">Nick</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_1px_0px_rgba(151,193,255,0.4)]" />
      <div aria-hidden="true" className="absolute border border-[#c4dcff] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[0px_11.392px_22.336px_0px_rgba(53,106,185,0.09)]" />
    </div>
  );
}

function BadgeM6() {
  return (
    <div className="bg-[#0abcfb] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="Badge/M">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[0px] tracking-[0.21px] w-[119px]">
        <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] text-[14px]">AI Content Writer</p>
      </div>
    </div>
  );
}

function TextGroupVertical6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[302px] items-start relative shrink-0 w-full" data-name="Text Group Vertical">
      <BadgeM6 />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[34px]  not-italic relative shrink-0 text-[32px] text-black tracking-[-0.48px] ">{`Writes content that attracts customers for blog, mail & more..`}</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px]  not-italic opacity-60 relative shrink-0 text-[16px] text-black ">Clara writes my blogs, emails, threads, newsletters, Social posts and other persuasive content that drives action.</p>
    </div>
  );
}

function LearnMoreContainer6() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[34px] shrink-0" data-name="Learn More Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.16px] whitespace-nowrap">Learn more</p>
    </div>
  );
}

function FeatureTextGroup6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start justify-center left-[32px] top-[40px] w-full" data-name="Feature Text Group">
      <TextGroupVertical6 />
      <LearnMoreContainer6 />
    </div>
  );
}

function FeatureHighlight2() {
  return (
    <div className="h-[530px] overflow-clip relative rounded-[30px] shrink-0 w-[346px]" style={{ backgroundImage: "linear-gradient(-9.72542deg, rgba(38, 193, 250, 0.8) 0.25815%, rgba(94, 212, 255, 0.8) 83.051%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Feature Highlight">
      <FeatureTextGroup6 />
      <div className="absolute bottom-[-22px] h-[218px] right-[-30px] w-[228px]" data-name="Gemini_Generated_Image_bewxcwbewxcwbewx 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.11%] max-w-none top-0 w-[100.21%]" src={imgGeminiGeneratedImageBewxcwbewxcwbewx2} />
        </div>
      </div>
      <p className="absolute bottom-[44px] font-['Kalam:Bold',sans-serif] leading-[34px] left-[120px] not-italic text-[#286a8f] text-[28px] tracking-[-0.48px] translate-y-full w-[62px]">Clara</p>
    </div>
  );
}

function BadgeM7() {
  return (
    <div className="bg-[#5762e5] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="Badge/M">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[0.21px] w-[123px]">
        <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] text-[14px]">AI Video Producer</p>
      </div>
    </div>
  );
}

function TextGroupVertical7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px relative w-full" data-name="Text Group Vertical">
      <BadgeM7 />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[34px]  not-italic relative shrink-0 text-[32px] text-black tracking-[-0.48px] ">Create Videos for TikTok, Insta, YouTube etc.</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px]  not-italic opacity-60 relative shrink-0 text-[16px] text-black ">Theo turns your ideas into engaging video content for your brand. plans and scripts your short-form videos for platforms like TikTok or YouTube, boosting engagement.</p>
    </div>
  );
}

function LearnMoreContainer7() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[34px] shrink-0" data-name="Learn More Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.16px] whitespace-nowrap">Learn more</p>
    </div>
  );
}

function FeatureTextGroup7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[380px] items-start left-[32px] top-[40px] w-full" data-name="Feature Text Group">
      <TextGroupVertical7 />
      <LearnMoreContainer7 />
    </div>
  );
}

function FeatureImageLarge5() {
  return (
    <div className="h-[530px] relative rounded-[30px] shrink-0 w-[346px]" data-name="Feature Image Large">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
        <div className="absolute inset-0 rounded-[30px]" style={{ backgroundImage: "linear-gradient(rgba(116, 132, 252, 0.5) 0%, rgba(19, 7, 242, 0.5) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} />
        <div className="absolute backdrop-blur-[2px] bg-size-[307.20001220703125px_307.20001220703125px] bg-top-left inset-0 mix-blend-plus-lighter opacity-40 rounded-[30px]" style={{ backgroundImage: `url('${imgFeatureImageLarge}')` }} />
      </div>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <FeatureTextGroup7 />
        <div className="absolute bottom-[-70px] h-[285px] right-[-69.33px] w-[277px]" data-name="Object">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[373.26%] left-[-76.92%] max-w-none top-[-12.2%] w-[251.46%]" src={imgObject} />
          </div>
        </div>
        <p className="absolute bottom-[44px] font-['Kalam:Bold',sans-serif] leading-[34px] left-[120px] not-italic text-[#06074e] text-[28px] tracking-[-0.48px] translate-y-full w-[57px]">Theo</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_1px_0px_rgba(151,193,255,0.4)]" />
      <div aria-hidden="true" className="absolute border border-[#c4dcff] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[0px_11.392px_22.336px_0px_rgba(53,106,185,0.09)]" />
    </div>
  );
}

function BadgeM8() {
  return (
    <div className="bg-[#fdc9a8] content-stretch flex items-center px-[14px] py-[8px] relative rounded-[50px] shrink-0" data-name="Badge/M">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[0px] tracking-[0.21px] w-[123px]">
        <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] text-[14px]">AI Visual Designer</p>
      </div>
    </div>
  );
}

function TextGroupVertical8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[302px] items-start relative shrink-0 w-full" data-name="Text Group Vertical">
      <BadgeM8 />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[34px]  not-italic relative shrink-0 text-[32px] text-black tracking-[-0.48px] ">Creates scroll-stopping posts and carousels for Insta, FB etc</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[22px]  not-italic opacity-60 relative shrink-0 text-[16px] text-black ">Steve Design scroll-stopping visuals and carousels that reflect my brand and grab attention in all platforms</p>
    </div>
  );
}

function LearnMoreContainer8() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[34px] shrink-0" data-name="Learn More Container">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.16px] whitespace-nowrap">Learn more</p>
    </div>
  );
}

function FeatureTextGroup8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[380px] items-start left-[32px] top-[40px] w-full" data-name="Feature Text Group">
      <TextGroupVertical8 />
      <LearnMoreContainer8 />
    </div>
  );
}

function FeatureImageLarge6() {
  return (
    <div className="h-[530px] overflow-clip relative rounded-[30px] shrink-0 w-[346px]" data-name="Feature Image Large">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
        <div className="absolute inset-0 rounded-[30px]" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(139.575deg, rgb(255, 219, 211) 0%, rgb(255, 221, 181) 96.708%)" }} />
        <div className="absolute bg-size-[8.640000343322754px_8.640000343322754px] bg-top-left inset-0 opacity-30 rounded-[30px]" style={{ backgroundImage: `url('${imgFeatureImageLarge2}')` }} />
      </div>
      <FeatureTextGroup8 />
      <div className="absolute bottom-[-19px] h-[215px] right-[-29.67px] w-[235px]" data-name="Feature Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.18%] left-[-33.01%] max-w-none top-0 w-[168.71%]" src={imgFeatureImage} />
        </div>
      </div>
      <p className="absolute bottom-[44px] font-['Kalam:Bold',sans-serif] leading-[34px] left-[120px] not-italic text-[#8e492b] text-[28px] tracking-[-0.48px] translate-y-full w-[66px]">Steve</p>
    </div>
  );
}

function FeatureSection() {
  return (
    <div className="col-[1/span_2] content-start flex flex-wrap gap-[40px] h-[530px] items-start justify-self-stretch relative row-3 shrink-0" data-name="Feature Section">
      <FeatureHighlight2 />
      <FeatureImageLarge5 />
      <FeatureImageLarge6 />
    </div>
  );
}

function FeatureHighlight() {
  return (
    <div className="relative shrink-0 w-full" data-name="Feature Highlight">
      <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-1 md:grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(5,fit-content(100%))] px-[80px] relative size-full">
        <FeatureImageLarge />
        <FeatureImageLarge1 />
        <FeatureImageLarge2 />
        <FeatureHighlight1 />
        <FeatureImageLarge3 />
        <FeatureImageLarge4 />
        <FeatureSection />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[80px] items-center overflow-clip py-[120px] relative shrink-0 w-full" data-name="Main Content">
      <Cotnet1 />
      <FeatureHighlight />
      <div className="bg-[#1877f2] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] relative rounded-[120px] shrink-0 w-[140px]" data-name="Button">
        <p className="font-['General_Sans:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Get Start</p>
      </div>
    </div>
  );
}

export default function ProductLaunchVideoSection() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="Product Launch Video Section">
      <VideoSection />
      <MainContent />
    </div>
  );
}