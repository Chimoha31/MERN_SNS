import React from "react";
import "../post/Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postWrapper">
        {/* Top */}
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                Users.filter((user) => user.id === post.id)[0].profilePicture
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === post.id)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        {/* Center */}
        <div className="postCenter">
          <p className="postText">{post.desc}</p>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        {/* Bottom */}
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/post/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">{post.like} people liked</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}:comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
