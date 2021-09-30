import React from 'react';
import { useHistory } from 'react-router';
import useAppDispatch from '../../Hooks/useAppDispatch';
import useAppSelector from '../../Hooks/useAppSelector';
import { RouteNames } from '../../Router';
import { setLogout } from '../../Store/reducer/userService';
import Btn from '../Button/Btn';
import './header.sass';

const Header: React.FC = () => {
  const router = useHistory();
  const { isAuth } = useAppSelector((state) => state.userService);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setLogout());
    router.push(RouteNames.LOGIN);
  };

  return (
    <header className={'header-main'}>
      {isAuth ? (<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Btn onClick={handleClick}>Выйти</Btn>
      </div>) : ''}
    </header>
  );
};

export default Header;