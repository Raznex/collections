import React, { useRef } from 'react';
import closeIcon from '../../assets/icons/closeIcon.svg';
import errorIcon from '../../assets/icons/ErrorIcon.svg';
import { useOutsideClick } from '../../utils/hooks/useOutsideClick';
import './Popups.scss';
import { useStore } from '../../utils/store/store';
import { constLanguagePack } from '../../utils/Language/LanguagePack';

const ErrorPopup = ({ isOpen, onClose }) => {
  const popupRef = useRef(null);
  const { language } = useStore();
  useOutsideClick(popupRef, onClose);

  if (!isOpen) return null;

  return (
    <div className='errorpopup'>
      <div className='errorpopup__container' ref={popupRef}>
        <button className='errorpopup__close-button' onClick={onClose}>
          <img src={closeIcon} alt='Close' className='errorpopup__close-icon' />
        </button>
        <img src={errorIcon} alt='Error' className='errorpopup__img' />
        <p className='errorpopup__text'>
          {constLanguagePack.ErrorOccurred[language]}
        </p>
      </div>
    </div>
  );
};

export default ErrorPopup;
