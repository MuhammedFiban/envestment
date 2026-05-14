import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Search, Calculator, Table, BookOpen } from "lucide-react";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title:
    "Envestment — Shariah-Compliant Wealth Education | Halal Investing India",
  description:
    "Free educational platform for Shariah-compliant investing. Screen 100+ stocks against AAOIFI standards, calculate Zakat & purification. Knowledge first, profits second.",
  keywords: [
    "halal investing",
    "Shariah compliant stocks",
    "Islamic finance India",
    "AAOIFI screening",
    "Zakat calculator",
    "purification calculator",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Envestment — Invest with Integrity. Grow with Purpose.",
    description:
      "Your Wealth. Your Values. Zero Compromise. Shariah-compliant investing education.",
    url: "https://www.envestment.in",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline script: applies dark class BEFORE React loads → no flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-200 flex flex-col min-h-screen transition-colors">
        <ThemeProvider>
          <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 h-14 flex items-center">
            <div className="w-full max-w-6xl mx-auto px-5 flex justify-between items-center">
              {/* Logo + caption */}
              <Link href="/" className="flex items-center gap-2 shrink-0">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="14" cy="14" r="14" fill="#1D1D1F" />
                  <polygon points="14,6 24,22 4,22" fill="#FFFFFF" />
                </svg>
                <div className="flex flex-col leading-tight">
                  <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                    ENVESTMENT
                  </span>
                  <span className="text-[10px] font-light italic text-gray-500 dark:text-gray-400 tracking-wide">
                    Halal Money Grows Too
                  </span>
                </div>
              </Link>

              {/* Desktop navigation */}
              <nav className="hidden md:flex gap-6 text-xs font-normal tracking-[-0.01em] text-gray-600 dark:text-gray-300">
                <Link
                  href="/"
                  className="nav-link hover:text-black dark:hover:text-white transition-colors"
                >
                  HOME
                </Link>
                <Link
                  href="/screener"
                  className="nav-link hover:text-black dark:hover:text-white transition-colors"
                >
                  RESEARCH DESK
                </Link>
                <Link
                  href="/calculators"
                  className="nav-link hover:text-black dark:hover:text-white transition-colors"
                >
                  PLANNERS
                </Link>
                <Link
                  href="/watchlist"
                  className="nav-link hover:text-black dark:hover:text-white transition-colors"
                >
                  STOCK SCREEN
                </Link>
                <Link
                  href="/learn"
                  className="nav-link hover:text-black dark:hover:text-white transition-colors"
                >
                  LEARN
                </Link>
                <Link
                  href="/aaofi"
                  className="nav-link hover:text-black dark:hover:text-white transition-colors"
                >
                  AAOIFI STANDARD
                </Link>
              </nav>

              {/* Right side: Mobile home icon + Theme Toggle */}
              <div className="flex items-center gap-1">
                <Link
                  href="/"
                  className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                  aria-label="Home"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 12l9-9 9 9" />
                    <path d="M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
                  </svg>
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </header>

          <main className="flex-1 pt-16 pb-20 md:pb-0">{children}</main>

          <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-200 py-3 text-xs text-center mt-auto uppercase tracking-widest">
            © ENVESTMENT · SHARIAH‑ALIGNED · EDUCATIONAL ONLY
          </footer>

          {/* Mobile bottom nav – without home icon */}
          <nav className="bottom-nav md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 px-2 py-2 flex justify-around items-center text-xs shadow-[0_-4px_12px_rgba(0,0,0,0.04)]">
            <Link
              href="/screener"
              className="flex flex-col items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1.5 text-gray-500 dark:text-gray-300"
            >
              <Search className="w-5 h-5" />
              <span className="text-[10px] leading-tight mt-0.5">RESEARCH</span>
            </Link>
            <Link
              href="/calculators"
              className="flex flex-col items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1.5 text-gray-500 dark:text-gray-300"
            >
              <Calculator className="w-5 h-5" />
              <span className="text-[10px] leading-tight mt-0.5">PLANNERS</span>
            </Link>
            <Link
              href="/watchlist"
              className="flex flex-col items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1.5 text-gray-500 dark:text-gray-300"
            >
              <Table className="w-5 h-5" />
              <span className="text-[10px] leading-tight mt-0.5">SCREEN</span>
            </Link>
            <Link
              href="/learn"
              className="flex flex-col items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1.5 text-gray-500 dark:text-gray-300"
            >
              <BookOpen className="w-5 h-5" />
              <span className="text-[10px] leading-tight mt-0.5">LEARN</span>
            </Link>
            <Link
              href="/aaofi"
              className="flex flex-col items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1.5 text-gray-500 dark:text-gray-300"
            >
              <BookOpen className="w-5 h-5" />
              <span className="text-[10px] leading-tight mt-0.5">AAOIFI</span>
            </Link>
          </nav>
        </ThemeProvider>
      </body>
    </html>
  );
}
