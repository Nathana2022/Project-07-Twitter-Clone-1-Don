import React from 'react'
import { useState } from 'react'

function Counter() {
    const [number, setNumber] = useState(1);
    const [isLiked, setLike] = useState(false);

    function handleLike() {
        if (!isLiked) {
            setNumber(number + 1);
            setLike(true);
        } else {
            setNumber(number - 1);
            setLike(false);
        }
    }

    return {number, isLiked, handleLike }
        
}

export default Counter