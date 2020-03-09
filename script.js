function randcolor() {
  rgb = document.getElementById('rgb-color');

  var a = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var c = Math.floor(Math.random() * 256);

  var bgColor = "(" + a + ", " + b + ", " + c + ")";
  
  rgb.innerHTML = bgColor;
}

iniciar = document.getElementById('start');
iniciar.addEventListener('click', randcolor);
