// Elementos

const parRgb = document.getElementById('rgb-color');
const resposta = document.getElementById('answer');
const divsBall = document.querySelectorAll('.ball');
const botao = document.getElementById('reset-game');
const score = document.getElementById('score');
let pontos = 0;

// Funções

const checarResposta = (divs) => {
  divs.forEach((element) => {
    element.addEventListener('click', () => {
      const teste = event.currentTarget.style.backgroundColor;
      const correto = parRgb.innerText;
      if (teste === correto) {
        resposta.innerHTML = 'Acertou!';
        pontos += 3;
        score.innerHTML = pontos;
      } else {
        resposta.innerHTML = 'Errou! Tente novamente!';
      }
    });
  });
};

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const gerarCorAl = () => {
  const cor = `(${Math.floor((Math.random() * 255) + 1)}, ${Math.floor((Math.random() * 255) + 1)}, ${Math.floor((Math.random() * 255) + 1)})`;
  return cor;
};

const sorteia = (divs) => {
  const sorteio = getRandomIntInclusive(0, 5);
  divs[sorteio].style.backgroundColor = `rgb${gerarCorAl()}`;
  parRgb.innerHTML = divs[sorteio].style.backgroundColor;
  for (let i = 0; i < divs.length; i += 1) {
    if (divs[i] !== divs[sorteio]) {
      divs[i].style.backgroundColor = `rgb${gerarCorAl()}`;
    }
  }
};

const init = () => {
  sorteia(divsBall);
  resposta.innerHTML = 'Escolha uma cor';
};

checarResposta(divsBall);

// EventListener

botao.addEventListener('click', init);

// Load

init();
score.innerHTML = pontos;
