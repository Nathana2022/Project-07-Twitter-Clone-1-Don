import React from 'react'
import CommonOptions from '../components/TrendsIcons';

function TrendingLists() {
const squid = [
  {
    id: 1,
    description : "Trending in Turkey",
    PSEUDO : "SQUID",
    count : "2,066 Tweets",
    point : "..."
  },
  {
    id: 2,
    description : "Trending in Turkey",
    PSEUDO : "SQUID",
    count : "2,066 Tweets",
    point : "..."
  },
  {
    id: 3,
    description : "Trending in Turkey",
    PSEUDO : "SQUID",
    count : "2,066 Tweets",
    point : "..."
  },
  {
    id: 4,
    description : "Trending in Turkey",
    PSEUDO : "SQUID",
    count : "2,066 Tweets",
    point : "..."
  }
]

  return (
    <div className='card-one'>
      <div className='setting'>
        <h3 className='text-trend-list'>Trends for you</h3>
        < CommonOptions icon='commonOptions' /> 
      </div>
      {squid.map((element)=> (
        <div className='detail' key={element.id}>
          <div>
            <span>{element.description} </span>
            <span>{element.point} </span>
          </div>
          <p>{element.PSEUDO} </p>
          <span>{element.count} </span>
        </div>
      ))}
      <p className='show-more'>Show more</p>
    </div>
  )
}

export default TrendingLists