import React, { useState, useEffect } from 'react';

import ImageList from '../../components/ImageList';
import SearchBar from '../../components/SearchBar';
import Unsplash from '../api/unsplashAPI';

const ImageBrowser = () => {
  const [images, setImages] = useState([]);
  console.log(Unsplash);
  const onTermSubmit = async term => {
    let response = await Unsplash.get('search/photos', {
      params: {
        query: term,
      },
    }).catch(e => console.error(`${e.message}`));
    console.log(response.data.results);
    setImages([...response.data.results]);
  };
  let allImages = images.map(image => {
    return (
      <>
        <div className="image">
          <div className="content">
            <div className="header">{image.title}</div>
            {image.urls.regular}
          </div>
        </div>
      </>
    );
  });
  return (
    <div>
      <SearchBar onFormSubmit={onTermSubmit} />
      <ImageList images={images} />
    </div>
  );
};
export default ImageBrowser;
