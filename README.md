# CentPortal - Official Company Profile Website

Website **Company Profile** modern, responsif, dan elegan untuk **PT Cent Solusi Teknologi (CentPortal)** — ekosistem terpadu solusi Point of Sale (CentPOS), Manajemen Inventori & Warehouse, dan Analitik Bisnis.

---

## 🚀 Fitur Unggulan Website

1. **Sticky Glassmorphic Header & Mobile Drawer**:
   - Navigasi halus (*smooth scrolling*) ke setiap seksi halaman.
   - Tombol cepat CTA "Konsultasi Gratis" langsung terhubung ke WhatsApp resmi.
2. **Hero Section dengan Interactive Dashboard Mockup**:
   - Headline tajam dengan aksen gradient modern.
   - Indikator live metrics (99.9% Uptime, 500+ Terminal, 10x Efisiensi).
   - Mockup visual dashboard transaksi live sync dan status cabang.
3. **About Section (Profil Perusahaan)**:
   - Profil PT Cent Solusi Teknologi, Visi, Misi, serta 4 pilar nilai inti perusahaan.
4. **Interactive Solutions Showcase**:
   - Tab modular dinamis untuk menjelajahi:
     - **CentPOS (Cloud Point of Sale)**: Offline-tolerant, barcode scanner, thermal printing, multi-payment.
     - **CentWarehouse (Smart Inventory)**: Multi-gudang, tracking mutasi, stok opname.
     - **CentAnalytics (Business Intelligence)**: Omset real-time, grafik Pareto, export Excel/PDF.
     - **Custom Enterprise API**: Integrasi ERP, marketplace, dan private server.
5. **Keunggulan Kompetitif (Why Us)**:
   - 6 pilar keunggulan teknis & bisnis (Offline-tolerant, Sub-detik speed, keamanan RLS, hemat hardware, dsb).
6. **Kalkulator Kebutuhan & Estimasi Efisiensi (Interactive ROI Calculator)**:
   - Pengunjung dapat memilih bidang usaha (Ritel, F&B, Gudang), menggeser slider jumlah cabang dan transaksi harian.
   - Menghitung rekomendasi paket dan estimasi efisiensi waktu serta proteksi selisih kasir secara instan.
7. **Testimoni & Klien Showcase**:
   - Cerita sukses dari pemilik coffee shop, toko retail bangunan, dan apotek.
8. **Frequently Asked Questions (FAQ) Accordion**:
   - Jawaban tuntas untuk pertanyaan seputar hardware kasir, printer thermal, offline mode, dan skema biaya.
9. **Formulir Konsultasi & WhatsApp Direct Redirect**:
   - Form pesan interaktif dengan feedback konfirmasi instan.
   - Tombol direct redirect pesan WhatsApp dengan template pesan otomatis.
10. **Modern Footer**:
    - Profil legal, quick links, info kontak, dan tombol *Scroll to Top*.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16 (App Router) + Turbopack
- **UI Library**: [React](https://react.dev/) 19 + TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Optimized for [Vercel](https://vercel.com/) Edge Network

---

## 💻 Menjalankan di Lokal (Development)

1. Masuk ke folder project:
   ```bash
   cd C:\Users\user\Develop\CentPortal
   ```

2. Jalankan development server:
   ```bash
   npm run dev
   ```

3. Buka di browser:
   ```
   http://localhost:3000
   ```

---

## 📦 Menjalankan Production Build

```bash
npm run build
npm run start
```

---

## ☁️ Cara Deploy ke Vercel (Gratis & Cepat)

1. Inisialisasi Git dan commit perubahan:
   ```bash
   git add .
   git commit -m "feat: complete modern company profile for CentPortal"
   ```
2. Hubungkan ke repository GitHub baru:
   ```bash
   git remote add origin https://github.com/USERNAME/cent-portal.git
   git branch -M main
   git push -u origin main
   ```
3. Buka [vercel.com](https://vercel.com), klik **"Add New Project"**, pilih repository `cent-portal`, dan klik **Deploy**.
4. Website company profile Anda akan langsung aktif di domain `https://centportal.vercel.app` (atau nama domain custom pilihan Anda).

---

## ⚙️ Kustomisasi Kontak & Nomor WhatsApp

Untuk mengganti nomor WhatsApp atau email resmi perusahaan:
- Buka file [Navbar.tsx](file:///C:/Users/user/Develop/CentPortal/src/components/Navbar.tsx), [RoiCalculator.tsx](file:///C:/Users/user/Develop/CentPortal/src/components/RoiCalculator.tsx), dan [Contact.tsx](file:///C:/Users/user/Develop/CentPortal/src/components/Contact.tsx)
- Ganti `6281234567890` dengan nomor WhatsApp bisnis Anda.
- Ganti alamat kantor & email di [Contact.tsx](file:///C:/Users/user/Develop/CentPortal/src/components/Contact.tsx) dan [Footer.tsx](file:///C:/Users/user/Develop/CentPortal/src/components/Footer.tsx).
