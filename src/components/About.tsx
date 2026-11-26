"use client";

import React from "react";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Lightbulb, 
  ShieldCheck, 
  Clock, 
  Sparkles 
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-400" />,
      title: "Inovasi Praktis",
      desc: "Menghadirkan teknologi modern yang tepat guna, mudah dioperasikan staf, dan terbukti meningkatkan pendapatan bisnis."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Integritas & Keamanan",
      desc: "Keamanan data transaksi bisnis klien adalah prioritas utama dengan proteksi enkripsi dan audit cadangan berkala."
    },
    {
      icon: <Clock className="w-6 h-6 text-cyan-400" />,
      title: "Respon & Dukungan Cepat",
      desc: "Didukung tim teknis yang siap mendampingi proses implementasi, pelatihan kasir, hingga penanganan darurat 24/7."
    },
    {
      icon: <Award className="w-6 h-6 text-indigo-400" />,
      title: "Skalabilitas Berkelanjutan",
      desc: "Sistem dirancang untuk bertumbuh bersama bisnis Anda, dari 1 toko hingga ekspansi ratusan cabang waralaba."
    }
  ];

  return (
    <section id="tentang" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Tentang CentPortal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mitra Teknologi Terpercaya untuk Masa Depan Bisnis Anda
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            <strong>PT Cent Solusi Teknologi (CentPortal)</strong> lahir dari semangat untuk mendemokratisasi teknologi enterprise agar dapat diakses dengan mudah dan hemat biaya oleh pelaku usaha ritel, F&B, dan logistik di Indonesia.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Visi */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-850/80 border border-slate-700/80 shadow-xl relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Visi Kami</h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Menjadi platform ekosistem digital terkemuka di Asia Tenggara yang menghubungkan penjualan ritel, inventori gudang, dan analitik cerdas dalam satu pintu yang handal, fleksibel, dan terjangkau.
            </p>
          </div>

          {/* Misi */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-850/80 border border-slate-700/80 shadow-xl relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Misi Kami</h3>
            <ul className="text-slate-300 space-y-2 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span>Mengembangkan aplikasi kasir & manajemen stok yang cepat, intuitif, dan tidak bergantung penuh pada koneksi internet.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span>Membantu pemilik bisnis mengambil keputusan strategis berbasis data analitik akurat.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span>Memberikan layanan konsultasi dan pendampingan implementasi yang ramah, profesional, dan berkelanjutan.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Core Values Grid */}
        <div>
          <h3 className="text-center text-xl font-bold text-white mb-8">
            Nilai Inti yang Kami Pegang Teguh
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-all duration-200"
              >
                <div className="p-3 rounded-lg bg-slate-900 inline-block mb-4">
                  {val.icon}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{val.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
