import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import InputLogin from '../../components/InputLogin/InputLogin';
import './Register.scss';
import { register, sendVerificationCode } from '../../utils/autorize';

const Register = () => {
  const [hasCode, setHasCode] = useState(false);
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
      code: '',
    },
  });
  const password = watch('password');
  const controllPassword = watch('controllPassword');

  const onSubmit = (data) => {
    if (data.password === data.controllPassword) {
      const { controllPassword, userName, ...formData } = data;
      register(formData).then((res) => {
        console.log(res);
      });
    } else {
      errors.controllPassword = 'Пароли не совпадают';
    }
  };

  const sendCode = (data) => {
    sendVerificationCode(data.email).then((res) => {
      console.log(res);
      setHasCode(true);
    });
  };

  return (
    <div className='register'>
      <h1 className='register__title'>Регистрация</h1>
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
                type={'text'}
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
                type={'password'}
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
                type={'password'}
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
        {hasCode ? (
          <div className='register__input-container'>
            <p className='register__text'>Код отправлен вам на почту</p>
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
                  placeholder={'Введите код'}
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
            Зарегистрироваться
          </button>
        ) : (
          <button type='submit' className='register__submit'>
            Отправить код подтверждения
          </button>
        )}
        <a href='/login' className='register__change-password'>
          Уже зарегистрированы?{' '}
          <span className='register__change-password_span'>Войти</span>
        </a>
      </form>
    </div>
  );
};

export default Register;
