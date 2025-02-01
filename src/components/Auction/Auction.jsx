import React from 'react';
import { useForm } from 'react-hook-form';
import './Auction.scss';
import { useNavigate } from 'react-router-dom';
import { takePriceAuction } from '../../utils/api';
import { useStore } from '../../utils/store/store';
import { constLanguagePack } from '../../utils/Language/LanguagePack';

const Auction = ({ cardId, card }) => {
  const { isErrorPopupOpen, setErrorPopup, language } = useStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      price: '',
    },
  });
  const onSubmit = (data) => {
    takePriceAuction(data, cardId)
      .then(() => {
        navigate(`/product/${cardId}`);
      })
      .catch(() => {
        setErrorPopup(true);
      });
  };

  return (
    <div className='auction'>
      <div className='auction__price'>
        <p className='auction__market-price'>
          {constLanguagePack.MarketPrice[language]}:
        </p>
        <p className='auction__market-price auction__market-price_currency'>
          {card.average_price} {card.buy_price_currency}
        </p>
      </div>
      <p className='auction__voted'>
        {constLanguagePack.TotalVoters[language]}: {card.voters_count}
      </p>
      <div className='auction__your-price'>
        <label className='auction__label'>
          {constLanguagePack.SuggestYourPrice[language]}
        </label>
        <form onSubmit={handleSubmit(onSubmit)} className='auction__form'>
          <input
            placeholder={`${constLanguagePack.ForExample[language]} 10000`}
            className='auction__input'
            {...register('price', { required: true })}
          />
          <button className='auction__sumbit'>
            {constLanguagePack.MyPrice[language]}
          </button>
        </form>
        <p className='auction__history'>
          ${constLanguagePack.PriceHistory[language]}: 18600р
        </p>
      </div>
    </div>
  );
};

export default Auction;
