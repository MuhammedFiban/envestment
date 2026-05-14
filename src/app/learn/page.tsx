"use client";

import { useState } from "react";
import { Coins, Building, Briefcase, TrendingUp } from "lucide-react";

const cards = [
  {
    q: "IS GOLD PERMISSIBLE?",
    a: "Physical gold, coins, bars, and gold ETFs are permissible. Avoid SGB (2.5% interest).",
  },
  {
    q: "WHAT IS RIBA?",
    a: "Riba means interest – any guaranteed return on a loan. Prohibited in Quran (2:275).",
  },
  { q: "DEBT RATIO LIMIT?", a: "<33% of total assets or market cap." },
  {
    q: "PURIFICATION?",
    a: "If impermissible income <5%, donate that % of dividends to charity (not Zakat).",
  },
  {
    q: "PERMISSIBLE MUTUAL FUNDS?",
    a: "Yes: Tata Ethical, Taurus Ethical. SIP from ₹500.",
  },
  {
    q: "ZAKAT ON INVESTMENTS?",
    a: "2.5% on wealth held one lunar year above Nisab.",
  },
  {
    q: "ARE REITS PERMISSIBLE?",
    a: "If tenants are permissible, debt <33%, interest <5%.",
  },
  { q: "WHAT ARE SUKUK?", a: "Islamic bonds – profit‑sharing, no interest." },
  { q: "CAN I USE GROWW?", a: "Yes, just buy permissible products." },
  {
    q: "WHAT IS GHARAR?",
    a: "Excessive uncertainty – options, futures are not permissible.",
  },
  {
    q: "IS DAY TRADING PERMISSIBLE?",
    a: "Controversial; long‑term investing preferred.",
  },
  { q: "BANK ACCOUNTS?", a: "Avoid interest; donate if forced." },
  {
    q: "SGB PERMISSIBLE?",
    a: "No. Sovereign Gold Bonds pay 2.5% interest – not permissible.",
  },
  {
    q: "TATA ETHICAL FUND?",
    a: "India's largest Shariah‑compliant mutual fund. Screened quarterly.",
  },
  {
    q: "HOW TO SCREEN A STOCK?",
    a: "4‑step AAOIFI test: business, interest <5%, debt <33%, illiquid >33%.",
  },
  {
    q: "WHAT IS AAOIFI?",
    a: "Accounting and Auditing Organization for Islamic Financial Institutions.",
  },
  {
    q: "CAN I INVEST IN RELIANCE?",
    a: "Caution required. Diversified business, debt near limits. Verify and consult a scholar.",
  },
  {
    q: "ARE DIVIDENDS PERMISSIBLE?",
    a: "Yes, if the stock passes screening. Purify if minor impermissible income.",
  },
  {
    q: "WHAT IS NISAB?",
    a: "Minimum wealth for Zakat – value of 85g gold or 595g silver.",
  },
  {
    q: "IS CRYPTO PERMISSIBLE?",
    a: "Scholarly debate. Some permit Bitcoin as digital asset. Consult a scholar.",
  },
];

const guides = [
  {
    icon: <Coins className="w-5 h-5 text-[#8B7B6B]" />,
    title: "GOLD",
    what: "Physical gold (coins, bars, jewellery), Gold ETFs, Digital Gold (SafeGold, MMTC‑PAMP).",
    avoid: "Sovereign Gold Bonds (SGB) – pay 2.5% interest (Riba).",
    how: "Buy from reputable dealers or via ETFs on Groww/Zerodha. Always hold physical or backed units.",
  },
  {
    icon: <Building className="w-5 h-5 text-[#8B7B6B]" />,
    title: "REAL ESTATE",
    what: "Direct property (no interest‑based loan). Halal REITs – e.g. Embassy Office Parks, Mindspace.",
    avoid:
      "Properties leased to banks, bars, casinos. REITs with debt >33% or interest >5%.",
    how: "Screen REITs using AAOIFI rules. For direct property, avoid conventional mortgages (use Islamic finance if available).",
  },
  {
    icon: <Briefcase className="w-5 h-5 text-[#8B7B6B]" />,
    title: "MUTUAL FUNDS",
    what: "Tata Ethical Fund, Taurus Ethical Fund, Nippon India Shariah Fund, Quantum Ethical Fund.",
    avoid:
      "Conventional funds that invest in banking, alcohol, tobacco stocks.",
    how: "Open a Groww/Zerodha account, search the fund name, and start a SIP from ₹500/month. Always verify the fund's current screening status.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-[#8B7B6B]" />,
    title: "STOCKS",
    what: "The 100+ companies listed in our Stock Screen are pre‑screened for Shariah compliance (based on AAOIFI).",
    avoid:
      "Buying blindly – always re‑verify the latest financial ratios on Screener.in before investing.",
    how: "Use a demat account (Groww/Zerodha). Search the stock symbol, check our screening explanation, then verify independently. Consider purification if minor impermissible income exists.",
  },
];

export default function LearnPage() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-16">
      {/* ── How to Invest Halal ── */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-2">
            HOW TO INVEST <span className="text-[#8B7B6B]">HALAL</span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Educational guidance only. Always verify independently and consult a
            qualified scholar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {guides.map((g) => (
            <div
              key={g.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 space-y-3"
            >
              <div className="flex items-center gap-2">
                {g.icon}
                <h3 className="text-base font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  {g.title}
                </h3>
              </div>
              <div>
                <p className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                  ✅ What / Where
                </p>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {g.what}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-medium text-red-600/80 dark:text-red-400 uppercase tracking-wide mb-1">
                  ❌ Avoid
                </p>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {g.avoid}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-medium text-[#8B7B6B] dark:text-[#BEB7A4] uppercase tracking-wide mb-1">
                  🔹 How
                </p>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {g.how}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer (grey) */}
        <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 mt-6 text-center">
          <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>Disclaimer:</strong> This information is for educational
            purposes only. It does not constitute financial advice or a
            religious ruling (fatwa). Always verify the latest financial data on{" "}
            <a
              href="https://www.screener.in"
              className="underline font-semibold text-[#8B7B6B]"
              target="_blank"
            >
              Screener.in
            </a>{" "}
            and consult a qualified Islamic scholar before making any investment
            decision. We are not liable for any losses or misinterpretations.
          </p>
        </div>
      </section>

      {/* ── Flashcards ── */}
      <section className="max-w-xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          LEARN
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Question {index + 1} of {cards.length}
        </p>
        <div
          onClick={() => setFlipped(!flipped)}
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 h-60 flex items-center justify-center cursor-pointer p-6"
        >
          {flipped ? (
            <p className="text-lg text-gray-800 dark:text-gray-200">
              {cards[index].a}
            </p>
          ) : (
            <p className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              {cards[index].q}
            </p>
          )}
        </div>
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => {
              setIndex((index - 1 + cards.length) % cards.length);
              setFlipped(false);
            }}
            className="px-5 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            ← PREV
          </button>
          <button
            onClick={() => {
              setIndex((index + 1) % cards.length);
              setFlipped(false);
            }}
            className="px-5 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            NEXT →
          </button>
        </div>
      </section>
    </div>
  );
}
