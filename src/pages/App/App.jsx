import './App.scss';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ErrorPopup from '../../components/Popups/ErrorPopup';
import { useStore } from '../../utils/store/store';
import { checkAuth } from '../../utils/api';
import RegisterPopup from '../../components/Popups/RegisterPopup';

const App = () => {
  const {
    loading,
    setLoading,
    setIsAuthenticated,
    isErrorPopupOpen,
    setErrorPopup,
    isRegisterPopupOpen,
    setRegisterPopup,
  } = useStore();

  useEffect(() => {
    setLoading(true);
    checkAuth()
      .then((res) => {
        setIsAuthenticated(res.status);
      })
      .catch(() => {
        setIsAuthenticated(false);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className='app'>
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            <Header />
            <main className='app__main'>
              <Outlet />
              <ErrorPopup
                isOpen={isErrorPopupOpen}
                onClose={() => setErrorPopup(false)}
              />
              {/*<RegisterPopup*/}
              {/*  isOpen={isRegisterPopupOpen}*/}
              {/*  onClose={() => setRegisterPopup(false)}*/}
              {/*/>*/}
            </main>
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default App;
