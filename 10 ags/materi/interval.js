function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function lomding(){
    let count = 0;
    setInterval(() => {
        process.stdout.write(`\rProgress: ${count++}/10`);
        if (count > 10) return setInterval();
    }, 500);
}

async function main(){

    const loading = lomding();
    console.log(loading);
    clearInterval(loading);
    await delay(300);
        console.log("\nSyudone!!");
}
main();
// /r = dipake disatu baris, baris sebelumnya bakal lenyap ditimpa yg baru