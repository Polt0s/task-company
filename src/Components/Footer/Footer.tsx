import React from 'react';
import { IUserInfo } from '../../Types/index';
import cl from './Footer.module.scss';

const Footer: React.FC<{ userData: IUserInfo }> = ({ userData }) => {

  return (
    <footer className={cl.footerMain}>
      <img src={userData.avatar_url} className={cl.footerMain__img} alt="user_avatar_url" />
      <h6 className={cl.footerMain__text}>{userData.name}</h6>
      <h6 className={cl.footerMain__text}>{userData.company}</h6>
      <h6 className={cl.footerMain__text}>{userData.followers}</h6>
    </footer>
  );
};

export default Footer;