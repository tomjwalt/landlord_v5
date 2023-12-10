import React, {useState} from 'react';
import './SearchBar.css';
import {FaSearch} from "react-icons/fa";

export const Searchbar = ({setResults}) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(json => {
      const results = json.filter((user) => {
        return value && user && user.name && user.name.toLowerCase().includes(value)
      });
      setResults(results)
    });
  }

  const handleChange = (value) => {
    setInput(value);
  }

  const onSearch = () => {
    fetchData(input);
  }
    return (
    <div className='input-wrapper'>
      <input placeholder='Enter a Location...' value={input} onChange={(e) => handleChange(e.target.value)}/>
      <FaSearch onClick={()=> onSearch()} id='search-icon'/>
    </div>

  )
}

export default Searchbar
