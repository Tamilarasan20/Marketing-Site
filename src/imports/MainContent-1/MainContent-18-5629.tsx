import imgImage172 from "./a091e0e97bb7d939c455df7635918b4c8c69a7b8.png";

function TextGroupVertical() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center not-italic relative shrink-0 text-center w-full" data-name="Text Group Vertical">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[48px] relative shrink-0 text-[40px] text-white tracking-[-0.8px] w-full">AI marketing Team that Never sleep</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[0] relative shrink-0 text-[#9ca3af] text-[20px] w-full">
        <span className="leading-[28px]">
          Social media tools are easy to buy, but hard to keep up with. loraloop is your AI marketing team like 10 year employees marketing team for you to
          <br aria-hidden="true" />
          {`manage `}
        </span>
        <span className="leading-[28px]">marketing</span>
        <span className="leading-[28px]">{` end to end, So you focus on your work.`}</span>
      </p>
    </div>
  );
}

function CallToActionGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full max-w-[740px] px-4" data-name="Call to Action Group">
      <TextGroupVertical />
      <div className="bg-[#1877f2] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] relative rounded-[120px] shrink-0" data-name="Button">
        <p className="font-['General_Sans:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Get Start</p>
      </div>
    </div>
  );
}

export default function MainContent() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[80px] items-center pt-[80px] relative size-full" data-name="Main Content">
      <CallToActionGroup />
      <div className="h-[258px] relative shrink-0 w-[1002px]" data-name="image 172">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[199.29%] left-0 max-w-none top-[-3.87%] w-full" src={imgImage172} />
        </div>
      </div>
    </div>
  );
}