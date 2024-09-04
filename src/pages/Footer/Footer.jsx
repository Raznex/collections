import './Footer.scss';
import LanguageButtons from '../../components/LanguageButtons/LanguageButtons';

const Footer = () => {
  const userAuthorized = false;
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__author'>© Творение Ильи</p>
        <div className='footer__menu'>
          <ul className='footer__list'>
            <li className='footer__link'>Главная</li>
            <li className='footer__link'>Каталог</li>
          </ul>
          {userAuthorized ? (
            <>
              <ul className='footer__list'>
                <li className='footer__link'>Мои модели</li>
                <li className='footer__link'>Избранное</li>
              </ul>
              <ul className='footer__list'>
                <li className='footer__link footer__link_acc'>Аккаунт</li>
                <li className='footer__link footer__link_acc'>
                  Выйти из аккаунта
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
