import { Navigate, Route, Routes } from 'react-router-dom';

import { PublicRoutes } from './PublicRoutes';

import { Signin } from '@/pages/Signin';
import { Home } from '@/pages/Home';
import { useAuthStore } from '@/store/auth';
import { PrivateRoutes } from './PrivateRoutes ';
import { Room } from '@/pages/Room';

export function AppRoutes() {
  const token = useAuthStore((store) => store.state.token);

  return (
    <Routes>
      <Route path="/" element={<PublicRoutes isLogged={token !== null} />}>
        <Route index element={<Signin />} />
      </Route>

      <Route path="panel" element={<PrivateRoutes isLogged={token !== null} />}>
        <Route path="home" element={<Home />} />
        <Route path="sala" element={<Room />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
