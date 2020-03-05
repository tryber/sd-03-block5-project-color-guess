let a = Math.floor(Math.random() * Math.floor(256))

let b = Math.floor(Math.random() * Math.floor(256))

let c = Math.floor(Math.random() * Math.floor(256))

let randomRGB = `(${a},${b},${c})`

document.getElementById("rgb-color").innerHTML = randomRGB
document.getElementById("answer").innerHTML = "Escolha uma cor"

let balls = document.querySelectorAll(".ball")

for (let i = 0; i < 6; i++){
    let a = Math.floor(Math.random() * Math.floor(256))

    let b = Math.floor(Math.random() * Math.floor(256))

    let c = Math.floor(Math.random() * Math.floor(256))

    balls[i].innerHTML = `(${a},${b},${c})`
    balls[i].style.backgroundColor= `rgb(${a},${b},${c})`
}

    let d = Math.floor(Math.random() * Math.floor(5))
    balls[d].style.backgroundColor = `rgb(${a},${b},${c})`
    balls[d].innerHTML = `(${a},${b},${c})`
    
for (let i = 0; i < 6; i++){
    balls[i].addEventListener("click", giveAnswer)


function giveAnswer(){

   if(balls[i].innerHTML == randomRGB){
    document.getElementById("answer").innerHTML = "Acertou"
   }else{
    document.getElementById("answer").innerHTML = "Errou" 
   }
}
}


let restart = document.getElementById("reset-game")
restart.addEventListener("click", reload)

function reload(){
    location.reload()
}