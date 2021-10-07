import About from "../Pages/About";
import Login from "../Pages/Login";
import Main from "../Pages/Main/Main";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
};

export enum RouteNames {
  LOGIN = '/login',
  MAIN = '/',
  ABOUT = '/about',
};

export const privateRoutes: IRoute[] = [
  { path: RouteNames.MAIN, component: Main, exact: true },
  { path: RouteNames.ABOUT, component: About, exact: true },
];

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, component: Login, exact: true }
];

