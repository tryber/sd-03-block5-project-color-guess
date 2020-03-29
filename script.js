// Elementos

const parRgb = document.getElementById('rgb-color');
const resposta = document.getElementById('answer');
// const containerBall = document.querySelector('.containerBall')

// Funções

const gerarCorAl = () => {
  const cor = `(${Math.floor((Math.random() * 255) + 1)}, ${Math.floor((Math.random() * 255) + 1)}, ${Math.floor((Math.random() * 255) + 1)})`;
  return cor;
};

const init = () => {
  parRgb.innerHTML = gerarCorAl();
  resposta.innerHTML = 'Escolha uma cor';
};

window.onload(init());
