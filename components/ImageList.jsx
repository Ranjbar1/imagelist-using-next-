import React from "react";
import { Image } from "next/image";
const ImageList = ({ images }) => {
  return (
    <>
      <div className="image-grid">
        {images.map((image) => {
          return <div key={image.id} className="item"></div>;
        })}
      </div>
    </>
  );
};

export default ImageList;
