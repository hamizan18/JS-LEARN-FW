let count = 1;
let timer = setInterval(() => {
    console.log("Itung: ", count++);
    if (count > 100) clearInterval(timer);
}, 100);