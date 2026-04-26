import imgLora2 from "./32264b1854d55ff26d5f28cf2aff116c87c1ae73.png";

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="Content">
      <div className="flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center relative shrink-0 text-[#1f2937] text-[14px]">
        <p className="leading-[18px]">AI Marketing Lead</p>
      </div>
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[#6b7280] text-[12px]">
        <p className="leading-[16px]">Lora</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex gap-[12px] items-center p-[8px] relative rounded-[20px] size-full" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Lora 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLora2} />
      </div>
      <Content />
    </div>
  );
}