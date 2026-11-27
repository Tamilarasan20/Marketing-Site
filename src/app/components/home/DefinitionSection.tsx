import { Container, Eyebrow, Reveal, SectionPanel } from "./primitives";
import { HOME_DEFINITION } from "../../data/homeContent";

/**
 * A plain definition block written to be quoted by AI answer engines (ChatGPT, Perplexity,
 * Google AI Overviews): question as the heading, a direct answer first, then the roles.
 */
export default function DefinitionSection() {
  const { question, answer, roles, data, contrast } = HOME_DEFINITION;
  return (
    <SectionPanel tone="white" aria-labelledby="definition-heading">
      <Container>
        <Reveal className="mx-auto grid max-w-[1040px] gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div className="flex flex-col items-start gap-5">
            <Eyebrow>The short answer</Eyebrow>
            <h2 id="definition-heading" className="hv-h2">
              {question}
            </h2>
          </div>
          <div className="flex min-w-0 flex-col gap-5">
            <p className="text-[19px] leading-[1.6] text-[#2c2c2c] md:text-[21px]">{answer}</p>
            <ul className="flex flex-col gap-3">
              {roles.map((role) => {
                const [name, ...rest] = role.split(": ");
                const text = rest.join(": ");
                return (
                  <li key={role} className="rounded-[18px] bg-[#f7f7f5] px-5 py-4 text-[16px] leading-[1.55] text-[rgba(44,44,44,0.8)]">
                    <span className="font-['Satoshi',sans-serif] font-bold text-[#2c2c2c]">{name}.</span>{" "}
                    {text.charAt(0).toUpperCase() + text.slice(1)}
                  </li>
                );
              })}
            </ul>
            <p className="rounded-[18px] border border-[#cfe9d3] bg-[#f3faf4] px-5 py-4 text-[16px] leading-[1.6] text-[#094413]">{data}</p>
            <p className="text-[16px] leading-[1.6] text-[rgba(44,44,44,0.7)]">{contrast}</p>
          </div>
        </Reveal>
      </Container>
    </SectionPanel>
  );
}
