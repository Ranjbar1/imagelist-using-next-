import { list } from "postcss";
import react from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  console.log(videos);
  const List = videos.map((video) => {
    return <VideoItem key={video.snippet.title} video={video} />;
  });
  return <div>{List}</div>;
};

export default VideoList;
