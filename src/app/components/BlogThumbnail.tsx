interface BlogThumbnailProps {
  emoji: string;
  gradient: [string, string];
  category: string;
  className?: string;
}

export function BlogThumbnail({ emoji, gradient, category, className = "" }: BlogThumbnailProps) {
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center relative overflow-hidden select-none ${className}`}
      style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
    >
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
      <div className="absolute -bottom-10 -left-8 w-40 h-40 rounded-full bg-white/10" />
      <div className="absolute top-5 left-5 w-5 h-5 rounded-full bg-white/20" />
      <div className="absolute bottom-8 right-6 w-3 h-3 rounded-full bg-white/20" />
      <span className="text-5xl md:text-6xl relative z-10 drop-shadow-lg">{emoji}</span>
      <span className="mt-3 relative z-10 text-white/90 text-xs font-semibold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
        {category}
      </span>
    </div>
  );
}
