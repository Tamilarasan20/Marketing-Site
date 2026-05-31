import type { CSSProperties } from "react";
import { cn } from "./ui/utils";

interface SkeletonProps {
  className?: string;
  style?: CSSProperties;
}

/** Base shimmer block. Wrap with layout classes to match the real content. */
export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn("skeleton", className)} aria-hidden="true" />;
}

/** 3-column grid of blog-card skeletons */
export function BlogCardsSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col rounded-2xl border border-[#e2e8f0] overflow-hidden bg-white">
          <Skeleton className="h-[220px] w-full rounded-none" />
          <div className="flex flex-col gap-3 p-5">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-4 w-12 rounded-full" />
            </div>
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-5 w-4/5" />
            <div className="flex flex-col gap-1.5 mt-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <Skeleton className="h-4 w-20 mt-1" />
          </div>
        </div>
      ))}
    </div>
  );
}

/** Single pricing card skeleton */
export function PricingCardSkeleton() {
  return (
    <div className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#151515] overflow-hidden">
      <Skeleton className="h-[178px] w-full rounded-none" style={{ background: "#222" }} />
      <div className="p-7 flex flex-col gap-4">
        <Skeleton className="h-7 w-24" style={{ background: "#2a2a2a" }} />
        <Skeleton className="h-4 w-40" style={{ background: "#2a2a2a" }} />
        <Skeleton className="h-10 w-28 mt-2" style={{ background: "#2a2a2a" }} />
        <Skeleton className="h-14 w-full mt-4 rounded-full" style={{ background: "#2a2a2a" }} />
        <div className="flex flex-col gap-3 mt-4">
          {[1, 2, 3, 4].map((n) => (
            <Skeleton key={n} className="h-4 w-full" style={{ background: "#2a2a2a" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Single agent card skeleton */
export function AgentCardSkeleton() {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl">
      <Skeleton className="w-12 h-12 rounded-full shrink-0" />
      <div className="flex flex-col gap-2 flex-1">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-3 w-16" />
      </div>
    </div>
  );
}
