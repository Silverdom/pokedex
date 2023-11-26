"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function PokeCard({ pokeUrl, typeColor, pokeName }) {
  let [dataFetched, setDataFetched] = useState(false);
  let defaultPokeDetails = {
    pokeImg: "",
    pokeType: "",
    pokeColor: "",
    pokeArray: "",
    pokeId: "",
  };
  let [pokedetails, setpokedetails] = useState(defaultPokeDetails);

  const fetchPokemonDetails = async () => {
    setDataFetched(false);
    let pokeDet = await fetch(pokeUrl);
    let pokeDetJsn = await pokeDet.json();
    let pokeImg = pokeDetJsn.sprites.other["official-artwork"].front_default;
    let pokeType = pokeDetJsn.types[0].type.name;
    let pokeColor = typeColor[pokeType] ?? typeColor["default"];
    let pokeArray = pokeUrl.split("/");
    let pokeId = pokeArray[pokeArray.length - 2];
    setpokedetails({
      pokeImg,
      pokeType,
      pokeColor,
      pokeArray,
      pokeId
    });
    setDataFetched(true);
  }

  useEffect(() => {
    fetchPokemonDetails()
  }, []);

  return (
    <>
      {
        dataFetched &&
        <Link href={ `pokemon/${pokedetails.pokeId}` }>
          <div className='pokecard' style={ {
            position: "relative",
            width: "10rem",
            borderColor: "#46423f",
            borderLeft: "1px",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px"
          } }>
            <div className='pokecard-image' style={ {
              backgroundColor: `${pokedetails.pokeColor}`,
              maxWidth: "max-content"
            } }>
              <Image alt={ pokeName } src={ pokedetails.pokeImg } width={ 180 } height={ 180 } />
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
              } }>{ pokeName }</p>
            </div>
          </div>
        </Link>
      }
    </>
  );

}

export default PokeCard
