import React from 'react';

import SearchBox from '../Trends/SearchBox';
import TrendingList from '../Trends/TrendingLists';
import FollowList from '../Trends/FollowLsts';
import TwitterFooter from '../Trends/TwitterFooter';


function TrendsRight() {
  return (
    <div className='tr-section' >
        <SearchBox/>
        <TrendingList/>
        <FollowList/>
        <TwitterFooter/>
    </div>
  )
}

export default TrendsRight