import { Navigate, Route, Routes } from 'react-router-dom';

import { PublicRoutes } from './PublicRoutes';
import { Home } from '@/pages/Home';

export function AppRoutes() {
  // const isValidLogin = !!(data !== undefined && data.access_token);
  const isValidLogin = false;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoutes isLogged={isValidLogin} redirectPath="/panel/home" />
        }
      >
        <Route index element={<Home />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
