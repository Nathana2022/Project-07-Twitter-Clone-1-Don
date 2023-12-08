import React from 'react'
import Search from '../components/TrendsIcons';


function SearchBox() {
  return (
    <div>
        <div className="search-box">
                <span className="search-icon">
                  <Search icon='search'/>
                </span>
        <input className='seach-text' type="text" placeholder='Search Twitter'/>
        </div>
    </div>
  )
}

export default SearchBox