import React from 'react';
import AppRouter from './Router';
import FooterContainer from './Containers/FooterContainer/FooterContainer';
import HeaderContainer from './Containers/HeaderContainer/HeaderContainer';
import './App.scss';

interface IAppProps {
  theme: 'light' | 'dark';
  configTheme: { light: string, dark: string };
};

const App: React.FC<IAppProps> = ({ theme, configTheme }) => {

  return (
    <div className={'grid-root'} data-testid="grid-root" style={{ backgroundColor: configTheme[theme] }}>
      <div className={'main-content'}>
        <HeaderContainer />
        <AppRouter />
        <FooterContainer />
      </div>
    </div>
  );
};

export default App;