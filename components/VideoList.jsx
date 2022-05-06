import { list } from "postcss";
import react from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  console.log(videos);

  const List = videos.map((video) => {
    return <VideoItem key={video.snippet.title} video={video} />;
  });

  return <div className="flex flex-col mx-2 my-1 ">{List}</div>;
};

export default VideoList;
