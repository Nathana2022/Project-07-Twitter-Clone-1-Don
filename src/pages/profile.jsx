import React from "react";
import BackIcon from "../components/BackIcon";
import ProfileActionsIcons from "../components/profileActionsIcons";
import { useParams } from "react-router-dom";
import users from "../modales/Users";

export default function Profile() {
  const{username}=useParams();
    const oneData=users.find((use) =>{
        return use.author==username;
    });
  return (
    <main>
      <div className="profile-header">
        <div className="ph-icon">
          <BackIcon />
        </div>
        <div className="ph-title">
          <h1>{oneData.author} </h1>
          <p>560</p>
        </div>
      </div>
      <div className="profile-cover">
        <img src={oneData.imageCover} alt="" />
      </div>
      <div className="profile-avatar-section">
        <img src={oneData.authorAvatar} alt="" />
        <a href="#" className="profile-edit-button">Follow me</a>
      </div>
      <div className="profile-content">
        <div className="pc-names">
          <p className="pc-title">{oneData.author}</p>
          <p className="pc-username">{oneData.authorDetails}</p>
        </div>
        <div className="pc-infos">
          <div>
            <ProfileActionsIcons icon="map" />
            <span>Democratic Republic of Congo</span>
          </div>
          <div>
            <ProfileActionsIcons icon="calandar" />
            <span>Joined January 2023</span>
          </div>
        </div>
        <div className="pc-foll">
          <a href="#"><span className="bold">66</span> Following</a>
          <a href="#"><span className="bold">1</span> Follower</a>
        </div>
      </div>
    </main>
  );
}
