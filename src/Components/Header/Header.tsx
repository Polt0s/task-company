import React from 'react';
import { IAboutMe } from '../../Types/index';
import Button from '../Button/Button';
import cl from './Header.module.scss';

interface IHeaderProps {
  isAuth: boolean;
  aboutMeList: IAboutMe;
  handleLogout: () => void;
  changeLightTheme: () => void;
  changeDarkTheme: () => void;
};

const Header: React.FC<IHeaderProps> = ({ isAuth, aboutMeList, handleLogout, changeDarkTheme, changeLightTheme }) => {

  return (
    <header className={cl.headerMain}>
      <nav>
        <img src={aboutMeList.avatar_url} className={cl.headerMain__img} alt={'avatar_url'} />
        <a href={aboutMeList.html_url} target="_blank" className={cl.headerMain__link}>{aboutMeList.html_url}</a>
        <h6 className={cl.headerMain__text}>{aboutMeList.followers}</h6>
      </nav>
      <div>
        <Button
          onFocus={(event) => event.target.style.background = 'lightblue'}
          onBlur={(event) => event.target.style.background = '#b5b5f1'}
          onClick={changeLightTheme}
        >
          Светлая тема
        </Button>
        <Button
          onClick={changeDarkTheme}
          onFocus={(event) => event.target.style.background = 'lightblue'}
          onBlur={(event) => event.target.style.background = '#b5b5f1'}
        >
          Тёмная тема
        </Button>
        {isAuth ? <Button onClick={handleLogout}>Выйти</Button> : ''}
      </div>
    </header >
  );
};

export default Header;