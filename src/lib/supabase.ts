import { createClient, type SupabaseClient, type SupportedStorage } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  console.error('Missing Supabase environment variables');
}

// Derive the root domain so cookies are visible across all subdomains
// (loraloop.com, app.loraloop.com, www.loraloop.com, etc.).
// On localhost we omit the domain attribute so the browser accepts the cookie.
function getRootDomain(): string {
  if (typeof window === 'undefined') return '.loraloop.com';
  const { hostname } = window.location;
  if (hostname === 'localhost' || /^127\./.test(hostname) || /^192\.168\./.test(hostname)) {
    return '';
  }
  const parts = hostname.split('.');
  return parts.length >= 2 ? `.${parts.slice(-2).join('.')}` : '';
}

const COOKIE_DOMAIN = getRootDomain();
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

// Cookie storage adapter.
// Supabase's default adapter uses localStorage which is scoped to a single
// origin. Replacing it with cookies set at the root domain lets a session
// created on app.loraloop.com be read on loraloop.com (this marketing site)
// — and vice versa — without any server round-trip.
//
// The app (app.loraloop.com) must use the same adapter for the session to
// be shared; update its createClient call identically.
const cookieStorage: SupportedStorage = {
  getItem(key: string): string | null {
    if (typeof document === 'undefined') return null;
    const row = document.cookie
      .split('; ')
      .find(r => r.startsWith(`${key}=`));
    return row ? decodeURIComponent(row.slice(key.length + 1)) : null;
  },
  setItem(key: string, value: string): void {
    if (typeof document === 'undefined') return;
    const domainAttr = COOKIE_DOMAIN ? ` domain=${COOKIE_DOMAIN};` : '';
    const secureAttr = COOKIE_DOMAIN ? ' Secure;' : '';
    document.cookie = `${key}=${encodeURIComponent(value)};${domainAttr} path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax;${secureAttr}`;
  },
  removeItem(key: string): void {
    if (typeof document === 'undefined') return;
    const domainAttr = COOKIE_DOMAIN ? ` domain=${COOKIE_DOMAIN};` : '';
    document.cookie = `${key}=;${domainAttr} path=/; max-age=0; SameSite=Lax`;
  },
};

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        storage: cookieStorage,
        persistSession: true,
        detectSessionInUrl: true,
      },
    })
  : null;

export const APP_URL =
  import.meta.env.VITE_APP_URL || 'https://loraloop-main-api.vercel.app';
