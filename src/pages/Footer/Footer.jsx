import './Footer.scss';
import React, { useEffect, useState } from 'react';
import LanguageButtons from '../../components/LanguageButtons/LanguageButtons';
import { useStore } from '../../utils/store/store';
import { constLanguagePack } from '../../utils/Language/LanguagePack';

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { isAuthenticated, language } = useStore();
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__author'>© Творение Ильи</p>
        <div className='footer__menu'>
          {isSmallScreen ? (
            // Упрощенный вариант меню для малых экранов
            <ul className='footer__list'>
              <li className='footer__link'>
                <a href='/' className='footer__link'>
                  {constLanguagePack.Home[language]}
                </a>
              </li>
              <li className='footer__link'>
                <a href='/catalog' className='footer__link'>
                  {constLanguagePack.Catalog[language]}
                </a>
              </li>
            </ul>
          ) : (
            <>
              <ul className='footer__list'>
                <li className='footer__link'>
                  <a href='/' className='footer__link'>
                    {constLanguagePack.Home[language]}
                  </a>
                </li>
                <li className='footer__link'>
                  <a href='/catalog' className='footer__link'>
                    {constLanguagePack.Catalog[language]}
                  </a>
                </li>
              </ul>
              {isAuthenticated ? (
                <>
                  <ul className='footer__list'>
                    <li className='footer__link'>
                      {constLanguagePack.MyModels[language]}
                    </li>
                  </ul>
                  <ul className='footer__list'>
                    <li className='footer__link footer__link_acc'>
                      <a href='/profile' className='footer__link'>
                        {constLanguagePack.Account[language]}т
                      </a>
                    </li>
                    <li className='footer__link footer__link_acc'>
                      <a href='/logout' className='footer__link'>
                        {constLanguagePack.LogOut[language]}
                      </a>
                    </li>
                  </ul>
                </>
              ) : null}
              {/*<LanguageButtons />*/}
            </>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
