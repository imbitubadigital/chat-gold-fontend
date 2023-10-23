import { ChildrenData } from '@/@types/common';
import { useErrorHandling } from '@/hooks/error-handling';
import { api } from '@/services/api';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useToast } from '../toast';
import {
  AuthContextData,
  ChangePasswordLoggedProps,
  CredentialProps,
  SignOutMessageProps,
  TokensProps,
  UpdateProfileProps,
} from './interfaces';
import {
  getDataStorage,
  getTokensStorage,
  removeDataStorage,
  removeTokensStorage,
  settingDataStorage,
  settingTokensStorage,
} from '@/storage';
import { StateDataProps, useAuthStore } from '@/store/auth';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: ChildrenData) => {
  const { triggerError } = useErrorHandling();
  const { addToast } = useToast();

  const {
    actions: { settingUserDataStore, settingLogoutStore },
  } = useAuthStore();

  const [data, setData] = useState({} as StateDataProps);
  const [tokens, setTokens] = useState<TokensProps>({} as TokensProps);
  const [loading, setLoading] = useState(false);

  const settingData = useCallback(
    (dataUser: StateDataProps): void => {
      settingDataStorage(dataUser);
      settingUserDataStore(dataUser);

      setData(dataUser);
    },
    [settingUserDataStore],
  );

  const signOut = useCallback(
    ({ message = '' }: SignOutMessageProps) => {
      removeTokensStorage();
      removeDataStorage();
      settingLogoutStore();
      if (message) {
        addToast({
          message,
          type: 'error',
        });
      }
    },
    [addToast, settingLogoutStore],
  );

  useEffect(() => {
    function loadStorageData(): void {
      const dataStorage = getDataStorage();
      const dataTokens = getTokensStorage();
      if (dataStorage && dataTokens) {
        api.defaults.headers.common.Authorization = `Bearer ${dataTokens.token}`;

        settingUserDataStore(dataStorage);
      }
    }
    loadStorageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = useCallback(
    async (credentials: CredentialProps): Promise<void> => {
      try {
        setLoading(true);

        const response = await api.post('/auth-user/session', credentials);
        const { token, refreshToken } = response.data;

        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const dataTokens = { token, refreshToken };
        setTokens(dataTokens);
        settingTokensStorage(dataTokens);
        settingData(response.data);
        addToast({ message: 'Seja bem vindo(a)', type: 'success' });
      } catch (error) {
        triggerError(error);
      } finally {
        setLoading(false);
      }
    },
    [addToast, settingData, triggerError],
  );

  // const codeVerification = useCallback(
  //   async (verificationData: CodeVerificationProps): Promise<boolean> => {
  //     try {
  //       setLoading(true);
  //       await api.post('passwords/code-verification', verificationData);
  //       return true;
  //     } catch (error) {
  //       triggerError(error);
  //       return false;
  //     } finally {
  //       setLoading(false);
  //     }
  //   },
  //   [triggerError],
  // );

  // const createPassword = useCallback(
  //   async (createPasswordData: CreatePasswordProps): Promise<void> => {
  //     try {
  //       setLoading(true);
  //       const response = await api.post(
  //         'passwords/change-password',
  //         createPasswordData,
  //       );
  //       const { token, refreshToken, ...res } = response.data;

  //       api.defaults.headers.common.Authorization = `Bearer ${token}`;
  //       const dataTokens = { token, refreshToken };
  //       setTokens(dataTokens);
  //       settingTokens(dataTokens);
  //       settingData(res);
  //       addToast({ message: 'Seja bem vindo(a)', type: 'success' });
  //     } catch (error) {
  //       triggerError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   },
  //   [addToast, settingData, triggerError],
  // );

  // const forgotPassword = useCallback(
  //   async (email: string): Promise<boolean> => {
  //     try {
  //       setLoading(true);
  //       await api.post('passwords/forgot-password', { email });
  //       return true;
  //     } catch (error) {
  //       triggerError(error);
  //       return false;
  //     } finally {
  //       setLoading(false);
  //     }
  //   },
  //   [triggerError],
  // );

  const changePasswordLogged = useCallback(
    async (changePasswordData: ChangePasswordLoggedProps): Promise<boolean> => {
      try {
        setLoading(true);
        const response = await api.post(
          '/passwords/change-password-logged',
          changePasswordData,
        );
        settingData(response.data);
        addToast({ message: 'Senha atualizada com sucesso.', type: 'success' });
        return true;
      } catch (error) {
        triggerError(error);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [addToast, settingData, triggerError],
  );

  const updateProfile = useCallback(
    async (
      id: string,
      updateProfileData: UpdateProfileProps,
    ): Promise<boolean> => {
      try {
        setLoading(true);

        const response = await api.patch(`/profiles/${id}`, updateProfileData);

        const upData = {
          ...data,
          user: {
            ...data.user,
            ...response.data,
          },
        };
        settingData(upData);
        addToast({
          message: 'Perfil atualizado com sucesso.',
          type: 'success',
        });
        return true;
      } catch (error) {
        triggerError(error);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [addToast, data, settingData, triggerError],
  );

  useEffect(() => {
    const subscribe = api.registerInterceptTokenManager(signOut);

    return () => {
      subscribe();
    };
  }, [signOut]);

  return (
    <AuthContext.Provider
      value={{
        data,
        tokens,
        loading,
        settingData,

        signIn,
        signOut,
        //  codeVerification,
        //  createPassword,
        // forgotPassword,
        changePasswordLogged,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  return useContext(AuthContext);
}
export { AuthProvider, useAuth };
