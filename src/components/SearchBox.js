import React from 'react';
const SearchBox = ({ SearchChange }) =>{
    return(
        <div className="pa2">
            <input 
                className='pa3 ba b--green bg-lighest-blue'
                type="search" 
                placeholder="search Robots"
                onChange={SearchChange}
            />
        </div>
       
    );
}

export default SearchBox;