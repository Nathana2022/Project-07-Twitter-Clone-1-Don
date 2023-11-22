import React from 'react'
import TweetProfile from '../images/tweet-profile-photo.png'
import CerificateIcons from '../images/Certificate.svg'
import TweetReplies from '../images/TweetReplies.svg'
import TweetPart from '../images/TweetPart.svg'
import TweetLike from '../images/TweetLike1.svg'
import TweetShare from '../images/GroupT.svg'
import LogoCNN from '../images/LogoCNN.png'
import TweetImage from '../images/tweet-image.png'
import TweetLogo from '../images/Logo Twitter.png'
import Article from '../images/MKDART.png'
import Election from '../images/PEUPLE ET ELECTION.png'
import Tweet from './Tweet'

function Tweets() {
    const tweetsObject =[
        {
        image:TweetProfile,

        user :[{
            title:"CNN",
            certificateIcon: CerificateIcons,
            email:"@CNN",
            dure:"7min"
        }],
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
    
            commentIcon:TweetShare
            
        }
    ],
    },
    {
        image:LogoCNN,

        user :[{
            title:"The New York Times",
            certificateIcon: CerificateIcons,
            email:"@nytimes",
            dure:"2h"
        }],
        tweet:"Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
        phototweet:Election,
        iconLike :[{
    
            commentIcon:TweetReplies,
            CountComment:19
        },
        {
    
            commentIcon:TweetPart,
            CountComment:48
        },
        {
    
            commentIcon:TweetLike,
            CountComment:482
        },
        {
    
            commentIcon:TweetShare
            
        }
    ],
    },
    {
        image:TweetLogo,

        user :[{
            title:"Twitter",
            certificateIcon: CerificateIcons,
            email:"@Twitter",
            dure:"Oct 29"
        }],
        tweet:"BIG NEWS lol jk still Twitter",
        phototweet:null,
        iconLike :[{
    
            commentIcon:TweetReplies,
            CountComment:'6.8K' 
        },
        {
    
            commentIcon:TweetPart,
            CountComment:'36.6K'
        },
        {
    
            commentIcon:TweetLike,
            CountComment:'267.1K'
        },
        {
    
            commentIcon:TweetShare
            
        }
    ],
    },
    {
        image:TweetLogo,

        user :[{
            title:"Twitter",
            certificateIcon: CerificateIcons,
            email:"@Twitter",
            dure:"Oct 4"
        }],
        tweet:"Hello literally everyone",
        phototweet:null,
        iconLike :[{
    
            commentIcon:TweetReplies,
            CountComment:'118.7K' 
        },
        {
    
            commentIcon:TweetPart,
            CountComment:'785.4K'
        },
        {
    
            commentIcon:TweetLike,
            CountComment:'3.3M'
        },
        {
    
            commentIcon:TweetShare
            
        }
    ],
    },
    {
        image:TweetLogo,

        user :[{
            title:"Twitter",
            certificateIcon: CerificateIcons,
            email:"@Twitter",
            dure:"Oct 29"
        }],
        tweet:"BIG NEWS lol jk still Twitter",
        phototweet:null,
        iconLike :[{
    
            commentIcon:TweetReplies,
            CountComment:'6.8K' 
        },
        {
    
            commentIcon:TweetPart,
            CountComment:'36.6K'
        },
        {
    
            commentIcon:TweetLike,
            CountComment:'267.1K'
        },
        {
    
            commentIcon:TweetShare
            
        }
    ],
    },
    {
        image:Article,

        user :[{
            title:"MKADIMART",
            certificateIcon: CerificateIcons,
            email:"@mkadimart ",
            dure:". 1j"
        }],
        tweet:"La discipline clé du succés",
        phototweet:VideoTweet,
        iconLike :[{
    
            commentIcon:TweetReplies,
            CountComment:'6.8K' 
        },
        {
    
            commentIcon:TweetPart,
            CountComment:'36.6K'
        },
        {
    
            commentIcon:TweetLike,
            CountComment:'267.1K'
        },
        {
    
            commentIcon:TweetShare
            
        }
    ],
    }
]
  return (
    <div className='tweets'>
        <Tweet Fed={tweetsObject}/>
    </div>
  )
}

export default Tweets