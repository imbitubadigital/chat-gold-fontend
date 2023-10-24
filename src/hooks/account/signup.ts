import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { useErrorHandling } from '@/hooks/error-handling';
import { useControlledRequest } from '@/hooks/controller-request';
import { signUpRequest } from '@/services/http/auth';
import { singUpSchema } from '@/utils/yup';
import { CreateAccountsProps } from '@/services/http/auth/types';
export function useSignup() {
  const navigate = useNavigate();
  const { triggerError } = useErrorHandling();

  const [loading, setLoading] = useState(false);

  const [signUpControllerRequest, signUpControllerAbort] =
    useControlledRequest(signUpRequest);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(singUpSchema),
  });

  const onSubmit = useCallback(
    async (data: CreateAccountsProps) => {
      try {
        setLoading(true);

        await signUpControllerRequest(data);

        navigate('/validar-codigo', {
          state: {
            email: data.email,
            firstName: data.firstName,
            isCreate: true,
          },
        });
      } catch (error) {
        triggerError(error);
      } finally {
        setLoading(false);
      }
    },
    [signUpControllerRequest, navigate, triggerError],
  );

  useEffect(() => {
    return () => {
      signUpControllerAbort();
    };
  }, [signUpControllerAbort]);

  return {
    loading,
    register,
    handleSubmit,
    errors,
    isDirty,
    isValid,
    onSubmit,
  };
}
