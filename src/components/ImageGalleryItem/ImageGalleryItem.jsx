// import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image, onImageClick }) => {
  const fullImage = () => onImageClick(image.largeImageURL);

  return (
    <li>
      <img
        src={image.webformatURL}
        alt={image.tags}
        onClick={fullImage}
      />
    </li>
  );
};



