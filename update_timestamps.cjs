const fs = require('fs');
let content = fs.readFileSync('src/imports/LandingPage/LandingPage.tsx', 'utf8');

// Update timestamps: the first one is 05:11 AM, the second is 05:12 AM, the third is 05:13 AM
// I'll just replace instances of 09:41 AM, 09:42 AM, etc.

content = content.replace(
  '<p className="leading-[16px]">09:41 AM</p>',
  '<p className="leading-[16px]">05:11 AM</p>'
);

content = content.replace(
  '<p className="leading-[16px]">09:42 AM</p>',
  '<p className="leading-[16px]">05:12 AM</p>'
);

content = content.replace(
  '<p className="leading-[16px]">09:43 AM</p>',
  '<p className="leading-[16px]">05:13 AM</p>'
);

fs.writeFileSync('src/imports/LandingPage/LandingPage.tsx', content, 'utf8');
console.log('Timestamps updated.');
