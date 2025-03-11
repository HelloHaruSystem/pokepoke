import { countDownStart } from "./timer.js";

// pokemon frames
const pokemonFrame = document.getElementsByClassName('pokemon-frames')[0];

// timer, button and score
const gameTimer = document.getElementById('game-timer');
const ranButton = document.getElementsByClassName('random-button')[0];
const score = document.getElementById('score');

// countdown and interval used for the timer
let countDown = 5;
let playerScore = 0;

const gameLoop = () => {
    ranButton.style.display = 'none';
    let interval = setInterval(() => {
        countDown--;
        displayTimer();

        if (countDown <= 0) {
            gameOver();
        }
    }, 1000);

};

const gameOver = () => {
    score.innerHTML = 'GAME OVER'
};

// eventhandlers
ranButton.addEventListener('click', () => {
    //countDownStart(countDown, interval, gameTimer);
    gameLoop();
});

const displayTimer = () => {
    if (countDown > 0) {
        gameTimer.innerHTML = `<strong>Time left: ${countDown}</strong>`;
    } else {
        gameTimer.innerHTML = `<strong>Time's up!</strong>`;
    }
};
