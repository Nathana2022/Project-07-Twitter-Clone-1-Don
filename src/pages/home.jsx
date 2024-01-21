import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditor';
import Tweets from '../components/Tweets';
import UserCard from '../components/UsersNamesAll';
import UserProfil from '../modales/Users';



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