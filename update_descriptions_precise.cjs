const fs = require('fs');
let content = fs.readFileSync('src/imports/LandingPage/LandingPage.tsx', 'utf8');

// Top Left (DescriptionSection_Auth)
content = content.replace(
  /<span className=\"font-\['Satoshi:Bold',sans-serif\] leading-\[32px\] not-italic text-\[#14a148\]\">Lora plan your posts, ads, emaile etc\.<\/span>\s*<span className=\"leading-\[32px\]\">\{\` like real 10\+ year Marketing Lead\`\}<\/span>/,
  '<span className="font-[\'Satoshi:Bold\',sans-serif] leading-[32px] not-italic text-[#14a148]">Social Media handled End to End</span>'
);
content = content.replace(
  'Lora understand you end to end, Turn your business goals into a structured marketing plan with clear next steps acct like personal marketing lead.',
  'Lora understand you end to end, Turn your goals into a structured marketing plan with clear next steps acct like personal marketing lead.'
);

// Top Right (DescriptionSection1_Auth)
content = content.replace(
  /<span className=\"leading-\[32px\]\">Discover ideas, trends, monitor competitor<\/span>\s*<span className=\"leading-\[32px\] text-\[#1f2937\]\">\{\` your marketing 10x value content\`\}<\/span>/,
  '<span className="leading-[32px] text-[#14a148]">Discover ideas, trends, monitor competitor</span><span className="leading-[32px] text-[#1f2937]"> your marketing 10x value content</span>'
);

// Bottom Left (DescriptionSection3_Auth)
content = content.replace(
  /<span className=\"leading-\[32px\]\">Smart Multi-Platform Publishing<\/span>\s*<span className=\"leading-\[32px\] text-\[#1f2937\]\">\{\` based on realtime audiance & performance data!\`\}<\/span>/,
  '<span className="leading-[32px] text-[#14a148]">Smart Multi-Platform Publishing</span><span className="leading-[32px] text-[#1f2937]"> based on realtime audiance & performance data!</span>'
);

// Bottom Right (DescriptionSection2_Auth)
content = content.replace(
  /<span className=\"leading-\[32px\] text-\[#14a148\]\">Turn idea\/existing content<\/span>\s*<span className=\"leading-\[32px\]\">\{\` into social posts, blogs, TikTok, YouTube videos in click.\`\}<\/span>/,
  '<span className="leading-[32px] text-[#14a148]">Turn idea/existing content</span><span className="leading-[32px] text-[#1f2937]"> into social posts, blogs, TikToks, YouTube videos in minutes.</span>'
);

fs.writeFileSync('src/imports/LandingPage/LandingPage.tsx', content, 'utf8');
console.log('Descriptions surgically updated.');
