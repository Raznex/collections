import React, { useEffect, useState } from 'react';
import './Catalog.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CardList from '../../components/CardList/CardList';
import {
  checkAuth,
  getAllModels,
  getModelBySearch,
  getUserArchivedModels,
  getUserFavouriteModels,
  getUserModels,
} from '../../utils/api';
import { useStore } from '../../utils/store/store';
import CatalogTabs from '../../components/CatalogTabs/CatalogTabs';
import { constLanguagePack } from '../../utils/Language/LanguagePack';

const Catalog = () => {
  const [activeView, setActiveView] = useState('list');
  const { isLoading, setErrorPopup, setLoading, language } = useStore();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all'); // Активный таб
  const [currentPage, setCurrentPage] = useState(1);
  const [cards, setCards] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const location = useLocation();
  const maxCards = activeView === 'list' ? 8 : 21;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      searchName: '',
    },
  });

  const onSubmit = (data) => {
    setSearch(data.searchName);
  };

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
    } else if (location.pathname === '/my-models' && activeTab === 'all') {
      getUserModels(currentPage, maxCards, search).then((data) => {
        setCards(data.user_models);
        setTotalPages(Math.ceil(data.total_elements / maxCards));
        setLoading(false);
      });
    } else if (
      location.pathname === '/my-models' &&
      activeTab === 'favorites'
    ) {
      getUserFavouriteModels(currentPage, maxCards)
        .then((data) => {
          const updatedCards = data.favorite_models.map((card) => ({
            ...card,
            isLiked: true,
          }));
          setCards(updatedCards);
          setTotalPages(Math.ceil(data.favorite_models.length / maxCards));
          setLoading(false);
        })
        .catch(() => {
          setErrorPopup(true);
        });
    } else if (location.pathname === '/my-models' && activeTab === 'archive') {
      getUserArchivedModels(currentPage, maxCards)
        .then((data) => {
          setCards(data.archived_models);
          setTotalPages(Math.ceil(data.archived_models.length / maxCards));
          setLoading(false);
        })
        .catch(() => {
          setErrorPopup(true);
        });
    }
  }, [currentPage, maxCards, activeTab, search]);

  return (
    <>
      {isLoading ? (
        <>
          <p className='loading'>Загрузка</p>
        </>
      ) : (
        <div className='catalog'>
          <div className='catalog__left-block'>
            <h2 className='catalog__title'>
              {location.pathname === '/catalog'
                ? constLanguagePack.AddModel[language]
                : constLanguagePack.MyModels[language]}
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='catalog__search-box'
            >
              <input
                type='text'
                placeholder='Поиск'
                className='catalog__search-input'
                {...register('searchName')}
              />
              <button type='submit' className='catalog__search-button'></button>
            </form>
            {/*<p className='catalog__categories'>Категория</p>*/}
            <button
              className='catalog__addbutton'
              onClick={() => {
                navigate('/addmodel');
              }}
            >
              constLanguagePack.AddModel[language]
            </button>
          </div>
          <div className='catalog__right-block'>
            {location.pathname === '/catalog' ? (
              ''
            ) : (
              <CatalogTabs setActiveTab={setActiveTab} activeTab={activeTab} />
            )}
            <div className='catalog__box'>
              <p className='catalog__sort'>
                constLanguagePack.Sorting[language]
              </p>
              <div className='catalog__switcher'>
                <button
                  className={`catalog__view-button catalog__view-tile ${activeView === 'tile' ? 'active' : ''}`}
                  aria-label='Tile View'
                  onClick={() => setActiveView('tile')}
                ></button>
                <button
                  className={`catalog__view-button catalog__view-list ${activeView === 'list' ? 'active' : ''}`}
                  aria-label='List View'
                  onClick={() => setActiveView('list')}
                ></button>
              </div>
            </div>
            <CardList
              view={activeView}
              activeTab={activeTab}
              setCurrentPage={setCurrentPage}
              cards={cards}
              totalPages={totalPages}
              currentPage={currentPage}
              maxCards={maxCards}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Catalog;
