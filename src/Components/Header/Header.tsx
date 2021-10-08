import React from 'react';
import { IAboutMe } from '../../Types/index';
import Btn from '../Button/Btn';
import './Header.scss';

interface IHeaderProps {
  isAuth: boolean;
  aboutMeList: IAboutMe;
  handleLogout: () => void;
  changeLightTheme: () => void;
  changeDarkTheme: () => void;
};

const Header: React.FC<IHeaderProps> = ({ isAuth, aboutMeList, handleLogout, changeDarkTheme, changeLightTheme }) => {

  return (
    <header className={'header-main'}>
      <nav>
        <img src={aboutMeList.avatar_url} className={'header-main__img'} alt={'avatar_url'} />
        <a href={aboutMeList.html_url} target="_blank" className={'header-main__link'}>{aboutMeList.html_url}</a>
        <h6 className={'header-main__text'}>{aboutMeList.followers}</h6>
      </nav>
      <div>
        <Btn
          onFocus={(event) => event.target.style.background = 'lightblue'}
          onBlur={(event) => event.target.style.background = '#b5b5f1'}
          onClick={changeLightTheme}
        >
          Светлая тема
        </Btn>
        <Btn
          onClick={changeDarkTheme}
          onFocus={(event) => event.target.style.background = 'lightblue'}
          onBlur={(event) => event.target.style.background = '#b5b5f1'}
        >
          Тёмная тема
        </Btn>
        {isAuth ? <Btn onClick={handleLogout}>Выйти</Btn> : ''}
      </div>
    </header >
  );
};

export default Header;