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

const CardList = ({ view, tab }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cards, setCards] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();
  const { setErrorPopup, setLoading } = useStore();
  const maxCards = view === 'list' ? 8 : 21;

  useEffect(() => {
    if (location.pathname === '/catalog') {
      getAllModels(currentPage, maxCards)
        .then((data) => {
          const updatedCards = data.all_models.map((card) => ({
            ...card,
            isLiked: data.favorite_models.includes(card.id),
          }));
          setCards(updatedCards);
          setTotalPages(Math.ceil(data.total_elements / maxCards));
          setLoading(false);
        })
        .catch(() => {
          setErrorPopup(true);
        });
    } else if (location.pathname === '/my-models' && tab === 'all') {
      getUserModels(currentPage, maxCards).then((data) => {
        setCards(data.user_models);
        setLoading(false);
      });
    } else if (location.pathname === '/my-models' && tab === 'favorites') {
      getUserFavouriteModels(currentPage, maxCards)
        .then((data) => {
          const updatedCards = data.favorite_models.map((card) => ({
            ...card,
            isLiked: true,
          }));
          setCards(updatedCards);
          setLoading(false);
        })
        .catch(() => {
          setErrorPopup(true);
        });
    } else if (location.pathname === '/my-models' && tab === 'archive') {
      getUserArchivedModels(currentPage, maxCards)
        .then((data) => {
          setCards(data.archived_models);
          setLoading(false);
        })
        .catch(() => {
          setErrorPopup(true);
        });
    } else if (location.pathname === '/') {
      getAllModels(1, 20)
        .then((data) => {
          setCards(data.all_models);
          setLoading(false);
        })
        .catch(() => {
          setErrorPopup(true);
        });
    }
  }, [currentPage, maxCards, tab]);

  const paginate = (pageNumber) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(pageNumber);
  };

  return (
    <div className='cards'>
      <div
        className={`cards__container ${view === 'list' ? 'list-view' : 'tile-view'}`}
      >
        {cards.slice(0, 100).map((card) => (
          <Card key={card.id} card={card} view={view} tab={tab} />
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
