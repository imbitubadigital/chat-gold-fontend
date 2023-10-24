import { useCallback, useEffect, useState } from 'react';

import { getRoomsRequest } from '@/services/http/room';
import { RoomProps } from '@/services/http/room/types';
import { useErrorHandling } from '../error-handling';
import { useControlledRequest } from '../controller-request';

export const useRoom = () => {
  const { triggerError } = useErrorHandling();
  const [getRoomsControllerRequest, getRoomsControllerAbort] =
    useControlledRequest(getRoomsRequest);

  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState<RoomProps[]>([]);

  const getRooms = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await getRoomsControllerRequest();
      setRooms(response);
    } catch (error) {
      triggerError(error);
    } finally {
      setLoading(false);
    }
  }, [getRoomsControllerRequest, triggerError]);

  useEffect(() => {
    getRooms();
  }, [getRooms]);

  useEffect(() => {
    return () => {
      getRoomsControllerAbort();
    };
  }, [getRoomsControllerAbort]);

  return {
    loading,
    rooms,
  };
};
