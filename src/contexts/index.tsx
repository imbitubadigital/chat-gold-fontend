import { ReactNode } from 'react';
import { ToastProvider } from './toast';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <ToastProvider>{children}</ToastProvider>;
}
