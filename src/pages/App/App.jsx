import './App.scss';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ErrorPopup from '../../components/ErrorPopup/ErrorPopup';
import { useStore } from '../../utils/store/store';
import { checkAuth } from '../../utils/api';

const App = () => {
  const { loading, setLoading, setIsAuthenticated, isAuthenticated } =
    useStore();

  useEffect(() => {
    setLoading(true);
    checkAuth()
      .then((res) => {
        setIsAuthenticated(res.status);
      })
      .finally(() => setLoading(false));
  }, []);

  console.log(isAuthenticated);
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
              <ErrorPopup />
            </main>
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default App;
