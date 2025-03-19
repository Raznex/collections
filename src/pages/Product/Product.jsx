import React, { useEffect, useState } from 'react';
import Auction from '../../components/Auction/Auction';
import './Product.scss';
import Carousel from '../../components/Carousel/Carousel';
import { addModelToFavourite, getDetailModel } from '../../utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from '../../utils/store/store';
import { constLanguagePack } from '../../utils/Language/LanguagePack';

const Product = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [card, setCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const cardId = useParams().id;
  const navigate = useNavigate();
  const { isAuthenticated, setErrorPopup, setRegisterPopup, language } =
    useStore();

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
    if (isAuthenticated) {
      addModelToFavourite(cardId)
        .then(() => {
          setIsLiked(!isLiked);
        })
        .catch(() => setErrorPopup(true));
    } else {
      setRegisterPopup(true);
    }
  };

  const handleEditClick = () => {
    if (isAuthenticated) {
      navigate(`/editmodel/${cardId}`);
    } else {
      setRegisterPopup(true);
    }
  };

  const handleArchiveClick = () => {
    if (isAuthenticated) {
      navigate(`/editmodel/${cardId}`);
    } else {
      setRegisterPopup(true);
    }
  };

  const goBack = () => {
    navigate(-1);
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
              <button onClick={() => navigate(-1)} className='product__back'>
                {constLanguagePack.Back[language]}
              </button>
              <p className='product__error'>{error}</p>
              <div className='product__container'>
                <div className='product__slider'>
                  <Carousel card={card} />
                </div>
                <div className='product__right'>
                  <div className='product__right_up'>
                    <div className='product__info'>
                      <h2 className='product__title'>
                        {card?.collectable_name}
                      </h2>
                      <ul className='product__settings'>
                        <li className='product__item'>
                          <span className='product__item_span'>
                            {constLanguagePack.Manufacturer[language]}:&nbsp;
                          </span>
                          {card?.attributes.Производитель}
                        </li>
                        <li className='product__item'>
                          <span className='product__item_span'>
                            {constLanguagePack.ModelCode[language]}:&nbsp;
                          </span>
                          {card?.article}
                        </li>
                        <li className='product__item'>
                          <span className='product__item_span'>
                            {constLanguagePack.Series[language]}:&nbsp;
                          </span>
                          {card?.attributes.Категория}
                        </li>
                        <li className='product__item'>
                          <span className='product__item_span'>
                            {constLanguagePack.Scale[language]}:&nbsp;
                          </span>
                          {card?.scale}
                        </li>
                        <li className='product__item'>
                          <span className='product__item_span'>
                            {constLanguagePack.Year[language]}:&nbsp;
                          </span>
                          {card?.attributes.Год}
                        </li>
                        <li className='product__item'>
                          <span className='product__item_span'>
                            {constLanguagePack.Location[language]}:&nbsp;
                          </span>
                          {card?.attributes.Местонахождение}
                        </li>
                        <li className='product__item'>
                          <span className='product__item_span'>
                            {constLanguagePack.Card[language]}:&nbsp;
                          </span>
                          {card.is_damaged
                            ? constLanguagePack.Damaged[language]
                            : constLanguagePack.Good[language]}
                        </li>
                        <li className='product__item'>
                          <span className='product__item_span'>
                            {constLanguagePack.Sale[language]}:&nbsp;
                          </span>
                          {card.is_for_sale ? 'Продается' : 'Не продается'}
                        </li>
                      </ul>
                      {/*<button className='product__buy'>Купить</button>*/}
                    </div>
                    <div className='product__editing'>
                      <div className='product__tools'>
                        {card.is_owner ? (
                          <>
                            <button
                              className={`product__tool product__archive ${isLiked ? 'product__archive_active' : ''}`}
                              onClick={() => handleArchiveClick()}
                            ></button>
                            <button
                              className={`product__tool product__pencil ${isLiked ? 'product__pencil_active' : ''}`}
                              onClick={() => handleEditClick()}
                            ></button>
                          </>
                        ) : (
                          ''
                        )}
                        <button
                          className={`product__tool product__like ${isLiked ? 'product__like_active' : ''}`}
                          onClick={() => {
                            handleLikeClick();
                          }}
                        ></button>
                      </div>
                      <p className='product__price'>
                        {constLanguagePack.Price[language]}:{' '}
                        <span className='product__price_span'>
                          {card.buy_price ? card.buy_price : 0}&nbsp;
                          {card.buy_price_currency}
                        </span>
                      </p>
                    </div>
                  </div>
                  {/*<Auction cardId={cardId} card={card} />*/}
                </div>
              </div>
              <div className='product__description'>
                <h3 className='product__description_title'>
                  {constLanguagePack.Description[language]}:
                </h3>
                <p className='product__description_text'>
                  {card.description.length
                    ? card.description
                    : constLanguagePack.NoDescription[language]}
                </p>
                <p className='product__date'>
                  {constLanguagePack.ReleaseDate[language]} {card.creation_date}
                </p>
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default Product;
