const hero = {
    nama: "Ryu",
    power: "Hadouken"
};

// H = hero;
// const nama = H.nama;
// const power = H.power;
// SAMA DENGAN 
const {nama, power} = hero;

const panggil = (nama, power) => 
{
    console.log(`${nama} Mempunyai kekuatan ${power}`);
}

panggil(nama, power);