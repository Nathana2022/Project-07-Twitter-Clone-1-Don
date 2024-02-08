import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditor';
import Tweet from '../components/Tweet';
import NewTweet from '../components/NewTweet';

import UserCard from '../components/UsersNamesAll';
import UserProfil from '../modales/Users';



function Home() {
  return (
    <main className="timeline">
      <Header/>
        <TweetEditor/>
      <Tweet/>

      {/* <Tweets/> */}
      {/* <UserProfil/> */}
    </main>
  );
}

export default Home;