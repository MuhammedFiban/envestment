"use client";

import { useState } from "react";

const steps = [
  {
    title: "1. Business Activity Screening",
    content:
      "The core business must be permissible. Avoid conventional banking, alcohol, gambling, pork, or impermissible entertainment.",
  },
  {
    title: "2. Interest Income Test",
    content:
      "Interest income must be <5% of total revenue. Formula: (Interest Income ÷ Total Revenue) × 100 < 5%.",
  },
  {
    title: "3. Debt‑to‑Asset Ratio",
    content:
      "Total interest‑bearing debt must be <33% of total assets. Formula: (Total Debt ÷ Total Assets) × 100 < 33%.",
  },
  {
    title: "4. Illiquid Assets Test",
    content:
      "Illiquid assets (fixed assets + inventory + intangibles) must be >33% of total assets to avoid money trading.",
  },
];

export default function AAOFIPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-4xl font-bold text-center">
        AAOIFI SCREENING METHOD
      </h1>
      <p className="text-center text-gray-500">
        The 4‑step global standard for Shariah‑compliant stock selection.
      </p>
      <div className="space-y-3">
        {steps.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center"
            >
              <span>{s.title}</span>
              <span>{open === i ? "▾" : "▸"}</span>
            </button>
            {open === i && (
              <div className="px-6 pb-4 text-gray-600 text-sm">{s.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
