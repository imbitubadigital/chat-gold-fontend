import axios, { AxiosError, AxiosInstance } from 'axios';

import { SignOutMessageProps } from '@/contexts/auth/interfaces';
import { getTokensStorage, settingTokensStorage } from '@/storage';

type SignOut = (message: SignOutMessageProps) => void;

type PromiseType = {
  onSuccess: (token: string) => void;
  onFailure: (error: AxiosError) => void;
};

type APIInstanceProps = AxiosInstance & {
  registerInterceptTokenManager: (signOut: SignOut) => () => void;
};

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
}) as APIInstanceProps;

let failedQueued: Array<PromiseType> = [];
let isRefreshing = false;

api.defaults.headers.common['x-access-origin'] =
  import.meta.env.VITE_ACCESS_ORIGIN;

api.registerInterceptTokenManager = (singOut) => {
  const interceptTokenManager = api.interceptors.response.use(
    (response) => response,
    async (requestError) => {
      if (requestError.response?.status === 401) {
        if (requestError.response.data?.message === 'Unauthorized') {
          const dataTokens = getTokensStorage();

          if (!dataTokens) {
            singOut({
              message:
                'Desculpe, sua credencial expirou. Por favor refaça seu login!',
            });
            return Promise.reject(requestError);
          }

          const originalRequestConfig = requestError.config;

          if (isRefreshing) {
            return new Promise((resolve, reject) => {
              failedQueued.push({
                onSuccess: (token: string) => {
                  originalRequestConfig.headers = {
                    Authorization: `Bearer ${token}`,
                  };
                  resolve(api(originalRequestConfig));
                },
                onFailure: (error: AxiosError) => {
                  reject(error);
                },
              });
            });
          }

          isRefreshing = true;

          return new Promise((resolve, reject) => {
            api
              .post('/auth-user/refresh', {
                refreshToken: dataTokens.refreshToken,
              })
              .then(({ data }) => {
                settingTokensStorage(data);

                if (originalRequestConfig.data) {
                  originalRequestConfig.data = JSON.parse(
                    originalRequestConfig.data,
                  );
                }

                originalRequestConfig.headers = {
                  Authorization: `Bearer ${data.token}`,
                };

                api.defaults.headers.common.Authorization = `Bearer ${data.token}`;

                failedQueued.forEach((request) => {
                  request.onSuccess(data.token);
                });

                console.log('TOKEN ATUALIZADO');

                resolve(api(originalRequestConfig));
              })
              .catch((error) => {
                failedQueued.forEach((request) => {
                  request.onFailure(error);
                });

                singOut({
                  message:
                    'Desculpe, sua credencial expirou. Por favor refaça seu login!',
                });
                reject(error);
              })
              .finally(() => {
                isRefreshing = false;
                failedQueued = [];
              });
          });
        }

        singOut({
          message:
            'Desculpe, sua credencial expirou. Por favor refaça seu login!',
        });
      }

      if (requestError.response && requestError.response.data) {
        return Promise.reject(requestError);
      } else {
        return Promise.reject(requestError);
      }
    },
  );

  return () => {
    api.interceptors.response.eject(interceptTokenManager);
  };
};

export { api };
