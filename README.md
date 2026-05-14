# Verdiqo IoT — Smart Hydroponic Landing Page

![Status](https://img.shields.io/badge/Status-Active%20Development-22C55E)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=0B0B0B)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![Last Commit](https://img.shields.io/github/last-commit/Prasetyant0/SmartHydroponicLandingPage?label=Last%20commit)

![Preview Hero Verdiqo IoT](/public/preview.webp)

Landing page modern untuk platform **IoT hidroponik** yang mengusung design system **minimalis premium** (terinspirasi gaya Tesla): bersih, responsif, penuh whitespace, dan fokus pada hierarki tipografi.

---

## Deskripsi Project

**Verdiqo IoT** adalah halaman landing untuk memperkenalkan produk Smart Hydroponic: monitoring sensor, otomasi irigasi/nutrisi, dan dashboard pemantauan real-time. Project ini dibangun sebagai **showcase portfolio** sekaligus fondasi awal untuk pengembangan produk ke tahap berikutnya.

> Catatan: Project ini **akan terus dikembangkan** (fitur, konten, dan halaman tambahan) agar semakin mendekati kebutuhan produk dunia nyata.

## Fitur Utama

- **Tampilan premium minimal**: layout rapi, whitespace luas, tipografi modern
- **Fully responsive**: optimal di mobile, tablet, dan desktop
- **Navigasi halus (smooth scrolling)** menggunakan section id + handler hash
- **Hero CTA fungsional**: membuka modal (trial/demo) dengan validasi dan transisi halus
- **Halaman Produk (`/produk`)** dengan pricing section (anchor `#pricing`)
- **Form Kontak terintegrasi Formspree**: loading/success/error state + reset form
- **Branding Bahasa Indonesia** + metadata/SEO dasar + favicon kustom
- **Halaman legal**: `/privasi`, `/syarat`, `/cookies`

## Teknologi yang Digunakan

- **React** (UI)
- **Vite** (build tool)
- **Tailwind CSS** (styling utility-first)
- **React Router** (routing multi-page & hash navigation)
- **ESLint** (kode tetap konsisten dan aman)

## Struktur Project

Project menggunakan struktur modular (FSD-lite) agar scalable dan mudah dirawat:

```txt
src/
  app/                # Entry app (router, scroll behavior)
    App.jsx
    ScrollToHash.jsx

  pages/              # Halaman (komposisi section)
    landing/          # Landing page + sections
    ProductPage.jsx   # /produk
    legal/            # /privasi, /syarat, /cookies

  widgets/            # Komponen besar lintas halaman
    navbar/
    footer/

  shared/             # Reusable UI, konten, aset, styles
    ui/               # modal, button, dll
    content/          # copywriting/konfigurasi nav, produk, fitur
    assets/           # gambar/asset (mis. hero image)
    styles/           # global styles

  entities/           # (opsional) domain layer untuk skala lebih besar
```

## Roadmap Pengembangan

Berikut rencana pengembangan bertahap (akan berkembang seiring kebutuhan):

- Penyempurnaan copywriting, SEO, dan aksesibilitas (a11y)
- Halaman tambahan: Studi Kasus, FAQ, Blog/Insight, Karier
- Komponen produk: perbandingan paket, detail fitur, dan pricing yang lebih kaya
- Integrasi formulir demo yang lebih nyata (kalender/scheduling)
- Analytics ringan + event tracking (opsional)
- Penambahan test dasar (unit/integration) dan CI workflow

## Author

Dibuat oleh **Prasetyanto Tri P.**

- GitHub: https://github.com/Prasetyant0
- LinkedIn: https://www.linkedin.com/in/prasetyanto-tri-p-56382b25b/
- Instagram: https://www.instagram.com/setya_nt/
