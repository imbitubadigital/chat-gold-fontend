import { Navigate, Outlet, useSearchParams } from 'react-router-dom';
import { PublicRoutesprops } from './interfaces';

export const PublicRoutes = ({
  isLogged,
  redirectPath = '/panel/home',
}: PublicRoutesprops) => {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect');
  let consultId = '';
  let consultType = '';

  if (redirect) {
    const [item1, item2] = redirect?.split('$$');
    consultId = item1;
    consultType = item2;
  }

  if (isLogged) {
    const urlRedirect = redirect
      ? `${redirectPath}?consult-id=${consultId}&consult-type=${consultType}`
      : redirectPath;
    return <Navigate to={urlRedirect} replace />;
  }

  return <Outlet />;
};
