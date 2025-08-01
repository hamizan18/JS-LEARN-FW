const prompt = require('prompt-sync')();

let pilihan = 0;

while(pilihan !== 3){
console.log("===== MENU =====");
console.log("1. Konversi Nilai ke Grade");
console.log("2. Cek Status Umur");
console.log("3. Keluar");
const choice = parseInt(prompt("Masukkan pilihan: "));

if (choice === 1) {
    const nilai = parseInt(prompt("Masukkan Nilai: "));

    if (nilai < 0 || nilai > 100) {
        console.log("Nilai tidak valid. Harus antara 0 dan 100.");
        continue;
    } else if (nilai >= 90 && nilai <= 100) {
        console.log("Grade: A");
    } else if (nilai >= 80 && nilai < 90) {
        console.log("Grade: B");
    } else if (nilai >= 70 && nilai < 80) {
        console.log("Grade: C");
    } else if (nilai >= 60 && nilai < 70) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }
} else if (choice === 2) {
    const umur = parseInt(prompt("Masukkan Umur: "));

    if (umur < 1) {
        console.log("Umur tidak valid. Harus > 0.");
        process.exit(1);
    }else if (umur < 12) {
        console.log("Anak-anak");
    } else if (umur < 18) {
        console.log("Remaja");
    } else if (umur < 60) {
        console.log("Dewasa");
    } else {
        console.log("Lansia");
    }
} else if (choice === 3) {
    console.log("Terima kasih telah menggunakan program ini.");
}
    pilihan = choice;
}