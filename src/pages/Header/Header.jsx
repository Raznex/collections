import React, { useEffect } from 'react';
import './Header.scss';
import avatar from '../../assets/icons/vombat-1.jpg';
const Header = () => {
  const userAuthorized = true;
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
          <p className='header__logo'>Логотип</p>
          <ul className='header__menu'>
            <li className='header__link'>Каталог</li>
          </ul>
        </nav>
        <div className='header__account'>
          <div className='header__language'>
            <button className='header__button-lang header__button-lang_active'>
              ru
            </button>
            <p>/</p>
            <button className='header__button-lang'>en</button>
          </div>
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
              <button className='header__button-autorization'>
                Регистрация
              </button>
              <button className='header__button-autorization'>Войти</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;