import React from 'react';
import './MainPage.scss';
import CardList from '../../components/CardList/CardList';

const MainPage = () => {
  return (
    <div className='mainPage'>
      <CardList view={'tile'} />
    </div>
  );
};

export default MainPage;
