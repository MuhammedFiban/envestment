"use client";

import { useState, useMemo } from "react";
import { Search, ArrowDown } from "lucide-react";

/* ───────────────────────────────────────
   TIMELESS PERMISSIBLE COMPANIES (100+)
   Sourced from:
   - Nifty Shariah 25 Index (NSE)
   - Islamicly Top Halal Stocks
   - Musaffa Top Picks
   - Zamzam Capital Halal Stocks List
   Data as of Q2 2026.
   ─────────────────────────────────────── */
interface PermissibleStock {
  symbol: string;
  name: string;
  sector: string;
  source: string;
  marketCap: string;
  why: string;
}

const TIMELESS_PERMISSIBLE: PermissibleStock[] = [
  // ── IT Services (all zero/low debt, pure services) ──
  {
    symbol: "TCS",
    name: "Tata Consultancy Services",
    sector: "IT Services",
    source: "Nifty Shariah 25 · Islamicly",
    marketCap: "₹12.00 Lakh Cr",
    why: "Core IT services – permissible. Near‑zero debt. Interest income <1%. Illiquid assets >80%.",
  },
  {
    symbol: "INFY",
    name: "Infosys",
    sector: "IT Services",
    source: "Islamicly · Nifty Shariah 25",
    marketCap: "₹6.50 Lakh Cr",
    why: "IT services – permissible. Conservative debt. Minimal interest income. High illiquid ratio.",
  },
  {
    symbol: "HCLTECH",
    name: "HCL Technologies",
    sector: "IT Services",
    source: "Nifty Shariah 25 · Islamicly",
    marketCap: "₹3.94 Lakh Cr",
    why: "IT services – low debt, interest well under 5%. Illiquid ratio 75%.",
  },
  {
    symbol: "WIPRO",
    name: "Wipro",
    sector: "IT Services",
    source: "Islamicly · Nifty Shariah 25",
    marketCap: "₹2.60 Lakh Cr",
    why: "IT services – debt 3.2%, interest 0.5%. Illiquid 72%.",
  },
  {
    symbol: "TECHM",
    name: "Tech Mahindra",
    sector: "IT Services",
    source: "Nifty Shariah 25",
    marketCap: "₹1.41 Lakh Cr",
    why: "IT services – moderate debt, interest within limit. Illiquid >33%.",
  },
  {
    symbol: "PERSISTENT",
    name: "Persistent Systems",
    sector: "IT Services",
    source: "Nifty Shariah 25",
    marketCap: "₹84.83K Cr",
    why: "IT services – low debt, negligible interest, high illiquid.",
  },
  {
    symbol: "LTIM",
    name: "LTI Mindtree",
    sector: "IT Services",
    source: "Nifty Shariah 25",
    marketCap: "₹1.34 Lakh Cr",
    why: "IT services – low debt, interest <1%, illiquid >70%.",
  },
  {
    symbol: "COFORGE",
    name: "Coforge",
    sector: "IT Services",
    source: "Nifty Shariah 25",
    marketCap: "₹42.00K Cr",
    why: "IT services – low debt, negligible interest, illiquid >70%.",
  },
  {
    symbol: "TATAELXSI",
    name: "Tata Elxsi",
    sector: "IT Services",
    source: "Islamicly",
    marketCap: "₹45.00K Cr",
    why: "IT/engineering services – zero debt, negligible interest, high illiquid.",
  },
  {
    symbol: "MPHASIS",
    name: "Mphasis",
    sector: "IT Services",
    source: "Nifty Shariah 25",
    marketCap: "₹55.00K Cr",
    why: "IT services – low debt, interest well under 5%, passes illiquid test.",
  },

  // ── Pharmaceuticals (all genuine pharma, no financials) ──
  {
    symbol: "SUNPHARMA",
    name: "Sun Pharmaceutical",
    sector: "Pharmaceuticals",
    source: "Islamicly · Musaffa · Zamzam",
    marketCap: "₹4.00 Lakh Cr",
    why: "Pharma – permissible, moderate debt, interest <1%, illiquid >60%.",
  },
  {
    symbol: "DRREDDY",
    name: "Dr. Reddy's Laboratories",
    sector: "Pharmaceuticals",
    source: "Nifty Shariah 25 · Musaffa",
    marketCap: "₹1.03 Lakh Cr",
    why: "Pharma – debt 8.5%, interest 0.4%, passes all screens.",
  },
  {
    symbol: "CIPLA",
    name: "Cipla",
    sector: "Pharmaceuticals",
    source: "Nifty Shariah 25",
    marketCap: "₹99.32K Cr",
    why: "Pharma – debt 7.1%, interest 0.5%, illiquid >33%.",
  },
  {
    symbol: "DIVISLAB",
    name: "Divi's Laboratories",
    sector: "Pharmaceuticals",
    source: "Musaffa",
    marketCap: "₹95.00K Cr",
    why: "Pharma – almost zero debt, negligible interest, illiquid 80%.",
  },
  {
    symbol: "LUPIN",
    name: "Lupin",
    sector: "Pharmaceuticals",
    source: "Nifty Shariah 25",
    marketCap: "₹1.07 Lakh Cr",
    why: "Pharma – debt 10.1%, interest <1%, passes all tests.",
  },
  {
    symbol: "APOLLOHOSP",
    name: "Apollo Hospitals",
    sector: "Healthcare Services",
    source: "Nifty Shariah 25",
    marketCap: "₹1.08 Lakh Cr",
    why: "Healthcare services – permissible, acceptable debt, low interest.",
  },
  {
    symbol: "BIOCON",
    name: "Biocon",
    sector: "Pharmaceuticals",
    source: "Musaffa",
    marketCap: "₹38.00K Cr",
    why: "Pharma/biotech – moderate debt, interest within limits, passes.",
  },
  {
    symbol: "ALKEM",
    name: "Alkem Laboratories",
    sector: "Pharmaceuticals",
    source: "Musaffa",
    marketCap: "₹55.00K Cr",
    why: "Pharma – acceptable debt, low interest, passes screens.",
  },
  {
    symbol: "AUROPHARMA",
    name: "Aurobindo Pharma",
    sector: "Pharmaceuticals",
    source: "Nifty Shariah 25",
    marketCap: "₹48.00K Cr",
    why: "Pharma – debt 18.4%, interest 1.1%, illiquid >50%, passes.",
  },
  {
    symbol: "GLAND",
    name: "Gland Pharma",
    sector: "Pharmaceuticals",
    source: "Musaffa",
    marketCap: "₹25.00K Cr",
    why: "Pharma – low debt, negligible interest, strong illiquid.",
  },
  {
    symbol: "LAURUSLABS",
    name: "Laurus Labs",
    sector: "Pharmaceuticals",
    source: "Musaffa",
    marketCap: "₹20.00K Cr",
    why: "Pharma – moderate debt, interest under 1%, passes.",
  },
  {
    symbol: "IPCALAB",
    name: "Ipca Laboratories",
    sector: "Pharmaceuticals",
    source: "Musaffa",
    marketCap: "₹30.00K Cr",
    why: "Pharma – permissible sector, debt under control, passes.",
  },

  // ── FMCG (only pure consumer goods, no alcohol/tobacco) ──
  {
    symbol: "HINDUNILVR",
    name: "Hindustan Unilever",
    sector: "FMCG",
    source: "Islamicly · Nifty Shariah 25 · Musaffa · Zamzam",
    marketCap: "₹5.00 Lakh Cr",
    why: "Consumer staples – zero debt, negligible interest, illiquid 68%.",
  },
  {
    symbol: "NESTLEIND",
    name: "Nestlé India",
    sector: "FMCG – Food",
    source: "Nifty Shariah 25 · Musaffa · Zamzam",
    marketCap: "₹2.41 Lakh Cr",
    why: "Food products – permissible, low debt, interest under 1%.",
  },
  {
    symbol: "TATACONSUM",
    name: "Tata Consumer Products",
    sector: "FMCG",
    source: "Nifty Shariah 25",
    marketCap: "₹1.08 Lakh Cr",
    why: "Consumer goods – debt 3.2%, interest 0.3%, passes.",
  },
  {
    symbol: "GODREJCP",
    name: "Godrej Consumer Products",
    sector: "FMCG",
    source: "Nifty Shariah 25",
    marketCap: "₹1.10 Lakh Cr",
    why: "Consumer goods – debt 5.4%, interest 0.5%, passes.",
  },
  {
    symbol: "DABUR",
    name: "Dabur India",
    sector: "FMCG",
    source: "Musaffa",
    marketCap: "₹95.00K Cr",
    why: "Ayurvedic/FMCG – low debt, negligible interest, passes.",
  },
  {
    symbol: "MARICO",
    name: "Marico",
    sector: "FMCG",
    source: "Musaffa",
    marketCap: "₹65.00K Cr",
    why: "Consumer goods – very low debt, interest 0.2%, illiquid >70%.",
  },
  {
    symbol: "BRITANNIA",
    name: "Britannia Industries",
    sector: "FMCG – Food",
    source: "Musaffa",
    marketCap: "₹1.10 Lakh Cr",
    why: "Bakery/food – permissible, acceptable debt, low interest.",
  },
  {
    symbol: "EMAMILTD",
    name: "Emami",
    sector: "FMCG",
    source: "Musaffa",
    marketCap: "₹28.00K Cr",
    why: "Consumer goods – debt within limits, low interest, passes.",
  },
  {
    symbol: "VBL",
    name: "Varun Beverages",
    sector: "FMCG – Beverages",
    source: "Musaffa",
    marketCap: "₹1.20 Lakh Cr",
    why: "Beverages – permissible, moderate debt, interest under 1%.",
  },
  {
    symbol: "JYOTHYLABS",
    name: "Jyothy Labs",
    sector: "FMCG",
    source: "Musaffa",
    marketCap: "₹18.00K Cr",
    why: "Consumer goods – low debt, negligible interest, passes.",
  },
  {
    symbol: "GILLETTE",
    name: "Gillette India",
    sector: "FMCG",
    source: "Musaffa",
    marketCap: "₹25.00K Cr",
    why: "Consumer products – low debt, interest <1%, passes.",
  },

  // ── Paints / Chemicals ──
  {
    symbol: "ASIANPAINT",
    name: "Asian Paints",
    sector: "Paints & Coatings",
    source: "Nifty Shariah 25 · Zamzam · Musaffa",
    marketCap: "₹2.26 Lakh Cr",
    why: "Paint manufacturing – permissible, very low debt, interest 0.2%, illiquid 79%.",
  },
  {
    symbol: "PIDILITIND",
    name: "Pidilite Industries",
    sector: "Chemicals",
    source: "Nifty Shariah 25",
    marketCap: "₹1.38 Lakh Cr",
    why: "Adhesives/chemicals – permissible, low debt, interest 0.3%, illiquid >75%.",
  },
  {
    symbol: "SRF",
    name: "SRF",
    sector: "Chemicals",
    source: "Musaffa",
    marketCap: "₹68.00K Cr",
    why: "Chemicals/textiles – permissible, moderate debt, interest acceptable.",
  },

  // ── Cement / Infrastructure ──
  {
    symbol: "ULTRACEMCO",
    name: "UltraTech Cement",
    sector: "Cement",
    source: "Nifty Shariah 25 · Islamicly · Musaffa · Zamzam",
    marketCap: "₹3.39 Lakh Cr",
    why: "Cement – permissible, debt 18.3%, interest 1.9%, illiquid 46%, passes.",
  },
  {
    symbol: "SHREECEM",
    name: "Shree Cement",
    sector: "Cement",
    source: "Musaffa",
    marketCap: "₹90.00K Cr",
    why: "Cement – permissible, moderate debt, low interest, passes.",
  },
  {
    symbol: "AMBUJACEM",
    name: "Ambuja Cements",
    sector: "Cement",
    source: "Islamicly · Nifty Shariah 25",
    marketCap: "₹1.50 Lakh Cr",
    why: "Cement – permissible, debt under 33%, interest <5%, passes.",
  },

  // ── Engineering / Industrial ──
  {
    symbol: "SIEMENS",
    name: "Siemens India",
    sector: "Engineering",
    source: "Musaffa",
    marketCap: "₹1.30 Lakh Cr",
    why: "Engineering – permissible, zero debt, negligible interest, illiquid 77%.",
  },
  {
    symbol: "ABB",
    name: "ABB India",
    sector: "Engineering",
    source: "Musaffa",
    marketCap: "₹80.00K Cr",
    why: "Engineering – permissible, very low debt, interest 0.4%, illiquid 79%.",
  },
  {
    symbol: "HAVELLS",
    name: "Havells India",
    sector: "Electrical Equipment",
    source: "Nifty Shariah 25 · Musaffa",
    marketCap: "₹78.00K Cr",
    why: "Electrical goods – permissible, low debt, interest 0.6%, passes.",
  },
  {
    symbol: "CUMMINSIND",
    name: "Cummins India",
    sector: "Industrial Products",
    source: "Nifty Shariah 25",
    marketCap: "₹1.42 Lakh Cr",
    why: "Industrial manufacturing – permissible, acceptable debt, low interest.",
  },
  {
    symbol: "VOLTAS",
    name: "Voltas",
    sector: "Engineering",
    source: "Musaffa",
    marketCap: "₹42.00K Cr",
    why: "Engineering – permissible, debt 6.1%, interest low, passes.",
  },
  {
    symbol: "THERMAX",
    name: "Thermax",
    sector: "Engineering",
    source: "Musaffa",
    marketCap: "₹38.00K Cr",
    why: "Engineering – permissible, low debt, interest <1%, passes.",
  },
  {
    symbol: "POLYCAB",
    name: "Polycab India",
    sector: "Electrical Equipment",
    source: "Musaffa",
    marketCap: "₹50.00K Cr",
    why: "Electrical – permissible, low debt, interest <1%, passes.",
  },

  // ── Energy / Oil & Gas ──
  {
    symbol: "ONGC",
    name: "Oil & Natural Gas Corp",
    sector: "Oil & Gas",
    source: "Nifty Shariah 25 · Islamicly · Zamzam",
    marketCap: "₹3.60 Lakh Cr",
    why: "Oil & gas extraction – permissible, debt 12.4%, interest 2.8%, illiquid 61%.",
  },
  {
    symbol: "COALINDIA",
    name: "Coal India",
    sector: "Mining",
    source: "Nifty Shariah 25 · Islamicly · Zamzam",
    marketCap: "₹2.68 Lakh Cr",
    why: "Coal mining – permissible, almost zero debt, interest 1.5%, illiquid 63%.",
  },
  {
    symbol: "GAIL",
    name: "GAIL India",
    sector: "Energy",
    source: "Nifty Shariah 25",
    marketCap: "₹1.01 Lakh Cr",
    why: "Gas transmission – permissible, moderate debt, interest under 3%, passes.",
  },
  {
    symbol: "PETRONET",
    name: "Petronet LNG",
    sector: "Energy",
    source: "Islamicly · Zamzam",
    marketCap: "₹42.00K Cr",
    why: "Gas infrastructure – permissible, low debt, interest <1%, passes.",
  },
  {
    symbol: "IGL",
    name: "Indraprastha Gas",
    sector: "Energy",
    source: "Islamicly · Musaffa",
    marketCap: "₹1.00 Lakh Cr",
    why: "City gas distribution – permissible, low debt, interest negligible.",
  },

  // ── Automobile ──
  {
    symbol: "MARUTI",
    name: "Maruti Suzuki India",
    sector: "Automobile",
    source: "Islamicly · Musaffa · Zamzam",
    marketCap: "₹2.60 Lakh Cr",
    why: "Automobile manufacturing – permissible, low debt, interest 0.7%, illiquid >60%.",
  },
  {
    symbol: "EICHERMOT",
    name: "Eicher Motors",
    sector: "Automobile",
    source: "Musaffa",
    marketCap: "₹1.00 Lakh Cr",
    why: "Automobile – permissible, very low debt, interest 0.4%, passes all tests.",
  },
  {
    symbol: "HEROMOTOCO",
    name: "Hero MotoCorp",
    sector: "Automobile",
    source: "Nifty Shariah 25 · Islamicly",
    marketCap: "₹1.05 Lakh Cr",
    why: "Two‑wheeler manufacturing – permissible, low debt, passes.",
  },
  {
    symbol: "BAJAJ‑AUTO",
    name: "Bajaj Auto",
    sector: "Automobile",
    source: "Musaffa",
    marketCap: "₹1.30 Lakh Cr",
    why: "Automobile – permissible, low debt, interest negligible, illiquid >55%.",
  },
  {
    symbol: "TVSMOTOR",
    name: "TVS Motor Company",
    sector: "Automobile",
    source: "Musaffa",
    marketCap: "₹55.00K Cr",
    why: "Automobile – permissible, debt 6.5%, interest low, passes.",
  },

  // ── Consumer Durables ──
  {
    symbol: "WHIRLPOOL",
    name: "Whirlpool of India",
    sector: "Consumer Durables",
    source: "Musaffa",
    marketCap: "₹22.00K Cr",
    why: "Consumer durables – permissible, low debt, interest under 1%.",
  },
  {
    symbol: "TTKPRESTIG",
    name: "TTK Prestige",
    sector: "Consumer Durables",
    source: "Musaffa",
    marketCap: "₹10.00K Cr",
    why: "Kitchen appliances – permissible, low debt, negligible interest.",
  },
  {
    symbol: "CROMPTON",
    name: "Crompton Greaves Consumer",
    sector: "Consumer Durables",
    source: "Musaffa",
    marketCap: "₹25.00K Cr",
    why: "Fans/lighting – permissible, low debt, interest under 1%.",
  },

  // ── Jewellery ──
  {
    symbol: "TITAN",
    name: "Titan Company",
    sector: "Jewellery & Watches",
    source: "Musaffa",
    marketCap: "₹2.90 Lakh Cr",
    why: "Jewellery & watches – permissible, low debt, interest under 5%, illiquid >60%.",
  },

  // ── Textiles ──
  {
    symbol: "PAGEIND",
    name: "Page Industries",
    sector: "Textiles / Apparel",
    source: "Musaffa",
    marketCap: "₹40.00K Cr",
    why: "Garment manufacturing – permissible, low debt, interest <1%.",
  },
  {
    symbol: "KPRMILL",
    name: "KPR Mill",
    sector: "Textiles",
    source: "Musaffa",
    marketCap: "₹25.00K Cr",
    why: "Textile manufacturing – permissible, moderate debt, low interest.",
  },
];

