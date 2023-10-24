import { useAuthStore } from '@/store/auth';
import * as S from './styles';
import { DashboardTemplate } from '@/components/templates/Dashboard';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Chat } from '@/components/Chat';
import { Button } from '@/components/Button';
import { MessageProps } from '@/services/http/message/types';

import { useSocket } from '@/contexts/socket';
export function Room() {
  const [searchParams] = useSearchParams();

  const user = useAuthStore((store) => store.state.user);
  const { socket } = useSocket();

  const [enterRoom, setEnterRoom] = useState(false);
  const [message, setMessage] = useState<MessageProps | null>(null);
  const room = searchParams.get('name');
  const roomId = searchParams.get('id');

  const socketID = useRef<string | null>(null);

  function handleJoinRoom() {
    socket.emit('join_room', { userId: user.id, roomId });
    console.log('entrou criar');
  }

  function handleLeaveRoom() {
    socket.emit('leaveRoom', {
      userId: user.id,
      roomId,
      type: 'leave',
      content: 'Saiu da sala',
    });
    setEnterRoom(false);
  }

  useEffect(() => {
    setMessage(null);
    setEnterRoom(false);
  }, [roomId]);

  useEffect(() => {
    socket.on('connect', () => {
      socketID.current = socket.id;
      console.log('conectou', socket.id);
    });

    socket.on('join_room', (payload) => {
      setEnterRoom(true);
      setMessage(payload);
    });
    socket.on('joined2', (payload) => {
      console.log('joined2', payload);
    });

    socket.on('disconnect', () => {
      console.log('Desconectado');
    });

    socket.on('connect_error', (error) => {
      console.log('Erro de conexão:', error);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('connect_error');
      socket.off('join_room');
      socket.off('joined2');
    };
  }, [socket]);

  return (
    <DashboardTemplate>
      <S.Container>
        <S.Header>
          <h2>Sala: {room}</h2>
          <div>
            <Button
              title={!enterRoom ? 'Entrar na sala' : 'Sair da sala'}
              onClick={!enterRoom ? handleJoinRoom : handleLeaveRoom}
              mode={!enterRoom ? 'primary' : 'tertiary'}
            />
          </div>
        </S.Header>

        <Chat
          message={message}
          userId={user.id}
          socket={socket}
          roomId={roomId || ''}
          enterRoom={enterRoom}
        />
      </S.Container>
    </DashboardTemplate>
  );
}
