let startBtn = document.getElementById("startBtn");
let scoreSpan = document.getElementById("score");
let time = document.getElementById("inputTime");
let box = document.getElementById("box");


let interval;
let score;


startBtn.addEventListener("click", function () {
    score = 0;
    box.style.display = "block";
    startBtn.style.display = "none";
    clearInterval(interval);
    interval = setInterval(() => {
        moveBox();
    }, 1000);
    moveBox();
});


function moveBox() {
    box.style.top = `${Math.floor((window.innerHeight - 100) * Math.random())}px`;
    box.style.left = `${Math.floor((window.innerWidth - 100) * Math.random())}px`;
};

box.addEventListener("click", function () {
    score++;
    scoreSpan.textContent = score;
    moveBox();
});