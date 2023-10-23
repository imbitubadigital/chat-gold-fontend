import { api } from '@/services/api';
import { CredentialsProps, SessionProps } from './types';

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
