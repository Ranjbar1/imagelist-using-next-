import React, { useState, useEffect } from "react";

import ImageList from "../../components/ImageList";
import SearchBar from "../../components/SearchBar";
import Unsplash from "../api/unsplashAPI";

const ImageBrowser = () => {
  const [images, setImages] = useState([]);

  const onTermSubmit = async (term) => {
    let response = await Unsplash.get("search/photos", {
      params: {
        query: term,
      },
    });
    let data = response.json();
    console.log(response.data);
    setImages(response.data.results);
  };

  return (
    <div>
      <SearchBar onFormSubmit={onTermSubmit} />
      <ImageList images={images} />
    </div>
  );
};
export default ImageBrowser;
