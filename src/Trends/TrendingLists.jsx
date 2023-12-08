import React from 'react'
import CommonOptions from '../components/TrendsIcons';

function TrendingLists() {
const squid = [
  {
    id: 1,
    description : "Trending in Congo-Kinshasa",
    PSEUDO : "#RIDICULE",
    count : "8,966 Tweets",
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
      <a href='#' className='show-more'>Show more</a>
    </div>
  )
}

export default TrendingLists