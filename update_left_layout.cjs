const fs = require('fs');
let content = fs.readFileSync('src/imports/LandingPage/LandingPage.tsx', 'utf8');

// Update Left Cards layout
content = content.replace(
  /function Container13_Auth\(\) {[\s\S]*?<\/div>\n  \);\n}/,
  `function Container13_Auth() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[40px] px-[16px] py-[12px] rounded-[16px] top-[20px] w-[460px] shadow-sm" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <AvatarWithTitle_Auth />
      <p className="font-['General_Sans:Medium',sans-serif] text-[12px] text-[#6b7280] self-end mt-auto ml-2">05:11 AM</p>
    </div>
  );
}`
);

content = content.replace(
  /function Container14_Auth\(\) {[\s\S]*?<\/div>\n  \);\n}/,
  `function Container14_Auth() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[40px] px-[16px] py-[12px] rounded-[16px] top-[110px] w-[460px] shadow-sm" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <AvatarWithTitle1_Auth />
      <p className="font-['General_Sans:Medium',sans-serif] text-[12px] text-[#6b7280] self-end mt-auto ml-2">05:12 AM</p>
    </div>
  );
}`
);

content = content.replace(
  /function Container15_Auth\(\) {[\s\S]*?<\/div>\n  \);\n}/,
  `function Container15_Auth() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[40px] px-[16px] py-[12px] rounded-[16px] top-[200px] w-[460px] shadow-sm" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <AvatarWithTitle2_Auth />
      <p className="font-['General_Sans:Medium',sans-serif] text-[12px] text-[#6b7280] self-end mt-auto ml-2">05:13 AM</p>
    </div>
  );
}`
);

// Update '12 Ideas ready' to be orange text
content = content.replace(
  '<p className="leading-[16px]">12 Ideas ready</p>',
  '<p className="leading-[16px] text-[#d77504]">12 Ideas ready</p>'
);

// We need to also remove timestamps if they were added previously inside the sub-components?
// Wait, I previously ran a script that replaced '09:41 AM' with '05:11 AM'.
// But those old timestamps might have been inside the AvatarWithTitle components or similar. 
// We are now explicitly adding them to the Container wrappers, so if they exist inside the children, they will be duplicated. Let's check this.
fs.writeFileSync('src/imports/LandingPage/LandingPage.tsx', content, 'utf8');
console.log('Layout updated.');
