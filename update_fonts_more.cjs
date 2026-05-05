const fs = require('fs');

const files = [
  'src/imports/LandingPage/LandingPage.tsx',
  'src/imports/Home-1/Home-10-5453.tsx'
];

const phrases = [
  'AI employees that run your marketing end to end even while you sleep.',
  'Schedule publish my posts, contents & Engage with audiences'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  phrases.forEach(phrase => {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(phrase)) {
        if (!lines[i].includes('font-[700]')) {
          if (lines[i].includes('className="')) {
            lines[i] = lines[i].replace('className="', 'className="font-[700] ');
            changed = true;
          } else if (lines[i].includes("className='")) {
            lines[i] = lines[i].replace("className='", "className='font-[700] ");
            changed = true;
          }
        }
      }
    }
    content = lines.join('\n');
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  }
});
