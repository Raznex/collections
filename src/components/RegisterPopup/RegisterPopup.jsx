// import React, { useEffect, useRef } from 'react';
// import { useStore } from '../../utils/store/store';
// import errorIcon from '../../assets/icons/ErrorIcon.svg';
// import closeIcon from '../../assets/icons/closeIcon.svg';
//
// const RegisterPopup = () => {
//   const { isRegisterPopupOpen, setRegisterPopup } = useStore();
//   const popupRef = useRef(null);
//
//   const closePopup = () => {
//     setRegisterPopup(false);
//   };
//
//   const handleClickOutside = (event) => {
//     if (popupRef.current && !popupRef.current.contains(event.target)) {
//       closePopup();
//     }
//   };
//
//   useEffect(() => {
//     if (isRegisterPopupOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }
//
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isRegisterPopupOpen]);
//
//   if (!isRegisterPopupOpen) return null;
//
//   return (
//     <div className='errorpopup'>
//       <div className='errorpopup__container' ref={popupRef}>
//         <button className='errorpopup__close-button' onClick={closePopup}>
//           <img src={closeIcon} alt='Close' className='errorpopup__close-icon' />
//         </button>
//         <p className='errorpopup__text'>
//           Для выполнения данного действия необходимо войти
//         </p>
//         <div className='errorpopup__register'>
//           <a href='/login' className='errorpopup__link errorpopup__link_login'>
//             Войти
//           </a>
//           <a href='/register' className='errorpopup__link'>
//             Регистрация
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default RegisterPopup;
