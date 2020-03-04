// Cria número de 0 a max
const randomNumber = (max) => 0 + Math.floor((max - 0) * Math.random());

// Cria cores aleatórias
const randomColor = () => `(${randomNumber(255)} ,${randomNumber(255)} ,${randomNumber(255)})`;

let answer = randomNumber(6)

document.querySelectorAll(".ball").forEach(e => {
  let randomClr = randomColor()
  e.style.backgroundColor = `rgb${randomClr}`
  if(e == document.querySelectorAll(".ball")[answer]){
    document.getElementById("rgb-color").textContent = randomClr
  }
  e.addEventListener("click", function(event){
    if(event.target.style.backgroundColor == document.querySelectorAll(".ball")[answer].style.backgroundColor){
      document.getElementById("answer").textContent = 'Acertou!'
    } else {
      document.getElementById("answer").textContent = 'Errou! Tente novamente!'
    }
  })
});

document.getElementById("restart").addEventListener("click", function (){window.location.reload()})
