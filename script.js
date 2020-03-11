const bolas = document.getElementsByClassName('ball');
const divRGB = document.getElementById('rgb-color');
const resposta = document.getElementById('answer');
const textoPlacar = document.getElementById('score');
let placar = 0;

function geraRGB() {
  return (Math.floor(Math.random() * 256));
}

function puxaTexto() {
  //  Sorteia um número entre 0 e 6
  const indice = Math.floor(Math.random() * 6);
  divRGB.textContent = bolas[indice].style.backgroundColor;
}

function newGame() {
  //  for (let i in bolas)
  //    bolas[i].style.backgroundColor = `rgb(${geraRGB()},${geraRGB()},${geraRGB()})`;
  bolas[0].style.backgroundColor = `rgb(${geraRGB()},${geraRGB()},${geraRGB()})`;
  bolas[1].style.backgroundColor = `rgb(${geraRGB()},${geraRGB()},${geraRGB()})`;
  bolas[2].style.backgroundColor = `rgb(${geraRGB()},${geraRGB()},${geraRGB()})`;
  bolas[3].style.backgroundColor = `rgb(${geraRGB()},${geraRGB()},${geraRGB()})`;
  bolas[4].style.backgroundColor = `rgb(${geraRGB()},${geraRGB()},${geraRGB()})`;
  bolas[5].style.backgroundColor = `rgb(${geraRGB()},${geraRGB()},${geraRGB()})`;
  resposta.innerText = '';
  puxaTexto();
}

function comparaResposta() {
  //  É o event.target que se refere ao elemento clicado!!!!
  if (divRGB.textContent === event.target.style.backgroundColor) {
    resposta.innerText = 'Acertou!';
    resposta.style.backgroundColor = 'green';
    placar += 3;
    textoPlacar.innerText = `Placar: ${placar}`;
  } else {
    resposta.innerText = 'Errou! Tente novamente!';
    resposta.style.backgroundColor = 'red';
  }
}
