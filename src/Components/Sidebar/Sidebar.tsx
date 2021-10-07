import React from 'react';
import Btn from '../Button/Btn';
import './sidebar.sass';

interface ISidebarProps {
  onClick: () => void;
  handleRouter: () => void;
};

const Sidebar: React.FC<ISidebarProps> = ({ onClick, handleRouter }) => {
  console.log('рендер sidebar!')
  return (
    <nav className={'sidebar-main'} data-testid="sidebar-main">
      <h2 className={'sidebar-main__text'} data-testid="sidebar-main__text" onClick={handleRouter}>О нас</h2>
      <h2 className={'sidebar-main__text'}>О компании</h2>
      <Btn onClick={onClick}>Отобразить список компаний</Btn>
    </nav>
  );
};

export default Sidebar;
