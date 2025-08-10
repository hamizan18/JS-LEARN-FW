const fs = require('fs/promises');

// Fungsi delay pake promises
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function spinner(){
    const frames = ['|', '/', '-', '\\'];
    let i = 0;
    return setInterval(() => {
        process.stdout.write(`\r${frames[i++ % frames.length]} Loading..`);
    }, 100);
}

async function main(){
    console.log("Mengambil data user..");

    const spin = spinner();
    await delay(2000);
    clearInterval(spin);
    console.log("\rData siap!");

    await delay(500) // Tunggu 500 milidetik

    // // Ambil data dari JSON
    const data = await fs.readFile('data.json', 'utf-8');
    const users = JSON.parse(data);

    // // Tampilkan satu persatu menggunakan for berdasarkan users dengan jeda
    for(let user of users){
        console.log(`Nama: ${user.nama}, Email: ${user.email}`);
        await delay(400);
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