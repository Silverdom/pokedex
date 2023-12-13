'use client';
import { useRouter } from 'next/navigation';
import React, { Children } from 'react'

const AnimButton = ({ children, text, path }) => {
  const router = useRouter();

  const navigateToPage = (e) => {
    e.preventDefault();
    // document.getElementById("page-loader").classList.add("start-loader");
    router.push(path)
  }

  return (
    <div className='relative mt-5'>
      <button
        className='animbutton cursor-pointer border-2 border-white py-1 px-10 font-bold text-center overflow-hidden relative h-10 scale-150'
        onClick={navigateToPage}
      >
        <span data-text={ text } >
          { children }
        </span>
      </button>
    </div>
  )
}

export default AnimButton
