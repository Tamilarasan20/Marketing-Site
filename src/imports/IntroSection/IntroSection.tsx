import svgPaths from "./svg-wr4hzvlnoz";
import imgImage174 from "./63808635cd776f0fdaad03c9757b0a112ed13271.png";
import WaitlistForm from "../../app/components/WaitlistForm";

function TextGroupVertical3() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] pb-[14px] relative shrink-0 text-white w-full" data-name="Text Group Vertical">
      <p className="leading-[0] relative shrink-0 text-[0px] w-full font-bold">
        <span className="leading-[76px] text-[68px] font-bold">{`Meet `}</span>
        <span className="leading-[76px] text-[#14a148] text-[68px] font-bold">Lora</span>
      </p>
      <p className="leading-[76px] relative shrink-0 text-[68px] w-full font-bold">{`your Autonomous `}</p>
    </div>
  );
}

function TextGroupVertical2() {
  return (
    <div className="content-stretch flex flex-col font-['Satoshi:Bold',sans-serif] font-bold items-start pb-px relative shrink-0 tracking-[-1.2px] w-full" data-name="Text Group Vertical">
      <TextGroupVertical3 />
      <p className="leading-[76px] relative shrink-0 text-[#14a148] text-[68px] w-full font-bold">{`AI Marketing Team `}</p>
    </div>
  );
}

function TextGroupVertical1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center not-italic relative shrink-0 text-center w-full" data-name="Text Group Vertical">
      <TextGroupVertical2 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[28px] relative shrink-0 text-[#9ca3af] text-[20px] w-[720px] whitespace-pre-wrap">
        {`An AI agents work as a team that plans content, creates, publishes,  tracks performance, manages ads & keeps improving itself on autopilot`}
        <br aria-hidden="true" />
        your 24/7 marketing team that never sleeps.
      </p>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Button Container">
      <div className="bg-[#1f2937] content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative rounded-[24px] shrink-0 w-[480px]" data-name="Marketting/Input field">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(147,197,253,0.4)] border-solid inset-[-2px] pointer-events-none rounded-[26px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        <p className="flex-[1_0_0] font-['General_Sans:Medium',sans-serif] leading-[28px] min-w-px not-italic relative text-[#9ca3af] text-[18px]">enter your mail</p>
      </div>
      <div className="bg-[#2a3040] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] relative rounded-[40px] shrink-0 w-[220px]" data-name="Button">
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6b7280] text-[16px] whitespace-nowrap">Join Waitlist</p>
      </div>
      <div 
        onClick={() => {
          const solutionSection = document.getElementById("solution-section");
          if (solutionSection) {
            solutionSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] relative rounded-[16px] shrink-0 cursor-pointer" 
        data-name="Button"
      >
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#d1d5db] text-[16px] whitespace-nowrap">See Solution</p>
        <div className="flex flex-col items-center justify-center ml-1">
          <svg className="w-[12px] h-[7px]" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg className="w-[12px] h-[7px] -mt-[1px]" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextGroupVertical() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[40px] items-center justify-center left-1/2 top-[142px] w-full max-w-[740px] px-4" data-name="Text Group Vertical">
      <TextGroupVertical1 />
      <WaitlistForm />
    </div>
  );
}

export default function IntroSection() {
  return (
    <div className="relative size-full" data-name="Intro Section">
      <div className="absolute bg-black h-[920px] left-0 top-0 w-[1293px]" data-name="Background Shape" />
      <div className="absolute bottom-[-134px] h-[537px] right-[249px] w-[786px]" data-name="Banner Image Side Left" />
      <TextGroupVertical />
      <div className="-translate-x-1/2 absolute bottom-0 h-[220px] left-1/2 w-[854px]" data-name="image 174">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage174} />
      </div>
    </div>
  );
}