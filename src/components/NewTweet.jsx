import React, {createContext, useState} from 'react'
import CerificateIcons from '../images/Certificate.svg'
import TweetReplies from '../images/TweetReplies.svg'
import TweetPart from '../images/TweetPart.svg'
import TweetLike from '../images/TweetLike1.svg'
import TweetShare from '../images/GroupT.svg'
import LogoCNN from '../images/LogoCnn.png'
import Don from '../images/iconDon.png'
import { tweetsObject } from './Tweets'
// import Tweets from '../../components/Tweets'
// import tweetsObject from './components/Tweets'

export const UserContext = createContext();
function NewTweetForm({children}) {
// const data = <Tweets/>;
    const [tweetText, setTweetText] = useState('');
    const [tweetData, setTweetData] = useState(tweetsObject);
   const addElement=()=> {
   if(tweetText!== ''){
    const dataValueTemporary = tweetData;
    dataValueTemporary.unshift(
      {
        userId :tweetData.length + 1,
        image:Don, 

        user :{
            title:"Don Nathanaël",
            certificateIcon: CerificateIcons,
            email:"@nathanael_don",
            dure:"1min"
        },
        tweet:tweetText,
        phototweet:null,
        iconLike :[{
    
            commentIcon:TweetReplies,
            CountComment:0
        },
        {
    
            commentIcon:TweetPart,
            CountComment:0
        },
        {
    
            commentIcon:TweetLike,
            CountComment:0
        },
        {
    
            commentIcon:TweetShare,
            CountComment:0
            
        }
    ],
    },
    )
    setTweetData(dataValueTemporary)
    setTweetText('');
   } 
   }

  
   
    return (
      <UserContext.Provider value={{setTweetText,tweetText,addElement,tweetData}}>
        {children}
      </UserContext.Provider>
    );
  }
  
  export default NewTweetForm;