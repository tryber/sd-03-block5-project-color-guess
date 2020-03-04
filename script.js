const balls = document.querySelectorAll(".ball");
const arrayCores = ["", "", "", "", "", ""];
const answer = document.querySelector("#answer");
const rgbColor = document.querySelector("#rgb-color");
const botao1 = document.querySelector("#botao1");
const botao2 = document.querySelector("#botao2");
const placar = document.querySelector("#score");
const scoreSalvo = localStorage.getItem("Score");
let score = 0;
console.log(typeof(score));

if (scoreSalvo) {
  score = parseInt(scoreSalvo);
  console.log(typeof(score));
} 

function corAleatoria() {
  const hexadecimais = "0123456789ABCDEF";
  let cor = "#";
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
  answer.innerHTML = "Escolha uma cor";
  rgbColor.innerHTML = arrayCores[cor];
  placar.innerHTML = score;
};

function adivinhaCor(i) {
  balls[i].addEventListener("click", function() {
    if (balls[i].style.backgroundColor == rgbColor.innerHTML) {
      answer.innerHTML = "Acertou!";
      score += 3;
      placar.innerHTML = score;
      localStorage.setItem("Score", score);
    } else {
      answer.innerHTML = "Errou! Tente novamente!";
    }
  });
}

for (let i = 0; i < arrayCores.length; i += 1) {
  adivinhaCor(i);
}

function limpaPlacar() {
    localStorage.clear();
    placar.innerHTML = 0;
}

botao1.addEventListener("click", function() {
  window.location.reload();
});

botao2.addEventListener("click", limpaPlacar);
