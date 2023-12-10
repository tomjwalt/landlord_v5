import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Background from './Components/background/Background'
import Searchbar from './Components/searchbar/Searchbar'
import { useState } from 'react';
import { SearchResultsList } from './Components/searchbar/SearchResultsList';

const App = () => {

  const [results, setResults] = useState([]);
  return (
  <div className='Background'>
      <div>
        <Navbar/>
      </div>
    <div>
      <div className='App'>
        <div className="search-bar-container">
          <Searchbar setResults={setResults} />
          <SearchResultsList results={results}/>
        </div>
        {results && results.map((result,index) =>(
          <div key={index}>{result}</div>
        ))}
        </div>
      </div>
  </div>
  ) 
}

export default App;