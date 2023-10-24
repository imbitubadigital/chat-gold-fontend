import { ReactNode, createContext, useContext, useMemo } from 'react';

import { SocketContextData } from './interfaces';
import { io } from 'socket.io-client';

const SocketContext = createContext<SocketContextData>({} as SocketContextData);
type ChildrenData = {
  children: ReactNode;
};
export const SocketProvider = ({ children }: ChildrenData) => {
  const socket = useMemo(() => {
    return io(import.meta.env.VITE_BASE_URL, {
      transports: ['websocket'],
    });
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export function useSocket(): SocketContextData {
  const context = useContext(SocketContext);

  return context;
}
