import { useLayoutEffect, useRef, useState, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useTranslation } from "react-i18next";
import { X, ArrowRight, Check, Loader2, Mail } from "lucide-react";

const JOINED_KEY = "loraloop_launch_banner_v1_joined";
// The banner switches itself off after this moment, so it can't go stale.
const HIDE_AFTER = new Date("2026-12-01T00:00:00Z").getTime();
const HEIGHT_VAR = "--launch-banner-h";

const read = (k: string) => {
  try { return localStorage.getItem(k) === "1"; } catch { return false; }
};
const write = (k: string) => {
  try { localStorage.setItem(k, "1"); } catch { /* storage blocked: sign-up state just isn't remembered */ }
};
const goal = (name: string) => window.minilytics?.("goal", name, { location: "launch_banner" });

type Status = "idle" | "saving" | "done";

export default function LaunchBanner() {
  const { t, i18n } = useTranslation();
  const [visible] = useState(
    () => typeof window !== "undefined" && Date.now() < HIDE_AFTER
  );
  const [status, setStatus] = useState<Status>(() => (read(JOINED_KEY) ? "done" : "idle"));
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const barRef = useRef<HTMLDivElement>(null);

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

  if (!visible) return null;

  const openModal = () => {
    goal("launch_banner_open");
    setError("");
    setModalOpen(true);
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
      setStatus("idle");
    }
  };

  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <>
      <div
        ref={barRef}
        role="region"
        aria-label={t("launchBanner.messageShort")}
        dir={dir}
        className="fixed top-0 inset-x-0 z-[70] bg-[#1565c0] text-white"
      >
        <div className="mx-auto max-w-[1200px] flex flex-wrap items-center justify-center gap-x-3 gap-y-2 py-2 px-4 text-[13px] md:text-[14px] leading-snug text-center">
          {status === "done" ? (
            <p className="flex items-center gap-2 font-medium" aria-live="polite">
              <Check className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>
                <strong className="font-semibold">{t("launchBanner.successTitle")}</strong>
                <span className="hidden md:inline"> · {t("launchBanner.success")}</span>
              </span>
            </p>
          ) : (
            <>
              <p className="font-medium">
                <span className="hidden md:inline">{t("launchBanner.message")}</span>
                <span className="md:hidden">{t("launchBanner.messageShort")}</span>
              </p>

              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-1 rounded-full bg-black text-white hover:bg-[#262626] px-3 py-1 text-[12px] font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1565c0]"
              >
                {t("launchBanner.cta")}
                <ArrowRight className="w-3 h-3 rtl:rotate-180" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

      </div>
      <Dialog.Root open={modalOpen} onOpenChange={setModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/60 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
          <Dialog.Content
            dir={dir}
            className="fixed left-1/2 top-1/2 z-[81] w-[calc(100%-32px)] max-w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-white p-6 md:p-8 shadow-2xl focus:outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
          >
            <Dialog.Close
              aria-label={t("launchBanner.close")}
              className="absolute top-3 end-3 w-9 h-9 inline-flex items-center justify-center rounded-full text-[#4b5563] hover:bg-[#f3f4f6] hover:text-[#111827] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1565c0]"
            >
              <X className="w-[18px] h-[18px]" strokeWidth={2.5} aria-hidden="true" />
            </Dialog.Close>

            {status === "done" ? (
              <div className="flex flex-col items-center text-center gap-3 py-2">
                <span className="w-12 h-12 rounded-full bg-[#e8f1fe] text-[#1565c0] inline-flex items-center justify-center">
                  <Check className="w-6 h-6" strokeWidth={2.5} aria-hidden="true" />
                </span>
                <Dialog.Title className="text-[20px] font-bold text-[#111827]">{t("launchBanner.successTitle")}</Dialog.Title>
                <Dialog.Description className="text-[14px] leading-relaxed text-[#4b5563]">
                  {t("launchBanner.success")}
                </Dialog.Description>
                <Dialog.Close className="mt-2 h-11 w-full rounded-full bg-black text-[14px] font-semibold text-white hover:bg-[#262626] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1565c0] focus-visible:ring-offset-2">
                  {t("launchBanner.done")}
                </Dialog.Close>
              </div>
            ) : (
              <>
                <span className="w-12 h-12 rounded-full bg-[#e8f1fe] text-[#1565c0] inline-flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </span>
                <Dialog.Title className="text-[22px] font-bold leading-tight text-[#111827]">
                  {t("launchBanner.modalTitle")}
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-[14px] leading-relaxed text-[#4b5563]">
                  {t("launchBanner.message")}
                </Dialog.Description>

                <form onSubmit={submit} noValidate className="mt-5 flex flex-col gap-3">
                  <label htmlFor="launch-modal-email" className="text-[13px] font-semibold text-[#111827]">
                    {t("launchBanner.emailLabel")}
                  </label>
                  <input
                    id="launch-modal-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
                    placeholder={t("launchBanner.placeholder")}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? "launch-modal-error" : undefined}
                    disabled={status === "saving"}
                    className="h-11 w-full rounded-xl border border-[#d1d5db] bg-white px-4 text-[15px] text-[#111827] placeholder:text-[#6b7280] outline-none focus:border-[#1565c0] focus:ring-2 focus:ring-[#1565c0]/25 aria-[invalid=true]:border-[#b91c1c]"
                  />
                  {/* Honeypot for bots: hidden from people and screen readers. */}
                  <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                  {error && (
                    <p id="launch-modal-error" role="alert" className="text-[13px] font-medium text-[#b91c1c]">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "saving"}
                    className="h-11 w-full inline-flex items-center justify-center gap-2 rounded-full bg-black text-[14px] font-semibold text-white hover:bg-[#262626] disabled:opacity-70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1565c0] focus-visible:ring-offset-2"
                  >
                    {status === "saving" && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
                    {status === "saving" ? t("launchBanner.submitting") : t("launchBanner.submit")}
                  </button>
                  <p className="text-center text-[12px] text-[#6b7280]">{t("launchBanner.privacy")}</p>
                </form>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      {/* Reserves the bar's space in the page flow so it never covers content. */}
      <div aria-hidden="true" style={{ height: `var(${HEIGHT_VAR}, 0px)` }} />
    </>
  );
}
