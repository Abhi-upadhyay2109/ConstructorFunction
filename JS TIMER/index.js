let stopBtn = document.getElementById("stopBtn");
let startBtn = document.getElementById("startBtn");

const startingMinutes = 10;
let time = startingMinutes * 60;

let countdown = document.getElementById("countdown")
let timerId = null;

startBtn.addEventListener("click",function(){
    timerId = setInterval(updateCountdown,1000);
})

stopBtn.addEventListener("click",function(){
    clearInterval(timerId);
})


function updateCountdown(){
    const minutes = Math.floor(time/60)
    let seconds = time % 60;
    
    let minsString = minutes < 10 ? `0${minutes}` : minutes;
    let secsString = seconds < 10 ? `0${seconds}` : seconds;
    countdown.innerHTML = `${minsString}:${secsString}`
    time--;
}