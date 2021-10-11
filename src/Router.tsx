import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import useAppSelector from './Hooks/useAppSelector';
import { AboutPage, MainPage, LoginPage } from './Pages';

export enum RouteNames {
  LOGIN = '/login',
  MAIN = '/',
  ABOUT = '/about',
};

const AppRouter: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.userService);

  return (
    <>
      {isAuth ? (
        <Switch>
          <Route exact={true} path={RouteNames.MAIN} component={MainPage} />
          <Route exact={true} path={RouteNames.ABOUT} component={AboutPage} />
          <Redirect to={RouteNames.MAIN} />
        </Switch>
      ) : (
        <Switch>
          <Route exact={true} path={RouteNames.LOGIN} component={LoginPage} />
          <Redirect to={RouteNames.LOGIN} />
        </Switch>
      )}
    </>
  );
};

export default AppRouter;