import React from 'react';
import useAppDispatch from '../Hooks/useAppDispatch';
import useAppSelector from '../Hooks/useAppSelector';
import AppRouter from './AppRouter';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './index.sass';

const App: React.FC = () => {

  return (
    <div className={'grid-root'}>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;