function randcolor() {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  let color = "(" + a + ", " + b + ", " + c + ")";
  rgb = document.getElementById('rgb-color');
  rgb.innerHTML = color;

  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let colorb = "rgb(" + x + ", " + y + ", " + z + ")";
  ball = document.getElementsByClassName('ball');

  for(let i in ball){
    ball[i].style.backgroundColor = colorb;
  }

}

iniciar = document.getElementById('start');
iniciar.addEventListener('click', randcolor);
