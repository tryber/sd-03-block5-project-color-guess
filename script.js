
 

   

window.onload = function(){
    carregaCores();
}
function carregaCores(){
let ball = document.querySelectorAll('.ball');
corAleatoria(ball);
for(let i =0; i < ball.length; i++){
    ball[i].style.backgroundColor = corAleatoria();
    ball[i].addEventListener('click', function(event){
        // ball[i].style.backgroundColor = corAleatoria();
         console.log(ball[i].style.backgroundColor = corAleatoria());
        /* console.log(event.target.style.background = 'blue'); */
        const style = window.getComputedStyle(ball[i], '');
})}}

 
 function corAleatoria() {
    const r = Math.floor(Math.random()*256);          
    const g = Math.floor(Math.random()*256);          
    const b = Math.floor(Math.random()*256);          
    const rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    return   rgb;
    
        
 } 