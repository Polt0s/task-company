import React from 'react';
import { IUserInfo } from '../../Types/index';
import './Footer.scss';

const Footer: React.FC<{ userData: IUserInfo }> = ({ userData }) => {

  return (
    <footer className={'footer-main'}>
      <img src={userData.avatar_url} className={'footer-main__img'} alt="user_avatar_url" />
      <h6 className={'footer-main__text'}>{userData.name}</h6>
      <h6 className={'footer-main__text'}>{userData.company}</h6>
      <h6 className={'footer-main__text'}>{userData.followers}</h6>
    </footer>
  );
};

export default Footer;