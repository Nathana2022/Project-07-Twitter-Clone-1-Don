import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';
import { UserContext } from './NewTweet';
// import tweetsObject from '../components/Tweets'

function Tweet() {
// const data = tweetsObject;
// console.log(data);
const {tweetData} = useContext(UserContext)
  return (
    <div>
        {tweetData.map((element)=>(
            <div className='tweet' key={element.userId}>
                <side className='tweet-avatar'>
                <Link to={`/${element.user.title}`} className='t-link'>
                    <img src={element.image} alt="" />
                    </Link>
                </side>
                <div className='tweet-content'>
                    
                        <div>
                            <div className='tweet-body' >
                            <h2 className='tweet-title'>
                            <Link to={`/${element.user.title}`} className='t-link'>
                            <span className='tweet-title-author'>{element.user.title} </span></Link>
                            <img className='tweet-title-author' src={element.user.certificateIcon} alt="" />
                            <Link to={`/${element.user.title}`} className='t-link'>
                            <span className='tweet-title-details'>{element.user.email} </span>
                            </Link>
                            <span className='tweet-title-details'>{element.user.dure} </span>
                            </h2>
                            <p className='tweet-text'>{element.tweet} </p>
                            <div className='tweet-image'>
                                <img  src={element.phototweet} alt="" />
                                <video src={element.videotweet}></video>
                            </div>
                            
                        </div>
                        <div className='tweet-actions'>
                            {element.iconLike.map((elementLike, Id)=>(
                                <div className='tweet-action'  key={Id}>
                                    {/* <img className='svg' src={elementLike.commentIcon} alt="" /> */}
                                    {/* <span>{elementLike.CountComment} </span> */}
                            <Counter  tweetLikeImg={elementLike.commentIcon} numbers={elementLike.CountComment} />
                                </div> 
                                    
                            ))}
                            
                        </div>
                        </div>
                   
                </div>

            </div>
        ))}
    </div>
  )
}

export default Tweet