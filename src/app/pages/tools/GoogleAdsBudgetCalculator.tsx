import { useState } from 'react';
import CalculatorLayout, { Field, Stat, fmtMoney, num } from '../../components/CalculatorLayout';

/** Google caps monthly charges at the average daily budget × 30.4. */
const DAYS_PER_MONTH = 30.4;

export default function GoogleAdsBudgetCalculator() {
  const [conversions, setConversions] = useState('40');
  const [cpc, setCpc] = useState('3.50');
  const [cvr, setCvr] = useState('5');
  const [targetCpa, setTargetCpa] = useState('80');

  const goal = num(conversions), c = num(cpc), r = num(cvr) / 100, t = num(targetCpa);
  const clicks = r > 0 ? goal / r : NaN;
  const monthly = clicks * c;
  const daily = monthly / DAYS_PER_MONTH;
  const impliedCpa = r > 0 ? c / r : NaN;
  const budgetAtTarget = goal * t;
  const maxCpcAtTarget = t * r;
  const campaignsSupported = Number.isFinite(goal) ? Math.max(1, Math.floor(goal / 30)) : NaN;

  let fit: 'weak' | 'ok' | 'strong' | 'na' = 'na';
  let note = 'Enter your numbers to see the budget.';
  if (Number.isFinite(monthly) && Number.isFinite(impliedCpa) && Number.isFinite(t) && t > 0) {
    if (impliedCpa > t * 1.1) {
      fit = 'weak';
      note = `At ${fmtMoney(c)} per click and a ${(r * 100).toFixed(1)}% conversion rate you will pay about ${fmtMoney(impliedCpa)} per conversion, above your ${fmtMoney(t)} target. To hit the target, either keep the average CPC under ${fmtMoney(maxCpcAtTarget)} (tighter keywords, better Quality Score, negative keywords) or lift the landing page conversion rate to ${((c / t) * 100).toFixed(1)}%. Spending more will not fix the gap.`;
    } else if (impliedCpa > t * 0.9) {
      fit = 'ok';
      note = `Expected cost per conversion (${fmtMoney(impliedCpa)}) is close to your ${fmtMoney(t)} target, so the plan works with little room for error. Budget ${fmtMoney(daily)} a day and remove wasted search terms weekly to keep the margin.`;
    } else {
      fit = 'strong';
      note = `Expected cost per conversion (${fmtMoney(impliedCpa)}) is below your ${fmtMoney(t)} target. A daily budget of ${fmtMoney(daily)} should buy about ${Math.round(goal)} conversions a month if CPC and conversion rate hold.`;
    }
    if (goal < 15) note += ' Under about 15 conversions a month, Smart Bidding has little to learn from: start with Maximize conversions without a target, or optimize toward an earlier action such as a lead form view, then add a target later.';
    else if (goal < 30) note += ' Keep this in one campaign. Splitting thin conversion volume across several campaigns slows Smart Bidding down.';
    else note += ` This volume supports roughly ${campaignsSupported} campaign${campaignsSupported === 1 ? '' : 's'} with about 30 conversions each a month; consolidate rather than spread budget thin.`;
  }

  return (
    <CalculatorLayout slug="google-ads-budget-calculator">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-5">
          <h2 className="text-lg font-bold text-gray-900">Your goal and account numbers</h2>
          <Field label="Conversions you want per month" value={conversions} onChange={setConversions} hint="Leads, sales, bookings or sign-ups: whatever your primary conversion action counts." />
          <Field label="Average cost per click" prefix="$" value={cpc} onChange={setCpc} hint="From your account, or Keyword Planner's top-of-page bid range for new accounts." />
          <Field label="Conversion rate" suffix="%" value={cvr} onChange={setCvr} hint="Conversions divided by clicks. Use your own landing page rate if you know it." />
          <Field label="Target cost per conversion (CPA)" prefix="$" value={targetCpa} onChange={setTargetCpa} hint="The most you can pay for one conversion and still make money." />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Monthly budget" value={fmtMoney(monthly)} note="Clicks needed × cost per click" band={fit} />
            <Stat label="Daily budget" value={fmtMoney(daily)} note="Monthly ÷ 30.4, the way Google caps monthly charges" />
            <Stat label="Clicks needed" value={Number.isFinite(clicks) ? Math.round(clicks).toLocaleString('en-US') : '–'} />
            <Stat label="Expected CPA" value={fmtMoney(impliedCpa)} note={`Target ${fmtMoney(t)}`} band={fit} />
            <Stat label="Budget at target CPA" value={fmtMoney(budgetAtTarget)} note="Conversions × target CPA" />
            <Stat label="Max CPC to hit target" value={fmtMoney(maxCpcAtTarget)} note="Target CPA × conversion rate" />
          </div>
          <div className="bg-gray-900 text-white rounded-2xl p-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">What this budget means</div>
            <p className="text-sm leading-relaxed">{note}</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
