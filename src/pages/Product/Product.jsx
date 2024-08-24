import React from 'react';
import Auction from '../../components/Auction/Auction';
import './Product.scss';
import Carousel from '../../components/Carousel/Carousel';

const Product = () => {
  const isLiked = true;

  return (
    <section className='product'>
      <a href='/' className='product__back'>
        Назад
      </a>
      <div className='product__container'>
        <div className='product__slider'>
          <Carousel />
        </div>
        <div className='product__right'>
          <div className='product__right_up'>
            <div className='product__info'>
              <h2 className='product__title'>Название модели</h2>
              <ul className='product__settings'>
                <li className='product__item'>
                  <span className='product__item_span'>
                    Производитель:&nbsp;
                  </span>
                  Название
                </li>
                <li className='product__item'>
                  <span className='product__item_span'>Код модели:&nbsp;</span>
                  123123
                </li>
                <li className='product__item'>
                  <span className='product__item_span'>Категория:&nbsp;</span>
                  Категория
                </li>
                <li className='product__item'>
                  <span className='product__item_span'>Год:&nbsp;</span>
                  Владивосток 2000
                </li>
                <li className='product__item'>
                  <span className='product__item_span'>
                    Место нахождения:&nbsp;
                  </span>
                  Место
                </li>
                <li className='product__item'>
                  <span className='product__item_span'>Упаковка:&nbsp;</span>Не
                  повреждена
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
                ></button>
                <button
                  className={`product__tool product__like ${isLiked ? 'product__like_active' : ''}`}
                ></button>
              </div>
              <p className='product__price'>
                Цена:{' '}
                <span className='product__price_span'>20500&nbsp;{'Р'}</span>
              </p>
            </div>
          </div>
          <Auction />
        </div>
      </div>
      <div className='product__description'>
        <h3 className='product__description_title'>Описание:</h3>
        <p className='product__description_text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          consequatur debitis deleniti deserunt distinctio enim eum harum in
          libero minus molestias nobis nulla, omnis possimus quam quis, sint
          suscipit, voluptate.
        </p>
        <p className='product__date'>Дата публикации 23 июня 2024</p>
      </div>
    </section>
  );
};

export default Product;
