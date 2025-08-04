const prompt = require('prompt-sync')();
let todoList = [];

const tambahTugas = (todoList) => 
{
    let addTugas = prompt("Masukkan tugas: ");
    todoList.push(addTugas);
}
const tampilkanTugas = (todoList) => 
{
    console.log(`Jumlah tugas: ${todoList.length}`);
    for(let i = 0; i < todoList.length;i++)
    {
        console.log(`No. ${i+1}: ${todoList[i]}`);
    }
}
const hapusTugas = (todoList) => 
{
    let delTugas = prompt(`\n\nHapus tugas nomor? (1-${todoList.length}): `);
    if (delTugas < 1 || delTugas > todoList.length || isNaN(delTugas))
    {
        console.log(`Tidak valid, hanya bisa dari 1 - ${todoList.length}`);
        return;
    }
    todoList.splice(delTugas-1, 1);
    console.log("Tugas berhasil dihapus! ");
}
const updateTugas = (todoList) => 
{
    let NoTugas = prompt(`\n\nEdit tugas nomor? (1-${todoList.length}): `);
    if (NoTugas < 1 || NoTugas > todoList.length || isNaN(NoTugas))
    {
        console.log(`Tidak valid, hanya bisa dari 1 - ${todoList.length}: `);
        return;
    }
    let editTugas = prompt("Masukkan tugas baru: ");
    todoList.splice(NoTugas-1, 1, editTugas);
    console.log("Tugas Berhasil diedit! ");
}

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
