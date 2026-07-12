import { Sparkles } from "lucide-react";
import {
  CREDIT_ACTIONS,
  CREDIT_FOOTNOTES,
  CREDIT_YIELDS,
  creditsToUnits,
} from "../data/creditCosts";

/**
 * CreditUsageBlock — "Credit Usage" section rendered below the pricing plan
 * cards. Mirrors the in-app /pricing Credit Usage block and the Settings →
 * Billing & AI Credits table so pricing is identical across the product.
 *
 * Numbers come from src/app/data/creditCosts.ts (kept in sync with the main app).
 */

const sat = { fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 } as const;
const gen = { fontFamily: "General Sans, Inter, sans-serif" } as const;

const fmt = (n: number) => n.toLocaleString("en-US");

export default function CreditUsageBlock({
  planCredits,
}: {
  planCredits: { name: string; credits: number }[];
}) {
  return (
    <section className="w-full flex flex-col items-center gap-8">
      {/* Heading */}
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03]">
          <Sparkles className="w-3.5 h-3.5 text-[#1877F2]" />
          <span style={gen} className="text-[13px] text-[#9CA3AF]">
            Credit Usage
          </span>
        </div>
        <h2 style={sat} className="text-[28px] sm:text-[32px] text-white tracking-[-0.6px] leading-tight">
          One credit system, no surprises
        </h2>
        <p style={gen} className="max-w-[560px] text-[16px] text-[#9CA3AF] leading-relaxed">
          Every AI action spends credits from your monthly balance. Credits are charged only after a
          successful output — failed generations are never billed.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* ── Per-feature cost table ── */}
        <div
          className="overflow-hidden rounded-2xl border"
          style={{ background: "#131313", borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="px-5 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <h3 style={sat} className="text-[16px] text-white">
              What each action costs
            </h3>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {CREDIT_ACTIONS.map((a) => (
              <div key={a.label} className="flex items-center justify-between gap-4 px-5 py-3">
                <span style={gen} className="text-[15px] text-[#D1D5DB]">
                  {a.label}
                  {a.note && <span className="text-[#6B7280]">*</span>}
                </span>
                <span
                  style={gen}
                  className="shrink-0 text-[13px] text-[#9CA3AF] tabular-nums rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5"
                >
                  {a.creditsEach} {a.creditsEach === 1 ? "credit" : "credits"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── "What your credits get you" per plan ── */}
        <div
          className="overflow-hidden rounded-2xl border"
          style={{ background: "#131313", borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="px-5 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <h3 style={sat} className="text-[16px] text-white">
              What your monthly credits get you
            </h3>
            <p style={gen} className="mt-0.5 text-[13px] text-[#6B7280]">
              Spend them any way you like — these are single-feature maximums.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[12px] text-[#6B7280]" style={gen}>
                  <th className="px-5 py-3 font-medium">Plan</th>
                  {CREDIT_YIELDS.map((y) => (
                    <th key={y.label} className="px-3 py-3 font-medium text-right whitespace-nowrap">
                      <span className="mr-1">{y.icon}</span>
                      {y.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {planCredits.map((p) => (
                  <tr key={p.name} className="border-t border-white/[0.04]">
                    <td className="px-5 py-3">
                      <div style={sat} className="text-[14px] text-white">
                        {p.name}
                      </div>
                      <div style={gen} className="text-[12px] text-[#6B7280]">
                        {fmt(p.credits)} credits/mo
                      </div>
                    </td>
                    {CREDIT_YIELDS.map((y) => (
                      <td
                        key={y.label}
                        style={gen}
                        className="px-3 py-3 text-right text-[14px] text-[#D1D5DB] tabular-nums"
                      >
                        {y.cost > p.credits ? (
                          <span className="text-[#6B7280]">—</span>
                        ) : (
                          fmt(creditsToUnits(p.credits, y.cost))
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-5 py-3 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <p style={gen} className="text-[12px] text-[#6B7280]">
              e.g. a Growth plan (500 credits) makes ~500 images, ~250 blog articles, or ~6 short
              videos each month — or any mix.
            </p>
          </div>
        </div>
      </div>

      {/* Footnotes */}
      <div className="w-full max-w-[820px] space-y-1">
        {CREDIT_FOOTNOTES.map((f) => (
          <p key={f} style={gen} className="text-[12px] text-[#6B7280] leading-relaxed">
            *{f}
          </p>
        ))}
      </div>
    </section>
  );
}
