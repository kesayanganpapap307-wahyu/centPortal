"use client";

import React from "react";
import { Star, Quote, Store, Coffee, PackageCheck } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Owner, Kopi Senja Nusantara (4 Outlet)",
      type: "F&B / Coffee Shop",
      icon: <Coffee className="w-5 h-5 text-amber-400" />,
      content: "Sebelum pakai CentPOS, rekap tutup kasir tiap malam bisa makan waktu 1 jam lebih karena sering ada selisih. Sekarang kasir tinggal cetak laporan z-report dan data otomatis sinkron ke HP saya. Super praktis!",
      rating: 5
    },
    {
      name: "Hendrik Wijaya",
      role: "Direktur Operasional, Mitra Bangunan Sejahtera",
      type: "Retail Bahan Bangunan",
      icon: <Store className="w-5 h-5 text-cyan-400" />,
      content: "Fitur offline-tolerant nya benar-benar penyelamat. Sinyal provider di gudang cabang kami sering naik-turun, tapi kasir tetap bisa scan barcode dan cetak struk tanpa gangguan sedikitpun.",
      rating: 5
    },
    {
      name: "Dewi Lestari",
      role: "Founder, GlowSkin Beauty & Pharmacy",
      type: "Apotek & Kosmetik",
      icon: <PackageCheck className="w-5 h-5 text-emerald-400" />,
      content: "Integrasi sistem inventori CentWarehouse sangat rapi. Kami bisa melacak tanggal kadaluarsa produk skincare dan peringatan stok menipis otomatis bekerja dengan baik.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Testimoni & Klien
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dipercaya oleh Ratusan Pelaku Usaha
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Dengar langsung pengalaman para pemilik usaha yang telah meningkatkan efisiensi operasional bersama kami.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <Quote className="w-8 h-8 text-slate-700 mb-2" />
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <p className="text-sm font-bold text-white">{item.name}</p>
                <p className="text-xs text-slate-400">{item.role}</p>
                <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
