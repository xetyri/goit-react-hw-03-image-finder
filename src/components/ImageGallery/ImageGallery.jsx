import ImageGalleryItem from "../ImageGalleryItem";
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

function ImageGallery({pictures , getLargeIMG}) {
  return (
    <ul className={s.ImageGallery}>
      {pictures.map(({ webformatURL, largeImageURL, tags, id }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          getLargeIMG={getLargeIMG}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
  getLargeIMG: PropTypes.func.isRequired,
};

export default ImageGallery;
