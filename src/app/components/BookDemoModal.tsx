import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const goal = (name: string) => window.minilytics?.("goal", name, { location: "pricing" });

const sat = { fontFamily: "Satoshi, Inter, sans-serif", fontWeight: 700 } as const;
const gen = { fontFamily: "General Sans, Inter, sans-serif" } as const;

/**
 * "Book a demo" from the pricing page: one email field. The address is saved to
 * Supabase through api/book-demo.ts and the team follows up by email.
 */
export default function BookDemoModal({ open, onOpenChange, plan = "enterprise" }: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  plan?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"form" | "saving" | "done">("form");
  const [error, setError] = useState("");

  const change = (next: boolean) => {
    onOpenChange(next);
    // A fresh form next time, after a successful request.
    if (!next && status === "done") {
      setStatus("form");
      setEmail("");
    }
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setError("Please enter a valid work email.");
      return;
    }
    const website = (new FormData(e.currentTarget).get("website") as string) || "";
    setError("");
    setStatus("saving");
    try {
      const res = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value, plan, page: window.location.pathname, lang: document.documentElement.lang || navigator.language, website }),
      });
      if (!res.ok) throw new Error(String(res.status));
      goal("book_demo_submit");
      setStatus("done");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("form");
    }
  };

  return (
    <Dialog open={open} onOpenChange={change}>
      <DialogContent className="bg-[#131313] border-white/10 text-white sm:max-w-[420px] rounded-2xl p-7 [&>button]:text-[#9CA3AF]">
        {status === "done" ? (
          <div className="flex flex-col items-center gap-3 py-4 text-center" aria-live="polite">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2]/15">
              <Check className="h-5 w-5 text-[#60A5FA]" aria-hidden="true" />
            </span>
            <DialogTitle style={sat} className="text-[20px]">Thanks, we'll be in touch</DialogTitle>
            <DialogDescription style={gen} className="text-[14px] text-[#9CA3AF]">
              We'll email {email.trim()} within one working day to find a time.
            </DialogDescription>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-4" noValidate>
            <div className="flex flex-col gap-1.5">
              <DialogTitle style={sat} className="text-[20px]">Book a demo</DialogTitle>
              <DialogDescription style={gen} className="text-[14px] leading-[20px] text-[#9CA3AF]">
                Leave your work email and we'll set up a call to show Loraloop on your brands.
              </DialogDescription>
            </div>
            <label className="flex flex-col gap-1.5">
              <span style={{ ...gen, fontWeight: 500 }} className="text-[13px] text-[#D1D5DB]">Work email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                aria-invalid={!!error}
                style={gen}
                className="h-11 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-[15px] text-white placeholder:text-[#6B7280] outline-none focus:border-[#1877F2]"
              />
            </label>
            {/* Honeypot: hidden from people, filled by bots. */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            {error && <p style={gen} role="alert" className="text-[13px] text-[#F87171]">{error}</p>}
            <button
              type="submit"
              disabled={status === "saving"}
              style={sat}
              className="h-11 rounded-full bg-white text-[15px] text-black transition-all hover:bg-gray-200 disabled:opacity-60"
            >
              {status === "saving" ? "Sending…" : "Book a demo"}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
