import { useEffect, useState, type FormEvent } from "react";
import { supabase, POST_AUTH_URL } from "../../lib/supabase";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // PKCE flow: detectSessionInUrl in the client will exchange the code for a session.
    // We just wait for the session to be established before allowing password update.
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setReady(true);
      }
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) setReady(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setInfo(null);

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }

    setSubmitting(true);
    try {
      const { error: updateError } = await supabase.auth.updateUser({ password });
      if (updateError) {
        setError(updateError.message);
        return;
      }
      setInfo("Password updated. Redirecting…");
      setTimeout(() => {
        window.location.href = POST_AUTH_URL;
      }, 1000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Update failed.");
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
              Set a new password
            </p>
            <p className="font-['General_Sans:Medium',sans-serif] text-[#6b7280] text-base leading-7">
              Choose a strong password you haven't used before.
            </p>
          </div>

          {!ready ? (
            <p className="text-center font-['General_Sans:Medium',sans-serif] text-[#6b7280] text-base">
              Verifying reset link…
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="font-['General_Sans:Semibold',sans-serif] text-[#1f2937] text-sm">
                  New password
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

              <div className="flex flex-col gap-2">
                <label htmlFor="confirm" className="font-['General_Sans:Semibold',sans-serif] text-[#1f2937] text-sm">
                  Confirm password
                </label>
                <input
                  id="confirm"
                  type="password"
                  autoComplete="new-password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="Re-enter password"
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
                {submitting ? "Updating…" : "Update password"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
