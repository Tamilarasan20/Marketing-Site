import { Check, ShieldCheck } from "lucide-react";
import { Container, Label, Reveal, SectionPanel } from "./primitives";
import { HOME_GUARDRAILS } from "../../data/homeContent";

/** Controls checklist in one warm card: answers "will it publish or spend without us?". */
export default function Guardrails() {
  return (
    <SectionPanel tone="taupe-100" id="guardrails" aria-labelledby="guardrails-heading">
      <Container>
        <Reveal className="mx-auto flex max-w-[1040px] flex-col items-center rounded-[32px] border border-[#e3e1dc] bg-white px-5 py-12 text-center md:px-12 md:py-16">
          <span className="flex size-16 items-center justify-center rounded-full border border-[#e3e1dc] bg-[#f7f7f5] text-[#094413]" aria-hidden="true">
            <ShieldCheck className="size-7" strokeWidth={1.8} />
          </span>
          <Label className="mt-6">Guardrails</Label>
          <h2 id="guardrails-heading" className="hv-h2 mt-4 max-w-[720px]">
            <span className="text-[#2c2c2c]">The autonomy you want,</span>{" "}
            <span className="text-[rgba(44,44,44,0.55)]">the oversight you need.</span>
          </h2>
          <p className="hv-lead mt-4 max-w-[600px]">Every agent works inside rules your team sets once. Nothing ships or spends outside them.</p>

          <ul className="mt-10 grid w-full gap-x-10 text-left sm:grid-cols-2">
            {HOME_GUARDRAILS.map((item) => (
              <li key={item.title} className="flex gap-3 border-t border-[#ecebe7] py-4">
                <Check className="mt-1 size-4 shrink-0 text-[#14a148]" strokeWidth={2.6} aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-['Satoshi',sans-serif] text-[16px] font-bold text-[#2c2c2c]">{item.title}</span>
                  <span className="mt-0.5 block text-[15px] leading-[1.55] text-[rgba(44,44,44,0.7)]">{item.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </SectionPanel>
  );
}
