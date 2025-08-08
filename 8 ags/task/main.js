const fs = require('fs/promises');

// Fungsi delay pake promises
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main(){
    console.log("Mengambil data user..");

    // Simulasi loading dengan setTimeout
    setTimeout(() => {
        console.log("Sedang mengetik..");
    }, 500);

    await delay(2000) // Tunggu 2 detik

    // Ambil data dari JSON
    const data = await fs.readFile('data.json', 'utf-8');
    const users = JSON.parse(data);

    // Efek async await DUAR
    await delay(1000);
    console.log("DUARRR MELEDAAGG");

    // Tampilkan satu persatu menggunakan for berdasarkan users dengan jeda
    for(let user of users){
        console.log(`Nama: ${user.nama}, Email: ${user.email}`);
        await delay(1000);
    }

    console.log("Syudone!");
}

main().catch(err => {
    if (err.code === 'ENOENT'){
        console.error("File data.json tidak ditemukan!");
    } else {
        console.error("Terjadi kesalahan: ", err.message);
    }
});