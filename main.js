import pokeFactory from "./pokefactory.js"

// const piplup = pokeFactory(393, 'Piplup', 'Water', '', 'sprite', 53, 51, 53, 61, 56, 40, 'Water Gun', '40', 100, 25, 'Water');

// console.log(piplup);

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const sprite1 = document.getElementsByClassName('sprite')[0];
const sprite1Facts = document.getElementsByClassName('poke-facts')[0];
const ranButton = document.getElementById('random-button');
const oggPlayer = document.getElementById('pokemon-cry');

async function fetchPokemon(id) {
    try {
        const response = await fetch(baseUrl + `${id}`);
        if (!response.ok) {
            throw new Error('Problem fetching data!')
        }
        const data = await response.json();
        console.log(data);

        // use gen 5 sprites
        let spriteUrl = data.sprites.versions['generation-v']['black-white'].animated.front_default;
        // if null use newest sprites istead 
        if (spriteUrl === null) {
            spriteUrl = data.sprites.front_default;
        }

        sprite1.src = spriteUrl;
        sprite1.style.display = 'block';

        sprite1Facts.innerHTML = `<strong>Name:</strong> ${data.name} - <strong>Pokedex number:</strong> ${data.id}<br>
                                  <strong>Types:</strong> ${data.types.map(typeName => typeName.type.name).join(', ')}<br>
                                  <strong>Height:</strong> ${data.height} - <strong>Weight:</strong> ${data.weight}<br>
                                  <strong>Abilities:</strong> ${data.abilities.map(abliityName => abliityName.ability.name).join(', ')}<br><br>
                                  <strong>Base stats:</strong><br>
                                  Hp: ${data.stats[0].base_stat}<br>
                                  Attack: ${data.stats[1].base_stat}<br>
                                  Defense: ${data.stats[2].base_stat}<br>
                                  Special Attack: ${data.stats[3].base_stat}<br>
                                  Special Defense: ${data.stats[4].base_stat}<br>
                                  Speed: ${data.stats[5].base_stat}<br><br>
                                  <strong>Press play to hear the pokemons cry</strong>
                                  `;
        sprite1Facts.style.display = 'block';

        oggPlayer.src = data.cries.latest;
        oggPlayer.style.display = 'block';
    } catch (error) {
        console.error(error);
    }
}

const randomPokemonId = () => {
    let randomNumber = Math.floor(Math.random() * 649);
    
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