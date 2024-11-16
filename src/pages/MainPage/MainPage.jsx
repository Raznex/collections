import React from 'react';
import './MainPage.scss';
import { useForm } from 'react-hook-form';
import CardList from '../../components/CardList/CardList';

const MainPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      searchName: '',
    },
  });

  return (
    <div className='mainPage'>
      <div className='mainPage__search'>
        <a href='/catalog' className='mainPage__link'>
          Тут будут производители, нажать для перехода
        </a>
        <form
          // onSubmit={handleSubmit(onSubmit)}
          className='mainPage__search-box'
        >
          <input
            type='text'
            placeholder='Поиск'
            className='mainPage__search-input'
            {...register('searchName')}
          />
          <button type='submit' className='mainPage__search-button'></button>
        </form>
      </div>
      <CardList view={'tile'} />
    </div>
  );
};

export default MainPage;
