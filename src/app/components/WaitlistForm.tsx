import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router';
import ClaudeConnectModal from './ClaudeConnectModal';
import { supabase } from '../../lib/supabase';
import imgClaude from '../../assets/platform-claude.svg';
import imgChatGPT from '../../assets/platform-chatgpt.svg';
import imgOpenClaw from '../../assets/platform-openclaw.svg';
import imgHermes from '../../assets/platform-hermes.svg';

const WEBSITE_REGEX = /^(https?:\/\/)?(www\.)?([a-z0-9-]+\.)+[a-z]{2,}(\/[^\s]*)?$/i;

export default function WaitlistForm() {
  const [website, setWebsite] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [claudeModalOpen, setClaudeModalOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsSignedIn(!!session?.user);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsSignedIn(!!session?.user);
    });
    return () => subscription.unsubscribe();
  }, []);

  const isValid = WEBSITE_REGEX.test(website.trim());

  useEffect(() => {
    const focusInput = () => {
      if (inputRef.current) inputRef.current.focus();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    window.location.href = `https://app.loraloop.com/signup?website=${encodeURIComponent(website.trim())}`;
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
          ref={inputRef}
          type="text"
          inputMode="url"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          placeholder="yourwebsite.com"
          value={website}
          onChange={(e) => {
            setWebsite(e.target.value);
            if (error) setError(null);
          }}
          className="bg-transparent flex-1 font-['General_Sans:Medium',sans-serif] leading-[28px] min-w-px not-italic relative text-white text-[16px] md:text-[18px] outline-none placeholder:text-[#9ca3af]"
        />
      </div>

      <button
        type="submit"
        disabled={!isValid}
        aria-disabled={!isValid}
        className={`content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] relative rounded-[40px] shrink-0 w-full max-w-[220px] transition-colors ${
          isValid
            ? 'bg-[#1877f2] hover:bg-[#1565c0] cursor-pointer'
            : 'bg-[#2a3040] cursor-not-allowed'
        }`}
        data-name="Button"
      >
        <p className={`font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] whitespace-nowrap ${isValid ? 'text-white' : 'text-[#6b7280]'}`}>
          Get Started
        </p>
      </button>

      <div className="w-full max-w-[420px] h-px bg-[rgba(255,255,255,0.1)] my-1" />

      {/* Connect with — Figma design */}
      <div className="flex flex-col gap-[8px] items-center justify-center w-full" data-name="Segmenter">
        <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] text-[12px] text-[#9ca3af] text-center whitespace-nowrap">
          Connect with
        </p>
        <div className="bg-[#1b212a] flex gap-[16px] md:gap-[24px] items-center px-[16px] md:px-[20px] py-[10px] md:py-[12px] rounded-[20px] md:rounded-[24px]">
          {[
            { src: imgClaude,   label: 'Claude'   },
            { src: imgChatGPT,  label: 'ChatGPT'  },
            { src: imgOpenClaw, label: 'OpenClaw' },
            { src: imgHermes,   label: 'Hermes'   },
          ].map(({ src, label }) => (
            <div key={label} className="flex flex-col gap-[2px] items-center justify-center">
              <div className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] overflow-hidden rounded-full shrink-0">
                <img alt={label} src={src} className="w-full h-full object-contain" />
              </div>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] md:leading-[20px] text-[12px] md:text-[14px] text-white text-center whitespace-nowrap">
                {label}
              </p>
            </div>
          ))}
        </div>
        {isSignedIn ? (
          <a
            href="https://app.loraloop.com/chat"
            className="bg-[#14a148]/15 hover:bg-[#14a148]/25 transition-colors flex gap-[8px] items-center justify-center px-[12px] py-[7px] md:py-[8px] rounded-[20px] mt-[12px]"
            data-name="Sign in to Connect"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0">
              <path d="M2 6l3 3 5-5" stroke="#14a148" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] text-[13px] md:text-[14px] text-[#14a148] tracking-[0.21px] whitespace-nowrap">
              Connected
            </p>
          </a>
        ) : (
          <a
            href="https://app.loraloop.com/signin"
            className="bg-[#313b4a] hover:bg-[#3d4a5c] transition-colors flex gap-[8px] items-center justify-center px-[12px] py-[7px] md:py-[8px] rounded-[20px] mt-[12px]"
            data-name="Sign in to Connect"
          >
            <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] text-[13px] md:text-[14px] text-white tracking-[0.21px] whitespace-nowrap">
              Sign in to Connect
            </p>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
              <path d="M6 4l4 4-4 4" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>

      <ClaudeConnectModal open={claudeModalOpen} onOpenChange={setClaudeModalOpen} />
    </form>
  );
}
