import { useState } from 'react';
import CalculatorLayout, { Field, Stat, fmtMoney, num, type Band } from '../../components/CalculatorLayout';

function tierRange(monthly: number): { label: string; min: number; max: number } {
  if (monthly < 10000) return { label: 'under $10k a month', min: 2, max: 4 };
  if (monthly < 30000) return { label: '$10k to $30k a month', min: 4, max: 8 };
  if (monthly < 100000) return { label: '$30k to $100k a month', min: 8, max: 15 };
  return { label: 'over $100k a month', min: 15, max: 30 };
}

export default function CreativeTestingCalculator() {
  const [spend, setSpend] = useState('15000');
  const [cpa, setCpa] = useState('45');
  const [share, setShare] = useState('20');
  const [minResults, setMinResults] = useState('5');

  const monthly = num(spend), cost = num(cpa), pct = num(share) / 100, minR = num(minResults);
  const weeklyTest = monthly * pct / 4.33;
  const costToJudge = cost * minR;
  const affordable = costToJudge > 0 ? Math.floor(weeklyTest / costToJudge) : NaN;
  const tier = tierRange(monthly);
  const monthlyVariants = Number.isFinite(affordable) ? affordable * 4 : NaN;

  let band: Band = 'na';
  let advice = 'Enter your numbers to see how many creatives you can validate each week.';
  if (Number.isFinite(affordable)) {
    if (affordable < tier.min) {
      band = 'weak';
      const neededShare = Math.min(100, Math.ceil((tier.min * costToJudge * 4.33 / monthly) * 100));
      advice = `At ${share}% test share you can validate ${affordable} variant${affordable === 1 ? '' : 's'} a week, below the ${tier.min} to ${tier.max} that buyers typically run ${tier.label}. Options: raise the test share to about ${neededShare}%, judge on a cheaper upstream signal (add to cart, lead) so each variant needs less spend, or test fewer, more different concepts rather than small tweaks.`;
    } else if (affordable > tier.max) {
      band = 'strong';
      advice = `Budget is not your constraint: you can validate ${affordable} variants a week against a typical ${tier.min} to ${tier.max} ${tier.label}. The bottleneck is production. Build a pipeline that ships ${tier.max} or more diverse creatives a week, or move part of the test share back into scaling winners.`;
    } else {
      band = 'ok';
      advice = `You can validate ${affordable} variants a week, inside the ${tier.min} to ${tier.max} range buyers typically run ${tier.label}. Make sure production actually delivers that many, mix new angles with iterations of winners, and promote winners into scaling campaigns weekly.`;
    }
  }

  return (
    <CalculatorLayout slug="creative-testing-calculator">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-5">
          <h2 className="text-lg font-bold text-gray-900">Your account</h2>
          <Field label="Monthly Meta spend" prefix="$" value={spend} onChange={setSpend} />
          <Field label="Cost per result" prefix="$" value={cpa} onChange={setCpa} hint="Current or target cost per purchase, lead or signup." />
          <Field label="Share of spend reserved for testing" suffix="%" value={share} onChange={setShare} hint="15 to 25% is common. New accounts run higher." />
          <Field label="Results needed to judge a variant" value={minResults} onChange={setMinResults} hint="5 is a practical minimum; 10 gives a cleaner read." />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Weekly test budget" value={fmtMoney(weeklyTest)} />
            <Stat label="Spend to judge one variant" value={fmtMoney(costToJudge)} note={`${minResults || 0} results × cost per result`} />
            <Stat label="Variants you can validate per week" value={Number.isFinite(affordable) ? String(affordable) : '–'} band={band} />
            <Stat label="Typical range at your spend" value={`${tier.min} to ${tier.max}`} note={`Practitioner range ${tier.label}`} />
          </div>
          <div className="bg-gray-900 text-white rounded-2xl p-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Recommendation</div>
            <p className="text-sm leading-relaxed">{advice}</p>
            {Number.isFinite(monthlyVariants) && <p className="text-xs text-gray-400 mt-3">That is roughly {monthlyVariants} validated creatives a month. On Loraloop, a generated ad with creative, copy and campaign draft costs 10 credits, so the Starter plan (300 credits) covers about 30 a month.</p>}
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
