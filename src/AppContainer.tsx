import React from 'react';
import useAppSelector from './Hooks/useAppSelector';
import App from './App';

const configTheme = {
  light: 'white',
  dark: 'gray',
};

const AppContainer: React.FC = () => {
  const { mode } = useAppSelector((state) => state.config.theme);

  return (
    <App theme={mode} configTheme={configTheme} />
  );
};

export default AppContainer;