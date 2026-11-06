import { useEffect, useLayoutEffect, useRef, useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { X, ArrowRight, Check, Loader2 } from "lucide-react";

// Bump the version to show the banner again to visitors who closed it.
const DISMISS_KEY = "loraloop_launch_banner_v1_dismissed";
const JOINED_KEY = "loraloop_launch_banner_v1_joined";
// The banner switches itself off after this moment, so it can't go stale.
const HIDE_AFTER = new Date("2026-12-01T00:00:00Z").getTime();
const HEIGHT_VAR = "--launch-banner-h";

const read = (k: string) => {
  try { return localStorage.getItem(k) === "1"; } catch { return false; }
};
const write = (k: string) => {
  try { localStorage.setItem(k, "1"); } catch { /* storage blocked: banner just reappears next visit */ }
};
const goal = (name: string) => window.minilytics?.("goal", name, { location: "launch_banner" });

type Status = "idle" | "form" | "saving" | "done" | "error";

export default function LaunchBanner() {
  const { t, i18n } = useTranslation();
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && Date.now() < HIDE_AFTER && !read(DISMISS_KEY)
  );
  const [status, setStatus] = useState<Status>(() => (read(JOINED_KEY) ? "done" : "idle"));
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const barRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Publish the bar's height so the floating header and mobile nav can sit below it.
  useLayoutEffect(() => {
    const root = document.documentElement;
    const el = barRef.current;
    if (!visible || !el) {
      root.style.setProperty(HEIGHT_VAR, "0px");
      return;
    }
    const update = () => root.style.setProperty(HEIGHT_VAR, `${el.offsetHeight}px`);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      ro.disconnect();
      root.style.setProperty(HEIGHT_VAR, "0px");
    };
  }, [visible]);

  useEffect(() => {
    if (status === "form") inputRef.current?.focus();
  }, [status]);

  if (!visible) return null;

  const close = () => {
    write(DISMISS_KEY);
    goal("launch_banner_dismiss");
    setVisible(false);
  };

  const openForm = () => {
    goal("launch_banner_open");
    setStatus("form");
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setError(t("launchBanner.invalid"));
      return;
    }
    const company = (new FormData(e.currentTarget).get("company") as string) || "";
    setError("");
    setStatus("saving");
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value, page: window.location.pathname, lang: i18n.language, company }),
      });
      if (!res.ok) throw new Error(String(res.status));
      write(JOINED_KEY);
      goal("launch_banner_signup");
      setStatus("done");
    } catch {
      setError(t("launchBanner.error"));
      setStatus("form");
    }
  };

  const showForm = status === "form" || status === "saving";

  return (
    <>
      <div
        ref={barRef}
        role="region"
        aria-label={t("launchBanner.messageShort")}
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
        className="fixed top-0 inset-x-0 z-[70] bg-[#1565c0] text-white"
      >
        <div className="mx-auto max-w-[1200px] flex flex-wrap items-center justify-center gap-x-3 gap-y-2 py-2 ps-4 pe-14 md:pe-16 text-[13px] md:text-[14px] leading-snug text-center">
          {status === "done" ? (
            <p className="flex items-center gap-2 font-medium" aria-live="polite">
              <Check className="w-4 h-4 shrink-0" aria-hidden="true" />
              {t("launchBanner.success")}
            </p>
          ) : (
            <>
              <p className="font-medium">
                <span className="hidden md:inline">{t("launchBanner.message")}</span>
                <span className="md:hidden">{t("launchBanner.messageShort")}</span>
              </p>

              {showForm ? (
                <form onSubmit={submit} noValidate className="flex items-center gap-2">
                  <label htmlFor="launch-banner-email" className="sr-only">
                    {t("launchBanner.emailLabel")}
                  </label>
                  <input
                    ref={inputRef}
                    id="launch-banner-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
                    placeholder={t("launchBanner.placeholder")}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? "launch-banner-error" : undefined}
                    disabled={status === "saving"}
                    className="h-8 w-[190px] md:w-[230px] rounded-full bg-white px-3 text-[13px] text-[#111827] placeholder:text-[#6b7280] outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1565c0]"
                  />
                  {/* Honeypot for bots: hidden from people and screen readers. */}
                  <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                  <button
                    type="submit"
                    disabled={status === "saving"}
                    className="h-8 inline-flex items-center gap-1.5 rounded-full bg-[#0b1f44] px-3.5 text-[13px] font-semibold text-white hover:bg-[#06132b] disabled:opacity-70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {status === "saving" && <Loader2 className="w-3.5 h-3.5 animate-spin" aria-hidden="true" />}
                    {status === "saving" ? t("launchBanner.submitting") : t("launchBanner.submit")}
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={openForm}
                  className="inline-flex items-center gap-1 rounded-full bg-white text-[#1256b0] hover:bg-[#e8f1fe] px-3.5 py-1 font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1565c0]"
                >
                  {t("launchBanner.cta")}
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" />
                </button>
              )}

              {error && (
                <p id="launch-banner-error" role="alert" className="w-full text-[12px] font-medium text-white">
                  {error}
                </p>
              )}
            </>
          )}
        </div>

        <button
          type="button"
          onClick={close}
          aria-label={t("launchBanner.close")}
          className="absolute top-1/2 -translate-y-1/2 end-2 md:end-3 w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 active:bg-white/40 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X className="w-[18px] h-[18px]" strokeWidth={2.5} aria-hidden="true" />
        </button>
      </div>
      {/* Reserves the bar's space in the page flow so it never covers content. */}
      <div aria-hidden="true" style={{ height: `var(${HEIGHT_VAR}, 0px)` }} />
    </>
  );
}
