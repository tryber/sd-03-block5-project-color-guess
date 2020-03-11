window.onload = function() {
    function startGame() {
        function randomColor() {
            const red = Math.round(Math.random() * 255);
            const green = Math.round(Math.random() * 255);
            const blue = Math.round(Math.random() * 255);
            const color = `rgb(${red}, ${green}, ${blue})`;
            return color;
        }


        const quiz = document.getElementById('rgb-color');
        quiz.innerHTML = randomColor();


        function gameRules() {
            const correctAnswer = document.getElementById('rgb-color').innerText;
            const userGuess = event.target.style.backgroundColor;
            const answerBox = document.getElementById('answer');
            if (correctAnswer == userGuess) {
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

        function insertAnswerColorCircle() {
            let i = Math.round(Math.random() * 6);
            const ball = document.querySelectorAll('.ball');
            ball[i].style.backgroundColor = quiz.innerHTML;
        }
        insertAnswerColorCircle();

        function resetGame() {
            const resetButton = document.getElementById('reset');
            const answerBox = document.getElementById('answer');
            resetButton.addEventListener('click', startGame);
            answerBox.innerHTML = "";

        }
        resetGame();
    }
    startGame();

}