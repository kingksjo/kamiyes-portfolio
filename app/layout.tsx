import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";

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
  title: "Oluwakamiye Sharaye — Data Scientist",
  description:
    "Editorial portfolio for Oluwakamiye Sharaye, Data Scientist.",
  openGraph: {
    title: "Oluwakamiye Sharaye — Data Scientist",
    description:
      "Editorial portfolio for Oluwakamiye Sharaye, Data Scientist.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oluwakamiye Sharaye — Data Scientist",
    description:
      "Editorial portfolio for Oluwakamiye Sharaye, Data Scientist.",
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
