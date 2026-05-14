import { ScreenerScraperPro } from "screener-scraper-pro";

(async () => {
  try {
    const data = await ScreenerScraperPro("https://www.screener.in/company/TCS/");
    const bs = data.balanceSheet;
    if (!bs || !bs.data) {
      console.log("No balance sheet data");
      return;
    }
    console.log("All BS line items:");
    Object.keys(bs.data).forEach((key) => {
      console.log(`  "${key}"`);
    });

    // Also print market cap from various places
    console.log("\nMarket Cap sources:");
    console.log("ratios:", data.ratios?.["Market Cap"] || data.ratios?.["market_cap"] || "missing in ratios");
    console.log("basic:", data.basic?.marketCap || "missing in basic");
    console.log("analysis first line:", data.analysis?.pros?.[0] || "missing");
  } catch (err) {
    console.error("❌", err.message);
  }
})();