import React from 'react';
import './Card.css';

const Card = ({id, name, email}) => {
    return (
        <div className='card'>
            <img className='card__img' alt='robot' src={`https://robohash.org/${id}`} />
            <div>
                <h2 className='card__name'>{name}</h2>
                <p className='card__email'>{email}</p>
            </div>
        </div>
    );
};

export default Card;