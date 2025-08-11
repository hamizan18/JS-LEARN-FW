const fs = require('fs/promises');

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function loadings(){
    const loadData = ['Loading', 'Loading.', 'Loading..', 'Loading...'];
    let i = 0;
    return setInterval(() => {
        process.stdout.write(`\r${loadData[i++ % loadData.length]}`);
    }, 300);
}

async function main(){

    const loading = loadings();
    await delay(2000);
    clearInterval(loading);
    console.log("\rDownload selesai!");

    await delay(2000);

    const data = await fs.readFile('data.json', 'utf-8');
    const users = JSON.parse(data);

    console.log("\n📂 Data user:");
    for(let user of users){
        console.log(`Nama: ${user.nama}, Email: ${user.email}.`);
        await delay(1000);
    }
    console.log("\nSelesai semua proses!");
}
main().catch(err => console.log("Error: ", err));