const gameTimer = document.getElementById('game-timer');
const button = document.getElementsByClassName('random-button')[0];

let interval;
let countDown = 5;

const gameLoop = () => {
    let running = true;

    while (running) {
        running = false;
    }
};

const countDownStart = () => {
    
    if (interval) clearInterval(interval);

    gameTimer.innerHTML = `Time left: ${countDown}`;

    interval = setInterval(() => {
        countDown--;
        gameTimer.innerHTML = `Time left: ${countDown}`;

        if (countDown === 0) {
            clearInterval(interval);
            gameTimer.textContent = "Time's up!";
        }
    }, 1000);
};

// eventhandlers
button.addEventListener('click', () => {
    countDownStart();
});