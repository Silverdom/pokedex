"use client";
import React, { useState } from "react";
import GlobalConfig from "../app/app.config";
import PokeCard from "./PokeCard";
import { throttle } from "lodash";
import TextSearchComponent from "./TextSearchComponent";
import { useRouter } from "next/router";

export const FilterContext = React.createContext();

export default function PokeSearchComp({ allpoke }) {

  const typeColor = GlobalConfig.color;
  let allResult = allpoke.results;
  const perPage = 18;
  const defaultFilters = {
    perPage
  };

  let [results, setResult] = useState(allResult);

  const searchPokemon = throttle((e) => {
    let val = e.target.value;
    let modifiedResult = allResult.filter((data) => {
      return data.name.startsWith(val)
    });
    // console.log(modifiedResult);
    setResult(modifiedResult);
  }, 1000);

  return (
    <FilterContext.Provider value={{results, searchPokemon}}>
      <TextSearchComponent />
      <div style={
        {
          display: "flex",
          flexWrap: "wrap",
          margin: "2rem",
          justifyContent: "space-evenly"
        }
      }>
      {
        results.map((data, index) => {
          if (index >= perPage) {
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