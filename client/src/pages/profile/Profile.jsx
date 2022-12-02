import React, { useEffect, useState } from "react";
import "./Profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Timeline from "../../components/timeline/Timeline";
import Rightbar from "../../components/rightbar/Rightbar";
import axios from "axios";
import { useParams } from "react-router-dom";

const Profile = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const params = useParams().username;
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${params}`);
      console.log(res);
      setUser(res.data);
    };
    fetchUser();
  }, []);

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
                src={user.coverPicture || PUBLIC_FOLDER + "/post/Tokyo01.jpg"}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={user.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"}
                alt=""
                className="profileCoverUserImg"
              />
            </div>

            {/* Profile Information */}
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.description}</span>
            </div>
          </div>

          {/*  */}
          <div className="profileRightBottom">
            <Timeline username={params} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
