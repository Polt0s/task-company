import React from 'react';
import Button from '../Button/Button';
import cl from './Sidebar.module.scss';

interface ISidebarProps {
  onClick: () => void;
  handleRouter: () => void;
};

const Sidebar: React.FC<ISidebarProps> = ({ onClick, handleRouter }) => {

  return (
    <nav className={cl.sidebarMain} data-testid="sidebar-main">
      <h2 className={cl.sidebarMain__text} data-testid="sidebar-main__text" onClick={handleRouter}>О нас</h2>
      <h2 className={cl.sidebarMain__text}>О компании</h2>
      <Button onClick={onClick}>Отобразить список компаний</Button>
    </nav>
  );
};

export default Sidebar;
