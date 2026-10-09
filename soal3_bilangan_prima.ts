/**
 * ============================================================================
 * SOAL 3: BILANGAN PRIMA DARI NIM
 * ============================================================================
 * Mahasiswa : M. RIDUAN
 * NIM       : 053660074
 * Aturan    : Ambil 2 digit terakhir NIM dan tambahkan 10 sebagai batas akhir.
 *             Tampilkan semua bilangan prima dari 1 sampai batas tersebut.
 * 
 * NIM 053660074:
 * - 2 digit terakhir = 74
 * - Batas akhir = 74 + 10 = 84
 * Output: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83
 * ============================================================================
 */

const nim: string = "053660074";
const batas: number = Number(nim.slice(-2)) + 10; // Ambil 2 digit terakhir NIM dan tambahkan 10 sebagai batas akhir
const prima: number[] = []; // Array untuk menyimpan bilangan prima
for (let i: number = 2; i <= batas; i++) {
    let isPrima: boolean = true; // Asumsikan i adalah bilangan prima
    for (let j: number = 2; j * j <= i; j++) {
        if (i % j === 0) { // Jika i habis dibagi j, maka i bukan bilangan prima
            isPrima = false;
            break; // Keluar dari loop jika ditemukan faktor
        }
}
    if (isPrima) prima.push(i); // Tambahkan i ke array prima jika i adalah bilangan prima
}
console.log(prima.join(", ")); // Cetak bilangan prima sebagai string dengan koma

