import React from 'react';
import { useHistory } from 'react-router';
import { RouteNames } from '../../Router';
import './sidebar.sass';

const Sidebar: React.FC = () => {
  const router = useHistory();

  return (
    <nav className={'sidebar-main'}>
      <h2 className={'sidebar-main__text'} onClick={() => router.push(RouteNames.ABOUT)}>О нас</h2>
      <h2 className={'sidebar-main__text'}>О компании</h2>
    </nav>
  );
};

export default Sidebar;