import React, { useEffect, useState } from 'react';
import './Card.scss';
import { useNavigate } from 'react-router-dom';
import productImage from '../../assets/icons/panda.jpg';
import { addModelToFavourite } from '../../utils/api';
import { useStore } from '../../utils/store/store';
import nophoto from '../../assets/icons/nophoto.png';
import { constLanguagePack } from '../../utils/Language/LanguagePack';

const Card = ({ card, view, tab }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(card.isLiked);
  const [image, setImage] = useState(card.thumbnail);
  const { setErrorPopup, language } = useStore();
  const handleLikeClick = () => {
    addModelToFavourite(card.id)
      .then(() => {
        setIsLiked(!isLiked);
      })
      .catch(() => {
        setErrorPopup(true);
      });
  };

  useEffect(() => {
    if (location.pathname === '/my-models' && tab === 'all') {
      setIsLiked(card.favorite);
    }
    if (card.thumbnail) {
      const base64Prefix = 'data:image/jpeg;base64,';
      const imageSrc = card.thumbnail.startsWith('data:image')
        ? card.thumbnail
        : `${base64Prefix}${card.thumbnail}`;
      setImage(imageSrc);
    }
  }, [tab]);

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
          src={card.thumbnail ? image : nophoto}
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
              ? `${constLanguagePack.Manufacturer[language]} : ${card.attributes?.Производитель}`
              : `${constLanguagePack.Series[language]}: ${card.attributes?.Категория}`}
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
