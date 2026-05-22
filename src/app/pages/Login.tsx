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
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleGoogle = async () => {
    setError(null);
    setGoogleLoading(true);
    try {
      const appUrl = import.meta.env.VITE_APP_URL;
      const { error: oauthError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: appUrl || window.location.origin },
      });
      if (oauthError) {
        setError(oauthError.message);
        setGoogleLoading(false);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Google sign in failed.");
      setGoogleLoading(false);
    }
  };

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

          <button
            type="button"
            onClick={handleGoogle}
            disabled={googleLoading}
            className="flex items-center justify-center gap-3 border border-[#d1d5db] rounded-xl px-4 py-3 bg-white hover:bg-[#f9fafb] disabled:opacity-60 transition-colors font-['General_Sans:Semibold',sans-serif] text-[#1f2937] text-base"
          >
            <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
              <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.6 39.6 16.2 44 24 44z"/>
              <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2c-.4.4 6.6-4.8 6.6-14.8 0-1.2-.1-2.3-.4-3.5z"/>
            </svg>
            {googleLoading ? "Redirecting…" : "Continue with Google"}
          </button>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-[#e5e7eb]" />
            <span className="font-['General_Sans:Medium',sans-serif] text-[#6b7280] text-xs">or</span>
            <div className="flex-1 h-px bg-[#e5e7eb]" />
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
