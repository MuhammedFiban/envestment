import Link from "next/link";
import {
  Sprout,
  Ruler,
  Search,
  Calculator,
  Table,
  BookOpen,
  ScrollText,
} from "lucide-react";

export default function ResearchDeskPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-14">
      {/* Hero */}
      <section className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
          RESEARCH DESK
        </h1>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          Everything you need to start, verify, and grow with confidence. 100%
          free.
        </p>
      </section>

      {/* Disclaimer */}
      <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs px-4 py-2 rounded-lg text-center max-w-2xl mx-auto">
        ⚠ Educational data as of Q2 2026. Verify latest ratios on{" "}
        <a
          href="https://www.screener.in"
          className="underline font-semibold"
          target="_blank"
        >
          Screener.in
        </a>{" "}
        and consult a qualified scholar. Not financial advice.
      </div>

      {/* Step 1: Choose a Platform */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          STEP 1: CHOOSE A PLATFORM
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Groww */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 md:p-5 hover:shadow-md transition-shadow">
            <Sprout className="w-6 h-6 text-[#8B7B6B] mb-2" />
            <h3 className="text-xl font-bold mb-1">GROWW</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
              Beginner‑friendly. Access Tata Ethical Fund, Taurus Ethical Fund,
              and direct stocks. Start SIPs from ₹500.
            </p>
            <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1 mb-4">
              <li className="flex items-center gap-1">
                <span className="text-green-600 font-bold">✓</span> Free account
                opening
              </li>
              <li className="flex items-center gap-1">
                <span className="text-green-600 font-bold">✓</span> Zero
                commission on direct MFs
              </li>
              <li className="flex items-center gap-1">
                <span className="text-green-600 font-bold">✓</span> Step‑by‑step
                guided investing
              </li>
              <li className="flex items-center gap-1">
                <span className="text-green-600 font-bold">✓</span> Web, Android
                & iOS
              </li>
            </ul>
            <a
              href="https://groww.in"
              target="_blank"
              className="inline-block px-5 py-2 bg-[#8B7B6B] text-white rounded-full text-xs font-semibold hover:bg-[#6B5B4B] transition-colors"
            >
              VISIT GROWW ↗
            </a>
          </div>

          {/* Zerodha */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 md:p-5 hover:shadow-md transition-shadow">
            <Ruler className="w-6 h-6 text-[#8B7B6B] mb-2" />
            <h3 className="text-xl font-bold mb-1">ZERODHA</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
              Advanced platform. Use <strong>Coin</strong> for mutual funds and{" "}
              <strong>Smallcase</strong> for curated Shariah‑compliant baskets.
            </p>
            <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1 mb-4">
              <li className="flex items-center gap-1">
                <span className="text-green-600 font-bold">✓</span> ₹200 account
                opening (equity)
              </li>
              <li className="flex items-center gap-1">
                <span className="text-green-600 font-bold">✓</span> Coin: zero
                commission on MFs
              </li>
              <li className="flex items-center gap-1">
                <span className="text-green-600 font-bold">✓</span> Smallcase:
                halal baskets
              </li>
              <li className="flex items-center gap-1">
                <span className="text-green-600 font-bold">✓</span> Powerful
                charting & research
              </li>
            </ul>
            <a
              href="https://zerodha.com"
              target="_blank"
              className="inline-block px-5 py-2 bg-[#8B7B6B] text-white rounded-full text-xs font-semibold hover:bg-[#6B5B4B] transition-colors"
            >
              VISIT ZERODHA ↗
            </a>
          </div>
        </div>
      </section>

      {/* Step 2: Verify a Stock (Screener.in) */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          STEP 2: VERIFY A STOCK YOURSELF
        </h2>
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 md:p-5 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Search className="w-5 h-5 text-[#8B7B6B]" />
            <h3 className="text-lg font-bold">USING SCREENER.IN</h3>
          </div>
          <ol className="list-decimal list-inside text-xs text-gray-700 dark:text-gray-300 space-y-2">
            <li>
              Go to{" "}
              <a
                href="https://www.screener.in"
                className="text-[#8B7B6B] underline"
                target="_blank"
              >
                Screener.in
              </a>{" "}
              and search for the stock (e.g. <strong>TCS</strong>).
            </li>
            <li>
              Click <strong>“Profit & Loss”</strong> → look for{" "}
              <strong>“Other Income”</strong>. This contains interest income.
            </li>
            <li>
              Click <strong>“Balance Sheet”</strong> → note{" "}
              <strong>Total Debt</strong> and <strong>Total Assets</strong>.
            </li>
            <li>
              Calculate the three AAOIFI screens:
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>Interest % = (Other Income ÷ Total Revenue) × 100</li>
                <li>Debt % = (Total Debt ÷ Total Assets) × 100</li>
                <li>
                  Illiquid % = (Fixed Assets + Inventory + Intangibles) ÷ Total
                  Assets × 100
                </li>
              </ul>
            </li>
            <li>
              Compare with our{" "}
              <Link
                href="/watchlist"
                className="text-[#8B7B6B] underline font-semibold"
              >
                Stock Screen
              </Link>{" "}
              to save time.
            </li>
          </ol>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
            You can also use <strong>Moneycontrol</strong> → Financials for
            similar data.
          </p>
        </div>
      </section>

      {/* Step 3: Use Our Tools */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          STEP 3: USE OUR FREE TOOLS
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/watchlist">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 md:p-5 text-center hover:shadow-md transition-shadow cursor-pointer">
              <Table className="w-6 h-6 mx-auto text-[#8B7B6B] mb-2" />
              <h4 className="font-bold text-sm">STOCK SCREEN</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                50+ pre‑screened equities
              </p>
            </div>
          </Link>
          <Link href="/calculators">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 md:p-5 text-center hover:shadow-md transition-shadow cursor-pointer">
              <Calculator className="w-6 h-6 mx-auto text-[#8B7B6B] mb-2" />
              <h4 className="font-bold text-sm">PLANNERS</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Purification, Zakat, Growth
              </p>
            </div>
          </Link>
          <Link href="/learn">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 md:p-5 text-center hover:shadow-md transition-shadow cursor-pointer">
              <BookOpen className="w-6 h-6 mx-auto text-[#8B7B6B] mb-2" />
              <h4 className="font-bold text-sm">LEARN</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                20 essential concepts
              </p>
            </div>
          </Link>
          <Link href="/aaofi">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 md:p-5 text-center hover:shadow-md transition-shadow cursor-pointer">
              <ScrollText className="w-6 h-6 mx-auto text-[#8B7B6B] mb-2" />
              <h4 className="font-bold text-sm">AAOIFI STANDARD</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                4‑step screening method
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
