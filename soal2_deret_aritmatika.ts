/**
 * ============================================================================
 * SOAL 2: DERET ARITMATIKA DARI NIM
 * ============================================================================
 * Mahasiswa : M. RIDUAN
 * NIM       : 053660074
 * Aturan    : - 2 digit terakhir NIM = angka awal deret (a).
 *             - Digit ke-3 dari belakang (+ 1 jika 0) = beda / step (b).
 *             - Cetak 10 angka pertama dari deret aritmatika tersebut.
 * 
 * NIM 053660074:
 * - 2 digit terakhir = 74 -> start dari 74.
 * - Digit ke-3 dari belakang = 0 -> 0 + 1 = 1 step.
 * Output: 74, 75, 76, 77, 78, 79, 80, 81, 82, 83
 * ============================================================================
 */

const nim: string = "053660074";
const awal: number = Number(nim.slice(-2)); // Ambil 2 digit terakhir NIM sebagai angka awal deret
const beda: number = Number(nim.slice(-3, -2)) + 1; // Ambil digit ke-3 dari belakang (+1 jika 0) sebagai beda / step

const deret: number[] = []; // Array untuk menyimpan deret aritmatika
for (let i: number = 0; i < 10; i++) {
    deret.push(awal + (i * beda)); // Hitung angka deret dan tambahkan ke array
}

console.log(deret.join(", ")); // Cetak deret aritmatika sebagai string dengan koma