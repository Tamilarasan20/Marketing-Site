import { useState } from 'react';
import CalculatorLayout, { Field, Stat, fmtMoney, fmtPct, num } from '../../components/CalculatorLayout';

export default function BreakEvenRoasCalculator() {
  const [aov, setAov] = useState('80');
  const [cogs, setCogs] = useState('28');
  const [shipping, setShipping] = useState('9');
  const [feePct, setFeePct] = useState('2.9');
  const [other, setOther] = useState('3');
  const [targetMargin, setTargetMargin] = useState('10');

  const a = num(aov), c = num(cogs), s = num(shipping), f = num(feePct) / 100, o = num(other), m = num(targetMargin) / 100;
  const fees = a * f;
  const contribution = a - c - s - fees - o;
  const contributionPct = a > 0 ? contribution / a : NaN;
  const breakEvenRoas = contribution > 0 ? a / contribution : NaN;
  const maxCpaBreakEven = contribution;
  const targetProfit = a * m;
  const maxCpaTarget = contribution - targetProfit;
  const targetRoas = maxCpaTarget > 0 ? a / maxCpaTarget : NaN;

  let note = 'Enter your unit economics to see the thresholds.';
  if (Number.isFinite(contribution)) {
    if (contribution <= 0) note = 'Contribution margin is zero or negative: this product cannot be advertised profitably at any ROAS. Raise price, cut fulfilment cost, or bundle to lift average order value before spending on ads.';
    else if (!Number.isFinite(targetRoas)) note = `Break-even ROAS is ${breakEvenRoas.toFixed(2)}, but the target margin you set leaves no room for ad spend. Lower the target margin or improve the contribution margin.`;
    else note = `Scale ad sets above ${targetRoas.toFixed(2)} ROAS (or under ${fmtMoney(maxCpaTarget)} per purchase). Hold anything between ${breakEvenRoas.toFixed(2)} and ${targetRoas.toFixed(2)}. Cut below ${breakEvenRoas.toFixed(2)} once an ad set has enough results to judge. Compare against blended ROAS (total revenue ÷ total spend) too, because platform ROAS over-credits ads.`;
  }

  return (
    <CalculatorLayout slug="break-even-roas-calculator">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-5">
          <h2 className="text-lg font-bold text-gray-900">Unit economics per order</h2>
          <Field label="Average order value" prefix="$" value={aov} onChange={setAov} hint="Revenue per order. Include shipping charged to customers only if you also include shipping cost below." />
          <Field label="Cost of goods per order" prefix="$" value={cogs} onChange={setCogs} />
          <Field label="Shipping and fulfilment per order" prefix="$" value={shipping} onChange={setShipping} hint="Postage, pick and pack, packaging." />
          <Field label="Payment processing" suffix="%" value={feePct} onChange={setFeePct} hint="Typical card processing is around 2.9% plus a fixed fee." />
          <Field label="Other variable cost per order" prefix="$" value={other} onChange={setOther} hint="Returns allowance, affiliate fees, inserts." />
          <Field label="Net profit margin you want after ads" suffix="%" value={targetMargin} onChange={setTargetMargin} hint="Set to 0 for pure break-even." />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Contribution margin" value={fmtMoney(contribution)} note={`${fmtPct(contributionPct)} of order value`} band={contribution <= 0 ? 'weak' : 'na'} />
            <Stat label="Break-even ROAS" value={Number.isFinite(breakEvenRoas) ? breakEvenRoas.toFixed(2) : '–'} note="Kill threshold" />
            <Stat label="Max CPA at break-even" value={fmtMoney(maxCpaBreakEven)} />
            <Stat label="Target ROAS" value={Number.isFinite(targetRoas) ? targetRoas.toFixed(2) : '–'} note={`Keeps ${targetMargin || 0}% net margin`} band={Number.isFinite(targetRoas) ? 'strong' : 'na'} />
            <Stat label="Max CPA at target" value={fmtMoney(maxCpaTarget)} />
            <Stat label="Payment fees per order" value={fmtMoney(fees)} />
          </div>
          <div className="bg-gray-900 text-white rounded-2xl p-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">How to use these thresholds</div>
            <p className="text-sm leading-relaxed">{note}</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
