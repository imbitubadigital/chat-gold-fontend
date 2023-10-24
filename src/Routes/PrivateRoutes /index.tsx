import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRoutesprops } from './interfaces';

export const PrivateRoutes = ({
  isLogged,
  redirectPath = '/',
}: PrivateRoutesprops) => {
  console.log('PrivateRoutes', isLogged);
  if (!isLogged) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};
