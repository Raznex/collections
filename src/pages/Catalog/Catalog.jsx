import React, { useEffect, useState } from 'react';
import './Catalog.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CardList from '../../components/CardList/CardList';
import { getAllModels, getModelBySearch, getUserModels } from '../../utils/api';
import { useStore } from '../../utils/store/store';

const Catalog = () => {
  const [activeView, setActiveView] = useState('list');
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { isErrorPopupOpen, setErrorPopup } = useStore();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      getAllModels().then((data) => {
        const updatedCards = data.user_data.map((card) => ({
          ...card,
          isLiked: data.favorite_models.includes(card.id),
        }));
        setCards(updatedCards);
        setIsLoading(false);
      });
    } else if (location.pathname === '/my-models') {
      getUserModels().then((data) => {
        setCards(data.user_models);
        setIsLoading(false);
      });
    }
  }, []);

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
    getModelBySearch(data)
      .then((data) => {
        setCards(data.user_data);
      })
      .catch(() => {
        console.log(1);
        setErrorPopup(true);
      });
  };

  return (
    <>
      {isLoading ? (
        <>
          <p className='loading'>Загрузка</p>
        </>
      ) : (
        <div className='catalog'>
          <div className='catalog__left-block'>
            <h2 className='catalog__title'>Каталог</h2>
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
            <p className='catalog__categories'>Категория</p>
            <button
              className='catalog__addbutton'
              onClick={() => {
                navigate('/addmodel');
              }}
            >
              Добавить модель
            </button>
          </div>
          <div className='catalog__right-block'>
            <div className='catalog__box'>
              <p className='catalog__sort'>Сортировка</p>
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
            <CardList cards={cards} view={activeView} />
          </div>
        </div>
      )}
    </>
  );
};

export default Catalog;
