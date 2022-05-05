import React from "react";
const VideoItem = ({ video }) => {
  return <div>{video.snippet.title}</div>;
};

export default VideoItem;
