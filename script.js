// vars
const parRgbAdiv = document.querySelector('#rgb-color');
const balls = document.querySelectorAll('.ball');
const answear = document.querySelector('#answer');

// functions

function gerarCorAl() {
    const set1 = Math.floor((Math.random() * 255) + 1);
    const set2 = Math.floor((Math.random() * 255) + 1);
    const set3 = Math.floor((Math.random() * 255) + 1);
    const cor = `rgb(${set1}, ${set2}, ${set3})`;
    return cor
}

function setCoresAl(balls,parRgbAdiv) {
    const sorteiaBola = Math.floor((Math.random() * 6));
    balls[sorteiaBola].style.backgroundColor = parRgbAdiv.innerHTML;
    for(let i = 0; i < balls.length; i+=1) {
        if(!balls[i].style.backgroundColor) {
            balls[i].style.backgroundColor = gerarCorAl();
        }
    }
}

function verificaCor(event) {
    console.log(parRgbAdiv.innerHTML);
    console.log(event.currentTarget.style.backgroundColor);
    if(event.currentTarget.style.backgroundColor == parRgbAdiv.innerHTML) {
        answear.innerHTML = 'Acertou!';
    } else {
        answear.innerHTML = 'Errou! Tente novamente!';
    }
}

function setEventListeners(balls) {
    for(let i = 0; i < balls.length; i += 1 ) {
        balls[i].addEventListener('click',verificaCor);
    }
}

// event listeners

setEventListeners(balls);



// chamada inicial
parRgbAdiv.innerHTML = gerarCorAl(),
setCoresAl(balls,parRgbAdiv);