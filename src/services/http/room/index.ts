import { api } from '@/services/api';
import { RoomProps } from './types';

export async function getRoomsRequest(
  signal?: AbortSignal,
): Promise<RoomProps[]> {
  const { data } = await api.get<RoomProps[]>(
    '/rooms',

    { signal },
  );

  return data;
}
