const express = require('express');
const app = express();

// Route utama
app.get('/', (req, res) => {
    res.send("Haloww dunia express.js!");
    // res.json({ pesan: "Selamat datang di Express API!" });
});

// Nyalakan server 
app.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
})