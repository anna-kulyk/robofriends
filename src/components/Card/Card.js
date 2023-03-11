import React from 'react';
import './Card.css'

const Card = () => {
    return (
        <div className='card-body'>
            <img alt='robot' src='https://robohash.org/test' />
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
    );
};

export default Card;