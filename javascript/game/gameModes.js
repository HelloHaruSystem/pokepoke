// the containers the player will click on
const leftPokemon = document.getElementById("left-poke");
const rightPokemon = document.getElementById("right-poke");

// if 0 then left if 1 then right 0 = not yet
let userChoice = -1;

// for checking the answer immediately
let pokemonSet;
let checkAnswerCallback;

// is the game active used to prevent the user to spam click in order to avoid game over
let gameActive = true;

// handles user input (click)
const userInput = (element) => {
  // if the game is not active return. this prevents many clicks from the user
  if (!gameActive) {
    return;
  }

  if (element.id === "left-poke") {
    userChoice = 0;
  } else if (element.id === "right-poke") {
    userChoice = 1;
  }

  gameActive = false;

  // used to check immediately
  if (checkAnswerCallback) {
    checkAnswerCallback();
  }
};

const getRandomQuestion = (currentPokemonSet, promter, checkAnwserFunc) => {
  pokemonSet = currentPokemonSet;
  checkAnswerCallback = checkAnwserFunc; // stores the function to evaluate result immediate
  gameActive = true;

  const quizToGet = Math.floor(Math.random() * 5 + 1);

  switch (quizToGet) {
    case 1: {
      promter.innerHTML = "Which Pokemon has the highest attack?!";
      return () => compareStat("attack", "highest");
    }
    case 2: {
      promter.innerHTML = "Which Pokemon has the lowest attack?!";
      return () => compareStat("attack", "lowest");
    }
    case 3: {
      promter.innerHTML = "Which Pokemon has the highest defense?!";
      return () => compareStat("defense", "highest");
    }
    case 4: {
      promter.innerHTML = "Which Pokémon weighs the most?!";
      return () => compareStat("weight", "highest");
    }
    case 5: {
      promter.innerHTML = "Which Pokémon is the tallest?!";
      return () => compareStat("height", "highest");
    }
    default: {
      console.error("Quiz doesn't exists");
      return () => false; // returns a fake/dummy function to avoid errors
    }
  }
};

const compareStat = (statName, highOrLow) => {
  if (userChoice === -1) {
    return false;
  }

  let correctChoice;

  if (highOrLow === "highest") {
    correctChoice = pokemonSet[userChoice][statName] >= pokemonSet[1 - userChoice][statName];
  } else if (highOrLow === "lowest") {
    correctChoice = pokemonSet[userChoice][statName] <= pokemonSet[1 - userChoice][statName];
  }

  userChoice = -1;
  return correctChoice;
};

// event handlers
leftPokemon.addEventListener("click", () => {
  userInput(leftPokemon);
});

rightPokemon.addEventListener("click", () => {
  userInput(rightPokemon);
});

export { getRandomQuestion };