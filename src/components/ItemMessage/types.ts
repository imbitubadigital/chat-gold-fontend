import { MessageProps } from '@/services/http/message/types';

export type ItemMessageProps = {
  message: MessageProps;
  type: 'me' | 'members';
};
