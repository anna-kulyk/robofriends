import React from 'react';
import './SearchBox.css';

const SearchBox = ({onSearchChange}) => {
    return (
        <div className='searchbox__wrapper'>
            <input
                className='searchbox__input'
                type='search' 
                placeholder='search robots' 
                aria-label='searchbox'
                onChange={onSearchChange}
            />
        </div>
    );
};

export default SearchBox;