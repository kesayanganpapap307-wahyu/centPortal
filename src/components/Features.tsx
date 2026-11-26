"use client";

import React from "react";
import { 
  Zap, 
  WifiOff, 
  CloudRain, 
  ShieldCheck, 
  Headphones, 
  Smartphone,
  Gauge,
  Wallet
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <WifiOff className="w-6 h-6 text-cyan-400" />,
      title: "Offline-Tolerant System",
      desc: "Transaksi kasir tidak boleh berhenti saat sinyal internet down. Data transaksi otomatis disimpan di perangkat dan disinkronkan ke cloud begitu internet kembali aktif."
    },
    {
      icon: <Gauge className="w-6 h-6 text-emerald-400" />,
      title: "Performa Kilat (Sub-Detik)",
      desc: "Dibangun dengan teknologi Next.js & Turbopack modern. Navigasi menu, pencarian barang, dan print struk kasir selesai hanya dalam hitungan milidetik."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      title: "Keamanan Standar Perbankan",
      desc: "Proteksi otorisasi pengguna berbasis peran (Role-Based Access: Kasir, Supervisor, Owner), audit trail transaksi, serta enkripsi data SSL 256-bit."
    },
    {
      icon: <Wallet className="w-6 h-6 text-amber-400" />,
      title: "Hemat Investasi Hardware",
      desc: "Tidak wajib membeli mesin POS mahal. CentPOS bisa dijalankan di laptop bekas, tablet Android/iPad, smartphone, maupun komputer kasir konvensional."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-indigo-400" />,
      title: "Pantau Toko dari Mana Saja",
      desc: "Owner bisa memantau penjualan harian, stok menipis, dan setoran kasir langsung dari smartphone saat berada di luar kota maupun liburan."
    },
    {
      icon: <Headphones className="w-6 h-6 text-rose-400" />,
      title: "Dukungan Teknis Siaga",
      desc: "Layanan bantuan cepat via WhatsApp dan telepon teknis jika terjadi kendala operasional, penggantian hardware, atau update sistem berkala."
    }
  ];

  return (
    <section id="keunggulan" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Mengapa Memilih Kami
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Keunggulan Kompetitif CentPortal
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Kami menghadirkan perpaduan antara kemudahan penggunaan untuk kasir dan kekuatan analitik untuk pemilik bisnis.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {feat.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
