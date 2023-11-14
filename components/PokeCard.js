import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function PokeCard({ pokeUrl, typeColor, pokeName }) {
  let pokeDet = await fetch(pokeUrl);
  let pokeDetJsn = await pokeDet.json();
  let pokeImg = pokeDetJsn.sprites.other["official-artwork"].front_default;
  let pokeType = pokeDetJsn.types[0].type.name;
  const pokeColor = typeColor[pokeType] ?? typeColor["default"];
  const pokeArray = pokeUrl.split("/");
  const pokeId = pokeArray[pokeArray.length-2];

  return (
    <Link href={`pokemon/${pokeId}`}>
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
          <Image alt={pokeName} src={ pokeImg } width={ 180 } height={ 180 } />
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
    </Link>
  )
}

export default PokeCard
