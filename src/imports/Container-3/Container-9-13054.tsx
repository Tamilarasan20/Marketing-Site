import imgSophie1 from "./7f8a67d1c140c52d1b6678ae07c33d1915711c2e.png";

function Content() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Medium',sans-serif] items-start leading-[0] not-italic relative shrink-0 w-[142px]" data-name="Content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#374151] text-[0px] w-full">
        <p className="leading-[18px] text-[14px]">AI SEO/GEO Manager</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Sophie</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[8px] relative size-full" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Sophie 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSophie1} />
      </div>
      <Content />
    </div>
  );
}