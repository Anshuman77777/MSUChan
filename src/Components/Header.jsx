import React from 'react'
import { useState,useEffect } from 'react';
function Header({setSidebar}) {
  
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
  function toggle(){setSidebar(prev=>!prev);}
  return (<>
  <div className='fixed w-full h-20 bg-header flex items-center justify-center'>
    <button onClick={toggle} className='absolute left-4 bg-surface font-primary h-10 w-10 text-text-primary'>🍔</button>
    <div className=' font-primary text-text-primary  text-3xl font-bold'>{emoji} MSU CHAN {emoji} </div>
    <button onClick={()=>{window.location.href='/rules'}}  className='absolute right-4 bg-surface font-primary text-text-primary'>Rules</button>
   </div>
    </>
  )
}

export default Header