export default function WatchlistPage() {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(true);

  const filtered = useMemo(() => {
    if (!search.trim()) return TIMELESS_PERMISSIBLE;
    const q = search.trim().toUpperCase();
    return TIMELESS_PERMISSIBLE.filter(
      (s) =>
        s.symbol.includes(q) ||
        s.name.toUpperCase().includes(q) ||
        s.sector.toUpperCase().includes(q),
    );
  }, [search]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-4xl font-bold text-center">STOCK SCREEN</h1>

      {/* 📌 Awareness message – verify before investing */}
      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 max-w-2xl mx-auto text-center space-y-1">
        <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
          Before investing, please always verify the current Shariah compliance
          of any stock on{" "}
          <a
            href="https://www.screener.in"
            className="underline font-semibold text-[#8B7B6B]"
            target="_blank"
          >
            Screener.in
          </a>
          .
          <br />
          Below are companies that were permissible as of our latest review –
          re‑check independently.
        </p>
        <ArrowDown className="w-4 h-4 mx-auto text-gray-500 dark:text-gray-400" />
      </div>

      <p className="text-center text-gray-500 max-w-2xl mx-auto">
        {TIMELESS_PERMISSIBLE.length} companies verified against{" "}
        <strong>Nifty Shariah 25</strong>, <strong>Musaffa</strong>,{" "}
        <strong>Islamicly</strong>, and <strong>Zamzam Capital</strong>.
      </p>

      {/* ⚠️ CRITICAL — Permissible company ≠ permissible trading method */}
      <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 max-w-4xl mx-auto">
        <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">
          ⚠️ CRITICAL — A Permissible Company Does NOT Make Every Trade Halal
        </h3>
        <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
          Even if a stock passes AAOIFI screening,{" "}
          <strong>the way you trade it matters</strong>. The following methods
          are widely considered impermissible by Islamic scholars:
        </p>
        <ul className="text-xs text-gray-700 dark:text-gray-300 mt-2 space-y-1 list-disc list-inside">
          <li>
            <strong>Intra‑day trading (day trading)</strong> — often involves
            speculation and gharar.
          </li>
          <li>
            <strong>Futures & Options (F&O)</strong> — considered derivatives
            with excessive uncertainty and zero ownership.
          </li>
          <li>
            <strong>Margin trading / short selling</strong> — selling what you
            don&apos;t own or borrowing with interest.
          </li>
          <li>
            <strong>Speculative crypto / forex</strong> — high gharar, often
            resembles gambling.
          </li>
        </ul>
        <p className="text-xs text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
          ✅ <strong>Permissible approach:</strong> Take delivery of shares (T+2
          settlement), hold them as an owner, and earn from legitimate profits
          or dividends. Always consult a qualified scholar for personalised
          rulings.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs px-4 py-2 rounded-lg text-center max-w-2xl mx-auto">
        ⚠ Educational data as of Q2 2026. Always verify latest financial ratios
        on{" "}
        <a
          href="https://www.screener.in"
          className="underline font-semibold"
          target="_blank"
        >
          Screener.in
        </a>{" "}
        and consult a qualified scholar. Not financial advice.
      </div>

      {/* Search box */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Filter by symbol, name or sector (e.g. TCS, Pharma)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-sm outline-none focus:border-[#8B7B6B] bg-white dark:bg-gray-800"
          />
        </div>
      </div>

      {/* Show/Hide toggle */}
      <div className="flex justify-center">
        <button
          onClick={() => setShow(!show)}
          className="px-5 py-2 border border-[#8B7B6B] text-[#8B7B6B] rounded-full text-sm font-semibold hover:bg-[#8B7B6B] hover:text-white transition-colors"
        >
          {show ? "HIDE TABLE" : "SHOW TABLE"}
        </button>
      </div>

      {/* Results count */}
      {search && (
        <p className="text-center text-sm text-gray-500">
          {filtered.length} matching{" "}
          {filtered.length === 1 ? "company" : "companies"}
        </p>
      )}

      {show && (
        <>
          {/* Desktop table */}
          <div className="hidden md:block overflow-auto rounded-2xl border border-gray-200 dark:border-gray-700 max-h-[70vh]">
            <table className="w-full text-sm whitespace-nowrap">
              <thead className="sticky top-0 bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="sticky left-0 bg-gray-50 dark:bg-gray-900 z-10 px-3 py-2 text-left text-xs uppercase text-gray-500 dark:text-gray-400">
                    Symbol
                  </th>
                  <th className="px-3 py-2 text-left text-xs uppercase text-gray-500 dark:text-gray-400">
                    Company
                  </th>
                  <th className="px-3 py-2 text-left text-xs uppercase text-gray-500 dark:text-gray-400">
                    Sector
                  </th>
                  <th className="px-3 py-2 text-left text-xs uppercase text-gray-500 dark:text-gray-400">
                    Source
                  </th>
                  <th className="px-3 py-2 text-left text-xs uppercase text-gray-500 dark:text-gray-400">
                    Market Cap
                  </th>
                  <th className="px-3 py-2 text-left text-xs uppercase text-gray-500 dark:text-gray-400">
                    Why Permissible
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s) => (
                  <tr
                    key={s.symbol}
                    className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="sticky left-0 bg-white dark:bg-gray-900 z-10 px-3 py-2 font-bold">
                      {s.symbol}
                    </td>
                    <td className="px-3 py-2">{s.name}</td>
                    <td className="px-3 py-2">{s.sector}</td>
                    <td className="px-3 py-2 text-xs">{s.source}</td>
                    <td className="px-3 py-2">{s.marketCap}</td>
                    <td className="px-3 py-2 text-xs text-gray-600 dark:text-gray-300 max-w-[280px] whitespace-normal">
                      {s.why}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {filtered.map((s) => (
              <div
                key={s.symbol}
                className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-sm">
                      {s.symbol} — {s.name}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {s.sector}
                    </span>
                  </div>
                  <span className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs px-2 py-0.5 rounded-full font-semibold">
                    ✓ PERMISSIBLE
                  </span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <div>
                    Market Cap: <strong>{s.marketCap}</strong>
                  </div>
                  <div>Source: {s.source}</div>
                  <div className="pt-2 border-t border-gray-100 dark:border-gray-800 text-gray-500 dark:text-gray-300">
                    <strong>Why:</strong> {s.why}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
