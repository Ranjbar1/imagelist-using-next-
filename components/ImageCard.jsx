import { Image } from "next/image";
const ImageCard = (props) => {
  return (
    <Image
      src={image.urls.ragular}
      alt={image.description}
      width={724}
      height={15}
    />
  );
};

export default ImageCard;
