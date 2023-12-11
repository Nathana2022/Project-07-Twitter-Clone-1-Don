import React from "react";
import BackIcon from "../components/BackIcon";
import ProfileActionsIcons from "../components/profileActionsIcons";

export default function Profile() {
  return (
    <main>
      <div className="profile-header">
        <div className="ph-icon">
          <BackIcon />
        </div>
        <div className="ph-title">
          <h1>Don Nathanael</h1>
          <p>560</p>
        </div>
      </div>
      <div className="profile-cover">
        <img src="/cover.jpeg" alt="" />
      </div>
      <div className="profile-avatar-section">
        <img src="/profile.jpg" alt="" />
        <a href="#" className="profile-edit-button">Edit profile</a>
      </div>
      <div className="profile-content">
        <div className="pc-names">
          <p className="pc-title">Don Nathanael</p>
          <p className="pc-username">@donnathanael</p>
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
