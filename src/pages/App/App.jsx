import { useEffect, useState } from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { getAllModels } from '../../utils/api';
import ErrorPopup from '../../components/ErrorPopup/ErrorPopup';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main className='app__main'>
        <Outlet />
        <ErrorPopup />
      </main>
      <Footer />
    </div>
  );
};

export default App;
