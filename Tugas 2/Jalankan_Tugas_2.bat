@echo off
title Tugas 2 Pemrograman Berbasis Perangkat Bergerak - M. RIDUAN (053660074)
color 0b
echo ===============================================================================
echo       TUGAS 2 PRAKTIKUM PEMROGRAMAN BERBASIS PERANGKAT BERGERAK (MSIM4401)
echo                       UNIVERSITAS TERBUKA - UPBJJ BANJARMASIN
echo ===============================================================================
echo  Nama : M. RIDUAN
echo  NIM  : 053660074
echo  Prodi: S1 Sistem Informasi (252)
echo  Topik: Konsumsi REST API Cuaca Open-Meteo (Jakarta Forecast)
echo ===============================================================================
echo.
echo [1/2] Menjalankan weather_api.ts di Terminal Node.js...
echo -------------------------------------------------------------------------------
node --experimental-strip-types --no-warnings "%~dp0weather_api.ts"
echo -------------------------------------------------------------------------------
echo.
echo [2/2] Membuka antarmuka aplikasi web cuaca di Web Browser (index.html)...
start "" "%~dp0index.html"
echo.
echo Aplikasi telah berhasil dijalankan!
echo Silakan periksa jendela browser dan hasil output terminal di atas.
echo.
pause
