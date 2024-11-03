import './Carousel.scss';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import nophoto from '../../assets/icons/nophoto.png';

const Carousel = ({ card }) => {
  let images;
  if (card.photos.length) {
    images = [
      {
        original: nophoto,
        thumbnail: nophoto,
      },
    ];
  } else {
    images = card.photos.map((photo) => ({
      original: photo,
      thumbnail: photo,
    }));
  }

  return (
    <div>
      <ImageGallery
        items={images}
        infinity={true}
        showFullscreenButton={false}
        showPlayButton={false}
        showNav={!!images.length}
      />
    </div>
  );
};

export default Carousel;
