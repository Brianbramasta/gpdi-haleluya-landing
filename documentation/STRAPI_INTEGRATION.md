# Strapi CMS Integration

## Overview

Project ini menggunakan sistem hybrid untuk data:
- **Development tanpa Strapi**: Menggunakan dummy data dari `src/data/dummy.ts`
- **Production dengan Strapi**: Mengambil data dari Strapi CMS API

## Struktur Folder

```
src/
├── lib/
│   └── strapi.ts          # Helper functions untuk fetch data
├── data/
│   └── dummy.ts           # Dummy data untuk development
└── components/            # Components yang menggunakan helper functions

.env                       # Environment variables (jangan commit)
.env.example              # Template environment variables (boleh commit)
```

## Cara Menggunakan

### 1. Development dengan Dummy Data (Default)

Tanpa setup apapun, project akan menggunakan dummy data:

```bash
npm run dev
```

### 2. Development dengan Strapi

Jika Strapi sudah siap, update file `.env`:

```env
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-api-token-here
```

### 3. Production dengan Strapi

Set environment variables di production:

```env
STRAPI_URL=https://your-strapi-url.com
STRAPI_API_TOKEN=your-production-api-token
```

## Helper Functions

Helper functions tersedia di `src/lib/strapi.ts`:

- `getHero()` - Mengambil data hero section
- `getJadwalIbadah()` - Mengambil jadwal ibadah
- `getPengumuman()` - Mengambil pengumuman
- `getRayon()` - Mengambil data rayon
- `getEvents()` - Mengambil event
- `getTentang()` - Mengambil informasi tentang gereja
- `getPelayanan()` - Mengambil data pelayanan
- `getGaleri()` - Mengambil galeri foto
- `getGlobal()` - Mengambil global settings

## Contoh Penggunaan di Component

```astro
---
import { getHero, getImageUrl } from '../../../lib/strapi';

const hero = await getHero();
const heroData = hero.data;
const bgImageUrl = getImageUrl(heroData.background_image);
---

<section>
  <h1>{heroData.title}</h1>
  <p>{heroData.subtitle}</p>
  <img src={bgImageUrl} alt="Background" />
</section>
```

## Strapi Content Types

Berikut content types yang perlu dibuat di Strapi:

### Hero (Single Type)
- title (Text)
- subtitle (Text)
- background_image (Media)
- cta_button_text (Text)
- cta_button_link (Text)
- whatsapp_link (Text)

### Jadwal Ibadah (Collection Type)
- hari (Enumeration: Senin, Selasa, Rabu, Kamis, Jumat, Sabtu, Minggu)
- nama_ibadah (Text)
- waktu (Text)
- keterangan (Text, optional)

### Pengumuman (Collection Type)
- judul (Text)
- tanggal (Date)
- deskripsi (Rich Text)
- kategori (Enumeration)

### Rayon (Collection Type)
- nama (Text)
- tanggal (Date)
- waktu (Text)
- lokasi (Text)
- ketua_rayon (Text)

### Event (Collection Type)
- judul (Text)
- tanggal (Date)
- waktu (Text)
- kategori (Enumeration)
- deskripsi (Rich Text)
- lokasi (Text)
- gambar (Media, optional)

### Tentang (Single Type)
- sejarah (Rich Text)
- visi (Rich Text)
- misi (Rich Text)
- nilai (Rich Text)
- profil_gembala (Rich Text)
- foto_gembala (Media)

### Pelayanan (Collection Type)
- nama (Text)
- deskripsi (Rich Text)
- ikon (Text)
- gambar (Media, optional)

### Galeri (Collection Type)
- judul (Text)
- deskripsi (Text, optional)
- gambar (Media)
- kategori (Enumeration)

### Global (Single Type)
- nama_gereja (Text)
- alamat (Text)
- telepon (Text)
- email (Text)
- social_media (JSON Component)
- logo (Media)

## API Endpoints

Semua endpoint menggunakan format:

```
GET /api/{content-type}?populate=*
```

Contoh:
- `GET /api/hero?populate=*`
- `GET /api/jadwal-ibadah?sort=hari:asc&populate=*`
- `GET /api/pengumuman?sort=tanggal:desc&populate=*`

## Utility Functions

### getImageUrl(image)
Format URL gambar dari Strapi:

```typescript
import { getImageUrl } from '../../../lib/strapi';
const imageUrl = getImageUrl(imageData);
```

### formatDate(dateString)
Format tanggal ke format Indonesia:

```typescript
import { formatDate } from '../../../lib/strapi';
const formattedDate = formatDate('2024-01-01');
// Output: "1 Januari 2024"
```

## Migration dari Dummy ke Real API

1. Setup Strapi project terpisah
2. Buat content types sesuai skema di atas
3. Import data dari `src/data/dummy.ts` ke Strapi
4. Update `.env` dengan STRAPI_URL dan STRAPI_API_TOKEN
5. Test dengan menjalankan `npm run dev`
6. Deploy ke production

## Troubleshooting

### Data tidak muncul
- Cek apakah `.env` sudah di-set dengan benar
- Pastikan Strapi server berjalan
- Cek console browser untuk error

### Error CORS
- Pastikan Strapi config mengizinkan origin dari frontend
- Update `config/middlewares.ts` di Strapi

### API Token tidak valid
- Generate API token baru di Strapi admin panel
- Update `STRAPI_API_TOKEN` di `.env`
