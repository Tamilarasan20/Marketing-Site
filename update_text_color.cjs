const fs = require('fs');
let content = fs.readFileSync('src/imports/LandingPage/LandingPage.tsx', 'utf8');

// Ensure 12 Ideas ready is orange text
content = content.replace(
  /<p className=\"font-\['General_Sans:Medium',sans-serif\] leading-\[16px\] relative shrink-0 text-\[#e17100\] text-\[12px\]\">12 ideas ready<\/p>/g,
  '<p className="font-[\'General_Sans:Medium\',sans-serif] leading-[16px] relative shrink-0 text-[#d77504] text-[12px]">12 Ideas ready</p>'
);

fs.writeFileSync('src/imports/LandingPage/LandingPage.tsx', content, 'utf8');
console.log('Text case and color updated.');
