import React, { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
// import { Posts } from "../../dummyData";
import Share from "../share/Share";
import "../timeline/Timeline.css";
import axios from "axios";
import { AuthContext } from "../../state/AuthContext";

const Timeline = ({ username }) => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`) //Profile.jsx
        : await axios.get(`/posts/timeline/${user._id}`); //Home.jsx
      console.log(response.data);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
