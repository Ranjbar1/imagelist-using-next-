import React from "react";
const VideoDetail = ({ title, description, date }) => {
  return (
    <>
      <div>
        <div className="title">{title}</div>
        <span>
          <div>{description}</div>
        </span>
      </div>
    </>
  );
};

export default VideoDetail;
