import React from 'react';
import useAppSelector from '../Hooks/useAppSelector';
import AppRouter from './AppRouter';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './index.sass';

const configTheme = {
  light: 'white',
  dark: 'gray',
};

const App: React.FC = () => {
  const { theme } = useAppSelector((state) => state.config);

  return (
    <div className={'grid-root'} style={{ backgroundColor: configTheme[theme.mode] }}>
      <div className={'main-content'}>
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </div>
  );
};

export default App;