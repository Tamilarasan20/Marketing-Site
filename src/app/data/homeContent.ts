/**
 * Home page copy that both the React page and prerender.mjs read, so the HTML crawlers and
 * AI answer engines see matches what visitors see (FAQ, definition, guardrails, stack).
 */

export const HOME_H1 = 'Your AI marketing team runs ads, email, SEO and social every day. You approve every move.';

export const HOME_LEAD =
  'Connect Shopify, Klaviyo, Meta and Google Ads. Lora plans the week, drafts the work and proposes budget changes, then waits for your OK.';

/** The business tools buyers check for first, shown right under the hero. */
export const HOME_STACK = ['Shopify', 'Klaviyo', 'Meta Ads', 'Google Ads', 'Google Analytics', 'Search Console', 'WordPress', 'Instagram', 'LinkedIn', 'TikTok', 'YouTube'];

/** Controls backed by the app's execution policy (autonomy ladder, approval origin, caps, undo). */
export const HOME_GUARDRAILS: { title: string; body: string }[] = [
  {
    title: 'Autonomy you choose, per area',
    body: 'Observe only, suggest, approve every change (the default), or let Angie act on her own inside limits you set.',
  },
  {
    title: 'Approvals where you work',
    body: 'Approve, edit or reject in the app, your inbox or Slack. The AI can ask for approval but can never grant it.',
  },
  {
    title: 'Spend caps and a kill switch',
    body: 'Budget limits are checked again at the moment a change runs, and one switch stops every automatic action.',
  },
  {
    title: 'Every change logged, with undo',
    body: 'Each change records the before-state and the reason, so you can see what happened and reverse it.',
  },
  {
    title: 'Quiet hours',
    body: 'No automatic changes run outside the hours you allow.',
  },
  {
    title: 'One workspace per brand or client',
    body: 'Separate connections, brand knowledge and team access for every brand, which is how agencies run many clients.',
  },
  {
    title: 'Brand rules on every asset',
    body: 'Your voice, products, offers and claims to avoid live in one knowledge base that every agent follows.',
  },
  {
    title: 'A daily briefing, not ten dashboards',
    body: 'Each morning Lora reports what shipped, what needs your OK and how ads, email and SEO performed.',
  },
];

export const HOME_DEFINITION = {
  question: 'What is an AI marketing team?',
  answer:
    'An AI marketing team is a group of AI agents that each own a marketing job and work from one shared brand knowledge base. Instead of a tool that writes a single draft, it plans the work, produces it, launches it after approval and reports the results.',
  roles: [
    'Lora, marketing lead: plans the week, coordinates the team and sends the daily briefing.',
    "Angie, ads manager: builds and tests Meta and Google ad creative, watches competitors' ads and proposes budget changes.",
    'Sophie, SEO and GEO strategist: picks keywords from real search volume and ranking data and writes articles that rank on Google and get cited by AI search.',
    'Clara, email marketer: writes Klaviyo and Mailchimp campaigns and flows.',
  ],
  data:
    'Every decision starts from real data: your own Shopify, ad, email and analytics accounts, plus live market data on keyword volume and difficulty, Google rankings, AI Overview citations, backlinks, competitor ads, public social posts, reviews and company signals.',
  contrast:
    'Compared with an agency, it works every day and costs a fraction of a retainer. Compared with AI writing tools, it handles the whole job from plan to report, not only the first draft.',
};

export const HOME_FAQ: { q: string; a: string }[] = [
  {
    q: 'Who is Loraloop built for?',
    a: 'Marketing teams of one to ten at scaling companies: B2B SaaS, D2C and eCommerce brands, CPG brands and marketing agencies, typically 15 to 200 employees. The marketing manager or growth lead runs it day to day, and the VP of Marketing, CMO or founder sees the results in one daily briefing.',
  },
  {
    q: 'Does Loraloop replace our agency?',
    a: 'For content production, paid media management and reporting, yes. Loraloop does the work an agency retainer usually covers: posts, articles and emails every week, Meta and Google campaign management, competitor monitoring and reporting. Your team keeps the strategy and approves every change, and you can keep a specialist for brand work.',
  },
  {
    q: 'Will it publish or spend money without us knowing?',
    a: 'No. Every post, article, email and campaign lands in an approval queue first, and ad budget changes are proposed, not applied, until someone on your team signs off. You set the guardrails once and Loraloop works inside them.',
  },
  {
    q: 'Which tools does Loraloop connect to?',
    a: 'More than 4,000, including Shopify, Klaviyo, Mailchimp, Meta Ads, Google Ads, Google Analytics, Search Console, WordPress and Webflow, plus Instagram, Facebook, LinkedIn, X, TikTok and YouTube for social publishing. It also works inside Claude and ChatGPT.',
  },
  {
    q: 'Where does Loraloop get its data?',
    a: 'From two places. Your connected accounts (Shopify, Meta Ads, Google Ads, Klaviyo, Google Analytics and Search Console) show what is working for you. Live market data covers what is happening outside your accounts: keyword search volume and difficulty, Google rankings and AI Overview citations, backlinks and site authority, competitor ads, public social posts and trends, reviews, and company signals such as funding, hiring and tech stack.',
  },
  {
    q: 'How much does Loraloop cost?',
    a: 'Plans start at $39 a month for Starter, $99 for Pro and $199 for Scale, with 25% off annual billing. Every plan starts with a 3-day free trial and no credit card.',
  },
];
