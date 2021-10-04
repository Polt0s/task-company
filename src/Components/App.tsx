import React from 'react';
import AppRouter from './AppRouter';
import FooterContainer from './Footer/FooterContainer';
import HeaderContainer from './Header/HeaderContainer';
import './index.sass';

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