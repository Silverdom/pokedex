
"use client";

import { FilterContext } from "./PokeSearchComp";
import { useContext, useState } from "react";

const TextSearchComponent = () => {
  const { searchPokemon } = useContext(FilterContext);

  return (
    <div id="filters">
      <input type="text" id="search-pokemon" placeholder="Pokemon Name" onKeyUp={ searchPokemon } />
    </div>
  )
}

export default TextSearchComponent;