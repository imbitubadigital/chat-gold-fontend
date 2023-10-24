import { useToast } from '@/contexts/toast';
import { useErrorHandling } from '../error-handling';
import { useControlledRequest } from '../controller-request';
import { useCallback, useEffect, useState } from 'react';

import { api } from '@/services/api';
import { settingDataStorage, settingTokensStorage } from '@/storage';
import { useAuthStore } from '@/store/auth';
import { useForm } from 'react-hook-form';

import { createPasswordRequest } from '@/services/http/auth';
import { passwordManagerSchema } from '@/utils/yup';
import { ChangePasswordRequestProps } from '@/services/http/auth/types';
import { yupResolver } from '@hookform/resolvers/yup';

export const usePasswordManager = ({
  code,
  email,
}: {
  code: string;
  email: string;
  origin?: 'signup' | 'forgot';
}) => {
  const { triggerError } = useErrorHandling();
  const { addToast } = useToast();
  const [createPasswordControllerRequest, createPasswordControllerAbort] =
    useControlledRequest(createPasswordRequest);

  const token = useAuthStore((store) => store.state.token);

  const {
    actions: { settingUserDataStore },
  } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(passwordManagerSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async (createPasswordData: ChangePasswordRequestProps): Promise<void> => {
      const { password } = createPasswordData;
      try {
        setLoading(true);
        const response = await createPasswordControllerRequest({
          code: Number(code),
          email,
          password,
        });

        const { refreshToken, token, user } = response;
        api.defaults.headers.common.Authorization = `Bearer ${token}`;

        const dataStore = {
          user,
          token,
          refreshToken,
        };

        settingUserDataStore(dataStore);
        settingTokensStorage({ token, refreshToken });
        settingDataStorage(dataStore);

        addToast({ message: 'Seja bem vindo(a)', type: 'success' });
      } catch (error) {
        triggerError(error);
      } finally {
        setLoading(false);
      }
    },
    [
      addToast,
      code,
      createPasswordControllerRequest,
      email,
      settingUserDataStore,
      triggerError,
    ],
  );

  useEffect(() => {
    return () => createPasswordControllerAbort();
  }, [createPasswordControllerAbort]);

  return {
    register,
    handleSubmit,
    errors,
    isDirty,
    isValid,
    loading,
    onSubmit,
    token,
  };
};
