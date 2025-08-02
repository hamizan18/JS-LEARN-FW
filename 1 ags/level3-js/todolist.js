const prompt = require('prompt-sync')();

while (true){
    console.log("=== To Do List ===");
    console.log("1. Tambah Item");
    console.log("2. Lihat semua tugas");
    console.log("3. Hapus tugas berdasarkan nomor");
    console.log("4. Edit Tugas");
    console.log("5. Keluar")
    const input = prompt("Masukkan pilihan (1-5): ");
    
    let todoList = [];
    if (input > 5 && input < 1) {console.log("Cuma bisa 1-5!"); break;}

    if (input === 1){
        tambahTugas(todoList);
    } else if (input === 2){
        tampilkanTugas(todoList);
    } else if (input === 3){
        hapusTugas(todoList);
    } else if (input === 4){
        updateTugas(todoList);
    } else if (input === 5){
        break;
    } else {
        pilihan = "Tidak valid! ";
        continue;
    }
}

const tambahTugas = (todoList) => 
{
    let addTugas = prompt("Masukkan tugas: ");
    todoList.push(addTugas);
}
const tampilkanTugas = (todoList) => 
{
    for(let i = 0; i < todoList.length;i++)
    {
        console.log(`No. ${i+1}: ${todoList[i]}`);
    }
}
const hapusTugas = (todoList) => 
{
    let delTugas = prompt(`Hapus tugas nomor? (1-${todoList.length+1}) `);
    todoList.splice(delTugas.length+1, 1);
    console.log("Tugas berhasil dihapus! ");
}
const updateTugas = (todoList) => 
{
    let NoTugas = prompt(`Edit tugas nomor? (1-${todoList.length+1}) `);
    let editTugas = prompt("Masukkan tugas baru: ");
    todoList.splice(NoTugas.length+1, 1, editTugas);
    console.log("Tugas Berhasil diedit! ");
}

// .splice = index 1, hapus 2 (index 1, 2), ganti 'ayam','mangga';
