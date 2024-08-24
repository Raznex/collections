import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CardList from '../../components/CardList/CardList';
import Catalog from '../../components/Catalog/Catalog';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
};

export default App;
