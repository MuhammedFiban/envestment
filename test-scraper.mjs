import { ScreenerScraperPro } from "screener-scraper-pro";

(async () => {
  try {
    const data = await ScreenerScraperPro("https://www.screener.in/company/TCS/");
    console.log("✅ Scrape successful.");
    // Show the top-level keys
    console.log("Top-level keys:", Object.keys(data));
    // Show a snippet of analysis
    console.log("Analysis keys:", data.analysis ? Object.keys(data.analysis).slice(0, 5) : "no analysis");
    // Show quarters sample
    if (data.quarters?.data?.Sales) {
      const salesKeys = Object.keys(data.quarters.data.Sales);
      console.log("Latest sales keys (last 2):", salesKeys.slice(-2));
      console.log("Sales values (last 2):", salesKeys.slice(-2).map(k => data.quarters.data.Sales[k]));
    }
    // Show balance sheet sample
    if (data.balanceSheet?.Annual?.length) {
      const latest = data.balanceSheet.Annual[data.balanceSheet.Annual.length - 1];
      console.log("Latest BS keys:", Object.keys(latest).slice(0, 8));
    }
  } catch (err) {
    console.error("❌ Scrape failed:", err.message);
  }
})();