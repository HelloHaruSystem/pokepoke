import pokeFactory from "./pokefactory.js"

// const piplup = pokeFactory(393, 'Piplup', 'Water', '', 'sprite', 53, 51, 53, 61, 56, 40, 'Water Gun', '40', 100, 25, 'Water');

// console.log(piplup);

const ranButton = document.getElementById('random-button');
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const sprite1 = document.getElementsByClassName('sprite')[0];
const sprite1Facts = document.getElementsByClassName('poke-facts')[0];

async function fetchPokemon(id) {
    try {
        const response = await fetch(baseUrl + `${id}`);
        if (!response.ok) {
            throw new Error('Problem fetching data!')
        }
        const data = await response.json();
        console.log(data);

        sprite1.src = data.sprites.front_default;
        sprite1.style.display = 'block';

        sprite1Facts.innerHTML = `Name: ${data.name} - Pokedex number: ${data.id}<br>
                                  Height: ${data.height} - Weight: ${data.weight}`;
        sprite1Facts.style.display = 'block';

    } catch (error) {
        console.error(error);
    }
}

const randomPokemonId = () => {
    let randomNumber = Math.floor(Math.random() * 1025);
    
    if (randomNumber === 0) {
        return randomNumber + 1;
    }
    return randomNumber;
};

// fetchPokemon(393);
ranButton.addEventListener('click', () => {
    const randomPokeId = randomPokemonId();
    fetchPokemon(randomPokeId);
});