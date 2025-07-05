import React, { useRef } from 'react'
import Feedcomponent from './Feedcomponent'
import { useState,useEffect } from 'react';
import { getPaginatedPosts } from '../Firebase/posts'
import { Loader2 } from 'lucide-react';
function Feed() {
  const [feed, setFeed] = useState([]);  // Initialize feed state as an empty array
  const [loading, setLoading] = useState(false);  // Track loading state
  const[lastTimestamp,setLastTimestamp]=useState(null);
  const[hasMore,setHasMore]=useState(true);
  const loaderRef = useRef();
  const offset =7;
 
  
 
  const addPosts=async ()=>{
    setLoading(true);
    const fetchedPosts = await getPaginatedPosts(lastTimestamp,offset);
    fetchedPosts.reverse();
    if(fetchedPosts.length<offset)setHasMore(false);
   if(fetchedPosts.length>0){setLastTimestamp(fetchedPosts[fetchedPosts.length-1].timestamp);
    
    setFeed(prev=>[...prev,...fetchedPosts]);
   } //stop loading
   
    setLoading(false);
  }
    useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore) {
          addPosts();
           
        }
      },
      { threshold: 1.0 }
    );
    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [loading, hasMore]);
  // If data is still loading, show a loading spinner or message
  
  return (
    <div className='flex flex-col'>
      {feed.map((res, index) => (
        <Feedcomponent key={index} Obj={res} />
      ))}
      {hasMore&&
      <div className='span ' ref={loaderRef}><Loader2 className='w-full animate-spin h-10'/></div>}
    </div>
  )
}

export default Feed