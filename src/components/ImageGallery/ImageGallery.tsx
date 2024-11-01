import React from "react";
import { Image } from "../../types";
import s from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <div className={s.wrap}>
    <ul className={s.list}>
      {images.map((image) => (
        <li
          key={image.id}
          className={s.item}
          onClick={() => onImageClick(image)}
        >
          <img src={image.urls.small} alt={image.alt_description || "Image"} />
        </li>
      ))}
    </ul>
    </div>
  );
};

export default ImageGallery;