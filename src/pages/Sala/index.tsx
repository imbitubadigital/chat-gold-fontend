import * as S from './styles';
import { DashboardTemplate } from '@/components/templates/Dashboard';
import { useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import io from 'socket.io-client';
export function Sala() {
  const [searchParams] = useSearchParams();
  const socket = useMemo(() => {
    return io('http://localhost:3333', {
      transports: ['websocket'],
    });
  }, []);
  const room = searchParams.get('room');

  const socketID = useRef<string | null>(null);

  useEffect(() => {
    socket.on('connect', () => {
      socketID.current = socket.id;
      console.log('conectou', socket.id);
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
      socket.off('joined2');
    };
  }, [socket]);
  function handleTeste() {
    const user2 = {
      userId: '123',
      userName: 'Antonio',
      socketId: 'aaa',
    };
    const message = {
      user: user2,
      timeSent: new Date().toDateString(),
      message: 'esta é a mensagem',
      roomName: room,
    };

    socket.emit('chat2', message);
    console.log('foi aqui');
  }
  useEffect(() => {
    if (room) {
      const user = {
        userId: '123',
        userName: 'Antonio',
        socketId: 'aaa',
      };

      socket.emit('joined', { room, user });
    }
  }, [room, socket, socketID]);
  return (
    <DashboardTemplate>
      <S.Container>
        <h1>Sala = {room}</h1>
        <button type="button" onClick={handleTeste}>
          Testar
        </button>
      </S.Container>
    </DashboardTemplate>
  );
}
