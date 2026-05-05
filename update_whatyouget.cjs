const fs = require('fs');

let content = fs.readFileSync('src/app/pages/Solution.tsx', 'utf8');

// 1. Change max-w-[1200px] to max-w-[1120px]
content = content.replace(/max-w-\[1200px\]/g, 'max-w-[1120px]');

// 2. Change Old vs New AI Way! Everyone moving to Old vs New AI Way!
content = content.replace('Old vs New AI Way! Everyone moving', 'Old vs New AI Way!');

// 3. Import Frame35_Auth at the top
if (!content.includes('Frame35_Auth')) {
  content = content.replace(
    'import { useNavigate, useSearchParams } from "react-router";',
    'import { useNavigate, useSearchParams } from "react-router";\nimport { Frame35_Auth } from "../../imports/LandingPage/LandingPage";'
  );
}

// 4. Replace What You Get Section
const startPattern = '{/* What You Get Section */}';
const endPattern = '{/* FAQ Section */}';
const startIndex = content.indexOf(startPattern);
const endIndex = content.indexOf(endPattern);

if (startIndex !== -1 && endIndex !== -1) {
  const newSection = `{/* What You Get Section */}
      <div className="bg-[#f9fafc] px-4 md:px-20 py-12 md:py-20">
        <div className="max-w-full max-w-[1120px] px-4 mx-auto">
          <div className="flex flex-col gap-8 md:gap-12">
            <h2 className="font-[700] font-['Satoshi:Bold',sans-serif] leading-tight md:leading-[48px] text-[#1f2937] text-3xl md:text-[40px] text-center tracking-[-0.6px] md:tracking-[-0.8px] mb-6">
              What you get it
            </h2>
            <Frame35_Auth />
          </div>
        </div>
      </div>

      `;
  content = content.substring(0, startIndex) + newSection + content.substring(endIndex);
} else {
  console.error("Could not find start or end section.");
}

fs.writeFileSync('src/app/pages/Solution.tsx', content, 'utf8');
console.log("Updated Solution.tsx successfully");
