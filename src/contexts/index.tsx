import { ReactNode } from 'react';
import { ToastProvider } from './toast';
import { AuthProvider } from './auth';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ToastProvider>
      <AuthProvider>{children}</AuthProvider>
    </ToastProvider>
  );
}
