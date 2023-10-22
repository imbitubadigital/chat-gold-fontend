import { ReactNode, createContext, useCallback, useContext } from 'react';
import { toast } from 'react-toastify';

import { ToastContextData, ToastProps } from './interfaces';

const ToastContext = createContext<ToastContextData>({} as ToastContextData);
type ChildrenData = {
  children: ReactNode;
};
export const ToastProvider = ({ children }: ChildrenData) => {
  const addToast = useCallback(({ message, type }: ToastProps) => {
    switch (type) {
      case 'success':
        return toast.success(message, {
          className: 'green-background',
        });
      case 'error':
        return toast.error(message, {
          className: 'red-background',
        });
      case 'alert':
        return toast.warn(message, {
          className: 'yellow-background',
        });
      default:
        return toast(message, {
          className: 'black-background',
        });
    }
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  return context;
}
