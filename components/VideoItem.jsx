import React from "react";
import { Image } from "next/image";

const VideoItem = ({ video }) => {
  return (
    <div className="container">
      <Image
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div>{video.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
