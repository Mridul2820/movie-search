import React from 'react'
import './SearchBar.scss';

const SearchBar = () => {
    return (
        <form className="form">
            <label htmlFor="query" className="label">Movie Name</label>
            <input type="text" name="query" className="search-movie" placeholder="Search Movie"  />
            <button className="search-button" type="button" >Search</button>
        </form>
    )
}

export default SearchBar
