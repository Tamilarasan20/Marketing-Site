import { Link } from 'react-router';

export default function ToolCtaSection() {
  return (
    <div className="mt-16 mb-4 relative overflow-hidden rounded-2xl">
      {/* Mesh gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 60%), ' +
            'radial-gradient(ellipse at 80% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 50%), ' +
            'radial-gradient(ellipse at 60% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), ' +
            'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
        }}
      />
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
      />
      <div className="relative z-10 px-8 py-14 sm:px-14 sm:py-16 text-center">
        <span className="inline-block text-xs font-semibold text-violet-300 tracking-widest uppercase mb-4">
          Powered by AI Agents
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-4 max-w-2xl mx-auto">
          Want AI that does more than generate text?
        </h2>
        <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
          Loraloop's marketing agents plan, create, schedule and publish content in your brand voice — so you can focus on growing your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://app.loraloop.com/signup"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-7 py-3.5 rounded-xl hover:bg-gray-100 transition-colors text-sm"
          >
            Get Started Free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <Link
            to="/tools"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm"
          >
            Browse all free tools
          </Link>
        </div>
      </div>
    </div>
  );
}
