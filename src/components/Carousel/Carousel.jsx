import './Carousel.scss';

import React from 'react';
import ImageGallery from 'react-image-gallery';

const Carousel = () => {
  const images = [
    {
      original:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQVyTIfHoyc12eWXAJQ-B96BL5IuG0dM57NgEuVgwL2lD-Mb868',
      thumbnail:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQVyTIfHoyc12eWXAJQ-B96BL5IuG0dM57NgEuVgwL2lD-Mb868',
    },
    {
      original:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQVyTIfHoyc12eWXAJQ-B96BL5IuG0dM57NgEuVgwL2lD-Mb868',
      thumbnail:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQVyTIfHoyc12eWXAJQ-B96BL5IuG0dM57NgEuVgwL2lD-Mb868',
    },
    {
      original:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/008.png',
      thumbnail:
        'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/008.png',
    },
    {
      original:
        'https://unite.pokemon.com/images/pokemon/pikachu/stat/stat-pikachu.png',
      thumbnail:
        'https://unite.pokemon.com/images/pokemon/pikachu/stat/stat-pikachu.png',
    },
  ];

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
