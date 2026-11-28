import React from "react";
import { AGENT_COLORS, ApprovalChip, Avatar, C, Chip, Loop, T, box, cap, count, prog, rise, mono } from "./kit";

/*
 * Example data for a fictional coffee subscription brand (Brewly). Every scenario here is
 * Loraloop's own: a weekly check-in, a gift-season plan, a creative refresh, an AI-answer
 * audit and a win-back sequence. Each one ends on the owner's approval.
 */

const Row: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", ...box, ...style }}>{children}</div>
);
const Up: React.FC<{ children: React.ReactNode }> = ({ children }) => <span style={{ fontSize: 14, fontWeight: 500, color: C.green }}>▲ {children}</span>;

/** Small line chart that draws itself between `at` and `at + dur`. */
const Spark: React.FC<{ t: number; at: number; pts: number[]; color: string; w?: number; h?: number }> = ({ t, at, pts, color, w = 120, h = 34 }) => {
  const max = Math.max(...pts), min = Math.min(...pts);
  const d = pts.map((p, i) => `${i ? "L" : "M"}${(i / (pts.length - 1)) * w},${h - 3 - ((p - min) / (max - min || 1)) * (h - 6)}`).join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <path d={d} fill="none" stroke={color} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - prog(t, at, 1.2)} />
    </svg>
  );
};

/* ─── Home: weekly check-in, the team's proposals, one approval ─────────── */
export const HomeLoop: React.FC = () => (
  <Loop
    kicker="Loraloop · your AI marketing team"
    steps={["Checks your store, ads and email", "Each specialist proposes a fix", "You approve. Then it ships."]}
    title="Lora · Weekly check-in"
    right="Fri 4:00 PM"
    approval={{ agent: "Lora", ask: "Approve 3 changes for next week?", detail: "Open each one to edit before it goes out.", button: "Approve all", after: "Approved by you. Work starts Monday." }}
    body={(t) => (
      <div>
        <div style={{ fontSize: 22, fontWeight: 500, ...rise(t, 0.5) }}>This week at Brewly</div>
        <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {[
            ["Orders", count(t, 0.9, 312), "8%", [4, 5, 4, 6, 7, 6, 8]],
            ["Cost per order", count(t, 1.0, 21.4, { decimals: 2, pre: "$" }), "6%", [8, 7, 7, 6, 6, 5, 5]],
            ["Email share", count(t, 1.1, 31, { post: "%" }), "4 pts", [3, 4, 4, 5, 5, 6, 7]],
          ].map(([k, v, d, pts], i) => (
            <div key={k as string} style={{ ...box, padding: "13px 16px", ...rise(t, 0.7 + i * 0.12) }}>
              <div style={cap}>{k as string}</div>
              <div style={{ marginTop: 6, display: "flex", alignItems: "baseline", gap: 8 }}><span style={{ fontFamily: mono, fontSize: 25, fontWeight: 500 }}>{v as string}</span><Up>{d as string}</Up></div>
              <div style={{ marginTop: 6 }}><Spark t={t} at={1.2 + i * 0.15} pts={pts as number[]} color={C.blue} w={170} h={26} /></div>
            </div>
          ))}
        </div>
        <div style={{ ...cap, marginTop: 22, ...rise(t, T.step2 - 0.2) }}>Proposed for next week</div>
        <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 9 }}>
          {([
            ["Angie", "Swap the tired 'Morning ritual' ad for 2 new cuts", "Meta"],
            ["Sophie", "Update the espresso beans guide with a gift section", "Blog"],
            ["Clara", "Restock email for Ethiopia Guji to the waitlist", "Klaviyo"],
          ] as const).map(([who, what, ch], i) => (
            <Row key={what} style={rise(t, T.step2 + 0.15 + i * 0.4)}>
              <Avatar name={who} color={AGENT_COLORS[who]} size={28} />
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: "block", fontWeight: 500 }}>{what}</span>
                <span style={{ fontSize: 14, color: C.mute }}>{who} · {ch}</span>
              </span>
              <ApprovalChip t={t} at={T.done + 0.15 * i} />
            </Row>
          ))}
        </div>
      </div>
    )}
  />
);

