import axios from "axios";
import React, { useState } from "react";
import ImageList from "../../components/ImageList";
import SearchBar from "../../components/SearchBar";
import unsplashAPI from "../api/unsplashAPI";

const ImageBrowser = () => {
  const [images, setImages] = useState([]);

  let onSearchSubmition = async (term) => {
    const response = await unsplashAPI.get("search/photos", {
      params: { query: term },
      headers: {},
    });
    images = response.data.results;
    setImages(images);
    console.log(images);
  };

  return (
    <div>
      <SearchBar onSubmition={onSearchSubmition} />
      <ImageList images={images} />
    </div>
  );
};
export default ImageBrowser;
