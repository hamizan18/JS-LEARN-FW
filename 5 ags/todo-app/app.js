// Main File
const prompt = require('prompt-sync')();
const { loadData, simpanData, tambahTugas, tampilkanTugas, hapusTugas, updateTugas } = require('./todoController');
let todoList = loadData();

let pilihan = true;

while (pilihan === true){
    console.log("\n=== To Do List ===");
    console.log("1. Tambah Item");
    console.log("2. Lihat semua tugas");
    console.log("3. Hapus tugas berdasarkan nomor");
    console.log("4. Edit Tugas");
    console.log("5. Keluar")
    let input = Number(prompt("Masukkan pilihan (1-5): "));

    if (input === 1){
        tambahTugas(todoList);
    } else if (input === 2){
        tampilkanTugas(todoList);
    } else if (input === 3){
        hapusTugas(todoList);
    } else if (input === 4){
        updateTugas(todoList);
    } else if (input === 5){
        pilihan = false;
        console.log("\nThanks for using!");
    } else {
        console.log("\nTidak valid! Cuma bisa pilihan 1-5");
    }
}

// .splice = index 1, hapus 2 (index 1, 2), ganti 'ayam','mangga';
