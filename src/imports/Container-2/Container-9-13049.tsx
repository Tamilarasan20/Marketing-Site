import imgMark1 from "./b34a04b0d155ad8417b049bc9858620b387d57d6.png";

function Content() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Medium',sans-serif] items-start leading-[0] not-italic relative shrink-0 w-[82px]" data-name="Content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#374151] text-[0px] w-full">
        <p className="leading-[18px] text-[14px]">AI Strategist</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Sam</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[8px] relative size-full" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Mark 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMark1} />
      </div>
      <Content />
    </div>
  );
}