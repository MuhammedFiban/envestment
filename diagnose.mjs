import { ScreenerScraperPro } from "screener-scraper-pro";

async function check(sym) {
  console.log(`\n=== ${sym} ===`);
  try {
    const d = await ScreenerScraperPro(`https://www.screener.in/company/${sym}/`);

    // Analysis cons (first 10 lines)
    if (d.analysis?.cons) {
      console.log("analysis.cons (first 10):");
      d.analysis.cons.slice(0, 10).forEach((l, i) => console.log(`  ${i}: ${l}`));
    }

    // Balance sheet keys
    const bs = d.balanceSheet;
    if (bs?.data) {
      console.log("BS keys:", Object.keys(bs.data).join(", "));
    }

    // Latest year
    console.log("Latest year:", bs?.headers?.slice(-1)[0]);

    // Sample values
    const yr = bs?.headers?.slice(-1)[0];
    if (bs?.data?.Borrowings) console.log("Borrowings:", bs.data.Borrowings[yr]);
    if (bs?.data?.["Total Assets"]) console.log("Total Assets:", bs.data["Total Assets"][yr]);
    if (bs?.data?.["Fixed Assets"]) console.log("Fixed Assets:", bs.data["Fixed Assets"][yr]);

    // quarters Sales
    const salesKeys = Object.keys(d.quarters?.data?.Sales || {});
    console.log("Latest sales:", salesKeys.slice(-2).map(k => d.quarters.data.Sales[k]));
  } catch (e) {
    console.log("Error:", e.message);
  }
}

await check("TCS");
await check("ADANIPORTS");
await check("ITC");