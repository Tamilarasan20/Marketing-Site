/**
 * Internal-link map for the growth posts (ids 122-171): hand-picked related posts and the
 * free tools that pair with each article. Applied in loraloopGrowthBlogData.ts.
 *
 * Clusters:
 *  - creative:  Meta creative testing (122-131, 139, 159, 162, 163)
 *  - ops:       Meta campaign operations (132-141, 165, 170, 171)
 *  - worker:    delegating to an AI marketing worker (142-151, 152, 166)
 *  - channels:  multi-channel execution (152-161)
 *  - compare:   buyer-intent comparisons (162-171)
 */
export interface PostRelations {
  related: string[];
  tools?: string[];
}

const HOOK = 'hook-rate-calculator';
const TESTS = 'creative-testing-calculator';
const ROAS = 'break-even-roas-calculator';

export const blogRelations: Record<string, PostRelations> = {
  // ── Creative testing cluster ───────────────────────────────────────────────
  'meta-ads-creative-testing-framework-2026': { related: ['how-many-ad-creatives-to-test-per-week', 'hook-rate-hold-rate-thumbstop-creative-metrics', 'creative-strategist-workflow-20-ads-a-week', 'best-ad-creative-testing-tools-dtc'], tools: [TESTS, HOOK, 'hook-generator'] },
  'how-many-ad-creatives-to-test-per-week': { related: ['meta-ads-creative-testing-framework-2026', 'ad-creative-production-pipeline-dtc', 'how-to-scale-meta-ads-without-killing-roas', 'creative-fatigue-meta-ads-detect-and-fix'], tools: [TESTS, ROAS] },
  'creative-fatigue-meta-ads-detect-and-fix': { related: ['find-new-ad-angles-when-winners-stop-working', 'how-many-ad-creatives-to-test-per-week', 'meta-ads-cpm-rising-how-to-lower-cost-per-result', 'meta-ads-daily-monitoring-checklist'], tools: [HOOK, TESTS] },
  'find-new-ad-angles-when-winners-stop-working': { related: ['creative-fatigue-meta-ads-detect-and-fix', 'ugc-vs-static-vs-video-ads-meta', 'competitor-ad-research-meta-ad-library', 'ai-generated-ad-copy-best-practices'], tools: ['hook-generator', 'ad-copy'] },
  'ugc-vs-static-vs-video-ads-meta': { related: ['hook-rate-hold-rate-thumbstop-creative-metrics', 'find-new-ad-angles-when-winners-stop-working', 'meta-ads-creative-testing-framework-2026', 'ai-ad-creative-generator-meta-ads'], tools: [HOOK, 'hook-generator'] },
  'ai-ad-creative-generator-meta-ads': { related: ['best-ai-tools-for-meta-ads-2026', 'loraloop-vs-adcreative-ai', 'ai-generated-ad-copy-best-practices', 'ad-creative-production-pipeline-dtc'], tools: ['ad-copy', 'facebook-ad-headlines'] },
  'creative-strategist-workflow-20-ads-a-week': { related: ['ad-creative-production-pipeline-dtc', 'meta-ads-creative-testing-framework-2026', 'competitor-ad-research-meta-ad-library', 'how-many-ad-creatives-to-test-per-week'], tools: [TESTS, 'hook-generator'] },
  'meta-andromeda-creative-diversity': { related: ['meta-ads-creative-testing-framework-2026', 'advantage-plus-shopping-campaigns-creative-testing', 'ugc-vs-static-vs-video-ads-meta', 'meta-ads-multiple-products-markets-account-structure'], tools: [TESTS] },
  'advantage-plus-shopping-campaigns-creative-testing': { related: ['meta-andromeda-creative-diversity', 'meta-ads-creative-testing-framework-2026', 'how-to-scale-meta-ads-without-killing-roas', 'meta-ads-glossary'], tools: [TESTS, ROAS] },
  'hook-rate-hold-rate-thumbstop-creative-metrics': { related: ['ugc-vs-static-vs-video-ads-meta', 'creative-fatigue-meta-ads-detect-and-fix', 'meta-ads-creative-testing-framework-2026', 'meta-ads-glossary'], tools: [HOOK] },

  // ── Campaign operations cluster ────────────────────────────────────────────
  'meta-ads-daily-monitoring-checklist': { related: ['how-to-scale-meta-ads-without-killing-roas', 'creative-fatigue-meta-ads-detect-and-fix', 'meta-ads-cpm-rising-how-to-lower-cost-per-result', 'ai-media-buyer-vs-human-media-buyer'], tools: [ROAS, HOOK] },
  'how-to-scale-meta-ads-without-killing-roas': { related: ['meta-ads-daily-monitoring-checklist', 'how-many-ad-creatives-to-test-per-week', 'meta-ads-multiple-products-markets-account-structure', 'advantage-plus-shopping-campaigns-creative-testing'], tools: [ROAS, TESTS] },
  'meta-ads-client-reporting-agency-template': { related: ['performance-marketing-agency-ai-automation', 'best-marketing-reporting-tools-small-teams-2026', 'automated-marketing-reporting-small-business', 'meta-ads-glossary'], tools: [ROAS] },
  'performance-marketing-agency-ai-automation': { related: ['ai-media-buyer-vs-human-media-buyer', 'meta-ads-client-reporting-agency-template', 'ai-marketing-tools-for-agencies-scale-delivery', 'how-to-use-ai-to-manage-meta-ads-step-by-step'], tools: [TESTS] },
  'ai-media-buyer-vs-human-media-buyer': { related: ['performance-marketing-agency-ai-automation', 'how-to-use-ai-to-manage-meta-ads-step-by-step', 'human-in-the-loop-marketing-approval-workflow', 'loraloop-vs-madgicx'], tools: [ROAS] },
  'competitor-ad-research-meta-ad-library': { related: ['find-new-ad-angles-when-winners-stop-working', 'best-competitor-ad-monitoring-tools-2026', 'ai-competitor-monitoring-small-business', 'creative-strategist-workflow-20-ads-a-week'], tools: ['competitor-audit'] },
  'meta-ads-multiple-products-markets-account-structure': { related: ['how-to-scale-meta-ads-without-killing-roas', 'meta-andromeda-creative-diversity', 'meta-ads-client-reporting-agency-template', 'meta-ads-glossary'], tools: [ROAS] },
  'ad-creative-production-pipeline-dtc': { related: ['creative-strategist-workflow-20-ads-a-week', 'how-many-ad-creatives-to-test-per-week', 'ai-ad-creative-generator-meta-ads', 'best-ad-creative-testing-tools-dtc'], tools: [TESTS, 'hook-generator'] },
  'meta-ads-cpm-rising-how-to-lower-cost-per-result': { related: ['creative-fatigue-meta-ads-detect-and-fix', 'ad-to-landing-page-message-match', 'hook-rate-hold-rate-thumbstop-creative-metrics', 'meta-ads-daily-monitoring-checklist'], tools: [ROAS, HOOK] },
  'ad-to-landing-page-message-match': { related: ['meta-ads-cpm-rising-how-to-lower-cost-per-result', 'ai-generated-ad-copy-best-practices', 'find-new-ad-angles-when-winners-stop-working', 'brand-voice-consistency-across-channels-ai'], tools: ['landing-page-copy', 'ad-copy'] },

  // ── AI marketing worker cluster ────────────────────────────────────────────
  'what-is-an-ai-marketing-worker': { related: ['ai-marketing-assistant-vs-ai-marketing-agent', 'how-to-delegate-marketing-to-ai', 'ai-marketing-employee-vs-hiring-marketer-cost', 'human-in-the-loop-marketing-approval-workflow'], tools: ['marketing-strategy'] },
  'how-to-delegate-marketing-to-ai': { related: ['what-is-an-ai-marketing-worker', 'human-in-the-loop-marketing-approval-workflow', 'one-person-marketing-department-with-ai', 'how-to-write-marketing-strategy-with-ai'], tools: ['marketing-strategy', 'brand-voice'] },
  'ai-marketing-employee-vs-hiring-marketer-cost': { related: ['how-to-measure-roi-of-ai-marketing-tools', 'ai-marketing-agency-vs-ai-marketing-platform', 'what-is-an-ai-marketing-worker', 'one-person-marketing-department-with-ai'], tools: ['ai-roi-calculator'] },
  'ai-marketing-for-local-service-businesses': { related: ['which-marketing-channels-small-business-prioritize', 'ai-social-media-manager-small-business', 'automated-marketing-reporting-small-business', 'marketing-automation-mistakes-small-business'], tools: ['social-calendar', 'review-response-generator'] },
  'fractional-cmo-ai-stack': { related: ['ai-marketing-tools-for-agencies-scale-delivery', 'automated-marketing-reporting-small-business', 'how-to-write-marketing-strategy-with-ai', 'ai-marketing-agency-vs-ai-marketing-platform'], tools: ['marketing-strategy', 'competitor-audit'] },
  'founder-led-marketing-without-doing-everything': { related: ['one-person-marketing-department-with-ai', 'how-to-delegate-marketing-to-ai', 'brand-voice-consistency-across-channels-ai', 'multi-channel-content-calendar-with-ai'], tools: ['brand-voice', 'content-pillars'] },
  'ai-competitor-monitoring-small-business': { related: ['best-competitor-ad-monitoring-tools-2026', 'competitor-ad-research-meta-ad-library', 'automated-marketing-reporting-small-business', 'find-new-ad-angles-when-winners-stop-working'], tools: ['competitor-audit'] },
  'automated-marketing-reporting-small-business': { related: ['best-marketing-reporting-tools-small-teams-2026', 'meta-ads-client-reporting-agency-template', 'ai-competitor-monitoring-small-business', 'how-to-measure-roi-of-ai-marketing-tools'], tools: ['ai-roi-calculator'] },
  'ai-social-media-manager-small-business': { related: ['multi-channel-content-calendar-with-ai', 'brand-voice-consistency-across-channels-ai', 'ai-marketing-for-local-service-businesses', 'human-in-the-loop-marketing-approval-workflow'], tools: ['social-calendar', 'instagram-caption'] },
  'one-person-marketing-department-with-ai': { related: ['founder-led-marketing-without-doing-everything', 'how-to-delegate-marketing-to-ai', 'multi-channel-content-calendar-with-ai', 'ai-marketing-employee-vs-hiring-marketer-cost'], tools: ['marketing-strategy', 'social-calendar'] },

  // ── Multi-channel execution cluster ────────────────────────────────────────
  'ai-marketing-agency-vs-ai-marketing-platform': { related: ['ai-marketing-employee-vs-hiring-marketer-cost', 'ai-marketing-assistant-vs-ai-marketing-agent', 'ai-marketing-tools-for-agencies-scale-delivery', 'what-is-an-ai-marketing-worker'], tools: ['ai-roi-calculator'] },
  'which-marketing-channels-small-business-prioritize': { related: ['how-to-write-marketing-strategy-with-ai', 'marketing-for-ecommerce-brands-under-1m-revenue', 'ai-marketing-for-local-service-businesses', 'multi-channel-content-calendar-with-ai'], tools: ['marketing-budget-allocator', 'marketing-strategy'] },
  'how-to-write-marketing-strategy-with-ai': { related: ['which-marketing-channels-small-business-prioritize', 'multi-channel-content-calendar-with-ai', 'how-to-delegate-marketing-to-ai', 'brand-voice-consistency-across-channels-ai'], tools: ['marketing-strategy', 'customer-persona-generator'] },
  'multi-channel-content-calendar-with-ai': { related: ['how-to-write-marketing-strategy-with-ai', 'ai-social-media-manager-small-business', 'brand-voice-consistency-across-channels-ai', 'one-person-marketing-department-with-ai'], tools: ['social-calendar', 'content-pillars'] },
  'human-in-the-loop-marketing-approval-workflow': { related: ['how-to-delegate-marketing-to-ai', 'ai-media-buyer-vs-human-media-buyer', 'marketing-automation-mistakes-small-business', 'what-is-an-ai-marketing-worker'] },
  'ai-marketing-tools-for-agencies-scale-delivery': { related: ['performance-marketing-agency-ai-automation', 'fractional-cmo-ai-stack', 'meta-ads-client-reporting-agency-template', 'ai-marketing-agency-vs-ai-marketing-platform'], tools: ['competitor-audit'] },
  'marketing-for-ecommerce-brands-under-1m-revenue': { related: ['which-marketing-channels-small-business-prioritize', 'how-many-ad-creatives-to-test-per-week', 'how-to-scale-meta-ads-without-killing-roas', 'ai-social-media-manager-small-business'], tools: [ROAS, TESTS] },
  'ai-generated-ad-copy-best-practices': { related: ['ad-to-landing-page-message-match', 'find-new-ad-angles-when-winners-stop-working', 'ai-ad-creative-generator-meta-ads', 'brand-voice-consistency-across-channels-ai'], tools: ['ad-copy', 'facebook-ad-text', 'hook-generator'] },
  'brand-voice-consistency-across-channels-ai': { related: ['multi-channel-content-calendar-with-ai', 'ai-generated-ad-copy-best-practices', 'founder-led-marketing-without-doing-everything', 'ai-social-media-manager-small-business'], tools: ['brand-voice', 'brand-voice-analyzer'] },
  'marketing-automation-mistakes-small-business': { related: ['human-in-the-loop-marketing-approval-workflow', 'ai-marketing-for-local-service-businesses', 'automated-marketing-reporting-small-business', 'how-to-delegate-marketing-to-ai'], tools: ['marketing-strategy'] },

  // ── Comparison and buyer-intent cluster ────────────────────────────────────
  'best-ai-tools-for-meta-ads-2026': { related: ['best-ad-creative-testing-tools-dtc', 'loraloop-vs-madgicx', 'loraloop-vs-adcreative-ai', 'how-to-use-ai-to-manage-meta-ads-step-by-step'], tools: [TESTS, HOOK] },
  'best-ad-creative-testing-tools-dtc': { related: ['meta-ads-creative-testing-framework-2026', 'best-ai-tools-for-meta-ads-2026', 'how-many-ad-creatives-to-test-per-week', 'hook-rate-hold-rate-thumbstop-creative-metrics'], tools: [TESTS, HOOK] },
  'loraloop-vs-adcreative-ai': { related: ['ai-ad-creative-generator-meta-ads', 'loraloop-vs-madgicx', 'best-ai-tools-for-meta-ads-2026', 'ai-marketing-assistant-vs-ai-marketing-agent'], tools: ['ad-copy'] },
  'loraloop-vs-madgicx': { related: ['ai-media-buyer-vs-human-media-buyer', 'loraloop-vs-adcreative-ai', 'best-ai-tools-for-meta-ads-2026', 'how-to-use-ai-to-manage-meta-ads-step-by-step'], tools: [ROAS] },
  'ai-marketing-assistant-vs-ai-marketing-agent': { related: ['what-is-an-ai-marketing-worker', 'ai-marketing-agency-vs-ai-marketing-platform', 'human-in-the-loop-marketing-approval-workflow', 'how-to-delegate-marketing-to-ai'] },
  'best-competitor-ad-monitoring-tools-2026': { related: ['competitor-ad-research-meta-ad-library', 'ai-competitor-monitoring-small-business', 'find-new-ad-angles-when-winners-stop-working', 'best-ai-tools-for-meta-ads-2026'], tools: ['competitor-audit'] },
  'best-marketing-reporting-tools-small-teams-2026': { related: ['automated-marketing-reporting-small-business', 'meta-ads-client-reporting-agency-template', 'how-to-measure-roi-of-ai-marketing-tools', 'fractional-cmo-ai-stack'], tools: ['ai-roi-calculator'] },
  'how-to-measure-roi-of-ai-marketing-tools': { related: ['ai-marketing-employee-vs-hiring-marketer-cost', 'best-marketing-reporting-tools-small-teams-2026', 'automated-marketing-reporting-small-business', 'ai-marketing-agency-vs-ai-marketing-platform'], tools: ['ai-roi-calculator', ROAS] },
  'meta-ads-glossary': { related: ['hook-rate-hold-rate-thumbstop-creative-metrics', 'meta-ads-daily-monitoring-checklist', 'advantage-plus-shopping-campaigns-creative-testing', 'meta-ads-multiple-products-markets-account-structure'], tools: [HOOK, ROAS, TESTS] },
  'how-to-use-ai-to-manage-meta-ads-step-by-step': { related: ['ai-media-buyer-vs-human-media-buyer', 'best-ai-tools-for-meta-ads-2026', 'meta-ads-creative-testing-framework-2026', 'human-in-the-loop-marketing-approval-workflow'], tools: [TESTS, ROAS] },
};
