import { useAuth } from '@/contexts/auth';
import { CredentialProps } from '@/contexts/auth/interfaces';
import { singInSchema } from '@/utils/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

export const useSignin = () => {
  const { loading, signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(singInSchema),
  });

  const onSubmit = useCallback(
    async (data: CredentialProps) => {
      await signIn(data);
    },
    [signIn],
  );

  return {
    register,
    handleSubmit,
    errors,
    isDirty,
    isValid,
    loading,
    onSubmit,
  };
};
