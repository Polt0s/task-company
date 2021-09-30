import React from 'react';
import useAppDispatch from '../Hooks/useAppDispatch';
import useAppSelector from '../Hooks/useAppSelector';
import Cards from './Cards/Cards';
import Footer from './Footer/Footer';
import FormCompany from './Form/FormCompany';
import Header from './Header/Header';
import './index.sass';


const App: React.FC = () => {

  return (
    <div className={'grid-root'}>
      <Header />
      <main className={'grid-main'}>
        <section className={'grid-main__content'}>
          <Cards />
        </section>
        <nav className={'grid-main__menu'}>
          МЕНЮ
        </nav>
        <section className={'grid-main__form'}>
          <FormCompany />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;