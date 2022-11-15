// import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImgGlrUl } from "./ImageGallery.styled";

export const ImageGallery = ({ images, onImageClick }) => (
  <ImgGlrUl>
    {images.map(image => {
      return (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onImageClick={onImageClick}
        />
      );
    })}
  </ImgGlrUl>
);



