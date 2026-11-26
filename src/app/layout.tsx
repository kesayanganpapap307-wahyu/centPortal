import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CentPortal | PT Cent Solusi Teknologi - Ekosistem POS & Retail Enterprise",
  description: "Solusi terdepan transformasi digital retail dan bisnis terpadu di Indonesia. Menghadirkan aplikasi kasir pintar CentPOS, manajemen inventori gudang, dan analitik bisnis real-time.",
  keywords: [
    "CentPortal",
    "CentPOS",
    "Aplikasi Kasir",
    "Point of Sale Indonesia",
    "Software POS Offline",
    "Sistem Gudang",
    "Warehouse Management",
    "Sistem Retail Terpadu"
  ],
  authors: [{ name: "PT Cent Solusi Teknologi" }],
  openGraph: {
    title: "CentPortal | PT Cent Solusi Teknologi",
    description: "Ekosistem Digital Terpadu: CentPOS, Manajemen Stok Multi-Gudang & Analitik Real-Time.",
    type: "website",
    locale: "id_ID"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${inter.variable}`}>
      <body className="bg-slate-950 text-slate-100 font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
