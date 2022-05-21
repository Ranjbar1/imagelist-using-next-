import React from 'react';
import { Image } from 'next/image';
import ImageCard from './ImageCard';
const ImageList = ({ images }) => {
  let list = images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return (
    <>
      <div className="grid grid-cols-4 justify-center align-baseline">
        {list}
      </div>
    </>
  );
};

export default ImageList;
