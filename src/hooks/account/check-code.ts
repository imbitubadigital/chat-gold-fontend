import { useToast } from '@/contexts/toast';
import { useErrorHandling } from '../error-handling';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useControlledRequest } from '../controller-request';

import { useNavigate } from 'react-router-dom';
import { codeValidationRequest } from '@/services/http/auth';
import { useForgotPassword } from './forgot-password';
export type LocationProps = {
  email: string;
  firstName: string;
  isCreate: boolean;
};
export const useCheckCode = ({ email, firstName, isCreate }: LocationProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const intervalRef: any = useRef();
  const navigate = useNavigate();
  const { triggerError } = useErrorHandling();
  const { addToast } = useToast();

  const [codeValidationControllerRequest, codeValidationControllerAbort] =
    useControlledRequest(codeValidationRequest);

  const { forgotPassword } = useForgotPassword();

  const [timer, setTimer] = useState(30);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const decreaseTimer = () =>
    setTimer((prev: number) => (prev > 0 ? prev - 1 : 0));

  useEffect(() => {
    intervalRef.current = setInterval(decreaseTimer, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const settingCode = useCallback(async (value: string) => {
    setCode(value);
  }, []);

  const handleResendCode = useCallback(async () => {
    if (timer > 0) {
      return true;
    }
    setTimer(30);
    await forgotPassword({ email });

    setTimer(30);
    addToast({
      type: 'success',
      message: 'Reenviamos um novo código para você',
    });
  }, [addToast, email, forgotPassword, timer]);

  const codeVerification = useCallback(async () => {
    try {
      if (code.length !== 4) {
        return setError('Informe o código corretamente');
      }

      setError('');
      await codeValidationControllerRequest({
        code: Number(code),
        email,
      });

      navigate('/cadastrar-senha', {
        state: { email, firstName, code, isCreate },
      });
    } catch (error) {
      triggerError(error);
      return false;
    } finally {
      setLoading(false);
    }
  }, [
    code,
    codeValidationControllerRequest,
    email,
    firstName,
    isCreate,
    navigate,
    triggerError,
  ]);

  useEffect(() => {
    return () => codeValidationControllerAbort();
  }, [codeValidationControllerAbort]);

  return {
    handleResendCode,
    error,
    loading,
    settingCode,
    codeVerification,
    code,
    timer,
  };
};
