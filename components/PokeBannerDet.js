import Statbar from "./Statbar";

const PokeBannerDet = ({ pokeName, pokeDesc, pokeStats, pokeColor }) => {
  const values = [];
  let maxVal = -1;
  for (const key in pokeStats) {
    values.push(pokeStats[key].value);
  }
  maxVal = Math.max(...values);

  return (
    <div className="pod-details" style={ {
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly"
    }
    }>
      <h2><b>{ pokeName.toUpperCase() }</b></h2>
      <p>{ pokeDesc }</p>
      <div style={{
        padding: "2rem 2rem 0 0",
      }}>
        {
          pokeStats.map((stat, index) => {
            return (
              <Statbar key={ index } value={ stat.value } statName={ stat.name } max={ maxVal } pokeColor={ pokeColor } />
            )
          })
        }
      </div>
    </div>
  );
}

export default PokeBannerDet;