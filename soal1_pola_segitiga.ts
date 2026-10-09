/**
 * ============================================================================
 * SOAL 1: POLA SEGITIGA ANGKA DARI NIM
 * ============================================================================
 * Mahasiswa : M. RIDUAN
 * NIM       : 053660074
 * Aturan    : Ambil digit terakhir NIM sebagai tinggi segitiga.
 *             NIM 053660074 -> Digit terakhir = 4 -> Tinggi segitiga = 4.
 * Output yang diharapkan:
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 4
 * ============================================================================
 */

const nim: string = "053660074";
const tinggi: number = Number(nim.slice(-1)); // Ambil digit terakhir NIM sebagai tinggi segitiga

let pola: string = "";
for (let i: number = 1; i <= tinggi; i++) {
    pola += i + " "; // Tambahkan angka ke pola
    console.log(pola.trim()); // Cetak pola tanpa spasi di akhir
}