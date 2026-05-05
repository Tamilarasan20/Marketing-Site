const fs = require('fs');

const files = [
  'src/imports/LandingPage/LandingPage.tsx',
  'src/imports/Home-1/Home-10-5453.tsx'
];

const phrases = [
  'Plan a marketing strategy for my business',
  'Identify what’s trending and what my competitors are doing',
  'Writes content that attracts customers for blog, mail & more..',
  'Creates scroll-stopping posts and carousels for Insta, FB etc',
  'The AI Employees that actually does stuff.',
  'Enter Your Website',
  'AI Team Manage Marketing',
  'Grow on autopilot',
  '100+ Integrations supported.',
  'Solution',
  'Smart Multi-Platform Publishing based on realtime audiance & performance data!',
  'Lora plan your posts, ads, emaile etc. like real 10+ year Marketing Lead',
  'Discover ideas, trends, monitor competitor your marketing 10x value content',
  'Turn idea/existing content into social posts, blogs, TikTok, YouTube videos in click.',
  'Marketing that runs itself.',
  'Pricing',
  'Frequently Asked Questions',
  'AI marketing Team that Never sleep',
  'See it in action'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  phrases.forEach(phrase => {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(phrase) || (phrase === 'business' && lines[i].match(/>\s*business\s*</i))) {
        if (!lines[i].includes('font-[700]')) {
          if (lines[i].includes('className="')) {
            lines[i] = lines[i].replace('className="', 'className="font-[700] ');
            changed = true;
          } else if (lines[i].includes("className='")) {
            lines[i] = lines[i].replace("className='", "className='font-[700] ");
            changed = true;
          } else if (lines[i].includes("className={")) {
             // For cases like className={"string " + variable} or similar
             // Might be harder, but let's try the simple quote first
          }
        }
      }
    }
    content = lines.join('\n');
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
