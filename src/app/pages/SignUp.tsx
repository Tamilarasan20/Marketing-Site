import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { supabase } from "../../lib/supabase";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setInfo(null);

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (!agree) {
      setError("Please accept the Terms and Privacy Policy.");
      return;
    }

    setSubmitting(true);
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name },
        },
      });
      if (signUpError) {
        setError(signUpError.message);
        return;
      }
      if (data.session) {
        const appUrl = import.meta.env.VITE_APP_URL;
        if (appUrl) {
          window.location.href = appUrl;
        } else {
          navigate("/");
        }
      } else {
        setInfo("Check your email to confirm your account.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign up failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20 md:pt-32 pb-20 px-4">
      <div className="max-w-[480px] mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3 text-center">
            <p className="font-['Satoshi:Bold',sans-serif] leading-[44px] text-[#101828] text-4xl tracking-[-0.8px]">
              Create your account
            </p>
            <p className="font-['General_Sans:Medium',sans-serif] text-[#6b7280] text-base leading-7">
              Start automating your social content with Loraloop.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-['General_Sans:Semibold',sans-serif] text-[#1f2937] text-sm">
                Full name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="border border-[#d1d5db] rounded-xl px-4 py-3 text-base font-['General_Sans:Medium',sans-serif] text-[#101828] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#0279ec] focus:ring-2 focus:ring-[#0279ec]/20 transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-['General_Sans:Semibold',sans-serif] text-[#1f2937] text-sm">
                Work email
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
              <label htmlFor="password" className="font-['General_Sans:Semibold',sans-serif] text-[#1f2937] text-sm">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                className="border border-[#d1d5db] rounded-xl px-4 py-3 text-base font-['General_Sans:Medium',sans-serif] text-[#101828] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#0279ec] focus:ring-2 focus:ring-[#0279ec]/20 transition"
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-1 w-4 h-4 accent-[#0279ec]"
              />
              <span className="font-['General_Sans:Medium',sans-serif] text-[#374151] text-sm leading-6">
                I agree to the{" "}
                <Link to="/terms" className="text-[#0279ec] hover:underline">Terms</Link>
                {" "}and{" "}
                <Link to="/privacy-policy" className="text-[#0279ec] hover:underline">Privacy Policy</Link>.
              </span>
            </label>

            {error && (
              <p className="font-['General_Sans:Medium',sans-serif] text-[#dc2626] text-sm">{error}</p>
            )}
            {info && (
              <p className="font-['General_Sans:Medium',sans-serif] text-[#0279ec] text-sm">{info}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="bg-[#0279ec] text-white font-['Satoshi:Bold',sans-serif] text-base rounded-xl px-4 py-3 hover:bg-[#0268cc] disabled:opacity-60 transition-colors"
            >
              {submitting ? "Creating account…" : "Create account"}
            </button>
          </form>

          <p className="text-center font-['General_Sans:Medium',sans-serif] text-[#6b7280] text-base">
            Already have an account?{" "}
            <Link to="/login" className="text-[#0279ec] font-['General_Sans:Semibold',sans-serif] hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
