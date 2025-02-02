import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => (
  <li className={styles.item} onClick={() => onClick(image.largeImageURL)}>
    <img src={image.webformatURL} alt="" className={styles.image} />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
