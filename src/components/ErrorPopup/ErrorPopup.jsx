import './ErrorPopup.scss';
import React, { useEffect, useRef } from 'react';
import { useStore } from '../../utils/store/store';
import errorIcon from '../../assets/icons/ErrorIcon.svg';
import closeIcon from '../../assets/icons/closeIcon.svg';

const ErrorPopup = () => {
  const { isErrorPopupOpen, setErrorPopup } = useStore();
  const popupRef = useRef(null);

  const closePopup = () => {
    setErrorPopup(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };

  useEffect(() => {
    if (isErrorPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isErrorPopupOpen]);

  if (!isErrorPopupOpen) return null;

  return (
    <div className='errorpopup'>
      <div className='errorpopup__container' ref={popupRef}>
        <button className='errorpopup__close-button' onClick={closePopup}>
          <img src={closeIcon} alt='Close' className='errorpopup__close-icon' />
        </button>
        <img src={errorIcon} alt='Error' className='errorpopup__img' />
        <p className='errorpopup__text'>Произошла ошибка. Попробуйте снова.</p>
      </div>
    </div>
  );
};

export default ErrorPopup;
