let startBtn = document.getElementById("startBtn");
let scoreSpan = document.getElementById("score");
let time = document.getElementById("inputTime");
let box = document.getElementById("box");
let countdown = document.getElementById("countdown");
let interval;
let score;


startBtn.addEventListener("click", function () {
    let duration = parseInt(time.value);
    let remainingTime = duration;

    if (duration > 5) {
        countdown.style.display = "block";
        countdown.textContent = `Remaining Time : ${remainingTime} Seconds`;
        score = 0;
        startBtn.style.display = "none";
        box.style.display = "block";
        time.disabled = true;
        time.style.display = "none";
        clearInterval(interval);

        interval = setInterval(() => {
            moveBox();
            remainingTime--;
            if (remainingTime <= 3) {
                countdown.style.color = "red";
            }
            countdown.textContent = `Remaining Time : ${remainingTime} Seconds`;

        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            startBtn.style.display = "block";
            box.style.display = "none";
            time.value = 0;
            time.disabled = false;
            time.style.display = "block";
            countdown.style.display = "none";
            scoreSpan.textContent = `Your score is ${score}`;
        }, (duration * 1000));

    };

});


function moveBox() {
    box.style.top = `${Math.floor((window.innerHeight - 100) * Math.random())}px`;
    box.style.left = `${Math.floor((window.innerWidth - 100) * Math.random())}px`;
};

box.addEventListener("click", function () {
    score++;
    scoreSpan.textContent = score;
});