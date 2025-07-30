const express = require('express');
const app = express();

app.use(express.json());
// let notes = [];
// let idCounter = 1;
const port = "http://localhost:3000";

// Route 1: Route Dasar
app.get('/', (req, res) => {
    res.send("Selamat Datang di Ninja Notes API!");
});

// Route 2: Tentang
app.get('/about', (req, res) => {
    res.send("Haloo kenalin nama aku Hamizan, aku seorang Backend Developer Terhebat di masa depan! Aku juga senang dan suka sekali membuat API yang keren-keren.");
});

// Route 3: Path Dinamis (Nama)
app.get('/halo/:nama', (req, res) => {
    const nama = req.params.nama;
    res.send(`Halo, ${nama}!`);
});

// Tampilin notes
app.get('/notes', (req, res) => {
    res.json(notes);
});

// // Tampilin salah satu note
app.get('/notes/:id', (req, res) => {
    res.json(notes.find(note => note.id === parseInt(req.params.id)));
});

// // Tambah notes
app.post('/notes', (req, res) => {

});

// Server
app.listen(3000, () => {
    console.log(`Server berjalan di ${port}`);
});