import React from "react";
import "../rightbar/Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="eventContainer">
          <img src="/assets/event/star02.png" alt="" className="starImg" />
          <span className="eventText">
            Event is on for <b>Only followers !</b>
          </span>
        </div>
        <img src="/assets/event/event01.jpg" alt="" className="eventImg" />

        {/* Online Friends */}
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>

        {/* Promotion */}
        <p className="promotionTitle">Advertisement of Promotion</p>
        <img
          src="/assets/promotion/shopping.jpg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">Shopping</p>
        <img
          src="/assets/promotion/car.jpg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">Car Store</p>
        <img
          src="/assets/promotion/company.jpg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">Company</p>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Born: </span>
            <span className="rightbarInfoKey">Japan</span>
          </div>
          <h4 className="rightbarTitle">Your Friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src="/assets/person/icon01.jpg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Shin Code</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="/assets/person/person01.jpg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Shin Code</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="/assets/person/person02.jpg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Shin Code</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="/assets/person/person03.jpg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Shin Code</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
