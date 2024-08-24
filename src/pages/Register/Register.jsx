import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import InputLogin from '../../components/InputLogin/InputLogin';
import './Register.scss';
const Register = () => {
  const {
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      userName: '',
      controllPassword: '',
    },
  });
  const password = watch('password');
  const controllPassword = watch('controllPassword');
  const onSubmit = (data) => {
    if (data.password === data.controllPassword) {
      console.log(data);
    } else {
      errors.controllPassword = 'Пароли не совпадают';
    }
  };

  return (
    <div className='register'>
      <h1 className='register__title'>Регистрация</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='register__form'>
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
                error={!!errors.email}
                placeholder={'Email/Никнейм'}
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
                error={!!errors.userName}
                placeholder={'UserName/Никнейм'}
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
                {...field}
                error={!!errors.password}
                placeholder={'Password'}
              />
            )}
          />
          {errors.password && (
            <p className='register__error'>{errors.password.message}</p>
          )}
        </div>
        <div className='register__input-container'>
          <Controller
            name='controllPassword'
            control={control}
            rules={{
              validate: (value) => value === password || 'Пароли не совпадают',
              required: 'Поле обязательно для заполнения',
            }}
            render={({ field }) => (
              <InputLogin
                {...field}
                error={!!errors.controllPassword}
                placeholder={'Repeat password'}
              />
            )}
          />
          {errors.controllPassword && (
            <p className='register__error'>{errors.controllPassword.message}</p>
          )}
        </div>
        <button type='submit' className='register__submit'>
          Зарегистрироваться
        </button>
        <a href='/login' className='register__change-password'>
          Уже зарегистрированы?{' '}
          <span className='register__change-password_span'>Войти</span>
        </a>
      </form>
    </div>
  );
};

export default Register;
