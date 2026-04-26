import imgTheo1 from "./d07ecb97e8b9ee75e5acd60ce6899904cb22a862.png";

function Content() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Medium',sans-serif] items-start leading-[0] not-italic relative shrink-0 w-[117px]" data-name="Content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#374151] text-[0px] w-full">
        <p className="leading-[18px] text-[14px]">AI Video Producer</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Theo</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[8px] relative size-full" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Theo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTheo1} />
      </div>
      <Content />
    </div>
  );
}