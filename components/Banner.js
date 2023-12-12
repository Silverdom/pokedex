'use client';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import AnimButton from './Buttons/AnimButton'

const Banner = () => {
  return (
    <section className='banner c-bg-pdcol h-screen flex justify-evenly flex-col lg:flex-row text-center'>
      <div className='left-content grid content-center lg:w-1/2  m-auto text-white'>
        <h1 className='text-8xl'>PokeInfo</h1>
        <p className='text-2xl mt-5'>The Ultimate Pokemon Encyclopedia!</p>
        <AnimButton text="Let's Go" path="/search">Lets Go</AnimButton>
      </div>
      <div className='right-content hidden lg:block m-auto'>
        <Image alt="pokedex-icon" src="/pokedex-icon.png" width={ 534 } height={ 372 }></Image>
      </div>
    </section>

  )
}

export default Banner
