import React, { useContext, useEffect, useState } from "react";
import "../post/Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";
// import { Users } from "../../dummyData";

const Post = ({ post }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  const { user: currentUser } = useContext(AuthContext);

  const handleLike = async () => {
    try {
      // likeのAPIを叩いていく
      // post._id=>どの投稿に、currentUser._id=>誰がいいねするか
      await axios.put(`/posts/${post._id}/like`, { userId: currentUser._id });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const fetchUser = async () => {
    const res = await axios.get(`/users?userId=${post.userId}`);
    setUser(res.data);
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, [post.userId]);

  return (
    <div className="post">
      <div className="postWrapper">
        {/* Top */}
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? PUBLIC_FOLDER + user.profilePicture
                    : PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
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
