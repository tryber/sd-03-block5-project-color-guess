function startGame(){
    client_answer.innerText = 'Escolha uma cor';
    
    const server_answer = '(' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ')';
    
    
    for (let i = 0; i < array_balls.length; i++) {
        array_balls[i].style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }
    array_balls[(Math.floor(Math.random() * 6))].style.backgroundColor = 'rgb'+server_answer;
    
    rgb_color.innerText = server_answer;
}

const color_pallet = document.getElementById('colors');
let rgb_color = document.getElementById('rgb-color');
let client_answer = document.getElementById('answer');
const array_balls = document.querySelectorAll('.ball');

startGame();
let score = 0;
let spanplacar = document.getElementById('score');
spanplacar.innerText = 0;

[].forEach.call(array_balls, ball =>{
    ball.addEventListener('click', function(){
        console.log(ball.style.backgroundColor);
        if(ball.style.backgroundColor == "rgb"+rgb_color.textContent){
            client_answer.innerText = "Acertou!";
            score = score + 3;
        }else{
            client_answer.innerText = "Errou! Tente novamente!";
            score = score - 1;
        }
        spanplacar.innerText = score;
    });
});

console.log("rgb"+rgb_color.textContent);