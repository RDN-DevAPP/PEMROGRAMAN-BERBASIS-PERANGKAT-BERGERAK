# PEMROGRAMAN-BERBASIS-PERANGKAT-BERGERAK

Repository ini berisi tugas praktikum mata kuliah **Pemrograman Berbasis Piranti/Perangkat Bergerak (MSIM4401 / STSI4303)** Program Studi **S1 Sistem Informasi Universitas Terbuka**.

---

## 👤 Identitas Mahasiswa
- **Nama** : M. RIDUAN
- **NIM** : 053660074
- **Program Studi** : S1 Sistem Informasi
- **Fakultas** : Fakultas Sains dan Teknologi (FST)
- **UPBJJ** : UT Banjarmasin

---

## 📁 Daftar Tugas Praktikum

### 📌 1. [Tugas 1: Pemrograman Dasar & Logika TypeScript](./)
Tugas algoritmik berbasis parameter dinamis dari digit NIM: `053660074`.
- **Soal 1 (`soal1_pola_segitiga.ts`)**: Pola segitiga angka setinggi 4 baris.
- **Soal 2 (`soal2_deret_aritmatika.ts`)**: Deret aritmatika dengan suku awal 74 dan beda 1.
- **Soal 3 (`soal3_bilangan_prima.ts`)**: Penyaringan bilangan prima dari rentang 1 hingga batas 84.

### 📌 2. [Tugas 2: Konsumsi REST API Cuaca Online Open-Meteo](./Tugas%202/)
Implementasi integrasi data prakiraan cuaca Jakarta (`time` & `temperature_2m`) secara asinkron (`fetch()` / `async/await`) dengan TypeScript dan antarmuka web mobile responsif.
- **`weather_api.ts`**: Backend / CLI TypeScript processor dengan penanganan timeout dan cache offline resilien.
- **`index.html`**: UI responsif bergaya mobile/Ionic dengan badge suhu dan kartu status.
- **`weather_cache.json`**: Dataset lokal pendukung mode offline.
- **`skrip_video_tugas2.md`**: Naskah rekaman video demonstrasi 4 elemen wajib asesmen UT.

---

## 🚀 Cara Menjalankan Kode (TypeScript)

Pastikan Node.js (v22+) telah terpasang di komputer Anda.

### Menjalankan Tugas 1:
```bash
node --experimental-strip-types soal1_pola_segitiga.ts
node --experimental-strip-types soal2_deret_aritmatika.ts
node --experimental-strip-types soal3_bilangan_prima.ts
```

### Menjalankan Tugas 2:
```bash
cd "Tugas 2"
node --experimental-strip-types --no-warnings weather_api.ts
# atau buka index.html di peramban web
```
