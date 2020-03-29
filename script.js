// Elementos

const parRgb = document.getElementById('rgb-color');
const resposta = document.getElementById('answer');
const divsBall = document.querySelectorAll('.ball')

// Funções

const checarResposta = divs => {
  divs.forEach(element => {
    element.addEventListener('click', () => {
      const teste = event.currentTarget.style.backgroundColor;
      const correto = parRgb.innerText;
      if(teste === correto) {
        console.log(resposta);
        resposta.innerHTML = 'Acertou!';
      } else {
        resposta.innerHTML = 'Errou! Tente novamente!';
      }
    });
  });
}

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sorteia = divs => {
  sorteio = getRandomIntInclusive(0,5);
  divs[sorteio].style.backgroundColor = `rgb${gerarCorAl()}`;
  parRgb.innerHTML = divs[sorteio].style.backgroundColor;
  for(let i = 0; i < divs.length; i += 1) {
    if(divs[i] != divs[sorteio]) {
      divs[i].style.backgroundColor = `rgb${gerarCorAl()}`;
    } 
  }
}

const gerarCorAl = () => {
  const cor = `(${Math.floor((Math.random() * 255) + 1)}, ${Math.floor((Math.random() * 255) + 1)}, ${Math.floor((Math.random() * 255) + 1)})`;
  return cor;
};

const init = () => {
  sorteiaBall = sorteia(divsBall);
  resposta.innerHTML = 'Escolha uma cor';
};

// EventListerner 

checarResposta(divsBall);

// Load

init();
