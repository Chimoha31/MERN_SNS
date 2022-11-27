import React from "react";
import "../share/Share.css";
import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import FaceIcon from "@mui/icons-material/Face";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/person/icon01.jpg"
            alt=""
            className="sgareProfileImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="What are you doing now?"
          />
        </div>
        <hr className="shareHr" />

        
        <div className="shareButtons">
          <div className="shareOptions">
            <div className="shareOptions">
              <ImageIcon className="shareIcon" />
              <span className="shareOptionText">Picture</span>
            </div>
            <div className="shareOptions">
              <GifIcon className="shareIcon" />
              <span className="shareOptionText">GIF</span>
            </div>
            <div className="shareOptions">
              <FaceIcon className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
            <div className="shareOptions">
              <AnalyticsIcon className="shareIcon" />
              <span className="shareOptionText">Analytics</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
