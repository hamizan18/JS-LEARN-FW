const fs = require('fs/promises');

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main(){

    let progress = 0;
    const loading = setInterval(() => {
        progress += 1;
        process.stdout.write(`\rDownloading.. ${progress}%`);
        if(progress >= 100){
            clearInterval(loading);
            console.log("\nDownload selesai!\n");
        }
    }, 40);

    await delay(40 * 100 + 100);

    await delay(1000);

    const data = await fs.readFile('data.json', 'utf-8');
    const users = JSON.parse(data);

    console.log("📂 Data user:");
    for(let user of users){
        console.log(`Nama: ${user.nama}, Email: ${user.email}.`);
        await delay(1000);
    }
    console.log("\nSelesai semua proses!");
}
main().catch(err => console.log("Error: ", err));