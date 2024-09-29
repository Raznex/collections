import React, { useEffect } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import avatar from '../../assets/icons/panda.jpg';
import LanguageButtons from '../../components/LanguageButtons/LanguageButtons';
const Header = () => {
  const userAuthorized = false;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOutside = (event) => {
    if (anchorEl && !anchorEl.contains(event.target)) {
      handleClose();
    }
  };

  // Добавляем и удаляем обработчик кликов
  useEffect(() => {
    if (anchorEl) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Чистим обработчик при размонтировании компонента
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [anchorEl]);

  return (
    <header className='header'>
      <div className='header__container'>
        <nav className='header__nav'>
          <a href='/' className='header__logo'>
            Логотип
          </a>
          <ul className='header__menu'>
            <a className='header__link' href='/'>
              Каталог
            </a>
            <a className='header__link' href='/my-models'>
              Мои модели
            </a>
          </ul>
        </nav>
        <div className='header__account'>
          <LanguageButtons />
          {userAuthorized ? (
            <div className='header__account-settings'>
              <button
                className='header__avatar'
                aria-controls='simple-menu'
                aria-haspopup='true'
                onClick={!anchorEl ? handleClick : handleClose}
              >
                <img
                  src={avatar}
                  alt='Аватар'
                  className='header__avatar-image'
                />
              </button>
              <ul className={`menu ${anchorEl ? 'menu_active' : ''}`}>
                <li className='menu__list' onClick={handleClose}>
                  Добавить модель
                </li>
                <li className='menu__list' onClick={handleClose}>
                  Избранное
                </li>
                <li className='menu__list' onClick={handleClose}>
                  Настройки
                </li>
                <li className='menu__line'></li>
                <li className='menu__list menu__list_acc' onClick={handleClose}>
                  Аккаунт
                </li>
                <li
                  className='menu__list menu__list_logout'
                  onClick={handleClose}
                >
                  Выйти из аккаунта
                </li>
              </ul>
            </div>
          ) : (
            <>
              <a href='/register' className='header__autorization'>
                Регистрация
              </a>
              <a href='/login' className='header__autorization'>
                Войти
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
