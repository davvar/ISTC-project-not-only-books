import React from "react";
import './search.css'
const Search = () => {
  return (
    <div>
      <div className='search'>
        <input type="text" name="" placeholder='Search a Book, Author ...' />
        <button className='search-btn'>Find</button>
      </div>
    </div>
  );
};

export default Search;
