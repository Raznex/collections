import React, { useRef } from 'react';
import closeIcon from '../../assets/icons/closeIcon.svg';
import errorIcon from '../../assets/icons/ErrorIcon.svg';
import { useOutsideClick } from '../../utils/hooks/useOutsideClick';
import './Popups.scss';

const ErrorPopup = ({ isOpen, onClose }) => {
  const popupRef = useRef(null);

  useOutsideClick(popupRef, onClose);

  if (!isOpen) return null;

  return (
    <div className='errorpopup'>
      <div className='errorpopup__container' ref={popupRef}>
        <button className='errorpopup__close-button' onClick={onClose}>
          <img src={closeIcon} alt='Close' className='errorpopup__close-icon' />
        </button>
        <img src={errorIcon} alt='Error' className='errorpopup__img' />
        <p className='errorpopup__text'>Произошла ошибка. Попробуйте снова.</p>
      </div>
    </div>
  );
};

export default ErrorPopup;
