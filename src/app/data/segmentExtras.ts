/**
 * Extra content for the industry pages, in the order the template renders it.
 * `examples[i]` is the data panel inside `jobs[i]` of the same segment: what that job
 * produces in a typical week, shown with sample numbers for a fictional brand (the page
 * labels them as examples). No customer results: add real ones when the owner supplies them.
 */
export type Tone = 'up' | 'down' | 'warn' | 'ok' | 'plain';

export interface JobExample {
  head: string;
  rows: { k: string; v: string; tone?: Tone }[];
}

export interface SegmentExtras {
  examples: JobExample[];
  why: { lead: string; rest: string; body: string; points: string[] };
  teammate: { lead: string; rest: string; points: { t: string; b: string }[] };
  integrations: { tool: string; job: string }[];
  ctaQuestion: string;
  trust: string;
}

const TEAMMATE_POINTS = [
  { t: 'Remembers your brand', b: 'Voice, products, offers and claims to avoid live in one knowledge base every agent reads.' },
  { t: 'Learns from your edits', b: 'Approvals, rejections and changes become the standard for the next draft.' },
  { t: 'Asks before it acts', b: 'Work waits in an approval queue in the app, your inbox or Slack until you say yes.' },
];

export const segmentExtras: Record<string, SegmentExtras> = {
  '/for-ecommerce': {
    examples: [
      { head: 'Ad set · Morning roast UGC', rows: [{ k: 'Frequency', v: '4.6', tone: 'warn' }, { k: 'CTR, last 7 days', v: '−38%', tone: 'down' }, { k: 'New variations drafted', v: '6', tone: 'ok' }] },
      { head: 'Search terms review', rows: [{ k: 'Terms with spend, no sales', v: '23' }, { k: 'Spend on them, 30 days', v: '$412', tone: 'down' }, { k: 'Negatives proposed', v: '23', tone: 'ok' }] },
      { head: 'Post-purchase flow', rows: [{ k: 'Emails in flow', v: '3' }, { k: 'Reorder reminder', v: 'Day 25' }, { k: 'Status', v: 'Waiting for OK', tone: 'warn' }] },
      { head: 'This week from your catalogue', rows: [{ k: 'Products featured', v: '8' }, { k: 'Posts drafted', v: '12' }, { k: 'Launch assets', v: '1 kit', tone: 'ok' }] },
      { head: 'Buying guide · cold brew', rows: [{ k: 'Search volume', v: '8.9K / mo' }, { k: 'Difficulty', v: '18 · easy', tone: 'ok' }, { k: 'AI Overview', v: 'Cited', tone: 'up' }] },
      { head: 'Morning briefing · Mon', rows: [{ k: 'Revenue', v: '$4,820', tone: 'up' }, { k: 'Blended ROAS', v: '3.1x', tone: 'up' }, { k: 'Decisions waiting', v: '3', tone: 'warn' }] },
    ],
    why: {
      lead: 'Growing stores outgrow',
      rest: 'the time it takes to market them.',
      body: 'Every new product, promo and season multiplies the work: new ads, new emails, new pages, new reports. Most teams fall behind on the one that would have paid off most.',
      points: ['Creative fatigues faster than a small team can replace it', 'Email flows get set up once and never improved', 'Reporting lives in five tools and nobody reads it'],
    },
    teammate: { lead: 'A marketing teammate', rest: 'that knows your catalogue.', points: TEAMMATE_POINTS },
    integrations: [
      { tool: 'Shopify', job: 'Plan campaigns around products, orders and launches' },
      { tool: 'Klaviyo', job: 'Write and schedule flows and campaigns' },
      { tool: 'Meta Ads', job: 'Refresh creative and move budget to winners' },
      { tool: 'Google Ads', job: 'Cut wasted spend with negative keywords' },
      { tool: 'Google Analytics', job: 'Report revenue and ROAS each morning' },
      { tool: 'Search Console', job: 'Find buying-guide topics you almost rank for' },
      { tool: 'Instagram and TikTok', job: 'Post product content on a set calendar' },
      { tool: 'Meta Ad Library', job: 'See what competitors launch each week' },
    ],
    ctaQuestion: 'Ready for marketing that keeps up with your store?',
    trust: 'Built for Shopify, DTC and CPG brands',
  },
  '/for-saas': {
    examples: [
      { head: 'Article · competitor comparison', rows: [{ k: 'Target keyword volume', v: '1.6K / mo' }, { k: 'Draft score', v: '92 / 100', tone: 'ok' }, { k: 'Status', v: 'Waiting for OK', tone: 'warn' }] },
      { head: 'AI search check', rows: [{ k: 'Prompts tracked', v: '24' }, { k: 'Cited in answers', v: '9', tone: 'up' }, { k: 'Pages to restructure', v: '3', tone: 'warn' }] },
      { head: 'LinkedIn this week', rows: [{ k: 'Founder posts drafted', v: '3' }, { k: 'Company posts', v: '2' }, { k: 'Source', v: 'Changelog + blog' }] },
      { head: 'Google Ads · signup campaign', rows: [{ k: 'Keyword with no signups', v: '"free crm"', tone: 'down' }, { k: 'Spend, 14 days', v: '$268', tone: 'down' }, { k: 'Proposal', v: 'Pause', tone: 'warn' }] },
      { head: 'Competitor scan', rows: [{ k: 'New ads this week', v: '11' }, { k: 'New pricing page', v: '1', tone: 'warn' }, { k: 'Keywords they gained', v: '37' }] },
      { head: 'Weekly report', rows: [{ k: 'Organic signups', v: '+14%', tone: 'up' }, { k: 'Articles shipped', v: '4' }, { k: 'Paid CAC', v: '−9%', tone: 'up' }] },
    ],
    why: {
      lead: 'Demand gen is ten jobs.',
      rest: 'Most SaaS teams have two people.',
      body: 'Content, SEO, social, paid search, competitor research and reporting all compete for the same few hours. The urgent work wins and the compounding work, search and AI visibility, slips.',
      points: ['SEO takes months, so it is always next quarter', 'LinkedIn goes quiet during launches', 'Leadership asks for a report nobody has time to build'],
    },
    teammate: { lead: 'A growth teammate', rest: 'that ships while you sell.', points: TEAMMATE_POINTS },
    integrations: [
      { tool: 'Search Console', job: 'Find keywords you are close to ranking for' },
      { tool: 'Google Analytics', job: 'Track signups by channel and page' },
      { tool: 'WordPress and Webflow', job: 'Publish approved articles directly' },
      { tool: 'LinkedIn', job: 'Schedule founder and company posts' },
      { tool: 'LinkedIn Ads', job: 'Watch cost per lead and propose changes' },
      { tool: 'Google Ads', job: 'Pause keywords that spend without signups' },
      { tool: 'Slack', job: 'Approve drafts and get the weekly report' },
      { tool: 'Market data', job: 'See the keywords and backlinks competitors win' },
    ],
    ctaQuestion: 'Ready to ship demand gen every week?',
    trust: 'Built for B2B SaaS and growth-stage teams',
  },
  '/for-agencies': {
    examples: [
      { head: 'Workspaces', rows: [{ k: 'Client brands', v: '12' }, { k: 'Connections per client', v: '4 to 9' }, { k: 'Shared data', v: 'None', tone: 'ok' }] },
      { head: 'Monday reports', rows: [{ k: 'Reports drafted', v: '12 of 12', tone: 'ok' }, { k: 'Time to review', v: '~5 min each' }, { k: 'Flags for strategists', v: '4', tone: 'warn' }] },
      { head: 'Content this week', rows: [{ k: 'Drafts across clients', v: '86' }, { k: 'Sent for client OK', v: '31' }, { k: 'Approved', v: '55', tone: 'ok' }] },
      { head: 'Ad accounts checked', rows: [{ k: 'Accounts', v: '18' }, { k: 'Fixes queued', v: '9', tone: 'warn' }, { k: 'Over target CPA', v: '3', tone: 'down' }] },
      { head: 'Client approvals', rows: [{ k: 'Waiting on client', v: '6', tone: 'warn' }, { k: 'Approved in Slack', v: '14', tone: 'ok' }, { k: 'Average turnaround', v: '1 day' }] },
      { head: 'Competitor tracking', rows: [{ k: 'Competitors watched', v: '41' }, { k: 'New offers spotted', v: '7', tone: 'up' }, { k: 'Ideas for next call', v: '12' }] },
    ],
    why: {
      lead: 'Every new client',
      rest: 'used to mean another hire.',
      body: 'Production and reporting grow with each retainer, while strategy time shrinks. Margins depend on doing the repeatable work faster without letting quality drop.',
      points: ['Reports eat Monday for every client', 'Ad accounts get checked less as the roster grows', 'Content backlogs slow approvals and renewals'],
    },
    teammate: { lead: 'A production team', rest: 'for every client you sign.', points: TEAMMATE_POINTS },
    integrations: [
      { tool: 'Meta Ads', job: 'Daily checks and creative across client accounts' },
      { tool: 'Google Ads', job: 'Wasted spend and bid changes per client' },
      { tool: 'Google Analytics', job: 'Client reports from real traffic data' },
      { tool: 'Search Console', job: 'SEO opportunities per client site' },
      { tool: 'Klaviyo', job: 'Client email flows and campaigns' },
      { tool: 'Shopify', job: 'Product-led campaigns for retail clients' },
      { tool: 'Slack', job: 'Client and team approvals in one thread' },
      { tool: 'Instagram and LinkedIn', job: 'Scheduled posts per client brand' },
    ],
    ctaQuestion: 'Ready to add clients without hiring for each one?',
    trust: 'Built for agencies and fractional CMOs',
  },
  '/for-media-buyers': {
    examples: [
      { head: 'Morning check · 6:00 AM', rows: [{ k: 'Ad sets reviewed', v: '64' }, { k: 'Above target CPA', v: '2', tone: 'down' }, { k: 'Fixes proposed', v: '5', tone: 'warn' }] },
      { head: 'Fatiguing winner', rows: [{ k: 'Frequency', v: '5.1', tone: 'warn' }, { k: 'Hook rate trend', v: '−22%', tone: 'down' }, { k: 'Variations ready', v: '6', tone: 'ok' }] },
      { head: 'Budget proposal', rows: [{ k: 'Prospecting UGC', v: '$150 → $190' }, { k: 'Reason', v: 'CPA −18%, 7d', tone: 'up' }, { k: 'Status', v: 'Approve in Slack', tone: 'warn' }] },
      { head: 'Search terms, this week', rows: [{ k: 'Terms reviewed', v: '1,240' }, { k: 'Spending, no conversions', v: '14', tone: 'down' }, { k: 'Negatives proposed', v: '14', tone: 'ok' }] },
      { head: 'Competitor hooks', rows: [{ k: 'New competitor ads', v: '27' }, { k: 'Running 30+ days', v: '6', tone: 'up' }, { k: 'Angles to test', v: '3' }] },
      { head: 'Guardrails', rows: [{ k: 'Daily spend cap', v: '$2,000' }, { k: 'Quiet hours', v: '10 PM–6 AM' }, { k: 'Undo available', v: 'Every change', tone: 'ok' }] },
    ],
    why: {
      lead: 'Ads Manager rewards',
      rest: 'whoever checks it most often.',
      body: 'Fatigue, rising CPMs and wasted search spend show up daily. When one buyer covers many accounts, the checks get less frequent and the fixes come late.',
      points: ['Winners fatigue before new creative is ready', 'Search terms get reviewed once a month', 'Budget moves wait until someone has time'],
    },
    teammate: { lead: 'A second buyer', rest: 'that never misses a morning.', points: TEAMMATE_POINTS },
    integrations: [
      { tool: 'Meta Ads', job: 'Daily checks, creative and budget proposals' },
      { tool: 'Google Ads', job: 'Search terms, negatives and bids' },
      { tool: 'TikTok Ads', job: 'Spark ad performance and refresh' },
      { tool: 'LinkedIn Ads', job: 'Cost per lead and audience checks' },
      { tool: 'Meta Ad Library', job: 'Competitor hooks and long-running ads' },
      { tool: 'Shopify', job: 'Revenue truth for ROAS decisions' },
      { tool: 'Google Analytics', job: 'Blended results across channels' },
      { tool: 'Slack', job: 'Approve or reject changes in one tap' },
    ],
    ctaQuestion: 'Ready to stop living in Ads Manager?',
    trust: 'Built for media buyers and growth leads',
  },
  '/for-marketing-teams': {
    examples: [
      { head: 'Weekly plan', rows: [{ k: 'Goal', v: 'Pipeline +15%' }, { k: 'Priorities', v: '5' }, { k: 'Ready by', v: 'Monday 8 AM', tone: 'ok' }] },
      { head: 'Next week\'s calendar', rows: [{ k: 'Posts drafted', v: '14' }, { k: 'Channels', v: '4' }, { k: 'Waiting for OK', v: '6', tone: 'warn' }] },
      { head: 'Newsletter', rows: [{ k: 'Draft', v: 'Ready', tone: 'ok' }, { k: 'Segment', v: 'Active subscribers' }, { k: 'Send', v: 'Thu 9 AM' }] },
      { head: 'Ad check', rows: [{ k: 'Campaigns', v: '7' }, { k: 'Budget change proposed', v: '1', tone: 'warn' }, { k: 'New creative', v: '4 drafts' }] },
      { head: 'Engagement inbox', rows: [{ k: 'New comments and DMs', v: '38' }, { k: 'Replies drafted', v: '31', tone: 'ok' }, { k: 'Held for a person', v: '7', tone: 'warn' }] },
      { head: 'Report for leadership', rows: [{ k: 'Traffic', v: '+11%', tone: 'up' }, { k: 'Content shipped', v: '22' }, { k: 'Decisions needed', v: '2', tone: 'warn' }] },
    ],
    why: {
      lead: 'Strategy needs time.',
      rest: 'Daily execution takes all of it.',
      body: 'Scheduling, routine ad changes, newsletters and reports fill the week for a small team. The plan for next quarter gets written in the gaps, if at all.',
      points: ['The calendar is always one week behind', 'Ad accounts get checked when something breaks', 'Monthly reporting takes a full day'],
    },
    teammate: { lead: 'The extra hands', rest: 'your team never got to hire.', points: TEAMMATE_POINTS },
    integrations: [
      { tool: 'Google Analytics', job: 'Goals, traffic and the leadership report' },
      { tool: 'Search Console', job: 'Content ideas from real search data' },
      { tool: 'Meta Ads and Google Ads', job: 'Routine checks and budget proposals' },
      { tool: 'Klaviyo and Mailchimp', job: 'Newsletters and campaigns' },
      { tool: 'Instagram and Facebook', job: 'Posts, comments and messages' },
      { tool: 'LinkedIn', job: 'Company and leadership posts' },
      { tool: 'WordPress and Webflow', job: 'Publish approved articles' },
      { tool: 'Slack', job: 'Approvals and the morning briefing' },
    ],
    ctaQuestion: 'Ready to get your week back?',
    trust: 'Built for marketing teams of one to ten',
  },
  '/for-local-businesses': {
    examples: [
      { head: 'Area page · emergency plumber', rows: [{ k: 'Local searches', v: '1,300 / mo' }, { k: 'Competing pages', v: 'Weak', tone: 'ok' }, { k: 'Status', v: 'Draft ready', tone: 'warn' }] },
      { head: 'Locations this week', rows: [{ k: 'Locations', v: '6' }, { k: 'Posts scheduled', v: '24', tone: 'ok' }, { k: 'Seasonal offer', v: 'All locations' }] },
      { head: 'Replies', rows: [{ k: 'Comments and DMs', v: '52' }, { k: 'Drafted', v: '45', tone: 'ok' }, { k: 'Held for review', v: '7', tone: 'warn' }] },
      { head: 'Local ads', rows: [{ k: 'Best area by cost per lead', v: 'North side', tone: 'up' }, { k: 'Budget proposal', v: '+$25/day' }, { k: 'Status', v: 'Waiting for OK', tone: 'warn' }] },
      { head: 'Brand rules', rows: [{ k: 'Claims to avoid', v: '12' }, { k: 'Required disclaimers', v: '2' }, { k: 'Applied to', v: 'Every draft', tone: 'ok' }] },
      { head: 'Weekly by location', rows: [{ k: 'Sessions', v: '+18%', tone: 'up' }, { k: 'Leads', v: '64' }, { k: 'Top location', v: 'Downtown' }] },
    ],
    why: {
      lead: 'Local customers decide',
      rest: 'in one search.',
      body: 'People compare a few nearby options, read what is fresh and pick. Keeping every location active, answered and visible is a full-time job most local teams do not have.',
      points: ['Service pages miss the areas you actually cover', 'Social goes quiet at busy locations', 'Comments and messages wait days for a reply'],
    },
    teammate: { lead: 'A marketer', rest: 'for every location.', points: TEAMMATE_POINTS },
    integrations: [
      { tool: 'Google Ads', job: 'Local search campaigns by area' },
      { tool: 'Meta Ads', job: 'Local offers and seasonal promotions' },
      { tool: 'Search Console', job: 'Service and area searches you can win' },
      { tool: 'Google Analytics', job: 'Leads and traffic by location' },
      { tool: 'Instagram and Facebook', job: 'Posts, comments and messages per location' },
      { tool: 'WordPress', job: 'Publish service and area pages' },
      { tool: 'Slack', job: 'Approve replies and offers quickly' },
      { tool: 'Workspaces', job: 'Separate brand rules per location or franchisee' },
    ],
    ctaQuestion: 'Ready to win the nearby search?',
    trust: 'Built for clinics, home services and franchises',
  },
};
