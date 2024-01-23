import React from 'react'
import { useState } from 'react'
import avatar from '../images/avatarDon-removebg-preview.png'
import icon from '../images/Group1.svg'
import icon1 from '../images/Group5.svg'
import icon2 from '../images/Group2.svg'
import icon3 from '../images/Group3.svg'
import icon4 from '../images/Group4.svg'
import Tweets from '../components/Tweets'

function TweetEditor({onTweetSubmit}) {
  const [Tweets, setTweets] = useState('');
  const handleTextChange = (event) =>{
    setTweets(event.target.value);
  };

  const handleSubmit =(event) =>{
    event.preventDefault();
    onTweetSubmit(Tweets);
    setTweets('');
  }
  return (
    <div className='tweet-editor'>
      <aside>
        <img className='avatar' src={avatar} alt="" />
      </aside>
      <div className='tweet-editor-form'>
      <input className= "tweet-editor-input" type="text" placeholder="What's happening?" />
      <div className='tweet-editor-buttons'>
        <div className='tweet-editor-actions'>
          <button><img src={icon} alt="" /></button>
          <button><img src={icon1} alt="" /></button>
          <button><img src={icon2} alt="" /></button>
          <button><img src={icon3} alt="" /></button>
          <button><img src={icon4} alt="" /></button>
        </div>
        <form onSubmit={handleSubmit}>
        <textarea value={Tweets} onChange={handleTextChange}></textarea>
            <button type='submit' className='button'>Tweet</button>
        </form>
        
      </div>
      </div>
    </div>

  )
}

export default TweetEditor