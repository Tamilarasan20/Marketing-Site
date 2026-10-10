import { useMemo, useState } from 'react';
import CalculatorLayout, { Field, Stat, fmtMoney, fmtPct, num } from '../../components/CalculatorLayout';

const SAMPLE = `Search term,Clicks,Cost,Conversions
emergency plumber near me,64,412.30,11
emergency plumbing service,27,176.20,4
24 hour plumber,38,251.10,6
plumber near me,55,318.75,7
plumbing repair near me,20,140.00,3
blocked drain plumber,21,133.40,3
leaking tap repair,15,79.40,2
cheap plumber,26,149.60,1
plumber salary,19,96.20,0
plumbing jobs near me,23,118.90,0
plumber jobs,14,71.35,0
how to fix a leaking tap,31,87.55,0
plumbing course online,12,64.80,0
boiler repair cost,18,121.75,0
diy drain unblocking,17,52.10,0
free plumbing quote,9,41.20,0
plumbing apprenticeship,8,39.90,0`;

const STOPWORDS = new Set(['the', 'and', 'for', 'near', 'with', 'from', 'what', 'how', 'who', 'why', 'are', 'can', 'you', 'your', 'best', 'top', 'get', 'does', 'that', 'this', 'into', 'out']);

interface TermRow { term: string; clicks: number; cost: number; conversions: number }

/** Minimal CSV/TSV line parser that respects double-quoted fields. */
function splitLine(line: string, delim: string): string[] {
  const out: string[] = [];
  let cur = '';
  let quoted = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (quoted && line[i + 1] === '"') { cur += '"'; i++; } else quoted = !quoted;
    } else if (ch === delim && !quoted) {
      out.push(cur); cur = '';
    } else cur += ch;
  }
  out.push(cur);
  return out.map((c) => c.trim());
}

/** "1,234.50", "$1,234.50", "--" → number (US format). */
const toNumber = (s: string | undefined) => {
  if (!s) return 0;
  const n = parseFloat(s.replace(/[^0-9.\-]/g, ''));
  return Number.isFinite(n) ? n : 0;
};

const norm = (s: string) => s.toLowerCase().replace(/\s+/g, ' ').trim();

/** Parses a Google Ads search terms export (CSV or tab-separated, with or without title rows above the header). */
function parseReport(text: string): { rows: TermRow[]; error?: string } {
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length === 0) return { rows: [] };
  const delim = lines.some((l) => l.includes('\t')) ? '\t' : ',';
  const headerIdx = lines.findIndex((l) => splitLine(l, delim).some((c) => ['search term', 'search terms', 'search query', 'query'].includes(norm(c))));
  if (headerIdx === -1) return { rows: [], error: 'Could not find a "Search term" column. Paste the report including its header row.' };

  const header = splitLine(lines[headerIdx], delim).map(norm);
  const find = (names: string[]) => header.findIndex((h) => names.includes(h));
  const iTerm = find(['search term', 'search terms', 'search query', 'query']);
  const iCost = find(['cost', 'spend', 'cost (usd)', 'amount spent']);
  const iConv = find(['conversions', 'conv.', 'conv']);
  const iClicks = find(['clicks']);
  if (iCost === -1 || iConv === -1) return { rows: [], error: 'The report needs "Cost" and "Conversions" columns. Add them in Google Ads (Columns) before downloading.' };

  const byTerm = new Map<string, TermRow>();
  for (const line of lines.slice(headerIdx + 1)) {
    const cells = splitLine(line, delim);
    const term = (cells[iTerm] ?? '').trim();
    if (!term || /^total/i.test(term) || term === '--') continue;
    const key = term.toLowerCase();
    const row = byTerm.get(key) ?? { term, clicks: 0, cost: 0, conversions: 0 };
    row.cost += toNumber(cells[iCost]);
    row.conversions += toNumber(cells[iConv]);
    row.clicks += iClicks >= 0 ? toNumber(cells[iClicks]) : 0;
    byTerm.set(key, row);
  }
  return { rows: [...byTerm.values()] };
}

