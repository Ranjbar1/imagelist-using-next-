import { Image } from "next/image";
import { useEffect, useRef, useState } from "react";
const ImageCard = () => {
  const [spans, setSpans] = useState(spans);
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(100);
  imageRef = useRef();
  useEffect(() => {
    imageRef.current.addEventListener("load", this.setSpans);
    console.log({ imageRef });
    setHeight(imageRef.current.clinetHeight);
    setWidth(imageRef.current.clinetWidth);
    const spans = Math.ceil(height / 10);
    setSpans(spans);
  }, [height]);

  return (
    <Image
      ref={imageRef}
      src={image.urls.ragular}
      alt={image.description}
      width={width}
      height={height}
    />
  );
};

export default ImageCard;
