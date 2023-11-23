import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditor';
import Tweets from '../components/Tweets';
import TweetVideo from '../components/TweetVideo';


function Home() {
  return (
    <main className="timeline">
      <Header/>
      <TweetEditor/>
      <Tweets/>
      <TweetVideo/>
    </main>
  );
}

export default Home;