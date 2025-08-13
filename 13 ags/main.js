const express = require('express');
const fs = require('fs/promises');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Haii sekaiii</h1><p>Namakuu mijann salken yhh..</p>');
});

app.get('/data', async (req, res) => {
    try {
        const data = await fs.readFile('data.json', 'utf-8');
        const users = JSON.parse(data);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Gagal membaca file.'});
    }
});

app.listen(PORT, () => {
    console.log(`Server sedang dijalankan di http://localhost:${PORT}`);
});