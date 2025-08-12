// Level 6: Starting Express JS

const express = require('express');
const app = express();
const PORT = 3000;

// Route default
app.get('/', (req, res) => {
    res.send("<h1>Haloooww dari Level 6 🚀</h1><p>Ini server pertamakuuh!!</p>");
});

// Route JSON
app.get('/data', (req, res) => {
    res.json({
        nama: "Mijaann",
        level: 6,
        pesan: "Express.js ezet bet jir"
    });
});

// Route PORT
app.listen(PORT, () => {
    console.log(`Server ini berjalan di http://localhost:${PORT}`);
});