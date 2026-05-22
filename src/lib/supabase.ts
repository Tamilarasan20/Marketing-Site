import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  'https://drnqqspylghahjriangs.supabase.co';
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'sb_publishable_F_b54GMmG_mSGKg1WBCbVQ_ORb0H-aA';

export const POST_AUTH_URL =
  import.meta.env.VITE_POST_AUTH_URL ||
  'https://github.com/Tamilarasan20/Loraloop-Main';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
  },
});
