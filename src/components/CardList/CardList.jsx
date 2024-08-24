import React from 'react';
import './CardList.scss'; // Исправлен путь (удалил лишнее .scss)
import productImage from '../../assets/icons/panda.jpg'; // Импорт изображения
import Card from './../Card/Card';

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
    {
      title: 'Модель 2',
      manufacturer: 'Производитель 1',
      category: 'Категория 2',
      date: '25 октября',
      product: productImage,
      description:
        'Небольшое описание взятое из полноценной карточки модели. Небольшое описание взятое из полноценной карточки модели. Небольшое описание взятое из полноценной карточки модели. Небольшое описание  взятое из полноценной карточки модели. Небольшое описание взятое из полноценной карточки модели.',
    },
    {
      title: 'Модель 2',
      manufacturer: 'Производитель',
      category: 'Категория 2',
      date: '25 октября',
      product: productImage,
      description:
        'Небольшое описание взятое из полноценной карточки модели. Небольшое описание взятое из полноценной карточки модели. Небольшое описание взятое из полноценной карточки модели. Небольшое описание  взятое из полноценной карточки модели. Небольшое описание взятое из полноценной карточки модели.',
    },
  ];

  const cards = cardsData.map((card, index) => (
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
    <div className={`cards ${view === 'list' ? 'list-view' : 'tile-view'}`}>
      {cards}
    </div>
  );
};

export default CardList;
