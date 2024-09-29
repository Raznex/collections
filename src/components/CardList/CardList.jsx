import React, { useState } from 'react';
import './CardList.scss'; // Исправлен путь (удалил лишнее .scss)
import productImage from '../../assets/icons/panda.jpg'; // Импорт изображения
import Card from './../Card/Card';
import Pagination from './../Pagination/Pagination';

const CardList = ({ view }) => {
  const cardsData = [
    {
      title: 'Модель 1',
      manufacturer: 'Производитель 1',
      category: 'Категория 1',
      date: '24 октября',
      product: productImage,
      description:
        'Небольшое описание взятое из полноценной карточки модели. Небольшое описание взятое из полноценной карточки модели. Небольшое описание взятое из полноценной карточки модели. Небольшое описание  взятое из полноценной карточки модели. Небольшое описание взятое из полноценной карточки модели.',
    },
  ];

  const maxCards = view === 'list' ? 8 : 21;
  const cardsPerPage = maxCards;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const cards = cardsData
    .slice(0, maxCards)
    .map((card, index) => (
      <Card
        key={index}
        id={index}
        title={card.title}
        manufacturer={card.manufacturer}
        category={card.category}
        date={card.date}
        product={card.product}
        description={card.description}
        view={view}
      />
    ));

  return (
    <div className='cards'>
      <div
        className={`cards__container ${view === 'list' ? 'list-view' : 'tile-view'}`}
      >
        {cards}
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
