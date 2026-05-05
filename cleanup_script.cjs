const fs = require('fs');
let content = fs.readFileSync('src/imports/LandingPage/LandingPage.tsx', 'utf8');

// Ensure Slot_Auth has only 3 cards
const slotAuthMatch = content.match(/function Slot_Auth\(\) {[\s\S]*?<\/div>\n  \);\n}/);
if (slotAuthMatch) {
  let newSlotAuth = slotAuthMatch[0]
    .replace(/<Container16_Auth \/>/g, '')
    .replace(/<Container17_Auth \/>/g, '')
    .replace(/<Container18_Auth \/>/g, '')
    .replace(/<Container19_Auth \/>/g, '')
    .replace(/<Container20_Auth \/>/g, '');
  content = content.replace(slotAuthMatch[0], newSlotAuth);
}

// Ensure Slot1_Auth has exactly 4 cards
const slot1AuthMatch = content.match(/function Slot1_Auth\(\) {[\s\S]*?<\/div>\n  \);\n}/);
if (slot1AuthMatch) {
  let newSlot1Auth = slot1AuthMatch[0].replace(/<Container25_Auth \/>/g, '');
  content = content.replace(slot1AuthMatch[0], newSlot1Auth);
}

// Ensure 12 Ideas ready is orange text
content = content.replace(
  '12 Ideas ready</p>',
  '12 Ideas ready</p>'
); // Let's check what it actually is first before replacing

fs.writeFileSync('src/imports/LandingPage/LandingPage.tsx', content, 'utf8');
console.log('Cleanup script completed.');
