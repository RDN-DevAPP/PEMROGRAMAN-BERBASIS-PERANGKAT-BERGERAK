# Tugas 2: Konsumsi REST API Cuaca Online (Open-Meteo) dengan TypeScript & Web UI

Folder ini berisi kode program dan naskah praktikum untuk **Tugas 2 Aktivitas Belajar 8** pada mata kuliah **Pemrograman Berbasis Perangkat Bergerak (MSIM4401 / STSI4303)**.

---

## 👤 Identitas Mahasiswa
- **Nama** : M. RIDUAN
- **NIM** : 053660074
- **Program Studi** : S1 Sistem Informasi
- **UPBJJ** : Universitas Terbuka Banjarmasin

---

## 📌 Deskripsi Soal
Membuat proyek aplikasi untuk menampilkan data prakiraan cuaca wilayah DKI Jakarta dari REST API online:
`https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m`

**Ketentuan Tampilan:**
1. Menampilkan atribut/kolom:
   - `time` (waktu pengukuran dalam format ISO-8601 dan lokal WIB)
   - `temperature_2m` (suhu udara per jam dalam °C)
2. Desain tampilan mudah dibaca (minimal 10 data pertama).
3. Analisis statistik suhu sederhana (Suhu Tertinggi, Suhu Terendah, dan Rata-rata Suhu).

---

## 📂 Struktur Berkas
- 💻 **`weather_api.ts`** : Skrip TypeScript murni untuk backend / CLI processor yang melakukan `fetch()` data JSON secara asinkron (`async/await`), parsing array paralel, pemetaan interface data, dan fallback cache offline resilien.
- 🌐 **`index.html`** : Antarmuka web modern responsif bergaya mobile/Ionic dengan badge suhu interaktif, kartu koordinat, dan tombol alih (10 data / semua data).
- 💾 **`weather_cache.json`** : Dataset cadangan lokal untuk menjamin kehandalan aplikasi jika dijalankan pada kondisi offline.
- ⚡ **`Jalankan_Tugas_2.bat`** : Launcher 1-klik untuk mengeksekusi program di terminal dan membuka browser.
- 📝 **`skrip_video_tugas2.md`** & **`skrip_video_tugas2.txt`** : Panduan naskah rekaman video lengkap yang mencakup 4 elemen wajib asesmen (Perkenalan, Langkah Praktik, Hasil & Analisis, Penutup).

---

## 🚀 Cara Menjalankan

### Opsi 1: Menjalankan via Terminal (CLI)
```bash
# Eksekusi langsung TypeScript dengan Node.js v22+
node --experimental-strip-types --no-warnings weather_api.ts
```

### Opsi 2: Membuka Antarmuka Web
Cukup buka file `index.html` menggunakan peramban web modern (Google Chrome, Microsoft Edge, Mozilla Firefox) atau jalankan file `Jalankan_Tugas_2.bat`.
