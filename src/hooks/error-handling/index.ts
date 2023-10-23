import axios, { AxiosError } from 'axios';
import { useCallback } from 'react';

import { AppError, ServerDownError, UnexpectedError } from '@/utils/errors';
import { useToast } from '@/contexts/toast';

interface AxiosProps {
  message: string | undefined;
}
export const getErrorRequest = (error: unknown) => {
  const errorRequest = error as AxiosError<AxiosProps>;

  if (errorRequest.response?.status === 500) {
    return new ServerDownError();
  }

  // if (errorRequest.response?.status === 404) {
  //   return new UnexpectedError();
  // }

  if (Array.isArray(errorRequest.response?.data.message)) {
    return new AppError(errorRequest.response?.data.message[0]);
  }

  if (errorRequest.response?.data.message) {
    return new AppError(errorRequest.response?.data.message);
  }

  return new UnexpectedError();
};
export const useErrorHandling = () => {
  const { addToast } = useToast();

  const triggerError = useCallback(
    (error: unknown) => {
      if (error instanceof AppError) {
        addToast({
          type: 'error',
          message: error.message,
        });
      } else {
        const isAxiosError = (error as AxiosError).isAxiosError;

        if (axios.isCancel(error)) {
          return null;
        }

        if (isAxiosError) {
          const errorRequest = getErrorRequest(error);

          addToast({
            type: 'error',
            message: errorRequest.message,
          });
        } else {
          addToast({
            type: 'error',
            message: new UnexpectedError().message,
          });
        }
      }
    },
    [addToast],
  );

  return { triggerError };
};
