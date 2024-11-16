import './Carousel.scss';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import nophoto from '../../assets/icons/nophoto.png';

const Carousel = ({ card }) => {
  let images;
  if (card.photos[0]) {
    images = card.photos.map((photo) => {
      const base64Prefix = 'data:image/jpeg;base64,';
      const imageSrc = photo.startsWith('data:image')
        ? photo
        : `${base64Prefix}${photo}`;

      return {
        original: imageSrc,
        thumbnail: imageSrc,
      };
    });
  } else {
    images = [
      {
        original: nophoto,
        thumbnail: nophoto,
      },
    ];
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
