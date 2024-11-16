import React, { useState } from 'react';
import './Card.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import productImage from '../../assets/icons/panda.jpg';
import { addModelToFavourite } from '../../utils/api';
import { useStore } from '../../utils/store/store';
import nophoto from '../../assets/icons/nophoto.png';

const Card = ({ card, view }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(card.isLiked);
  const { isErrorPopupOpen, setErrorPopup } = useStore();
  const handleLikeClick = () => {
    addModelToFavourite(card.id)
      .then(() => {
        setIsLiked(!isLiked);
      })
      .catch(() => {
        setErrorPopup(true);
      });
  };

  return (
    <div className={`card card-${view}`}>
      <div className='card__img-container'>
        {/*<input*/}
        {/*  type='checkbox'*/}
        {/*  id={`select-card-${card.id}`}*/}
        {/*  className='card__select-checkbox'*/}
        {/*/>*/}
        <label htmlFor={`select-card-${card.id}`}></label>
        <img
          src={card.thumbnail ? card.thumbnail : nophoto}
          alt={card?.collectable_name}
          className='card__img'
          onClick={() => navigate(`/product/${card.id}`)}
        />
      </div>
      <div className='card__description'>
        <div className='card__container'>
          <div className='card__namelike'>
            <h2
              className='card__name'
              onClick={() => navigate(`/product/${card.id}`)}
            >
              {card?.collectable_name}
            </h2>
            <button
              className={`card__like ${isLiked ? 'card__like_active' : ''}`}
              onClick={handleLikeClick}
            />
          </div>
          <p className='card__info'>
            {view === 'list'
              ? `Производитель: ${card.attributes?.Производитель}`
              : `Категория: ${card.attributes?.Категория}`}
          </p>
          {view === 'list' && (
            <p className='card__description-text'>{card?.description}</p>
          )}
        </div>
        <div className='card__box'>
          <p className='card__date'>{card?.creation_date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
