const fs = require('fs');
let content = fs.readFileSync('src/imports/LandingPage/LandingPage.tsx', 'utf8');

// --- Update DescriptionSection_Auth (Top Left) ---
const newDescSection = `function DescriptionSection_Auth() {
    return (
      <div className="bg-white relative shrink-0 flex-1 w-full" data-name="Description Section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center leading-[0] not-italic p-[40px] relative size-full text-center">
          <div className="flex flex-col font-['Satoshi:Bold',sans-serif] justify-center relative shrink-0 text-[#1f2937] text-[0px] tracking-[-0.5px] w-full">
            <p className="text-[24px]">
              <span className="font-['Satoshi:Bold',sans-serif] leading-[32px] not-italic text-[#14a148]">Social Media handled End to End</span>
            </p>
          </div>
          <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[#6b7280] text-[16px] w-full">
            <p className="leading-[22px]">Lora understand you end to end, Turn your goals into a structured marketing plan with clear next steps acct like personal marketing lead.</p>
          </div>
        </div>
      </div>
    </div>
  );
}`;

// --- Update DescriptionSection1_Auth (Top Right) ---
const newDescSection1 = `function DescriptionSection1_Auth() {
    return (
      <div className="bg-white content-stretch flex flex-col gap-[12px] items-center leading-[0] not-italic p-[40px] relative shrink-0 text-center flex-1 w-full" data-name="Description Section">
      <div className="flex flex-col font-['Satoshi:Bold',sans-serif] justify-center relative shrink-0 text-[#14a148] text-[24px] tracking-[-0.5px] w-full">
        <p>
          <span className="leading-[32px] text-[#14a148]">Discover ideas, trends, monitor competitor</span>
          <span className="leading-[32px] text-[#1f2937]"> your marketing 10x value content</span>
        </p>
      </div>
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[#6b7280] text-[16px] w-full">
        <p className="leading-[22px]">Effortlessly find current trends, demands, monitor competitor doing etc. Based on create content types, ideas, topics to grow social media and ROI more.</p>
      </div>
    </div>
  );
}`;

// --- Update DescriptionSection2_Auth (Bottom Right) ---
const newDescSection2 = `function DescriptionSection2_Auth() {
    return (
      <div className="bg-white content-stretch flex flex-col gap-[12px] items-center leading-[0] not-italic p-[40px] relative shrink-0 text-center flex-1 w-full" data-name="Description Section">
      <div className="flex flex-col font-['Satoshi:Bold',sans-serif] justify-center relative shrink-0 text-[#1f2937] text-[24px] tracking-[-0.5px] w-full">
        <p>
          <span className="leading-[32px] text-[#14a148]">Turn idea/existing content</span>
          <span className="leading-[32px] text-[#1f2937]"> into social posts, blogs, TikToks, YouTube videos in minutes.</span>
        </p>
      </div>
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[#6b7280] text-[16px] w-full">
        <p className="leading-[22px]">Use one idea or existing content to create everything you need posts and videos ready to publish, without doing the work yourself grow social media presence while you sleep.</p>
      </div>
    </div>
  );
}`;

// --- Update DescriptionSection3_Auth (Bottom Left) ---
const newDescSection3 = `function DescriptionSection3_Auth() {
    return (
      <div className="bg-white relative shrink-0 flex-1 w-full" data-name="Description Section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center leading-[0] not-italic p-[40px] relative size-full text-center">
          <div className="flex flex-col font-['Satoshi:Bold',sans-serif] justify-center relative shrink-0 text-[#14a148] text-[24px] tracking-[-0.5px] w-full">
            <p>
              <span className="leading-[32px] text-[#14a148]">Smart Multi-Platform Publishing</span>
              <span className="leading-[32px] text-[#1f2937]"> based on realtime audiance & performance data!</span>
            </p>
          </div>
          <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[#6b7280] text-[16px] w-full">
            <p className="leading-[22px]">Share content across platforms like Instagram, X, Wordpress, TikTok, and YouTube etc. based on platform realtime algorithms and previous past performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}`;

// Replace functions using regex to match from function ... to next function or end of component
const replaceFunc = (compName, newCode) => {
  const regex = new RegExp('function ' + compName + '\\(\\)[\\s\\S]*?\\n  \\);\\n}', 'g');
  content = content.replace(regex, newCode);
};

replaceFunc('DescriptionSection_Auth', newDescSection);
replaceFunc('DescriptionSection1_Auth', newDescSection1);
replaceFunc('DescriptionSection2_Auth', newDescSection2);
replaceFunc('DescriptionSection3_Auth', newDescSection3);

fs.writeFileSync('src/imports/LandingPage/LandingPage.tsx', content, 'utf8');
console.log('Descriptions updated.');
