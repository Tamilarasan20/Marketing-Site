import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { supabase } from "../../lib/supabase";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setSubmitting(true);
    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (signInError) {
        setError(signInError.message);
        return;
      }
      const appUrl = import.meta.env.VITE_APP_URL;
      if (appUrl) {
        window.location.href = appUrl;
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed. Please try again.");
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
              Welcome back
            </p>
            <p className="font-['General_Sans:Medium',sans-serif] text-[#6b7280] text-base leading-7">
              Sign in to continue to your Loraloop workspace.
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

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="font-['General_Sans:Semibold',sans-serif] text-[#1f2937] text-sm">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="font-['General_Sans:Semibold',sans-serif] text-[#0279ec] text-sm hover:underline"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="border border-[#d1d5db] rounded-xl px-4 py-3 text-base font-['General_Sans:Medium',sans-serif] text-[#101828] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#0279ec] focus:ring-2 focus:ring-[#0279ec]/20 transition"
              />
            </div>

            {error && (
              <p className="font-['General_Sans:Medium',sans-serif] text-[#dc2626] text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="bg-[#0279ec] text-white font-['Satoshi:Bold',sans-serif] text-base rounded-xl px-4 py-3 hover:bg-[#0268cc] disabled:opacity-60 transition-colors"
            >
              {submitting ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="text-center font-['General_Sans:Medium',sans-serif] text-[#6b7280] text-base">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#0279ec] font-['General_Sans:Semibold',sans-serif] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
