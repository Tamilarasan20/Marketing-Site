import React from "react";
import { AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont as loadSans } from "@remotion/google-fonts/Geist";
import { loadFont as loadMono } from "@remotion/google-fonts/GeistMono";

/*
 * Shared pieces for the site's looping product videos. Colours and type follow the
 * site's `.lx` design system (src/styles/site.css): dotted light-grey ground, ink and
 * grey text, mono kickers with a blue square, white app windows, blue buttons.
 * Every video shows example data for a sample brand (Brewly) and ends on an approval.
 */

export const sans = loadSans("normal", { weights: ["400", "500", "600"], subsets: ["latin"] }).fontFamily;
export const mono = loadMono("normal", { weights: ["400", "500"], subsets: ["latin"] }).fontFamily;

export const C = {
  ink: "#111110",
  slate: "#6f6f69",
  mute: "#9a9a93",
  line: "#e6e5e0",
  mist: "#efeee9",
  ground: "#f7f7f6",
  blue: "#2563eb",
  blueWash: "#e8efff",
  green: "#15803d",
  greenWash: "#e3f6ee",
  amber: "#a15c00",
  amberWash: "#fff3dc",
  red: "#c4321c",
};

export const FPS = 30;
export const W = 1280;
export const H = 720;
/** Every loop is this long; the timeline below is shared so the videos feel like one set. */
export const DURATION_S = 12;
export const T = { step2: 4.2, step3: 7.4, card: 7.6, cursor: 8.5, click: 9.5, done: 9.7, out: 11.3 };

export const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
export const ease = Easing.bezier(0.2, 0.7, 0.2, 1);

export const useT = () => useCurrentFrame() / useVideoConfig().fps;

/** 0 → 1 between two times, eased. */
export const prog = (t: number, a: number, dur = 0.6) => interpolate(t, [a, a + dur], [0, 1], { ...clamp, easing: ease });

/** Fade and slide up, starting at `at` seconds. */
export const rise = (t: number, at: number, dist = 14): React.CSSProperties => {
  const p = prog(t, at, 0.55);
  return { opacity: p, transform: `translateY(${(1 - p) * dist}px)` };
};

export const pop = (t: number, at: number): React.CSSProperties => {
  const s = spring({ frame: Math.round((t - at) * FPS), fps: FPS, config: { damping: 14, stiffness: 170 } });
  return { opacity: t >= at ? 1 : 0, transform: `scale(${0.82 + 0.18 * s})` };
};

/** Number easing up from 0 to `to`, formatted like the target string. */
export const count = (t: number, at: number, to: number, opts: { dur?: number; decimals?: number; pre?: string; post?: string; commas?: boolean } = {}) => {
  const { dur = 1.1, decimals = 0, pre = "", post = "", commas = true } = opts;
  const v = to * prog(t, at, dur);
  const s = commas ? v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) : v.toFixed(decimals);
  return pre + s + post;
};

export const Kicker: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: mono, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase", color: C.slate, ...style }}>
    <span style={{ width: 9, height: 9, borderRadius: 1.5, background: C.blue }} />
    {children}
  </div>
);

export type Tone = "grey" | "green" | "amber" | "blue" | "red";
export const Chip: React.FC<{ tone?: Tone; children: React.ReactNode; style?: React.CSSProperties }> = ({ tone = "grey", children, style }) => {
  const tones: Record<Tone, [string, string]> = {
    grey: ["#eef2f7", C.slate],
    green: [C.greenWash, C.green],
    amber: [C.amberWash, C.amber],
    blue: [C.blueWash, C.blue],
    red: ["#fdecea", C.red],
  };
  const [bg, fg] = tones[tone];
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 6, whiteSpace: "nowrap", borderRadius: 7, padding: "4px 9px", fontSize: 15, fontWeight: 500, background: bg, color: fg, ...style }}>{children}</span>;
};

