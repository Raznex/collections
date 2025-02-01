import React, { useEffect, useState } from 'react';
import './CardList.scss';
import { useLocation } from 'react-router-dom';
import {
  getAllModels,
  getUserArchivedModels,
  getUserFavouriteModels,
  getUserModels,
} from '../../utils/api';
import { useStore } from '../../utils/store/store';
import Card from './../Card/Card';
import Pagination from './../Pagination/Pagination';

const CardList = ({
  view = 'tile',
  activeTab = 'all',
  setCurrentPage = () => {},
  cards = [],
  totalPages = 0,
  currentPage = 1,
  maxCards = 8,
}) => {
  const paginate = (pageNumber) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(pageNumber);
  };
  const { language } = useStore();
  return (
    <div className='cards'>
      <div
        className={`cards__container ${view === 'list' ? 'list-view' : 'tile-view'}`}
      >
        {cards.slice(0, maxCards).map((card) => (
          <Card key={card.id} card={card} view={view} tab={activeTab} />
        ))}
      </div>
      {location.pathname !== '/' ? (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          paginate={paginate}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default CardList;
