import React, { useEffect, useState } from "react";

import SearchBar from "../../components/SearchBar";
import VideoList from "../../components/VideoList";
import youtube from "../api/youtube";

const VideoBrowser = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("Cars");
  }, []);

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/", {
      params: { q: term },
    });
    console.log(response);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  return (
    <div className="rounded border-2">
      <SearchBar onFormSubmit={onTermSubmit} />
      {/* <VideoDetail video={selectedVideo}></VideoDetail> */}
      <VideoList onVideoSelect={onVideoSelect} videos={videos} />{" "}
    </div>
  );
};
export default VideoBrowser;
