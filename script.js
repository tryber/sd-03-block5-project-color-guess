const reset = document.getElementById('reset-game');
const answer = document.getElementById('answer');
const score = document.getElementById('score');
let acerto = 0;

function randColor() {
  const a = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const c = Math.floor(Math.random() * 256);
  const color = 'RGB(' + a + ', ' + b + ', ' + c + ')';
  
  return color;
}

function acertou() {
  answer.innerHTML = 'Acertou!';
  if (acerto == 0){
    score.innerText = Number(score.innerText)+3;
  } else {
    console.log('ja clicou');
  }
  acerto = 1;
}

function errou() {
  answer.innerHTML = 'Errou! Tente novamente!';
  // score.innerText = Number(score.innerText)-1;
}

function paint() {
  acerto = 0;
  answer.innerHTML = 'Escolha uma cor';
  const rgb = document.getElementById('rgb-color');
  const ball = document.getElementsByClassName('ball');

  for (let i=0; i<ball.length; i++) {
    ball[i].style.backgroundColor = randColor();
  }

  const a = Math.floor(Math.random() * 5);
  rgb.innerHTML = document.getElementsByClassName('ball')[a].style.backgroundColor;

  for (let i = 0; i < ball.length; i++) {
    if (ball[i].style.backgroundColor === rgb.innerHTML) {
      ball[i].addEventListener('click', acertou);
    } else {
      ball[i].addEventListener('click', errou);
    }
  }
}

reset.addEventListener('click', paint);
paint();
