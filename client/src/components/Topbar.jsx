import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo"></span>
      </div>
      <div className="tobarCenter">
        <div className="searchBar">
          <input
            type="text"
            className="searchInput"
            placeholder="What do you want search?"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIconItem">1</div>
        <div className="topbarIconItem">2</div>
      </div>
      <img src="/seers/person/ajpeg" alt="" className="topbarImg" />
    </div>
  );
};

export default Topbar;
