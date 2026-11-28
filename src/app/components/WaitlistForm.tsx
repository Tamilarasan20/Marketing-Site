import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router';
import ClaudeConnectModal from './ClaudeConnectModal';
import { supabase } from '../../lib/supabase';
import imgClaude from '../../assets/platform-claude.png';
import imgChatGPT from '../../assets/platform-chatgpt.png';
import imgOpenClaw from '../../assets/platform-openclaw.png';
import imgHermes from '../../assets/platform-hermes.png';

const WEBSITE_REGEX = /^(https?:\/\/)?(www\.)?([a-z0-9-]+\.)+[a-z]{2,}(\/[^\s]*)?$/i;

type WaitlistFormVariant = 'default' | 'inline-light' | 'prompt';

export default function WaitlistForm({ variant = 'default' }: { variant?: WaitlistFormVariant } = {}) {
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
    if (!isValid) {
      if (variant === 'inline-light' || variant === 'prompt') setError('Enter your website, like yourbrand.com');
      return;
    }
    window.location.href = `https://app.loraloop.com/signup?website=${encodeURIComponent(website.trim())}`;
  };

  if (variant === 'prompt') {
    // Dark home hero (Cardboard-style prompt box): website field on top, actions row below.
    return (
      <form id="waitlist-form" onSubmit={handleSubmit} noValidate className="w-full max-w-[620px] flex flex-col items-center gap-3">
        <div className="w-full rounded-[18px] border border-white/10 bg-[#1b1b19] p-3 text-left shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] transition-colors focus-within:border-white/25">
          <label htmlFor="waitlist-website" className="sr-only">Your website</label>
          <input
            id="waitlist-website"
            ref={inputRef}
            type="text"
            inputMode="url"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            placeholder="Paste your website, like yourbrand.com"
            value={website}
            aria-invalid={!!error}
            aria-describedby="waitlist-website-error"
            onChange={(e) => {
              setWebsite(e.target.value);
              if (error) setError(null);
            }}
            className="w-full bg-transparent px-2 pb-6 pt-1.5 text-[16px] leading-6 text-white outline-none placeholder:text-white/40"
          />
          <div className="flex items-center justify-between gap-3">
            <span className="px-2 text-[13px] text-white/45">Lora builds your brand profile from it</span>
            <button
              data-ml-goal="signup_click" data-ml-goal-location="waitlist_form_home"
              type="submit"
              className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-full bg-white px-4 text-[14px] font-medium text-[#141412] transition-colors hover:bg-[#e9e8e4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start free trial
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
        <p
          id="waitlist-website-error"
          role="alert"
          className={`min-h-5 text-[13px] leading-5 ${error ? 'text-[#ff9b8f]' : 'text-white/50'}`}
        >
          {error ?? '3-day free trial · no card needed · cancel anytime'}
        </p>
      </form>
    );
  }

  if (variant === 'inline-light') {
    // Light home hero: one pill with the input and an embedded dark-green button.
    // The button label is deliberately not "Get Started" — Layout hijacks that
    // exact text and would drop the ?website= param this form adds.
    return (
      <form id="waitlist-form" onSubmit={handleSubmit} noValidate className="w-full max-w-[520px] flex flex-col items-center gap-3">
        <div className="flex w-full items-center gap-2 rounded-[20px] border border-[#ddd6ce] bg-white p-1.5 pl-5 shadow-[0_1px_2px_rgba(44,44,44,0.04)] transition-colors focus-within:border-[#094413]">
          <label htmlFor="waitlist-website" className="sr-only">Your website</label>
          <input
            id="waitlist-website"
            ref={inputRef}
            type="text"
            inputMode="url"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            placeholder="yourwebsite.com"
            value={website}
            aria-invalid={!!error}
            aria-describedby={error ? 'waitlist-website-error' : undefined}
            onChange={(e) => {
              setWebsite(e.target.value);
              if (error) setError(null);
            }}
            className="min-w-0 flex-1 bg-transparent font-['General_Sans',sans-serif] text-[16px] font-medium leading-6 text-[#2c2c2c] outline-none placeholder:text-[rgba(44,44,44,0.45)]"
          />
          <button
            data-ml-goal="signup_click" data-ml-goal-location="waitlist_form_home"
            type="submit"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-[16px] bg-[#094413] px-5 sm:px-6 font-['Satoshi',sans-serif] text-[15px] sm:text-[16px] font-bold text-[#f9f3ed] transition-colors hover:bg-[#0d5a1a] focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Start free trial
          </button>
        </div>
        <p
          id="waitlist-website-error"
          role="alert"
          className={`min-h-5 font-['General_Sans',sans-serif] text-[13px] font-medium leading-5 ${error ? 'text-[#b42318]' : 'text-[rgba(44,44,44,0.5)]'}`}
        >
          {error ?? '3-day free trial · no card needed · cancel anytime'}
        </p>
      </form>
    );
  }

  return (
    <form
      id="waitlist-form"
      onSubmit={handleSubmit}
      className="content-stretch flex flex-col gap-[16px] items-center relative z-50 shrink-0 w-full px-4 md:px-0"
      data-name="Button Container"
    >
      {error && createPortal(
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#ef4444] flex items-center justify-between px-[24px] py-[10px] rounded-[20px] w-full max-w-[420px] z-[10000] animate-in fade-in slide-in-from-top-4 duration-300 shadow-lg">
          <p className="font-['General_Sans',sans-serif] font-medium text-white text-[14px] whitespace-nowrap">{error}</p>
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
          className="bg-transparent flex-1 font-['General_Sans',sans-serif] font-medium leading-[28px] min-w-px not-italic relative text-white text-[16px] md:text-[18px] outline-none placeholder:text-[#9ca3af]"
        />
      </div>

      <button
        data-ml-goal="signup_click" data-ml-goal-location="waitlist_form"
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
        <p className={`font-['Satoshi',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] whitespace-nowrap ${isValid ? 'text-white' : 'text-[#6b7280]'}`}>
          Get Started
        </p>
      </button>

      <div className="w-full max-w-[420px] h-px bg-[rgba(255,255,255,0.1)] my-1" />

      {/* Connect with — Figma node 70041:4251 */}
      <div className="bg-[#111720] flex flex-col gap-[16px] items-center px-[16px] md:px-[32px] py-[16px] rounded-[24px] w-full max-w-[420px]" data-name="Segmenter">
        <p className="font-['General_Sans',sans-serif] font-medium leading-[16px] text-[12px] text-[#9ca3af] text-center whitespace-nowrap">
          Connect with
        </p>
        <div className="flex gap-[8px] items-center">
          {[
            { src: imgClaude,   label: 'Claude',   rounded: false },
            { src: imgChatGPT,  label: 'ChatGPT',  rounded: false },
            { src: imgOpenClaw, label: 'OpenClaw', rounded: false },
            { src: imgHermes,   label: 'Hermes',   rounded: true  },
          ].map(({ src, label, rounded }) => (
            <div key={label} className="flex flex-col gap-[4px] items-center justify-center p-[8px]">
              <div className={`overflow-hidden shrink-0 size-[40px]${rounded ? ' rounded-[40px]' : ''}`}>
                <img loading="lazy" decoding="async" alt={label} src={src} className="w-full h-full object-cover" />
              </div>
              <p className="font-['Satoshi',sans-serif] font-medium leading-[20px] text-[14px] text-[#9ca3af] text-center whitespace-nowrap">
                {label}
              </p>
            </div>
          ))}
        </div>
        {isSignedIn ? (
          <a
            href="https://app.loraloop.com/chat"
            className="bg-[#14a148]/15 hover:bg-[#14a148]/25 transition-colors flex gap-[4px] items-center justify-center px-[16px] py-[12px] rounded-[32px] w-full"
            data-name="Sign in to Connect"
          >
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0">
              <path d="M2 6l3 3 5-5" stroke="#14a148" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-['Satoshi',sans-serif] font-bold leading-[24px] text-[16px] text-[#14a148] text-center whitespace-nowrap">
              Connected
            </p>
          </a>
        ) : (
          <a
            href="https://app.loraloop.com/signin"
            className="bg-[#313b4a] hover:bg-[#3d4a5c] transition-colors flex gap-[4px] items-center justify-center px-[16px] py-[12px] rounded-[32px] w-full"
            data-name="Sign in to Connect"
          >
            <p className="font-['Satoshi',sans-serif] font-bold leading-[24px] text-[16px] text-white text-center whitespace-nowrap">
              Sign in to Connect
            </p>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
              <path d="M6 4l4 4-4 4" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>

      <ClaudeConnectModal open={claudeModalOpen} onOpenChange={setClaudeModalOpen} />
    </form>
  );
}
