import { useEffect, useState } from "react";
import { supabase, POST_AUTH_URL } from "../../lib/supabase";

export default function AuthCallback() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const finish = async () => {
      const { data, error: sessionError } = await supabase.auth.getSession();
      if (cancelled) return;
      if (sessionError) {
        setError(sessionError.message);
        return;
      }
      if (data.session) {
        window.location.href = POST_AUTH_URL;
      }
    };

    finish();
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) window.location.href = POST_AUTH_URL;
    });

    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="pt-20 md:pt-32 pb-20 px-4">
      <div className="max-w-[440px] mx-auto text-center">
        {error ? (
          <>
            <p className="font-['Satoshi:Bold',sans-serif] text-[#dc2626] text-2xl">
              Sign-in failed
            </p>
            <p className="font-['General_Sans:Medium',sans-serif] text-[#6b7280] mt-3">
              {error}
            </p>
          </>
        ) : (
          <p className="font-['General_Sans:Medium',sans-serif] text-[#6b7280] text-base">
            Completing sign-in…
          </p>
        )}
      </div>
    </div>
  );
}
