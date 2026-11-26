"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Apakah aplikasi CentPOS memerlukan hardware komputer khusus?",
      a: "Tidak perlu. CentPOS dirancang sangat fleksibel dan ringan berbasis web modern. Anda dapat menjalankannya di laptop (Windows/Mac), tablet (Android/iPad), atau PC kasir yang sudah ada. Cukup buka browser dan sistem langsung siap melayani transaksi."
    },
    {
      q: "Bagaimana jika koneksi internet di toko terputus saat kasir sedang ramai?",
      a: "CentPOS dilengkapi arsitektur offline-tolerant. Kasir tetap dapat memindai barang, memasukkan transaksi, menghitung diskon & pajak, serta mencetak struk thermal. Seluruh data transaksi disimpan sementara secara aman di perangkat lokal, dan otomatis di-sync ke cloud database saat internet terhubung kembali."
    },
    {
      q: "Apakah printer kasir thermal yang lama bisa digunakan?",
      a: "Bisa! CentPOS mendukung hampir seluruh printer thermal 58mm dan 80mm standar pasar (koneksi USB, Bluetooth, maupun LAN/Network) tanpa memerlukan driver aneh. Pencetakan nota di-trigger langsung dari browser dengan format struk yang sudah presisi."
    },
    {
      q: "Apakah data transaksi dan omset bisnis saya aman?",
      a: "Sangat aman. Kami menggunakan enkripsi SSL/TLS, database PostgreSQL kelas enterprise dengan kebijakan Row-Level Security (RLS), dan backup rutin otomatis. Hanya pengguna dengan izin resmi (otentikasi akun) yang dapat melihat laporan keuangan toko Anda."
    },
    {
      q: "Apakah ada biaya bulanan atau sistem langganan?",
      a: "Kami menawarkan model lisensi fleksibel: baik paket berlangganan hemat bulanan/tahunan (termasuk update cloud, backup server, & support), maupun opsi implementasi lisensi putus (custom enterprise) untuk kebutuhan skala besar. Hubungi tim kami untuk konsultasi penawaran terbaik."
    },
    {
      q: "Bagaimana proses pelatihan kasir dan migrasi data awal?",
      a: "Tim kami mendampingi proses impor data produk dari file Excel/CSV lama Anda, setting printer kasir, serta pelatihan singkat (kurang dari 30 menit) agar staf kasir langsung mahir mengoperasikan sistem."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-slate-400 text-base">
            Temukan jawaban cepat seputar implementasi sistem CentPortal dan CentPOS.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-base font-semibold text-white pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
