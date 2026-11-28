import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "../ui/utils";

/** 1200px column with Stripe-style guide lines at its edges (frame=true). */
export function Container({ className, frame = false, children }: { className?: string; frame?: boolean; children: ReactNode }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px]", className)} data-frame={frame || undefined}>
      <div className="px-5 sm:px-8 lg:px-12">{children}</div>
    </div>
  );
}

type Tone = "white" | "mist" | "navy";

export function Section({
  tone = "white",
  id,
  className,
  children,
  "aria-labelledby": labelledBy,
  frame = true,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  children: ReactNode;
  "aria-labelledby"?: string;
  frame?: boolean;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn(className)} data-tone={tone}>
      <Container frame={frame} className="py-20 md:py-28">
        {children}
      </Container>
    </section>
  );
}

export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("lx-kicker", className)}>{children}</p>;
}

/** Two-tone headline: strong lead in ink, the rest in slate (Stripe pattern). */
export function Heading({
  lead,
  rest,
  as: Tag = "h2",
  id,
  className,
  display = false,
}: {
  lead: ReactNode;
  rest?: ReactNode;
  as?: ElementType;
  id?: string;
  className?: string;
  display?: boolean;
}) {
  return (
    <Tag id={id} className={cn(display ? "lx-display" : "lx-h2", className)}>
      <span>{lead}</span>
      {rest ? (
        <>
          {" "}
          <span className="lx-soft">{rest}</span>
        </>
      ) : null}
    </Tag>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";

const BUTTON: Record<ButtonVariant, string> = {
  primary: "bg-[var(--lx-blue)] text-white hover:bg-[var(--lx-blue-ink)]",
  secondary: "bg-white text-[var(--lx-ink)] border border-[var(--lx-line)] hover:border-[#cfcec8]",
  ghost: "text-[var(--lx-blue)] hover:text-[var(--lx-blue-ink)] px-0",
  light: "bg-white text-[var(--lx-ink)] hover:bg-[#f1f1ee]",
};

type ButtonProps = {
  variant?: ButtonVariant;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
} & (
  | ({ href: string; to?: never } & Omit<ComponentPropsWithoutRef<"a">, "className" | "children">)
  | ({ to: string; href?: never } & Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children" | "to">)
);

/** 44px button, 8px radius. Use `arrow` for the Stripe-style chevron. */
export function Button(props: ButtonProps) {
  const { variant = "primary", arrow = false, className, children, ...rest } = props;
  const cls = cn(
    "group inline-flex h-11 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-5 text-[15px] font-medium transition-colors",
    BUTTON[variant],
    className,
  );
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />}
    </>
  );
  if ("to" in rest && rest.to !== undefined) {
    const { to, ...linkRest } = rest as { to: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "to">;
    return (
      <Link to={to} {...linkRest} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <a {...(rest as ComponentPropsWithoutRef<"a">)} className={cls}>
      {inner}
    </a>
  );
}

export const SIGNUP_URL = "https://app.loraloop.com/signup";

/** Bordered white tile, the unit of every grid on the site. */
export function Tile({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("rounded-[20px] bg-[var(--lx-mist)]", className)}>{children}</div>;
}
