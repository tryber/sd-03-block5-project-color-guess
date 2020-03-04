// Cria número de 0 a max
const randomNumber = (max) => 0 + Math.floor((max - 0) * Math.random());

// Cria cores aleatórias
const randomColor = () => `(${randomNumber(255)} ,${randomNumber(255)} ,${randomNumber(255)})`;

let answer = randomNumber(5)
let answerElement = document.querySelectorAll(".ball")[answer]

document.querySelectorAll(".ball").forEach(e => {
  let randomClr = randomColor()
  e.style.backgroundColor = `rgb${randomClr}`
  if(e == answerElement){
    document.getElementById("rgb-color").textContent = randomClr
  }
});
