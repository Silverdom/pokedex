import { fetchSinglePokemonById, fetchSinglePokemonSpeciesById } from "@/utils/fetchPokemonData";
import PokeBannerDet from "./PokeBannerDet";
import PokeBannerImg from "./PokeBannerImg";

const Banner = async ({ typeColor }) => {
  let pokedetails = {
    pokeName: '',
    pokeColor: '',
    pokeDesc: '',
    pokeImg: '',
    baseStats: []
  };

  let randomPokemon = Math.floor(Math.random() * 1000);
  let pokeOfDay = await fetchSinglePokemonById(randomPokemon);
  let pokespecies = await fetchSinglePokemonSpeciesById(randomPokemon);
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

  const pokeDescAll = pokespecies.flavor_text_entries.filter((item) => {
    return item.language.name === "en";
  });
  let pokeDescTotal = pokeDescAll.length;
  let pokeDesc = pokeDescAll[Math.floor(Math.random() * pokeDescTotal)];

  pokedetails['pokeName'] = pokeOfDay.name;
  pokedetails['pokeColor'] = typeColor[pokeOfDay.types[0].type.name] ?? typeColor["default"];
  pokedetails['pokeImg'] = pokeOfDay.sprites.other["official-artwork"].front_default;
  pokedetails['baseStats'] = baseStats;
  pokedetails['pokeDesc'] = pokeDesc;

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