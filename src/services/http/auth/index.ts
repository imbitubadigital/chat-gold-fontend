import { api } from '@/services/api';
import {
  CreateAccountsProps,
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
