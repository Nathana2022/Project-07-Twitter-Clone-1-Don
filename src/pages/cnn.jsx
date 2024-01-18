import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";
import BackIcon from "../components/BackIcon";
import ProfileActionsIcons from "../components/profileActionsIcons";
import CoverCNN from "../images/CoverCNN";


 function CNN() {
  return (
    <main>
      <div className="profile-header">
        <div className="ph-icon">
          <BackIcon />
        </div>
        <div className="ph-title">
          <h1>CNN</h1>
          <p>421K Posts</p>
        </div>
      </div>
      <div className="profile-cover">
        <img src="/CoverCNN" alt="" />
      </div>
      <div className="profile-avatar-section">
        <img src="./LogoCNN.png" alt="" />
        <a href="#" className="profile-edit-button">Follow me</a>
      </div>
      <div className="profile-content">
        <div className="pc-names">
          <p className="pc-title">CNN</p>
          <p className="pc-username">@CNN</p>
          <p>It’s our job to <a href="http://cnn.com/apps">#GoThere</a> & tell the most difficult stories. For breaking news, follow 
@CNNBRK and download our app http://cnn.com/apps</p>
        </div>
        <div className="pc-infos">
          <div>
            <ProfileActionsIcons icon="map" />
            <span>Democratic Republic of Congo</span>
          </div>
          <div>
            <ProfileActionsIcons icon="calandar" />
            <span>Joined February 2007</span>
          </div>
        </div>
        <div className="pc-foll">
          <a href="#"><span className="bold">1,085</span> Following</a>
          <a href="#"><span className="bold">62.1M</span> Follower</a>
        </div>
      </div>
    </main>
  );
}


export default CNN 