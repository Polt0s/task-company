import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import useAppSelector from '../Hooks/useAppSelector';
import { privateRoutes, publicRoutes, RouteNames } from '../Router';

const AppRouter: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.userService);

  return (
    <>
      {isAuth ? (
        <Switch>
          {privateRoutes.map((item) => (
            <Route key={item.path} {...item} />
          ))}
          <Redirect to={RouteNames.MAIN} />
        </Switch>
      ) : (
        <Switch>
          {publicRoutes.map((item) => (
            <Route key={item.path} {...item} />
          ))}
          <Redirect to={RouteNames.LOGIN} />
        </Switch>
      )}
    </>
  );
};

export default AppRouter;