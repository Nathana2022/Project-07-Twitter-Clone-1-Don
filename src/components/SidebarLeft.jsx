import React from "react";
import SidebarIcons from "./SidebarIcons";
import TwitterIcon from "./TwitterIcon";
import avatar from '../images/profile-photo.png'
import Badges from '../components/Badges'


export default function SidebarLeft() {
  return (
    <div className="left-sidebar">
      <div className="sl-top-section">
        <ul className="navbar">
          <li>
            <a href="#">
              <div className="li-div">
                <span className="sl-icon">
                  <TwitterIcon /> 
                </span>
                <span className="twitter-icon">Twitter</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="li-div">
                <span className="sl-icon">
                  <SidebarIcons icon="home" />
                </span>
                Home
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="li-div">
                <span className="sl-icon">
                  <SidebarIcons icon="explore" />
                </span>
                Explore
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="li-div">
                <span className="sl-icon">
                  <span className="sl-notification">7</span>
                  <SidebarIcons icon="notification" />
                </span>
                Notifications
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="li-div">
                <span className="sl-icon">
                  <span className="sl-notification">3</span>
                  <SidebarIcons icon="message" />
                </span>
                Messages
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="li-div">
                <span className="sl-icon">
                  <span className="sl-notification">89</span>
                  <SidebarIcons icon="bookmark" />
                </span>
                Bookmarks
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="li-div">
                <span className="sl-icon">
                  <SidebarIcons icon="list" />
                </span>
                Lists
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="li-div">
                <span className="sl-icon">
                  <SidebarIcons icon="profil" />
                </span>
                Profil
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="li-div">
                <span className="sl-icon">
                  <SidebarIcons icon="more" />
                </span>
                More
              </div>
            </a>
          </li>
        </ul>
        <button className="button">Tweet</button>
      </div>
      <div className="sl-bottom-section">
        <a href="#" className="sl-bs-body">
          <div className="avatar">
          <img className='avatar' src={avatar} alt="" />
          </div>
          <div className="sl-bs-body-content">
            <div className="sl-bs-body-title">
              Bradley Ortiz{" "}
              <span>
                <Badges badge="locked" /> 
              </span>
            </div>
            <div className="sl-bs-body-username">@bradley_</div>
          </div>
        </a>
        <div className="more-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="4"
            viewBox="0 0 16 4"
            fill="none"
          >
            <path
              d="M2.16667 3.66668C3.08714 3.66668 3.83333 2.92048 3.83333 2.00001C3.83333 1.07954 3.08714 0.333344 2.16667 0.333344C1.24619 0.333344 0.5 1.07954 0.5 2.00001C0.5 2.92048 1.24619 3.66668 2.16667 3.66668Z"
              fill="#D9D9D9"
            />
            <path
              d="M7.99998 3.66668C8.92045 3.66668 9.66665 2.92048 9.66665 2.00001C9.66665 1.07954 8.92045 0.333344 7.99998 0.333344C7.0795 0.333344 6.33331 1.07954 6.33331 2.00001C6.33331 2.92048 7.0795 3.66668 7.99998 3.66668Z"
              fill="#D9D9D9"
            />
            <path
              d="M13.8334 3.66668C14.7538 3.66668 15.5 2.92048 15.5 2.00001C15.5 1.07954 14.7538 0.333344 13.8334 0.333344C12.9129 0.333344 12.1667 1.07954 12.1667 2.00001C12.1667 2.92048 12.9129 3.66668 13.8334 3.66668Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
