let count = 0;
let timer = setInterval(() => {
    console.log("Woi!", count++);
    if (count > 5) clearInterval(timer);
}, 600);