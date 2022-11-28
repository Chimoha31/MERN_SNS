import React from "react";
import "../post/Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        {/* Top */}
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/icon01.jpg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">Teddy M</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        {/* Center */}
        <div className="postCenter">
          <p className="postText">I'm creating SNS</p>
          <img src="assets/post/tokyo01.jpg" alt="" className="postImg" />
        </div>
        {/* Bottom */}
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/post/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">5 people liked</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">4:comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
