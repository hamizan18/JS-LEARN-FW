const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const sayurRebus = async () => 
{
    console.log("Merebus sayur..");
    console.log("Tunggu 2 Detik..");
    console.log("1..");
    await delay(1000);
    console.log("2..");
    await delay(1000);
    console.log("Sayur matang! 🍲");
}

sayurRebus();