import React, { useState } from 'react';
import './CardList.scss';
import Card from './../Card/Card';
import Pagination from './../Pagination/Pagination';

const CardList = ({ view, cards }) => {
  const maxCards = view === 'list' ? 8 : 21;
  const cardsPerPage = maxCards;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='cards'>
      <div
        className={`cards__container ${view === 'list' ? 'list-view' : 'tile-view'}`}
      >
        {cards.slice(0, maxCards).map((card) => (
          <Card key={card.id} card={card} view={view} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default CardList;
