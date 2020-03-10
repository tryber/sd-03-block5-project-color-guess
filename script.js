window.onload = function() {
    function randomColor() {
        const red = Math.round(Math.random() * 255);
        const green = Math.round(Math.random() * 255);
        const blue = Math.round(Math.random() * 255);
        const color = `rgb(${red} , ${green} , ${blue})`;
        return color;
    }


    const quiz = document.getElementById('rgb-color');
    quiz.innerHTML = randomColor();


    function gameRules() {
        const correctAnswer = quiz.innerHTML;
        const userGuess = event.target.style.backgroundColor;
        const answerBox = document.getElementById('answer');
        if (userGuess == correctAnswer) {
            answerBox.innerHTML = "Acertou!";
        } else {
            answerBox.innerHTML = "Errou! Tente novamente!";
        }
    }

    function generateRandomColorCircles() {
        const ball = document.querySelectorAll('.ball');
        for (let i of ball) {
            i.style.backgroundColor = randomColor();
            i.addEventListener('click', gameRules);
        }
    }
    generateRandomColorCircles();

    function placeAnswerColorCircle() {
        let i = Math.round(Math.random() * 6);
        const ball = document.querySelectorAll('.ball');
        ball[i].style.backgroundColor = quiz.innerHTML;
    }
    placeAnswerColorCircle();
}