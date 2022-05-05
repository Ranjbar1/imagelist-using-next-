import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div className="container">
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div>{video.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
