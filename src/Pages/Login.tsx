import React from 'react';
import LoginFormContainer from '../Components/Form/LoginFormContainer';
import '../Components/index.sass';

const Login: React.FC = () => {
  return (
    <section className={'layout'}>
      <h1>Войти в систему</h1>
      <LoginFormContainer />
    </section>
  );
};

export default Login;