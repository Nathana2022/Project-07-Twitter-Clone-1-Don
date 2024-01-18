import React from 'react';
import { Link } from 'react-router-dom';

const Usercard = ({username, imageUrl}) =>{
    return (
        <Link to={`/profile/${username}`}>
            <div>
                <img src={imageUrl} alt={`Photo de ${username}`} />
                <p>{username} </p>
            </div>
        </Link>
    );
};

export default Usercard