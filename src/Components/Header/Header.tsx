import React from 'react';
import { useHistory } from 'react-router';
import { getInfoAboutMe } from '../../Api/getDataUser';
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
  const { aboutMe } = useAppSelector((state) => state.dataUsers);

  const handleClick = () => {
    console.log('test')
    dispatch(setLogout());
    router.push(RouteNames.LOGIN);
  };

  React.useEffect(() => {
    dispatch(getInfoAboutMe());
  }, []);

  return (
    <header className={'header-main'}>
      <nav>
        <img src={aboutMe.avatar} className={'header-main__img'} />
        <a href={aboutMe.html_url} target="_blank" className={'header-main__link'}>{aboutMe.html_url}</a>
        <h6 className={'header-main__text'}>{aboutMe.followers}</h6>
      </nav>
      <div>
        {isAuth ? <Btn onClick={handleClick}>Выйти</Btn> : ''}
      </div>
    </header>
  );
};

export default Header;