import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import InputLogin from '../../components/InputLogin/InputLogin';
import './Login.scss';
import { login } from '../../utils/autorize';
import { useNavigate } from 'react-router-dom';
import CSRFToken from '../../utils/csrfToken/csrfToken';
import { useStore } from '../../utils/store/store';
import { checkAuth } from '../../utils/api';
import { constLanguagePack } from '../../utils/Language/LanguagePack';
const Login = () => {
  const {
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { setErrorPopup, setIsAuthenticated, language } = useStore();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    login(data)
      .then(() => {
        checkAuth().then((res) => {
          setIsAuthenticated(res.status);
        });
        navigate('/');
      })
      .catch(() => setErrorPopup(true));
  };
  return (
    <div className='login'>
      <h1 className='login__title'>{constLanguagePack.SignIn.language}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='login__form'>
        <div className='login__input-container'>
          <Controller
            name='email'
            control={control}
            rules={{
              required: 'Поле обязательно для заполнения',
            }}
            render={({ field }) => (
              <InputLogin
                {...field}
                error={!!errors.email}
                placeholder={`${constLanguagePack.Email[language]}/${constLanguagePack.NickName[language]}`}
              />
            )}
          />
          {errors.email && (
            <p className='login__error'>{errors.email.message}</p>
          )}
        </div>
        <div className='login__input-container'>
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
            <p className='login__error'>{errors.password.message}</p>
          )}
        </div>
        <a href='#' className='login__change-password'>
          {constLanguagePack.ForgotYourPassword[language]}
        </a>
        <button type='submit' className='login__submit'>
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
