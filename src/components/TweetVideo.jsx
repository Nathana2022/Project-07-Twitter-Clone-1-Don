import React from 'react'
import Video from '../images/Discipline_avec_Coby.mp4'


// function TweetVideo() {
//   return (
//     <div>TweetVideo</div>
//   )
// }

function VideoPlayer() {
    return (
      <video src={Video} controls ="autoplay loop muted " >
        Votre navigateur ne prend pas en charge la lecture de vidéos.
      </video>
    );
  }
  

export default TweetVideo