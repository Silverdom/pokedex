"use client";
import React, { useState } from "react";
import GlobalConfig from "../app/app.config";
import PokeCard from "./PokeCard";
import { throttle } from "lodash";
import TextSearchComponent from "./TextSearchComponent";

export const FilterContext = React.createContext();

export default function PokeSearchComp({ allpoke }) {
  let allResult = allpoke.results;
  const defaultFilters = {
    "perPage": 10
  };
  let [results, setResult] = useState(allResult);

  const typeColor = GlobalConfig.color;
  
  const searchPokemon = throttle((e) => {
    let val = e.target.value;
    // console.log(val);
    let modifiedResult = allResult.filter((data) => {
      return data.name.startsWith(val)
    });
    // console.log(modifiedResult);
    setResult(modifiedResult);
  }, 1000);

  const pagePokemon = (resultPokemon) => {
    setResult(resultPokemon);
  }

  return (
    <FilterContext.Provider value={{results, searchPokemon}}>
      <TextSearchComponent />
      <div style={{display: "grid"}}>
      {
        results.map((data, index) => {
          if (index > 11) {
            return null;
          } else {
            return (
              // The Key attribute is special, if this value is unique the component is rerendered.
              // if we put the same value but change the props value, it will not rerender the component
              // rather it will use the same component and change the dom elements where change occurs.
              <PokeCard key={data.name} pokeUrl={data.url} pokeName={data.name} typeColor={typeColor} />
            )
          }
        })
      }
      </div>
    </FilterContext.Provider>
  );
}