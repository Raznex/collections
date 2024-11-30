import React, { useRef } from 'react';
import closeIcon from '../../assets/icons/closeIcon.svg';
import { useOutsideClick } from '../../utils/hooks/useOutsideClick';
import './Popups.scss';

const RegisterPopup = ({ isOpen, onClose }) => {
  const popupRef = useRef(null);

  useOutsideClick(popupRef, onClose);

  if (!isOpen) return null;

  return (
    <div className='errorpopup'>
      <div className='errorpopup__container' ref={popupRef}>
        <button className='errorpopup__close-button' onClick={onClose}>
          <img src={closeIcon} alt='Close' className='errorpopup__close-icon' />
        </button>
        <p className='errorpopup__text'>
          Для выполнения данного действия необходимо авторизоваться
        </p>
        <div className='errorpopup__register'>
          <a href='/login' className='errorpopup__link errorpopup__link_login'>
            Войти
          </a>
          <a href='/register' className='errorpopup__link'>
            Регистрация
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPopup;
