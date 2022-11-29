import React from "react";
import "./Profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Timeline from "../../components/timeline/Timeline";
import Rightbar from "../../components/rightbar/Rightbar";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            {/* Profile Cover */}
            <div className="profileCover">
              <img
                src="/assets/post/Tokyo01.jpg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="/assets/person/icon01.jpg"
                alt=""
                className="profileCoverUserImg"
              />
            </div>

            {/* Profile Information */}
            <div className="profileInfo">
              <h4 className="profileInfoName">Teddy Maekawa</h4>
              <span className="profileInfoDesc">I'm a Pretty Puppy</span>
            </div>
          </div>

          {/*  */}
          <div className="profileRightBottom">
            <Timeline />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
