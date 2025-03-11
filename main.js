import { fetchTwoMons } from "./pokeRepository.js";

// const piplup = pokeFactory(393, 'Piplup', 'Water', '', 'sprite', 53, 51, 53, 61, 56, 40, 'Water Gun', '40', 100, 25, 'Water');

// console.log(piplup);

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const sprite1 = document.getElementsByClassName('sprite')[0];
const sprite1Facts = document.getElementsByClassName('poke-facts')[0];
const ranButton = document.getElementsByClassName('random-button')[0];
const pokemonFrame = document.getElementsByClassName('pokemon-frames')[0];
const score = document.getElementById('score');

const sprite2 = document.getElementsByClassName('sprite')[1];
const sprite2Facts = document.getElementsByClassName('poke-facts')[1];

const pochama = document.getElementById('pochama');
const logo = document.getElementById('logo');

const fetchPokemon = async () => {
    try {
        const pokemons = await fetchTwoMons();

        console.log(pokemons[0]);
        console.log(pokemons[1]);

        pokemonFrame.style.display = 'flex';
        score.style.display = 'block';
        sprite1.src = pokemons[0].sprite;
        sprite2.src = pokemons[1].sprite;
        sprite1.style.display = 'block';
        sprite2.style.display = 'block';

        sprite1Facts.innerHTML = `<strong>Name:</strong> ${pokemons[0].name} - <strong>Pokedex number:</strong> ${pokemons[0].id}<br>
                                  <strong>Main type:</strong> ${pokemons[0].pokeType1}<br>
                                  <strong>Height:</strong> ${pokemons[0].height} - <strong>Weight:</strong> ${pokemons[0].weight}<br>
                                  <strong>Base stats:</strong><br>
                                  Hp: ${pokemons[0].stats.hp}<br>
                                  Attack: ${pokemons[0].stats.attack}<br>
                                  Defense: ${pokemons[0].stats.defense}<br>
                                  Special Attack: ${pokemons[0].stats.specialAttack}<br>
                                  Special Defense: ${pokemons[0].stats.specialDefense}<br>
                                  Speed: ${pokemons[0].stats.speed}<br><br>
                                  `;
        sprite1Facts.style.display = 'block';

        sprite2Facts.innerHTML = `<strong>Name:</strong> ${pokemons[1].name} - <strong>Pokedex number:</strong> ${pokemons[1].id}<br>
                                  <strong>Main type:</strong> ${pokemons[1].pokeType1}<br>
                                  <strong>Height:</strong> ${pokemons[1].height} - <strong>Weight:</strong> ${pokemons[1].weight}<br>
                                  <strong>Base stats:</strong><br>
                                  Hp: ${pokemons[1].stats.hp}<br>
                                  Attack: ${pokemons[1].stats.attack}<br>
                                  Defense: ${pokemons[1].stats.defense}<br>
                                  Special Attack: ${pokemons[1].stats.specialAttack}<br>
                                  Special Defense: ${pokemons[1].stats.specialDefense}<br>
                                  Speed: ${pokemons[1].stats.speed}<br><br>
                                  `;
    sprite2Facts.style.display = 'block';

    } catch (error) {
        console.error(error);
    }
}

ranButton.addEventListener('click', () => {
    fetchPokemon();
});

async function fetchPochama() {
    const pochamaId = 393;

    try {
        const response = await fetch(baseUrl + `${pochamaId}`);
        if (!response.ok) {
            throw new Error('Problem fetching data!')
        }
        const data = await response.json();

        pochama.src = data.sprites.front_default;
        logo.href = data.sprites.front_default;
    } catch (error) {
        console.error(error);
    }
};
fetchPochama();