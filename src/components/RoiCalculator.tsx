"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  Store, 
  Boxes, 
  Users, 
  CheckCircle, 
  PhoneCall, 
  ArrowRight,
  TrendingUp,
  Percent
} from "lucide-react";

export default function RoiCalculator() {
  const [businessType, setBusinessType] = useState<string>("retail");
  const [branchCount, setBranchCount] = useState<number>(1);
  const [dailyTx, setDailyTx] = useState<number>(100);

  // Simple dynamic benefit calculation
  const timeSavedHours = Math.round(branchCount * 2.5 * 30); // hours/month
  const estimatedLeakagePrevention = (branchCount * dailyTx * 1500 * 30).toLocaleString("id-ID");

  return (
    <section id="kalkulator" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            Kalkulator Kebutuhan & Efisiensi
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hitung Estimasi Kebutuhan Sistem Bisnis Anda
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Simulasikan jumlah cabang dan volume transaksi Anda untuk melihat solusi dan penghematan yang bisa didapat bersama CentPortal.
          </p>
        </div>

        {/* Interactive Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Input Form */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>1. Profil Bisnis Anda</span>
              </h3>

              {/* Type */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300">Bidang Usaha</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "retail", label: "Ritel / Toko" },
                    { id: "fnb", label: "Cafe & Resto" },
                    { id: "wholesale", label: "Gudang / Grosir" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setBusinessType(item.id)}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                        businessType === item.id
                          ? "bg-cyan-500 text-white border-cyan-500"
                          : "bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Branch Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-300">Jumlah Cabang / Gerai</span>
                  <span className="text-cyan-400 font-bold">{branchCount} Cabang</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={branchCount}
                  onChange={(e) => setBranchCount(Number(e.target.value))}
                  className="w-full accent-cyan-500 bg-slate-800 rounded-lg cursor-pointer h-2"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>1 Cabang</span>
                  <span>10 Cabang</span>
                  <span>20+ Cabang</span>
                </div>
              </div>

              {/* Daily Transactions */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-300">Estimasi Transaksi per Hari per Toko</span>
                  <span className="text-emerald-400 font-bold">{dailyTx} Transaksi</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="20"
                  value={dailyTx}
                  onChange={(e) => setDailyTx(Number(e.target.value))}
                  className="w-full accent-emerald-500 bg-slate-800 rounded-lg cursor-pointer h-2"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>20 Tx</span>
                  <span>250 Tx</span>
                  <span>500+ Tx</span>
                </div>
              </div>

            </div>

            {/* Output Calculation Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Rekomendasi Paket & Hasil Estimasi:
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <p className="text-xs text-slate-400">Paket Solusi Terpilih</p>
                  <p className="text-base font-bold text-white mt-1">
                    {branchCount === 1 
                      ? "CentPOS Single Outlet Starter" 
                      : branchCount <= 5 
                        ? "CentPOS Multi-Outlet Pro + Sync" 
                        : "CentPortal Enterprise Multi-Branch & Warehouse"}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <p className="text-[11px] text-slate-400">Efisiensi Waktu / Bulan</p>
                    <p className="text-lg font-bold text-cyan-400 mt-1">~{timeSavedHours} Jam</p>
                    <p className="text-[10px] text-slate-500">Otomasi rekap kasir & stok</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <p className="text-[11px] text-slate-400">Pencegahan Selisih / Bln</p>
                    <p className="text-lg font-bold text-emerald-400 mt-1">Rp {estimatedLeakagePrevention}</p>
                    <p className="text-[10px] text-slate-500">Presisi pencatatan kasir</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-300 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Termasuk training kasir & pendampingan migrasi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Free update fitur & database cloud backup</span>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/6281234567890?text=Halo%20CentPortal,%20saya%20sudah%20mencoba%20kalkulator%20dan%20ingin%20konsultasi%20untuk%20${branchCount}%20cabang%20bidang%20${businessType}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Konsultasikan Paket Ini</span>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
