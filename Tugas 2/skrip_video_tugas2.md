# SKRIP REKAMAN VIDEO PRAKTIKUM TUGAS 2
## MATA KULIAH: PEMROGRAMAN BERBASIS PERANGKAT BERGERAK (MSIM4401)
### AKTIVITAS BELAJAR 8 - INTEGRASI REST API OPEN-METEO WEATHER

---

### IDENTITAS MAHASISWA
- **Nama Mahasiswa** : M. RIDUAN
- **NIM** : 053660074
- **Program Studi** : S1 Sistem Informasi (252)
- **UPBJJ-UT** : Banjarmasin
- **Mata Kuliah** : Pemrograman Berbasis Perangkat Bergerak (MSIM4401)
- **Topik Tugas 2** : Mengakses dan Menampilkan Data Perkiraan Cuaca Jakarta dari REST API Open-Meteo (`time` dan `temperature_2m`)

---

## PETUNJUK TEKNIS PEREKAMAN VIDEO
1. **Durasi Ideal**: 3 hingga 5 menit (padat, jelas, terstruktur).
2. **Peralatan / Software**:
   - Perekam Layar (OBS Studio, Bandicam, Windows Game Bar `Win + G`, atau Loom).
   - Tampilkan kamera (webcam/wajah mahasiswa) di sudut kanan bawah atau kiri atas agar wajah terlihat jelas sesuai standar asesmen UT.
   - Mikrofon yang jernih.
3. **Persiapan di Layar Sebelum Mulai Rekam**:
   - Buka VS Code berisi folder `Tugas 2` (`weather_api.ts` dan `index.html`).
   - Buka Terminal di VS Code siap menjalankan `node --experimental-strip-types weather_api.ts` (atau klik ganda `Jalankan_Tugas_2.bat`).
   - Siapkan Browser (Google Chrome / Edge) untuk membuka `index.html`.

---

## RUNDOWN & SKRIP KATA-PER-KATA (SPOKEN SCRIPT)

```
+---------------+------------------------+------------------------------------+
| Segment       | Durasi Estimasi        | Tampilan Layar (Visual)            |
+---------------+------------------------+------------------------------------+
| Bagian 1      | 00:00 - 00:45 (45 dtk) | Webcam Wajah Penuh / Layar Cover   |
| Bagian 2      | 00:45 - 02:00 (75 dtk) | VS Code (Code Walkthrough)         |
| Bagian 3      | 02:00 - 03:30 (90 dtk) | Terminal Node.js & Browser App     |
| Bagian 4      | 03:30 - 04:15 (45 dtk) | Webcam Wajah / Closing Slide       |
+---------------+------------------------+------------------------------------+
```

---

### BAGIAN 1: PERKENALAN IDENTITAS MAHASISWA (00:00 - 00:45)
**Visual di Layar:**
Tampilkan wajah mahasiswa (kamera depan) dengan sikap sopan dan rapi, atau layar pembuka yang memuat nama, NIM, dan judul Tugas 2.

**Teks yang Diucapkan (Audio):**
> *"Halo, assalamu’alaikum warahmatullahi wabarakatuh.*
> 
> *Salam sejahtera bagi kita semua, Om Swastiastu, Namo Buddhaya, Salam Kebajikan.*
> 
> *Yang terhormat Bapak/Ibu Tutor Pembimbing Mata Kuliah Pemrograman Berbasis Perangkat Bergerak (MSIM4401), serta rekan-rekan mahasiswa Universitas Terbuka yang saya banggakan.*
> 
> *Perkenalkan, nama saya **M. RIDUAN**, NIM **053660074**, mahasiswa Program Studi **S1 Sistem Informasi**, UPBJJ Universitas Terbuka **Banjarmasin**.*
> 
> *Pada kesempatan kali ini, saya akan mendemonstrasikan pelaksanaan dan hasil pengerjaan **Tugas 2 Praktikum Aktivitas Belajar 8**, yaitu membuat proyek aplikasi untuk mengonsumsi dan menampilkan data prakiraan cuaca (waktu pengukuran dan temperatur per jam dalam derajat Celsius) dari REST API online Open-Meteo untuk wilayah Jakarta.*
> 
> *Mari kita simak langkah-langkah praktikum dan demonstrasi programnya berikut ini."*

---

### BAGIAN 2: LANGKAH-LANGKAH PRAKTIK & AKTIVITAS MAHASISWA (00:45 - 02:00)
**Visual di Layar:**
Tampilkan Visual Studio Code. Arahkan mouse ke file `weather_api.ts` dan `index.html`. Perlihatkan struktur folder `Tugas 2`.

