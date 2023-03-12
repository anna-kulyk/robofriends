import React from 'react';
import Card from '../Card/Card';
import './CardList.css'

const CardList = ({robots}) => {
    return (
        <div className='card-list'>
            {
                robots.map((robot, index) => {
                    return (
                        <Card 
                            key={index} 
                            id={robot.id} 
                            name={robot.name} 
                            email={robot.email}
                        />
                    );
                })
            }
        </div>
    );
};

export default CardList;