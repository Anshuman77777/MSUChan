import React from 'react'
import { auth } from '../Firebase/firebase';
import { useState,useEffect } from 'react';
import { getUser,UpdateUser } from '../Firebase/users';
import History from '../Components/History';
function Account() {
  const [body, setBody] = useState('');
  const [username, setUsername] = useState('');
  useEffect( () => {
    const init = async ()=>{const tusername=auth.currentUser.displayName;
      setUsername(tusername);
   let temp=await  getUser(tusername);
  
    if(temp.bio)setBody(temp.bio);
    }
    init();
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    UpdateUser(username,{bio:body});
    window.location.href='/';
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          placeholder="Enter bio"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="4"
          className="border font-secondary placeholder:text-text-secondary text-text-secondary px-4 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-surface  text-white px-4 py-2 rounded hover:bg-background"
        >
          Save
        </button>
      </form>
    <History/>
        </>
  )
}

export default Account