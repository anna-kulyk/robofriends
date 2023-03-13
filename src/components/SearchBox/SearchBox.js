import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
    return (
        <div className='searchbox__wrapper'>
            <input
                className='searchbox__input'
                type='search' 
                placeholder='search robots' 
                aria-label='searchbox'
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;