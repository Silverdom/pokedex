import React from 'react'
import PokeCard from './PokeCard';

async function TopFive({typeColor}) {
  let pokemons = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=356");
  let pokemonData = await pokemons.json();
  const topPokes = pokemonData.results;
  return (
    <div className='pokelist' style={{
      display: "flex",
      justifyContent: "space-evenly",
      marginTop: "3rem"
    }}>
      {
        topPokes.map((poke) => {
          return (
            <PokeCard key={poke.name} pokeName={poke.name} pokeUrl={ poke.url } typeColor={typeColor}/>
          )
        })
      }
    </div>
  )
}

export default TopFive
