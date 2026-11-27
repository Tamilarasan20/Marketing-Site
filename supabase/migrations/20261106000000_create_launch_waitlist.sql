-- Applied to the "Loraloop" Supabase project on 2026-11-06.
-- Emails collected by the "new website launching" banner (api/notify.ts).
create table public.launch_waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique check (email = lower(email) and char_length(email) between 3 and 254),
  source_page text,
  language text,
  referrer text,
  user_agent text,
  created_at timestamptz not null default now()
);

comment on table public.launch_waitlist is 'Emails collected by the marketing-site "new website launching" banner. Written only by the /api/notify endpoint with the service role key.';

-- RLS on with no policies: anon/authenticated clients cannot read or write; only the service role can.
alter table public.launch_waitlist enable row level security;

create index launch_waitlist_created_at_idx on public.launch_waitlist (created_at desc);
