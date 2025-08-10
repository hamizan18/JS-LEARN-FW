function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function lomding(){
    let i = 0;
    return setInterval(() => {
        process.stdout.write(`\rProgress: ${i++}/10`);
    }, 200);
}

async function main(){

    console.log("Mencari...");

    const loading = lomding();
    clearInterval(loading);
    console.log("\rSyudone!!");
}
main();
// /r = dipake disatu baris, baris sebelumnya bakal lenyap ditimpa yg baru