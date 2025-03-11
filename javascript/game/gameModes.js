const getRandomQuestion = (currentPokemonSet, promter) => {
    const quizToGet = Math.floor(Math.random() * 1 + 1);

    switch (quizToGet) {
        case 1: {
            highestAttack(currentPokemonSet, promter);
            break;
        }
        default: {
            console.error('Quiz doesn\'t exists');
        }
    }
};

const highestAttack = (currentPokemonSet, promter) => {
    promter.innerHTML = "Which Pokemon has the highest attack?!"
};

export { getRandomQuestion };