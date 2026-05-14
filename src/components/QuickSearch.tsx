"use client";

import { stocks } from "@/data/stocks";

export default function QuickSearch() {
  const stockList = Object.values(stocks);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {stockList.slice(0, 12).map((s) => (
        <div
          key={s.symbol}
          className="bg-white rounded-xl border p-3 text-center hover:shadow transition-shadow cursor-pointer"
        >
          <div className="text-xs font-bold">{s.symbol}</div>
          <div
            className={`text-xs px-2 py-1 rounded-full mt-1 font-semibold ${
              s.status === "Permissible"
                ? "bg-green-50 text-green-700"
                : s.status === "Not Permissible"
                  ? "bg-red-50 text-red-700"
                  : "bg-orange-50 text-orange-700"
            }`}
          >
            {s.status}
          </div>
        </div>
      ))}
    </div>
  );
}
