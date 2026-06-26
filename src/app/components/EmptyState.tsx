import { Link } from "react-router";
import { cn } from "./ui/utils";

interface EmptyStateAction {
  label: string;
  href?: string;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

interface EmptyStateProps {
  emoji?: string;
  title: string;
  description?: string;
  actions?: EmptyStateAction[];
  className?: string;
  compact?: boolean;
}

/**
 * Reusable empty-state component.
 * Use wherever a page section has no data yet — campaigns, assets, approvals, etc.
 *
 * @example
 * <EmptyState
 *   emoji="📅"
 *   title="Your calendar is empty"
 *   description="Once Lora creates your first campaign, scheduled posts will appear here."
 *   actions={[
 *     { label: "Create first campaign", to: "/chat", variant: "primary" },
 *     { label: "Connect social accounts", to: "/integrations" },
 *   ]}
 * />
 */
export default function EmptyState({
  emoji = "✦",
  title,
  description,
  actions = [],
  className,
  compact = false,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center",
        compact ? "gap-4 py-10" : "gap-6 py-16 md:py-24",
        "max-w-[420px] mx-auto px-4",
        className
      )}
    >
      {/* Emoji illustration */}
      <div
        className={cn(
          "rounded-2xl bg-[#f1f5f9] flex items-center justify-center select-none",
          compact ? "w-12 h-12 text-2xl" : "w-16 h-16 text-3xl"
        )}
        aria-hidden="true"
      >
        {emoji}
      </div>

      {/* Copy */}
      <div className="flex flex-col gap-2">
        <h3
          className={cn(
            "font-['Satoshi',sans-serif] font-bold text-[#0f172a] leading-tight",
            compact ? "text-lg" : "text-xl md:text-2xl"
          )}
        >
          {title}
        </h3>
        {description && (
          <p
            className={cn(
              "font-['General_Sans',sans-serif] font-medium text-[#64748b] leading-relaxed",
              compact ? "text-sm" : "text-base md:text-lg"
            )}
          >
            {description}
          </p>
        )}
      </div>

      {/* Actions */}
      {actions.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
          {actions.map((action, i) => {
            const isPrimary = action.variant === "primary" || i === 0;
            const baseClass = cn(
              "w-full sm:w-auto inline-flex items-center justify-center rounded-full px-5 py-2.5",
              "font-['Satoshi',sans-serif] font-bold text-sm transition-colors duration-150",
              isPrimary
                ? "bg-[#1877f2] text-white hover:bg-[#1565c0] active:bg-[#1256b0]"
                : "bg-white border border-[#e2e8f0] text-[#374151] hover:bg-[#f8fafc] hover:border-[#cbd5e1]"
            );

            if (action.onClick) {
              return (
                <button key={i} type="button" onClick={action.onClick} className={baseClass}>
                  {action.label}
                </button>
              );
            }
            if (action.to) {
              return (
                <Link key={i} to={action.to} className={baseClass}>
                  {action.label}
                </Link>
              );
            }
            if (action.href) {
              return (
                <a key={i} href={action.href} className={baseClass}>
                  {action.label}
                </a>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
}
