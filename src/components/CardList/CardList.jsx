import React from 'react';
import './CardList.scss'; // Исправлен путь (удалил лишнее .scss)
import productImage from '../../assets/icons/panda.jpg'; // Импорт изображения
import Card from './../Card/Card';

const CardList = () => {
  const cardsData = [
    {
      title: 'Модель 1',
      category: 'Категория 1',
      date: '24 октября',
      product: productImage,
    },
    {
      title: 'Модель 2',
      category: 'Категория 2',
      date: '25 октября',
      product: productImage,
    },
    {
      title: 'Модель 2',
      category: 'Категория 2',
      date: '25 октября',
      product: productImage,
    },
    {
      title: 'Модель 2',
      category: 'Категория 2',
      date: '25 октября',
      product: productImage,
    },
    {
      title: 'Модель 1',
      category: 'Категория 1',
      date: '24 октября',
      product: productImage,
    },
    {
      title: 'Модель 2',
      category: 'Категория 2',
      date: '25 октября',
      product: productImage,
    },
    {
      title: 'Модель 2',
      category: 'Категория 2',
      date: '25 октября',
      product: productImage,
    },
    {
      title: 'Модель 2',
      category: 'Категория 2',
      date: '25 октября',
      product: productImage,
    },
  ];

  const cards = cardsData.map((card, index) => (
    <Card
      key={index}
      id={index}
      title={card.title}
      category={card.category}
      date={card.date}
      product={card.product} // Передача изображения как пропс
    />
  ));

  return (
    <div className='cards'>
      <div className='cards__container'>{cards}</div>
    </div>
  );
};

export default CardList;
