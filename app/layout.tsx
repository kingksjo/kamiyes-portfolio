import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";

import { PORTFOLIO_DATA } from "@/lib/data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
