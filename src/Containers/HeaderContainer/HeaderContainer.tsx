import React from 'react';
import { useHistory } from 'react-router-dom';
import { ApiDataUsers } from '../../Api/ApiDataUsers';
import useAppDispatch from '../../Hooks/useAppDispatch';
import useAppSelector from '../../Hooks/useAppSelector';
import { useFetching } from '../../Hooks/useFetching';
import { IAboutMe } from '../../Types/index';
import { RouteNames } from '../../Router';
import { setThemeDark, setThemeLight } from '../../Store/reducer/config';
import { setInfoAboutMe } from '../../Store/reducer/dataUser';
import { logoutUser } from '../../Store/reducer/userService';
import Header from '../../Components/Header/Header';

const HeaderContainer: React.FC = () => {
  const router = useHistory();
  const { isAuth } = useAppSelector((state) => state.userService);
  const { aboutMe } = useAppSelector((state) => state.dataUsers);
  const dispatch = useAppDispatch();
  const [active, setActive] = React.useState(false);
  const [fetchAboutMe] = useFetching(async () => {
    const response = await ApiDataUsers.getInfoAboutMe();
    const result: IAboutMe = {
      avatar_url: response.avatar_url,
      html_url: response.html_url,
      followers: response.followers,
    };
    dispatch(setInfoAboutMe(result));
  });

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push(RouteNames.LOGIN);
  };

  React.useEffect(() => {
    fetchAboutMe();
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