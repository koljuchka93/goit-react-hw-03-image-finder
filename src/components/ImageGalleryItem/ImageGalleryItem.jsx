// import PropTypes from 'prop-types';
import { ImgGlrItm, ImgGlrItemOnImg } from "./ImageGalleyItem.styled";

export const ImageGalleryItem = ({ image, onImageClick }) => {
  const fullImage = () => onImageClick(image.largeImageURL);

  return (
    <ImgGlrItm>
      <ImgGlrItemOnImg
        src={image.webformatURL}
        alt={image.tags}
        onClick={fullImage}
      />
    </ImgGlrItm>
  );
};



