import { useState } from 'react';
import CalculatorLayout, { Field, Stat, fmtPct, num, type Band } from '../../components/CalculatorLayout';

function bandHook(r: number): Band { return !Number.isFinite(r) ? 'na' : r < 0.2 ? 'weak' : r <= 0.3 ? 'ok' : 'strong'; }
function bandHold(r: number): Band { return !Number.isFinite(r) ? 'na' : r < 0.1 ? 'weak' : r <= 0.25 ? 'ok' : 'strong'; }
function bandCtr(r: number): Band { return !Number.isFinite(r) ? 'na' : r < 0.008 ? 'weak' : r <= 0.015 ? 'ok' : 'strong'; }

export default function HookRateCalculator() {
  const [impressions, setImpressions] = useState('50000');
  const [plays3s, setPlays3s] = useState('12500');
  const [thruPlays, setThruPlays] = useState('2100');
  const [clicks, setClicks] = useState('450');

  const imp = num(impressions), p3 = num(plays3s), tp = num(thruPlays), cl = num(clicks);
  const hook = imp > 0 ? p3 / imp : NaN;
  const hold = p3 > 0 ? tp / p3 : NaN;
  const ctr = imp > 0 ? cl / imp : NaN;
  const completion = imp > 0 ? tp / imp : NaN;
  const small = imp > 0 && imp < 1000;

  const hb = bandHook(hook), hdb = bandHold(hold), cb = bandCtr(ctr);
  let verdict = 'Enter your numbers to get a verdict.';
  if (Number.isFinite(hook) && Number.isFinite(hold)) {
    if (hb === 'weak') verdict = 'Fix the opener. Few people stop for the first three seconds, so nothing after that gets a chance. Test a new first frame, a sharper first line, faster motion or a different angle before touching the rest of the ad.';
    else if (hdb === 'weak') verdict = 'The hook works but the body loses people. Tighten pacing, bring proof or the product reveal earlier, cut the section after the hook, or check that the opener does not promise something the body never delivers.';
    else if (cb === 'weak') verdict = 'People watch but do not click. The call to action, the offer or the perceived next step is the problem. Make the CTA explicit, repeat the offer on screen, and make sure the landing page matches what the ad promised.';
    else if (hb === 'strong' && hdb === 'strong') verdict = 'This creative is doing its job. Iterate it: new hooks on the same body, new bodies on the same hook, and more budget while the frequency stays healthy.';
    else verdict = 'Solid but not exceptional. The biggest lift usually comes from testing three alternative openers on this body, since hook rate moves the most with the least production effort.';
  }

  return (
    <CalculatorLayout slug="hook-rate-calculator">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-5">
          <h2 className="text-lg font-bold text-gray-900">Numbers from Ads Manager</h2>
          <Field label="Impressions" value={impressions} onChange={setImpressions} hint="Use at least 1,000 impressions for a readable result." />
          <Field label="3-second video plays" value={plays3s} onChange={setPlays3s} hint="Column: 3-Second Video Plays." />
          <Field label="ThruPlays" value={thruPlays} onChange={setThruPlays} hint="Plays to 15 seconds or to completion for shorter videos." />
          <Field label="Link clicks (optional)" value={clicks} onChange={setClicks} hint="Outbound or link clicks, for click-through rate." />
          {small && <p className="text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">Fewer than 1,000 impressions: treat the result as directional only.</p>}
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Hook rate" value={fmtPct(hook)} band={hb} note="3s plays ÷ impressions" />
            <Stat label="Hold rate" value={fmtPct(hold)} band={hdb} note="ThruPlays ÷ 3s plays" />
            <Stat label="Outbound CTR" value={fmtPct(ctr)} band={cb} note="Link clicks ÷ impressions" />
            <Stat label="Completion rate" value={fmtPct(completion)} note="ThruPlays ÷ impressions" />
          </div>
          <div className="bg-gray-900 text-white rounded-2xl p-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">What to fix first</div>
            <p className="text-sm leading-relaxed">{verdict}</p>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
