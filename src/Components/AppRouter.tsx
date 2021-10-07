import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import useAppSelector from '../Hooks/useAppSelector';
import About from '../Pages/About';
import Login from '../Pages/Login';
import Main from '../Pages/Main/Main';

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
          <Route exact={true} path={RouteNames.MAIN} component={Main} />
          <Route exact={true} path={RouteNames.ABOUT} component={About} />
          <Redirect to={RouteNames.MAIN} />
        </Switch>
      ) : (
        <Switch>
          <Route exact={true} path={RouteNames.LOGIN} component={Login} />
          <Redirect to={RouteNames.LOGIN} />
        </Switch>
      )}
    </>
  );
};

export default AppRouter;