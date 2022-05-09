import React, { useState, useEffect } from "react";

import ImageList from "../../components/ImageList";
import SearchBar from "../../components/SearchBar";
import unsplashAPI from "../api/unsplashAPI";

const ImageBrowser = () => {
  const [images, setImages] = useState([]);

  const onTermSubmit = async (term) => {
    const response = await unsplashAPI.get("/search/photos/", {
      params: { query: term },
    });

    images = response.data.results;
    setImages(images);
    console.log(images);
  };

  return (
    <div>
      <SearchBar onFormSubmit={onTermSubmit} />
      <ImageList images={images} />
    </div>
  );
};
export default ImageBrowser;
