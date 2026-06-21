---
description: Menambahkan halaman baru ke website GPdI Haleluya
---

# Workflow: Menambahkan Halaman Baru

## Langkah-langkah untuk menambahkan halaman baru

### 1. Buat file halaman baru di `src/pages/`
- Buat file `.astro` baru di folder `src/pages/`
- Contoh: `src/pages/tentang.astro`, `src/pages/pelayanan.astro`, dll.
- Pastikan nama file sesuai dengan route yang diinginkan (misal: `jadwal.astro` akan menjadi `/jadwal`)

### 2. Import Layout di halaman baru
```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout>
  <!-- Konten halaman di sini -->
</Layout>
```

### 3. Buat komponen-komponen section (jika diperlukan)
- Jika halaman memiliki banyak section, buat komponen terpisah di `src/components/landing/`
- Contoh: `src/components/landing/TentangHero.astro`, `src/components/landing/VisiMisi.astro`
- Beri nama komponen dengan format PascalCase

### 4. Import dan gunakan komponen di halaman
```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/landing/TentangHero.astro';
import VisiMisi from '../components/landing/VisiMisi.astro';
---

<Layout>
  <Hero />
  <VisiMisi />
</Layout>
```

### 5. Tambahkan link di Navbar
- Buka `src/components/Navbar.astro`
- Tambahkan link baru di bagian Desktop Navigation dan Mobile Menu
- Pastikan href sesuai dengan nama file halaman (tanpa .astro)

### 6. Update task checklist
- Buka `documentation/task/21 juni 2026/task_20260621_1344_mvp.md`
- Tandai halaman yang sudah selesai dengan [x]

### 7. Test halaman
- Jalankan `npm run dev` untuk melihat perubahan
- Buka halaman baru di browser untuk memastikan tampilan benar

## Tips Styling
- Gunakan palette warna netral: gray, slate, zinc
- Konsisten dengan style yang sudah ada (Hero, JadwalIbadah, dll)
- Gunakan Tailwind CSS classes
- Background image bisa ditambahkan dengan style inline: `style="background-image: url('url');"`
- Pastikan responsive dengan menggunakan md: dan lg: prefixes

## Contoh Struktur Halaman
```astro
---
import Layout from '../layouts/Layout.astro';
import SectionHero from '../components/landing/NamaHalamanHero.astro';
import SectionContent from '../components/landing/NamaHalamanContent.astro';
---

<Layout>
  <SectionHero />
  <SectionContent />
</Layout>
```
