import imgSteve1 from "./c9c2f9a7adf5d78f4c0df2eea6a47b4ab705250b.png";

function Content() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans',sans-serif] font-medium items-start leading-[0] not-italic relative shrink-0 w-[117px]" data-name="Content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#374151] text-[0px] w-full">
        <p className="leading-[18px] text-[14px]">AI Visual Designer</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b7280] text-[12px] w-full">
        <p className="leading-[16px]">Steve</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[8px] relative size-full" data-name="Container">
      <div className="relative shrink-0 size-[40px]" data-name="Steve 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSteve1} />
      </div>
      <Content />
    </div>
  );
}