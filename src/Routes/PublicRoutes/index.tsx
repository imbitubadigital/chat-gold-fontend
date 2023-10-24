import { Navigate, Outlet } from 'react-router-dom';
import { PublicRoutesprops } from './interfaces';

export const PublicRoutes = ({
  isLogged,
  redirectPath = '/panel/home',
}: PublicRoutesprops) => {
  if (isLogged) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