const words = (term: string) =>
  [...new Set(term.toLowerCase().replace(/[^a-z0-9\s'-]/g, ' ').split(/\s+/).filter((w) => w.length >= 3 && !STOPWORDS.has(w)))];

export default function GoogleAdsWastedSpendFinder() {
  const [report, setReport] = useState(SAMPLE);
  const [targetCpa, setTargetCpa] = useState('60');

  const cpa = num(targetCpa);
  const { rows, error } = useMemo(() => parseReport(report), [report]);

  const analysis = useMemo(() => {
    const total = rows.reduce((s, r) => s + r.cost, 0);
    const zeroConv = rows.filter((r) => r.conversions === 0);
    const zeroSpend = zeroConv.reduce((s, r) => s + r.cost, 0);
    const hasCpa = Number.isFinite(cpa) && cpa > 0;
    const negatives = hasCpa ? zeroConv.filter((r) => r.cost >= cpa).sort((a, b) => b.cost - a.cost) : [];
    const watch = hasCpa ? zeroConv.filter((r) => r.cost >= cpa / 2 && r.cost < cpa).sort((a, b) => b.cost - a.cost) : [];
    const overTarget = hasCpa ? rows.filter((r) => r.conversions > 0 && r.cost / r.conversions >= cpa * 2).sort((a, b) => b.cost - a.cost) : [];

    // Words that appear only in searches with zero conversions, weighted by the spend behind them.
    const converting = new Set(rows.filter((r) => r.conversions > 0).flatMap((r) => words(r.term)));
    const wordStats = new Map<string, { cost: number; terms: number }>();
    for (const r of zeroConv) {
      for (const w of words(r.term)) {
        if (converting.has(w)) continue;
        const s = wordStats.get(w) ?? { cost: 0, terms: 0 };
        s.cost += r.cost; s.terms += 1;
        wordStats.set(w, s);
      }
    }
    const minWordCost = hasCpa ? cpa / 2 : 0;
    const ngrams = [...wordStats.entries()]
      .filter(([, s]) => s.cost >= minWordCost)
      .sort((a, b) => b[1].cost - a[1].cost || b[1].terms - a[1].terms)
      .slice(0, 12);

    return { total, zeroSpend, zeroShare: total > 0 ? zeroSpend / total : NaN, negatives, watch, overTarget, ngrams };
  }, [rows, cpa]);

  const negSpend = analysis.negatives.reduce((s, r) => s + r.cost, 0);
  const shareBand = !Number.isFinite(analysis.zeroShare) ? 'na' : analysis.zeroShare > 0.3 ? 'weak' : analysis.zeroShare >= 0.15 ? 'ok' : 'strong';

  return (
    <CalculatorLayout slug="google-ads-wasted-spend-finder">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-5">
          <h2 className="text-lg font-bold text-gray-900">Your search terms report</h2>
          <label className="block">
            <span className="block text-sm font-semibold text-gray-800 mb-1">Paste the report (CSV or copied from Google Ads)</span>
            <textarea value={report} onChange={(e) => setReport(e.target.value)} rows={12} spellCheck={false}
              className="w-full border border-gray-300 rounded-xl px-3 py-3 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-violet-500" />
            <span className="block text-xs text-gray-400 mt-1 leading-relaxed">Needs columns for Search term, Cost and Conversions (Clicks optional). Sample data from a fictional plumber is loaded. Nothing leaves your browser.</span>
          </label>
          <div className="flex gap-2">
            <button type="button" onClick={() => setReport('')} className="text-xs font-semibold text-gray-600 border border-gray-300 rounded-full px-3 py-1.5 hover:bg-gray-50">Clear</button>
            <button type="button" onClick={() => setReport(SAMPLE)} className="text-xs font-semibold text-violet-700 border border-violet-200 bg-violet-50 rounded-full px-3 py-1.5 hover:bg-violet-100">Load sample</button>
          </div>
          <Field label="Target cost per conversion (CPA)" prefix="$" value={targetCpa} onChange={setTargetCpa} hint="A search term that spent at least this much with zero conversions is a negative keyword candidate. Half of it puts a term on the watch list." />
          {error && <p className="text-sm text-red-600">{error}</p>}
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Search terms read" value={rows.length.toLocaleString('en-US')} />
            <Stat label="Total spend" value={fmtMoney(analysis.total)} />
            <Stat label="Spend with 0 conversions" value={fmtMoney(analysis.zeroSpend)} note={`${fmtPct(analysis.zeroShare)} of spend`} band={shareBand} />
            <Stat label="Negative candidates" value={String(analysis.negatives.length)} note={`${fmtMoney(negSpend)} spent, 0 conversions`} band={analysis.negatives.length ? 'weak' : 'na'} />
          </div>
          <div className="bg-gray-900 text-white rounded-2xl p-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Before you add negatives</div>
            <p className="text-sm leading-relaxed">Download the report for a range that ends at least 3 days ago so late conversions have time to arrive. Add negatives for the wrong intent (jobs, salary, free, DIY, courses), not for services you sell that simply have not converted yet. Use phrase match for words, exact match for single searches.</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 overflow-x-auto">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Search terms to review</h2>
          <p className="text-sm text-gray-500 mb-4">Zero conversions and spend at or above your target CPA (negative candidate) or half of it (watch).</p>
          {analysis.negatives.length + analysis.watch.length === 0 ? (
            <p className="text-sm text-gray-500">Nothing over the threshold. Good sign, or try a longer date range.</p>
          ) : (
            <table className="w-full text-sm text-left min-w-[380px]">
              <thead><tr className="border-b border-gray-200 text-gray-900"><th className="py-2 pr-3 font-bold">Search term</th><th className="py-2 pr-3 font-bold">Cost</th><th className="py-2 font-bold">Verdict</th></tr></thead>
              <tbody>
                {[...analysis.negatives.map((r) => ({ r, v: 'Negative candidate' })), ...analysis.watch.map((r) => ({ r, v: 'Watch' }))].slice(0, 20).map(({ r, v }) => (
                  <tr key={r.term} className="border-b border-gray-100 last:border-0 text-gray-600">
                    <td className="py-2 pr-3 text-gray-800">{r.term}</td>
                    <td className="py-2 pr-3">{fmtMoney(r.cost)}</td>
                    <td className={`py-2 font-semibold ${v === 'Watch' ? 'text-amber-600' : 'text-red-600'}`}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {analysis.overTarget.length > 0 && (
            <p className="text-sm text-gray-500 mt-4">Converting, but at more than twice your target CPA: {analysis.overTarget.slice(0, 5).map((r) => `${r.term} (${fmtMoney(r.cost / r.conversions)} per conversion)`).join(', ')}. Lower the bid or tighten the match type rather than blocking these.</p>
          )}
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 overflow-x-auto">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Words that never convert</h2>
          <p className="text-sm text-gray-500 mb-4">Words found only in searches with zero conversions, ranked by the spend behind them. Phrase-match negative candidates, after a human check.</p>
          {analysis.ngrams.length === 0 ? (
            <p className="text-sm text-gray-500">No repeated wasted words above the threshold.</p>
          ) : (
            <table className="w-full text-sm text-left min-w-[320px]">
              <thead><tr className="border-b border-gray-200 text-gray-900"><th className="py-2 pr-3 font-bold">Word</th><th className="py-2 pr-3 font-bold">Searches</th><th className="py-2 font-bold">Wasted spend</th></tr></thead>
              <tbody>
                {analysis.ngrams.map(([w, s]) => (
                  <tr key={w} className="border-b border-gray-100 last:border-0 text-gray-600">
                    <td className="py-2 pr-3 font-mono text-gray-800">"{w}"</td>
                    <td className="py-2 pr-3">{s.terms}</td>
                    <td className="py-2">{fmtMoney(s.cost)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </CalculatorLayout>
  );
}
