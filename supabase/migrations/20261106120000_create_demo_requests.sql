-- Applied to the "Loraloop" Supabase project on 2026-11-06.
-- "Book a demo" requests from the pricing page (api/book-demo.ts).
-- One row per request: a person who asks twice shows up twice, with the time of each ask.
create table public.demo_requests (
  id uuid primary key default gen_random_uuid(),
  email text not null check (email = lower(email) and char_length(email) between 3 and 254),
  plan text,
  source_page text,
  language text,
  referrer text,
  user_agent text,
  created_at timestamptz not null default now()
);

comment on table public.demo_requests is 'Book-a-demo requests from the marketing-site pricing page. Written only by the /api/book-demo endpoint with the service role key.';

-- RLS on with no policies: anon/authenticated clients cannot read or write; only the service role can.
alter table public.demo_requests enable row level security;

create index demo_requests_created_at_idx on public.demo_requests (created_at desc);
create index demo_requests_email_idx on public.demo_requests (email);
