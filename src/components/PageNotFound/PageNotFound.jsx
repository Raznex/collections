import './PageNotFound.scss';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='pnf'>
      <p className='pnf__title'>404</p>
      <p className='pnf__text'>Такой страницы не существует</p>
      <button
        className='pnf__back'
        onClick={() => {
          navigate(-1);
        }}
      >
        Назад
      </button>
    </div>
  );
};

export default PageNotFound;
