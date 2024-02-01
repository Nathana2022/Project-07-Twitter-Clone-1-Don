import React from 'react'
import { useState } from 'react'
import avatar from '../images/avatarDon-removebg-preview.png'
import icon from '../images/Group1.svg'
import icon1 from '../images/Group5.svg'
import icon2 from '../images/Group2.svg'
import icon3 from '../images/Group3.svg'
import icon4 from '../images/Group4.svg'
import Tweets from '../components/Tweets'
import { useContext } from 'react'
import { UserContext } from './AffichageTweet/NewTweet'

function TweetEditor() {
  const {setTweetText,tweetText,addElement} = useContext(UserContext);
  const handleTextChange = (event) =>{
    setTweetText(event.target.value);
  };

  const handleSubmit = () =>{
    addElement();
  }
  return (
    <div className='tweet-editor'>
      <aside>
        <img className='avatar' src={avatar} alt="" />
      </aside>
      <div className='tweet-editor-form'>
      <input className= "tweet-editor-input" type="text" placeholder="What's happening?"  onChange={handleTextChange} value={tweetText} />
      <div className='tweet-editor-buttons'>
        <div className='tweet-editor-actions'>
          <button><img src={icon} alt="" /></button>
          <button><img src={icon1} alt="" /></button>
          <button><img src={icon2} alt="" /></button>
          <button><img src={icon3} alt="" /></button>
          <button><img src={icon4} alt="" /></button>
        </div>
        {/* <form onSubmit={handleSubmit}>
        <textarea value={Tweets} onChange={handleTextChange}></textarea>
            
        </form> */}
        <button className='button' onClick = {() => {handleSubmit()}}>Tweet</button>
      </div>
      </div>
    </div>

  )
}

export default TweetEditor