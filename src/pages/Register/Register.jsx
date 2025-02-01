import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import InputLogin from '../../components/InputLogin/InputLogin';
import './Register.scss';
import { register, sendVerificationCode } from '../../utils/autorize';
import CSRFToken from '../../utils/csrfToken/csrfToken';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../utils/store/store';
import { constLanguagePack } from '../../utils/Language/LanguagePack';

const Register = () => {
  const [hasCode, setHasCode] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      nickname: '',
      confirm_password: '',
      code: '',
    },
  });
  const { setErrorPopup, language } = useStore();
  const password = watch('password');
  const confirm_password = watch('confirm_password');

  const onSubmit = (data) => {
    if (data.password === data.confirm_password) {
      register(data)
        .then((res) => {
          navigate('/login');
        })
        .catch(() => setErrorPopup(true));
    } else {
      errors.confirm_password = 'Пароли не совпадают';
    }
  };

  const sendCode = (data) => {
    sendVerificationCode(data).then(() => {
      setHasCode(true);
    });
  };

  return (
    <div className='register'>
      <h1 className='register__title'>{constLanguagePack.SignUp[language]}</h1>
      <form
        onSubmit={hasCode ? handleSubmit(onSubmit) : handleSubmit(sendCode)}
        className='register__form'
      >
        <div className='register__input-container'>
          <Controller
            name='email'
            control={control}
            rules={{
              required: 'Поле обязательно для заполнения',
            }}
            render={({ field }) => (
              <InputLogin
                {...field}
                type={'text'}
                error={!!errors.email}
                placeholder={`${constLanguagePack.Email[language]}`}
              />
            )}
          />
          {errors.email && (
            <p className='register__error'>{errors.email.message}</p>
          )}
        </div>
        <div className='register__input-container'>
          <Controller
            name='userName'
            control={control}
            rules={{
              required: 'Поле обязательно для заполнения',
            }}
            render={({ field }) => (
              <InputLogin
                {...field}
                type={'text'}
                error={!!errors.userName}
                placeholder={`${constLanguagePack.Email[language]}/${constLanguagePack.NickName[language]}`}
              />
            )}
          />
          {errors.userName && (
            <p className='register__error'>{errors.userName.message}</p>
          )}
        </div>
        <div className='register__input-container'>
          <Controller
            name='password'
            control={control}
            rules={{
              required: 'Поле обязательно для заполнения',
            }}
            render={({ field }) => (
              <InputLogin
                type={'password'}
                {...field}
                error={!!errors.password}
                placeholder={`${constLanguagePack.Password[language]}`}
              />
            )}
          />
          {errors.password && (
            <p className='register__error'>{errors.password.message}</p>
          )}
        </div>
        <div className='register__input-container'>
          <Controller
            name='confirm_password'
            control={control}
            rules={{
              validate: (value) =>
                value === password || constLanguagePack.PasswordError[language],
              required: 'Поле обязательно для заполнения',
            }}
            render={({ field }) => (
              <InputLogin
                type={'password'}
                {...field}
                error={!!errors.confirm_password}
                placeholder={`${constLanguagePack.RepeatPassword[language]}`}
              />
            )}
          />
          {errors.confirm_password && (
            <p className='register__error'>{errors.confirm_password.message}</p>
          )}
        </div>
        {hasCode ? (
          <div className='register__input-container'>
            <p className='register__text'>
              {constLanguagePack.CodeHasBeenSent[language]}
            </p>
            <Controller
              name='code'
              control={control}
              rules={{
                required: 'Поле обязательно для заполнения',
              }}
              render={({ field }) => (
                <InputLogin
                  {...field}
                  type={'text'}
                  error={!!errors.code}
                  placeholder={`${constLanguagePack.WriteCode[language]}`}
                />
              )}
            />
            {errors.code && (
              <p className='register__error'>{errors.code.message}</p>
            )}
          </div>
        ) : (
          ''
        )}

        {hasCode ? (
          <button type='submit' className='register__submit'>
            {constLanguagePack.SignUp[language]}
          </button>
        ) : (
          <button type='submit' className='register__submit'>
            {constLanguagePack.SendVerificationCode[language]}
          </button>
        )}
        <a href='/login' className='register__change-password'>
          {constLanguagePack.HaveAccountSignIn[language]}
          <span className='register__change-password_span'>
            {constLanguagePack.SignIn[language]}
          </span>
        </a>
      </form>
    </div>
  );
};

export default Register;
