import React, { useEffect, useState } from "react";
import "../post/Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
// import { Users } from "../../dummyData";

const Post = ({ post }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const fetchUser = async () => {
    const response = await axios.get(`/users/${post.userId}`);
    console.log(response.data);
    setUser(response.data);
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="post">
      <div className="postWrapper">
        {/* Top */}
        <div className="postTop">
          <div className="postTopLeft">
            <img src={user.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"} alt="" className="postProfileImg" />
            <span className="postUsername">
            {user.username}
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
          <img src={PUBLIC_FOLDER + post.img} alt="" className="postImg" />
        </div>
        {/* Bottom */}
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={PUBLIC_FOLDER + "/post/heart.png"}
              alt=""
              className="likeIcon"
              onClick={() => handleLike()}
            />
            <span className="postLikeCounter">{like} people liked</span>
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
