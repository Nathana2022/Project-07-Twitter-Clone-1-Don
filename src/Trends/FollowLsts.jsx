import React from 'react';
import LogoCNN from '../images/LogoCNN.png';
import TweetLogo from '../images/Logo Twitter.png';
import Don from '../images/iconDon.png';
import CerificateIcons from '../images/Certificate.svg'
import { Link } from 'react-router-dom';
import users from '../modales/Users';

function FollowLsts() {
  const FollowList = [
    {
      id: 1,
      avatar : Don,
      userName: "Don Nathanaël",
      iconCertification : CerificateIcons,
      lienProfin : "@donNathanael",
      
    },

    {
      id: 2,
      avatar : LogoCNN,
      userName: "CNN",
      iconCertification : CerificateIcons,
      lienProfin : "@CNN",
    },
    {
      id: 3,
      avatar :TweetLogo ,
      userName: "Twitter",
      iconCertification : CerificateIcons,
      lienProfin : "@Twitter",
    },
  
  ]
  const user = users.find((use) => use.isLogin === true)
  return (
    <div className='card-two'>
        <p>Who to follow</p>
      {FollowList.map((element)=>
      <div className='follow' key={element.id}>
          <div className='follow-body'>
          <Link to={`/${users.author}`} className="s-link">
            <img className='follow-body-img' src={element.avatar}  alt="" />
          </Link>
            <div className='follow-tex'>
            <h2>
              <p>{element.userName} </p>
              <img  className='i-certificate' src= {element.iconCertification} alt="" />
            </h2>
            <span>{element.lienProfin} </span>
          </div>
        
          </div>
          <button id='btn' className='follow-text'>Follow</button>
      </div>
      )}
      <a href='#' className='show-more'>Show more</a>
    </div>
  )
}

export default FollowLsts