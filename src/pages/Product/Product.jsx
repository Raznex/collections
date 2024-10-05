import React, { useEffect, useState } from 'react';
import Auction from '../../components/Auction/Auction';
import './Product.scss';
import Carousel from '../../components/Carousel/Carousel';
import { addModelToFavourite, getDetailModel } from '../../utils/api';
import { useNavigate, useParams } from 'react-router-dom';

const Product = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [card, setCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const cardId = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getDetailModel(cardId)
      .then((data) => {
        setCard(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleLikeClick = () => {
    addModelToFavourite(card.id).then(() => {
      setIsLiked(!isLiked);
    });
  };

  return (
    <section className='product'>
      {isLoading ? (
        <p className='loading'>Загрузка...</p>
      ) : (
        <>
          {error ? (
            <p className='loading'>Произошла ошибка</p>
          ) : (
            <>
              <a href='/' className='product__back'>
                Назад
              </a>
              <p className='product__error'>{error}</p>
              <div className='product__container'>
                <div className='product__slider'>
                  <Carousel />
                </div>
                <div className='product__right'>
                  <div className='product__right_up'>
                    <div className='product__info'>
                      <h2 className='product__title'>
                        {card?.model_data.collectable_name}
                      </h2>
                      <ul className='product__settings'>
                        <li className='product__item'>
                          <span className='product__item_span'>
                            Производитель:&nbsp;
                          </span>
                          {card?.attributes_data.Производитель}
                        </li>
                        {/*<li className='product__item'>*/}
                        {/*  <span className='product__item_span'>*/}
                        {/*    Код модели:&nbsp;*/}
                        {/*  </span>*/}
                        {/*  {card?.attributes_data.Производитель}*/}
                        {/*</li>*/}
                        <li className='product__item'>
                          <span className='product__item_span'>
                            Категория:&nbsp;
                          </span>
                          {card?.attributes_data.Категория}
                        </li>
                        <li className='product__item'>
                          <span className='product__item_span'>Год:&nbsp;</span>
                          {card?.attributes_data.Год}
                        </li>
                        <li className='product__item'>
                          <span className='product__item_span'>
                            Место нахождения:&nbsp;
                          </span>
                          {card?.attributes_data.Местонахождение}
                        </li>
                        <li className='product__item'>
                          <span className='product__item_span'>
                            Упаковка:&nbsp;
                          </span>
                          Не повреждена
                        </li>
                      </ul>
                      <button className='product__buy'>Купить</button>
                    </div>
                    <div className='product__editing'>
                      <div className='product__tools'>
                        <button
                          className={`product__tool product__archive ${isLiked ? 'product__archive_active' : ''}`}
                        ></button>
                        <button
                          className={`product__tool product__pencil ${isLiked ? 'product__pencil_active' : ''}`}
                          onClick={() => navigate(`/editmodel/${card.id}`)}
                        ></button>
                        <button
                          className={`product__tool product__like ${isLiked ? 'product__like_active' : ''}`}
                          onClick={handleLikeClick}
                        ></button>
                      </div>
                      <p className='product__price'>
                        Цена:{' '}
                        <span className='product__price_span'>
                          {card.average_price ? card.average_price : 0}&nbsp;
                          {'Р'}
                        </span>
                      </p>
                    </div>
                  </div>
                  <Auction />
                </div>
              </div>
              <div className='product__description'>
                <h3 className='product__description_title'>Описание:</h3>
                <p className='product__description_text'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam consequatur debitis deleniti deserunt distinctio enim
                  eum harum in libero minus molestias nobis nulla, omnis
                  possimus quam quis, sint suscipit, voluptate.
                </p>
                <p className='product__date'>Дата публикации 23 июня 2024</p>
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default Product;
