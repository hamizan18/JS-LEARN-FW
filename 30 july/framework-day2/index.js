const express = require('express');
const app = express();

// middleware biar bisa ambil data json dari body
app.use(express.json());
let todos = [];
let idCounter = 1;

// Route 1: Halaman utama
app.get('/', (req, res) => {
    res.send("Hello brows!");
    // res.json({ pesan: "Welcome to Express API!" });
});

// Route 2: Halaman tentang
app.get('/about', (req, res) => {
    res.send('Ini halaman tentangku, dibuat oleh Hamizan sang Ninja backend!');
});

// Route 3: Path dinamis
app.get('/halo/:nama', (req, res) => {
    const nama = req.params.nama;
    res.send(`Halo, ${nama}! Selamat datang di Express API!`);
});

// Route 4: POST - nerima data dari client
app.post('/pesan', (req, res) => {
    const pesan = req.body.pesan;
    res.send(`Pesanmu: "${pesan}" sudah diterima!`);
});

// Route 5: ucapan
app.get('/ucapan/:waktu/:nama', (req, res) => {
    const waktu = req.params.waktu;
    const nama = req.params.nama;
    res.send(`Selamat ${waktu}, ${nama}!`);
});

// Route CRUD Todo
// Route 6: Liat  Todo
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Route 7: Tambah Todo
app.post('/todos', (req, res) => {
    const { tugas } = req.body;
    const todoBaru = {
        id: idCounter++,
        tugas,
        selesai: false
    };
    todos.push(todoBaru);
    res.json(todoBaru);
});

// Route 8: Update Todo
app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { tugas, selesai } = req.body;

    const todo = todos.find(t => t.id === id);
    if (!todo) return res.status(404).json({ pesan: 'Todo tidak ditemukan' });

    if (tugas !== undefined) todo.tugas = tugas;
    if (selesai !== undefined) todo.selesai

    res.json(todo);
});

// Route 9: Hapus Todo
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== id);
    res.json({ pesan: 'Todo berhasil dhapus' });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});