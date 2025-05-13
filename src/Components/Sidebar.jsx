import React from 'react'
import Sidebarcomponent from './Sidebarcomponent'
import Sidebarcontent from './Sidebarcontent'
import { auth } from '../Firebase/firebase'
import { useEffect,useState } from 'react'
function Sidebar() {
  const [username,setUsername]=useState('');
   
  useEffect(()=>{
    setUsername(auth.currentUser.displayName);
  },[]
  )
  return (
    <>

      
    <div className=' fixed h-screen w-[150px] bg-sidebar flex flex-col items-center'>
    
      <div className='text-4xl font-bold font-primary text-text-secondary'>{username}</div>
     <ul>
    {Sidebarcontent.map((res,index) =>
      {
     return <Sidebarcomponent key={index} logo={res.logo} name={res.name} link={res.link}/>
    }
    )}
     </ul>

    </div>
    </>
  )
}

export default Sidebar