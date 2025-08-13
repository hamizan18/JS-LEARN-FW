const express = require('express');
const fs = require('fs/promises');
const chalk = require('chalk');
const app = express();
const PORT = 3000;

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
};

function loading() {
    const frames = [
        'Mencari    ',
        ' Mencari   ',
        '  Mencari  ',
        '   Mencari ',
        '    Mencari',
        '   Mencari ',
        '  Mencari  ',
        ' Mencari   ',
    ];
    let i = 0;
    return setInterval(() => {
        process.stdout.write(`\r${frames[i++ % frames.length]}`);
    }, 120);
};

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

app.get('/about', (req, res) => {
    res.send('<h1>Nama saya Hamizan</h1><p>Iya kita semua juga tau yahahha</p>');
});

app.listen(PORT, async () => {
    const loadings = loading();
    await delay(2800);
    clearInterval(loadings);
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    console.log(chalk.blue(`Server sedang dijalankan di http://localhost:${PORT}`));
});