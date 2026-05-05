const fs = require('fs');
let code = fs.readFileSync('D:\\loraloop\\home\\src\\imports\\Home-1\\Home-10-5453.tsx', 'utf-8');

// 1. Add calculatePrice to Frame6..9
code = code.replace(/function Frame6\(\) {([\s\S]*?)\$9\.99([\s\S]*?)}/g, 'function Frame6({ calculatePrice }: { calculatePrice: (price: number) => string }) {$1${calculatePrice(9.99)}$2}');
code = code.replace(/function Frame7\(\) {([\s\S]*?)\$29\.99([\s\S]*?)}/g, 'function Frame7({ calculatePrice }: { calculatePrice: (price: number) => string }) {$1${calculatePrice(29.99)}$2}');
code = code.replace(/function Frame8\(\) {([\s\S]*?)\$69\.99([\s\S]*?)}/g, 'function Frame8({ calculatePrice }: { calculatePrice: (price: number) => string }) {$1${calculatePrice(69.99)}$2}');
code = code.replace(/function Frame9\(\) {([\s\S]*?)\$149\.99([\s\S]*?)}/g, 'function Frame9({ calculatePrice }: { calculatePrice: (price: number) => string }) {$1${calculatePrice(149.99)}$2}');

// 2. Pass calculatePrice up the chain
const passUp = [
  ['Container127', '<Frame6 />', '<Frame6 calculatePrice={calculatePrice} />'],
  ['Container130', '<Frame7 />', '<Frame7 calculatePrice={calculatePrice} />'],
  ['Container133', '<Frame8 />', '<Frame8 calculatePrice={calculatePrice} />'],
  ['Container136', '<Frame9 />', '<Frame9 calculatePrice={calculatePrice} />'],
  
  ['PricingDetails', '<Container127 />', '<Container127 calculatePrice={calculatePrice} />'],
  ['PricingDetails1', '<Container130 />', '<Container130 calculatePrice={calculatePrice} />'],
  ['PricingDetails2', '<Container133 />', '<Container133 calculatePrice={calculatePrice} />'],
  ['PricingDetails3', '<Container136 />', '<Container136 calculatePrice={calculatePrice} />'],

  ['Pricing', '<PricingDetails />', '<PricingDetails calculatePrice={calculatePrice} />'],
  ['Pricing1', '<PricingDetails1 />', '<PricingDetails1 calculatePrice={calculatePrice} />'],
  ['Pricing2', '<PricingDetails2 />', '<PricingDetails2 calculatePrice={calculatePrice} />'],
  ['Pricing3', '<PricingDetails3 />', '<PricingDetails3 calculatePrice={calculatePrice} />'],

  ['Content', '<Pricing />', '<Pricing calculatePrice={calculatePrice} />'],
  ['Content1', '<Pricing1 />', '<Pricing1 calculatePrice={calculatePrice} />'],
  ['Content2', '<Pricing2 />', '<Pricing2 calculatePrice={calculatePrice} />'],
  ['Content3', '<Pricing3 />', '<Pricing3 calculatePrice={calculatePrice} />'],

  ['Container125', '<Content />', '<Content calculatePrice={calculatePrice} />'],
  ['Container128', '<Content1 />', '<Content1 calculatePrice={calculatePrice} />'],
  ['Container131', '<Content2 />', '<Content2 calculatePrice={calculatePrice} />'],
  ['Container134', '<Content3 />', '<Content3 calculatePrice={calculatePrice} />'],
  
  ['PricingCard', '<Container128 />', '<Container128 calculatePrice={calculatePrice} />'],
];

passUp.forEach(([funcName, oldTag, newTag]) => {
  const regex = new RegExp(`function ${funcName}\\(\\) {([\\s\\S]*?)${oldTag}([\\s\\S]*?)}`, 'g');
  code = code.replace(regex, `function ${funcName}({ calculatePrice }: { calculatePrice: (price: number) => string }) {$1${newTag}$2}`);
});

// Update Frame5 to accept calculatePrice and pass it down
code = code.replace(/function Frame5\(\) {([\s\S]*?)<Container125 \/>([\s\S]*?)<PricingCard \/>([\s\S]*?)<Container131 \/>([\s\S]*?)<Container134 \/>([\s\S]*?)}/g, 
  'function Frame5({ calculatePrice }: { calculatePrice: (price: number) => string }) {$1<Container125 calculatePrice={calculatePrice} />$2<PricingCard calculatePrice={calculatePrice} />$3<Container131 calculatePrice={calculatePrice} />$4<Container134 calculatePrice={calculatePrice} />$5}');

// Finally, update Frame18
const frame18New = `function Frame18() {
  const [selectedPlan, setSelectedPlan] = useState<'month' | '12month' | '3month'>('month');

  const getDiscount = () => {
    switch (selectedPlan) {
      case '12month': return 0.30;
      case '3month': return 0.15;
      default: return 0;
    }
  };

  const calculatePrice = (basePrice: number) => {
    const discount = getDiscount();
    return (basePrice * (1 - discount)).toFixed(2);
  };

  return (
    <div className="content-stretch flex flex-col gap-[42px] items-center relative shrink-0 w-full">
      <Frame17 selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
      <Frame5 calculatePrice={calculatePrice} />
    </div>
  );
}`;

code = code.replace(/function Frame18\(\) {[\s\S]*?return \([\s\S]*?<Frame17 \/>[\s\S]*?<Frame5 \/>[\s\S]*?\);[\s\S]*?}/, frame18New);

fs.writeFileSync('D:\\loraloop\\home\\src\\imports\\Home-1\\Home-10-5453.tsx', code);
console.log('Done!');
