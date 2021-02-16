
import React from 'react'
import SearchBar from "./components/SearchBar";
import './App.scss';


const App = () => {
    return (
        <div className="container">
            <h1 className="title">React Movie Search</h1>
            <SearchBar />
        </div>
    )
}

export default App
