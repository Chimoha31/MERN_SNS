import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "../timeline/Timeline.css";

const Timeline = () => {
  return <div className="timeline">
    <div className="timelineWrapper">
      <Share />
      <Post />
      <Post />
      <Post />
    </div>
  </div>;
};

export default Timeline;
