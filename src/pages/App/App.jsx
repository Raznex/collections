import './App.scss';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ErrorPopup from '../../components/ErrorPopup/ErrorPopup';
import { useStore } from '../../utils/store/store';
import { checkAuth } from '../../utils/api';

const App = () => {
  const { loading, setLoading, setIsAuthenticated } = useStore();

  useEffect(() => {
    setLoading(true);
    const verifyAuth = async () => {
      try {
        await checkAuth();
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    verifyAuth();
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
