import { MessageProps } from '@/services/http/message/types';
import { Socket } from 'socket.io-client';

export type ChatProps = {
  message: MessageProps | null;
  userId: string;
  roomId: string;
  socket: Socket;
  enterRoom: boolean;
};
