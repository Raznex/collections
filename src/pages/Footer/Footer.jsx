import './Footer.scss';
import LanguageButtons from '../../components/LanguageButtons/LanguageButtons';
import { useStore } from '../../utils/store/store';
import { constLanguagePack } from '../../utils/Language/LanguagePack';

const Footer = () => {
  const { isAuthenticated, language } = useStore();
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__author'>© Творение Ильи</p>
        <div className='footer__menu'>
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
                {/*<li className='footer__link'>Избранное</li>*/}
              </ul>
              <ul className='footer__list'>
                <li className='footer__link footer__link_acc'>
                  <a href='/profile' className='footer__link'>
                    {constLanguagePack.Account[language]}
                  </a>
                </li>
                <li className='footer__link footer__link_acc'>
                  <a href='/logout' className='footer__link'>
                    {constLanguagePack.LogOut[language]}
                  </a>
                </li>
              </ul>
            </>
          ) : (
            ''
          )}
          <LanguageButtons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
