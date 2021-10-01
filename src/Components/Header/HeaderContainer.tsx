import React from 'react';
import { useHistory } from 'react-router-dom';
import { getInfoAboutMe } from '../../Api/getDataUser';
import useAppDispatch from '../../Hooks/useAppDispatch';
import useAppSelector from '../../Hooks/useAppSelector';
import { RouteNames } from '../../Router';
import { setThemeDark, setThemeLight } from '../../Store/reducer/config';
import { setLogout } from '../../Store/reducer/userService';
import Header from './Header';

const HeaderContainer: React.FC = () => {
  const router = useHistory();
  const { isAuth } = useAppSelector((state) => state.userService);
  const { aboutMe } = useAppSelector((state) => state.dataUsers);
  const dispatch = useAppDispatch();
  const [active, setActive] = React.useState(false);

  const handleLogout = () => {
    dispatch(setLogout());
    router.push(RouteNames.LOGIN);
  };

  React.useEffect(() => {
    dispatch(getInfoAboutMe());
  }, []);

  const changeLightTheme = () => {
    dispatch(setThemeLight());
    setActive(!active);
  };

  const changeDarkTheme = () => {
    dispatch(setThemeDark());
    setActive(active);
  };

  return (
    <Header isAuth={isAuth}
      aboutMeList={aboutMe}
      handleLogout={handleLogout}
      changeLightTheme={changeLightTheme}
      changeDarkTheme={changeDarkTheme}
    />
  );
};

export default HeaderContainer;