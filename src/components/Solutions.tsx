"use client";

import React, { useState } from "react";
import { 
  Store, 
  Boxes, 
  BarChart, 
  Cpu, 
  Check, 
  Printer, 
  QrCode, 
  ScanBarcode, 
  Database, 
  ArrowUpRight,
  TrendingUp,
  Server,
  Play,
  ExternalLink
} from "lucide-react";

export default function Solutions() {
  const [activeTab, setActiveTab] = useState<"pos" | "warehouse" | "analytics" | "custom">("pos");

  const solutions = {
    pos: {
      title: "CentPOS - Cloud Point of Sale",
      tagline: "Kasir Modern, Offline-Tolerant & Cepat untuk Segala Bisnis",
      description: "Aplikasi kasir berbasis cloud yang didesain untuk transaksi cepat tanpa hambatan. Tetap berfungsi lancar mencatat transaksi walau koneksi internet tiba-tiba terputus.",
      features: [
        "Pencarian instan produk & dukungan USB/Bluetooth Barcode Scanner",
        "Perhitungan PPN otomatis (11%), diskon fleksibel %, dan nominal khusus",
        "Multi-Payment: Tunai (kalkulasi kembalian otomatis), QRIS Statis/Dinamis, & EDC/Transfer",
        "Cetak struk thermal presisi (58mm & 80mm) langsung dari dialog browser",
        "Notifikasi stok menipis (Low Stock Alert) langsung di kasir",
        "Data persistence tersimpan lokal & sinkron otomatis ke Supabase PostgreSQL"
      ],
      badge: "Flagship Product",
      accent: "cyan",
      tryUrl: "https://centpos-git-main-wahyu-13e6.vercel.app/",
      tryLabel: "Try CentPOS"
    },
    warehouse: {
      title: "CentWarehouse - Smart Inventory & Supply Chain",
      tagline: "Kontrol Stok Multi-Gudang & Mutasi Barang Akurat",
      description: "Solusi terpadu untuk melacak pergerakan stok dari supplier, penyimpanan multi-lokasi gudang, hingga transfer antar outlet toko secara sistematis dan real-time.",
      features: [
        "Multi-Warehouse Management: Kelola gudang pusat dan gudang cabang dalam 1 dashboard",
        "Mutasi stok & transfer antar cabang dengan approval berjenjang",
        "Tracking Serial Number, Lot Number & Tanggal Kadaluarsa (FIFO / FEFO)",
        "Otomatisasi Purchase Order (PO) saat stok menyentuh titik minimum (Reorder Point)",
        "Audit Stock Opname cepat menggunakan pemindai barcode mobile",
        "Pencatatan selisih stok (stock loss / damage) dengan laporan rinci"
      ],
      badge: "Supply Chain",
      accent: "indigo",
      tryUrl: "https://centpos-git-main-wahyu-13e6.vercel.app/",
      tryLabel: "Try Demo"
    },
    analytics: {
      title: "CentAnalytics - Real-time Business Intelligence",
      tagline: "Keputusan Bisnis Terukur Berbasis Data Aktual",
      description: "Visualisasikan performa penjualan, margin laba bersih, tren produk terlaris, dan performa karyawan kasir dalam grafik interaktif yang mudah dipahami.",
      features: [
        "Dashboard omset real-time per jam, harian, mingguan, dan bulanan",
        "Analisis Produk Pareto (80/20) untuk mengidentifikasi best-seller paling menguntungkan",
        "Metrik performa kasir: jumlah transaksi, rata-rata keranjang (basket size), dan waktu layanan",
        "Perhitungan estimasi Margin Kotor & Laba Bersih setelah HPP",
        "Ekspor laporan komprehensif ke format Excel (.xlsx), CSV, dan PDF siap cetak",
        "Notifikasi ringkasan penjualan harian langsung ke email atau WhatsApp pemilik"
      ],
      badge: "Data Intelligence",
      accent: "emerald",
      tryUrl: "https://centpos-git-main-wahyu-13e6.vercel.app/",
      tryLabel: "Try Analytics"
    },
    custom: {
      title: "Enterprise Integration & Custom API",
      tagline: "Kustomisasi Sistem Khusus Sesuai SOP Perusahaan Anda",
      description: "Butuh integrasi dengan ERP SAP/Oracle, software akuntansi Jurnal/Accurate, payment gateway perbankan, atau mesin vending kustom? Tim insinyur kami siap membangunnya.",
      features: [
        "RESTful & GraphQL API terbuka untuk interkoneksi sistem pihak ketiga",
        "Integrasi Payment Gateway resmi (Midtrans, Xendit, QRIS MPM)",
        "Sinkronisasi otomatis dengan Marketplace (Shopee, Tokopedia, TikTok Shop)",
        "Dedicated Private Cloud / On-Premise Deployment untuk compliance ketat",
        "Service Level Agreement (SLA) 99.9% dan dukungan teknisi dedicated",
        "Pelatihan staf komprehensif dan panduan dokumentasi SOP lengkap"
      ],
      badge: "Enterprise Tailored",
      accent: "blue",
      tryUrl: "#kontak",
      tryLabel: "Try Sandbox"
    }
  };

  const current = solutions[activeTab];

  return (
    <section id="solusi" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Solusi Unggulan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Produk & Layanan untuk Skalabilitas Bisnis
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Pilih solusi modular yang sesuai dengan tahapan pertumbuhan usaha Anda saat ini.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("pos")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
              activeTab === "pos"
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 scale-105"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Store className="w-4 h-4" />
            <span>CentPOS (Kasir Pintar)</span>
          </button>

          <button
            onClick={() => setActiveTab("warehouse")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
              activeTab === "warehouse"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Boxes className="w-4 h-4" />
            <span>CentWarehouse (Inventori)</span>
          </button>

          <button
            onClick={() => setActiveTab("analytics")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
              activeTab === "analytics"
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <BarChart className="w-4 h-4" />
            <span>CentAnalytics (Laporan BI)</span>
          </button>

          <button
            onClick={() => setActiveTab("custom")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
              activeTab === "custom"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Enterprise & Custom API</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Solution Detail */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-slate-800 text-cyan-400 border border-slate-700">
                {current.badge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {current.title}
              </h3>
              <p className="text-cyan-400 font-medium text-sm sm:text-base">
                {current.tagline}
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Kemampuan Utama:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-300">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={current.tryUrl}
                  target={current.tryUrl.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-500/40 ring-2 ring-emerald-400/50 transition-all duration-200 hover:scale-105 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current text-white" />
                  <span>Try ({activeTab === "pos" ? "CentPOS" : "Demo"})</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#kontak"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Minta Demo & Penawaran</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Visual Interactive Feature Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <Server className="w-4 h-4 text-cyan-400" />
                    Spesifikasi & Kompatibilitas
                  </span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    Production Ready
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-slate-850">
                    <span className="text-slate-400">Arsitektur</span>
                    <span className="text-slate-200 font-mono">Next.js App Router + Supabase</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-850">
                    <span className="text-slate-400">Deployment</span>
                    <span className="text-slate-200 font-mono">Vercel Edge / Dedicated VPS</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-850">
                    <span className="text-slate-400">Dukungan Printer</span>
                    <span className="text-slate-200">Thermal 58mm & 80mm ESC/POS</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-850">
                    <span className="text-slate-400">Dukungan Scanner</span>
                    <span className="text-slate-200">1D / 2D Barcode (USB & Bluetooth)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-850">
                    <span className="text-slate-400">Penyimpanan Offline</span>
                    <span className="text-slate-200">IndexedDB & Browser Storage</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-400">Database Engine</span>
                    <span className="text-slate-200 font-mono">PostgreSQL with Row Level Security</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/50 flex items-center gap-3">
                  <ScanBarcode className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <p className="text-[11px] text-cyan-200">
                    Sistem dapat langsung diakses melalui browser tanpa instalasi software rumit.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
