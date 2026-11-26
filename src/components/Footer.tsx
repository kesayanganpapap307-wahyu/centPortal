"use client";

import React from "react";
import { Building2, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#beranda" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Cent<span className="text-cyan-400">Portal</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              PT Cent Solusi Teknologi. Menghubungkan titik penjualan (CentPOS), manajemen stok pergudangan, dan analitik bisnis dalam satu ekosistem cloud yang cepat, aman, dan mudah.
            </p>
            <p className="text-xs text-slate-500">
              Terdaftar & Berkantor Pusat di Jakarta, Indonesia.
            </p>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Produk & Solusi
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#solusi" className="hover:text-cyan-400 transition-colors">CentPOS (Kasir Pintar)</a></li>
              <li><a href="#solusi" className="hover:text-cyan-400 transition-colors">CentWarehouse (Inventori)</a></li>
              <li><a href="#solusi" className="hover:text-cyan-400 transition-colors">CentAnalytics (Laporan BI)</a></li>
              <li><a href="#solusi" className="hover:text-cyan-400 transition-colors">Custom Enterprise API</a></li>
              <li><a href="#solusi" className="hover:text-cyan-400 transition-colors">Dukungan Printer Thermal</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#beranda" className="hover:text-cyan-400 transition-colors">Beranda</a></li>
              <li><a href="#tentang" className="hover:text-cyan-400 transition-colors">Tentang Perusahaan</a></li>
              <li><a href="#keunggulan" className="hover:text-cyan-400 transition-colors">Keunggulan Sistem</a></li>
              <li><a href="#kalkulator" className="hover:text-cyan-400 transition-colors">Kalkulator Kebutuhan</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Pertanyaan Umum (FAQ)</a></li>
              <li><a href="#kontak" className="hover:text-cyan-400 transition-colors">Kontak Kami</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Hubungi Kami
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>WhatsApp: +62 812-3456-7890</li>
              <li>Email: halo@centportal.cloud</li>
              <li>Jam Kerja: 08:00 - 21:00 WIB</li>
              <li className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors text-xs"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Kembali ke Atas</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 PT Cent Solusi Teknologi. Hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">Kebijakan Privasi</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Syarat & Ketentuan</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Status Server</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
