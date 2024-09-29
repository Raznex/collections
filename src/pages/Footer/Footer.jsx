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
            <li className='footer__link'>
              <a href='/' className='footer__link'>
                Главная
              </a>
            </li>
            <li className='footer__link'>
              <a href='/catalog' className='footer__link'>
                Каталог
              </a>
            </li>
          </ul>
          {userAuthorized ? (
            <>
              <ul className='footer__list'>
                <li className='footer__link'>Мои модели</li>
                <li className='footer__link'>Избранное</li>
              </ul>
              <ul className='footer__list'>
                <li className='footer__link footer__link_acc'>
                  <a href='/profile' className='footer__link'>
                    Аккаунт
                  </a>
                </li>
                <li className='footer__link footer__link_acc'>
                  <a href='/logout' className='footer__link'>
                    Выйти из аккаунта
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
