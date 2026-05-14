import { ScreenerScraperPro } from "screener-scraper-pro";

(async () => {
  try {
    const data = await ScreenerScraperPro("https://www.screener.in/company/TCS/");
    console.log("balanceSheet type:", typeof data.balanceSheet);
    console.log("balanceSheet keys:", Object.keys(data.balanceSheet || {}));
    
    const bs = data.balanceSheet;
    // Print the first few entries to understand the structure
    if (Array.isArray(bs)) {
      console.log("balanceSheet is an array of length:", bs.length);
      if (bs.length > 0) {
        console.log("First item keys:", Object.keys(bs[0]).slice(0, 10));
        console.log("Last item keys:", Object.keys(bs[bs.length-1]).slice(0, 10));
        console.log("Last item sample:", JSON.stringify(bs[bs.length-1]).slice(0, 500));
      }
    } else if (bs.Annual) {
      console.log("Annual array length:", bs.Annual.length);
      console.log("Last annual keys:", Object.keys(bs.Annual[bs.Annual.length-1]).slice(0, 10));
    } else {
      console.log("balanceSheet content:", JSON.stringify(bs).slice(0, 500));
    }
  } catch (err) {
    console.error("❌ Failed:", err.message);
  }
})();