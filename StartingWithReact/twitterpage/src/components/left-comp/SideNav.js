import React from "react";
import LiItem from "./LiItem";

export default function SideNav() {
  const arr = [
    { text: "Home", icon: <i className="fa fa-home" aria-hidden="true"></i> },
    {
      text: "Explore",
      icon: <i className="fa fa-search" aria-hidden="true"></i>,
    },
    {
      text: "Notifications",
      icon: <i className="fa fa-bell" aria-hidden="true"></i>,
    },
    {
      text: "Messages",
      icon: <i className="fa fa-envelope" aria-hidden="true"></i>,
    },
    {
      text: "Bookmarks",
      icon: <i className="fa fa-bookmark" aria-hidden="true"></i>,
    },
    { text: "Lists", icon: <i className="fa fa-list" aria-hidden="true"></i> },
    {
      text: "Profile",
      icon: <i className="fa fa-user" aria-hidden="true"></i>,
    },
    {
      text: "More",
      icon: <i className="fa fa-ellipsis-h" aria-hidden="true"></i>,
    },
  ];

  return (
    <>
      <div className="outer-div">
        <ul className="ul-f">
          <li className="li-f">
              <div className="twitter-logo">
              <i  class="logo fa fa-twitter" style={{color:'#1d9bf0'}} aria-hidden="true"></i>
              </div>
          </li>
          {arr.map((ele) => {
            return (
              <LiItem key={ele.text} text={ele.text}>
                {ele.icon}
              </LiItem>
            );
          })}
          <li className="li-f">
            <div className="li-tweet">
            <button className="tweet-button">Tweet</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
