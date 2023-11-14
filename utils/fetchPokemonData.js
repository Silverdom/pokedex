
const fetchSinglePokemonById = async (randomPokemon = 1) => {

  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`, { cache: 'no-store' }
  );

  let jsonData = await response.json();
  return jsonData;
}

const fetchSinglePokemonSpeciesById = async (randomPokemon = 1) => {

  let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${randomPokemon}`,
    { cache: 'no-store' }
  );

  let jsonData = await response.json();
  return jsonData;

};

export { fetchSinglePokemonById, fetchSinglePokemonSpeciesById };