import PokeSearchComp from "@/components/PokeSearchComp";

const PokeSearch = async () => {

  const allPokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
  const allPokemonJson = await allPokemon.json();

  return (
    <PokeSearchComp allpoke={allPokemonJson} />
  );
}

export default PokeSearch;