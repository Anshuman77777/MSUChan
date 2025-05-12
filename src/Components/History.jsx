import React from 'react'
import Feedcomponent from './Feedcomponent'
import { auth } from '../Firebase/firebase'
import { getPostsOfUser } from '../Firebase/posts'
import { useState, useEffect } from 'react'
function History() {
    const [arr, setArr] = useState([]);
    useEffect(() => {

        const init = async () => {
            let temparr = await getPostsOfUser(auth.currentUser.displayName);
            setArr(temparr);
        }
        init();

    }, [])

    return (
        <>
            <div className='flex flex-col items-center text-text-primary font-bold'>
                <div className='font-primary'>History</div>
                </div>
            {arr.map((res,index)=>
            (
                <Feedcomponent key={index} Obj={res} />
            ))}

            
        </>
    )
}

export default History