import React from "react";
import "../topbar/Topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Chat from "@mui/icons-material/Chat";
import NotificationsIcon from '@mui/icons-material/Notifications';

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">MERN SNS</span>
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
          <img src="/assets/person/icon01.jpg" alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
