import React, {createContext, useState} from 'react'
import CerificateIcons from '../../images/Certificate.svg'
import TweetReplies from '../../images/TweetReplies.svg'
import TweetPart from '../../images/TweetPart.svg'
import TweetLike from '../../images/TweetLike1.svg'
import TweetShare from '../../images/GroupT.svg'
import LogoCNN from '../../images/LogoCnn.png'
import Tweets from '../../components/Tweets'


export const UserContext = createContext();
function NewTweetForm({children,fed}) {
const data = <Tweets/>;
    const [tweetText, setTweetText] = useState('');
    const [tweetData, setTweetData] = useState(data);
   const addElement=()=> {
   if(tweetText!== ''){
    const dataValueTemporary = tweetData;
    dataValueTemporary.unshift(
      {
        userId :0,
        image:LogoCNN, 

        user :{
            title:"CNN",
            certificateIcon: CerificateIcons,
            email:"@CNN",
            dure:"7min"
        },
        tweet:"President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
        phototweet:null,
        iconLike :[{
    
            commentIcon:TweetReplies,
            CountComment:57
        },
        {
    
            commentIcon:TweetPart,
            CountComment:144
        },
        {
    
            commentIcon:TweetLike,
            CountComment:184
        },
        {
    
            commentIcon:TweetShare,
            CountComment:76
            
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