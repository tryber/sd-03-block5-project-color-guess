function setRandomColor() {
  var randomColor = "#" + Math.floor(Math.random() * 16777215) .toString(16);

     return hexToRGB(randomColor);
}

function hexToRGB(h) {
  let r = 0,
    g = 0,
         b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

    // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return "(" + +r + "," + +g + "," + +b + ")";
}

function generateBalls() {
  //Set balls color
  for (var ball of balls) {
    ball.style.backgroundColor = "rgb"+setRandomColor();
  }
  //Set text.
  escolhido = Math.floor(Math.random()* balls.length);
  document.getElementById('rgb-color').innerText = balls[escolhido].style.backgroundColor.slice(3);
}


let balls = document.getElementsByClassName("ball");
let escolhido;

window.onload = generateBalls();

let answer = document.getElementById("answer");
let score = document.getElementById("score");


function setAnswer(e) {
  let bgColor = e.target.style.backgroundColor;
  console.log(bgColor);
  if (bgColor.slice(3) === document.getElementById("rgb-color").innerText){
    answer.innerText = "Acertou!"
    score.innerText = 3 + parseInt(score.innerText);

  }
  else{
    answer.innerText = "Errou! Tente novamente!"

  }
}

for (let ball of balls){
  ball.addEventListener('click',setAnswer)
}



