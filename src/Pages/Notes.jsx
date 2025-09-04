import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import data from "../assets/Notes.json";
import Feedcomponent from '../Components/Feedcomponent'; 
function Notes() {
  const [stream,setStream]=useState("");
  const [list,setList]=useState([]);
  const permData=data;
  useEffect(() => {
    setList(data);
  }, []);
  useEffect(() => {
    const val=stream.toUpperCase();
     const filteredList = permData.filter((item) =>
    item.stream.includes(val) 
  );
  setList(filteredList);
  }, [stream]);
  return (
    <div className='w-full'>
      <label className="input w-full h-15 bg-surface mb-5" >
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" onChange={(e)=>{setStream(e.target.value);console.log(stream);}} required placeholder="Search" />
</label>
{list.map((data)=>(
  <div className="collapse bg-surface mb-2 collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">{data.stream}</div>
  <pre className="collapse-content ">{data.content}</pre>
</div>
))}
    </div>
  )
}

export default Notes