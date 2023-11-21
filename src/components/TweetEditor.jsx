import React from 'react'
import avatar from '../images/profile-photo.png'
import icon from '../images/Group1.svg'
import icon1 from '../images/Group5.svg'
import icon2 from '../images/Group2.svg'
import icon3 from '../images/Group3.svg'
import icon4 from '../images/Group4.svg'

function TweetEditor() {
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
        <button className='button'>Tweet</button>
      </div>
      </div>
    </div>

  )
}

export default TweetEditor