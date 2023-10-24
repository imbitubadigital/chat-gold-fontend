import { UserProps } from '../auth/types';

export type JoinedRoomProps = {
  id: string;
  roomId: string;
  socketId: string;
  user: UserProps;
};
export type RoomProps = {
  id: string;
  name: string;
  createdAt: string;
  joinedRoom: JoinedRoomProps[] | [];
};
