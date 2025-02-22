import React, { useState } from 'react';
import { Pencil } from 'lucide-react';
import './Profile.scss';
import { useForm } from 'react-hook-form';
import CountryPicker from '../../components/CountryPicker/CountryPicker';
import ava from '../../assets/icons/panda.jpg';
import CurrencySelect from '../../components/Selects/CurrencySelect/CurrencySelect';
import { useStore } from '../../utils/store/store';
import { constLanguagePack } from '../../utils/Language/LanguagePack';
const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currency, setCurrency] = useState('RUB');
  const toggleEditButton = () => {
    !isEditing ? setIsEditing(true) : setIsEditing(false);
  };
  const { language } = useStore();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: 'Имя Фамилия',
      email: 'pochta@gmail.com',
      city: 'Город',
    },
  });
  // const onSubmit = (data) => console.log(data);
  return (
    <form className='profile'>
      <div className='profile__info'>
        <div className='profile__avatar'>
          <img src={ava} alt='Avatar' className='profile__photo' />
          <div className='profile__change-avatar'>
            <input type='file' className='profile__avatar-input' />
            <Pencil />
          </div>
        </div>
        <p className='profile__nickname'>
          {constLanguagePack.NickName[language]}
        </p>
        <input
          type='text'
          className={`profile__name ${isEditing ? 'profile__name_active' : ''}`}
          {...register('name')}
          disabled={!isEditing}
        />
        <p className='profile__date'>
          {constLanguagePack.DateCreateAccount[language]}: 12 июня 2020
        </p>
      </div>
      <div className='profile__settings'>
        <h1 className='profile__title'>
          {constLanguagePack.Settings[language]}
        </h1>
        <input
          type='text'
          className={`profile__email ${isEditing ? 'profile__email_active' : ''}`}
          {...register('email')}
          disabled={!isEditing}
        />
        <div className='profile__location'>
          <div className='profile__inputs'>
            <div className='profile__inputs_left'>
              <h2 className='profile__subtitle'>
                {constLanguagePack.Location[language]}
              </h2>
              <CountryPicker isEditing={isEditing} />
              <input
                type='text'
                className={`profile__city ${isEditing ? 'profile__city_active' : ''}`}
                {...register('city')}
                disabled={!isEditing}
              />
            </div>
            <div className='profile__inputs_left'>
              <h2 className='profile__subtitle'>
                {constLanguagePack.Currency[language]}
              </h2>
              <CurrencySelect
                setCurrency={setCurrency}
                currency={currency}
                isEditing={isEditing}
              />
            </div>
          </div>
        </div>
        <div className='profile__buttons'>
          <button
            className='profile__button  profile__button_edit'
            type='button'
            onClick={() => toggleEditButton()}
          >
            {`${isEditing ? 'Сохранить' : 'Редактировать'}`}
          </button>
          <button
            className='profile__button profile__button_pass'
            type='button'
          >
            {constLanguagePack.ChangePassword[language]}
          </button>
          <button className='profile__button' type='button'>
            {constLanguagePack.LogOut[language]}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Profile;
