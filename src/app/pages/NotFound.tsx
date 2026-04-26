import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-['Satoshi:Bold',sans-serif] text-[120px] text-[#1f2937] leading-none">404</h1>
        <p className="font-['Satoshi:Bold',sans-serif] text-4xl text-[#1f2937] mt-4">Page Not Found</p>
        <p className="font-['General_Sans:Medium',sans-serif] text-lg text-[#6b7280] mt-4 mb-8">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-block bg-[#1877f2] px-8 py-3 rounded-[120px] font-['Satoshi:Bold',sans-serif] text-white hover:bg-[#1565d8] transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
