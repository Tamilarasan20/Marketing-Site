/**
 * Free Meta ads audit landing page (/free-meta-ads-audit). One source for the React page and
 * prerender.mjs (via pageMeta.ts), so the crawler HTML and the rendered page say the same thing.
 *
 * The checks mirror the Meta dimensions of the app's account audit
 * (loraloop-main apps/api/src/platform/sam/findings/audit-dimensions.ts). Keep them in sync:
 * the page must never promise a check the audit does not run.
 */

export const META_AUDIT_PATH = '/free-meta-ads-audit';

/** Pre-filled in the Lora chat after signup (never sent automatically: sending spends credits). */
export const META_AUDIT_PROMPT =
  'Run a full audit of my Meta ads account. Check spend with zero conversions, cost per conversion against my baseline, budget pacing, delivery, conversion tracking, placements, dayparts, devices, budget fragmentation and creative fatigue. Rank the fixes by money at stake per month.';

/** Signup, then straight to the chat with the audit request typed in. */
export const META_AUDIT_URL = `https://app.loraloop.com/signup?next=${encodeURIComponent(
  `/chat?prompt=${encodeURIComponent(META_AUDIT_PROMPT)}`,
)}`;

export const META_AUDIT_H1 = 'Free Meta ads audit: find the spend that is not working';

export const META_AUDIT_LEAD =
  'Connect your Meta ad account and Loraloop checks it for wasted spend, broken tracking, worn-out creative and budget problems. You get a score, the money at stake each month and a ranked list of fixes. Free with the 3-day trial, no credit card.';

export const META_AUDIT_ANSWER =
  'A Meta ads audit is a check of your ad account for money that is not producing results: spend with no conversions, cost per conversion above your own baseline, broken or missing conversion tracking, low-value placements, hours and devices that do not convert, budgets split too thin, ads that have worn out and campaigns that stopped delivering. Loraloop runs these checks on your real account data and ranks each fix by the monthly spend at stake.';

export interface AuditCheck {
  title: string;
  body: string;
  group: 'Waste' | 'Tracking' | 'Budget' | 'Creative and delivery';
}

export const META_AUDIT_CHECKS: AuditCheck[] = [
  { group: 'Waste', title: 'Spend with zero conversions', body: 'Campaigns, ad sets and ads that spent money in the period and produced no conversions.' },
  { group: 'Waste', title: 'Cost per conversion vs your baseline', body: 'Where cost per conversion has climbed well above what your own account normally pays.' },
  { group: 'Waste', title: 'Low-value placements', body: 'Placements that take budget but rarely convert, so you can exclude them.' },
  { group: 'Waste', title: 'Hours that do not convert', body: 'Times of day where spend keeps running and conversions do not follow.' },
  { group: 'Waste', title: 'Device efficiency', body: 'Devices where your cost per conversion is far worse than the rest of the account.' },
  { group: 'Tracking', title: 'Conversion tracking is present', body: 'Whether your pixel and Conversions API are reporting the conversions your campaigns optimize for.' },
  { group: 'Tracking', title: 'Conversion tracking looks right', body: 'Sudden drops, spikes or gaps in reported conversions that point to a tracking problem rather than a performance one.' },
  { group: 'Budget', title: 'Budget caps and pacing', body: 'Winners held back by their budget, and campaigns spending faster or slower than planned.' },
  { group: 'Budget', title: 'Budgets split too thin', body: 'Many small budgets that each get too little data for Meta to optimize well.' },
  { group: 'Creative and delivery', title: 'Creative fatigue', body: 'Ads whose results are falling as the same people see them again and again.' },
  { group: 'Creative and delivery', title: 'Delivery stopped', body: 'Campaigns that were meant to run but stopped spending.' },
];

export const META_AUDIT_STEPS = [
  { title: 'Start your free trial', body: 'Sign up with your work email. No credit card needed.' },
  { title: 'Connect your Meta ad account', body: 'Sign in with the Meta login you use for Ads Manager and pick the ad account. Running the audit changes nothing in it.' },
  { title: 'Send the audit request', body: 'The audit request is typed in for you in the Lora chat. Press send and the checks run on your account.' },
];

export const META_AUDIT_OUTPUT = [
  { title: 'An account score', body: 'One score across the checks that could run, with a note on any check that had too little data.' },
  { title: 'Money at stake', body: 'A low and high estimate of the monthly spend you could recover, in USD.' },
  { title: 'Ranked fixes', body: 'Each finding with the evidence, the monthly amount at stake and the fix, biggest first.' },
  { title: 'Fixes on your approval', body: 'Loraloop can apply the fixes it supports, but only after you approve each one.' },
];

export const META_AUDIT_FAQ = [
  { q: 'Is the Meta ads audit really free?', a: 'Yes. It runs inside the 3-day free trial, which needs no credit card, so nothing is charged if you decide not to continue.' },
  { q: 'Will the audit change anything in my ad account?', a: 'No. The audit only reads your account data. Fixes are proposed separately, and nothing is changed until you approve it.' },
  { q: 'What do I need to run it?', a: 'A Meta ad account with some spend in the last 30 days and access to connect it. Accounts with very little spend may get fewer scored checks, and the report says which ones.' },
  { q: 'How long does the audit take?', a: 'It starts as soon as your account is connected and you send the request. Larger accounts with many campaigns take longer than small ones.' },
  { q: 'Can agencies audit client accounts?', a: 'Yes. Connect each client ad account you manage and run the audit per account, so every client gets its own score and ranked fixes.' },
  { q: 'Does it work for Google Ads and TikTok too?', a: 'Yes. The same audit covers Google Ads and TikTok ads, with extra checks for Google such as search-term waste and Quality Score.' },
];

export const META_AUDIT_TITLE = 'Free Meta Ads Audit: Find Wasted Spend';
export const META_AUDIT_DESCRIPTION =
  'Free Meta ads audit: check wasted spend, tracking, placements, budgets and creative fatigue, with a score and fixes ranked by money at stake.';
