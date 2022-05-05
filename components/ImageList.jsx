import React from "react";
import { Image } from "next/image";
import ImageCard from "./ImageCard";
const ImageList = ({ images }) => {
  return (
    <>
      <div className="image-grid">
        {images.map((image) => {
          return <ImageCard key={image.id}></ImageCard>;
        })}
      </div>
    </>
  );
};

export default ImageList;
