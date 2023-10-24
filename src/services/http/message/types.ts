import { UserProps } from '../auth/types';

export type MessageProps = {
  id: number;
  content: string;
  type: string;
  userId: string;
  roomId: string;
  createdAt: Date;
  updatedAt: Date;
  user?: UserProps;
  // room?: RoomEntity;
};
