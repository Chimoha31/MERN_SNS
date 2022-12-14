import React, { useContext } from "react";
import "../topbar/Topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Chat from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";

const Topbar = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">MERN SNS</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="What do you want search?"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarItemIcons">
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PUBLIC_FOLDER + user.profilePicture
                  : PUBLIC_FOLDER + "/person/noAvatar.png"
              }
              alt=""
              className="topbarImg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
