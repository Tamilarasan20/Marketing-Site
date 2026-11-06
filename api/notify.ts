// Stores launch-waitlist emails from the site banner in Supabase (public.launch_waitlist).
// Needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY set in Vercel. The key never reaches the browser.

export const config = { runtime: 'edge' };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

const clip = (v: unknown, max: number) =>
  typeof v === 'string' && v.trim() ? v.trim().slice(0, max) : null;

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return json({ error: 'Invalid request' }, 400);
  }

  // Honeypot: real visitors never fill this hidden field. Pretend success to bots.
  if (typeof body.company === 'string' && body.company.trim()) return json({ ok: true });

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return json({ error: 'Please enter a valid email address.' }, 400);
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return json({ error: 'Waitlist is not configured.' }, 500);

  const row = {
    email,
    source_page: clip(body.page, 300),
    language: clip(body.lang, 16),
    referrer: clip(req.headers.get('referer'), 500),
    user_agent: clip(req.headers.get('user-agent'), 500),
  };

  try {
    const res = await fetch(`${url.replace(/\/$/, '')}/rest/v1/launch_waitlist?on_conflict=email`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        // Signing up twice is fine: keep the first row, report success.
        Prefer: 'resolution=ignore-duplicates,return=minimal',
      },
      body: JSON.stringify(row),
    });
    if (!res.ok) {
      console.error('launch_waitlist insert failed', res.status, await res.text());
      return json({ error: 'Something went wrong. Please try again.' }, 502);
    }
    return json({ ok: true });
  } catch (err) {
    console.error('launch_waitlist insert error', err);
    return json({ error: 'Something went wrong. Please try again.' }, 502);
  }
}
