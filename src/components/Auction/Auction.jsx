import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import InputLogin from '../InputLogin/InputLogin';
import './Auction.scss';

const Auction = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      myPrice: '',
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className='auction'>
      <div className='auction__price'>
        <p className='auction__market-price'>Рыночная цена:</p>
        <p className='auction__market-price auction__market-price_currency'>
          19000 Р
        </p>
      </div>
      <p className='auction__voted'>Количество проголосовавших: 1234</p>
      <div className='auction__your-price'>
        <label className='auction__label'>Предложите свою цену</label>
        <form onSubmit={handleSubmit(onSubmit)} className='auction__form'>
          <input
            placeholder={'Например 10000'}
            className='auction__input'
            {...register('myPrice', { required: true })}
          />
          <button className='auction__sumbit'>Моя цена</button>
        </form>
        <p className='auction__history'>История цен: 18600р</p>
      </div>
    </div>
  );
};

export default Auction;
