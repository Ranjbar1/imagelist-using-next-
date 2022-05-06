import React from "react";
import Image from "next/image";
import VideoDetail from "./VideoDetail";

const VideoItem = ({ video }) => {
  return (
    <div className="bg-slate-100 rounded-md overflow-hidden shadow-md">
      <Image
        className="p-1 ml-3 max-w-full"
        height={25}
        width={40}
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <VideoDetail detail={video.snippet} />
    </div>
  );
};

export default VideoItem;
