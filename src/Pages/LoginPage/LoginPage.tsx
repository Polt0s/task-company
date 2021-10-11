import React from 'react';
import { Layout } from '../../Components';
import { LoginFormContainer } from '../../Containers';

export const LoginPage: React.FC = () => {
  return (
    <Layout>
      <h1>Войти в систему</h1>
      <LoginFormContainer />
    </Layout>
  );
};
