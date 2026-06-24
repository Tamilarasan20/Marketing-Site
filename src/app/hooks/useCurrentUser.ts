import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export type CurrentUser = {
  name: string;
  avatarUrl?: string;
};

function extractUser(session: { user: { user_metadata?: Record<string, string>; email?: string } } | null): CurrentUser | null {
  if (!session?.user) return null;
  const meta = session.user.user_metadata as Record<string, string> | undefined;
  const name = meta?.full_name ?? meta?.name ?? session.user.email?.split('@')[0] ?? 'User';
  const avatarUrl = meta?.avatar_url ?? meta?.picture ?? undefined;
  return { name, avatarUrl };
}

export function useCurrentUser(): { user: CurrentUser | null; loading: boolean } {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(extractUser(session));
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(extractUser(session));
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { user, loading };
}
