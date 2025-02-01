import React, { useEffect } from 'react';
import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../assets/icons/panda.jpg';
import LanguageButtons from '../../components/LanguageButtons/LanguageButtons';
import { useStore } from '../../utils/store/store';
import { logout } from '../../utils/autorize';
import { constLanguagePack } from '../../utils/Language/LanguagePack';
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { isAuthenticated, setErrorPopup, setIsAuthenticated, language } =
    useStore();
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutRedirect = () => {
    logout()
      .then(() => {
        setIsAuthenticated(false);
        navigate('/');
      })
      .catch(() => {
        setErrorPopup(true);
      });
  };

  const handleClickOutside = (event) => {
    if (anchorEl && !anchorEl.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (anchorEl) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

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
            <a className='header__link' href='/catalog'>
              {constLanguagePack.Catalog[language]}
            </a>
            <a className='header__link' href='/my-models'>
              {constLanguagePack.MyModels[language]}
            </a>
          </ul>
        </nav>
        <div className='header__account'>
          <LanguageButtons />
          {isAuthenticated ? (
            <div className='header__account-settings'>
              <div
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

                <div className='header__burger-menu'>
                  <ul className='menu'>
                    <li className='menu__list'>
                      <a href='/addmodel' className='menu__list'>
                        {constLanguagePack.AddModel[language]}
                      </a>
                    </li>
                    <li className='menu__list'>
                      <a href='/my-models' className='menu__list'>
                        {constLanguagePack.MyModels[language]}
                      </a>
                    </li>
                    <li className='menu__line'></li>
                    <li className='menu__list menu__list_acc'>
                      <a href='/profile' className='menu__list'>
                        {constLanguagePack.Account[language]}
                      </a>
                    </li>
                    <li
                      className='menu__list menu__list_logout'
                      onClick={() => logoutRedirect()}
                    >
                      {constLanguagePack.LogOut[language]}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <>
              <a href='/register' className='header__autorization'>
                {constLanguagePack.SignUp[language]}
              </a>
              <a href='/login' className='header__autorization'>
                {constLanguagePack.SignIn[language]}
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
