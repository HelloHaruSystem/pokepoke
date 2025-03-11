// pokemon frames
const pokemonFrame = document.getElementsByClassName('pokemon-frames')[0];

// timer, button and score
const gameTimer = document.getElementById('game-timer');
const ranButton = document.getElementsByClassName('random-button')[0];
const score = document.getElementById('score');

// countdown and interval used for the timer plus the players score
let countDown = 5.00;
let playerScore = 0;
let interval;

const gameLoop = () => {
    ranButton.style.display = 'none';
    displayTimer();
    score.innerHTML = 'score: 0';

    interval = setInterval(() => {
        countDown-= 0.01;
        displayTimer();

        if (countDown <= 0) {
            gameOver();
        }

    }, 10);
};

const gameOver = () => {
    score.innerHTML = 'GAME OVER'
    ranButton.style.display = 'inline-block';
    countDown = 5.00;
    clearInterval(interval);
};

const displayTimer = () => {
    if (countDown > 0) {
        gameTimer.innerHTML = `<strong>Time left: ${countDown.toFixed(2)}</strong>`;
    } else {
        gameTimer.innerHTML = `<strong>Time's up!</strong>`;
    }
};

// eventhandlers
ranButton.addEventListener('click', () => {
    gameLoop();
});