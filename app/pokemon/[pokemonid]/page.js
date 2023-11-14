import { fetchSinglePokemonById } from "@/utils/fetchPokemonData";
import Link from "next/link";

const pokemon = async ({ params }) => {
  let pokemonData = await fetchSinglePokemonById(params.pokemonid);
  return (
    <>
      <p>This is pokemon det { pokemonData.name }</p>
      <Link href={ "/" }>Back</Link>
    </>
  );
}

export default pokemon;