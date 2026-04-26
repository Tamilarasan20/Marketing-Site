function Button() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-center justify-center px-[16px] py-[14px] relative rounded-[300px] shrink-0" data-name="Button">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.21px] whitespace-nowrap">Month plan</p>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#151109] content-stretch flex items-center justify-center left-1/2 px-[16.749px] py-[2.749px] rounded-[1280px] top-[-14px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.749px] border-[rgba(213,165,91,0.4)] border-solid inset-0 pointer-events-none rounded-[1280px]" />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d5a55b] text-[12px] tracking-[0.3px] whitespace-nowrap">Save 30%</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center px-[16px] py-[14px] relative rounded-[300px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-[300px]" />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.21px] whitespace-nowrap">12-month plan</p>
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#151109] content-stretch flex items-start left-[calc(50%+0.25px)] px-[16.749px] py-[2.749px] rounded-[1280px] top-[-15px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.749px] border-[rgba(213,165,91,0.4)] border-solid inset-0 pointer-events-none rounded-[1280px]" />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d5a55b] text-[12px] tracking-[0.3px] whitespace-nowrap">Save 15%</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center px-[16px] py-[14px] relative rounded-[300px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#374151] border-solid inset-0 pointer-events-none rounded-[300px]" />
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.21px] whitespace-nowrap">3-month plan</p>
      <Container1 />
    </div>
  );
}

function Segmenter() {
  return (
    <div className="bg-black content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[300px] shrink-0" data-name="Segmenter">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full">
      <Segmenter />
    </div>
  );
}