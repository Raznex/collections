import { useState } from 'react';
import './Card.scss';
import product from '../../assets/icons/panda.jpg';

const Card = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked); // Переключение состояния
  };

  return (
    <div className='card'>
      <img src={product} alt='product' className='card__img' />
      <div className='card__description'>
        <div className='card__container'>
          <h2 className='card__name'>Название продукта</h2>
          <div
            className={`card__like ${isLiked ? 'card__like_active' : ''}`}
            onClick={handleLikeClick}
          ></div>
        </div>
        <div className='card__box'>
          <p className='card__category'>Категория</p>
          <p className='card__date'>24 октября</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
