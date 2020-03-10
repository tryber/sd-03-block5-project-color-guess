ball = document.getElementsByClassName('ball');
iniciar = document.getElementById('start');
answer = document.getElementById('answer');
score = document.getElementById('score');
iniciar.addEventListener('click', paint);

function randColor() {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  let color = "RGB(" + a + ", " + b + ", " + c + ")";
  
  return color;
}

function paint(){
  score.innerHTML = 0;
  answer.innerHTML = 'Escolha uma cor';
  rgb = document.getElementById('rgb-color');
  ball = document.getElementsByClassName('ball');
  
  for (let i=0; i<ball.length; i++){
    ball[i].style.backgroundColor = randColor();
  }
  // for(let i in ball) {
  //   ball[i].style.backgroundColor = randColor();
  // }
  let a = Math.floor(Math.random() * 5);
  rgb.innerHTML = document.getElementsByClassName('ball')[a].style.backgroundColor;

  for (let i=0; i<ball.length; i++) {
    if (ball[i].style.backgroundColor == rgb.innerHTML){
      ball[i].addEventListener('click', acertou);
    }else {
      ball[i].addEventListener('click', errou);
    }
  }
}

paint();
  
function acertou(){
  answer.innerHTML = 'Acertou!';
  score.innerHTML++;
  score.innerHTML++;
  score.innerHTML++;
}

function errou(){
  answer.innerHTML = 'Errou! Tente novamente!';
}
