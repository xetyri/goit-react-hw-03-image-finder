import s from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';

function ImageGalleryItem({ webformatURL, tags , largeImageURL ,getLargeIMG}) {
    return (
        <li className={s.ImageGalleryItem}>
            <img src={webformatURL}
                alt={tags}
                className={s.ImageGalleryItem_image}
                onClick={()=>getLargeIMG({largeImageURL})}
            />
        </li>
    )
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  getLargeIMG: PropTypes.func.isRequired,  
};

export default ImageGalleryItem;