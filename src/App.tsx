import React from 'react';
import AppRouter from './Router';
import { HeaderContainer, FooterContainer } from './Containers';
import cl from './App.module.scss';

interface IAppProps {
  theme: 'light' | 'dark';
  configTheme: { light: string, dark: string };
};

const App: React.FC<IAppProps> = ({ theme, configTheme }) => {

  return (
    <div className={cl.gridRoot} data-testid="grid-root" style={{ backgroundColor: configTheme[theme] }}>
      <div className={cl.mainContent}>
        <HeaderContainer />
        <AppRouter />
        <FooterContainer />
      </div>
    </div>
  );
};

export default App;