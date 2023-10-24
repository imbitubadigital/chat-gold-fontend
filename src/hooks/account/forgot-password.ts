import { useForm } from 'react-hook-form';
import { useErrorHandling } from '../error-handling';

import { useCallback, useEffect, useState } from 'react';
import { useControlledRequest } from '../controller-request';
import { forgotPasswordSchema } from '../../utils/yup';

import { forgotPasswordRequest } from '../../services/http/auth';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
type EmailProps = {
  email: string;
};
export const useForgotPassword = () => {
  const navigate = useNavigate();
  const { triggerError } = useErrorHandling();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(forgotPasswordSchema),
  });

  const [forgotPasswordControllerRequest, forgotPasswordControllerAbort] =
    useControlledRequest(forgotPasswordRequest);

  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async ({ email }: EmailProps) => {
      try {
        setLoading(true);
        await forgotPasswordControllerRequest(email);
        navigate('/validar-codigo', {
          state: {
            email,
            firstName: '',
            isCreate: false,
          },
        });
      } catch (error) {
        triggerError(error);
      } finally {
        setLoading(false);
      }
    },
    [forgotPasswordControllerRequest, navigate, triggerError],
  );

  useEffect(() => {
    return () => forgotPasswordControllerAbort();
  }, [forgotPasswordControllerAbort]);

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
