import React from 'react';
import './CatalogTabs.scss';

const CatalogTabs = ({ setActiveTab, activeTab }) => {
  return (
    <div className='catalog__tabs'>
      <button
        className={`catalog__tab ${activeTab === 'all' ? 'active' : ''}`}
        onClick={() => setActiveTab('all')}
      >
        Все модели
      </button>
      <button
        className={`catalog__tab ${activeTab === 'favorites' ? 'active' : ''}`}
        onClick={() => setActiveTab('favorites')}
      >
        Избранное
      </button>
      <button
        className={`catalog__tab ${activeTab === 'archive' ? 'active' : ''}`}
        onClick={() => setActiveTab('archive')}
      >
        Архив
      </button>
    </div>
  );
};

export default CatalogTabs;
