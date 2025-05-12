import React from 'react'
//import Samplefeed from '../assets/demoData/Samplefeed'
import Feedcomponent from './Feedcomponent'
import { useState,useEffect } from 'react';
import { getPaginatedPosts } from '../Firebase/posts'
function Feed() {
  const [feed, setFeed] = useState([]);  // Initialize feed state as an empty array
  const [loading, setLoading] = useState(true);  // Track loading state

  // Use useEffect to fetch posts when the component mounts
  useEffect(() => {
    async function init() {
      const fetchedPosts = await getPaginatedPosts(0);
      fetchedPosts.reverse();
      setFeed(fetchedPosts);  // Update feed state with fetched posts
      setLoading(false);  // Set loading to false once data is fetched
    }
    init();
  }, []);  // Empty dependency array means this effect runs once after initial render

  // If data is still loading, show a loading spinner or message
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className='flex flex-col'>
      {feed.map((res, index) => (
        <Feedcomponent key={index} Obj={res} />
      ))}
    </div>
  )
}

export default Feed