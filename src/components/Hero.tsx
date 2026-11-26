"use client";

import React from "react";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  CheckCircle2, 
  Laptop, 
  Layers, 
  Store
} from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="beranda" 
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-slate-950 flex items-center"
    >
      {/* Background Glows & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))]"></div>
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-medium text-cyan-400 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Ekosistem Teknologi Retail & Enterprise Terpadu</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Akselerasi Bisnis Anda dengan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                Sistem Terintegrasi
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong>CentPortal</strong> membantu pelaku usaha dan korporasi mengoptimalkan operasional secara menyeluruh. Dari aplikasi kasir pintar <strong>CentPOS</strong>, integrasi inventori multi-gudang, hingga analitik bisnis berbasis cloud real-time.
            </p>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Offline-Tolerant System
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Cloud Multi-Branch Sync
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Support Hardware Kasir & Thermal
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#solusi"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Jelajahi Solusi Kami</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#kontak"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Jadwalkan Demo & Diskusi</span>
              </a>
            </div>

            {/* Metric counters */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">99.9%</p>
                <p className="text-xs text-slate-400">Tingkat Keandalan (Uptime)</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400">&gt; 500+</p>
                <p className="text-xs text-slate-400">Terminal Aktif Terkoneksi</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">10x</p>
                <p className="text-xs text-slate-400">Lebih Cepat Rekonsiliasi</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Ecosystem Dashboard Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900/90 p-5 sm:p-6 border border-slate-700/80 shadow-2xl shadow-cyan-950/50">
                
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400">centportal.cloud/dashboard</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    LIVE SYNC
                  </span>
                </div>

                {/* Simulated dashboard view */}
                <div className="pt-4 space-y-4">
                  {/* Top card metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                      <p className="text-[11px] text-slate-400">Total Transaksi Hari Ini</p>
                      <p className="text-lg font-bold text-white mt-1">Rp 48.720.000</p>
                      <p className="text-[10px] text-emerald-400 mt-0.5 flex items-center gap-1">
                        <span>↑ 18.4%</span> dari kemarin
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                      <p className="text-[11px] text-slate-400">Status Kasir Aktif</p>
                      <p className="text-lg font-bold text-cyan-400 mt-1">12 Cabang</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">Semua Online & Sync</p>
                    </div>
                  </div>

                  {/* Highlight Module: CentPOS & Warehouse integration */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-blue-800/40 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white flex items-center gap-2">
                        <Store className="w-4 h-4 text-cyan-400" />
                        CentPOS Cloud Integration
                      </span>
                      <span className="text-[10px] text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/60">
                        Siap Vercel
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Mendukung pemindaian barcode cepat, perhitungan PPN 11%, diskon berjenjang, dan cetak printer thermal 58/80mm.
                    </p>
                  </div>

                  {/* Inventory sync preview */}
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium flex items-center gap-2">
                        <Layers className="w-4 h-4 text-indigo-400" />
                        Otomasi Sinkronisasi Stok
                      </span>
                      <span className="text-emerald-400 font-mono text-[11px]">Real-time</span>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-2 rounded-full w-[88%]"></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Warehouse Central</span>
                      <span>88% Kapasitas Terpantau</span>
                    </div>
                  </div>

                  {/* Security Badge */}
                  <div className="flex items-center gap-2.5 pt-1 text-[11px] text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Enkripsi TLS 1.3 & Database PostgreSQL dengan Row-Level Security</span>
                  </div>

                </div>

              </div>

              {/* Floating accent badge */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-700/80 rounded-xl p-3 shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Respon Sub-Detik</p>
                  <p className="text-[10px] text-slate-400">Cepat & Ringan di Semua Perangkat</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
