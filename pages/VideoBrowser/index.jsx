import React from "react";
import { useState } from "react/cjs/react.production.min";
import SearchBar from "../../components/SearchBar";
import VideoList from "../../components/VideoList";
import youtube from "../api/youtube";

const VideoBrowser = () => {
  const [videos, setVideos] = useState([]);
  let onTermSubmit = async (term) => {
    const response = await youtube.get("/", {
      params: { q: term },
    });
    console.log(response);
    setVideos(response.data.items);
  };

  return (
    <div className="rounded">
      <SearchBar onFormSubmit={onTermSubmit} />
      <VideoList videos={videos} />{" "}
    </div>
  );
};
export default VideoBrowser;