/** "Needs OK" that flips to "Approved" at `at`. */
export const ApprovalChip: React.FC<{ t: number; at: number }> = ({ t, at }) => (
  <span style={{ display: "inline-grid" }}>
    <Chip tone="amber" style={{ gridArea: "1/1", opacity: t < at ? 1 : 0 }}>Needs OK</Chip>
    <Chip tone="green" style={{ gridArea: "1/1", ...(t >= at ? pop(t, at) : { opacity: 0 }) }}>✓ Approved</Chip>
  </span>
);

export const Avatar: React.FC<{ name: string; color: string; size?: number }> = ({ name, color, size = 30 }) => (
  <span style={{ width: size, height: size, borderRadius: 999, background: color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: size * 0.47, fontWeight: 600, flexShrink: 0 }}>{name[0]}</span>
);

export const cap: React.CSSProperties = { fontSize: 13, fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase", color: C.mute };
export const box: React.CSSProperties = { border: `1.5px solid ${C.line}`, borderRadius: 10, background: "#fff" };

/** Window geometry, shared so the cursor can find the Approve button. */
export const WIN = { x: 486, y: 70, w: 734, h: 580, head: 46 };
const CARD = { w: 452, h: 186, pad: 22, right: 26, bottom: 26 };
const BTN = { w: 132, h: 44 };
const btnCenter = {
  x: WIN.x + WIN.w - CARD.right - CARD.w + CARD.pad + BTN.w / 2,
  y: WIN.y + WIN.h - CARD.bottom - CARD.pad - BTN.h / 2,
};

export const AGENT_COLORS = { Lora: "#1f5eff", Angie: "#12b5e8", Sophie: "#6d5bff", Clara: "#e0663f" } as const;

export interface LoopProps {
  kicker: string;
  /** Three short steps; the last one is always the approval. */
  steps: [string, string, string];
  title: string;
  right?: string;
  /** Window body, drawn with the scene time in seconds. */
  body: (t: number) => React.ReactNode;
  approval: { agent: keyof typeof AGENT_COLORS; ask: string; detail: string; button?: string; after: string };
}

/**
 * The frame every video shares: kicker and a three-step list on the left (the active step
 * in ink), the agent's app window on the right, then an approval card the cursor approves.
 * Opens and closes on the bare ground so the loop seam is invisible.
 */
export const Loop: React.FC<LoopProps> = ({ kicker, steps, title, right, body, approval }) => {
  const t = useT();
  const active = t < T.step2 ? 0 : t < T.step3 ? 1 : 2;
  const fade = Math.min(prog(t, 0, 0.5), 1 - prog(t, T.out, 0.6));
  const cardIn = prog(t, T.card, 0.6);
  const done = t >= T.done;

  // Cursor glides in from the lower right, presses, then rests.
  const travel = prog(t, T.cursor, 0.95);
  const cx = interpolate(travel, [0, 1], [W + 40, btnCenter.x + 18]);
  const cy = interpolate(travel, [0, 1], [H + 30, btnCenter.y + 10]);
  const press = t >= T.click && t < T.click + 0.16 ? 0.88 : 1;
  const ring = prog(t, T.click, 0.5);

  return (
    <AbsoluteFill style={{ background: C.ground, fontFamily: sans, color: C.ink, letterSpacing: "-0.006em" }}>
      <AbsoluteFill style={{ backgroundImage: "radial-gradient(rgba(17,17,16,0.08) 1.4px, transparent 1.4px)", backgroundSize: "26px 26px" }} />
      <AbsoluteFill style={{ opacity: fade }}>
        {/* Left: kicker and steps */}
        <div style={{ position: "absolute", left: 64, top: 96, width: 396 }}>
          <Kicker>{kicker}</Kicker>
          <ol style={{ listStyle: "none", margin: "44px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 26 }}>
            {steps.map((s, i) => {
              const on = i === active;
              const past = i < active;
              return (
                <li key={s} style={{ display: "flex", gap: 16, alignItems: "baseline", ...rise(t, 0.25 + i * 0.12) }}>
                  <span style={{ fontFamily: mono, fontSize: 15, color: on ? C.blue : C.mute, width: 26 }}>{past ? "✓" : `0${i + 1}`}</span>
                  <span style={{ fontSize: 30, lineHeight: 1.15, letterSpacing: "-0.03em", textWrap: "balance", color: on ? C.ink : "#b4b4ad" }}>{s}</span>
                </li>
              );
            })}
          </ol>
        </div>
        <div style={{ position: "absolute", left: 64, bottom: 54, fontFamily: mono, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: C.mute }}>Example data · sample brand</div>

        {/* Right: app window */}
        <div style={{ position: "absolute", left: WIN.x, top: WIN.y, width: WIN.w, height: WIN.h, ...box, borderRadius: 16, overflow: "hidden", boxShadow: "0 40px 70px -40px rgba(17,17,16,0.35)", ...rise(t, 0.1, 24) }}>
          <div style={{ height: WIN.head, display: "flex", alignItems: "center", gap: 10, padding: "0 18px", borderBottom: `1.5px solid ${C.line}`, background: "#fafaf9" }}>
            <span style={{ display: "flex", gap: 7 }}>{[0, 1, 2].map((i) => <span key={i} style={{ width: 11, height: 11, borderRadius: 99, background: "#dfe5ee" }} />)}</span>
            <span style={{ flex: 1, textAlign: "center", fontSize: 15, fontWeight: 500, color: C.mute }}>{title}</span>
            <span style={{ fontSize: 14, color: C.mute, minWidth: 60, textAlign: "right" }}>{right}</span>
          </div>
          <div style={{ position: "relative", height: WIN.h - WIN.head, padding: 24, fontSize: 17, fontVariantNumeric: "tabular-nums" }}>
            {body(t)}
            {/* Dim the work behind the approval card */}
            <div style={{ position: "absolute", inset: 0, background: "rgba(247,247,246,0.6)", opacity: cardIn }} />
            <div style={{ position: "absolute", right: CARD.right, bottom: CARD.bottom, width: CARD.w, height: CARD.h, padding: CARD.pad, ...box, borderRadius: 14, boxShadow: "0 24px 50px -24px rgba(17,17,16,0.4)", opacity: cardIn, transform: `translateY(${(1 - cardIn) * 30}px)`, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Avatar name={approval.agent} color={AGENT_COLORS[approval.agent]} size={26} />
                <span style={{ fontSize: 14, color: C.slate }}>{done ? approval.agent : `${approval.agent} · waiting for you`}</span>
                <span style={{ marginLeft: "auto" }}><ApprovalChip t={t} at={T.done} /></span>
              </div>
              <div style={{ marginTop: 12, fontSize: 19, fontWeight: 500, lineHeight: 1.25 }}>{approval.ask}</div>
              <div style={{ marginTop: 4, fontSize: 14.5, color: C.slate }}>{done ? approval.after : approval.detail}</div>
              <div style={{ marginTop: "auto", display: "flex", gap: 10 }}>
                <span style={{ width: BTN.w, height: BTN.h, borderRadius: 9, background: C.blue, opacity: done ? 0.4 : 1, color: "#fff", fontWeight: 500, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", transform: `scale(${press})` }}>{approval.button ?? "Approve"}</span>
                <span style={{ height: BTN.h, padding: "0 18px", borderRadius: 9, border: `1.5px solid ${C.line}`, fontWeight: 500, fontSize: 16, display: "flex", alignItems: "center" }}>Edit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cursor and click ring */}
        {t >= T.click && ring < 1 && (
          <div style={{ position: "absolute", left: btnCenter.x - 28, top: btnCenter.y - 28, width: 56, height: 56, borderRadius: 99, border: `2px solid ${C.blue}`, opacity: 1 - ring, transform: `scale(${0.4 + ring})` }} />
        )}
        <svg width="26" height="30" viewBox="0 0 26 30" style={{ position: "absolute", left: cx, top: cy, transform: `scale(${press})`, transformOrigin: "0 0", filter: "drop-shadow(0 3px 4px rgba(0,0,0,0.25))" }}>
          <path d="M2 2 L2 24 L8 18.5 L12.5 28 L16.5 26.2 L12 17 L20 17 Z" fill={C.ink} stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
