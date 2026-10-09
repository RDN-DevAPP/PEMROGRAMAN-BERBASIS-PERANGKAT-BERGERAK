# PEMROGRAMAN-BERBASIS-PERANGKAT-BERGERAK

Repository ini berisi tugas praktikum mata kuliah **Pemrograman Berbasis Piranti/Perangkat Bergerak (MSIM4401)** Program Studi **S1 Sistem Informasi Universitas Terbuka**.

---

## 👤 Identitas Mahasiswa
- **Nama** : M. RIDUAN
- **NIM** : 053660074
- **Program Studi** : S1 Sistem Informasi
- **Fakultas** : Fakultas Sains dan Teknologi (FST)
- **UPBJJ** : UT Banjarmasin

---

## 📌 Tugas 1: Pemrograman Dasar & Logika TypeScript Berdasarkan Parameter NIM

Parameter pada tugas ini diturunkan secara dinamis dari digit NIM: `053660074`.

### 1. Soal 1: Pola Segitiga Angka (`soal1_pola_segitiga.ts`)
- **Aturan**: Mengambil digit terakhir NIM sebagai tinggi segitiga.
- **Parameter**: Digit terakhir NIM adalah **`4`**, sehingga tinggi segitiga adalah **4 baris**.
- **Output**:
  ```text
  1
  1 2
  1 2 3
  1 2 3 4
  ```

### 2. Soal 2: Deret Aritmatika (`soal2_deret_aritmatika.ts`)
- **Aturan**: 2 digit terakhir NIM sebagai nilai awal ($a$), digit ke-3 dari belakang $+ 1$ sebagai beda ($b$). Mencetak 10 angka pertama.
- **Parameter**: 
  - 2 digit terakhir = **`74`** ($a$)
  - Digit ke-3 dari belakang = $0 \rightarrow 0 + 1 =$ **`1`** ($b$)
- **Output**:
  ```text
  74, 75, 76, 77, 78, 79, 80, 81, 82, 83
  ```

### 3. Soal 3: Bilangan Prima (`soal3_bilangan_prima.ts`)
- **Aturan**: 2 digit terakhir NIM $+ 10$ sebagai batas akhir pencarian bilangan prima dari 1.
- **Parameter**: $74 + 10 =$ **`84`** (batas akhir).
- **Output**:
  ```text
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83
  ```

---

## 🚀 Cara Menjalankan Kode (TypeScript)

Pastikan Node.js (v22+) telah terpasang di komputer Anda. Jalankan perintah berikut di terminal:

```bash
# Menjalankan Soal 1
node --experimental-strip-types soal1_pola_segitiga.ts

# Menjalankan Soal 2
node --experimental-strip-types soal2_deret_aritmatika.ts

# Menjalankan Soal 3
node --experimental-strip-types soal3_bilangan_prima.ts
```
