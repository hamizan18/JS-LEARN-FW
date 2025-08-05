// Logic Todo
const fs = require('fs');
const prompt = require('prompt-sync')();

const loadData = () => 
{
    const data = fs.readFileSync("todoDB.json", "utf-8");
    return JSON.parse(data);
};

const simpanData = (data) =>
{
    fs.writeFileSync("todoDB.json", JSON.stringify(data, null, 2));
};

const tambahTugas = (todoList) => 
{
    let addTugas = prompt("Masukkan tugas: ");
    todoList.push({
        tugas: addTugas,
        waktu: new Date().toLocaleString()
    });
    simpanData(todoList);
};

const tampilkanTugas = (todoList) => 
{
    console.log(`Jumlah tugas: ${todoList.length}`);
    for(let i = 0; i < todoList.length;i++)
    {
        console.log(`No. ${i+1}: ${todoList[i].tugas} (${todoList[i].waktu})`);
    }
};

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
    simpanData(todoList);
};

const updateTugas = (todoList) => 
{
    let NoTugas = prompt(`Edit tugas nomor? (1-${todoList.length}): `);
    if (NoTugas < 1 || NoTugas > todoList.length || isNaN(NoTugas))
    {
        console.log(`Tidak valid, hanya bisa dari 1 - ${todoList.length}: `);
        return;
    }
    let editTugas = prompt("Masukkan tugas baru: ");
    todoList.splice(NoTugas-1, 1, {
        tugas: editTugas,
        waktu: new Date().toLocaleString()
    });
    console.log("Tugas Berhasil diedit! ");
    simpanData(todoList);
};

module.exports =
{
    loadData,
    simpanData,
    tambahTugas,
    tampilkanTugas,
    hapusTugas,
    updateTugas
};