const fs = require('fs');
let content = fs.readFileSync('src/imports/LandingPage/LandingPage.tsx', 'utf8');

// --- Top Left Card (Lora) Updates ---

// Update Container13 (Card 1: Analysed market trends...)
content = content.replace(
  '<p className="leading-[18px]">Knowledge Created</p>',
  '<p className="leading-[18px]">Analysed market trends, Monitor Competitors<br/>across social media platforms</p>'
);

// Add 'AI Agents Deep Analyse' badge
let contentAuthMatch = content.match(/function Content_Auth\(\) {[\s\S]*?<div className=\"flex flex-col[\s\S]*?<\/div>\n      <StatusLine_Auth \/>/);
if (contentAuthMatch) {
  let newContentAuth = contentAuthMatch[0].replace(
    '<div className="flex flex-col font-[\'General_Sans:Medium\',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1f2937] text-[14px] whitespace-nowrap">',
    `<div className="flex items-center gap-2 mb-1">
          <div className="flex -space-x-2">
            <div className="w-4 h-4 rounded-full bg-[#1877f2]"></div>
            <div className="w-4 h-4 rounded-full bg-[#14a148]"></div>
          </div>
          <span className="text-xs text-gray-500 font-['General_Sans:Medium',sans-serif]">AI Agents Deep Analyse</span>
        </div>
        <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[1.4] not-italic relative shrink-0 text-[#1f2937] text-[14px] whitespace-normal">`
  );
  content = content.replace(contentAuthMatch[0], newContentAuth);
}

// Update Container14 (Card 2: Posts created across channels...)
content = content.replace(
  '<p className="leading-[18px]">Created Q1 Marketing Plan</p>',
  '<p className="leading-[18px]">Posts created across channels Insta, X, TikTok,<br/>Youtube, etc.</p>'
);

content = content.replace(
  '<p className="leading-[16px]">Approved</p>',
  '<p className="leading-[16px]">Done</p>'
);
// Remove View button from Container14
content = content.replace(
  /<div className=\"bg-white content-stretch flex gap-\[4px\] h-\[32px\] items-center justify-center px-\[24px\] relative rounded-\[120px\] shrink-0\" data-name=\"Button\">\s*<div aria-hidden=\"true\" className=\"absolute border border-\[#e5e7eb\] border-solid inset-0 pointer-events-none rounded-\[120px\]\" \/>\s*<p className=\"font-\['Satoshi:Bold',sans-serif\] leading-\[16px\] not-italic relative shrink-0 text-\[#111827\] text-\[12px\] tracking-\[0\.3px\] whitespace-nowrap\">View<\/p>\s*<\/div>/g,
  ''
);

// Update Container15 (Card 3: Published Posts...)
content = content.replace(
  '<p className="leading-[18px]">Social Media post ready for post</p>',
  '<p className="leading-[18px]">Published Posts, Blogs, Videos, Ads</p>'
);

let statusLine2Match = content.match(/function StatusLine2_Auth\(\) {[\s\S]*?<\/div>\n  \);\n}/);
if (statusLine2Match) {
  let newStatusLine2 = `function StatusLine2_Auth() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status Line">
      <div className="overflow-clip relative shrink-0 size-[16px] flex items-center justify-center text-[#14a148]">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      </div>
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#14a148] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Published</p>
      </div>
    </div>
  );
}`;
  content = content.replace(statusLine2Match[0], newStatusLine2);
}

// Remove Review button from Container15
content = content.replace(
  /<div className=\"bg-white content-stretch flex gap-\[4px\] h-\[32px\] items-center justify-center px-\[24px\] relative rounded-\[120px\] shrink-0\" data-name=\"Button\">\s*<div aria-hidden=\"true\" className=\"absolute border border-\[#e5e7eb\] border-solid inset-0 pointer-events-none rounded-\[120px\]\" \/>\s*<p className=\"font-\['Satoshi:Bold',sans-serif\] leading-\[16px\] not-italic relative shrink-0 text-\[#111827\] text-\[12px\] tracking-\[0\.3px\] whitespace-nowrap\">Review<\/p>\s*<\/div>/g,
  ''
);

// We need only 3 cards in the left section, so we remove the rest from Slot_Auth
content = content.replace(
  /      <Container16_Auth \/>\n      <Container17_Auth \/>\n      <Container18_Auth \/>\n      <Container19_Auth \/>\n      <Container20_Auth \/>\n/g,
  ''
);

// --- Top Right Card (Sam) Updates ---

// Container21: 10 New trending topic detected -> New trending topic
content = content.replace(
  '<p className="leading-[18px]">10 New trending topic detected</p>',
  '<p className="leading-[18px]">New trending topic</p>'
);

// Container22: Competitor analysis ready
// Subtext 30 new growth opportunity detected -> 30 new growth posts detected
content = content.replace(
  '<p className="leading-[16px]">30 new growth opportunity detected</p>',
  '<p className="leading-[16px]">30 new growth posts detected</p>'
);

// Container23: Trending content spotted 10x view (Looks fine)

// Container24: Content trending idea generator
// Subtext 12 ideas ready -> 12 Ideas ready
content = content.replace(
  '<p className="leading-[16px]">12 ideas ready</p>',
  '<p className="leading-[16px]">12 Ideas ready</p>'
);

// Remove Container25 (since there should only be 4 cards according to screenshot)
content = content.replace(
  /      <Container25_Auth \/>\n/g,
  ''
);


fs.writeFileSync('src/imports/LandingPage/LandingPage.tsx', content, 'utf8');
console.log('Update script created successfully');
