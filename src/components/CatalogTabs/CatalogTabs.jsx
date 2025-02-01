import React from 'react';
import './CatalogTabs.scss';
import { useStore } from '../../utils/store/store';
import { constLanguagePack } from '../../utils/Language/LanguagePack';

const CatalogTabs = ({ setActiveTab, activeTab }) => {
  const { language } = useStore();
  return (
    <div className='catalog__tabs'>
      <button
        className={`catalog__tab ${activeTab === 'all' ? 'active' : ''}`}
        onClick={() => setActiveTab('all')}
      >
        {constLanguagePack.AllModels[language]}
      </button>
      <button
        className={`catalog__tab ${activeTab === 'favorites' ? 'active' : ''}`}
        onClick={() => setActiveTab('favorites')}
      >
        {constLanguagePack.Favorites[language]}
      </button>
      <button
        className={`catalog__tab ${activeTab === 'archive' ? 'active' : ''}`}
        onClick={() => setActiveTab('archive')}
      >
        {constLanguagePack.Archive[language]}
      </button>
    </div>
  );
};

export default CatalogTabs;
