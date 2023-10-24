import { api } from '@/services/api';
import {
  CodeValidationProps,
  CreateAccountsProps,
  CreatePasswordProps,
  CredentialsProps,
  ResponseCreateAccountsProps,
  SessionProps,
} from './types';

export async function signInRequest(
  credential: CredentialsProps,
  signal?: AbortSignal,
): Promise<SessionProps> {
  const { data } = await api.post<SessionProps>(
    '/auth-user/session',
    credential,
    { signal },
  );

  return data;
}
export async function signUpRequest(
  payload: CreateAccountsProps,
  signal?: AbortSignal,
): Promise<ResponseCreateAccountsProps> {
  const { data } = await api.post<ResponseCreateAccountsProps>(
    '/users/register',
    payload,
    { signal },
  );

  return data;
}

export async function codeValidationRequest(
  validationCode: CodeValidationProps,
  signal?: AbortSignal,
): Promise<void> {
  await api.post('/passwords/code-verification', validationCode, { signal });
}

export async function forgotPasswordRequest(
  email: string,
  signal?: AbortSignal,
): Promise<void> {
  await api.post('/passwords/forgot-password', { email }, { signal });
}

export async function createPasswordRequest(
  payload: CreatePasswordProps,
  signal?: AbortSignal,
): Promise<SessionProps> {
  const { data } = await api.post<SessionProps>(
    '/passwords/change-password',
    payload,
    { signal },
  );

  return data;
}
