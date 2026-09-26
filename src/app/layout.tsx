import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { COMPANY_INFO } from "@/constants/company";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${COMPANY_INFO.name} | ${COMPANY_INFO.tagline} Terpercaya Sidoarjo (Est. ${COMPANY_INFO.established})`,
  description: `${COMPANY_INFO.name} didirikan sejak tahun ${COMPANY_INFO.established} di Sidoarjo, Jawa Timur. Spesialis konveksi, seragam kerja, polo, dan trading berkualitas dengan jangkauan pengiriman ${COMPANY_INFO.shipping}.`,
  keywords: [
    "CV QEE BEE",
    "konveksi sidoarjo",
    "supplier trading sidoarjo",
    "seragam kantor",
    "polo shirt custom",
    "konveksi jawa timur",
  ],
  authors: [{ name: COMPANY_INFO.name }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-[#111111]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
