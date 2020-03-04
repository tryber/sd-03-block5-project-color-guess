const balls = document.querySelectorAll('.ball');
const arrayCores = ['', '', '', '', '', ''];
const answer = document.querySelector('#answer');
const rgbColor = document.querySelector('#rgb-color');

function corAleatoria() {
  const hexadecimais = '0123456789ABCDEF';
  let cor = '#';
  for (let i = 0; i < 6; i += 1) {
    cor += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return cor;
}

window.onload = function() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = corAleatoria();
    arrayCores[i] += balls[i].style.backgroundColor;
  }
  const cor = Math.round(Math.random() * (arrayCores.length - 1));
  answer.innerHTML = 'Escolha uma cor';
  rgbColor.innerHTML = arrayCores[cor];
};

function adivinhaCor (i) {
    balls[i].addEventListener('click', function () {
        if(balls[i].style.backgroundColor == rgbColor.innerHTML) {
            answer.innerHTML = 'Acertou!';
        } else {
            answer.innerHTML = 'Errou! Tente novamente!';
        }
    });
}

for (let i = 0; i < arrayCores.length; i+= 1) {
    adivinhaCor(i);
}
