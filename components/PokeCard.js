import Image from 'next/image';
import React from 'react'

async function PokeCard({ pokeUrl, typeColor }) {
  let pokeDet = await fetch(pokeUrl);
  let pokeDetJsn = await pokeDet.json();
  let pokeImg = pokeDetJsn.sprites.other["official-artwork"].front_default;
  let pokeType = pokeDetJsn.types[0].type.name;
  const pokeColor = typeColor[pokeType] ?? typeColor["default"];

  return (
    <div className='pokecard' style={ {
      position: "relative",
      width: "10rem",
      borderColor: "#46423f",
      borderLeft: "1px",
      borderTopLeftRadius: "8px",
      borderBottomLeftRadius: "8px"
    } }>
      <div className='pokecard-image' style={ {
        backgroundColor: `${pokeColor}`,
        maxWidth: "max-content"
      } }>
        <Image src={ pokeImg } width={ 180 } height={ 180 } />
      </div>
      <div className='pokecard-title' style={ {
        position: "absolute",
        top: "0px",
        left: "10rem",
        writingMode: "vertical-lr",
        textTransform: "uppercase",
        backgroundColor: "#46423f",
        color: "white",
        height: "10rem",
      } }>
        <p style={ {
          margin: "0.3rem",
          textAlign: "center"
        } }>{ pokeDetJsn.name }</p>
      </div>
    </div>
  )
}

export default PokeCard
