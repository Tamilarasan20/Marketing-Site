import { useState, type FormEvent } from "react";
import { Link } from "react-router";
import { supabase } from "../../lib/supabase";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setInfo(null);

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    setSubmitting(true);
    try {
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (resetError) {
        setError(resetError.message);
        return;
      }
      setInfo("If an account exists for this email, a reset link has been sent.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Request failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20 md:pt-32 pb-20 px-4">
      <div className="max-w-[440px] mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3 text-center">
            <p className="font-['Satoshi:Bold',sans-serif] leading-[44px] text-[#101828] text-4xl tracking-[-0.8px]">
              Reset your password
            </p>
            <p className="font-['General_Sans:Medium',sans-serif] text-[#6b7280] text-base leading-7">
              We'll email you a secure link to set a new password.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-['General_Sans:Semibold',sans-serif] text-[#1f2937] text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="border border-[#d1d5db] rounded-xl px-4 py-3 text-base font-['General_Sans:Medium',sans-serif] text-[#101828] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#0279ec] focus:ring-2 focus:ring-[#0279ec]/20 transition"
              />
            </div>

            {error && (
              <p className="font-['General_Sans:Medium',sans-serif] text-[#dc2626] text-sm">{error}</p>
            )}
            {info && (
              <p className="font-['General_Sans:Medium',sans-serif] text-[#059669] text-sm">{info}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="bg-[#0279ec] text-white font-['Satoshi:Bold',sans-serif] text-base rounded-xl px-4 py-3 hover:bg-[#0268cc] disabled:opacity-60 transition-colors"
            >
              {submitting ? "Sending…" : "Send reset link"}
            </button>
          </form>

          <p className="text-center font-['General_Sans:Medium',sans-serif] text-[#6b7280] text-base">
            Remember your password?{" "}
            <Link to="/login" className="text-[#0279ec] font-['General_Sans:Semibold',sans-serif] hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