**Teks yang Diucapkan (Audio):**
> *"Baik, sekarang kita masuk ke langkah-langkah praktik yang telah saya lakukan.*
> 
> *Pertama, kita mempersiapkan lingkungan kerja menggunakan Node.js dan TypeScript serta antarmuka web responsif berbasis HTML5, CSS3, dan JavaScript.*
> 
> *Kedua, mari kita perhatikan URL API yang diberikan pada soal tugas, yaitu: `https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m`.*
> *API ini mengembalikan respon berformat JSON yang merepresentasikan prakiraan cuaca wilayah Jakarta pada koordinat lintang minus 6,2 dan bujur 106,8.*
> 
> *Ketiga, di file `weather_api.ts`, saya mendefinisikan tipe data menggunakan TypeScript interface: ada `HourlyData` untuk menampung array `time` dan `temperature_2m`, serta `HourlyUnits` untuk satuannya.*
> 
> *Proses pengambilan data dilakukan secara asinkron menggunakan fungsi bawaan `fetch()` dengan `async/await` yang dibungkus blok `try-catch` untuk penanganan galat (error handling).*
> 
> *Setelah data JSON berhasil diambil, program mengekstrak data waktu dan suhu, kemudian memformatnya ke dalam format tabel rapi. Di sini, program menampilkan 10 data pertama sesuai ketentuan tugas, lengkap dengan statistik suhu minimum, maksimum, dan rata-rata.*
> 
> *Selain script CLI TypeScript, saya juga merancang antarmuka mobile-responsive di file `index.html` dengan desain kartu modern mirip Ionic Framework, agar data cuaca dapat dilihat oleh pengguna smartphone dengan sangat mudah dan interaktif."*

---

### BAGIAN 3: HASIL DAN ANALISA PRAKTIK (02:00 - 03:30)
**Visual di Layar:**
1. Eksekusi terminal: Jalankan perintah `node --experimental-strip-types --no-warnings weather_api.ts` di terminal VS Code. Perlihatkan tabel ASCII 10 data pertama dan statistiknya yang muncul secara instan.
2. Buka Browser: Tampilkan file `index.html` yang terbuka di Chrome/Edge. Tunjukkan tabel 10 data pertama, badge suhu, toggle untuk melihat semua data, kartu informasi koordinat, dan responsivitas saat mode inspeksi mobile (F12).

**Teks yang Diucapkan (Audio):**
> *"Sekarang kita masuk ke pengujian hasil dan analisa praktikum.*
> 
> *(Sambil mengetik / menjalankan di terminal)*:
> *Dapat kita lihat di terminal, saat saya menjalankan perintah `node --experimental-strip-types --no-warnings weather_api.ts`, aplikasi berhasil terhubung dan memuat data prakiraan cuaca Jakarta.*
> 
> *Data cuaca berhasil diparse dan ditampilkan secara rapi. Terlihat 10 baris data pertama, dimulai dari waktu 00:00 dengan suhu 26,8 derajat Celsius hingga jam 09:00 dengan suhu 29,2 derajat Celsius, serta suhu tertinggi mencapai 33,8 derajat Celsius pada jam 05:00. Program juga menghitung suhu rata-rata 10 jam pertama sebesar 30,5 derajat Celsius.*
> 
> *(Sambil beralih ke jendela browser `index.html`)*:
> *Selanjutnya, ini adalah tampilan antarmuka pengguna pada browser. Desainnya mengadopsi standar aplikasi mobile perangkat bergerak dengan kartu informasi status koneksi, koordinat Jakarta (-6.2, 106.8), zona waktu GMT+0, serta tabel responsif.*
> *Tiap baris menampilkan nomor indeks, waktu pengukuran yang telah diformat ramah pengguna, dan nilai temperatur lengkap dengan indikator warna visual.*
> *Terdapat pula tombol interaktif untuk beralih antara menampilkan 10 data pertama sesuai instruksi soal atau menampilkan seluruh 168 jam data prakiraan sepekan.*
> 
> *Analisa dari praktikum ini membuktikan bahwa arsitektur REST API dengan format JSON sangat efisien untuk aplikasi mobile, karena ukuran payload-nya ringan, tidak membebani kuota data seluler, dan pengolahan data array paralel `time` serta `temperature_2m` dapat dipetakan secara presisi berpasangan per indeks waktu."*

---

### BAGIAN 4: KATA-KATA PENUTUP DARI MAHASISWA (03:30 - 04:15)
**Visual di Layar:**
Arahkan kembali ke webcam wajah mahasiswa secara penuh atau tampilan penutup yang memuat ringkasan identitas dan ucapan terima kasih.

**Teks yang Diucapkan (Audio):**
> *"Demikianlah pemaparan hasil pengerjaan Tugas 2 Praktikum Pemrograman Berbasis Perangkat Bergerak Aktivitas Belajar 8 ini saya sampaikan.*
> 
> *Seluruh source code program, dokumentasi langkah kerja, serta laporan tertulis lengkap telah saya siapkan dan unggah pada sistem elearning Universitas Terbuka.*
> 
> *Saya mengucapkan terima kasih yang sebesar-besarnya kepada Bapak/Ibu Tutor atas bimbingan dan arahannya selama perkuliahan ini. Mohon maaf apabila terdapat kekurangan dalam penyampaian demonstrasi ini.*
> 
> *Wabillahi taufiq wal hidayah, wassalamu’alaikum warahmatullahi wabarakatuh. Tetap semangat belajar dan salam Universitas Terbuka!"*

---

### RINGKASAN CHECKLIST KELENGKAPAN SEBELUM UPLOAD:
1. [x] Video berdurasi 3-5 menit berformat MP4 (Full HD 1080p disarankan).
2. [x] Upload video ke YouTube (setel ke **Unlisted** atau **Public**) atau Google Drive (akses: **Anyone with the link can view / Siapa saja yang memiliki link dapat melihat**).
3. [x] Salin link URL video ke dalam file Laporan Tugas 2 (`.docx` / `.pdf`) pada kolom yang telah disediakan.
4. [x] Upload berkas Laporan dan Source Code ke portal Tugas e-learning UT.
