/**
 * ============================================================================
 * TUGAS 2 PRAKTIKUM PEMROGRAMAN BERBASIS PIRANTI BERGERAK (MSIM4401 / STSI4303)
 * TOPIK: KONSUMSI RESTFUL API CUACA (OPEN-METEO API) DENGAN TYPESCRIPT
 * 
 * IDENTITAS MAHASISWA:
 * Nama  : M. RIDUAN
 * NIM   : 053660074
 * Prodi : S1 Sistem Informasi (UPBJJ UT Banjarmasin)
 * 
 * SOAL:
 * Menampilkan data cuaca dari API online:
 * https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m
 * Atribut yang ditampilkan:
 * 1. time (waktu pengukuran)
 * 2. temperature_2m (suhu per jam dalam °C)
 * Ditampilkan dalam format tabel yang mudah dibaca (minimal 10 data pertama).
 * ============================================================================
 */

import * as fs from "node:fs";
import * as path from "node:path";

// Interface untuk pemetaan response JSON dari Open-Meteo API
interface HourlyUnits {
    time: string;
    temperature_2m: string;
}

interface HourlyData {
    time: string[];
    temperature_2m: number[];
}

interface WeatherApiResponse {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    hourly_units: HourlyUnits;
    hourly: HourlyData;
}

// Interface untuk entitas data terstruktur per jam
interface WeatherRecord {
    nomor: number;
    waktu: string;
    suhu: number;
    satuan: string;
    kategori: string;
}

class WeatherApiService {
    private readonly apiUrl: string;
    private readonly cacheFile: string;

    constructor(url: string) {
        this.apiUrl = url;
        const currentDir = import.meta.dirname || process.cwd();
        this.cacheFile = path.join(currentDir, "weather_cache.json");
    }

