import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditor';
import Tweets from '../components/Tweets';
import UserCard from '../components/Usercard';
import UserProfil from '../components/UserProfil';



function Home() {
  return (
    <main className="timeline">
      <Header/>
      <TweetEditor/>
      <Tweets/>
      {/* <UserProfil/> */}
    </main>
  );
}

export default Home;