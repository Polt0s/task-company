import React from 'react';
import LoginFormContainer from '../../Containers/LoginFormContainer/LoginFormContainer';
import './Login.scss';

const Login: React.FC = () => {
  return (
    <section className={'layout-login'}>
      <h1>Войти в систему</h1>
      <LoginFormContainer />
    </section>
  );
};

export default Login;