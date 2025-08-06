const janji = new Promise((resolve, reject) => {
    let sukses = false;
    setTimeout(() => {
        sukses ? resolve("Berhasil!") : reject("Gagal!");
    }, 2000);
});

async function jalankan() {
    try {
        let hasil = await janji;
        console.log(hasil);
    } catch(err) {
        console.log("Error:", err);
    }
};
jalankan();