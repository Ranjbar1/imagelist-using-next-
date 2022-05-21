import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const ImageCard = ({ image }) => {
  console.log(image);

  let { urls, alt_description } = image;
  // const [spans, setSpans] = useState(spans);
  // const [height, setHeight] = useState(100);
  // const [width, setWidth] = useState(100);

  // let imageRef = useRef();

  // useEffect(() => {
  //   imageRef.current.addEventListener('load', this.setSpans);
  //   console.log({ imageRef });
  //   setHeight(imageRef.current.clinetHeight);
  //   setWidth(imageRef.current.clinetWidth);
  //   const spans = Math.ceil(height / 10);
  //   setSpans(spans);
  // }, [height]);

  return (
    <div className="center">
      <img
        className="max-w-xs max-h-fit"
        // ref={imageRef}
        src={urls.thumb}
        alt={alt_description}
      />
    </div>
  );
};

export default ImageCard;
