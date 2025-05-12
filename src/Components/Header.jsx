import React from 'react'
import { useState,useEffect } from 'react';
function Header() {
  const [emoji,setemoji]=useState('🌸');
  let array=['🌸','💄','🫦','💀','🗿','💔','👀','😋','😍','😎','🔥','🫣'];
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * array.length);
      setemoji(array[randomIndex]);
    }, 1000); // Every 1 second

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className='fixed w-full h-20 bg-header font-primary text-text-primary flex items-center justify-center text-3xl font-bold'>{emoji} MSU CHAN {emoji} </div>
  )
}

export default Header