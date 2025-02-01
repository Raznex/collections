import './PageNotFound.scss';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { constLanguagePack } from '../../utils/Language/LanguagePack';
import { useStore } from '../../utils/store/store';

const PageNotFound = () => {
  const navigate = useNavigate();
  const { language } = useStore();
  return (
    <div className='pnf'>
      <p className='pnf__title'>404</p>
      <p className='pnf__text'>{constLanguagePack.PageExist[language]}</p>
      <button
        className='pnf__back'
        onClick={() => {
          navigate(-1);
        }}
      >
        {constLanguagePack.Back[language]}
      </button>
    </div>
  );
};

export default PageNotFound;
