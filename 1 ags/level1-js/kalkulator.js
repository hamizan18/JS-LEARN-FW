const prompt = require('prompt-sync')();

// Kalkulator Sederhana

let opsi = "y";

while(opsi === "y"){
    let angka1 = parseFloat(prompt("Masukkan angka pertama: "));
    let operator = prompt("Masukkan operator (+, -, *, /): ");
    let angka2 = parseFloat(prompt("Masukkan angka kedua: "));
    const angka_pertama = Number(angka1);
    const angka_kedua = Number(angka2);
    if(isNaN(angka_pertama) || isNaN(angka_kedua)) {
        console.log("Error, Masukin angka yang benar!");
        process.exit();
    }

    let hasil;

    switch(operator) {
        case "+":
            hasil = angka1 + angka2;
            break;
        case "-":
            hasil = angka1 - angka2;
            break;
        case "*":
            hasil = angka1 * angka2;
            break;
        case "/":
            hasil = angka1 / angka2;
            break;
        default :
            console.log("Error, harus isi operator yang benar!");
    }
    console.log(`Hasil: ${hasil}`);

    opsi = prompt("Mau hitung lagi? (y/n): ").toLowerCase();
}
process.exit();