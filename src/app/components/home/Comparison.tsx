import { Check } from "lucide-react";
import { Container, Eyebrow, Reveal, SectionPanel, TwoTone } from "./primitives";

interface Row {
  label: string;
  freelancers: string;
  agencies: string;
  loraloop: string;
}

// Same rows and values as the previous home page comparison.
const ROWS: Row[] = [
  { label: "Cost", freelancers: "$4k–$8k / month", agencies: "$5k–$15k / month", loraloop: "Starts at $39 / month" },
  { label: "Availability", freelancers: "Limited hours", agencies: "Business hours only", loraloop: "24/7, always on" },
  { label: "Downtime", freelancers: "Leaves, sick days", agencies: "Holidays & breaks", loraloop: "Never stops" },
  { label: "Overhead", freelancers: "Benefits, tools, extras", agencies: "High retainers", loraloop: "No overhead" },
  { label: "Setup time", freelancers: "Weeks to start", agencies: "1–2 weeks onboarding", loraloop: "Ready in 5 minutes" },
  { label: "Continuity", freelancers: "Can quit anytime", agencies: "Team changes", loraloop: "Never leaves" },
  { label: "Skill coverage", freelancers: "Limited to one skillset", agencies: "Depends on team", loraloop: "Works across all platforms" },
  { label: "Speed", freelancers: "Slow, needs follow-ups", agencies: "Queue-based delays", loraloop: "Executes in minutes" },
  { label: "Scalability", freelancers: "Hire more people", agencies: "Pay more to scale", loraloop: "Instant scaling" },
  { label: "How it works", freelancers: "You manage them", agencies: "They plan first", loraloop: "You approve, we execute" },
];

export default function Comparison() {
  return (
    <SectionPanel tone="taupe-100" aria-labelledby="compare-heading">
      <Container>
        <Reveal className="mx-auto flex max-w-[820px] flex-col items-center gap-5 text-center">
          <Eyebrow>Why Loraloop</Eyebrow>
          <TwoTone id="compare-heading" lead="Replace the retainer," rest="not the team." />
          <p className="hv-lead max-w-[640px]">
            Everything an agency does, run by your own marketing manager, without the $3k to $10k retainer or the
            turnover.
          </p>
        </Reveal>

        <Reveal className="mt-12 md:mt-16" delay={0.05}>
          <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[640px] border-separate border-spacing-0 text-left">
              <caption className="sr-only">Freelancers, agencies and Loraloop compared</caption>
              <thead>
                <tr>
                  <th scope="col" className="w-[22%] p-0" />
                  <th scope="col" className="px-4 pb-4 text-[15px] font-semibold text-[rgba(44,44,44,0.6)] md:px-6">
                    Freelancers
                  </th>
                  <th scope="col" className="px-4 pb-4 text-[15px] font-semibold text-[rgba(44,44,44,0.6)] md:px-6">
                    Agencies
                  </th>
                  <th
                    scope="col"
                    className="rounded-t-[20px] bg-[#094413] px-4 pb-4 pt-5 font-['Satoshi',sans-serif] text-[16px] font-bold text-[#f3f2ef] md:px-6"
                  >
                    Loraloop AI marketing team
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => {
                  const last = i === ROWS.length - 1;
                  return (
                    <tr key={row.label}>
                      <th
                        scope="row"
                        className={`border-t border-[#e3e1dc] py-4 pr-4 font-['Satoshi',sans-serif] text-[15px] font-bold text-[#2c2c2c] md:text-[16px] ${i === 0 ? "border-t-0" : ""}`}
                      >
                        {row.label}
                      </th>
                      <td className={`border-t border-[#e3e1dc] px-4 py-4 text-[15px] text-[rgba(44,44,44,0.6)] md:px-6 ${i === 0 ? "border-t-0" : ""}`}>
                        {row.freelancers}
                      </td>
                      <td className={`border-t border-[#e3e1dc] px-4 py-4 text-[15px] text-[rgba(44,44,44,0.6)] md:px-6 ${i === 0 ? "border-t-0" : ""}`}>
                        {row.agencies}
                      </td>
                      <td
                        className={`border-t border-[#e3e1dc] bg-white px-4 py-4 text-[15px] font-semibold text-[#2c2c2c] md:px-6 ${
                          last ? "rounded-b-[20px]" : ""
                        } ${i === 0 ? "border-t-0" : ""}`}
                      >
                        <span className="inline-flex items-center gap-2">
                          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#cfe9d3]">
                            <Check className="size-3 text-[#094413]" strokeWidth={3} aria-hidden="true" />
                          </span>
                          {row.loraloop}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </SectionPanel>
  );
}
