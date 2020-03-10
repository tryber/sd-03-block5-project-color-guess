const iniciar = document.getElementById('reset-game');
const answer = document.getElementById('answer');
const score = document.getElementById('score');
iniciar.addEventListener('click', paint);

function randColor() {
  const a = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const c = Math.floor(Math.random() * 256);
  const color = 'RGB('+a+', '+b+', '+c+')';

  return color;
}

function acertou() {
  answer.innerHTML = 'Acertou!';
  score.innerHTML++;
  score.innerHTML++;
  score.innerHTML++;
}

function errou() {
  answer.innerHTML = 'Errou! Tente novamente!';
}

function paint() {
  score.innerHTML = 0;
  answer.innerHTML = 'Escolha uma cor';
  const rgb = document.getElementById('rgb-color');
  const ball = document.getElementsByClassName('ball');

  for (let i=0; i<ball.length; i++) {
    ball[i].style.backgroundColor = randColor();
  }
  // for(let i in ball) {
  //   ball[i].style.backgroundColor = randColor();
  // }
  const a = Math.floor(Math.random() * 5);
  rgb.innerHTML = document.getElementsByClassName('ball')[a].style.backgroundColor;

  for (let i=0; i<ball.length; i++) {
    if (ball[i].style.backgroundColor === rgb.innerHTML) {
      ball[i].addEventListener('click', acertou);
    }else {
      ball[i].addEventListener('click', errou);
    }
  }
}

paint();

