// Elementos

const parRgb = document.getElementById('rgb-color');

//Funções

const gerarCorAl = () => {
  const cor = `(${Math.floor((Math.random() * 255) + 1)}, ${Math.floor((Math.random() * 255) + 1)}, ${Math.floor((Math.random() * 255) + 1)})`;
  return cor
}

//Inicialização 

window.onload(parRgb.innerHTML = gerarCorAl());