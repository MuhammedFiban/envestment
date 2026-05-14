"use client";

import { useState } from "react";

export default function CalculatorsPage() {
  const [purInterest, setPurInterest] = useState(1450);
  const [purOther, setPurOther] = useState(895);
  const [zakatWealth, setZakatWealth] = useState(750600);
  const [nisabMet, setNisabMet] = useState("yes");
  const [monthly, setMonthly] = useState(5000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const purTotal = purInterest + purOther;
  const zakat = nisabMet === "yes" ? zakatWealth * 0.025 : 0;
  const n = years * 12;
  const mr = rate / 100 / 12;
  const fv = monthly * ((Math.pow(1 + mr, n) - 1) / mr) * (1 + mr);
  const invested = monthly * n;
  const returns = fv - invested;
  const net = fv - fv * 0.025;

  const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <h1 className="text-4xl font-bold text-center">CALCULATORS</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Purification */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold mb-4">PURIFICATION</h2>
          <label className="text-sm text-gray-600">Interest Income (₹)</label>
          <input
            type="number"
            value={purInterest}
            onChange={(e) => setPurInterest(+e.target.value)}
            className="w-full px-3 py-2 border rounded-lg mb-3 text-sm"
          />
          <label className="text-sm text-gray-600">
            Other Non‑Permissible (₹)
          </label>
          <input
            type="number"
            value={purOther}
            onChange={(e) => setPurOther(+e.target.value)}
            className="w-full px-3 py-2 border rounded-lg mb-3 text-sm"
          />
          <div className="flex justify-between pt-2 border-t font-bold">
            <span>Total Purifiable</span>
            <span>{fmt(purTotal)}</span>
          </div>
        </div>

        {/* Zakat */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold mb-4">ZAKAT</h2>
          <label className="text-sm text-gray-600">Net Wealth (₹)</label>
          <input
            type="number"
            value={zakatWealth}
            onChange={(e) => setZakatWealth(+e.target.value)}
            className="w-full px-3 py-2 border rounded-lg mb-3 text-sm"
          />
          <label className="text-sm text-gray-600">Nisab Met?</label>
          <select
            value={nisabMet}
            onChange={(e) => setNisabMet(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg mb-3 text-sm"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <div className="flex justify-between pt-2 border-t font-bold">
            <span>Zakat Payable</span>
            <span>{fmt(zakat)}</span>
          </div>
        </div>
      </div>

      {/* Growth */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-xl font-bold mb-4">GROWTH CALCULATOR</h2>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">
              Monthly: {fmt(monthly)}
            </label>
            <input
              type="range"
              min={500}
              max={50000}
              step={500}
              value={monthly}
              onChange={(e) => setMonthly(+e.target.value)}
              className="w-full accent-[#8B7B6B]"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Years: {years}</label>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={years}
              onChange={(e) => setYears(+e.target.value)}
              className="w-full accent-[#8B7B6B]"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Return: {rate}%</label>
            <input
              type="range"
              min={6}
              max={20}
              step={0.5}
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
              className="w-full accent-[#8B7B6B]"
            />
          </div>
          <div className="bg-gray-900 text-white rounded-xl p-5 space-y-2">
            <div className="flex justify-between">
              <span>Total Invested</span>
              <span>{fmt(invested)}</span>
            </div>
            <div className="flex justify-between">
              <span>Returns</span>
              <span>{fmt(returns)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Future Value</span>
              <span>{fmt(fv)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-[#BEB7A4]">
              <span>Net Halal Wealth</span>
              <span>{fmt(net)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
