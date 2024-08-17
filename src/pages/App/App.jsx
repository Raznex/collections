import './App.scss';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from '../../components/Card/Card';

const App = () => {
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
