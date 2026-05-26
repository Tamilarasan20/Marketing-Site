import { GoogleGenerativeAI } from '@google/generative-ai';

const MAX_INPUT_LENGTH = 2000;

type ToolType =
  | 'brand-voice'
  | 'social-calendar'
  | 'content-pillars'
  | 'hook-generator'
  | 'ad-copy'
  | 'marketing-strategy'
  | 'landing-page-copy'
  | 'product-description'
  | 'competitor-audit'
  | 'bio-generator'
  | 'blog-title-generator'
  | 'instagram-caption'
  | 'generic';

function buildPrompt(tool: ToolType, inputs: Record<string, string>): string {
  switch (tool) {
    case 'brand-voice':
      return `You are a world-class brand strategist. Create a comprehensive, specific brand voice guide based on this business.

Business Name: ${inputs.businessName}
What They Sell: ${inputs.description}
Target Audience: ${inputs.audience}
Brand Personality Words: ${inputs.personality}
Brands They Admire: ${inputs.admiredBrands || 'Not specified'}
Primary Platform: ${inputs.platform}

Generate a Brand Voice Guide with EXACTLY these sections:

## Brand Personality
List 4-5 key personality traits with a 1-sentence explanation of each. Be specific to this business.

## Tone of Voice
Describe exactly how this brand should sound in 4-6 sentences. Include specific characteristics — formal vs casual, serious vs playful, etc.

## Words to Use (15 examples)
List 15 specific words and phrases that perfectly fit this brand. Include a short note on why each fits.

## Words to Avoid (10 examples)
List 10 words/phrases that clash with this brand and would feel off. Include why.

## Example Captions (3 examples)
Write 3 platform-native captions for ${inputs.platform} they could post TODAY. Make them real and ready to publish — not templates.

## Example Ad Copy (2 examples)
Write 2 short ad copy examples (Hook + 2-3 sentences + CTA). Make them specific to what they sell.

## Content Pillars (5 pillars)
List 5 content themes. For each:
- Pillar name and description
- Why it resonates with their audience
- 3 specific post ideas

Be direct, specific, and make every line useful. Avoid generic marketing advice.`;

    case 'social-calendar':
      return `You are a social media strategist. Create a complete 30-day content calendar for this business.

Business Type: ${inputs.businessType}
Target Audience: ${inputs.audience}
Goal: ${inputs.goal}
Platform: ${inputs.platform}
Posting Frequency: ${inputs.frequency}

Generate a 30-day content calendar:

## Strategy Overview
3-4 sentences explaining the overall approach and why it fits this business and goal.

## Content Mix
Percentage breakdown of content types (e.g., 40% educational, 30% entertaining, 30% promotional). Explain the rationale.

## Week 1 (Days 1–7)
For each post day, include:
- Day & Date reference (Day 1, Day 2, etc.)
- Format: [Reel / Carousel / Static Post / Story]
- Topic/Theme
- Hook (opening line or visual concept)
- Caption direction (2-3 sentences on what to write)

## Week 2 (Days 8–14)
Same format.

## Week 3 (Days 15–21)
Same format.

## Week 4 (Days 22–30)
Same format.

## Hashtag Strategy
15 hashtags organized into: Large (1M+), Medium (100K–1M), Niche (under 100K). Pick hashtags relevant to this specific business.

## Engagement Tactics
4 specific tactics for ${inputs.platform} to boost reach and engagement for this audience.

Make every day specific and actionable. No filler content.`;

    case 'content-pillars':
      return `You are a content strategist. Create a complete content pillar framework for this business.

Business Niche: ${inputs.niche}
Target Audience: ${inputs.audience}
Main Goals: ${inputs.goals}
Number of Pillars: ${inputs.pillars || '5'}

Generate a complete content pillar framework:

## Strategy Overview
3-4 sentences on the content approach and why these pillars fit this niche.

## Content Pillars

For each of the ${inputs.pillars || '5'} pillars, include:

### Pillar [N]: [Name]
**Purpose:** What this pillar achieves for the business
**Audience Value:** What the audience gets from it
**Funnel Stage:** Awareness / Trust / Conversion (or combination)

**10 Specific Post Ideas:**
1. [Specific post idea]
(continue for all 10)

**Best Formats:** Which content formats work best for this pillar

## Content Mix Recommendation
Weekly posting split across pillars with rationale.

## Content Calendar Integration
How to schedule these pillars across 7 days.

## Quick Wins — 5 Posts to Create This Week
Specific, detailed post briefs they can execute immediately.

Be specific to this niche. Every post idea should be usable as-is.`;

    case 'hook-generator':
      return `You are a viral content strategist who understands exactly what makes people stop scrolling.

Topic/Niche: ${inputs.topic}
Platform: ${inputs.platform}
Content Angle: ${inputs.angle}
Target Audience: ${inputs.audience}

Generate 15 powerful, ready-to-use hooks organized by type. For EACH hook:
- Write the hook (complete, ready to use — not a template)
- Note the psychological trigger it activates
- Mark virality potential: 🔥 High / ⚡ Medium

## Pain-Point Hooks (3)
## Curiosity & Open Loop Hooks (3)
## Bold Statement Hooks (3)
## Story Hooks (3)
## Result & Transformation Hooks (3)

## Bonus: 5 Headline-Style Hooks for Carousels/Ads

Every hook must be specific to "${inputs.topic}" — zero generic filler.`;

    case 'ad-copy':
      return `You are a direct-response copywriter who writes ads that actually convert.

Product/Service: ${inputs.product}
What It Does: ${inputs.description}
Target Audience: ${inputs.audience}
Main Pain Point: ${inputs.painPoint}
Offer/Deal: ${inputs.offer}
Platform: ${inputs.platform}

Write 3 complete ad copy variations:

## Ad 1: Emotional / Story Angle
**Hook:** **Primary Text:** (120-150 words) **Headline:** **CTA:** **Why it works:**

## Ad 2: Direct-Response / Benefit Angle
**Hook:** **Primary Text:** (120-150 words) **Headline:** **CTA:** **Why it works:**

## Ad 3: Problem / Agitate / Solution Angle
**Hook:** **Primary Text:** (120-150 words) **Headline:** **CTA:** **Why it works:**

## 5 Headline A/B Test Variations

## ${inputs.platform}-Specific Tips
4 platform-specific tactics to maximize this ad's performance.`;

    case 'marketing-strategy':
      return `You are a growth marketer. Create a focused, executable marketing strategy.

Business Type: ${inputs.businessType}
Product/Service: ${inputs.product}
Target Audience: ${inputs.audience}
Monthly Budget: ${inputs.budget}
Primary Goal: ${inputs.goal}
Current Channels: ${inputs.channels || 'None currently'}
Timeline: ${inputs.timeline}

Generate a complete marketing strategy:

## Executive Summary
## Target Audience Deep-Dive
## Positioning Statement
## Recommended Channels (Prioritized)
## Content Strategy
## ${inputs.timeline} Action Plan
## KPIs & Success Metrics
## Quick Wins (First 2 Weeks)`;

    case 'landing-page-copy':
      return `You are a conversion copywriter who writes landing pages that convert cold traffic into customers.

Product/Service: ${inputs.product}
What It Does: ${inputs.description}
Target Audience: ${inputs.audience}
Main Benefit/Outcome: ${inputs.benefit}
Price Point: ${inputs.price}
Primary CTA Goal: ${inputs.ctaGoal}

Write complete, conversion-optimized landing page copy:

## Hero Section
## Problem Section
## Solution Bridge
## Benefits (5)
## Features (5)
## Social Proof Section
## FAQ (5 Questions)
## Final CTA Section
## SEO Meta Description`;

    case 'product-description':
      return `You are an eCommerce copywriter who writes product copy that sells.

Product Name: ${inputs.productName}
Category: ${inputs.category}
Key Features: ${inputs.features}
Target Customer: ${inputs.targetCustomer}
Platform: ${inputs.platform}
Tone: ${inputs.tone}

Generate complete product copy:

## SEO-Optimized Title
## Short Description (50-80 words)
## Long Description (200-250 words)
## Bullet Points (5)
## Meta Description
## Instagram/Facebook Caption
## Short Ad Copy (Facebook/Instagram)
## Suggested Alt Text`;

    case 'competitor-audit':
      return `You are a competitive intelligence analyst.

Your Business/Niche: ${inputs.yourBusiness}
Competitor Name: ${inputs.competitorName}
Competitor Bio/About: ${inputs.competitorBio}
Their Recent Posts/Content: ${inputs.recentPosts}
Platform: ${inputs.platform}

Generate a comprehensive competitive analysis:

## Competitor Overview
## Content Analysis
## Your Opportunity Map
## Immediate Actions (This Week)
## 90-Day Positioning Plan`;

    case 'bio-generator':
      return `You are an expert copywriter specialising in social media profiles and personal brand positioning. Generate compelling, platform-optimised bio options.

Name / Brand: ${inputs.name}
Platform: ${inputs.platform}
Role / What They Do: ${inputs.role}
Target Audience: ${inputs.audience}
Value / What They Help People Achieve: ${inputs.offer}
Personality / Tone: ${inputs.personality || 'Professional yet approachable'}

Generate bio options with EXACTLY these sections:

## Platform-Optimised Bio Options

### Option 1 — Direct and Value-Led
Write a bio that leads with the clear value for the audience. Stay within platform character limits (150 chars for Instagram/TikTok, 220 chars for LinkedIn summary line, 160 chars for X).

### Option 2 — Personality-Forward
Write a bio that leads with personality and tone, then value. Should feel distinctive and human.

### Option 3 — Keyword-Rich (best for discoverability)
Write a bio that front-loads the role keyword for platform search, includes the audience, and ends with a CTA or hook.

### Option 4 — Ultra-Short (for tight character limits)
A 60–80 character bio that works as a one-liner anywhere.

## Hashtag / Keyword Suggestions
List 8–10 hashtags or keywords relevant to this niche for discoverability in their platform's search.

## CTA Ideas for Bio Link
Give 3 link-in-bio CTA phrases they can use to drive clicks (e.g. "Free guide →", "Book a call →", "Shop now →").

Make each bio feel genuinely different — not just slight rewrites of the same sentence.`;

    case 'blog-title-generator':
      return `You are an expert SEO content strategist. Generate 10 high-performing blog title options that are keyword-targeted, click-worthy, and optimised for search intent.

Article Topic: ${inputs.topic}
Target Keyword: ${inputs.keyword || 'Not specified — infer from topic'}
Search Intent: ${inputs.intent}
Target Audience: ${inputs.audience}
Industry / Niche: ${inputs.industry || 'General'}

Generate titles with EXACTLY this structure:

## 10 Blog Title Options

For each title, provide:
- The title itself (bolded)
- Character count
- Brief note on why it works (keyword placement, intent match, click trigger)

### Titles 1–3: List / Roundup format
e.g. "X Best [Topic] for [Audience] in [Year]"

### Titles 4–6: How-to / Guide format
e.g. "How to [Achieve Result] Without [Common Pain]"

### Titles 7–8: Comparison / vs format
e.g. "[Option A] vs [Option B]: Which Is Better for [Audience]?"

### Titles 9–10: Question / Problem-aware format
e.g. "Why [Audience] Struggle With [Problem] (And What Actually Works)"

## Top 3 Recommended
Pick the 3 strongest titles with a one-sentence reason why each would perform well in search.

## H1 Variations
For the top recommended title, suggest 2 slightly adapted H1 versions that work better on-page while keeping the keyword.`;

    case 'instagram-caption':
      return `You are an expert Instagram content writer. Generate 5 ready-to-post Instagram captions that stop the scroll, deliver value, and drive action.

Business / Brand: ${inputs.businessName}
Post Type: ${inputs.postType}
Post Topic / Content: ${inputs.topic}
Target Audience: ${inputs.audience}
Brand Tone: ${inputs.tone}
Call-to-Action Goal: ${inputs.cta || 'Engage with the post / visit link in bio'}

Generate captions with EXACTLY this structure:

## 5 Instagram Caption Options

For each caption:
- A clear label (Caption 1, Caption 2, etc.) with a style descriptor (e.g. "Story-led", "Educational", "Punchy")
- The full caption text, formatted with line breaks as it would appear on Instagram
- Relevant hashtags at the end (5–8 targeted hashtags)
- Character count (excluding hashtags)

### Caption 1 — Hook-led (strong opening line that stops the scroll)
### Caption 2 — Story/narrative style (opens with a relatable situation)
### Caption 3 — Educational / value-first (starts with a tip or insight)
### Caption 4 — Bold/direct (short, punchy, no fluff)
### Caption 5 — Question-led (opens with a question that gets comments)

## Hashtag Bank
List 15–20 relevant hashtags (mix of niche-specific, mid-size, and broad) they can rotate across posts.

## CTA Variations
Give 5 different CTA phrases they can swap into any caption to test what drives the most action.

Make every caption feel authentic to the brand tone, not generic. Write as if you know the brand well.`;

    case 'generic':
      return `You are an expert AI assistant powering the "${inputs.toolName}" tool. Your task is to ${inputs.toolDescription}.

User Input:
${inputs.userInput}

Provide a comprehensive, high-quality, well-structured response. Use clear headings, bullet points, and sections where appropriate. Be specific, actionable, and practical. Tailor the output precisely to the user's input.`;

    default:
      throw new Error(`Unknown tool: ${tool}`);
  }
}

export const config = { runtime: 'edge' };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const body = await req.json() as { tool: ToolType; inputs: Record<string, string> };
    const { tool, inputs } = body;

    if (!tool || !inputs) {
      return new Response(JSON.stringify({ error: 'Missing tool or inputs' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const sanitizedInputs: Record<string, string> = {};
    for (const [key, value] of Object.entries(inputs)) {
      if (typeof value === 'string') {
        sanitizedInputs[key] = value.slice(0, MAX_INPUT_LENGTH);
      }
    }

    const prompt = buildPrompt(tool, sanitizedInputs);
    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'GEMINI_API_KEY is not configured.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: process.env.GEMINI_MODEL || 'gemini-2.5-flash',
      generationConfig: { maxOutputTokens: 3500 },
    });
    const result = await model.generateContentStream(prompt);

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) controller.enqueue(new TextEncoder().encode(text));
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-store',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    console.error('Generation error:', error);
    return new Response(JSON.stringify({ error: 'Generation failed. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
