import { useMemo } from 'react';
import * as S from './styles';
import { ItemMessageProps } from './types';
import { format } from 'date-fns';

export function ItemMessage({ message, type }: ItemMessageProps) {
  const date = useMemo(() => {
    return format(new Date(message.createdAt), "dd/MM 'às' hh:mm'h'");
  }, [message.createdAt]);
  return (
    <S.Container $type={type}>
      <S.Content $type={type}>
        <S.Header $type={type}>
          <span>
            {type === 'me' ? 'Você' : message.user?.firstName}{' '}
            {message.type === 'normal' ? ' disse:' : ':'}
          </span>
          <small>{date}</small>
        </S.Header>
        <p>{message.content}</p>
      </S.Content>
    </S.Container>
  );
}
