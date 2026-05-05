import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router';
import { supabase } from '../../lib/supabase';
import thankYouImg from '../../../thank_you.png';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  useEffect(() => {
    const focusInput = () => {
      if (emailInputRef.current) {
        emailInputRef.current.focus();
      }
    };

    if (location.state?.focusEmail) {
      focusInput();
      // Clear state so it doesn't refocus on every render
      window.history.replaceState({}, document.title);
    }

    window.addEventListener('focus-waitlist-email', focusInput);
    return () => window.removeEventListener('focus-waitlist-email', focusInput);
  }, [location]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

    setIsLoading(true);

    try {
      const { error: supabaseError } = await supabase
        .from('Waiting List')
        .insert([{ Email: email, Time: new Date().toISOString() }]);

      if (supabaseError) {
        if (supabaseError.code === '23505') {
          setError('Email already in waiting list');
        } else {
          setError(supabaseError.message);
        }
      } else {
        setShowSuccess(true);
        setEmail('');
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form id="waitlist-form" onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[16px] items-center relative z-50 shrink-0 w-full px-4 md:px-0" data-name="Button Container">
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
            placeholder="enter your mail"
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
          disabled={isLoading}
          className={`bg-[#2a3040] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] relative rounded-[40px] shrink-0 w-full max-w-[220px] transition-opacity cursor-pointer ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
          data-name="Button"
        >
          <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#d1d5db] text-[16px] whitespace-nowrap">
            {isLoading ? 'Joining...' : 'Join Waitlist'}
          </p>
        </button>

        <div 
          onClick={() => {
            const el = document.getElementById('solution-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{ cursor: 'pointer', pointerEvents: 'auto' }}
          className="content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] relative z-[9999] rounded-[16px] shrink-0 w-full max-w-[220px]" 
          data-name="Button"
        >
          <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#d1d5db] text-[16px] whitespace-nowrap">See Solution</p>
          <div className="flex flex-col items-center justify-center ml-1">
            <svg className="w-[12px] h-[7px]" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg className="w-[12px] h-[7px] -mt-[1px]" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </form>

      {showSuccess && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 cursor-pointer"
          onClick={() => setShowSuccess(false)}
        >
          <div 
            className="bg-white rounded-[40px] overflow-hidden flex flex-col items-center relative animate-in fade-in zoom-in duration-300 cursor-default"
            style={{ width: '520px', height: '369px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-[200px] overflow-hidden">
              <img src={thankYouImg} alt="Thank you" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-center justify-center flex-1 p-6 text-center">
              <p className="text-[#6b7280] text-[18px] font-medium mb-2">Thanks for your interest!</p>
              <p className="text-[#1f2937] text-[24px] font-bold mb-6">Our team will be reach out to you.</p>
              <button 
                onClick={() => setShowSuccess(false)}
                className="bg-[#1877f2] text-white px-[48px] py-[12px] rounded-[120px] font-bold text-[18px] hover:bg-[#166fe5] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
