let placar=0;
let score = document.getElementById('score');

score.innerHTML = 0;
window.onload = function(){
    carregaCores();
     if(isNaN(localStorage.getItem('placar')) ||  localStorage.getItem('placar') ==  null){
      localStorage.setItem('placar', 0);
      placar =parseInt(localStorage.getItem('placar'));
    score.innerHTML = parseInt(localStorage.getItem('placar'));
     }else{
    placar =parseInt(localStorage.getItem('placar'));
    score.innerHTML = parseInt(localStorage.getItem('placar'));
     }
}


function carregaCores(){
    score.innerHTML = localStorage.getItem('placar');
let ball = document.querySelectorAll('.ball');
corAleatoria(ball);

for(let i =0; i < ball.length; i++){
    
    let corTexto = document.getElementById('rgb-color')
    corTexto.innerHTML = corAleatoria();
    
    ball[i].style.backgroundColor = corAleatoria();
    let aleatorio = Math.floor(Math.random() * 6);
    switch (aleatorio) {
        case 0:
            ball[0].style.backgroundColor = corTexto.innerText;
            console.log(corTexto);
            break;
            case 1:
              ball[1].style.backgroundColor = corTexto.innerText;
                console.log(corTexto);
                break;
            case 2:
                ball[2].style.backgroundColor = corTexto.innerText;
                console.log(corTexto);
                break;
            case 3:
                ball[3].style.backgroundColor = corTexto.innerText;
                console.log(corTexto);
                break;
            case 4:
                ball[4].style.backgroundColor = corTexto.innerText;
                console.log(corTexto);
                break;
            case 5:
                ball[5].style.backgroundColor = corTexto.innerText;
                console.log(corTexto);
                break;
            case 6:
                ball[6].style.backgroundColor = corTexto.innerText;
                console.log(corTexto);
                break;       
    }

    ball[i].addEventListener('click', function(event){
         
        // ball[i].style.backgroundColor = corAleatoria();
         console.log(ball[i].style.backgroundColor);
         if(ball[i].style.backgroundColor == corTexto.innerText){
             console.log(localStorage.getItem('placar'));
                          if(isNaN(localStorage.getItem('placar')) ){
                 localStorage.setItem('placar', 0);
             }else{
                placar = parseInt(localStorage.getItem('placar'));
                console.log(placar);
                placar += 3;
                 localStorage.setItem('placar',placar);
                 console.log(placar);
                 document.getElementById('answer').innerHTML = 'Acertou!'
                 score.innerHTML = parseInt(localStorage.getItem('placar'));    
             }            
         }else{
             console.log('Errou! Tente novamente!');
             document.getElementById('answer').innerHTML = 'Errou! Tente novamente!'
   
           }
        /* console.log(event.target.style.background = 'blue'); */
        const style = window.getComputedStyle(ball[i], '');
})}}
 let botaoReiniciar  = document.getElementById("reset-game");
botaoReiniciar.addEventListener('click', function(){
    window.location.reload();
    placar = parseInt(localStorage.getItem('placar'));
    score.innerHTML = parseInt(localStorage.getItem('placar'));
})
 
 function corAleatoria() {
    const r = Math.floor(Math.random()*256);          
    const g = Math.floor(Math.random()*256);          
    const b = Math.floor(Math.random()*256);          
    const rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    return   rgb;   
        
 } 
