import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "../ui/utils";

/* ─── Layout ───────────────────────────────────────────────────────────────── */

/** 1200px content column with a 16px gutter on phones. */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

type PanelTone = "white" | "taupe-50" | "taupe-100" | "taupe-200" | "ink";

// v3 neutrals: the "taupe" names are kept so section code does not change.
const PANEL_BG: Record<PanelTone, string> = {
  white: "bg-white",
  "taupe-50": "bg-[#f7f7f5]",
  "taupe-100": "bg-[#f3f2ef]",
  "taupe-200": "bg-[#efede8]",
  ink: "hv-ink",
};

/**
 * Full-bleed section "sheet": rounded top corners, pulled up over the previous
 * section so the page reads as a stack of panels. Later panels paint above
 * earlier ones because each is its own stacking context in DOM order.
 */
export function SectionPanel({
  tone = "white",
  overlap = true,
  id,
  className,
  children,
  "aria-labelledby": labelledBy,
}: {
  tone?: PanelTone;
  overlap?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
  "aria-labelledby"?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative isolate w-full rounded-t-[32px] md:rounded-t-[64px]",
        "pt-20 pb-28 md:pt-[128px] md:pb-[176px]",
        overlap && "-mt-12 md:-mt-16",
        PANEL_BG[tone],
        className,
      )}
    >
      {children}
    </section>
  );
}

/* ─── Type ─────────────────────────────────────────────────────────────────── */

/** Two-tone headline: the lead phrase in full ink, the rest at 85%. */
export function TwoTone({
  lead,
  rest,
  as: Tag = "h2",
  id,
  className,
  onDark = false,
}: {
  lead: ReactNode;
  rest?: ReactNode;
  as?: ElementType;
  id?: string;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Tag id={id} className={cn("hv-h2", className)}>
      <span className={onDark ? "text-white" : "text-[#2c2c2c]"}>{lead}</span>
      {rest ? (
        <>
          {" "}
          <span className={onDark ? "text-white/75" : "text-[rgba(44,44,44,0.55)]"}>{rest}</span>
        </>
      ) : null}
    </Tag>
  );
}

/** Monospace section label with a green square, Helena-style. Use above section headings. */
export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("hv-label", className)}>{children}</span>;
}

/** Small uppercase-free eyebrow pill above a heading. */
export function Eyebrow({
  children,
  className,
  onDark = false,
}: {
  children: ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  // v3: every eyebrow renders as the monospace label (green square + caps).
  return <span className={cn("hv-label", onDark && "!text-white/70", className)}>{children}</span>;
}

/* ─── Buttons ──────────────────────────────────────────────────────────────── */

type ButtonVariant = "primary" | "secondary" | "on-green-primary" | "on-green-secondary";

const BUTTON_BASE =
  "inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-[15px] font-medium leading-none tracking-[-0.01em] transition-[background-color,transform,color] duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2";

const BUTTON_VARIANT: Record<ButtonVariant, string> = {
  primary: "bg-[#141412] text-white hover:bg-[#2a2a27]",
  secondary: "bg-[#efede8] text-[#141412] hover:bg-[#e6e3dc]",
  "on-green-primary": "bg-white text-[#141412] hover:bg-[#e9e8e4]",
  "on-green-secondary": "bg-white/10 text-white hover:bg-white/20 border border-white/15",
};

type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & (
  | ({ href: string; to?: never } & Omit<ComponentPropsWithoutRef<"a">, "className" | "children">)
  | ({ to: string; href?: never } & Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children" | "to">)
  | ({ href?: never; to?: never } & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">)
);

/**
 * 48px CTA. Renders an <a> for `href`, a router <Link> for `to`, else a <button>.
 * Note: Layout redirects any element whose text is exactly "Get Started" /
 * "Join Waitlist" to the app sign-up, so use those labels only when that is wanted.
 */
export function Button(props: ButtonProps) {
  const { variant = "primary", className, children, ...rest } = props;
  const cls = cn(BUTTON_BASE, BUTTON_VARIANT[variant], className);
  if ("href" in rest && rest.href !== undefined) {
    return (
      <a {...(rest as ComponentPropsWithoutRef<"a">)} className={cls}>
        {children}
      </a>
    );
  }
  if ("to" in rest && rest.to !== undefined) {
    const { to, ...linkRest } = rest as { to: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "to">;
    return (
      <Link to={to} {...linkRest} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" {...(rest as ComponentPropsWithoutRef<"button">)} className={cls}>
      {children}
    </button>
  );
}

/* ─── Gradient panel ───────────────────────────────────────────────────────── */

export type GradientTone = "green" | "forest" | "violet";

/** Faint topographic arcs, drawn once and reused by every gradient panel. */
function ContourArcs() {
  const rings = Array.from({ length: 14 }, (_, i) => i);
  return (
    <svg className="hv-contour__arcs" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        {rings.map((i) => (
          <ellipse key={`a${i}`} cx="980" cy="760" rx={120 + i * 64} ry={80 + i * 46} transform={`rotate(-14 980 760)`} />
        ))}
        {rings.slice(0, 9).map((i) => (
          <ellipse key={`b${i}`} cx="140" cy="60" rx={90 + i * 58} ry={60 + i * 40} transform={`rotate(18 140 60)`} />
        ))}
      </g>
    </svg>
  );
}

/**
 * Green (or violet / forest) gradient surface with contour arcs and grain.
 * The effects sit in a clipped layer, so children may overflow the edges.
 */
export function ContourGradient({
  tone = "green",
  className,
  children,
}: {
  tone?: GradientTone;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("hv-contour hv-on-dark", className)} data-tone={tone}>
      <div className="hv-contour__fx" aria-hidden="true">
        <ContourArcs />
        <div className="hv-grain" />
      </div>
      {children}
    </div>
  );
}

/* ─── Motion ───────────────────────────────────────────────────────────────── */

/** Fade-and-rise on first scroll into view; static when reduced motion is on. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
