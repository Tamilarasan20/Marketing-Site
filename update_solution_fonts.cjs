const fs = require('fs');

const files = [
  'src/app/pages/Solution.tsx',
  'src/imports/Solution-1/Solution-7-12073.tsx',
  'src/imports/Solution/Solution.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  let lines = content.split('\n');
  let changed = false;

  for (let i = 0; i < lines.length; i++) {
    // 1. AI Employees / Solution -> font-[600]
    if (lines[i].includes('AI Employees / Solution')) {
      if (i > 0 && lines[i-1].includes('className="') && !lines[i-1].includes('font-[600]')) {
        lines[i-1] = lines[i-1].replace('className="', 'className="font-[600] ');
        changed = true;
      } else if (lines[i].includes('className="') && !lines[i].includes('font-[600]')) {
        lines[i] = lines[i].replace('className="', 'className="font-[600] ');
        changed = true;
      }
    }
    
    // 2. Old vs New AI Way! -> font-[700]
    if (lines[i].includes('Old vs New AI Way!')) {
      if (i > 0 && lines[i-1].includes('className="') && !lines[i-1].includes('font-[700]')) {
        lines[i-1] = lines[i-1].replace('className="', 'className="font-[700] ');
        changed = true;
      } else if (lines[i].includes('className="') && !lines[i].includes('font-[700]')) {
        lines[i] = lines[i].replace('className="', 'className="font-[700] ');
        changed = true;
      }
    }

    // 3. Meet Lora Autonomous AI Marketing Lead (in Solution.tsx)
    if (file.includes('src/app/pages/Solution.tsx') && lines[i].includes('{aiEmployees[selectedEmployee].title}')) {
      if (i > 0 && lines[i-1].includes('className="') && !lines[i-1].includes('font-[700]')) {
        lines[i-1] = lines[i-1].replace('className="', 'className="font-[700] ');
        changed = true;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(file, lines.join('\n'), 'utf8');
    console.log('Updated ' + file);
  }
});
