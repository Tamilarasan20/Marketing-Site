import mixpanel, { type Dict } from 'mixpanel-browser';
import { supabase } from './supabase';

const TOKEN =
  import.meta.env.VITE_MIXPANEL_TOKEN || 'ceda257f9d088c023f451b4ab0612e7f';

const IS_PROD = import.meta.env.PROD;
const ENABLED = Boolean(TOKEN) && typeof window !== 'undefined';

let initialized = false;
let lastTrackedPath: string | null = null;

export function initAnalytics(): void {
  if (!ENABLED || initialized) return;

  mixpanel.init(TOKEN, {
    debug: !IS_PROD,
    persistence: 'localStorage',
    ignore_dnt: false,
    // SPA: we'll manually fire pageviews on route change to avoid duplicates.
    track_pageview: false,
    autocapture: true,
    record_sessions_percent: IS_PROD ? 10 : 100,
    record_mask_text_selector: '[data-private], input[type="password"]',
  });

  initialized = true;

  // Track the initial pageview once.
  trackPageview();

  // Hook Supabase auth so identify/reset happen automatically.
  wireSupabaseAuth();
}

function wireSupabaseAuth(): void {
  if (!supabase) return;

  supabase.auth.getUser().then(({ data }) => {
    if (data.user) identifyUser(data.user.id, {
      email: data.user.email,
      name: data.user.user_metadata?.full_name,
    });
  }).catch(() => { /* anon user, ignore */ });

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' && session?.user) {
      identifyUser(session.user.id, {
        email: session.user.email,
        name: session.user.user_metadata?.full_name,
      });
    } else if (event === 'SIGNED_OUT') {
      resetUser();
    }
  });
}

export function trackEvent(name: string, props?: Dict): void {
  if (!ENABLED || !initialized) return;
  try {
    mixpanel.track(name, props);
  } catch (err) {
    if (!IS_PROD) console.warn('[mixpanel] track failed', err);
  }
}

export function identifyUser(
  userId: string,
  traits?: { email?: string | null; name?: string | null } & Dict,
): void {
  if (!ENABLED || !initialized || !userId) return;
  try {
    mixpanel.identify(userId);
    const { email, name, ...rest } = traits ?? {};
    mixpanel.people.set({
      ...(email ? { $email: email } : {}),
      ...(name ? { $name: name } : {}),
      ...rest,
    });
  } catch (err) {
    if (!IS_PROD) console.warn('[mixpanel] identify failed', err);
  }
}

export function resetUser(): void {
  if (!ENABLED || !initialized) return;
  try {
    mixpanel.reset();
    lastTrackedPath = null;
  } catch { /* noop */ }
}

export function trackPageview(path?: string): void {
  if (!ENABLED || !initialized) return;
  const p = path ?? window.location.pathname + window.location.search;
  if (p === lastTrackedPath) return;
  lastTrackedPath = p;
  try {
    mixpanel.track_pageview({ page: p });
  } catch { /* noop */ }
}

// Canonical event names. Always go through these to avoid typos.
export const EVENTS = {
  SIGNUP_STARTED: 'signup_started',
  SIGNUP_COMPLETED: 'signup_completed',
  WORKSPACE_CREATED: 'workspace_created',
  AI_GENERATION_STARTED: 'ai_generation_started',
  AI_GENERATION_COMPLETED: 'ai_generation_completed',
  CREDITS_CONSUMED: 'credits_consumed',
  SUBSCRIPTION_STARTED: 'subscription_started',
} as const;

export type AnalyticsEvent = (typeof EVENTS)[keyof typeof EVENTS];

export default mixpanel;
