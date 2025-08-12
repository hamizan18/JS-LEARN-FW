// Sama tpi Pake express + JSON

const express = require('express');
const fs = require('fs/promises');
const app = express();
const PORT = 3000;

// Route defaul (HTML)
app.get('/', (req, res) => {
    res.send("<h1>Hai duniaa🚀</h1><p>Ini pake server Express + JSON</p>")
});

// Route JSON langsung dri file data.json nya
app.get('/users', async (req, res) => {
    try {
        const data = await fs.readFile('data.json', 'utf-8');
        const users = JSON.parse(data);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: "Gagal Membaca File.. "});
    }
});


app.listen(PORT, () => {
    console.log(`Server ini berjalan di http://localhost:${PORT}`);
});