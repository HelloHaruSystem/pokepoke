import { countDownStart } from "./timer.js";

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

// eventhandlers
button.addEventListener('click', () => {
    countDownStart(countDown, interval, gameTimer);
});