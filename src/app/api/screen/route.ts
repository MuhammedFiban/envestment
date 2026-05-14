import { NextResponse } from "next/server";
import { ScreenerScraperPro } from "screener-scraper-pro";

const PROHIBITED_SECTORS = {
  BANKING: "Conventional banking / interest‑based",
  NBFC: "Non‑banking financial company",
  INSURANCE: "Conventional insurance",
  ALCOHOL: "Alcohol production or distribution",
  GAMBLING: "Gambling / casinos",
  TOBACCO: "Tobacco products",
  PORK: "Pork / non‑halal meat",
};

function parseVal(val: any): number {
  if (typeof val === "number") return val;
  if (typeof val === "string") return parseFloat(val.replace(/,/g, "")) || 0;
  return 0;
}

function extractOtherIncome(cons: string[]): number {
  if (!Array.isArray(cons)) return 0;
  for (const line of cons) {
    if (line.toLowerCase().includes("other income")) {
      const match = line.match(/([\d,]+)\s*Cr/);
      if (match) return parseFloat(match[1].replace(/,/g, "")) || 0;
    }
  }
  return 0;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get("symbol")?.toUpperCase();
  if (!symbol) return NextResponse.json({ error: "Symbol required" }, { status: 400 });

  try {
    const data: any = await ScreenerScraperPro(
      `https://www.screener.in/company/${symbol}/`
    );

    // ── 1. Company name ──────────────────────────
    const companyName = data.basic?.name || data.analysis?.companyName || symbol;

    // ── 2. Sector (from scraper only) ─────────────
    let sector = data.basic?.sector || "";

    // Fallback: search in analysis.cons for a line like "Sector : IT Services"
    if (!sector && Array.isArray(data.analysis?.cons)) {
      const sectorLine = data.analysis.cons.find((c: string) =>
        c.toLowerCase().includes("sector")
      );
      if (sectorLine) {
        sector = sectorLine.replace(/.*sector[:\s]*/i, "").trim();
      }
    }

    // If still empty, default to "Other"
    if (!sector) sector = "Other";

    // ── 3. Business activity check ───────────────
    const sectorUpper = sector.toUpperCase();
    let businessFail = false;
    let failReason = "";
    for (const [key, label] of Object.entries(PROHIBITED_SECTORS)) {
      if (sectorUpper.includes(key)) {
        businessFail = true;
        failReason = label;
        break;
      }
    }

    // ── 4. Interest income ───────────────────────
    const otherIncome = extractOtherIncome(data.analysis?.cons || []);

    // ── 5. Total revenue (latest quarter, in crores) ──
    let totalRevenue = 1;
    if (data.quarters?.data?.Sales) {
      const salesObj = data.quarters.data.Sales;
      const keys = Object.keys(salesObj);
      if (keys.length > 0) {
        const lastKey = keys[keys.length - 1];
        totalRevenue = parseVal(salesObj[lastKey]) || 1;
      }
    }
    const interestPct = totalRevenue > 0 ? (otherIncome / totalRevenue) * 100 : 0;

    // ── 6. Balance sheet (latest year) ───────────
    const bs = data.balanceSheet;
    if (!bs || !bs.headers || !bs.data) {
      return NextResponse.json(
        { error: `Balance sheet not available for ${symbol}` },
        { status: 404 }
      );
    }

    const headers: string[] = bs.headers;
    const bsData = bs.data;
    const latestYear = headers[headers.length - 1];

    function getBSValue(key: string): number {
      const item = bsData[key];
      if (!item) return 0;
      return parseVal(item[latestYear]) || 0;
    }

    const borrowings = getBSValue("Borrowings");
    const totalAssets = getBSValue("Total Assets");
    const fixedAssets = getBSValue("Fixed Assets");
    const cwip = getBSValue("CWIP");
    const investments = getBSValue("Investments");
    const illiquidAssets = fixedAssets + cwip + investments;

    const debtPct = totalAssets > 0 ? (borrowings / totalAssets) * 100 : 0;
    const illiquidPct = totalAssets > 0 ? (illiquidAssets / totalAssets) * 100 : 0;

    // ── 7. Fundamentals ──────────────────────────
    const pe = data.ratios?.["PE Ratio"] || data.ratios?.["pe_ratio"] || "N/A";
    const epsObj = data.quarters?.data?.EPS || {};
    const epsKeys = Object.keys(epsObj);
    const eps = epsKeys.length > 0 ? epsObj[epsKeys[epsKeys.length - 1]] : "N/A";
    const roe = data.ratios?.["ROE"] || data.ratios?.["roe"] || "N/A";
    const marketCap =
      data.ratios?.["Market Cap"] ||
      data.ratios?.["market_cap"] ||
      data.basic?.marketCap ||
      "N/A";

    // ── 8. AAOIFI verdict ────────────────────────
    let status: "PERMISSIBLE" | "NOT PERMISSIBLE" | "CAUTION" = "PERMISSIBLE";
    const reasons: string[] = [];

    if (businessFail) {
      status = "NOT PERMISSIBLE";
      reasons.push(`✗ Business activity prohibited: ${failReason}.`);
    } else {
      // Interest test
      if (interestPct > 5) {
        status = "NOT PERMISSIBLE";
        reasons.push(`✗ Interest income (${interestPct.toFixed(1)}%) exceeds AAOIFI 5% limit.`);
      } else {
        reasons.push(`✓ Interest income (${interestPct.toFixed(1)}%) within AAOIFI 5% limit.`);
      }

      // Debt test
      if (debtPct > 33) {
        status = "NOT PERMISSIBLE";
        reasons.push(`✗ Debt ratio (${debtPct.toFixed(1)}%) exceeds AAOIFI 33% limit.`);
      } else if (debtPct > 28) {
        if (status === "PERMISSIBLE") status = "CAUTION";
        reasons.push(`⚠ Debt ratio (${debtPct.toFixed(1)}%) approaching 33% – CAUTION.`);
      } else {
        reasons.push(`✓ Debt ratio (${debtPct.toFixed(1)}%) within AAOIFI 33% limit.`);
      }

      // Illiquid assets test
      if (illiquidPct < 33) {
        if (status === "PERMISSIBLE") status = "NOT PERMISSIBLE";
        reasons.push(`✗ Illiquid assets (${illiquidPct.toFixed(1)}%) below AAOIFI 33% minimum.`);
      } else {
        reasons.push(`✓ Illiquid assets (${illiquidPct.toFixed(1)}%) above AAOIFI 33% minimum.`);
      }
    }

    const compliantScore =
      status === "PERMISSIBLE"
        ? Math.round(100 - interestPct * 2 - (debtPct > 20 ? (debtPct - 20) : 0))
        : status === "CAUTION"
        ? Math.round(60 - interestPct - (debtPct > 25 ? (debtPct - 25) * 2 : 0))
        : Math.round(Math.max(0, 40 - interestPct - debtPct / 2));

    return NextResponse.json({
      symbol,
      name: companyName,
      sector,
      interest: parseFloat(interestPct.toFixed(1)),
      debt: parseFloat(debtPct.toFixed(1)),
      liquid: parseFloat(illiquidPct.toFixed(1)),
      status,
      compliant: Math.max(0, Math.min(100, compliantScore)),
      fundamentals: {
        pe: pe !== "N/A" ? pe : undefined,
        eps: eps !== "N/A" ? `₹${eps}` : undefined,
        roe: roe !== "N/A" ? `${roe}%` : undefined,
        marketCap: marketCap !== "N/A" ? marketCap : undefined,
      },
      explanation: reasons.join(" "),
      source: "Screener.in (live data)",
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: `Could not fetch data for ${symbol}. ${err.message || ""}` },
      { status: 404 }
    );
  }
}