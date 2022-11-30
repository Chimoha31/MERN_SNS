import React from "react";
import "../sidebar/Sidebar.css";
import Home from "@mui/icons-material/Home";
import Search from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Message from "@mui/icons-material/Message";
import Bookmark from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import Settings from "@mui/icons-material/Settings";
import CloseFriends from "../closeFriend/CloseFriends";
import { Users } from "../../dummyData";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <span className="sidebarListItemText">Home</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Search className="sidebarIcon" />
            <span className="sidebarListItemText">Search</span>
          </li>
          <li className="sidebarListItem">
            <NotificationsIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Notifications</span>
          </li>
          <li className="sidebarListItem">
            <Message className="sidebarIcon" />
            <span className="sidebarListItemText">Message</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <PersonIcon className="sidebarIcon" />
            <Link
              to="/profile/1"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span className="sidebarListItemText">Profile</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Settings className="sidebarIcon" />
            <span className="sidebarListItemText">Settings</span>
          </li>
        </ul>
        <hr className="sidebarHr" />

        {/* Sidebar Friends */}
        <ul className="sidebarFriendsList">
          {Users.map((user) => (
            <CloseFriends user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
