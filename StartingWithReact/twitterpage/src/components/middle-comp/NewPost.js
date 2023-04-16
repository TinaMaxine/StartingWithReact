import React from "react";
import newPostImage from "../../images/image.jpg";

export default function NewPost() {
  return (
    <>
      <div className="home">
        <div className="homep">Home</div>
        <div className="following-foryou">
          <p>For you</p>
          <p>Following</p>
        </div>
      </div>
      <div className="new-post">
        <div className="prof-and-form">
        <div className="profile-pic-div">
          <img className="pic" src={newPostImage} alt="" />
        </div>
        <div className="form-div">
        <form>
          <input
            className="np-input"
            type="text"
            placeholder="What's happening?"
          />
          <div className="post-icons">
            <span className="gallery-icon npicon">
              <i className="fa fa-image"></i>
            </span>
            {/* <span className="gif-icon"><i class="fa-light fa-gif"></i></span> */}
            <span className="poll-icon npicon">
              <i class="fa fa-user"></i>
            </span>
            <span className="emoji-icon npicon">
              <i class="fa fa-search"></i>
            </span>
            <span className="schedule-icon npicon">
              <i class="fa fa-calendar"></i>
            </span>
            <span className="location-icon npicon">
              <i class="fa fa-map-location"></i>
            </span>
            <div className="button-2">
              {" "}
              <button className="tweet-button-2" type="submit">
                Tweet
              </button>
            </div>
          </div>
        </form>
        </div>
        </div>
      </div>
    </>
  );
}
