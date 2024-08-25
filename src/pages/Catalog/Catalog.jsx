import React, { useState } from 'react';
import './Catalog.scss';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import CardList from '../../components/CardList/CardList';

const Catalog = () => {
  const [activeView, setActiveView] = useState('list');

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
              className={`catalog__view-button catalog__view-tile ${activeView === 'tile' ? 'active' : ''}`}
              aria-label='Tile View'
              onClick={() => setActiveView('tile')}
            ></button>
            <button
              className={`catalog__view-button catalog__view-list ${activeView === 'list' ? 'active' : ''}`}
              aria-label='List View'
              onClick={() => setActiveView('list')}
            ></button>
          </div>
        </div>
        <CardList view={activeView} />
      </div>
    </div>
  );
};

export default Catalog;
