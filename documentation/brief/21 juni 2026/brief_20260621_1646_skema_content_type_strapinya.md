# Skema Content-Type Strapi
Tanggal: 21 Juni 2026 16:46

Berikut adalah skema content-type Strapi berdasarkan struktur data di `src/data/dummy.ts`:

---

## 1. Hero (Single Type)

**Collection Name:** `hero`
**Kind:** Single Type

### Fields:
- **title** (String)
  - Type: Text
  - Required: true
  
- **subtitle** (String)
  - Type: Text
  - Required: true
  
- **background_image** (Media)
  - Type: Media
  - Allowed: Images
  - Required: true
  
- **cta_button_text** (String)
  - Type: Text
  - Required: true
  
- **cta_button_link** (String)
  - Type: Text
  - Required: true
  
- **whatsapp_link** (String)
  - Type: Text
  - Required: true

---

## 2. Jadwal Ibadah (Collection Type)

**Collection Name:** `jadwal-ibadah`
**Kind:** Collection Type

### Fields:
- **hari** (String)
  - Type: Enumeration
  - Values: Senin, Selasa, Rabu, Kamis, Jumat, Sabtu, Minggu
  - Required: true
  - Default: Minggu
  
- **nama_ibadah** (String)
  - Type: Text
  - Required: true
  
- **waktu** (String)
  - Type: Text
  - Required: true
  
- **keterangan** (Text)
  - Type: Text
  - Required: false

---

## 3. Pengumuman (Collection Type)

**Collection Name:** `pengumuman`
**Kind:** Collection Type

### Fields:
- **judul** (String)
  - Type: Text
  - Required: true
  
- **tanggal** (Date)
  - Type: Date
  - Required: true
  
- **deskripsi** (Text)
  - Type: Rich Text / Text
  - Required: true
  
- **kategori** (String)
  - Type: Enumeration
  - Values: Pemuda, Umum, Anak, Lainnya
  - Required: true
  - Default: Umum

---

## 4. Rayon (Collection Type)

**Collection Name:** `rayon`
**Kind:** Collection Type

### Fields:
- **nama** (String)
  - Type: Text
  - Required: true
  
- **tanggal** (Date)
  - Type: Date
  - Required: true
  
- **waktu** (String)
  - Type: Text
  - Required: true
  
- **lokasi** (Text)
  - Type: Text
  - Required: true
  
- **ketua_rayon** (String)
  - Type: Text
  - Required: true

---

## 5. Event (Collection Type)

**Collection Name:** `event`
**Kind:** Collection Type

### Fields:
- **judul** (String)
  - Type: Text
  - Required: true
  
- **tanggal** (Date)
  - Type: Date
  - Required: true
  
- **waktu** (String)
  - Type: Text
  - Required: true
  
- **kategori** (String)
  - Type: Enumeration
  - Values: Ibadah Khusus, Retreat, Seminar, Baptisan, Lainnya
  - Required: true
  - Default: Lainnya
  
- **deskripsi** (Text)
  - Type: Rich Text / Text
  - Required: true
  
- **lokasi** (String)
  - Type: Text
  - Required: true
  
- **gambar** (Media)
  - Type: Media
  - Allowed: Images
  - Required: false

---

## 6. Tentang (Single Type)

**Collection Name:** `tentang`
**Kind:** Single Type

### Fields:
- **sejarah** (Text)
  - Type: Rich Text / Text
  - Required: true
  
- **visi** (Text)
  - Type: Rich Text / Text
  - Required: true
  
- **misi** (Text)
  - Type: Rich Text / Text
  - Required: true
  
- **nilai** (Component - Repeatable)
  - Component Name: `nilai-item`
  - Required: true
  - Fields:
    - **judul** (String) - Required
    - **ikon** (String) - Required (Icon name/identifier)
    - **deskripsi** (Text) - Required
  
- **nama_gembala** (String)
  - Type: Text
  - Required: true
  
- **profil_gembala** (Text)
  - Type: Rich Text / Text
  - Required: true
  
- **foto_gembala** (Media)
  - Type: Media
  - Allowed: Images
  - Required: false

### Component: nilai-item
**Collection Name:** `shared.nilai-item`
**Category:** Shared

### Fields:
- **judul** (String)
  - Type: Text
  - Required: true
  
- **ikon** (String)
  - Type: Text
  - Required: true
  
- **deskripsi** (Text)
  - Type: Text
  - Required: true

---

## 7. Pelayanan (Collection Type)

**Collection Name:** `pelayanan`
**Kind:** Collection Type

### Fields:
- **nama** (String)
  - Type: Text
  - Required: true
  
- **deskripsi** (Text)
  - Type: Rich Text / Text
  - Required: true
  
- **ikon** (String)
  - Type: Text
  - Required: true (Icon name/identifier)
  
- **gambar** (Media)
  - Type: Media
  - Allowed: Images
  - Required: false

---

## 8. Galeri (Collection Type)

**Collection Name:** `galeri`
**Kind:** Collection Type

### Fields:
- **judul** (String)
  - Type: Text
  - Required: true
  
- **deskripsi** (Text)
  - Type: Text
  - Required: true
  
- **gambar** (Media)
  - Type: Media
  - Allowed: Images
  - Required: true
  
- **kategori** (String)
  - Type: Enumeration
  - Values: Ibadah Minggu, Retreat, Youth, Baptisan, Lainnya
  - Required: true
  - Default: Lainnya

---

## 9. Global (Single Type)

**Collection Name:** `global`
**Kind:** Single Type

### Fields:
- **nama_gereja** (String)
  - Type: Text
  - Required: true
  
- **alamat** (Text)
  - Type: Text
  - Required: true
  
- **whatsapp** (String)
  - Type: Text
  - Required: true
  
- **email** (String)
  - Type: Email
  - Required: true
  
- **social_media** (JSON)
  - Type: JSON
  - Required: true
  - Structure:
    ```json
    {
      "facebook": "https://facebook.com/gpdihaleluya",
      "instagram": "https://instagram.com/gpdihaleluya",
      "youtube": "https://youtube.com/gpdihaleluya"
    }
    ```
  
- **logo** (Media)
  - Type: Media
  - Allowed: Images
  - Required: true

---

## Catatan Penting:

1. **Single Type vs Collection Type:**
   - Single Type (Hero, Tentang, Global) hanya boleh memiliki satu entry
   - Collection Type (Jadwal Ibadah, Pengumuman, Rayon, Event, Pelayanan, Galeri) bisa memiliki banyak entry

2. **Media Fields:**
   - Semua field media hanya mengizinkan gambar (Images)
   - Beberapa field media bersifat optional (required: false)

3. **Text vs Rich Text:**
   - Field deskripsi yang panjang sebaiknya menggunakan Rich Text untuk memungkinkan formatting
   - Field pendek bisa menggunakan Text biasa

4. **Enumeration:**
   - Field kategori menggunakan enumeration untuk membatasi pilihan yang tersedia
   - Memiliki nilai default untuk memudahkan input

5. **Component:**
   - Field `nilai` pada content-type Tentang menggunakan component repeatable
   - Component didefinisikan terpisah di category Shared

6. **JSON Field:**
   - Field `social_media` pada Global menggunakan JSON untuk menyimpan multiple social media links
   - Alternatif: bisa dibuat sebagai individual fields (facebook, instagram, youtube)