import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditor';
import Tweets from '../components/Tweets';
import NewTweet from '../components/AffichageTweet/NewTweet';

import UserCard from '../components/UsersNamesAll';
import UserProfil from '../modales/Users';



function Home() {
  return (
    <main className="timeline">
      <Header/>
      <NewTweet>
        <TweetEditor/>
      </NewTweet>
      <Tweets/>
      {/* <UserProfil/> */}
    </main>
  );
}

export default Home;