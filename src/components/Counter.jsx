import React from 'react'
import { useState } from 'react'


function Counter({tweetLikeImg, numbers}) {
    const [number, setNumber] = useState(0);
    // const [isLiked, setLike] = useState(false);

    function handleLike() {
        if (number ===0) {
            setNumber(number + 1);
            // setLike(true);
        } else if(number >= 1) {
            setNumber(number - 1);
            // setLike(false);
        }
    }

    return (
        <div>
            <button className='tweet-action' onClick = {()=>handleLike()}>
                <img src={tweetLikeImg} alt="" />
                {numbers+number}

            </button>
        </div>
    )
        
        
    
        
}

export default Counter