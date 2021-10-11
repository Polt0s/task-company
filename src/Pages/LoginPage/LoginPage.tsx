import React from 'react';
import { LoginFormContainer } from '../../Containers';
import './Login.scss';

export const LoginPage: React.FC = () => {
  return (
    <section className={'layout-login'}>
      <h1>Войти в систему</h1>
      <LoginFormContainer />
    </section>
  );
};
