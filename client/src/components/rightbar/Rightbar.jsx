import React from "react";
import "../rightbar/Rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
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
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/person/icon01.jpg"
                alt=""
                className="rightbarOnlineFriendImg"
              />
              {/* Onlineの緑マーク用のspan */}
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Teddy M</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/person/person01.jpg"
                alt=""
                className="rightbarOnlineFriendImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Teddy M</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/person/person02.jpg"
                alt=""
                className="rightbarOnlineFriendImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Teddy M</span>
          </li>
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
      </div>
    </div>
  );
};

export default Rightbar;
