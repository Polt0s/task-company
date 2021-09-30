import React from 'react';
import { useHistory } from 'react-router-dom';

const Navbar: React.FC = () => {
  const router = useHistory();
  return (
    <nav>
      <h2>Войти</h2>
    </nav>
  );
};

export default Navbar;