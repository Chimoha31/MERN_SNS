import React, { useEffect, useState } from "react";
import Post from "../post/Post";
// import { Posts } from "../../dummyData";
import Share from "../share/Share";
import "../timeline/Timeline.css";
import axios from "axios";

const Timeline = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("/posts/timeline/637ed0cec8312652068c37d6");
      console.log(response.data);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username]);


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
