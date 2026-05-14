export default function VerifyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-4xl font-bold text-center">HOW TO VERIFY A STOCK</h1>
      <p className="text-center text-gray-500">
        Use free tools to check any company before investing.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border p-6">
          <h2 className="text-xl font-bold mb-2">🔍 Screener.in</h2>
          <p className="text-sm text-gray-600">
            Search any stock → “Profit & Loss” → check “Other Income” for
            interest income. Then go to “Balance Sheet” → calculate Debt / Total
            Assets.
          </p>
        </div>
        <div className="bg-white rounded-2xl border p-6">
          <h2 className="text-xl font-bold mb-2">📋 Moneycontrol</h2>
          <p className="text-sm text-gray-600">
            Financials → look for “Finance Costs” (interest paid) and “Interest
            Earned”.
          </p>
        </div>
      </div>

      <div className="bg-amber-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-2">🕌 Always Consult a Scholar</h2>
        <p className="text-sm text-gray-600">
          Our screening is educational. Religious rulings can vary – please seek
          personalized guidance from a qualified Islamic scholar.
        </p>
      </div>
    </div>
  );
}
