import { useEffect } from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { getAllModels } from '../../utils/api';

const App = () => {
  useEffect(() => {
    getAllModels().then((data) => {
      console.log(data);
    });
  }, []);
  return (
    <div className='app'>
      <Header />
      <main className='app__main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
