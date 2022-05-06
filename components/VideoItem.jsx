import React from "react";
import { Image } from "next/image";
import VideoDetail from "./VideoDetail";

const VideoItem = ({ video }) => {
  return (
    <div className="">
      <Image
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <VideoDetail detail={video.snippet} />
    </div>
  );
};

export default VideoItem;
