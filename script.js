const balls = document.querySelectorAll('#ball');
let arrayCores = ['', '', '', '', '', ''];
const answer = document.querySelector('#answer')
const rgbColor = document.querySelector('#rgb-color')

function corAleatoria() {
  const hexadecimais = '0123456789ABCDEF';
  let cor = '#';
  for (var i = 0; i < 6; i++) {
    cor += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return cor;
}

window.onload = function () {
    for(let i = 0; i < balls.length; i += 1){
        balls[i].style.backgroundColor = corAleatoria();
        arrayCores[i] += balls[i].style.backgroundColor;
    }
    let cor = Math.round(Math.random() * (arrayCores.length - 1));
    answer.innerHTML = 'Escolha uma cor';
    rgbColor.innerHTML = arrayCores[cor];
}
