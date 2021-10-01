import React from 'react';
import LoginFormContainer from '../Components/Form/LoginFormContainer';
import '../Components/index.sass';

const Login: React.FC = () => {
  return (
    <section className={'layout'}>
      <LoginFormContainer />
    </section>
  );
};

export default Login;