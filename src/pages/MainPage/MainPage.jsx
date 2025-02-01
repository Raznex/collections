import React, { useEffect, useState } from 'react';
import './MainPage.scss';
import { useForm } from 'react-hook-form';
import CardList from '../../components/CardList/CardList';
import { getAllModels } from '../../utils/api';
import { useStore } from '../../utils/store/store';
import { constLanguagePack } from '../../utils/Language/LanguagePack';

const MainPage = () => {
  const [cards, setCards] = useState([]);
  const { isLoading, setErrorPopup, setLoading, language } = useStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      searchName: '',
    },
  });
  useEffect(() => {
    {
      getAllModels(1, 20)
        .then((data) => {
          setCards(data.all_models);
          setLoading(false);
        })
        .catch(() => {
          setErrorPopup(true);
        });
    }
  }, []);

  return (
    <div className='mainPage'>
      <div className='mainPage__search'>
        <a href='/catalog' className='mainPage__link'>
          {constLanguagePack.ManufacturersProceed[language]}
        </a>
        <form
          // onSubmit={handleSubmit(onSubmit)}
          className='mainPage__search-box'
        >
          <input
            type='text'
            placeholder={`${constLanguagePack.Search[language]}`}
            className='mainPage__search-input'
            {...register('searchName')}
          />
          <button type='submit' className='mainPage__search-button'></button>
        </form>
      </div>
      <CardList view={'tile'} cards={cards} />
    </div>
  );
};

export default MainPage;
