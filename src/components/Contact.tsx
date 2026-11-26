"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Building
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    service: "CentPOS Cloud Point of Sale",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Halo CentPortal, perkenalkan saya ${formData.name || "Klien"}${formData.businessName ? ` dari ${formData.businessName}` : ""}.\n\nSaya tertarik dengan: ${formData.service}.\nPesan: ${formData.message || "Mohon informasi lebih lanjut mengenai demo dan penawaran harga."}`;
    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="kontak" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Hubungi Kami
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mulai Transformasi Digital Bisnis Anda Hari Ini
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Diskusikan kebutuhan spesifik toko, kafe, atau gudang Anda bersama konsultan teknologi kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Address */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Building className="w-5 h-5 text-cyan-400" />
                <span>Kantor Pusat CentPortal</span>
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                <strong>PT Cent Solusi Teknologi</strong>
                <br />
                Gedung Cyber One, Lantai 8
                <br />
                Jl. Raya Bisnis Modern No. 88, Jakarta Selatan 12940, Indonesia
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800 text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Telepon & WhatsApp</p>
                    <p className="font-semibold">+62 812-3456-7890</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Email Resmi</p>
                    <p className="font-semibold">halo@centportal.cloud</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Jam Operasional Layanan</p>
                    <p className="font-semibold">Senin - Sabtu: 08:00 - 21:00 WIB</p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Quick Button */}
              <button
                type="button"
                onClick={handleSendViaWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Langsung via WhatsApp</span>
              </button>

            </div>
          </div>

          {/* Right: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Kirim Formulir Konsultasi
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Isi formulir di bawah ini dan perwakilan teknis kami akan menghubungi Anda dalam waktu maksimal 1x24 jam kerja.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-slate-900 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Terima Kasih Atas Pesan Anda!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Data formulir Anda telah kami terima. Tim konsultan kami akan segera menghubungi nomor telepon / WhatsApp yang Anda cantumkan.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all cursor-pointer"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">Nama Lengkap *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Andi Pratama"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">Nomor WhatsApp / HP *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Contoh: 081234567890"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">Email Bisnis</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="andi@bisnis.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">Nama Toko / Usaha</label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Contoh: Kedai Kopi Makmur"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Solusi yang Diminati</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
                    >
                      <option value="CentPOS Cloud Point of Sale">CentPOS Cloud Point of Sale (Kasir Pintar)</option>
                      <option value="CentWarehouse Multi-Gudang">CentWarehouse (Smart Inventory & Supply Chain)</option>
                      <option value="CentAnalytics Business Intelligence">CentAnalytics (Laporan & Analitik Penjualan)</option>
                      <option value="Custom Enterprise & ERP Integration">Custom Enterprise & ERP Integration</option>
                      <option value="Paket Lengkap All-in-One">Paket Lengkap All-in-One Ekosistem</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Pesan / Keterangan Kebutuhan</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan kebutuhan jumlah outlet, hardware yang dimiliki, atau jadwal demo yang diinginkan..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-cyan-500 focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Permintaan Konsultasi</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
