import { fetchSinglePokemonById } from "@/utils/fetchPokemonData";
import Link from "next/link";

let pokemonData = [];

const getPokemonData = async (id) => {
  if (!pokemonData[id]) {
    pokemonData[id] = await fetchSinglePokemonById(id);
  }
  return pokemonData[id];
}

export async function generateMetadata({ params }) {
  let pokemonDet = await getPokemonData(params.pokemonid);

  return {
    title: `Pokeinfo | ${pokemonDet.name}`,
    description: `Description like sprite, stats, summary for ${pokemonDet.name}`
  }
}

const pokemon = async ({ params }) => {
  let pokemonDet = await getPokemonData(params.pokemonid);
  return (
    <>
      <p>This is pokemon det { pokemonDet.name }</p>
      <Link href={ "/" }>Back</Link>
    </>
  );
}

export default pokemon;