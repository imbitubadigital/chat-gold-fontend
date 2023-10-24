import { ReactNode } from 'react';

import { AuthProvider } from './auth';
import { SocketProvider } from './socket';
import { ToastProvider } from './toast';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <SocketProvider>
      <ToastProvider>
        <AuthProvider>{children}</AuthProvider>
      </ToastProvider>
    </SocketProvider>
  );
}
