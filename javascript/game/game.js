import { fetchTwoMons } from "../objectAndFetch/pokeRepository.js";
import { getRandomQuestion } from "./gameModes.js";

// pokemon frames
const pokemonFrame = document.getElementsByClassName('pokemon-frames')[0];
// sprite elements
const leftSprite = document.getElementsByClassName('sprite')[0];
const rightSprite = document.getElementsByClassName('sprite')[1];
// pokemon text field
const leftPokemonText = document.getElementsByClassName('poke-facts')[0];
const rightPokemonText = document.getElementsByClassName('poke-facts')[1];

// timer, button and score
const gameTimer = document.getElementById('game-timer');
const ranButton = document.getElementsByClassName('random-button')[0];
const score = document.getElementById('score');

// countdown and interval used for the timer plus the players score
let countDown = 5.00;
let playerScore = 0;
let interval;

// current question
const quizPromt = document.getElementById('quiz-promt');

// current set of pokemons
let currentPokemons;

// current evaluate function
let evaluateChoice;

// Main game loop
const startGameLoop = async () => {
    startGame();
    await getCurrentMons();
    dispalyPokemons();
    
    evaluateChoice = getRandomQuestion(currentPokemons, quizPromt, checkAnswer);

    countDown = 5.00;
    interval = setInterval(() => {  
        countDown-= 0.01;
        displayTimer();

        if (countDown <= 0) {
            clearInterval(interval);
            gameOver();
        } 
    }, 10);
};

const checkAnswer = () => {
    // if false was returned this method will just return to avoid errors 
    // TODO: better error handeling here and in gameModes.js
    if (!evaluateChoice || evaluateChoice === undefined) {
        return;
    }

    let correct = evaluateChoice();

    if (correct) {
        clearInterval(interval);
        playerScore++;
        startGameLoop();
    } else {
        clearInterval(interval);
        gameOver();
    }
};

const startGame = () => {
    ranButton.style.display = 'none';
    score.style.display = 'block';
    displayTimer();
    score.innerHTML = `score: ${playerScore}`;
};

const gameOver = () => {
    score.innerHTML = `GAME OVER final score: ${playerScore}`;
    ranButton.style.display = 'inline-block';
    countDown = 5.00;
    clearInterval(interval);
};

const displayTimer = () => {
    gameTimer.style.display = 'block';

    if (countDown > 0) {
        gameTimer.innerHTML = `<strong>Time left: ${countDown.toFixed(2)}</strong>`;
    } else {
        gameTimer.innerHTML = '<strong>Time\'s up!</strong>';
    }
};

const getCurrentMons = async () => {
    currentPokemons = await fetchTwoMons();
};


const dispalyPokemons = () => {
    leftSprite.src = currentPokemons[0].sprite;
    rightSprite.src = currentPokemons[1].sprite;

    leftPokemonText.innerHTML = `<strong>Name:</strong> ${currentPokemons[0].name}<strong>`;
    rightPokemonText.innerHTML = `<strong>Name:</strong> ${currentPokemons[1].name}<strong>`;
    
    leftPokemonText.style.display = 'block';
    rightPokemonText.style.display = 'block';

    leftSprite.style.display = 'block';
    rightSprite.style.display = 'block';

    pokemonFrame.style.display = 'flex';
};

//event handlers
ranButton.addEventListener('click', () => {
    playerScore = 0;
});

export { startGameLoop };