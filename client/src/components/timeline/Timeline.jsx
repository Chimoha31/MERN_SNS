import React, { useEffect, useState } from "react";
// import Post from "../post/Post";
// import { Posts } from "../../dummyData";
import Share from "../share/Share";
import "../timeline/Timeline.css";
import axios from "axios";

const Timeline = () => {
  const [posts, setPosts] = useState([]);

  
  const fetchPosts = async () => {
    const response = await axios.get(
      "/posts/timeline/637ed0cec8312652068c37d6"
    );
    console.log(response);
  };
  
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {/* {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))} */}
      </div>
    </div>
  );
};

export default Timeline;
