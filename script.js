function choseColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red} , ${green} , ${blue})`;
  return color;
}

function evaluate() {
  const showResult = document.getElementById('answer');
  const rightColor = document.getElementById('rgb-color').innerText;
  const kickColor = event.target.style.backgroundColor;
  const score = document.getElementById('score');

  if (rightColor === kickColor) {
    showResult.innerText = 'Acertou!';
    score.innerText = String(Number(score.innerText) + 3);
  } else {
    showResult.innerText = 'Errou! Tente novamente!';
    score.innerText = String(Number(score.innerText) - 1);
  }
}

function LOADED() {
  const balls = document.querySelectorAll('.ball');
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = choseColor();
    balls[i].addEventListener('click', evaluate);
  }

  const randomIndex = Math.floor(Math.random() * 6);
  const rgb = document.getElementById('rgb-color');
  rgb.innerText = balls[randomIndex].style.backgroundColor;

  const resetButton = document.getElementById('reset-game');
  resetButton.addEventListener('click', LOADED);
}

window.onload = LOADED();
