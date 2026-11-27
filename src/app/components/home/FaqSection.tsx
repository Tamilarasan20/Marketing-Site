import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { Container, Reveal, SectionPanel, TwoTone } from "./primitives";
import { HOME_FAQ } from "../../data/homeContent";

// Shared with prerender.mjs, which writes the same questions into the HTML and FAQPage schema.
const FAQS = HOME_FAQ;

export default function FaqSection() {
  return (
    <SectionPanel tone="taupe-100" aria-labelledby="faq-heading">
      <Container className="flex flex-col items-center">
        <Reveal className="flex max-w-[760px] flex-col items-center gap-5 text-center">
          <TwoTone id="faq-heading" lead="Frequently asked" rest="questions." />
        </Reveal>

        <Reveal className="mt-12 w-full max-w-[800px] md:mt-16" delay={0.05}>
          <Accordion.Root type="single" collapsible defaultValue="item-0" className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <Accordion.Item
                key={faq.q}
                value={`item-${i}`}
                className="overflow-hidden rounded-[20px] border border-[#e3e1dc] bg-white transition-colors data-[state=open]:border-[#d4d1ca]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 px-5 py-5 text-left md:px-7 md:py-6 focus-visible:outline-2 focus-visible:-outline-offset-2">
                    <span className="font-['Satoshi',sans-serif] text-[18px] font-bold leading-7 tracking-[-0.015em] text-[#2c2c2c] md:text-[20px]">
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#efede8] text-[#2c2c2c] transition-[transform,background-color] duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-[#141412] group-data-[state=open]:text-[#f3f2ef]"
                    >
                      <Plus className="size-4" strokeWidth={2.4} />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="px-5 pb-6 text-[16px] leading-[1.6] text-[rgba(44,44,44,0.8)] md:px-7">{faq.a}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </Container>
    </SectionPanel>
  );
}
