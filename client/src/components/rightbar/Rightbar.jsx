import React from "react";
import "../rightbar/Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const Rightbar = ({ user}) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
        <div className="eventContainer">
          <img
            src={PUBLIC_FOLDER + "/event/star02.png"}
            alt=""
            className="starImg"
          />
          <span className="eventText">
            Event is on for <b>Only followers !</b>
          </span>
        </div>
        <img
          src={PUBLIC_FOLDER + "/event/event01.jpg"}
          alt=""
          className="eventImg"
        />

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
          src={PUBLIC_FOLDER + "/promotion/shopping.jpg"}
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">Shopping</p>
        <img
          src={PUBLIC_FOLDER + "/promotion/car.jpg"}
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">Car Store</p>
        <img
          src={PUBLIC_FOLDER + "/promotion/company.jpg"}
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
                src={PUBLIC_FOLDER + "/person/icon01.jpg"}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Shin Code</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/person01.jpg"}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Shin Code</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/person02.jpg"}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Shin Code</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={PUBLIC_FOLDER + "/person/person03.jpg"}
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
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
