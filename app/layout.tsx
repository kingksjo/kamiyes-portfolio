import type { Metadata } from "next";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";

import { PORTFOLIO_DATA } from "@/lib/data";

const cormorant = localFont({
  src: [
    {
      path: "./fonts/cormorant-garamond-latin.woff2",
      weight: "300 700",
      style: "normal",
    },
    {
      path: "./fonts/cormorant-garamond-latin-italic.woff2",
      weight: "300 700",
      style: "italic",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const inter = localFont({
  src: [
    {
      path: "./fonts/inter-latin.woff2",
      weight: "300 600",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PORTFOLIO_DATA.name} — ${PORTFOLIO_DATA.title}`,
  description: `Editorial portfolio for ${PORTFOLIO_DATA.name}, ${PORTFOLIO_DATA.title}.`,
  openGraph: {
    title: `${PORTFOLIO_DATA.name} — ${PORTFOLIO_DATA.title}`,
    description: `Editorial portfolio for ${PORTFOLIO_DATA.name}, ${PORTFOLIO_DATA.title}.`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PORTFOLIO_DATA.name} — ${PORTFOLIO_DATA.title}`,
    description: `Editorial portfolio for ${PORTFOLIO_DATA.name}, ${PORTFOLIO_DATA.title}.`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body
        className="bg-[#FDFBF7] text-[#2C2724] font-sans antialiased selection:bg-[#9A4D3E]/20 selection:text-[#2C2724]"
        suppressHydrationWarning
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
