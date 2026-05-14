"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Calculator, Table, BookOpen, ScrollText } from "lucide-react";

const sections = [
  {
    icon: <Search className="w-6 h-6 text-[#8B7B6B]" />,
    title: "RESEARCH DESK",
    desc: "Tools, platforms & instant halal lookups.",
    href: "/screener",
  },
  {
    icon: <Calculator className="w-6 h-6 text-[#8B7B6B]" />,
    title: "PLANNERS",
    desc: "Zakat, purification & growth projections.",
    href: "/calculators",
  },
  {
    icon: <Table className="w-6 h-6 text-[#8B7B6B]" />,
    title: "STOCK SCREEN",
    desc: "50+ AAOIFI‑verified equities, fully reasoned.",
    href: "/watchlist",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#8B7B6B]" />,
    title: "LEARN",
    desc: "20 modules on Islamic finance essentials.",
    href: "/learn",
  },
  {
    icon: <ScrollText className="w-6 h-6 text-[#8B7B6B]" />,
    title: "AAOIFI STANDARD",
    desc: "The AAOIFI 4‑step compliance method.",
    href: "/aaofi",
  },
];

const rotatingCards = [
  {
    title: "WHY ENVESTMENT?",
    body: "A free educational platform helping people invest with Values and confidence — screening stocks, purifying earnings, and learning Islamic finance principles.",
  },
  {
    title: "QURANIC GUIDANCE",
    body: "“Those who consume interest cannot stand [on the Day of Resurrection] except as one stands who is being beaten by Satan into insanity. That is because they say, ‘Trade is [just] like interest.’ But Allah has permitted trade and has forbidden interest.”",
    source: "— Surah Al‑Baqarah 2:275",
  },
];

export default function Home() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % rotatingCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const card = rotatingCards[activeCard];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 md:py-12 space-y-10">
      {/* Hero block */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          INVEST WITH INTEGRITY.
          <span className="text-[#8B7B6B]">GROW WITH PURPOSE</span>
        </h1>
        <p className="text-[11px] text-gray-400 dark:text-gray-500 tracking-wide">
          ZERO COMPROMISE. YOUR WEALTH. YOUR VALUES. ZERO COMPROMISE.
        </p>
      </div>

      {/* Navigation cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((s) => (
          <Link key={s.title} href={s.href}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-4 hover:border-[#8B7B6B]/50 hover:shadow-md transition-all cursor-pointer h-full flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                {s.icon}
                <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                  {s.title}
                </h3>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                {s.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Auto‑rotating mission card */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 text-center transition-opacity duration-500">
          <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">
            {card.title}
          </h3>
          <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            {card.body}
          </p>
          {card.source && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {card.source}
            </p>
          )}
        </div>
        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-3">
          {rotatingCards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveCard(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === activeCard
                  ? "bg-[#8B7B6B]"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Card ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
