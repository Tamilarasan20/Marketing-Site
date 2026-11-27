import { Button, Container, Label, Reveal, SectionPanel } from "./primitives";
import imgTeam from "../../../imports/LandingPage/a091e0e97bb7d939c455df7635918b4c8c69a7b8.png";

/** Closing call to action on an ink panel, mirroring the hero (Cardboard-style). */
export default function FinalCta() {
  return (
    <SectionPanel tone="white" aria-labelledby="cta-heading" className="pb-32 md:pb-[192px]">
      <Container className="max-w-[1320px] px-3 sm:px-4 lg:px-6">
        <Reveal>
          <div className="hv-ink relative flex flex-col items-center overflow-hidden rounded-[28px] px-5 pt-16 text-center sm:px-10 md:rounded-[36px] md:pt-24">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-[radial-gradient(60%_80%_at_50%_100%,rgba(20,161,72,0.25),transparent_70%)]" />
            <Label>Start today</Label>
            <h2 id="cta-heading" className="hv-h2 relative mt-5 max-w-[860px]">
              <span className="text-white">Keep headcount flat.</span>{" "}
              <span className="hv-em text-white/55">Ship like a team of ten.</span>
            </h2>
            <p className="relative mt-5 max-w-[620px] text-[17px] leading-[1.55] text-white/70 md:text-[18px]">
              Loraloop produces the content, runs the ads and reports the numbers while your team keeps the strategy and
              the approvals.
            </p>
            <div className="relative mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <Button
                variant="on-green-primary"
                href="https://app.loraloop.com/signup"
                data-ml-goal="signup_click"
                data-ml-goal-location="final_cta"
              >
                Start free trial
              </Button>
              <Button variant="on-green-secondary" to="/pricing">
                See pricing
              </Button>
            </div>
            <p className="relative mt-4 text-[13px] text-white/45">3-day free trial · no card needed · cancel anytime</p>
            <img
              src={imgTeam}
              alt=""
              className="relative mt-10 w-full max-w-[880px] select-none md:mt-14"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        </Reveal>
      </Container>
    </SectionPanel>
  );
}
