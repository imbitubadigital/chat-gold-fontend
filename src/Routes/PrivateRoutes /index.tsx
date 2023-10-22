import { Navigate, Outlet, useSearchParams } from 'react-router-dom';
import { PrivateRoutesprops } from './interfaces';

export const PrivateRoutes = ({
  isLogged,
  redirectPath = '/',
}: PrivateRoutesprops) => {
  const [searchParams] = useSearchParams();
  const consultId = searchParams.get('consult-id');
  const consultType = searchParams.get('consult-type');

  if (!isLogged) {
    const urlRedirect =
      consultId && consultType
        ? `${redirectPath}?redirect=${consultId}$$${consultType}`
        : redirectPath;
    return <Navigate to={urlRedirect} replace />;
  }
  return <Outlet />;
};
