import imgClara1 from "./b77f42882a70f9452bf0bb5a474a1ad9b31a04fc.png";

function Content() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans',sans-serif] font-medium items-start leading-[0] not-italic relative shrink-0 w-[114px]" data-name="Content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#374151] text-[0px] w-full">
        <p className="leading-[18px] text-[14px]">AI Content Writer</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Clara</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[8px] relative size-full" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Clara 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgClara1} />
      </div>
      <Content />
    </div>
  );
}