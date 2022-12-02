import React from "react";
import "../share/Share.css";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from '@mui/icons-material/GifBox';
import FaceIcon from "@mui/icons-material/Face";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const Share = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            // src={user.profilePicture || PUBLIC_FOLDER + "/person/noAvater/png"}
            src={PUBLIC_FOLDER + "/person/noAvatar.png"}
            alt=""
            className="shareProfileImg"
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
              <ImageIcon className="shareIcon" htmlColor="blue" />
              <span className="shareOptionText">Picture</span>
            </div>
            <div className="shareOptions">
              <GifBoxIcon className="shareIcon" htmlColor="hotpink" />
              <span className="shareOptionText">GIF</span>
            </div>
            <div className="shareOptions">
              <FaceIcon className="shareIcon" htmlColor="green" />
              <span className="shareOptionText">Feelings</span>
            </div>
            <div className="shareOptions">
              <AnalyticsIcon className="shareIcon" htmlColor="red" />
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
