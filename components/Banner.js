'use client';
import PokeBannerDet from "./PokeBannerDet";
import PokeBannerImg from "./PokeBannerImg";
import { useEffect, useState } from "react";

const Banner = ({ typeColor }) => {
  let pokedetailsDefaults = {
    pokeName: '',
    pokeColor: '',
    pokeDesc: '',
    pokeImg: '',
    baseStats: []
  };

  let [pokedetails, setPokeDetails] = useState(pokedetailsDefaults);
  useEffect(() => {
    console.log("use effect");
    let randomPokemon = Math.floor(Math.random() * 1000)
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`, {
      next: {
        revalidate: 60
      }
    }).then((data) => data.json()).then((pokeOfDay) => {
      let pokeName = pokeOfDay.name;
      const pokeColor = typeColor[pokeOfDay.types[0].type.name] ?? typeColor["default"];
      let pokeImg = pokeOfDay.sprites.other["official-artwork"].front_default;
      const baseStats = [];
      const statObj = pokeOfDay.stats;
      for (const key in statObj) {
        const statData = statObj[key];
        const statKey = statData.stat.name;
        const statValue = statData.base_stat;
        baseStats.push({
          name: statKey,
          value: statValue
        });
      }
      setPokeDetails(prevState => ({
        ...prevState,
        pokeName,
        pokeColor,
        pokeImg,
        baseStats
      }));

    });
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${randomPokemon}`, {
      next: {
        revalidate: 60
      }
    }).then((data) => data.json()).then((data) => {
      const pokeDescAll = data.flavor_text_entries.filter((item) => {
        return item.language.name === "en";
      });
      let pokeDescTotal = pokeDescAll.length;
      let pokeDesc = pokeDescAll[Math.floor(Math.random() * pokeDescTotal)];
      console.log(pokeDesc);
      setPokeDetails(prevState => ({
        ...prevState,
        pokeDesc,
      }));
    });

  }, []);

  return (
    <div className="container-fluid" style={
      {
        backgroundColor: `${pokedetails.pokeColor}`,
        overflow: "hidden",
      }
    }>
      <div style={
        {
          width: "70%",
          margin: "auto",
          padding: "0rem 2rem 0rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          gap: "1%",
          backgroundColor: "white",
          height: "100%",
        }
      }>
        <PokeBannerDet pokeName={ pokedetails.pokeName } pokeDesc={ pokedetails.pokeDesc.flavor_text } pokeStats={ pokedetails.baseStats } pokeColor={ pokedetails.pokeColor } />
        <PokeBannerImg pokeImg={ pokedetails.pokeImg } pokeColor={ pokedetails.pokeColor } />
      </div>
    </div >
  );
}

export default Banner;