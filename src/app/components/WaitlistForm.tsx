import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLocation, useNavigate } from 'react-router';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const focusInput = () => {
      if (emailInputRef.current) {
        emailInputRef.current.focus();
      }
    };

    if (location.state?.focusEmail) {
      focusInput();
      window.history.replaceState({}, document.title);
    }

    window.addEventListener('focus-waitlist-email', focusInput);
    return () => window.removeEventListener('focus-waitlist-email', focusInput);
  }, [location]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const validateEmail = (value: string) =>
    String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email) {
      setError('Please enter your email');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    navigate(`/signup?email=${encodeURIComponent(email)}`);
  };

  return (
    <form
      id="waitlist-form"
      onSubmit={handleSubmit}
      className="content-stretch flex flex-col gap-[16px] items-center relative z-50 shrink-0 w-full px-4 md:px-0"
      data-name="Button Container"
    >
      {error && createPortal(
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#ef4444] flex items-center justify-between px-[24px] py-[10px] rounded-[20px] w-full max-w-[420px] z-[10000] animate-in fade-in slide-in-from-top-4 duration-300 shadow-lg">
          <p className="font-['General_Sans:Medium',sans-serif] text-white text-[14px] whitespace-nowrap">{error}</p>
          <button
            type="button"
            onClick={() => setError(null)}
            className="text-white text-[14px] font-bold cursor-pointer hover:opacity-80 transition-opacity underline ml-4"
          >
            Close
          </button>
        </div>,
        document.body
      )}

      <div className="bg-[#1f2937] content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative rounded-[24px] shrink-0 w-full max-w-[480px]" data-name="Marketting/Input field">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(147,197,253,0.4)] border-solid inset-[-2px] pointer-events-none rounded-[26px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        <input
          ref={emailInputRef}
          type="email"
          placeholder="yourwebsite.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null);
          }}
          className="bg-transparent flex-1 font-['General_Sans:Medium',sans-serif] leading-[28px] min-w-px not-italic relative text-white text-[16px] md:text-[18px] outline-none placeholder:text-[#9ca3af]"
        />
      </div>

      <button
        type="submit"
        className="bg-[#1877f2] hover:bg-[#1565c0] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] relative rounded-[40px] shrink-0 w-full max-w-[220px] transition-colors cursor-pointer"
        data-name="Button"
      >
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-white text-[16px] whitespace-nowrap">
          Get Started
        </p>
      </button>

      <div className="w-full max-w-[420px] h-px bg-[rgba(255,255,255,0.1)] my-1" />

      <div
        aria-disabled="true"
        className="content-stretch flex gap-[10px] items-center justify-center pl-[8px] pr-[16px] py-[8px] relative rounded-full shrink-0 bg-[#1f2937] opacity-60 cursor-not-allowed select-none"
        style={{ pointerEvents: 'none' }}
        data-name="Connect with Claude (disabled)"
        title="Coming soon"
      >
        <div className="flex items-center justify-center w-[32px] h-[32px] rounded-[8px] bg-[#d97757] shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <g stroke="#fff" strokeWidth="1.6" strokeLinecap="round">
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
              <line x1="6" y1="2.5" x2="6" y2="2.5" />
            </g>
          </svg>
        </div>
        <p className="font-['General_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-white text-[15px] whitespace-nowrap">
          Connect with Claude
        </p>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
          <path d="M6 4l4 4-4 4" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </form>
  );
}
