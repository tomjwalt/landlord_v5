import React from 'react'
import "./Searchresult.css"

const SearchResult = ({result}) => {
  return (
    <div className='search-result' onClick={(e) => alert(`Clicked ${result.name}`)}>
      {result.name}
    </div>
  )
}

export default SearchResult
