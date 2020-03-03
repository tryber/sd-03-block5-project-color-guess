const color_pallet = document.getElementById('colors');
let rgb_color = document.getElementById('rgb-color');
let client_anwer = document.getElementById('answer');


function startGame(){
    let server_answer = '(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    for (let i = 0; i < 6; i++) {
        let ball = document.createElement('div');
        ball.className = 'ball';
        ball.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        color_pallet.appendChild(ball);
    }
    rgb_color.innerText = server_answer;


}

startGame();