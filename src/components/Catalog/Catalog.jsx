import React from 'react';
import './Catalog.scss';

const Catalog = () => {
  return (
    <div className='catalog'>
      <div className='catalog__left-block'>
        <h2 className='catalog__title'>Каталог</h2>
        <div className='catalog__search-box'>
          <input
            type='text'
            placeholder='Поиск'
            className='catalog__search-input'
          />
          <button className='catalog__search-button'></button>
        </div>
        <p className='catalog__categories'>Категория</p>
      </div>
      <div className='catalog__right-block'>
        <div className='catalog__box'>
          <p className='catalog__sort'>Сортировка</p>
          <div className='catalog__switcher'>
            <button
              className='catalog__view-button catalog__view-list'
              aria-label='List View'
            ></button>
            <button
              className='catalog__view-button catalog__view-tile'
              aria-label='Tile View'
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
