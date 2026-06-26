import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center gap-6 max-w-[440px]">
        {/* Soft illustration */}
        <div className="w-20 h-20 rounded-2xl bg-[#f1f5f9] flex items-center justify-center text-4xl select-none" aria-hidden="true">
          🗺️
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-['Satoshi',sans-serif] font-bold text-xs uppercase tracking-[0.1em] text-[#94a3b8]">
            404
          </p>
          <h1 className="font-['Satoshi',sans-serif] font-bold text-3xl md:text-4xl text-[#0f172a] leading-tight">
            This page doesn't exist
          </h1>
          <p className="font-['General_Sans',sans-serif] font-medium text-base md:text-lg text-[#64748b] leading-relaxed">
            The link may have moved or the URL might be wrong. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1877f2] hover:bg-[#1565d8] active:bg-[#1256b0] transition-colors duration-150 px-6 py-3 rounded-full font-['Satoshi',sans-serif] font-bold text-white text-sm"
          >
            Go to homepage
          </Link>
          <Link
            to="/blog"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#cbd5e1] transition-colors duration-150 px-6 py-3 rounded-full font-['Satoshi',sans-serif] font-bold text-[#374151] text-sm"
          >
            Browse the blog
          </Link>
        </div>
      </div>
    </div>
  );
}
