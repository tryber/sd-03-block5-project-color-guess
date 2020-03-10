const answer = document.getElementById('answer');
const score = document.getElementById('score');

function randomColor() {
  const color =
    'rgb(' +
    Math.floor(Math.random() * 256) +
    ', ' +
    Math.floor(Math.random() * 256) +
    ', ' +
    Math.floor(Math.random() * 256) +
    ')';
  return color;
}

function correct() {
  answer.innerHTML = 'Acertou!';
  score.innerText = Number(score.innerText) + 3;
}

function wrong() {
  answer.innerHTML = 'Errou! Tente novamente!';
}

function startGame() {
  answer.innerHTML = 'Escolha uma cor:';
  const rgbColor = document.getElementById('rgb-color');
  const balls = document.getElementsByClassName('ball');

  for (let i = 0; i < balls.length; i++) {
    balls[i].style.backgroundColor = randomColor();
  }

  const randomAnswer = Math.floor(Math.random() * (6 - 1)) + 1;
  rgbColor.innerHTML = balls[randomAnswer].style.backgroundColor;

  for (let i = 0; i < balls.length; i++) {
    if (balls[i].style.backgroundColor === rgbColor.innerHTML) {
      balls[i].addEventListener('click', correct);
    } else {
      balls[i].addEventListener('click', wrong);
    }
  }
}
startGame();
