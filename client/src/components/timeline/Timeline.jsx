import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "../timeline/Timeline.css";
import { Posts } from "../../dummyData";

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