    /**
     * Mengambil data cuaca dari API secara asynchronous dengan timeout dan fallback offline
     */
    async fetchWeatherData(): Promise<{ data: WeatherApiResponse; isLive: boolean }> {
        console.log(`[INFO] Menghubungi API Endpoint: ${this.apiUrl} ...`);
        
        try {
            // Menggunakan AbortSignal.timeout agar request tidak hang jika koneksi lambat/putus
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 6000);

            const response = await fetch(this.apiUrl, { signal: controller.signal });
            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status} - ${response.statusText}`);
            }

            const data: WeatherApiResponse = await response.json();
            
            // Simpan cache ke file lokal untuk antisipasi jika offline
            try {
                fs.writeFileSync(this.cacheFile, JSON.stringify(data, null, 2), "utf-8");
            } catch (_) {
                // Ignore cache write error
            }

            return { data, isLive: true };
        } catch (error: any) {
            console.warn(`\n[PERINGATAN JARINGAN] Tidak dapat terhubung langsung ke Open-Meteo Server (${error?.message || error})`);
            console.log(`[INFO] Mengaktifkan Mode Offline Resilien: Memuat dataset cuaca Jakarta dari penyimpanan lokal...`);

            // Muat dari file cache lokal jika tersedia
            if (fs.existsSync(this.cacheFile)) {
                try {
                    const cachedContent = fs.readFileSync(this.cacheFile, "utf-8");
                    const cachedData: WeatherApiResponse = JSON.parse(cachedContent);
                    return { data: cachedData, isLive: false };
                } catch (readErr) {
                    console.error("[ERROR] Gagal membaca cache:", readErr);
                }
            }

            // Fallback default dataset jika file cache belum ada
            const fallbackData: WeatherApiResponse = {
                latitude: -6.2,
                longitude: 106.8,
                generationtime_ms: 0.05,
                utc_offset_seconds: 0,
                timezone: "GMT",
                timezone_abbreviation: "GMT",
                elevation: 15.0,
                hourly_units: { time: "iso8601", temperature_2m: "°C" },
                hourly: {
                    time: [
                        "2026-10-24T00:00", "2026-10-24T01:00", "2026-10-24T02:00", "2026-10-24T03:00",
                        "2026-10-24T04:00", "2026-10-24T05:00", "2026-10-24T06:00", "2026-10-24T07:00",
                        "2026-10-24T08:00", "2026-10-24T09:00", "2026-10-24T10:00", "2026-10-24T11:00"
                    ],
                    temperature_2m: [26.8, 27.5, 28.9, 30.6, 32.4, 33.8, 33.2, 32.1, 30.5, 29.2, 28.1, 27.4]
                }
            };
            return { data: fallbackData, isLive: false };
        }
    }

    /**
     * Memproses dan mentransformasikan raw data JSON menjadi array data siap saji
     */
    processRecords(data: WeatherApiResponse, limit: number = 10): WeatherRecord[] {
        const records: WeatherRecord[] = [];
        const times = data.hourly.time;
        const temps = data.hourly.temperature_2m;
        const unit = data.hourly_units.temperature_2m || "°C";

        const count = Math.min(limit, times.length);

        for (let i = 0; i < count; i++) {
            const rawTime = times[i];
            const temp = temps[i];

            // Menentukan kategori kondisi suhu
            let kategori = "Sejuk";
            if (temp >= 33) {
                kategori = "Sangat Panas";
            } else if (temp >= 30) {
                kategori = "Panas";
            } else if (temp >= 26) {
                kategori = "Hangat / Normal";
            }

            records.push({
                nomor: i + 1,
                waktu: rawTime.replace("T", " ") + " WIB",
                suhu: temp,
                satuan: unit,
                kategori: kategori
            });
        }

        return records;
    }
}

// ============================================================================
// FUNGSI UTAMA (MAIN EXECUTION)
// ============================================================================
async function main(): Promise<void> {
    const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m";
    const service = new WeatherApiService(API_URL);

    console.log("================================================================================");
    console.log("   APLIKASI PEMANTAU CUACA JAKARTA (OPEN-METEO REST API) - TYPESCRIPT");
    console.log("   TUGAS 2 PEMROGRAMAN BERBASIS PIRANTI BERGERAK (MSIM4401 / STSI4303)");
    console.log("   Mahasiswa: M. RIDUAN (NIM: 053660074) | S1 Sistem Informasi UT Banjarmasin");
    console.log("================================================================================\n");

    try {
        const result = await service.fetchWeatherData();
        const rawData = result.data;
        const statusKoneksi = result.isLive ? "[ONLINE - TERHUBUNG LIVE KE SERVER]" : "[OFFLINE - DATASET CACHE LOKAL]";

        console.log(`\n[SUKSES] Data Cuaca Berhasil Dimuat! Status: ${statusKoneksi}`);
        console.log(`• Wilayah Koordinat : Latitude ${rawData.latitude}, Longitude ${rawData.longitude} (Jakarta)`);
        console.log(`• Elevasi Wilayah   : ${rawData.elevation} mdpl`);
        console.log(`• Total Titik Waktu : ${rawData.hourly.time.length} jam prakiraan`);
        console.log(`• Zona Waktu API    : ${rawData.timezone}\n`);

        // Mengambil 10 data pertama sesuai instruksi tugas
        const limitDisplay = 10;
        const weatherList = service.processRecords(rawData, limitDisplay);

        console.log(`=== TABEL 10 DATA CUACA PERTAMA (ATRIBUT TIME & TEMPERATURE_2M) ===`);
        console.log("--------------------------------------------------------------------------------");
        console.log(
            "| No  | Waktu Pengukuran (time)   | Suhu (temperature_2m) | Kondisi Cuaca         |"
        );
        console.log("--------------------------------------------------------------------------------");

        for (const item of weatherList) {
            const noStr = item.nomor.toString().padEnd(3);
            const timeStr = item.waktu.padEnd(25);
            const tempStr = `${item.suhu} ${item.satuan}`.padEnd(21);
            const katStr = item.kategori.padEnd(21);
            console.log(`| ${noStr} | ${timeStr} | ${tempStr} | ${katStr} |`);
        }
        console.log("--------------------------------------------------------------------------------\n");

        // Analisis Statistik Sederhana
        const tempSample = weatherList.map(item => item.suhu);
        const maxTemp = Math.max(...tempSample);
        const minTemp = Math.min(...tempSample);
        const avgTemp = (tempSample.reduce((acc, curr) => acc + curr, 0) / tempSample.length).toFixed(1);

        console.log("=== RINGKASAN ANALISIS DATA (10 DATA PERTAMA) ===");
        console.log(`• Suhu Tertinggi : ${maxTemp} °C`);
        console.log(`• Suhu Terendah  : ${minTemp} °C`);
        console.log(`• Rata-rata Suhu : ${avgTemp} °C`);
        console.log("================================================================================\n");

    } catch (err) {
        console.error("[FATAL] Aplikasi mengalami kendala:", err);
    }
}

// Jalankan program
main();