/* ─── Lora: gift-season plan as a timeline ──────────────────────────────── */
export const LoraLoop: React.FC = () => {
  const weeks = ["Dec 1", "Dec 8", "Dec 15", "Dec 22"];
  const lanes = [
    { who: "Sophie", what: "Gift guide + 3 posts", from: 0, len: 1.6 },
    { who: "Angie", what: "Gift-sub ads, Meta and Google", from: 0.6, len: 2.6 },
    { who: "Clara", what: "Gift reminder emails", from: 1.4, len: 2.2 },
    { who: "Lora", what: "Weekly read-out", from: 0, len: 4 },
  ] as const;
  return (
    <Loop
      kicker="Lora · AI marketing lead"
      steps={["Reads last season's results", "Lays out who does what, when", "Starts once you approve"]}
      title="Lora"
      right="Gift season"
      approval={{ agent: "Lora", ask: "Approve the gift-season plan?", detail: "Sophie, Angie and Clara get their tasks after you approve.", after: "Approved by you. Tasks sent to the team." }}
      body={(t) => (
        <div>
          <div style={{ display: "flex", justifyContent: "flex-end", ...rise(t, 0.4) }}>
            <span style={{ background: C.blue, color: "#fff", borderRadius: "14px 14px 4px 14px", padding: "10px 16px" }}>Plan December around gift subscriptions.</span>
          </div>
          <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 10, ...rise(t, 1.1) }}>
            <Avatar name="Lora" color={AGENT_COLORS.Lora} size={28} />
            <span style={{ fontWeight: 500 }}>{t < 2.6 ? "Comparing last December with this year…" : "Gift-season plan · 4 weeks"}</span>
          </div>
          <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[["Target", "400 gift subscriptions"], ["Budget", "$9,000 for the month"]].map(([k, v], i) => (
              <div key={k} style={{ ...box, padding: "10px 16px", ...rise(t, 2.6 + i * 0.15) }}><div style={cap}>{k}</div><div style={{ marginTop: 3, fontWeight: 500 }}>{v}</div></div>
            ))}
          </div>
          <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "120px repeat(4, 1fr)", ...cap, ...rise(t, T.step2 - 0.2) }}>
            <span />{weeks.map((w) => <span key={w}>{w}</span>)}
          </div>
          <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 9 }}>
            {lanes.map((l, i) => {
              const at = T.step2 + i * 0.35;
              return (
                <div key={l.what} style={{ display: "grid", gridTemplateColumns: "120px 1fr", alignItems: "center", ...rise(t, at, 6) }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15 }}><Avatar name={l.who} color={AGENT_COLORS[l.who]} size={22} />{l.who}</span>
                  <div style={{ position: "relative", height: 34, borderRadius: 8, background: "repeating-linear-gradient(90deg, transparent 0 calc(25% - 1px), #ebeae5 calc(25% - 1px) 25%)" }}>
                    <div style={{ position: "absolute", top: 3, bottom: 3, left: `${(l.from / 4) * 100}%`, width: `${(l.len / 4) * 100 * prog(t, at + 0.1, 0.7)}%`, borderRadius: 7, background: `${AGENT_COLORS[l.who]}22`, border: `1.5px solid ${AGENT_COLORS[l.who]}66`, overflow: "hidden", whiteSpace: "nowrap", fontSize: 14, padding: "4px 10px", color: C.ink }}>{l.what}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    />
  );
};

/* ─── Angie: creative fatigue, two new cuts, same budget ────────────────── */
export const AngieLoop: React.FC = () => {
  const ads = [
    { n: "Morning ritual", fmt: "Reel · 15s", g: "linear-gradient(150deg,#e8c39e,#8a5a36)", ctr: [2.4, 2.3, 2.1, 1.8, 1.5, 1.2, 0.9], freq: "4.8", tired: true },
    { n: "Roaster's notes", fmt: "Carousel", g: "linear-gradient(150deg,#c9d8f2,#4a6fb8)", ctr: [1.6, 1.7, 1.9, 1.8, 2.0, 2.1, 2.2], freq: "2.1", tired: false },
    { n: "Gift box unboxing", fmt: "Story · 9s", g: "linear-gradient(150deg,#f0d3dc,#b0607e)", ctr: [1.9, 2.0, 2.0, 2.2, 2.1, 2.3, 2.4], freq: "1.7", tired: false },
  ];
  const cuts = [["Pour-over, top-down", "linear-gradient(150deg,#d9ead9,#5d8f6a)"], ["Customer voice note", "linear-gradient(150deg,#efe3c2,#a8873a)"]];
  return (
    <Loop
      kicker="Angie · AI ads manager"
      steps={["Spots ads your buyers are tired of", "Drafts fresh cuts on the same budget", "Launches only after your OK"]}
      title="Angie · Meta creatives"
      right="Last 7 days"
      approval={{ agent: "Angie", ask: "Launch 2 new cuts, pause 'Morning ritual'?", detail: "Same daily budget. No extra spend.", button: "Launch", after: "Approved by you. Live in Meta in a few minutes." }}
      body={(t) => {
        const swap = prog(t, T.step2, 0.5);
        return (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {ads.map((a, i) => (
                <div key={a.n} style={{ ...box, padding: 12, borderColor: a.tired && t > 2.6 ? "#f1c8c0" : C.line, ...rise(t, 0.5 + i * 0.15) }}>
                  <div style={{ height: 92, borderRadius: 8, background: a.g, opacity: a.tired ? 1 - swap * 0.55 : 1 }} />
                  <div style={{ marginTop: 9, fontWeight: 500 }}>{a.n}</div>
                  <div style={{ fontSize: 13, color: C.mute }}>{a.fmt}</div>
                  <div style={{ marginTop: 8, display: "flex", justifyContent: "space-between", alignItems: "end" }}>
                    <span><span style={cap}>CTR</span><br /><span style={{ fontFamily: mono, fontWeight: 500, color: a.tired && t > 2.6 ? C.red : C.ink }}>{a.ctr[a.ctr.length - 1].toFixed(1)}%</span></span>
                    <Spark t={t} at={1.1 + i * 0.15} pts={a.ctr} color={a.tired ? C.red : C.green} w={84} h={30} />
                  </div>
                  <div style={{ marginTop: 6, fontSize: 13, color: a.tired && t > 2.6 ? C.red : C.mute }}>Seen {a.freq}x per person</div>
                </div>
              ))}
            </div>
            <div style={{ ...cap, marginTop: 18, ...rise(t, T.step2) }}>Drafted to replace it</div>
            <div style={{ marginTop: 8, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {cuts.map(([n, g], i) => (
                <Row key={n} style={{ padding: 10, ...rise(t, T.step2 + 0.3 + i * 0.35) }}>
                  <span style={{ width: 58, height: 46, borderRadius: 7, background: g, flexShrink: 0 }} />
                  <span style={{ flex: 1 }}><span style={{ display: "block", fontWeight: 500, fontSize: 16 }}>{n}</span><span style={{ fontSize: 13, color: C.mute }}>Reel · from your product shots</span></span>
                </Row>
              ))}
            </div>
          </div>
        );
      }}
    />
  );
};

/* ─── Sophie: what AI assistants say about you, then the fix ────────────── */
export const SophieLoop: React.FC = () => {
  const prompts = [
    { q: "best coffee subscription for beginners", r: [true, false, true] },
    { q: "coffee gift subscription under $50", r: [false, false, true] },
    { q: "single origin coffee delivered monthly", r: [true, true, false] },
  ];
  const faqs = ["Which roast should a beginner start with?", "Can I gift 3 months and pause after?", "How fresh is the coffee when it ships?"];
  return (
    <Loop
      kicker="Sophie · AI SEO and GEO strategist"
      steps={["Asks AI assistants what buyers ask", "Writes answers where you're missing", "Publishes after your OK"]}
      title="Sophie · AI answers"
      right="Checked today"
      approval={{ agent: "Sophie", ask: "Publish 3 answers to brewly.com/gifts?", detail: "Adds an FAQ section and schema. On brand.", button: "Publish", after: "Approved by you. Published to your site." }}
      body={(t) => (
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 92px 96px 82px", ...cap, padding: "0 14px 8px", ...rise(t, 0.4) }}>
            <span>Buyer question</span><span>ChatGPT</span><span>Perplexity</span><span>Gemini</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {prompts.map((p, i) => (
              <div key={p.q} style={{ ...box, display: "grid", gridTemplateColumns: "1fr 92px 96px 82px", alignItems: "center", padding: "10px 14px", fontSize: 16, ...rise(t, 0.6 + i * 0.2) }}>
                <span>“{p.q}”</span>
                {p.r.map((hit, j) => {
                  const at = 1.4 + i * 0.3 + j * 0.12;
                  return <span key={j} style={{ opacity: prog(t, at, 0.3) }}>{hit ? <Chip tone="green">Named</Chip> : <Chip tone="red">Missing</Chip>}</span>;
                })}
              </div>
            ))}
          </div>
          <div style={{ ...cap, marginTop: 18, ...rise(t, T.step2 - 0.1) }}>Draft · FAQ for brewly.com/gifts</div>
          <div style={{ ...box, marginTop: 8, padding: "12px 16px", ...rise(t, T.step2) }}>
            {faqs.map((f, i) => (
              <div key={f} style={{ display: "flex", gap: 10, alignItems: "center", padding: "5px 0", ...rise(t, T.step2 + 0.3 + i * 0.35, 6) }}>
                <span style={{ fontFamily: mono, fontSize: 13, color: C.blue }}>Q{i + 1}</span>
                <span style={{ flex: 1 }}>{f}</span>
                <span style={{ width: 80 * prog(t, T.step2 + 0.5 + i * 0.35, 0.8), height: 6, borderRadius: 99, background: "#dfe6f3" }} />
              </div>
            ))}
          </div>
        </div>
      )}
    />
  );
};

/* ─── Clara: lapsed-subscriber win-back on a timeline ───────────────────── */
export const ClaraLoop: React.FC = () => {
  const emails = [
    { day: "Day 0", subj: "Your shelf looks empty", note: "Picks their last roast" },
    { day: "Day 4", subj: "A roast we think you'll like", note: "Based on past orders" },
    { day: "Day 9", subj: "Your next bag ships free", note: "Free shipping, no code" },
  ];
  return (
    <Loop
      kicker="Clara · AI email marketer"
      steps={["Finds subscribers who drifted away", "Writes a win-back series in your voice", "Sends after your OK"]}
      title="Clara · Klaviyo"
      right="Draft"
      approval={{ agent: "Clara", ask: "Schedule the win-back series?", detail: "3 emails to 1,240 lapsed subscribers.", button: "Schedule", after: "Approved by you. First email goes Tuesday." }}
      body={(t) => (
        <div>
          <div style={{ ...box, padding: "14px 16px", display: "flex", alignItems: "center", gap: 14, ...rise(t, 0.5) }}>
            <span style={{ flex: 1 }}>
              <span style={cap}>Segment</span>
              <span style={{ display: "block", marginTop: 4, fontWeight: 500 }}>Subscribers with no order in 90 days</span>
            </span>
            <span style={{ fontFamily: mono, fontSize: 28, fontWeight: 500 }}>{count(t, 1.0, 1240, { dur: 1.6 })}</span>
          </div>
          <div style={{ marginTop: 10, display: "flex", gap: 8, ...rise(t, 1.8) }}>
            {["Paused subscription", "Opened in last 30 days", "US and Canada"].map((f) => <Chip key={f}>{f}</Chip>)}
          </div>
          <div style={{ ...cap, marginTop: 22, ...rise(t, T.step2 - 0.2) }}>Win-back series</div>
          <div style={{ position: "relative", marginTop: 12 }}>
            <div style={{ position: "absolute", left: 18, right: 18, top: 15, height: 2, background: C.line, transformOrigin: "left", transform: `scaleX(${prog(t, T.step2, 1.2)})` }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {emails.map((e, i) => (
                <div key={e.day} style={rise(t, T.step2 + 0.3 + i * 0.4)}>
                  <span style={{ position: "relative", display: "inline-block", fontFamily: mono, fontSize: 13, background: C.blueWash, color: C.blue, borderRadius: 99, padding: "6px 12px" }}>{e.day}</span>
                  <div style={{ ...box, marginTop: 10, padding: 12 }}>
                    <div style={{ height: 54, borderRadius: 6, background: ["linear-gradient(150deg,#efe1cf,#b7865a)", "linear-gradient(150deg,#d8e4f5,#5b7fc0)", "linear-gradient(150deg,#e4efdf,#6c9a5f)"][i] }} />
                    <div style={{ marginTop: 8, fontWeight: 500, fontSize: 15.5, lineHeight: 1.25 }}>{e.subj}</div>
                    <div style={{ fontSize: 13, color: C.mute, marginTop: 2 }}>{e.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    />
  );
};
