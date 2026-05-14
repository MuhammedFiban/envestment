import Link from "next/link";
import QuickSearch from "@/components/QuickSearch";
import {
  Sprout,
  Ruler,
  Search,
  Calculator,
  Table,
  BookOpen,
  ScrollText,
} from "lucide-react";

export default function GuidePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl md:text-5xl font-bold text-center text-gray-900 dark:text-gray-100">
          YOUR HALAL
          <br />
          <span className="text-[#8B7B6B]">INVESTOR’S</span> TOOLKIT
        </h1>
        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
          Everything you need to start, verify, and grow with confidence. 100%
          free.
        </p>
      </section>

      {/* Step 1: Choose a Platform */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">
          STEP 1: CHOOSE A PLATFORM
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Groww */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <Sprout className="w-8 h-8 text-[#8B7B6B] mb-3" />
            <h3 className="text-2xl font-bold mb-2">GROWW</h3>
            <p className="text-sm text-gray-600 mb-4">
              Beginner‑friendly. Access Tata Ethical Fund, Taurus Ethical Fund,
              and direct stocks. Start SIPs from ₹500.
            </p>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
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
              className="inline-block px-6 py-3 bg-[#8B7B6B] text-white rounded-full text-sm font-semibold hover:bg-[#6B5B4B] transition-colors"
            >
              VISIT GROWW ↗
            </a>
          </div>

          {/* Zerodha */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <Ruler className="w-8 h-8 text-[#8B7B6B] mb-3" />
            <h3 className="text-2xl font-bold mb-2">ZERODHA</h3>
            <p className="text-sm text-gray-600 mb-4">
              Advanced platform. Use <strong>Coin</strong> for mutual funds and{" "}
              <strong>Smallcase</strong> for curated Shariah‑compliant baskets.
            </p>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
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
              className="inline-block px-6 py-3 bg-[#8B7B6B] text-white rounded-full text-sm font-semibold hover:bg-[#6B5B4B] transition-colors"
            >
              VISIT ZERODHA ↗
            </a>
          </div>
        </div>
      </section>

      {/* Step 2: Verify a Stock (Screener.in) */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">
          STEP 2: VERIFY A STOCK YOURSELF
        </h2>
        <div className="bg-white rounded-2xl border p-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Search className="w-6 h-6 text-[#8B7B6B]" />
            <h3 className="text-xl font-bold">USING SCREENER.IN</h3>
          </div>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-3">
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
              <ul className="list-disc list-inside ml-4 mt-2">
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
                pre‑screened stock list
              </Link>{" "}
              to save time.
            </li>
          </ol>
          <p className="text-xs text-gray-500 mt-4">
            💡 Tip: You can also use <strong>Moneycontrol</strong> → Financials
            for similar data.
          </p>
        </div>
      </section>

      {/* Step 3: Use Our Tools */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">
          STEP 3: USE OUR FREE TOOLS
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/watchlist">
            <div className="bg-white rounded-2xl border p-5 text-center hover:shadow-md transition-shadow cursor-pointer">
              <Table className="w-8 h-8 mx-auto text-[#8B7B6B] mb-2" />
              <h4 className="font-bold">WATCHLIST</h4>
              <p className="text-xs text-gray-500">50+ pre‑screened stocks</p>
            </div>
          </Link>
          <Link href="/calculators">
            <div className="bg-white rounded-2xl border p-5 text-center hover:shadow-md transition-shadow cursor-pointer">
              <Calculator className="w-8 h-8 mx-auto text-[#8B7B6B] mb-2" />
              <h4 className="font-bold">CALCULATORS</h4>
              <p className="text-xs text-gray-500">
                Purification, Zakat, Growth
              </p>
            </div>
          </Link>
          <Link href="/learn">
            <div className="bg-white rounded-2xl border p-5 text-center hover:shadow-md transition-shadow cursor-pointer">
              <BookOpen className="w-8 h-8 mx-auto text-[#8B7B6B] mb-2" />
              <h4 className="font-bold">FLASHCARDS</h4>
              <p className="text-xs text-gray-500">20 essential concepts</p>
            </div>
          </Link>
          <Link href="/aaofi">
            <div className="bg-white rounded-2xl border p-5 text-center hover:shadow-md transition-shadow cursor-pointer">
              <ScrollText className="w-8 h-8 mx-auto text-[#8B7B6B] mb-2" />
              <h4 className="font-bold">AAOIFI GUIDE</h4>
              <p className="text-xs text-gray-500">4‑step screening method</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
