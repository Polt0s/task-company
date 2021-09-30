import React from 'react';
import LoginForm from '../Components/Form/LoginForm';
import '../Components/index.sass';

const Login: React.FC = () => {
  return (
    <section className={'layout'}>
      <LoginForm />
    </section>
  );
};

export default Login;