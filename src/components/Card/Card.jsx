import React, { useState } from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

const Card = ({ id, title, category, date, product }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked); // Переключение состояния
  };

  return (
    <div className='card'>
      <div className='card__img-container'>
        <input
          type='checkbox'
          id={`select-card-${id}`}
          className='card__select-checkbox'
        />
        <label htmlFor={`select-card-${id}`}></label>
        <img src={product} alt={title} className='card__img' />
      </div>
      <div className='card__description'>
        <div className='card__container'>
          <h2 className='card__name'>{title}</h2>
          <div
            className={`card__like ${isLiked ? 'card__like_active' : ''}`}
            onClick={handleLikeClick}
          ></div>
        </div>
        <div className='card__box'>
          <p className='card__category'>{category}</p>
          <p className='card__date'>{date}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
};

export default Card;
