// vars
const parRgbAdiv = document.querySelector('#rgb-color');
const balls = document.querySelectorAll('.ball');

// functions

function gerarCorAl() {
    const set1 = Math.floor((Math.random() * 255) + 1);
    const set2 = Math.floor((Math.random() * 255) + 1);
    const set3 = Math.floor((Math.random() * 255) + 1);
    const cor = `rgb(${set1},${set2},${set3})`;
    return cor
}

function setCoresAl(balls) {
    const sorteiaBola = Math.floor((Math.random() * 6));
    parRgbAdiv.innerHTML = gerarCorAl();
}

// event listeners

// onload
// parRgbAdiv.innerHTML = gerarCorAl();
