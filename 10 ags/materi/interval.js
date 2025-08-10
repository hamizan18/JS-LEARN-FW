function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function lomding(){
    const frames = ['|', '/', '-', '\\'];
    let i = 0;
    return setInterval(() => {
        process.stdout.write(`\r${frames[i++ % frames.length]} Loading..`);
    }, 100);
}

async function main(){

    console.log("Mencari...");

    const loading = lomding();
    await delay(2500);
    clearInterval(loading);
    console.log("\rSyudone!!");
}
main();
// /r = dipake disatu baris, baris sebelumnya bakal lenyap ditimpa yg baru